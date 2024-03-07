import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import type {SafeStyle} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {tuiHsvToRgb, tuiPure, tuiRgbToHsv, tuiRound} from '@taiga-ui/cdk';
import type {TuiPoint} from '@taiga-ui/core';

import {TuiFlatPickerComponent} from '../flat-picker/flat-picker.component';
import {TuiLinearPickerComponent} from '../linear-picker/linear-picker.component';

@Component({
    standalone: true,
    selector: 'tui-color-picker',
    imports: [TuiFlatPickerComponent, TuiLinearPickerComponent],
    templateUrl: './color-picker.template.html',
    styleUrls: ['./color-picker.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiColorPickerComponent {
    private readonly sanitizer = inject(DomSanitizer);

    @Output()
    public readonly colorChange = new EventEmitter<
        [h: number, s: number, v: number, opacity: number]
    >();

    protected point: TuiPoint = [0, 1];
    protected hue = 0;
    protected opacity = 1;

    @Input()
    public set color(color: [h: number, s: number, v: number, opacity: number]) {
        if (
            this.currentColor.every((item, index) => item === color[index]) &&
            color[3] === this.opacity
        ) {
            return;
        }

        const [h, s, v] = tuiRgbToHsv(color[0], color[1], color[2]);

        this.opacity = color[3];
        this.hue = h / 360;
        this.point = [s, 1 - v / 255];
    }

    protected get currentColor(): [h: number, s: number, v: number] {
        return this.getCurrentColor(this.hue, this.point);
    }

    protected get base(): string {
        return `rgb(${tuiHsvToRgb(this.hue * 360, 1, 255)})`;
    }

    protected get gradient(): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(
            `linear-gradient(to right, rgba(${this.currentColor.join(
                ',',
            )}, 0), rgb(${this.currentColor.join(',')}))`,
        );
    }

    protected onPointChange(point: TuiPoint): void {
        this.point = point;
        this.updateColor();
    }

    protected onHueChange(hue: number): void {
        this.hue = hue;
        this.updateColor();
    }

    protected onOpacityChange(opacity: number): void {
        this.opacity = tuiRound(opacity, 2);
        this.updateColor();
    }

    @tuiPure
    private getCurrentColor(
        hue: number,
        point: TuiPoint,
    ): [h: number, s: number, v: number] {
        return tuiHsvToRgb(hue * 360, point[0], (1 - point[1]) * 255);
    }

    private updateColor(): void {
        this.colorChange.emit([...this.currentColor, this.opacity]);
    }
}
