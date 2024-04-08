import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiHintModule} from '@taiga-ui/core';
import {distinctUntilChanged, map} from 'rxjs';

import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-table-merge-cells',
    imports: [TuiLetModule, AsyncPipe, NgIf, TuiButtonDirective, TuiHintModule],
    templateUrl: './table-merge-cells.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableMergeCellsComponent {
    protected readonly editor = inject(TuiTiptapEditorService);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);

    protected readonly canMergeCells$ = this.editor.stateChange$.pipe(
        map(() => this.editor.canMergeCells()),
        distinctUntilChanged(),
    );

    protected readonly canSplitCells$ = this.editor.stateChange$.pipe(
        map(() => this.editor.canSplitCells()),
        distinctUntilChanged(),
    );

    protected mergeCells(): void {
        this.editor.mergeCells();
    }

    protected splitCell(): void {
        this.editor.splitCell();
    }
}
