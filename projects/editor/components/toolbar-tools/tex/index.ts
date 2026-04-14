import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    input,
    Output,
} from '@angular/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiTexButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiTexButtonTool}
 */
@Component({
    selector: 'tui-tex-tool',
    imports: [TuiTexButtonTool],
    template: `
        <button
            tuiTexTool
            [editor]="editor()"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTexTool {
    public readonly editor = input<AbstractTuiEditor | null>(
        inject(TuiTiptapEditorService, {optional: true}),
    );

    @Output()
    public readonly texClicked = new EventEmitter<void>();
}
