import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiHrButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiHrButtonTool}
 */
@Component({
    selector: 'tui-hr-tool',
    imports: [TuiHrButtonTool],
    template: `
        <button
            tuiHrTool
            [editor]="editor()"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiHrTool {
    public readonly editor = input<AbstractTuiEditor | null>(
        inject(TuiTiptapEditorService, {optional: true}),
    );
}
