import {AsyncPipe, LowerCasePipe, NgClass, NgForOf, NgStyle} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TUI_IS_MOBILE, TuiItem, tuiPx} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiDropdown, TuiHint} from '@taiga-ui/core';
import type {AbstractTuiEditor, TuiEditorFontOption} from '@taiga-ui/editor/common';
import {
    EDITOR_BLANK_COLOR,
    TUI_EDITOR_FONT_OPTIONS,
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

@Component({
    standalone: true,
    // TODO: deprecate tui-font-size
    selector: 'tui-font-size,tui-font-size-tool',
    imports: [
        AsyncPipe,
        LowerCasePipe,
        NgClass,
        NgForOf,
        NgStyle,
        TuiButton,
        TuiDataList,
        TuiDropdown,
        TuiHint,
        TuiItem,
    ],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFontSizeTool {
    private readonly fontOptionsTexts$ = inject(TUI_EDITOR_FONT_OPTIONS);
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly fontsOptions$: Observable<
        ReadonlyArray<Partial<TuiEditorFontOption>>
    > = this.fontOptionsTexts$.pipe(map((texts) => this.options.fontOptions(texts)));

    protected readonly fontText$ = this.texts$.pipe(map((texts) => texts.font));

    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });

    protected setFontOption({headingLevel, px}: Partial<TuiEditorFontOption>): void {
        const color = this.editor?.getFontColor() ?? EDITOR_BLANK_COLOR;

        this.clearPreviousTextStyles();

        if (headingLevel) {
            this.editor?.setHeading(headingLevel);
        } else {
            this.editor?.setParagraph({fontSize: tuiPx(px ?? 0)});
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

/**
 * @deprecated use {@link TuiFontSizeTool}
 */
export const TuiFontSize = TuiFontSizeTool;
