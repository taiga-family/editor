import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiButtonModule, TuiHintModule, TuiHostedDropdownModule} from '@taiga-ui/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {map, Observable} from 'rxjs';

import {AbstractTuiEditor} from '../../../abstract/editor-adapter.abstract';
import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS, TuiEditorOptions} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';
import {TuiTableSizeSelectorComponent} from './table-size-selector/table-size-selector.component';

@Component({
    standalone: true,
    selector: 'tui-table-create',
    imports: [
        TuiHostedDropdownModule,
        TuiHintModule,
        TuiButtonModule,
        AsyncPipe,
        TuiTableSizeSelectorComponent,
    ],
    templateUrl: './table-create.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableCreateComponent {
    readonly insertTableText$ = this.texts$.pipe(map(texts => texts.insertTable));

    constructor(
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
    ) {}

    addTable({rows, cols}: {cols: number; rows: number}): void {
        this.editor.enter(); // @note: clear previous styles

        const prevLine = this.editor.state.selection.anchor;

        // @note: don't use `setHardBreak`,
        // it inherits styles of previous lines
        // required two line after
        this.editor.enter();
        this.editor.enter();

        this.editor.setTextSelection(prevLine);
        this.editor.insertTable(rows, cols);
    }
}
