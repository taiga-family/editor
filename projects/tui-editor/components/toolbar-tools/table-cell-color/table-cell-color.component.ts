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
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '@tinkoff/tui-editor/tokens';
import {combineLatest, Observable, of} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: 'tui-table-cell-color',
    templateUrl: './table-cell-color.template.html',
    styleUrls: ['../tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableCellColorComponent implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;

    @Input('editor')
    set inputEditor(value: AbstractTuiEditor | null) {
        this.localEditor = value;
        this.initStream();
    }

    @Input()
    colors: ReadonlyMap<string, string> = this.options.colors;

    colorText$: Observable<string> | null = null;

    isActive$: Observable<boolean> | null = null;

    color$: Observable<string> | null = null;

    constructor(
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
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

    isBlankColor(color: string): boolean {
        return color === this.options.blankColor;
    }

    setCellColor(color: string): void {
        if (this.editor?.isActive('group')) {
            this.editor?.setGroupHilite(color);
        } else if (this.editor?.isActive('table')) {
            this.editor?.setCellColor(color);
        }
    }

    private initStream(): void {
        this.colorText$ = this.texts$.pipe(
            map(
                texts =>
                    (this.editor?.isActive('group') && texts.hiliteGroup) ||
                    (this.editor?.isActive('table') && texts.cellColor) ||
                    '',
            ),
        );

        this.isActive$ = combineLatest([
            this.editor?.isActive$('table') ?? of(false),
            this.editor?.isActive$('group') ?? of(false),
        ]).pipe(map(([table, group]) => table || group));

        this.color$ =
            this.editor?.stateChange$.pipe(
                map(
                    () =>
                        this.editor?.getCellColor() ||
                        this.editor?.getGroupColor() ||
                        this.options.blankColor,
                ),
                distinctUntilChanged(),
            ) ?? null;
    }
}
