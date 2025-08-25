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
    tuiDropdownOpen,
    TuiTextfieldDropdownDirective,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import {TUI_EDITOR_OPTIONS, type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';
import {TuiPaletteModule} from '@taiga-ui/legacy';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiHighlightColorTool]',
    imports: [TuiPaletteModule, TuiTextfieldDropdownDirective],
    template: `
        {{ tuiHint() }}

        <ng-container *tuiTextfieldDropdown>
            <tui-palette
                tuiPalette
                [colors]="colors"
                (selectedColor)="editor?.setBackgroundColor($event)"
            />
        </ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool, TuiDropdownDirective, TuiWithDropdownOpen],
    host: {
        '[attr.automation-id]': '"toolbar__hilite-button"',
        '[style.--tui-text-primary]': 'getBackgroundColor()',
    },
})
export class TuiHighlightColorButtonTool extends TuiToolbarTool {
    protected readonly dropdown = tuiDropdown(null);
    protected readonly open = tuiDropdownOpen();

    @Input()
    public colors: ReadonlyMap<string, string> = inject(TUI_EDITOR_OPTIONS).colors;

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
