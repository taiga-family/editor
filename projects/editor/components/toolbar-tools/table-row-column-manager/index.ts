import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {TuiAddRowTableButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiAddRowTableButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-table-row-column-manager,tui-table-row-column-manager-tool',
    imports: [TuiAddRowTableButtonTool],
    template: `
        <button
            tuiAddRowTableTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableRowColumnManagerTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}

/**
 * @deprecated use {@link TuiAddRowTableButtonTool}
 */
export const TuiTableRowColumnManager = TuiTableRowColumnManagerTool;
