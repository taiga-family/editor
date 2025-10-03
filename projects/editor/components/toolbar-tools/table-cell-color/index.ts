import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {type AbstractTuiEditor, TUI_EDITOR_OPTIONS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {TuiPaintButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiPaintButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-table-cell-color,tui-table-cell-color-tool',
    imports: [TuiPaintButtonTool],
    template: `
        <button
            tuiPaintTool
            [colors]="colors"
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableCellColorTool {
    private readonly options = inject(TUI_EDITOR_OPTIONS);

    @Input()
    public colors: ReadonlyMap<string, string> =
        this.options.backgroundColors ?? this.options.colors;

    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}

/**
 * @deprecated use {@link TuiPaintButtonTool}
 */
export const TuiTableCellColor = TuiTableCellColorTool;
