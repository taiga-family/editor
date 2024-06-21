import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    inject,
    Input,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import type {SafeStyle} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {MaskitoDirective} from '@maskito/angular';
import type {MaskitoOptions} from '@maskito/core';
import {TuiActiveZone, TuiControl, tuiPure} from '@taiga-ui/cdk';
import {TuiDropdown, tuiDropdownOptionsProvider, TuiTextfield} from '@taiga-ui/core';

import {tuiGetGradientData} from '../../utils/get-gradient-data';
import {tuiParseGradient} from '../../utils/parse-gradient';
import {tuiToGradient} from '../../utils/to-gradient';
import {TuiColorSelector} from '../color-selector/color-selector.component';

type MaskMode = 'gradient' | 'hex' | 'rgb';

@Component({
    standalone: true,
    selector: 'tui-input-color',
    imports: [
        TuiDropdown,
        TuiTextfield,
        TuiColorSelector,
        TuiActiveZone,
        MaskitoDirective,
        FormsModule,
    ],
    templateUrl: './input-color.template.html',
    styleUrls: ['./input-color.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [tuiDropdownOptionsProvider({maxHeight: 600})],
})
export class TuiInputColor extends TuiControl<string> {
    private readonly domSanitizer = inject(DomSanitizer);

    protected open = false;

    @Input()
    public colors: ReadonlyMap<string, string> = new Map<string, string>();

    public get background(): SafeStyle {
        return this.sanitize(this.value(), this.domSanitizer);
    }

    public get maskitoMode(): MaskMode {
        if (this.value().startsWith('#')) {
            return 'hex';
        }

        return this.value().startsWith('rgb') ? 'rgb' : 'gradient';
    }

    @HostListener('click')
    protected onClick(): void {
        this.open = !this.open;
    }

    @tuiPure
    protected maskitoOptions(mode: MaskMode): MaskitoOptions | null {
        return mode === 'hex' ? {mask: ['#', ...new Array(6).fill(/[0-9a-f]/i)]} : null;
    }

    protected getFallbackValue(): string {
        return '#000000';
    }

    @tuiPure
    private sanitize(value: string, domSanitizer: DomSanitizer): SafeStyle | string {
        return value.startsWith('linear-gradient(')
            ? domSanitizer.bypassSecurityTrustStyle(
                  tuiToGradient(tuiParseGradient(tuiGetGradientData(value))),
              )
            : value;
    }
}
