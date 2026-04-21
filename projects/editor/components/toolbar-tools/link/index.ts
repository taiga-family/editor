import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiLinkButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiLinkButtonTool}
 */
@Component({
    selector: 'tui-link-tool',
    imports: [TuiLinkButtonTool],
    template: `
        <button
            tuiLinkTool
            [editor]="editor()"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLinkTool {
    public readonly editor = input<AbstractTuiEditor | null>(
        inject(TuiTiptapEditorService, {optional: true}),
    );
}
