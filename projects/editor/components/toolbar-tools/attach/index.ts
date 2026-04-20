import {ChangeDetectionStrategy, Component, inject, input, output} from '@angular/core';
import {
    type AbstractTuiEditor,
    type TuiEditorAttachedFile,
} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiAttachButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiAttachButtonTool}
 */
@Component({
    selector: 'tui-attach-tool',
    imports: [TuiAttachButtonTool],
    template: `
        <button
            tuiAttachTool
            [editor]="editor()"
            (fileAttached)="fileAttached.emit($event)"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAttachTool {
    public readonly editor = input<AbstractTuiEditor | null>(
        inject(TuiTiptapEditorService, {optional: true}),
    );

    public readonly fileAttached = output<TuiEditorAttachedFile[]>();
}
