import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    Input,
    OnInit,
    Optional,
} from '@angular/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {AbstractTuiEditor} from '@tinkoff/tui-editor/abstract';
import {TuiTiptapEditorService} from '@tinkoff/tui-editor/directives';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '@tinkoff/tui-editor/tokens';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: 'tui-table-merge-cells',
    templateUrl: './table-merge-cells.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableMergeCellsComponent implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;

    @Input('editor')
    set inputEditor(value: AbstractTuiEditor | null) {
        this.localEditor = value;
        this.initStream();
    }

    canMergeCells$: Observable<boolean> | null = null;

    canSplitCells$: Observable<boolean> | null = null;

    constructor(
        @Optional()
        @Inject(TuiTiptapEditorService)
        readonly injectionEditor: AbstractTuiEditor | null,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
    ) {}

    get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.localEditor;
    }

    ngOnInit(): void {
        this.initStream();
    }

    mergeCells(): void {
        this.editor?.mergeCells();
    }

    splitCell(): void {
        this.editor?.splitCell();
    }

    private initStream(): void {
        this.canMergeCells$ =
            this.editor?.stateChange$.pipe(
                map(() => this.editor?.canMergeCells() ?? false),
                distinctUntilChanged(),
            ) ?? null;

        this.canSplitCells$ =
            this.editor?.stateChange$.pipe(
                map(() => this.editor?.canSplitCells() ?? false),
                distinctUntilChanged(),
            ) ?? null;
    }
}
