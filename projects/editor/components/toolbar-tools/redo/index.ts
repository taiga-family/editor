import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiRedoButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiRedoButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-redo-tool',
    imports: [TuiRedoButtonTool],
    template: `
        <button
            tuiRedoTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiRedoTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}
