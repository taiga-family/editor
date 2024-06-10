import {NgForOf, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaskitoModule} from '@maskito/angular';
import type {MaskitoOptions} from '@maskito/core';
import {tuiHexToRgb, tuiRgbToHex} from '@taiga-ui/cdk';
import {TuiDataList, TuiDropdownOptionsDirective} from '@taiga-ui/core';
import {
    TuiInputNumberModule,
    TuiPrimitiveTextfieldModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiValueAccessorModule,
} from '@taiga-ui/legacy';

const HEX_MODE_LENGTH = 6;

@Component({
    standalone: true,
    selector: 'tui-color-edit',
    imports: [
        TuiSelectModule,
        TuiDropdownOptionsDirective,
        TuiTextfieldControllerModule,
        FormsModule,
        TuiDataList,
        TuiPrimitiveTextfieldModule,
        NgIf,
        MaskitoModule,
        TuiValueAccessorModule,
        NgForOf,
        TuiInputNumberModule,
    ],
    templateUrl: './color-edit.template.html',
    styleUrls: ['./color-edit.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiColorEdit {
    protected readonly modes = ['HEX', 'RGB'];
    protected mode = this.modes[0];
    protected readonly hexMask: MaskitoOptions = {
        mask: new RegExp(`^[A-F\\d]{0,${HEX_MODE_LENGTH}}$`, 'gi'),
    };

    @Input()
    public color: [number, number, number, number] = [0, 0, 0, 1];

    @Output()
    public readonly colorChange = new EventEmitter<[number, number, number, number]>();

    public get isHex(): boolean {
        return this.mode === this.modes[0];
    }

    public get hex(): string {
        return tuiRgbToHex(this.color[0], this.color[1], this.color[2]).replace('#', '');
    }

    public get opacity(): number {
        return Math.round(this.color[3] * 100);
    }

    public onHexChange(hex: string): void {
        if (hex.length !== HEX_MODE_LENGTH) {
            return;
        }

        const rgb = tuiHexToRgb(hex);

        this.updateColor([rgb[0], rgb[1], rgb[2], this.color[3]]);
    }

    public onRgbChange(...rgba: [number, number, number, number]): void {
        this.updateColor(rgba);
    }

    private updateColor(color: [number, number, number, number]): void {
        this.color = color;
        this.colorChange.emit(color);
    }
}
