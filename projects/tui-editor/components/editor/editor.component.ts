import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    NgZone,
    OnDestroy,
    Optional,
    Output,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    AbstractTuiValueTransformer,
    ALWAYS_FALSE_HANDLER,
    ALWAYS_TRUE_HANDLER,
    tuiAsFocusableItemAccessor,
    tuiAutoFocusOptionsProvider,
    TuiBooleanHandler,
    TuiFocusableElementAccessor,
    TuiStringHandler,
    tuiZonefree,
} from '@taiga-ui/cdk';
import {TUI_ANIMATIONS_DEFAULT_DURATION} from '@taiga-ui/core';
import {AbstractTuiEditor} from '@tbank/tui-editor/abstract';
import {TuiToolbarComponent} from '@tbank/tui-editor/components/toolbar';
import {defaultEditorTools, TUI_EDITOR_RESIZE_EVENT} from '@tbank/tui-editor/constants';
import {
    TuiTiptapEditorDirective,
    TuiTiptapEditorService,
} from '@tbank/tui-editor/directives';
import {TuiEditorTool} from '@tbank/tui-editor/enums';
import {TuiEditorAttachedFile} from '@tbank/tui-editor/interfaces';
import {
    TIPTAP_EDITOR,
    TUI_EDITOR_CONTENT_PROCESSOR,
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_VALUE_TRANSFORMER,
    TuiEditorOptions,
} from '@tbank/tui-editor/tokens';
import {
    tuiGetSelectionState,
    tuiIsSafeLinkRange,
    TuiSelectionState,
} from '@tbank/tui-editor/utils';
import {Editor} from '@tiptap/core';
import {fromEvent, Observable} from 'rxjs';
import {delay, takeUntil, throttleTime} from 'rxjs/operators';

import {TUI_EDITOR_PROVIDERS} from './editor.providers';

@Component({
    selector: 'tui-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiEditorComponent),
        tuiAutoFocusOptionsProvider({delay: TUI_ANIMATIONS_DEFAULT_DURATION}),
        TUI_EDITOR_PROVIDERS,
    ],
})
export class TuiEditorComponent
    extends AbstractTuiControl<string>
    implements OnDestroy, TuiFocusableElementAccessor
{
    @ViewChild(TuiTiptapEditorDirective, {read: ElementRef})
    private readonly el?: ElementRef<HTMLElement>;

    @Input()
    exampleText = '';

    @Input()
    tools: readonly TuiEditorTool[] = defaultEditorTools;

    @Input()
    floatingToolbar = false;

    @Output()
    readonly fileAttached = new EventEmitter<Array<TuiEditorAttachedFile<any>>>();

    @ViewChild(TuiToolbarComponent)
    readonly toolbar?: TuiToolbarComponent;

    hasMentionPlugin = false;
    focused = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(TIPTAP_EDITOR) readonly editorLoaded$: Observable<Editor | null>,
        @Inject(TuiTiptapEditorService) readonly editorService: AbstractTuiEditor,
        @Inject(TUI_EDITOR_CONTENT_PROCESSOR)
        private readonly contentProcessor: TuiStringHandler<string>,
        @Inject(DOCUMENT)
        private readonly doc: Document,
        @Optional()
        @Inject(TUI_EDITOR_VALUE_TRANSFORMER)
        transformer: AbstractTuiValueTransformer<string> | null,
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Inject(NgZone) private readonly zone: NgZone,
    ) {
        super(control, cdr, transformer);

        this.editorLoaded$.pipe(delay(0), takeUntil(this.destroy$)).subscribe(() => {
            this.hasMentionPlugin = !!this.editorService
                .getOriginTiptapEditor()
                .extensionManager.extensions.find(
                    extension => extension.name === 'mention',
                );

            this.patchContentEditableElement();
            this.listenResizeEvents();
        });
    }

    get nativeFocusableElement(): HTMLDivElement | null {
        return this.computedDisabled
            ? null
            : this.el?.nativeElement?.querySelector('[contenteditable].ProseMirror') ||
                  null;
    }

    get dropdownSelectionHandler(): TuiBooleanHandler<Range> {
        if (this.floatingToolbar) {
            return ALWAYS_TRUE_HANDLER;
        }

        return this.focused ? this.openDropdownWhen : ALWAYS_FALSE_HANDLER;
    }

    get editor(): AbstractTuiEditor | null {
        return this.editorService.getOriginTiptapEditor() ? this.editorService : null;
    }

    get placeholderRaised(): boolean {
        return (this.computedFocused && !this.readOnly) || this.hasValue;
    }

    get hasExampleText(): boolean {
        return (
            !!this.exampleText && this.computedFocused && !this.hasValue && !this.readOnly
        );
    }

    get isLinkSelected(): boolean {
        const focusElement = this.doc.getSelection()?.focusNode;
        const parentFocusElement = focusElement?.parentNode;

        return (
            parentFocusElement?.nodeName.toLowerCase() === 'a' ||
            parentFocusElement?.parentNode?.nodeName.toLowerCase() === 'a' ||
            focusElement?.nodeName.toLowerCase() === 'a' ||
            !!parentFocusElement?.parentElement?.closest('tui-edit-link')
        );
    }

    get mentionSuggestions(): string {
        const before = this.selectionState.before;

        return before?.startsWith('@') && before.length > 1
            ? before?.replace('@', '') || ''
            : '';
    }

    get isMentionMode(): boolean {
        return this.hasMentionPlugin && this.selectionState.before?.startsWith('@');
    }

    override writeValue(value: string | null): void {
        if (value === this.value) {
            return;
        }

        const processed = this.contentProcessor(value || '');

        super.writeValue(processed);

        if (processed !== value) {
            this.control?.setValue(processed, {
                onlySelf: false,
                emitEvent: false,
                emitModelToViewChange: false,
                emitViewToModelChange: false,
            });
        }

        if (!this.focused) {
            this.doc.getSelection()?.removeAllRanges();
        }
    }

    onActiveZone(focused: boolean): void {
        this.focused = focused;
        this.updateFocused(focused);
        this.control?.updateValueAndValidity();
    }

    onModelChange(value: string): void {
        this.value = value;
    }

    addAnchor(anchor: string): void {
        this.editor?.setAnchor(anchor);
    }

    removeAnchor(): void {
        this.editor?.removeAnchor();
    }

    addLink(link: string): void {
        this.editor?.selectClosest();
        this.editor?.setLink(link);
    }

    removeLink(): void {
        this.editor?.unsetLink();
    }

    get selectionState(): TuiSelectionState {
        return tuiGetSelectionState(this.editor);
    }

    focus(event: MouseEvent): void {
        if (this.nativeFocusableElement?.contains(event.target as Node | null)) {
            return;
        }

        event.preventDefault();
        this.nativeFocusableElement?.focus();
    }

    override ngOnDestroy(): void {
        this.editor?.destroy();
    }

    protected getFallbackValue(): string {
        return '';
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

    private get focusNode(): Node | null {
        return this.doc.getSelection()?.focusNode ?? null;
    }

    private get hasValue(): boolean {
        return !!this.value;
    }

    private get currentFocusedNodeIsImageAnchor(): boolean {
        return (
            this.focusNode?.nodeName === 'A' &&
            ['IMG', 'TUI-IMAGE-EDITOR'].includes(this.focusNode?.childNodes[0]?.nodeName)
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
                .pipe(throttleTime(0), tuiZonefree(this.zone), takeUntil(this.destroy$))
                .subscribe(() =>
                    this.editorService.valueChange$.next(this.editorService.getHTML()),
                );
    }
}
