import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {TuiAnchorButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiAnchorButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-anchor-tool',
    imports: [TuiAnchorButtonTool],
    template: `
        <button
            tuiAnchorTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAnchorTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}
