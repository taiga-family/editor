import {AsyncPipe, NgIf, NgTemplateOutlet} from '@angular/common';
import type {OnDestroy} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    DestroyRef,
    ElementRef,
    EventEmitter,
    inject,
    Input,
    NgZone,
    Output,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {WA_WINDOW} from '@ng-web-apis/common';
import type {TuiBooleanHandler, TuiValueTransformer} from '@taiga-ui/cdk';
import {
    TUI_FALSE_HANDLER,
    TUI_TRUE_HANDLER,
    TuiActiveZone,
    tuiAutoFocusOptionsProvider,
    TuiControl,
    tuiInjectElement,
    tuiWatch,
    tuiZonefree,
} from '@taiga-ui/cdk';
import type {TuiDropdownDirective} from '@taiga-ui/core';
import {
    TUI_ANIMATIONS_DEFAULT_DURATION,
    TUI_APPEARANCE_OPTIONS,
    TuiAppearance,
    tuiAppearanceFocus,
    tuiAppearanceMode,
    tuiAppearanceState,
    TuiDropdown,
    TuiScrollbar,
} from '@taiga-ui/core';
import type {AbstractTuiEditor, TuiEditorAttachedFile} from '@taiga-ui/editor/common';
import {
    TIPTAP_EDITOR,
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_RESIZE_EVENT,
    TUI_EDITOR_VALUE_TRANSFORMER,
} from '@taiga-ui/editor/common';
import {TuiEditLink} from '@taiga-ui/editor/components/edit-link';
import {TuiEditorSocket} from '@taiga-ui/editor/components/editor-socket';
import {TuiToolbar} from '@taiga-ui/editor/components/toolbar';
import {TuiTiptapEditor, TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import type {TuiSelectionState} from '@taiga-ui/editor/utils';
import {tuiGetSelectionState, tuiIsSafeLinkRange} from '@taiga-ui/editor/utils';
import {delay, fromEvent, map, merge, throttleTime} from 'rxjs';

import {TuiEditorDropdownToolbar} from './dropdown/dropdown-toolbar.directive';
import {TUI_EDITOR_PROVIDERS} from './editor.providers';
import {TuiEditorPortal} from './portal/editor-portal.directive';
import {TuiEditorPortalHost} from './portal/editor-portal-host.component';

@Component({
    standalone: true,
    selector: 'tui-editor',
    imports: [
        AsyncPipe,
        NgIf,
        NgTemplateOutlet,
        TuiDropdown,
        TuiEditLink,
        TuiEditorDropdownToolbar,
        TuiEditorPortal,
        TuiEditorPortalHost,
        TuiEditorSocket,
        TuiScrollbar,
        TuiTiptapEditor,
        TuiToolbar,
    ],
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TUI_EDITOR_PROVIDERS,
        {
            provide: TUI_APPEARANCE_OPTIONS,
            useValue: {appearance: 'textfield'},
        },
        tuiAutoFocusOptionsProvider({
            delay: TUI_ANIMATIONS_DEFAULT_DURATION,
            query: '[contenteditable].ProseMirror, input:not(.t-image, .t-file-upload), textarea, select',
        }),
    ],
    hostDirectives: [
        {
            directive: TuiAppearance,
            inputs: ['tuiAppearance: appearance'],
        },
        {
            directive: TuiActiveZone,
            outputs: ['tuiActiveZoneChange'],
        },
    ],
    host: {
        ngSkipHydration: 'true',
        '(tuiActiveZoneChange)': 'onActiveZone($event)',
        '(click)': 'focus($event)',
    },
})
export class TuiEditor extends TuiControl<string> implements OnDestroy {
    @ViewChild(TuiTiptapEditor, {read: ElementRef})
    private readonly el?: ElementRef<HTMLElement>;

    @ViewChild('tuiDropdown')
    private readonly tuiDropdown?: TuiDropdownDirective;

    private readonly contentProcessor = inject<
        TuiValueTransformer<string | null, string | null>
    >(TUI_EDITOR_VALUE_TRANSFORMER, {optional: true});

    private readonly doc: Document | null = inject(WA_WINDOW)?.document ?? null;
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
                ?.extensionManager.extensions.find(
                    (extension) => extension.name === 'mention',
                );

