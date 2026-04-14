import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {type AbstractTuiEditor, TUI_EDITOR_OPTIONS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiInsertTableButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiInsertTableButtonTool}
 */
@Component({
    selector: 'tui-table-create,tui-table-create-tool',
    imports: [TuiInsertTableButtonTool],
    template: `
        <button
            tuiInsertTableTool
            [editor]="editor()"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableCreateTool {
    protected readonly options = inject(TUI_EDITOR_OPTIONS);

    public readonly editor = input<AbstractTuiEditor | null>(
        inject(TuiTiptapEditorService, {optional: true}),
    );
}

/**
 * @deprecated use {@link TuiInsertTableButtonTool}
 */
export const TuiTableCreate = TuiTableCreateTool;
