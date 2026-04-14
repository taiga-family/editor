import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiRedoButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiRedoButtonTool}
 */
@Component({
    selector: 'tui-redo-tool',
    imports: [TuiRedoButtonTool],
    template: `
        <button
            tuiRedoTool
            [editor]="editor()"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiRedoTool {
    public readonly editor = input<AbstractTuiEditor | null>(
        inject(TuiTiptapEditorService, {optional: true}),
    );
}
