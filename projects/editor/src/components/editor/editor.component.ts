import {AsyncPipe, DOCUMENT, NgIf, NgTemplateOutlet} from '@angular/common';
import type {OnDestroy} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    EventEmitter,
    inject,
    Input,
    NgZone,
    Output,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {TuiBooleanHandler, TuiValueTransformer} from '@taiga-ui/cdk';
import {
    TUI_FALSE_HANDLER,
    TUI_TRUE_HANDLER,
    TuiActiveZone,
    tuiAutoFocusOptionsProvider,
    TuiControl,
    tuiZonefree,
} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_DEFAULT_DURATION,
    TuiAppearance,
    TuiDropdown,
    TuiScrollbar,
    TuiSurface,
} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';
import {delay, fromEvent, throttleTime} from 'rxjs';

import type {AbstractTuiEditor} from '../../abstract/editor-adapter.abstract';
import {TUI_EDITOR_DEFAULT_TOOLS} from '../../constants/default-editor-tools';
import {TUI_EDITOR_RESIZE_EVENT} from '../../constants/default-events';
import {TuiTiptapEditor} from '../../directives/tiptap-editor/tiptap-editor.directive';
import {TuiTiptapEditorService} from '../../directives/tiptap-editor/tiptap-editor.service';
import type {TuiEditorTool} from '../../enums/editor-tool';
import type {TuiEditorAttachedFile} from '../../interfaces/attached';
import {TUI_EDITOR_OPTIONS} from '../../tokens/editor-options';
import {TUI_EDITOR_VALUE_TRANSFORMER} from '../../tokens/editor-value-transformer';
import {TIPTAP_EDITOR} from '../../tokens/tiptap-editor';
import type {TuiSelectionState} from '../../utils/get-selection-state';
import {tuiGetSelectionState} from '../../utils/get-selection-state';
import {tuiIsSafeLinkRange} from '../../utils/safe-link-range';
import {TuiEditLink} from '../edit-link/edit-link.component';
import {TuiEditorSocket} from '../editor-socket/editor-socket.component';
import {TuiToolbar} from '../toolbar/toolbar.component';
import {TuiEditorDropdownToolbar} from './dropdown/dropdown-toolbar.directive';
import {TUI_EDITOR_PROVIDERS} from './editor.providers';
import {TuiEditorPortal} from './portal/editor-portal.directive';
import {TuiEditorPortalHost} from './portal/editor-portal-host.component';

@Component({
    standalone: true,
    selector: 'tui-editor',
    imports: [
        TuiCardLarge,
        AsyncPipe,
        NgIf,
        TuiActiveZone,
        TuiScrollbar,
        TuiDropdown,
        TuiEditLink,
        TuiEditorPortalHost,
        TuiEditorPortal,
        TuiTiptapEditor,
        TuiEditorSocket,
        TuiToolbar,
        NgTemplateOutlet,
        TuiEditorDropdownToolbar,
        TuiSurface,
        TuiAppearance,
    ],
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAutoFocusOptionsProvider({delay: TUI_ANIMATIONS_DEFAULT_DURATION}),
        TUI_EDITOR_PROVIDERS,
    ],
})
export class TuiEditor extends TuiControl<string> implements OnDestroy {
    @ViewChild(TuiTiptapEditor, {read: ElementRef})
    private readonly el?: ElementRef<HTMLElement>;

    private readonly contentProcessor = inject<
        TuiValueTransformer<string | null, string | null>
    >(TUI_EDITOR_VALUE_TRANSFORMER, {optional: true});

    private readonly doc = inject(DOCUMENT);
    private readonly zone = inject(NgZone);
    private readonly destroy$ = inject(DestroyRef);

    @ViewChild(TuiToolbar)
    protected readonly toolbar?: TuiToolbar;

    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly editorLoaded$ = inject(TIPTAP_EDITOR);

    protected sub = this.editorLoaded$
        .pipe(delay(0), takeUntilDestroyed())
        .subscribe(() => {
            this.hasMentionPlugin = !!this.editorService
                .getOriginTiptapEditor()
                .extensionManager.extensions.find(
                    extension => extension.name === 'mention',
                );

            this.patchContentEditableElement();
            this.listenResizeEvents();
        });

    /**
     * prevent recursive changes
     * between control and tiptap editor
     */
    protected firstInitialValue = '';

    @Input()
    public exampleText = '';

    @Input()
    public floatingToolbar = false;

    @Input()
    public tools: readonly TuiEditorTool[] = TUI_EDITOR_DEFAULT_TOOLS;

    @Output()
    public readonly fileAttached = new EventEmitter<Array<TuiEditorAttachedFile<any>>>();

