import {AsyncPipe, LowerCasePipe, NgClass, NgForOf, NgStyle} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {tuiPx} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataList,
    TuiHint,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

import {EDITOR_BLANK_COLOR} from '../../../constants/default-editor-colors';
import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import type {TuiEditorFontOption} from '../../../interfaces/editor-font-option';
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
        TuiDataList,
        TuiHostedDropdownModule,
        TuiButtonDirective,
        TuiHint,
    ],
    templateUrl: './font-size.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFontSize {
    private readonly fontOptionsTexts$ = inject(TUI_EDITOR_FONT_OPTIONS);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly editor = inject(TuiTiptapEditorService);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly fontsOptions$: Observable<
        ReadonlyArray<Partial<TuiEditorFontOption>>
    > = this.fontOptionsTexts$.pipe(map(texts => this.options.fontOptions(texts)));

    protected readonly fontText$ = this.texts$.pipe(map(texts => texts.font));

    protected setFontOption({headingLevel, px}: Partial<TuiEditorFontOption>): void {
        const color = this.editor.getFontColor();

        this.clearPreviousTextStyles();

        if (headingLevel) {
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
