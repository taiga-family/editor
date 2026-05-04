import {
    ChangeDetectionStrategy,
    Component,
    effect,
    forwardRef,
    input,
    TemplateRef,
    viewChild,
} from '@angular/core';
import { tuiDropdown, TuiDropdownDirective, tuiDropdownOpen, TuiTextfieldDropdownDirective, TuiWithDropdownOpen, TuiInput } from '@taiga-ui/core';
import {type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';
import {TuiPaletteModule} from '@taiga-ui/legacy';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    selector: 'button[tuiHighlightColorTool]',
    imports: [TuiPaletteModule, TuiInput],
    template: `
        {{ tuiHint() }}

        <ng-container *tuiDropdown>
            <tui-palette
                tuiPalette
                [colors]="colors()"
                (selectedColor)="editor()?.setBackgroundColor($event)"
            />
        </ng-container>

        @if (!isBlankColor()) {
            <div
                tuiPlate
                [style.background]="editor()?.getBackgroundColor()"
            ></div>
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool, TuiDropdownDirective, TuiWithDropdownOpen],
    host: {
        tuiPlateHost: '',
        '[attr.automation-id]': '"toolbar__hilite-button"',
    },
})
export class TuiHighlightColorButtonTool extends TuiToolbarTool {
    protected readonly dropdown = tuiDropdown(null);
    protected readonly open = tuiDropdownOpen();

    protected readonly template = viewChild(
        forwardRef(() => TuiTextfieldDropdownDirective),
        {read: TemplateRef},
    );

    protected readonly templateEffect = effect(() => {
        this.dropdown.set(this.template());
    });

    public readonly colors = input(this.options.backgroundColors ?? this.options.colors);

    protected override isActive(): boolean {
        return !this.isBlankColor();
    }

    protected isBlankColor(): boolean {
        return (
            this.getBackgroundColor() === this.options.blankColor ||
            this.getBackgroundColor() === 'transparent'
        );
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.textHilite;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return this.open() ? '' : (texts?.backColor ?? '');
    }

    protected getBackgroundColor(): string {
        return this.editor()?.getBackgroundColor() ?? '';
    }
}
