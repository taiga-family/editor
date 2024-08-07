import {AsyncPipe, NgForOf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiDropdown, TuiHint} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

import type {AbstractTuiEditor} from '../../../abstract/editor-adapter.abstract';
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
export class TuiTableRowColumnManager implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;
    private commandsRegistry: Record<number, () => void> | null = null;
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly tableCommandTexts$ = inject(TUI_EDITOR_TABLE_COMMANDS);
    protected isActive$: Observable<boolean> | null = null;

    protected readonly rowsColumnsManagingText$ = this.texts$.pipe(
        map((texts) => texts.rowsColumnsManaging),
    );

    @Input('editor')
    public set inputEditor(value: AbstractTuiEditor | null) {
        this.localEditor = value;
        this.initStream();
    }

    public ngOnInit(): void {
        this.initStream();
    }

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.localEditor;
    }

    protected onTableOption(command: number): void {
        this.commandsRegistry?.[command]?.();
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
