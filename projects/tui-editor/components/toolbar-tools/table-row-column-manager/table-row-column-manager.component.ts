import {AsyncPipe, NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiHintModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {AbstractTuiEditor} from '@tinkoff/tui-editor/abstract';
import {TuiTiptapEditorService} from '@tinkoff/tui-editor/directives';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TABLE_COMMANDS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '@tinkoff/tui-editor/tokens';
import {map, Observable} from 'rxjs';

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
    standalone: true,
    selector: 'tui-table-row-column-manager',
    imports: [
        NgForOf,
        TuiDataListModule,
        AsyncPipe,
        TuiButtonModule,
        TuiHintModule,
        TuiHostedDropdownModule,
        TuiLetModule,
    ],
    templateUrl: './table-row-column-manager.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableRowColumnManagerComponent {
    private readonly commandsRegistry: Record<TuiTableCommands, () => void> = {
        [TuiTableCommands.InsertColumnAfter]: () => this.editor.addColumnAfter(),
        [TuiTableCommands.InsertColumnBefore]: () => this.editor.addColumnBefore(),
        [TuiTableCommands.InsertRowAfter]: () => this.editor.addRowAfter(),
        [TuiTableCommands.InsertRowBefore]: () => this.editor.addRowBefore(),
        [TuiTableCommands.DeleteColumn]: () => this.editor.deleteColumn(),
        [TuiTableCommands.DeleteRow]: () => this.editor.deleteRow(),
    };

    readonly isActive$ = this.editor.isActive$('table');

    readonly rowsColumnsManagingText$ = this.texts$.pipe(
        map(texts => texts.rowsColumnsManaging),
    );

    constructor(
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
        @Inject(TUI_EDITOR_TABLE_COMMANDS)
        readonly tableCommandTexts$: Observable<TuiLanguageEditor['editorTableCommands']>,
    ) {}

    onTableOption(command: TuiTableCommands): void {
        this.commandsRegistry[command]();
    }
}
