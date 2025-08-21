import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {TuiTableMergeCellButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiTableMergeCellButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-table-merge-cells,tui-table-merge-cells-tool',
    imports: [TuiTableMergeCellButtonTool],
    template: `
        <button
            tuiTableMergeCellTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableMergeCellsTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}

/**
 * @deprecated use {@link TuiTableMergeCellButtonTool}
 */
export const TuiTableMergeCells = TuiTableMergeCellsTool;
