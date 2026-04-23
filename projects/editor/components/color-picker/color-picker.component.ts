import {
    ChangeDetectionStrategy,
    Component,
    effect,
    EventEmitter,
    inject,
    input,
    Output,
} from '@angular/core';
import {DomSanitizer, type SafeStyle} from '@angular/platform-browser';
import {tuiRound} from '@taiga-ui/cdk/utils/math';
import {type TuiPoint} from '@taiga-ui/core/types';
import {TuiFlatPicker} from '@taiga-ui/editor/components/flat-picker';
import {TuiLinearPicker} from '@taiga-ui/editor/components/linear-picker';
import {tuiHsvToRgb, tuiRgbToHsv} from '@taiga-ui/editor/utils';

@Component({
    selector: 'tui-color-picker',
    imports: [TuiFlatPicker, TuiLinearPicker],
    templateUrl: './color-picker.template.html',
    styleUrl: './color-picker.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiColorPicker {
    private readonly sanitizer = inject(DomSanitizer);
    public readonly color = input<[number, number, number, number]>([0, 0, 0, 1]);
    protected point: TuiPoint = [0, 1];
    protected hue = 0;
    protected opacity = 1;

    protected readonly colorEffect = effect(() => {
        const color = this.color();

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
    });

    @Output()
    public readonly colorChange = new EventEmitter<
        [h: number, s: number, v: number, opacity: number]
    >();

    public get currentColor(): [h: number, s: number, v: number] {
        return this.getCurrentColor(this.hue, this.point);
    }

    public get base(): string {
        return `rgb(${tuiHsvToRgb(this.hue * 360, 1, 255)})`;
    }

    public get gradient(): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(
            `linear-gradient(to right, rgba(${this.currentColor.join(
                ',',
            )}, 0), rgb(${this.currentColor.join(',')}))`,
        );
    }

    public onPointChange(point: TuiPoint): void {
        this.point = point;
        this.updateColor();
    }

    public onHueChange(hue: number): void {
        this.hue = hue;
        this.updateColor();
    }

    public onOpacityChange(opacity: number): void {
        this.opacity = tuiRound(opacity, 2);
        this.updateColor();
    }

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
