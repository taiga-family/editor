import {AsyncPipe, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import type {AbstractTuiEditor, TuiEditorAttachedFile} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiAttachButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated: use {@link TuiAttachButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-attach-tool',
    imports: [AsyncPipe, NgIf, TuiAttachButtonTool],
    template: `
        <ng-container *ngIf="editor?.stateChange$ | async" />
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
