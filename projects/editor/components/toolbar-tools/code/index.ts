import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiCodeButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiCodeButtonTool}
 */
@Component({
    selector: 'tui-code,tui-code-tool',
    imports: [TuiCodeButtonTool],
    template: `
        <button
            tuiCodeTool
            [editor]="editor()"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCodeTool {
    public readonly editor = input<AbstractTuiEditor | null>(
        inject(TuiTiptapEditorService, {optional: true}),
    );
}

/**
 * @deprecated use {@link TuiCodeButtonTool}
 */
export const TuiCode = TuiCodeTool;
