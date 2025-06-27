import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TUI_EDITOR_OPTIONS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {TuiHighlightColorButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiHighlightColorButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-highlight-color,tui-highlight-color-tool',
    imports: [TuiHighlightColorButtonTool],
    template: `
        <button
            tuiHighlightColorTool
            [colors]="colors"
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tuiPlateHost: '',
    },
})
export class TuiHighlightColorTool {
    @Input()
    public colors: ReadonlyMap<string, string> = inject(TUI_EDITOR_OPTIONS).colors;

    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}

/**
 * @deprecated use {@link TuiHighlightColorButtonTool}
 */
export const TuiHighlightColor = TuiHighlightColorTool;
