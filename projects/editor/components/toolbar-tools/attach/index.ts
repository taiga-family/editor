import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {
    type AbstractTuiEditor,
    type TuiEditorAttachedFile,
} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiAttachButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated: use {@link TuiAttachButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-attach-tool',
    imports: [TuiAttachButtonTool],
    template: `
        <button
            tuiAttachTool
            [editor]="editor"
            (fileAttached)="fileAttached.emit($event)"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAttachTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });

    @Output()
    public readonly fileAttached = new EventEmitter<TuiEditorAttachedFile[]>();
}
