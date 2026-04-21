import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiInsertGroupButtonTool, TuiRemoveGroupButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiInsertGroupButtonTool}
 */
@Component({
    selector: 'tui-editor-group-tool',
    imports: [TuiInsertGroupButtonTool, TuiRemoveGroupButtonTool],
    template: `
        <button
            tuiInsertGroupTool
            [editor]="editor()"
        ></button>
        <button
            tuiRemoveGroupTool
            [editor]="editor()"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEditorGroupTool {
    public readonly editor = input<AbstractTuiEditor | null>(
        inject(TuiTiptapEditorService, {optional: true}),
    );
}
