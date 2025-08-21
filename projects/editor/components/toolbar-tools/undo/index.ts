import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiUndoButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated: use {@link TuiUndoButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-undo-tool',
    imports: [TuiUndoButtonTool],
    template: `
        <button
            tuiUndoTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiUndoTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}
