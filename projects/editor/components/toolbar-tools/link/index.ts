import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiLinkButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiLinkButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-link-tool',
    imports: [TuiLinkButtonTool],
    template: `
        <button
            tuiLinkTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLinkTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}
