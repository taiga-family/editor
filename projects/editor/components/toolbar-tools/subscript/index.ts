import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiSubscriptButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiSubscriptButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-subscript-tool',
    imports: [TuiSubscriptButtonTool],
    template: `
        <button
            tuiSubscriptTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSubscriptTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}
