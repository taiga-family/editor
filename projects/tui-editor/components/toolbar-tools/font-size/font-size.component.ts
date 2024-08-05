import {ChangeDetectionStrategy, Component, Inject, Input, Optional} from '@angular/core';
import {tuiPx} from '@taiga-ui/cdk';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {AbstractTuiEditor} from '@tinkoff/tui-editor/abstract';
import {EDITOR_BLANK_COLOR} from '@tinkoff/tui-editor/constants';
import {TuiTiptapEditorService} from '@tinkoff/tui-editor/directives';
import {TuiEditorFontOption} from '@tinkoff/tui-editor/interfaces';
import {
    TUI_EDITOR_FONT_OPTIONS,
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '@tinkoff/tui-editor/tokens';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-font-size',
    templateUrl: './font-size.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFontSizeComponent {
    @Input('editor')
    inputEditor: AbstractTuiEditor | null = null;

    readonly fontsOptions$: Observable<ReadonlyArray<Partial<TuiEditorFontOption>>> =
        this.fontOptionsTexts$.pipe(map(texts => this.options.fontOptions(texts)));

    readonly fontText$ = this.texts$.pipe(map(texts => texts.font));

    constructor(
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Optional()
        @Inject(TuiTiptapEditorService)
        readonly injectionEditor: AbstractTuiEditor | null,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
        @Inject(TUI_EDITOR_FONT_OPTIONS)
        private readonly fontOptionsTexts$: Observable<
            TuiLanguageEditor['editorFontOptions']
        >,
    ) {}

    get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.inputEditor;
    }

    /**
     * @deprecated:
     * use {@link setFontOption}
     */
    onClick({headingLevel, px}: Partial<TuiEditorFontOption>): void {
        this.setFontOption({headingLevel, px});
    }

    setFontOption({headingLevel, px}: Partial<TuiEditorFontOption>): void {
        const color = this.editor?.getFontColor() ?? EDITOR_BLANK_COLOR;

        this.clearPreviousTextStyles();

        if (headingLevel) {
            this.editor?.setHeading(headingLevel);
        } else {
            this.editor?.setParagraph({fontSize: tuiPx(px || 0)});
        }

        if (color !== EDITOR_BLANK_COLOR) {
            this.editor?.setFontColor(color);
        }
    }

    private clearPreviousTextStyles(): void {
        this.editor?.removeEmptyTextStyle();
        this.editor?.toggleMark('textStyle');
    }
}
