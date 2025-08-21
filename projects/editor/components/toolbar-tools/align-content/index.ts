import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {TuiAlignButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiAlignButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-align-content,tui-align-content-tool',
    imports: [TuiAlignButtonTool],
    template: `
        <button
            tuiAlignTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAlignContentTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}

/**
 * @deprecated use {@link TuiAlignButtonTool}
 */
export const TuiAlignContent = TuiAlignContentTool;