    public hasMentionPlugin = false;
    public focused = false;
    public readonly editorService = inject(TuiTiptapEditorService);

    public get editor(): AbstractTuiEditor | null {
        return this.editorService.getOriginTiptapEditor() ? this.editorService : null;
    }

    public get nativeFocusableElement(): HTMLDivElement | null {
        return (
            this.el?.nativeElement?.querySelector('[contenteditable].ProseMirror') || null
        );
    }

    public get computedFocused(): boolean {
        return (this.editor?.isFocused || this.focused) ?? false;
    }

    public get selectionState(): TuiSelectionState {
        return tuiGetSelectionState(this.editor);
    }

    public get mentionSuggestions(): string {
        const before = this.selectionState.before;

        return before?.startsWith('@') && before.length > 1
            ? before?.replace('@', '') || ''
            : '';
    }

    public get isMentionMode(): boolean {
        return this.hasMentionPlugin && this.selectionState.before?.startsWith('@');
    }

    public override writeValue(value: string | null): void {
        const processed = this.contentProcessor?.fromControlValue(value) ?? value;

        super.writeValue(processed);

        if (this.firstInitialValue !== processed) {
            this.firstInitialValue = processed ?? '';
        }

        if (!this.focused) {
            this.doc.getSelection()?.removeAllRanges();
        }
    }

    public ngOnDestroy(): void {
        this.editor?.destroy();
    }

    protected get dropdownSelectionHandler(): TuiBooleanHandler<Range> {
        if (this.floatingToolbar) {
            return TUI_TRUE_HANDLER;
        }

        return this.focused ? this.openDropdownWhen : TUI_FALSE_HANDLER;
    }

    protected get hasExampleText(): boolean {
        return !!this.exampleText && this.computedFocused && !this.control.value;
    }

    protected get isLinkSelected(): boolean {
        const node = this.doc.getSelection()?.focusNode?.parentNode;

        return (
            node?.nodeName.toLowerCase() === 'a' ||
            node?.parentNode?.nodeName.toLowerCase() === 'a' ||
            !!node?.parentElement?.closest('tui-edit-link') ||
            !!node?.parentElement?.closest('tui-dropdown')
        );
    }

    protected onModelChange(value: string | null): void {
        const processed = this.contentProcessor?.toControlValue(value) ?? value;

        if (processed !== this.control.value) {
            this.onChange(processed ?? '');
        }
    }

    protected onActiveZone(focused: boolean): void {
        this.focused = focused;
    }

    protected addAnchor(anchor: string): void {
        this.editor?.setAnchor(anchor);
    }

    protected removeAnchor(): void {
        this.editor?.removeAnchor();
    }

    protected addLink(link: string): void {
        this.editor?.selectClosest();
        this.editor?.setLink(link);
    }

    protected removeLink(): void {
        this.editor?.unsetLink();
    }

    protected focus(event: any): void {
        if (this.nativeFocusableElement?.contains(event.target as Node | null)) {
            return;
        }

        event.preventDefault();
        this.nativeFocusableElement?.focus();
    }

    private get focusNode(): Node | null {
        return this.doc.getSelection()?.focusNode ?? null;
    }

    private get currentFocusedNodeIsImageAnchor(): boolean {
        return (
            this.focusNode?.nodeName === 'A' &&
            ['IMG', 'TUI-IMAGE-EDITOR'].includes(this.focusNode?.childNodes[0]?.nodeName)
        );
    }

    private readonly openDropdownWhen = (range: Range): boolean =>
        this.currentFocusedNodeIsTextAnchor(range) ||
        this.currentFocusedNodeIsImageAnchor ||
        this.isMentionMode;

    /**
     * @description:
     * The commonAncestorContainer not always relevant node element in Range,
     * so the focusNode is used for the correct behaviour from the selection,
     * which is the actual element at the moment
     */
    private currentFocusedNodeIsTextAnchor(range: Range): boolean {
        return (
            !!range.startContainer.parentElement
                ?.closest('a')
                ?.contains(this.focusNode) && tuiIsSafeLinkRange(range)
        );
    }

    private patchContentEditableElement(): void {
        this.nativeFocusableElement?.setAttribute('translate', this.options.translate);
        this.nativeFocusableElement?.setAttribute(
            'spellcheck',
            String(this.options.spellcheck),
        );
    }

    private listenResizeEvents(): void {
        this.el?.nativeElement &&
            fromEvent(this.el?.nativeElement, TUI_EDITOR_RESIZE_EVENT)
                .pipe(
                    throttleTime(0),
                    tuiZonefree(this.zone),
                    takeUntilDestroyed(this.destroy$),
                )
                .subscribe(() =>
                    this.editorService.valueChange$.next(this.editorService.getHTML()),
                );
    }
}
