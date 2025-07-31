import {AsyncPipe, LowerCasePipe, NgClass, NgForOf, NgStyle} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    inject,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {TuiItem, tuiPx} from '@taiga-ui/cdk';
import {
    TuiDataListComponent,
    tuiDropdown,
    TuiDropdownDirective,
    TuiOption,
    TuiTextfieldDropdownDirective,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import type {TuiEditorFontOption, TuiEditorOptions} from '@taiga-ui/editor/common';
import {EDITOR_BLANK_COLOR, TUI_EDITOR_FONT_OPTIONS} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {map} from 'rxjs';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiFontSizeTool]',
    imports: [
        AsyncPipe,
        LowerCasePipe,
        NgClass,
        NgForOf,
        NgStyle,
        TuiDataListComponent,
        TuiItem,
        TuiOption,
        TuiTextfieldDropdownDirective,
    ],
    template: `
        {{ tuiHint() }}

        <ng-container *tuiTextfieldDropdown>
            <tui-data-list>
                <button
                    *ngFor="let item of fontsOptions$ | async"
                    tuiItem
                    tuiOption
                    type="button"
                    [attr.automation-id]="'tui_font__' + (item.name || '' | lowercase)"
                    [ngClass]="item?.ngClass || {}"
                    [ngStyle]="item?.ngStyle || {}"
                    [style.font-family]="item.family"
                    [style.font-size.px]="item.px"
                    [style.font-weight]="item.weight"
                    (click)="setFontOption(item)"
                >
                    {{ item.name }}
                </button>
            </tui-data-list>
        </ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool, TuiDropdownDirective, TuiWithDropdownOpen],
    host: {
        '[attr.automation-id]': '"toolbar__font-size-button"',
    },
})
export class TuiFontSizeButtonTool extends TuiToolbarTool {
    protected readonly dropdown = tuiDropdown(null);

    protected readonly fontsOptions$ = inject(TUI_EDITOR_FONT_OPTIONS).pipe(
        map((texts) => this.options.fontOptions(texts)),
    );

    @ViewChild(forwardRef(() => TuiTextfieldDropdownDirective), {read: TemplateRef})
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.fontSize;
    }

    protected getHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.font;
    }

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