            this.patchContentEditableElement();
            this.listenResizeEvents();
        });

    /**
     * prevent recursive changes
     * between control and tiptap editor
     */
    protected firstInitialValue = '';

    /**
     * @deprecated use placeholder
     */
    @Input()
    public exampleText = this.options.exampleText;

    @Input()
    public placeholder = this.options.placeholder;

    @Input()
    public floatingToolbar = this.options.floatingToolbar;

    @Input()
    public tools = this.options.tools;

    @Output()
    public readonly fileAttached = new EventEmitter<Array<TuiEditorAttachedFile<any>>>();

    @Output()
    public readonly focusIn = new EventEmitter<void>();

    @Output()
    public readonly focusOut = new EventEmitter<void>();

    public hasMentionPlugin = false;
    public readonly hovered = toSignal(
        merge(
            fromEvent(tuiInjectElement(), 'mouseenter').pipe(map(TUI_TRUE_HANDLER)),
            fromEvent(tuiInjectElement(), 'mouseleave').pipe(map(TUI_FALSE_HANDLER)),
        ).pipe(tuiWatch(this.cdr)),
    );

    public readonly focused = tuiAppearanceFocus(false);
    public readonly m = tuiAppearanceMode(this.mode);
    public readonly s = tuiAppearanceState(
        computed(() => {
            if (this.disabled()) {
                return 'disabled';
            }

            return this.hovered() ? 'hover' : null;
        }),
    );

    public readonly editorService = inject(TuiTiptapEditorService);

    @Input('readOnly')
    public set readOnlyMode(value: boolean) {
        this.readOnly.set(value);
    }

    public get editor(): AbstractTuiEditor | null {
        return this.editorService.getOriginTiptapEditor() ? this.editorService : null;
    }

    public get nativeFocusableElement(): HTMLDivElement | null {
        return (
            this.el?.nativeElement?.querySelector('[contenteditable].ProseMirror') || null
        );
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

        if (!this.focused()) {
            this.doc?.getSelection?.()?.removeAllRanges();
        }
    }

    public ngOnDestroy(): void {
        this.editor?.destroy();
    }

    protected get dropdownSelectionHandler(): TuiBooleanHandler<Range> {
        if (!this.focused() || this.readOnly()) {
            return TUI_FALSE_HANDLER;
        }

        return this.floatingToolbar
            ? () => this.value().trim() !== ''
            : this.openDropdownWhen;
    }

    protected get hasPlaceholder(): boolean {
        return (
            !!(this.placeholder || this.exampleText) && !this.value() && !this.readOnly()
        );
    }

    protected get isLinkSelected(): boolean {
        const focusElement = this.doc?.getSelection()?.focusNode;
        const parentFocusElement = focusElement?.parentNode;

        return (
            parentFocusElement?.nodeName.toLowerCase() === 'a' ||
            parentFocusElement?.parentNode?.nodeName.toLowerCase() === 'a' ||
            focusElement?.nodeName.toLowerCase() === 'a' ||
            !!focusElement?.parentElement?.closest('a') ||
            !!focusElement?.parentElement?.closest('tui-edit-link') ||
            !!focusElement?.parentElement?.closest('tui-dropdown')
        );
    }

    protected onModelChange(value: string | null): void {
        const processed = this.contentProcessor?.toControlValue(value) ?? value;

        if (processed !== this.control.value) {
            this.onChange(processed ?? '');
        }
    }

    protected onActiveZone(focused: boolean): void {
        this.focused.set(focused);

        if (focused) {
            this.focusIn.emit();
        } else {
            this.focusOut.emit();
        }
    }

    protected addAnchor(anchor: string): void {
        this.editor?.setAnchor(anchor);
    }

    protected removeAnchor(): void {
        this.editor?.removeAnchor();
    }

    protected closeDropdown(): void {
        this.tuiDropdown?.toggle(false);
    }

    protected addLink(link: string): void {
        this.editor?.selectClosest();
        this.editor?.setLink(link);
    }

    protected removeLink(): void {
        this.editor?.unsetLink();
    }

    protected focus(event: any): void {
        const isSafeArea =
            this.nativeFocusableElement?.contains(event.target as Node | null) ||
            this.toolbar?.el?.contains(event.target as Node | null);

        if (isSafeArea) {
            return;
        }

        event.preventDefault();
        this.nativeFocusableElement?.focus();
    }

    private get focusNode(): Node | null {
        return this.doc?.getSelection?.()?.focusNode ?? null;
    }

    private get currentFocusedNodeIsImageAnchor(): boolean {
        const node = this.focusNode?.childNodes[0]?.nodeName;

        return (
            (this.focusNode?.nodeName === 'A' &&
                node &&
                ['IMG', 'TUI-IMAGE-EDITOR'].includes(node)) ||
            false
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
            this.focusNode?.nodeName === 'A' ||
            !!this.focusNode?.parentElement?.closest('tui-edit-link') ||
            (!!range.startContainer.parentElement?.closest('a') &&
                tuiIsSafeLinkRange(range))
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
        if (!this.el?.nativeElement) {
            return;
        }

        fromEvent(this.el.nativeElement, TUI_EDITOR_RESIZE_EVENT)
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
