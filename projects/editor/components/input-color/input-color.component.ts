import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {DomSanitizer, type SafeStyle} from '@angular/platform-browser';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoOptions} from '@maskito/core';
import {TuiControl, tuiFallbackValueProvider} from '@taiga-ui/cdk';
import {TuiDropdown, tuiDropdownOptionsProvider} from '@taiga-ui/core';
import {TuiColorSelector} from '@taiga-ui/editor/components/color-selector';
import {
    tuiGetGradientData,
    tuiParseGradient,
    tuiToGradient,
} from '@taiga-ui/editor/utils';

@Component({
    selector: 'tui-input-color',
    imports: [MaskitoDirective, TuiColorSelector, ...TuiDropdown],
    templateUrl: './input-color.template.html',
    styleUrl: './input-color.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiFallbackValueProvider('#000000')],
    viewProviders: [tuiDropdownOptionsProvider({maxHeight: 600})],
})
export class TuiInputColorComponent extends TuiControl<string> {
    private readonly domSanitizer = inject(DomSanitizer);

    private readonly colorMode = computed(() => {
        const v = this.value();

        if (v.startsWith('#')) {
            return 'hex';
        }

        return v.startsWith('rgb') ? 'rgb' : 'gradient';
    });

    protected open = false;

    protected readonly background = computed<SafeStyle>(() => {
        const v = this.value();

        return v.startsWith('linear-gradient(')
            ? this.domSanitizer.bypassSecurityTrustStyle(
                  tuiToGradient(tuiParseGradient(tuiGetGradientData(v))),
              )
            : v;
    });

    protected readonly maskitoOptions = computed((): MaskitoOptions | null =>
        this.colorMode() === 'hex'
            ? {mask: ['#', ...Array.from<RegExp>({length: 6}).fill(/[0-9a-f]/i)]}
            : null,
    );

    public readonly colors = input<ReadonlyMap<string, string>>(new Map());

    protected onInput(event: Event): void {
        this.onChange((event.target as HTMLInputElement).value);
    }
}
