import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {
    type AbstractTuiEditor,
    TUI_EDITOR_DEFAULT_TOOLS,
    type TuiEditorToolType,
} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiFontStyleButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiFontStyleButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-font-style,tui-font-style-tool',
    imports: [TuiFontStyleButtonTool],
    template: `
        <button
            tuiFontStyleTool
            [editor]="editor"
            [enabledTools]="enabledTools"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFontStyleTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });

    @Input()
    public enabledTools: Set<TuiEditorToolType> | readonly TuiEditorToolType[] =
        new Set<TuiEditorToolType>(TUI_EDITOR_DEFAULT_TOOLS);
}

/**
 * @deprecated use {@link TuiFontStyleButtonTool}
 */
export const TuiFontStyle = TuiFontStyleTool;
