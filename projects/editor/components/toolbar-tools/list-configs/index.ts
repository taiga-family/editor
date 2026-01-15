import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiListButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiListButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-list-configs,tui-list-configs-tool',
    imports: [TuiListButtonTool],
    template: `
        <button
            tuiListTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiListConfigsTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}

/**
 * @deprecated use {@link TuiListButtonTool}
 */
export const TuiListConfigs = TuiListConfigsTool;
