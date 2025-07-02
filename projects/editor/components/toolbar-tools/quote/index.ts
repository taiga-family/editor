import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiBlockquoteButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiBlockquoteButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-quote-tool',
    imports: [TuiBlockquoteButtonTool],
    template: `
        <button
            tuiBlockquoteTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiQuoteTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}
