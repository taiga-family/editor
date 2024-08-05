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
    TUI_EDITOR_TABLE_COMMANDS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '@tinkoff/tui-editor/tokens';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

// TODO: change type in v4.0
// eslint-disable-next-line no-restricted-syntax
export enum TuiTableCommands {
    InsertColumnBefore,
    InsertColumnAfter,
    InsertRowBefore,
    InsertRowAfter,
    DeleteColumn,
    DeleteRow,
}

@Component({
    selector: 'tui-table-row-column-manager',
    templateUrl: './table-row-column-manager.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableRowColumnManagerComponent implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;

    @Input('editor')
    set inputEditor(value: AbstractTuiEditor | null) {
        this.localEditor = value;
        this.initStream();
    }

    private commandsRegistry: Record<TuiTableCommands, () => void> | null = null;

    readonly rowsColumnsManagingText$ = this.texts$.pipe(
        map(texts => texts.rowsColumnsManaging),
    );

    isActive$: Observable<boolean> | null = null;

    constructor(
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Optional()
        @Inject(TuiTiptapEditorService)
        readonly injectionEditor: AbstractTuiEditor | null,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
        @Inject(TUI_EDITOR_TABLE_COMMANDS)
        readonly tableCommandTexts$: Observable<TuiLanguageEditor['editorTableCommands']>,
    ) {}

    get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.localEditor;
    }

    ngOnInit(): void {
        this.initStream();
    }

    onTableOption(command: TuiTableCommands): void {
        this.commandsRegistry?.[command]();
    }

    private initStream(): void {
        this.commandsRegistry = {
            [TuiTableCommands.InsertColumnAfter]: () => this.editor?.addColumnAfter(),
            [TuiTableCommands.InsertColumnBefore]: () => this.editor?.addColumnBefore(),
            [TuiTableCommands.InsertRowAfter]: () => this.editor?.addRowAfter(),
            [TuiTableCommands.InsertRowBefore]: () => this.editor?.addRowBefore(),
            [TuiTableCommands.DeleteColumn]: () => this.editor?.deleteColumn(),
            [TuiTableCommands.DeleteRow]: () => this.editor?.deleteRow(),
        };

        this.isActive$ = this.editor?.isActive$('table') ?? null;
    }
}
