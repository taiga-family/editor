import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {
    TuiDataList,
    TuiDropdownDirective,
    TuiInput,
    TuiOptGroup,
    TuiOption,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import {TUI_EDITOR_TABLE_COMMANDS, type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

export const TuiTableCommands = {
    InsertColumnBefore: 0,
    InsertColumnAfter: 1,
    InsertRowBefore: 2,
    InsertRowAfter: 3,
    DeleteColumn: 4,
    DeleteRow: 5,
} as const;

@Component({
    selector: 'button[tuiAddRowTableTool]',
    imports: [TuiDataList, TuiInput, TuiOptGroup, TuiOption],
    template: `
        {{ tuiHint() }}

        <ng-container *tuiDropdown>
            <tui-data-list>
                @for (group of tableCommands(); track $index) {
                    <tui-opt-group>
                        @for (item of group; track item.command) {
                            <button
                                tuiOption
                                type="button"
                                (click)="onTableOption(item.command)"
                            >
                                {{ item.text }}
                            </button>
                        }
                    </tui-opt-group>
                }
            </tui-data-list>
        </ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool, TuiDropdownDirective, TuiWithDropdownOpen],
})
export class TuiAddRowTableButtonTool extends TuiToolbarTool {
    private readonly tableCommandTexts = inject(TUI_EDITOR_TABLE_COMMANDS);

    protected readonly tableCommands = computed(() => {
        const [
            [insertColBefore, insertColAfter],
            [insertRowBefore, insertRowAfter],
            [deleteCol, deleteRow],
        ] = this.tableCommandTexts();

        return [
            [
                {text: insertColBefore, command: TuiTableCommands.InsertColumnBefore},
                {text: insertColAfter, command: TuiTableCommands.InsertColumnAfter},
            ],
            [
                {text: insertRowBefore, command: TuiTableCommands.InsertRowBefore},
                {text: insertRowAfter, command: TuiTableCommands.InsertRowAfter},
            ],
            [
                {text: deleteCol, command: TuiTableCommands.DeleteColumn},
                {text: deleteRow, command: TuiTableCommands.DeleteRow},
            ],
        ];
    });

    protected override getDisableState(): boolean {
        return !(this.editor()?.isActive('table') ?? false);
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.addRowTable;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return texts?.rowsColumnsManaging ?? '';
    }

    protected onTableOption(command: number): void {
        const registry: Record<number, () => void> | null = {
            [TuiTableCommands.InsertColumnAfter]: () => this.editor()?.addColumnAfter(),
            [TuiTableCommands.InsertColumnBefore]: () => this.editor()?.addColumnBefore(),
            [TuiTableCommands.InsertRowAfter]: () => this.editor()?.addRowAfter(),
            [TuiTableCommands.InsertRowBefore]: () => this.editor()?.addRowBefore(),
            [TuiTableCommands.DeleteColumn]: () => this.editor()?.deleteColumn(),
            [TuiTableCommands.DeleteRow]: () => this.editor()?.deleteRow(),
        };

        registry[command]?.();
    }
}
