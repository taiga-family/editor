import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiTexButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated use {@link TuiTexButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-tex-tool',
    imports: [TuiTexButtonTool],
    template: `
        <button
            tuiTexTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTexTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });

    @Output()
    public readonly texClicked = new EventEmitter<void>();
}
