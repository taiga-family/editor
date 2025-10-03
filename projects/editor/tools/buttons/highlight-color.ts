import {AsyncPipe, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    Input,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {
    tuiDropdown,
    TuiDropdownDirective,
    tuiDropdownOpen,
    TuiTextfieldDropdownDirective,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import {type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';
import {TuiPaletteModule} from '@taiga-ui/legacy';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiHighlightColorTool]',
    imports: [AsyncPipe, NgIf, TuiPaletteModule, TuiTextfieldDropdownDirective],
    template: `
        {{ tuiHint() }}

        <ng-container *tuiTextfieldDropdown>
            <tui-palette
                tuiPalette
                [colors]="colors"
                (selectedColor)="editor?.setBackgroundColor($event)"
            />
        </ng-container>

        <div
            *ngIf="!isBlankColor()"
            tuiPlate
            [style.background]="editor?.getBackgroundColor()"
        >
            <ng-container *ngIf="editor?.valueChange$ | async" />
        </div>
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

    @Input()
    public colors: ReadonlyMap<string, string> =
        this.options.backgroundColors ?? this.options.colors;

    @ViewChild(forwardRef(() => TuiTextfieldDropdownDirective), {read: TemplateRef})
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
    }

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
        return this.editor?.getBackgroundColor() ?? '';
    }
}
