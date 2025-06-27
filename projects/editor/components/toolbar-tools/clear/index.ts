import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {TuiClearButtonTool} from '@taiga-ui/editor/tools';

/**
 * @deprecated: use tuiRemoveFormatTool
 */
@Component({
    standalone: true,
    selector: 'tui-clear-tool',
    imports: [AsyncPipe, NgIf, TuiClearButtonTool],
    template: `
        <ng-container *ngIf="editor?.stateChange$ | async" />
        <button
            tuiClearTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiClearTool {
    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}
