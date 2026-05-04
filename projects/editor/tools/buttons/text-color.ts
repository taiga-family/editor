import {
    ChangeDetectionStrategy,
    Component,
    effect,
    forwardRef,
    input,
    TemplateRef,
    viewChild,
} from '@angular/core';
import {
    tuiDropdown,
    TuiDropdownDirective,
    tuiDropdownOpen,
    TuiInput,
    TuiTextfieldDropdownDirective,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import {EDITOR_BLANK_COLOR, type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';
import {TuiPaletteModule} from '@taiga-ui/legacy';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    selector: 'button[tuiTextColorTool]',
    imports: [TuiInput, TuiPaletteModule],
    template: `
        {{ tuiHint() }}

        <ng-container *tuiDropdown>
            <tui-palette
                tuiPalette
                [colors]="colors()"
                (selectedColor)="editor()?.setFontColor($event)"
            />
        </ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool, TuiDropdownDirective, TuiWithDropdownOpen],
    host: {'[attr.automation-id]': '"toolbar__color-button"'},
})
export class TuiTextColorButtonTool extends TuiToolbarTool {
    protected readonly dropdown = tuiDropdown(null);
    protected readonly open = tuiDropdownOpen();

    protected readonly template = viewChild(
        forwardRef(() => TuiTextfieldDropdownDirective),
        {read: TemplateRef},
    );

    protected readonly templateEffect = effect(() => {
        this.dropdown.set(this.template());
    });

    public readonly colors = input(this.options.textColors ?? this.options.colors);

    protected override isActive(): boolean {
        return this.editor()?.getFontColor() !== EDITOR_BLANK_COLOR;
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.textColor;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return this.open() ? '' : (texts?.foreColor ?? '');
    }
}
