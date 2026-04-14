import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiListButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiListButtonTool}
 */
@Component({
    selector: 'tui-list-configs,tui-list-configs-tool',
    imports: [TuiListButtonTool],
    template: `
        <button
            tuiListTool
            [editor]="editor()"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiListConfigsTool {
    public readonly editor = input<AbstractTuiEditor | null>(
        inject(TuiTiptapEditorService, {optional: true}),
    );
}

/**
 * @deprecated use {@link TuiListButtonTool}
 */
export const TuiListConfigs = TuiListConfigsTool;
