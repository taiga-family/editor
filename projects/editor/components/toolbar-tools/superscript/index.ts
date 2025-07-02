import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiSuperscriptButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiSuperscriptButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-superscript-tool',
    imports: [TuiSuperscriptButtonTool],
    template: `
        <button
            tuiSuperscriptTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSuperscriptTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}
