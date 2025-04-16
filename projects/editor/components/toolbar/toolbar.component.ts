/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {AsyncPipe, NgIf} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    EventEmitter,
    inject,
    Input,
    Output,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_QUERY, tuiIsNativeFocusedIn, TuiItem} from '@taiga-ui/cdk';
import {TuiButton, TuiHint, tuiHintOptionsProvider} from '@taiga-ui/core';
import type {
    AbstractTuiEditor,
    TuiEditorAttachedFile,
    TuiEditorOptions,
    TuiEditorToolType,
} from '@taiga-ui/editor/common';
import {
    TUI_ATTACH_FILES_LOADER,
    TUI_ATTACH_FILES_OPTIONS,
    TUI_EDITOR_DEFAULT_TOOLS,
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TUI_IMAGE_LOADER,
    TuiEditorTool,
} from '@taiga-ui/editor/common';
import {
    TuiAlignContent,
    TuiCode,
    TuiDetails,
    TuiDetailsRemove,
    TuiEditorGroupTool,
    TuiFontSize,
    TuiFontStyle,
    TuiHighlightColor,
    TuiListConfigs,
    TuiTableCellColor,
    TuiTableCreate,
    TuiTableMergeCells,
    TuiTableRowColumnManager,
    TuiTextColor,
} from '@taiga-ui/editor/components/toolbar-tools';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {tuiGetCurrentWordBounds} from '@taiga-ui/editor/utils';
import {take} from 'rxjs';

import {TuiToolbarNavigationManager} from './toolbar-navigation-manager.directive';

@Component({
    standalone: true,
    selector: 'tui-toolbar',
    imports: [
        AsyncPipe,
        NgIf,
        TuiAlignContent,
        TuiButton,
        TuiCode,
        TuiDetails,
        TuiDetailsRemove,
        TuiEditorGroupTool,
        TuiFontSize,
        TuiFontStyle,
        TuiHighlightColor,
        TuiHint,
        TuiItem,
        TuiListConfigs,
        TuiTableCellColor,
        TuiTableCreate,
        TuiTableMergeCells,
        TuiTableRowColumnManager,
        TuiTextColor,
        TuiToolbarNavigationManager,
    ],
    templateUrl: './toolbar.template.html',
    styleUrls: ['./toolbar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiHintOptionsProvider({
            direction: ['top-left', 'top', 'right'],
        }),
    ],
    host: {
        role: 'toolbar',
        '[class._disabled]': 'disabled',
        '(mousedown)': 'onMouseDown($event, $event.target)',
    },
})
export class TuiToolbar {
    @ViewChildren('dropdown', {read: ElementRef})
    private readonly dropdowns: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @ViewChild(TuiToolbarNavigationManager)
    private readonly navigationManager?: TuiToolbarNavigationManager;

    private readonly filesLoader = inject(TUI_ATTACH_FILES_LOADER, {optional: true});
    private readonly destroyRef = inject(DestroyRef);
    private readonly imageLoader = inject(TUI_IMAGE_LOADER);
    private readonly options = inject(TUI_EDITOR_OPTIONS);

    protected readonly editorTool: typeof TuiEditorTool = TuiEditorTool;
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly attachOptions = inject(TUI_ATTACH_FILES_OPTIONS);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected toolsSet = new Set<TuiEditorToolType>(TUI_EDITOR_DEFAULT_TOOLS);

    @Input('editor')
    public inputEditor: AbstractTuiEditor | null = null;

    @Input()
    public colors: ReadonlyMap<string, string> = this.options.colors;

    @Input()
    public disabled = false;

    @Output()
    public readonly linkAdded = new EventEmitter<string>();

    @Output()
    public readonly texClicked = new EventEmitter<void>();

    @Output()
    public readonly fileAttached = new EventEmitter<TuiEditorAttachedFile[]>();

    public readonly el: HTMLElement | null =
        inject(ElementRef, {optional: true})?.nativeElement ?? null;

