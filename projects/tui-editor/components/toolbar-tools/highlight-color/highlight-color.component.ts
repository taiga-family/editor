import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {AbstractTuiEditor} from '../../../abstract';
import {TuiTiptapEditorService} from '../../../directives';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '../../../tokens';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: 'tui-highlight-color',
    templateUrl: './highlight-color.template.html',
    styleUrls: ['../tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiHighlightColorComponent {
    @Input()
    colors: ReadonlyMap<string, string> = this.options.colors;

    readonly backgroundColor$ = this.editor.stateChange$.pipe(
        map(() => this.editor.getBackgroundColor() || this.options.blankColor),
        distinctUntilChanged(),
    );

    readonly backColorText$ = this.texts$.pipe(map(texts => texts.backColor));

    constructor(
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
    ) {}

    isBlankColor(color: string): boolean {
        return color === this.options.blankColor;
    }
}
