import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ElementRef,
    EventEmitter,
    inject,
    input,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import {
    type AbstractTuiEditor,
    TUI_EDITOR_DEFAULT_TOOLS,
    TUI_EDITOR_OPTIONS,
    type TuiEditorAttachedFile,
    TuiEditorTool,
    type TuiEditorToolType,
} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {
    TuiAddRowTableButtonTool,
    TuiAlignButtonTool,
    TuiAnchorButtonTool,
    TuiAttachButtonTool,
    TuiBlockquoteButtonTool,
    TuiClearButtonTool,
    TuiCodeButtonTool,
    TuiDetailsAddButtonTool,
    TuiDetailsRemoveButtonTool,
    TuiFontSizeButtonTool,
    TuiFontStyleButtonTool,
    TuiHighlightColorButtonTool,
    TuiHrButtonTool,
    TuiImageButtonTool,
    TuiInsertGroupButtonTool,
    TuiInsertTableButtonTool,
    TuiLinkButtonTool,
    TuiListButtonTool,
    TuiPaintButtonTool,
    TuiRedoButtonTool,
    TuiRemoveGroupButtonTool,
    TuiSubscriptButtonTool,
    TuiSuperscriptButtonTool,
    TuiTableMergeCellButtonTool,
    TuiTexButtonTool,
    TuiTextColorButtonTool,
    TuiUndoButtonTool,
} from '@taiga-ui/editor/tools';

@Component({
    selector: 'tui-toolbar',
    imports: [
        TuiAddRowTableButtonTool,
        TuiAlignButtonTool,
        TuiAnchorButtonTool,
        TuiAttachButtonTool,
        TuiBlockquoteButtonTool,
        TuiClearButtonTool,
        TuiCodeButtonTool,
        TuiDetailsAddButtonTool,
        TuiDetailsRemoveButtonTool,
        TuiFontSizeButtonTool,
        TuiFontStyleButtonTool,
        TuiHighlightColorButtonTool,
        TuiHrButtonTool,
        TuiImageButtonTool,
        TuiInsertGroupButtonTool,
        TuiInsertTableButtonTool,
        TuiLinkButtonTool,
        TuiListButtonTool,
        TuiPaintButtonTool,
        TuiRedoButtonTool,
        TuiRemoveGroupButtonTool,
        TuiSubscriptButtonTool,
        TuiSuperscriptButtonTool,
        TuiTableMergeCellButtonTool,
        TuiTexButtonTool,
        TuiTextColorButtonTool,
        TuiUndoButtonTool,
    ],
    templateUrl: './toolbar.template.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {tuiToolbar: ''},
})
export class TuiToolbar {
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly tool = TuiEditorTool;

    public readonly editor = input<AbstractTuiEditor | null>(
        inject(TuiTiptapEditorService, {optional: true}),
    );

    /**
     * @deprecated use provideTuiEditorOptions({ textColors, backgroundColors })
     */
    public readonly colors = input(this.options.colors);

    /**
     * @deprecated
     */
    public readonly disabled = input(false);

    @Output()
    public readonly linkAdded = new EventEmitter<string>();

    @Output()
    public readonly texClicked = new EventEmitter<void>();

    @Output()
    public readonly fileAttached = new EventEmitter<TuiEditorAttachedFile[]>();

    public readonly el: HTMLElement | null =
        inject(ElementRef, {optional: true})?.nativeElement ?? null;

    public readonly tools = input<Set<TuiEditorToolType> | readonly TuiEditorToolType[]>(
        new Set<TuiEditorToolType>(TUI_EDITOR_DEFAULT_TOOLS),
    );

    protected readonly toolsSet = computed(
        () => new Set<TuiEditorToolType>(this.tools()),
    );

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

    protected enabled(tool: TuiEditorToolType): boolean {
        return this.toolsSet().has(tool);
    }
}
