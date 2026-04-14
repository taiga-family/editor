import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiAddRowTableButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiAddRowTableButtonTool}
 */
@Component({
    selector: 'tui-table-row-column-manager,tui-table-row-column-manager-tool',
    imports: [TuiAddRowTableButtonTool],
    template: `
        <button
            tuiAddRowTableTool
            [editor]="editor()"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableRowColumnManagerTool {
    public readonly editor = input<AbstractTuiEditor | null>(
        inject(TuiTiptapEditorService, {optional: true}),
    );
}

/**
 * @deprecated use {@link TuiAddRowTableButtonTool}
 */
export const TuiTableRowColumnManager = TuiTableRowColumnManagerTool;
