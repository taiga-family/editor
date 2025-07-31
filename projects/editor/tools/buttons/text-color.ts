import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    inject,
    Input,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {
    tuiDropdown,
    TuiDropdownDirective,
    TuiTextfieldDropdownDirective,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import {TUI_EDITOR_OPTIONS} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n';
import {TuiPaletteModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiTextColorTool]',
    imports: [TuiPaletteModule, TuiTextfieldDropdownDirective],
    template: `
        {{ tuiHint() }}

        <ng-container *tuiTextfieldDropdown>
            <tui-palette
                tuiPalette
                [colors]="colors"
                (selectedColor)="editor?.setFontColor($event)"
            />
        </ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool, TuiDropdownDirective, TuiWithDropdownOpen],
    host: {
        '[attr.automation-id]': '"toolbar__color-button"',
    },
})
export class TuiTextColorButtonTool extends TuiToolbarTool {
    protected readonly dropdown = tuiDropdown(null);

    @Input()
    public colors: ReadonlyMap<string, string> = inject(TUI_EDITOR_OPTIONS).colors;

    @ViewChild(forwardRef(() => TuiTextfieldDropdownDirective), {read: TemplateRef})
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.textColor;
    }

    protected getHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.foreColor;
    }
}
