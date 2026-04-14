import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {type AbstractTuiEditor, TUI_EDITOR_OPTIONS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiPaintButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiPaintButtonTool}
 */
@Component({
    selector: 'tui-table-cell-color,tui-table-cell-color-tool',
    imports: [TuiPaintButtonTool],
    template: `
        <button
            tuiPaintTool
            [colors]="colors()"
            [editor]="editor()"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableCellColorTool {
    private readonly options = inject(TUI_EDITOR_OPTIONS);

    public readonly colors = input(this.options.backgroundColors ?? this.options.colors);

    public readonly editor = input<AbstractTuiEditor | null>(
        inject(TuiTiptapEditorService, {optional: true}),
    );
}

/**
 * @deprecated use {@link TuiPaintButtonTool}
 */
export const TuiTableCellColor = TuiTableCellColorTool;