    @Input()
    public set tools(value: Set<TuiEditorToolType> | readonly TuiEditorToolType[]) {
        this.toolsSet = new Set(value);
    }

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.inputEditor;
    }

    protected get icons(): TuiEditorOptions['icons'] {
        return this.options.icons;
    }

    protected get focused(): boolean {
        return (
            tuiIsNativeFocusedIn(this.el) ||
            !!this.dropdowns.find(({nativeElement}) =>
                tuiIsNativeFocusedIn(nativeElement),
            )
        );
    }

    protected get focusable(): boolean {
        return !this.focused && !this.disabled;
    }

    protected get unorderedList(): boolean {
        return this.editor?.isActive('bulletList') ?? false;
    }

    protected get orderedList(): boolean {
        return this.editor?.isActive('orderedList') ?? false;
    }

    protected get blockquote(): boolean {
        return this.editor?.isActive('blockquote') ?? false;
    }

    protected get a(): boolean {
        return this.editor?.isActive('link') ?? false;
    }

    protected get jumpAnchor(): boolean {
        return this.editor?.isActive('jumpAnchor') ?? false;
    }

    protected get undoDisabled(): boolean {
        return this.editor?.undoDisabled() ?? false;
    }

    protected get redoDisabled(): boolean {
        return this.editor?.redoDisabled() ?? false;
    }

    protected get subscript(): boolean {
        return this.editor?.isActive('subscript') ?? false;
    }

    protected get superscript(): boolean {
        return this.editor?.isActive('superscript') ?? false;
    }

    protected get formatEnabled(): boolean {
        return (
            this.enabled(TuiEditorTool.Bold) ||
            this.enabled(TuiEditorTool.Italic) ||
            this.enabled(TuiEditorTool.Underline) ||
            this.enabled(TuiEditorTool.Strikethrough)
        );
    }

    protected get firstBigBlockEnabled(): boolean {
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

    protected get secondBigBlockEnabled(): boolean {
        return (
            this.enabled(TuiEditorTool.Code) ||
            this.enabled(TuiEditorTool.Tex) ||
            this.enabled(TuiEditorTool.Img) ||
            this.enabled(TuiEditorTool.HR)
        );
    }

    protected onMouseDown(event: MouseEvent, target: HTMLElement): void {
        if (target.closest('button')) {
            return;
        }

        event.preventDefault();
        this.editor?.focus();
    }

    protected onBottomFocus(): void {
        this.focusLast();
    }

    protected onTopFocus(): void {
        this.focusFirst();
    }

    protected onImage(input: HTMLInputElement): void {
        const file = input.files?.[0];

        input.value = '';

        if (!file) {
            return;
        }

        this.imageLoader(file)
            .pipe(take(1), takeUntilDestroyed(this.destroyRef))
            .subscribe((image) => this.addImage(image));
    }

    protected onAttach(input: HTMLInputElement): void {
        const files = Array.from(input.files || []);

        input.value = '';

        if (!files) {
            return;
        }

        if (ngDevMode) {
            console.assert(
                !!this.filesLoader,
                'Please provide TUI_ATTACH_FILES_LOADER, more: https://taiga-family.github.io/editor/starter-kit/Options',
            );
        }

        this.filesLoader?.(files)
            .pipe(take(1), takeUntilDestroyed(this.destroyRef))
            .subscribe((attachedFiles) => this.fileAttached.emit(attachedFiles));
    }

    protected onTeX(): void {
        this.texClicked.emit();
    }

    protected onLink(url?: string): void {
        this.editor?.takeSelectionSnapshot();

        if (url === '#') {
            const range = this.editor?.getSelectionSnapshot();
            const editor = this.editor?.getOriginTiptapEditor();
            const {from = range?.anchor} = editor ? tuiGetCurrentWordBounds(editor) : {};

            this.editor?.setAnchor('');
            this.editor?.getOriginTiptapEditor()?.commands.focus((from ?? 0) + 1);
        } else {
            this.editor?.toggleLink(url ?? '');
        }
    }

    protected enabled(tool: TuiEditorToolType): boolean {
        return this.toolsSet.has(tool);
    }

    protected undo(): void {
        this.editor?.undo();
    }

    protected redo(): void {
        this.editor?.redo();
    }

    protected insertHorizontalRule(): void {
        this.editor?.setHorizontalRule();
    }

    protected removeFormat(): void {
        this.editor?.removeFormat();
    }

    protected toggleOrderedList(): void {
        this.editor?.toggleOrderedList();
    }

    protected toggleQuote(): void {
        this.editor?.toggleBlockquote();
    }

    protected toggleSubscript(): void {
        this.editor?.toggleSubscript();
    }

    protected toggleSuperscript(): void {
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
