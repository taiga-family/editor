import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiAnchorButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiAnchorButtonTool}
 */
@Component({
    selector: 'tui-anchor-tool',
    imports: [TuiAnchorButtonTool],
    template: `
        <button
            tuiAnchorTool
            [editor]="editor()"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAnchorTool {
    public readonly editor = input<AbstractTuiEditor | null>(
        inject(TuiTiptapEditorService, {optional: true}),
    );
}
