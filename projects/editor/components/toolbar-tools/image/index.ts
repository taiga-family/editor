import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiImageButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiImageButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-image-tool',
    imports: [TuiImageButtonTool],
    template: `
        <button
            tuiImageTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiImageTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}
