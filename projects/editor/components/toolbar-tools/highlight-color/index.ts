import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {type AbstractTuiEditor, TUI_EDITOR_OPTIONS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiHighlightColorButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiHighlightColorButtonTool}
 */
@Component({
    selector: 'tui-highlight-color,tui-highlight-color-tool',
    imports: [TuiHighlightColorButtonTool],
    template: `
        <button
            tuiHighlightColorTool
            [colors]="colors()"
            [editor]="editor()"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {tuiPlateHost: ''},
})
export class TuiHighlightColorTool {
    private readonly options = inject(TUI_EDITOR_OPTIONS);
    public readonly colors = input(this.options.backgroundColors ?? this.options.colors);

    public readonly editor = input<AbstractTuiEditor | null>(
        inject(TuiTiptapEditorService, {optional: true}),
    );
}

/**
 * @deprecated use {@link TuiHighlightColorButtonTool}
 */
export const TuiHighlightColor = TuiHighlightColorTool;
