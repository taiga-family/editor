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
    TuiTextfield,
    TuiTextfieldDropdownDirective,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import {type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';
import {TuiPaletteModule} from '@taiga-ui/legacy';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    selector: 'button[tuiPaintTool]',
    imports: [TuiPaletteModule, TuiTextfield],
    template: `
        {{ tuiHint() }}

        <ng-container *tuiTextfieldDropdown>
            <tui-palette
                tuiPalette
                [colors]="colors()"
                (selectedColor)="setCellColor($event)"
            />
        </ng-container>

        @if (!isBlankColor()) {
            <div
                tuiPlate
                [style.background]="editor()?.getCellColor() ?? editor()?.getGroupColor()"
            ></div>
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool, TuiDropdownDirective, TuiWithDropdownOpen],
    host: {tuiPlateHost: ''},
})
export class TuiPaintButtonTool extends TuiToolbarTool {
    protected readonly dropdown = tuiDropdown(null);
    protected readonly open = tuiDropdownOpen();

    public readonly colors = input(this.options.backgroundColors ?? this.options.colors);

    protected readonly template = viewChild(
        forwardRef(() => TuiTextfieldDropdownDirective),
        {read: TemplateRef},
    );

    protected readonly templateEffect = effect(() => {
        this.dropdown.set(this.template());
    });

    protected override isActive(): boolean {
        return !this.isBlankColor();
    }

    protected override getDisableState(): boolean {
        return !(
            this.editor()?.isActive('table') ??
            this.editor()?.isActive('group') ??
            false
        );
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.paint;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return this.open()
            ? ''
            : (this.editor()?.isActive('group') && (texts?.hiliteGroup ?? '')) ||
                  (this.editor()?.isActive('table') && (texts?.cellColor ?? '')) ||
                  '';
    }

    protected setCellColor(color: string): void {
        if (this.editor()?.isActive('group')) {
            this.editor()?.setGroupHilite(color);
        } else if (this.editor()?.isActive('table')) {
            this.editor()?.setCellColor(color);
        }
    }

    protected isBlankColor(): boolean {
        return this.getColor() === this.options.blankColor || this.getColor() === '';
    }

    protected getColor(): string {
        return this.editor()?.getCellColor() ?? this.editor()?.getGroupColor() ?? '';
    }
}
