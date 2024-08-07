import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiButton, TuiDropdown, TuiHint} from '@taiga-ui/core';
import {map} from 'rxjs';

import type {AbstractTuiEditor} from '../../../abstract/editor-adapter.abstract';
import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';
import {TuiTableSizeSelector} from './table-size-selector/table-size-selector.component';

@Component({
    standalone: true,
    selector: 'tui-table-create',
    imports: [AsyncPipe, TuiButton, TuiDropdown, TuiHint, TuiTableSizeSelector],
    templateUrl: './table-create.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableCreate {
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);

    protected readonly insertTableText$ = this.texts$.pipe(
        map((texts) => texts.insertTable),
    );

    @Input('editor')
    public inputEditor: AbstractTuiEditor | null = null;

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.inputEditor;
    }

    protected addTable({rows, cols}: {cols: number; rows: number}): void {
        this.editor?.enter(); // @note: clear previous styles

        const prevLine = this.editor?.state?.selection.anchor;

        // @note: don't use `setHardBreak`,
        // it inherits styles of previous lines
        // required two line after
        this.editor?.enter();
        this.editor?.enter();

        this.editor?.setTextSelection(prevLine ?? 0);
        this.editor?.insertTable(rows, cols);
    }
}
