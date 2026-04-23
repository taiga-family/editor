import {ChangeDetectionStrategy, Component, model} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoOptions} from '@maskito/core';
import {TuiDropdown, TuiInput} from '@taiga-ui/core';
import {tuiHexToRgb, tuiRgbToHex} from '@taiga-ui/editor/utils';
import {TuiChevron, TuiDataListWrapper, TuiInputNumber, TuiSelect} from '@taiga-ui/kit';

const HEX_MODE_LENGTH = 6;

@Component({
    selector: 'tui-color-edit',
    imports: [
        FormsModule,
        MaskitoDirective,
        TuiChevron,
        TuiDataListWrapper,
        TuiInput,
        TuiInputNumber,
        TuiSelect,
        ...TuiDropdown,
    ],
    templateUrl: './color-edit.template.html',
    styleUrl: './color-edit.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiColorEdit {
    public readonly color = model<[number, number, number, number]>([0, 0, 0, 1]);

    public readonly hexMask: MaskitoOptions = {
        mask: new RegExp(String.raw`^[A-F\d]{0,${HEX_MODE_LENGTH}}$`, 'gi'),
    };

    public readonly modes = ['HEX', 'RGB'];
    public mode = this.modes[0];

    public get isHex(): boolean {
        return this.mode === this.modes[0];
    }

    public get hex(): string {
        return tuiRgbToHex(this.color()[0], this.color()[1], this.color()[2]).replace(
            '#',
            '',
        );
    }

    public get opacity(): number {
        return Math.round(this.color()[3] * 100);
    }

    public onHexChange(hex: string): void {
        if (hex.length !== HEX_MODE_LENGTH) {
            return;
        }

        const rgb = tuiHexToRgb(hex);

        this.updateColor([rgb[0], rgb[1], rgb[2], this.color()[3]]);
    }

    public onRgbChange(...rgba: [number, number, number, number]): void {
        this.updateColor(rgba);
    }

    private updateColor(color: [number, number, number, number]): void {
        this.color.set(color);
    }
}
