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
    TuiTextfieldDropdownDirective,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';
import {TuiPaletteModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiPaintTool]',
    imports: [AsyncPipe, NgIf, TuiPaletteModule, TuiTextfieldDropdownDirective],
    template: `
        {{ tuiHint() }}

        <ng-container *tuiTextfieldDropdown>
            <tui-palette
                tuiPalette
                [colors]="colors"
                (selectedColor)="setCellColor($event)"
            />
        </ng-container>

        <div
            *ngIf="!isBlankColor()"
            tuiPlate
            [style.background]="editor?.getCellColor() ?? editor?.getGroupColor()"
        >
            <ng-container *ngIf="editor?.valueChange$ | async" />
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool, TuiDropdownDirective, TuiWithDropdownOpen],
    host: {
        tuiPlateHost: '',
    },
})
export class TuiPaintButtonTool extends TuiToolbarTool {
    protected readonly dropdown = tuiDropdown(null);

    @Input()
    public colors: ReadonlyMap<string, string> = this.options.colors;

    @ViewChild(forwardRef(() => TuiTextfieldDropdownDirective), {read: TemplateRef})
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
    }

    protected override getDisableState(): boolean {
        return !(
            this.editor?.isActive('table') ??
            this.editor?.isActive('group') ??
            false
        );
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.paint;
    }

    protected getHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return (
            (this.editor?.isActive('group') && texts.hiliteGroup) ||
            (this.editor?.isActive('table') && texts.cellColor) ||
            ''
        );
    }

    protected setCellColor(color: string): void {
        if (this.editor?.isActive('group')) {
            this.editor.setGroupHilite(color);
        } else if (this.editor?.isActive('table')) {
            this.editor.setCellColor(color);
        }
    }

    protected isBlankColor(): boolean {
        return (
            (this.editor?.getCellColor() ?? this.editor?.getGroupColor()) ===
            this.options.blankColor
        );
    }
}
