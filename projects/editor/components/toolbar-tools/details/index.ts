import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {TuiDetailsAddButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiDetailsAddButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-details, tui-details-tool',
    imports: [TuiDetailsAddButtonTool],
    template: `
        <button
            tuiDetailsAddTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDetailsTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}

/**
 * @deprecated use {@link TuiDetailsAddButtonTool}
 */
export const TuiDetails = TuiDetailsTool;
