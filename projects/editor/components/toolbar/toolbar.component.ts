import {AsyncPipe, NgIf} from '@angular/common';
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
import type {
    AbstractTuiEditor,
    TuiEditorAttachedFile,
    TuiEditorToolType,
} from '@taiga-ui/editor/common';
import {
    TUI_EDITOR_DEFAULT_TOOLS,
    TUI_EDITOR_OPTIONS,
    TuiEditorTool,
} from '@taiga-ui/editor/common';
import {
    TuiAlignContentTool,
    TuiAnchorTool,
    TuiAttachTool,
    TuiClearTool,
    TuiCodeTool,
    TuiDetailsRemoveTool,
    TuiDetailsTool,
    TuiEditorGroupTool,
    TuiFontSizeTool,
    TuiFontStyleTool,
    TuiHighlightColorTool,
    TuiHrTool,
    TuiImageTool,
    TuiLinkTool,
    TuiListConfigsTool,
    TuiQuoteTool,
    TuiRedoTool,
    TuiSubscriptTool,
    TuiSuperscriptTool,
    TuiTableCellColorTool,
    TuiTableCreateTool,
    TuiTableMergeCellsTool,
    TuiTableRowColumnManagerTool,
    TuiTextColorTool,
    TuiTexTool,
    TuiUndoTool,
} from '@taiga-ui/editor/components/toolbar-tools';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';

@Component({
    standalone: true,
    selector: 'tui-toolbar',
    imports: [
        AsyncPipe,
        NgIf,
        TuiAlignContentTool,
        TuiAnchorTool,
        TuiAttachTool,
        TuiClearTool,
        TuiCodeTool,
        TuiDetailsRemoveTool,
        TuiDetailsTool,
        TuiEditorGroupTool,
        TuiFontSizeTool,
        TuiFontStyleTool,
        TuiHighlightColorTool,
        TuiHrTool,
        TuiImageTool,
        TuiLinkTool,
        TuiListConfigsTool,
        TuiQuoteTool,
        TuiRedoTool,
        TuiSubscriptTool,
        TuiSuperscriptTool,
        TuiTableCellColorTool,
        TuiTableCreateTool,
        TuiTableMergeCellsTool,
        TuiTableRowColumnManagerTool,
        TuiTextColorTool,
        TuiTexTool,
        TuiUndoTool,
    ],
    templateUrl: './toolbar.template.html',
    styleUrls: ['./toolbar.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tuiToolbar: '',
    },
})
export class TuiToolbar {
    protected readonly tool: typeof TuiEditorTool = TuiEditorTool;
    protected toolsSet = new Set<TuiEditorToolType>(TUI_EDITOR_DEFAULT_TOOLS);

    @Input('editor')
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });

    @Input()
    public colors: ReadonlyMap<string, string> = inject(TUI_EDITOR_OPTIONS).colors;

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

    protected enabled(tool: TuiEditorToolType): boolean {
        return this.toolsSet.has(tool);
    }
}
