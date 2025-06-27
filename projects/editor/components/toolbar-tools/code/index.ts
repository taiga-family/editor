import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {TuiCodeButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated: use {@link TuiCodeButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-code,tui-code-tool',
    imports: [TuiCodeButtonTool],
    template: `
        <button
            tuiCodeTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCodeTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}

/**
 * @deprecated use {@link TuiCodeButtonTool}
 */
export const TuiCode = TuiCodeTool;
