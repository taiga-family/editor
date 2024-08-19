import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Optional,
    Output,
    QueryList,
    Self,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {
    EMPTY_QUERY,
    TuiDestroyService,
    TuiHandler,
    TuiInjectionTokenType,
    tuiIsNativeFocusedIn,
} from '@taiga-ui/cdk';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {AbstractTuiEditor} from '@tinkoff/tui-editor/abstract';
import {TUI_EDITOR_DEFAULT_EDITOR_TOOLS} from '@tinkoff/tui-editor/constants';
import {TuiTiptapEditorService} from '@tinkoff/tui-editor/directives';
import {TuiEditorTool} from '@tinkoff/tui-editor/enums';
import {TuiEditorAttachedFile} from '@tinkoff/tui-editor/interfaces';
import {
    TUI_ATTACH_FILES_LOADER,
    TUI_ATTACH_FILES_OPTIONS,
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TUI_IMAGE_LOADER,
    TuiEditorOptions,
} from '@tinkoff/tui-editor/tokens';
import {Observable} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';

import {TuiToolbarNavigationManagerDirective} from './toolbar-navigation-manager.directive';

@Component({
    selector: 'tui-toolbar',
    templateUrl: './toolbar.template.html',
    styleUrls: ['./toolbar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
    host: {
        role: 'toolbar',
        '[class._disabled]': 'disabled',
    },
})
export class TuiToolbarComponent {
    @ViewChildren('dropdown', {read: ElementRef})
    private readonly dropdowns: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @ViewChild(TuiToolbarNavigationManagerDirective)
    private readonly navigationManager?: TuiToolbarNavigationManagerDirective;

    @Input()
    colors: ReadonlyMap<string, string> = this.options.colors;

    @Input('editor')
    inputEditor: AbstractTuiEditor | null = null;

    @Input()
    @HostBinding('class._disabled')
    disabled = false;

    @Output()
    readonly linkAdded = new EventEmitter<string>();

    @Output()
    readonly texClicked = new EventEmitter<void>();

    @Output()
    readonly fileAttached = new EventEmitter<TuiEditorAttachedFile[]>();

    readonly editorTool: typeof TuiEditorTool = TuiEditorTool;

    toolsSet = new Set<TuiEditorTool>(TUI_EDITOR_DEFAULT_EDITOR_TOOLS);

    @Input()
    set tools(value: readonly TuiEditorTool[]) {
        this.toolsSet = new Set(value);
    }

    constructor(
        @Optional()
        @Inject(ElementRef)
        readonly el: ElementRef<HTMLElement>,
        @Optional()
        @Inject(TuiTiptapEditorService)
        readonly injectionEditor: AbstractTuiEditor | null,
        @Inject(TUI_IMAGE_LOADER)
        private readonly imageLoader: TuiHandler<File, Observable<string>>,
        @Inject(TUI_ATTACH_FILES_OPTIONS)
        readonly attachOptions: TuiInjectionTokenType<typeof TUI_ATTACH_FILES_OPTIONS>,
        @Optional()
        @Inject(TUI_ATTACH_FILES_LOADER)
        private readonly filesLoader: TuiInjectionTokenType<
            typeof TUI_ATTACH_FILES_LOADER
        > | null,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Self()
        @Inject(TuiDestroyService)
        private readonly destroy$: TuiDestroyService,
    ) {}

    get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.inputEditor;
    }

    get focused(): boolean {
        return (
            tuiIsNativeFocusedIn(this.el.nativeElement) ||
            !!this.dropdowns.find(({nativeElement}) =>
                tuiIsNativeFocusedIn(nativeElement),
            )
        );
    }

    get focusable(): boolean {
        return !this.focused && !this.disabled;
    }

    get unorderedList(): boolean {
        return this.editor?.isActive('bulletList') ?? false;
    }

    get orderedList(): boolean {
        return this.editor?.isActive('orderedList') ?? false;
    }

    get blockquote(): boolean {
        return this.editor?.isActive('blockquote') ?? false;
    }

    get a(): boolean {
        return this.editor?.isActive('link') ?? false;
    }

    get jumpAnchor(): boolean {
        return this.editor?.isActive('jumpAnchor') ?? false;
    }

    get undoDisabled(): boolean {
        return this.editor?.undoDisabled() ?? false;
    }

    get redoDisabled(): boolean {
        return this.editor?.redoDisabled() ?? false;
    }

    get subscript(): boolean {
        return this.editor?.isActive('subscript') ?? false;
    }

    get superscript(): boolean {
        return this.editor?.isActive('superscript') ?? false;
    }

    get formatEnabled(): boolean {
        return (
            this.enabled(TuiEditorTool.Bold) ||
            this.enabled(TuiEditorTool.Italic) ||
            this.enabled(TuiEditorTool.Underline) ||
            this.enabled(TuiEditorTool.Strikethrough)
        );
    }

    get firstBigBlockEnabled(): boolean {
        return (
            this.formatEnabled ||
            this.enabled(TuiEditorTool.Align) ||
            this.enabled(TuiEditorTool.List) ||
            this.enabled(TuiEditorTool.Quote) ||
            this.enabled(TuiEditorTool.Link) ||
            this.enabled(TuiEditorTool.Anchor) ||
            this.enabled(TuiEditorTool.Attach)
        );
    }

    get secondBigBlockEnabled(): boolean {
        return (
            this.enabled(TuiEditorTool.Code) ||
            this.enabled(TuiEditorTool.Tex) ||
            this.enabled(TuiEditorTool.Img) ||
            this.enabled(TuiEditorTool.HR)
        );
    }

    @HostListener('mousedown', ['$event', '$event.target'])
    onMouseDown(event: MouseEvent, target: HTMLElement): void {
        if (target.closest('button')) {
            return;
        }

        event.preventDefault();
        this.editor?.focus();
    }

    onBottomFocus(): void {
        this.focusLast();
    }

    onTopFocus(): void {
        this.focusFirst();
    }

    onImage(input: HTMLInputElement): void {
        const file = input.files?.[0];

        input.value = '';

        if (!file) {
            return;
        }

        this.imageLoader(file)
            .pipe(take(1), takeUntil(this.destroy$))
            .subscribe(image => this.addImage(image));
    }

    onAttach(input: HTMLInputElement): void {
        const files = Array.from(input.files || []);

        input.value = '';

        if (!files) {
            return;
        }

        ngDevMode &&
            console.assert(
                !!this.filesLoader,
                'Please provide TUI_ATTACH_FILES_LOADER, more: https://taiga-family.github.io/editor/starter-kit/Options',
            );

        this.filesLoader?.(files)
            .pipe(take(1), takeUntil(this.destroy$))
            .subscribe(attachedFiles => this.fileAttached.emit(attachedFiles));
    }

    onTeX(): void {
        this.texClicked.emit();
    }

    onLink(url?: string): void {
        this.editor?.toggleLink(url ?? '');
    }

    enabled(tool: TuiEditorTool): boolean {
        return this.toolsSet.has(tool);
    }

    undo(): void {
        this.editor?.undo();
    }

    redo(): void {
        this.editor?.redo();
    }

    insertHorizontalRule(): void {
        this.editor?.setHorizontalRule();
    }

    removeFormat(): void {
        this.editor?.removeFormat();
    }

    toggleOrderedList(): void {
        this.editor?.toggleOrderedList();
    }

    toggleQuote(): void {
        this.editor?.toggleBlockquote();
    }

    toggleSubscript(): void {
        this.editor?.toggleSubscript();
    }

    toggleSuperscript(): void {
        this.editor?.toggleSuperscript();
    }

    private addImage(image: string): void {
        this.editor?.setImage(image);
    }

    private focusFirst(): void {
        const firstButton = this.navigationManager?.findFirstFocusableTool();

        if (firstButton) {
            firstButton.focus();
        }
    }

    private focusLast(): void {
        const lastButton = this.navigationManager?.findFirstFocusableTool(true);

        if (lastButton) {
            lastButton.focus();
        }
    }
}
