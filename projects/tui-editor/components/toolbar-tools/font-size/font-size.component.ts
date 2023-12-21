import {AsyncPipe, LowerCasePipe, NgClass, NgForOf, NgStyle} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {tuiAssert, tuiPx} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiHintModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';
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
import {map, Observable} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-font-size',
    imports: [
        NgStyle,
        NgClass,
        LowerCasePipe,
        AsyncPipe,
        NgForOf,
        TuiDataListModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiHintModule,
    ],
    templateUrl: './font-size.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFontSizeComponent {
    readonly fontsOptions$: Observable<ReadonlyArray<Partial<TuiEditorFontOption>>> =
        this.fontOptionsTexts$.pipe(map(texts => this.options.fontOptions(texts)));

    readonly fontText$ = this.texts$.pipe(map(texts => texts.font));

    constructor(
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
        @Inject(TUI_EDITOR_FONT_OPTIONS)
        private readonly fontOptionsTexts$: Observable<
            TuiLanguageEditor['editorFontOptions']
        >,
    ) {}

    /**
     * @deprecated:
     * use {@link setFontOption}
     */
    onClick({headingLevel, px}: Partial<TuiEditorFontOption>): void {
        this.setFontOption({headingLevel, px});
    }

    setFontOption({headingLevel, px}: Partial<TuiEditorFontOption>): void {
        const color = this.editor.getFontColor();

        this.clearPreviousTextStyles();

        if (headingLevel) {
            ngDevMode &&
                tuiAssert.assert(
                    !px,
                    'Do not use `px` together with `headingLevel`  because `px` value does not affect anything',
                );

            this.editor.setHeading(headingLevel);
        } else {
            this.editor.setParagraph({fontSize: tuiPx(px || 0)});
        }

        if (color !== EDITOR_BLANK_COLOR) {
            this.editor.setFontColor(color);
        }
    }

    private clearPreviousTextStyles(): void {
        this.editor.removeEmptyTextStyle();
        this.editor.toggleMark('textStyle');
    }
}
