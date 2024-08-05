import {ChangeDetectionStrategy, Component, Inject, Input, Optional} from '@angular/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {AbstractTuiEditor} from '@tinkoff/tui-editor/abstract';
import {TuiTiptapEditorService} from '@tinkoff/tui-editor/directives';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '@tinkoff/tui-editor/tokens';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-table-create',
    templateUrl: './table-create.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableCreateComponent {
    @Input('editor')
    inputEditor: AbstractTuiEditor | null = null;

    readonly insertTableText$ = this.texts$.pipe(map(texts => texts.insertTable));

    constructor(
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Optional()
        @Inject(TuiTiptapEditorService)
        readonly injectionEditor: AbstractTuiEditor | null,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
    ) {}

    get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.inputEditor;
    }

    addTable({rows, cols}: {cols: number; rows: number}): void {
        this.editor?.enter(); // @note: clear previous styles

        const prevLine = this.editor?.state.selection.anchor ?? 0;

        // @note: don't use `setHardBreak`,
        // it inherits styles of previous lines
        // required two line after
        this.editor?.enter();
        this.editor?.enter();

        this.editor?.setTextSelection(prevLine);
        this.editor?.insertTable(rows, cols);
    }
}
