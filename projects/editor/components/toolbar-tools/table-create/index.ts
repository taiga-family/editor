import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {type AbstractTuiEditor, TUI_EDITOR_OPTIONS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiInsertTableButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiInsertTableButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-table-create,tui-table-create-tool',
    imports: [TuiInsertTableButtonTool],
    template: `
        <button
            tuiInsertTableTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableCreateTool {
    protected readonly options = inject(TUI_EDITOR_OPTIONS);

    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}

/**
 * @deprecated use {@link TuiInsertTableButtonTool}
 */
export const TuiTableCreate = TuiTableCreateTool;
