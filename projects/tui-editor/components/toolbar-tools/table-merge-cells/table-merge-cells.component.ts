import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {AbstractTuiEditor} from '../../../abstract';
import {TuiTiptapEditorService} from '../../../directives';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: 'tui-table-merge-cells',
    templateUrl: './table-merge-cells.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableMergeCellsComponent {
    readonly canMergeCells$ = this.editor.stateChange$.pipe(
        map(() => this.editor.canMergeCells()),
        distinctUntilChanged(),
    );

    readonly canSplitCells$ = this.editor.stateChange$.pipe(
        map(() => this.editor.canSplitCells()),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
    ) {}

    mergeCells(): void {
        this.editor.mergeCells();
    }

    splitCell(): void {
        this.editor.splitCell();
    }
}
