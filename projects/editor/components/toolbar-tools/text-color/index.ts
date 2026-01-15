import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {type AbstractTuiEditor, TUI_EDITOR_OPTIONS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiTextColorButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiTextColorButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-text-color,tui-text-color-tool',
    imports: [TuiTextColorButtonTool],
    template: `
        <button
            tuiTextColorTool
            [colors]="colors"
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTextColorTool {
    protected readonly options = inject(TUI_EDITOR_OPTIONS);

    @Input()
    public colors: ReadonlyMap<string, string> =
        this.options.textColors ?? this.options.colors;

    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}

/**
 * @deprecated use {@link TuiTextColorButtonTool}
 */
export const TuiTextColor = TuiTextColorTool;
