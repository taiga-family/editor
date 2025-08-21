import {AsyncPipe, NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
    TuiDataListComponent,
    TuiDropdownDirective,
    TuiOptGroup,
    TuiOption,
    TuiTextfieldDropdownDirective,
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
    standalone: true,
    selector: 'button[tuiAddRowTableTool]',
    imports: [
        AsyncPipe,
        NgForOf,
        TuiDataListComponent,
        TuiOptGroup,
        TuiOption,
        TuiTextfieldDropdownDirective,
    ],
    template: `
        {{ tuiHint() }}

        <ng-container *tuiTextfieldDropdown>
            <tui-data-list>
                <tui-opt-group
                    *ngFor="let group of tableCommandTexts$ | async; let i = index"
                >
                    <!-- TODO: remove "magic" numbers i*2+@Directive({standalone: true, and make code more readable-->
                    <button
                        *ngFor="let item of group; let j = index"
                        tuiOption
                        type="button"
                        (click)="onTableOption(i * 2 + j)"
                    >
                        {{ item }}
                    </button>
                </tui-opt-group>
            </tui-data-list>
        </ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool, TuiDropdownDirective, TuiWithDropdownOpen],
})
export class TuiAddRowTableButtonTool extends TuiToolbarTool {
    protected readonly tableCommandTexts$ = inject(TUI_EDITOR_TABLE_COMMANDS);

    protected override getDisableState(): boolean {
        return !(this.editor?.isActive('table') ?? false);
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.addRowTable;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return texts?.rowsColumnsManaging ?? '';
    }

    protected onTableOption(command: number): void {
        const registry: Record<number, () => void> | null = {
            [TuiTableCommands.InsertColumnAfter]: () => this.editor?.addColumnAfter(),
            [TuiTableCommands.InsertColumnBefore]: () => this.editor?.addColumnBefore(),
            [TuiTableCommands.InsertRowAfter]: () => this.editor?.addRowAfter(),
            [TuiTableCommands.InsertRowBefore]: () => this.editor?.addRowBefore(),
            [TuiTableCommands.DeleteColumn]: () => this.editor?.deleteColumn(),
            [TuiTableCommands.DeleteRow]: () => this.editor?.deleteRow(),
        };

        registry[command]?.();
    }
}
