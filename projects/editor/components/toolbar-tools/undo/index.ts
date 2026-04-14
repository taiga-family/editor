import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiUndoButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiUndoButtonTool}
 */
@Component({
    selector: 'tui-undo-tool',
    imports: [TuiUndoButtonTool],
    template: `
        <button
            tuiUndoTool
            [editor]="editor()"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiUndoTool {
    public readonly editor = input<AbstractTuiEditor | null>(
        inject(TuiTiptapEditorService, {optional: true}),
    );
}
