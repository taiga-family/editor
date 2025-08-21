import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {TuiFontSizeButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiFontSizeButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-font-size,tui-font-size-tool',
    imports: [TuiFontSizeButtonTool],
    template: `
        <button
            tuiFontSizeTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFontSizeTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}

/**
 * @deprecated use {@link TuiFontSizeButtonTool}
 */
export const TuiFontSize = TuiFontSizeTool;
