import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown, TuiHint} from '@taiga-ui/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TUI_EDITOR_OPTIONS, TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {map} from 'rxjs';

import {TuiTableSizeSelector} from './table-size-selector';

@Component({
    standalone: true,
    selector: 'tui-table-create',
    imports: [AsyncPipe, TuiButton, TuiDropdown, TuiHint, TuiTableSizeSelector],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableCreate {
    protected readonly isMobile = inject(TUI_IS_MOBILE);
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
