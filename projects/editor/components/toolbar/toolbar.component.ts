import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    inject,
    Input,
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
    standalone: true,
    selector: 'tui-toolbar',
    imports: [
        NgIf,
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
    host: {
        tuiToolbar: '',
    },
})
export class TuiToolbar {
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly tool: typeof TuiEditorTool = TuiEditorTool;
    protected toolsSet = new Set<TuiEditorToolType>(TUI_EDITOR_DEFAULT_TOOLS);

    @Input('editor')
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });

    /**
     * @deprecated use provideTuiEditorOptions({ textColors, backgroundColors })
     */
    @Input()
    public colors: ReadonlyMap<string, string> = this.options.colors;

    /**
     * @deprecated
     */
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
        return this.toolsSet.has(tool);
    }
}
