import {AsyncPipe, NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiDropdown, TuiHint} from '@taiga-ui/core';
import {map} from 'rxjs';

import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TABLE_COMMANDS, TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

export const TuiTableCommands = {
    InsertColumnBefore: 0,
    InsertColumnAfter: 1,
    InsertRowBefore: 2,
    InsertRowAfter: 3,
    DeleteColumn: 4,
    DeleteRow: 5,
} as const;

@Component({
    standalone: true,
    selector: 'tui-table-row-column-manager',
    imports: [AsyncPipe, NgForOf, TuiButton, TuiDataList, TuiDropdown, TuiHint, TuiLet],
    templateUrl: './table-row-column-manager.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableRowColumnManager {
    private readonly commandsRegistry: Record<number, () => void> = {
        [TuiTableCommands.InsertColumnAfter]: () => this.editor.addColumnAfter(),
        [TuiTableCommands.InsertColumnBefore]: () => this.editor.addColumnBefore(),
        [TuiTableCommands.InsertRowAfter]: () => this.editor.addRowAfter(),
        [TuiTableCommands.InsertRowBefore]: () => this.editor.addRowBefore(),
        [TuiTableCommands.DeleteColumn]: () => this.editor.deleteColumn(),
        [TuiTableCommands.DeleteRow]: () => this.editor.deleteRow(),
    };

    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly editor = inject(TuiTiptapEditorService);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly tableCommandTexts$ = inject(TUI_EDITOR_TABLE_COMMANDS);

    protected readonly isActive$ = this.editor.isActive$('table');

    protected readonly rowsColumnsManagingText$ = this.texts$.pipe(
        map((texts) => texts.rowsColumnsManaging),
    );

    protected onTableOption(command: number): void {
        this.commandsRegistry[command]?.();
    }
}
