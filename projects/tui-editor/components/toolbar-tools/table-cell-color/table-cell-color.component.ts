import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {AbstractTuiEditor} from '../../../abstract';
import {TuiTiptapEditorService} from '../../../directives';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '../../../tokens';
import {combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: 'tui-table-cell-color',
    templateUrl: './table-cell-color.template.html',
    styleUrls: ['../tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableCellColorComponent {
    @Input()
    colors: ReadonlyMap<string, string> = this.options.colors;

    readonly colorText$ = this.texts$.pipe(
        map(
            texts =>
                (this.editor.isActive('group') && texts.hiliteGroup) ||
                (this.editor.isActive('table') && texts.cellColor) ||
                '',
        ),
    );

    readonly isActive$ = combineLatest([
        this.editor.isActive$('table'),
        this.editor.isActive$('group'),
    ]).pipe(map(([table, group]) => table || group));

    readonly color$ = this.editor.stateChange$.pipe(
        map(
            () =>
                this.editor.getCellColor() ||
                this.editor.getGroupColor() ||
                this.options.blankColor,
        ),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
    ) {}

    isBlankColor(color: string): boolean {
        return color === this.options.blankColor;
    }

    setCellColor(color: string): void {
        if (this.editor.isActive('group')) {
            this.editor.setGroupHilite(color);
        } else if (this.editor.isActive('table')) {
            this.editor.setCellColor(color);
        }
    }
}
