import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import type {SafeStyle} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import type {TuiFocusableElementAccessor, TuiNativeFocusableElement} from '@taiga-ui/cdk';
import {AbstractTuiControl, TuiActiveZoneDirective, tuiPure} from '@taiga-ui/cdk';
import {
    tuiDropdownOptionsProvider,
    TuiHostedDropdownComponent,
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldComponent,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';

import {tuiGetGradientData} from '../../utils/get-gradient-data';
import {tuiParseGradient} from '../../utils/parse-gradient';
import {tuiToGradient} from '../../utils/to-gradient';
import {TuiColorSelectorComponent} from '../color-selector/color-selector.component';

@Component({
    standalone: true,
    selector: 'tui-input-color',
    imports: [
        TuiHostedDropdownModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiColorSelectorComponent,
        TuiActiveZoneDirective,
    ],
    templateUrl: './input-color.template.html',
    styleUrls: ['./input-color.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [tuiDropdownOptionsProvider({maxHeight: 600})],
})
export class TuiInputColorComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    @ViewChild(TuiHostedDropdownComponent)
    private readonly dropdown?: TuiHostedDropdownComponent;

    private readonly domSanitizer = inject(DomSanitizer);

    @Input()
    public colors: ReadonlyMap<string, string> = new Map<string, string>();

    protected open = false;

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    public get focused(): boolean {
        return !!this.dropdown && this.dropdown.focused;
    }

    protected get background(): SafeStyle {
        return this.sanitize(this.value, this.domSanitizer);
    }

    @HostListener('click')
    protected onClick(): void {
        this.open = !this.open;
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
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
