/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {AsyncPipe, LowerCasePipe, NgClass, NgForOf, NgStyle} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {tuiAssert, tuiPx} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiHintModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';
import {map, Observable} from 'rxjs';

import {EDITOR_BLANK_COLOR} from '../../../constants/default-editor-colors';
import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TuiEditorFontOption} from '../../../interfaces/editor-font-option';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_FONT_OPTIONS, TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

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
    private readonly fontOptionsTexts$ = inject(TUI_EDITOR_FONT_OPTIONS);
    readonly options = inject(TUI_EDITOR_OPTIONS);
    readonly editor = inject(TuiTiptapEditorService);
    readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    readonly fontsOptions$: Observable<ReadonlyArray<Partial<TuiEditorFontOption>>> =
        this.fontOptionsTexts$.pipe(map(texts => this.options.fontOptions(texts)));

    readonly fontText$ = this.texts$.pipe(map(texts => texts.font));

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
