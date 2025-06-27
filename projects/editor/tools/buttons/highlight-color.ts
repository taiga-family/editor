import {AsyncPipe, NgIf} from '@angular/common';
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
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';
import {TuiPaletteModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiToolbarButtonTool} from '../tool';

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
            <ng-container *ngIf="editor?.stateChange$ | async" />
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool, TuiDropdownDirective, TuiWithDropdownOpen],
    host: {
        tuiPlateHost: '',
        '[attr.automation-id]': '"toolbar__hilite-button"',
    },
})
export class TuiHighlightColorButtonTool extends TuiToolbarButtonTool {
    protected readonly dropdown = tuiDropdown(null);

    @Input()
    public colors: ReadonlyMap<string, string> = inject(TUI_EDITOR_OPTIONS).colors;

    @ViewChild(forwardRef(() => TuiTextfieldDropdownDirective), {read: TemplateRef})
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
    }

    protected isBlankColor(): boolean {
        return this.editor?.getBackgroundColor() === this.options.blankColor;
    }

    protected override getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.textHilite;
    }

    protected override getHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.backColor;
    }
}
