import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiClearButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated: use {@link TuiClearButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-clear-tool',
    imports: [TuiClearButtonTool],
    template: `
        <button
            tuiClearTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiClearTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}
