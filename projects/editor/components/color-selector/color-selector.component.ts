import {
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    input,
    model,
} from '@angular/core';
import {DomSanitizer, type SafeStyle} from '@angular/platform-browser';
import {tuiDefaultSort} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton, TuiDropdown, TuiGroup, TuiIcon} from '@taiga-ui/core';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiHint} from '@taiga-ui/core/portals/hint';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {type TuiGradientDirection} from '@taiga-ui/editor/common';
import {TuiColorEdit} from '@taiga-ui/editor/components/color-edit';
import {TuiColorPicker} from '@taiga-ui/editor/components/color-picker';
import {TuiLinearMultiPicker} from '@taiga-ui/editor/components/linear-multi-picker';
import {TuiEditorPalette} from '@taiga-ui/editor/components/palette';
import {
    tuiGetGradientData,
    tuiParseColor,
    tuiParseGradient,
} from '@taiga-ui/editor/utils';
import {TuiChevron} from '@taiga-ui/kit';

import {
    TUI_COLOR_SELECTOR_MODE_NAMES,
    TUI_COLOR_SELECTOR_OPTIONS,
    TuiColorSelectorMode,
} from './color-selector.options';

@Component({
    selector: 'tui-color-selector',
    imports: [
        TuiButton,
        TuiChevron,
        TuiColorEdit,
        TuiColorPicker,
        TuiEditorPalette,
        TuiGroup,
        TuiIcon,
        TuiLinearMultiPicker,
        ...TuiDataList,
        ...TuiDropdown,
        ...TuiHint,
    ],
    templateUrl: './color-selector.template.html',
    styleUrl: './color-selector.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiColorSelector {
    private readonly selectorOptions = inject(TUI_COLOR_SELECTOR_OPTIONS);
    private stops = new Map(this.selectorOptions.gradient.steps);
    private currentStop = this.selectorOptions.gradient.stop;
    private direction = this.selectorOptions.gradient.direction;
    private readonly sanitizer = inject(DomSanitizer);

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected open = false;
    protected rgba = this.selectorOptions.color;

    protected readonly colorEffect = effect(() => {
        const color = this.color();

        if (!color) {
            return;
        }

        if (color.startsWith('linear-gradient')) {
            this.parseGradient(color);
        } else {
            this.parseColor(color);
        }
    });

    public readonly colors = input(this.selectorOptions.colors);
    public readonly color = model<string>('');
    public readonly modes = inject(TUI_COLOR_SELECTOR_MODE_NAMES);
    public currentMode = this.modes[this.selectorOptions.mode];
    public readonly buttons = this.selectorOptions.gradient.buttons;

    public get selectorMode(): boolean {
        return this.selectorOptions.selectorMode;
    }

    public get palette(): Map<string, string> {
        return this.filterPalette(this.colors(), this.isGradient);
    }

    public get stopsKeys(): number[] {
        return this.getStopsKeys(this.stops);
    }

    public get currentColor(): [number, number, number, number] {
        return this.isGradient ? this.getStop(this.currentStop) : this.rgba;
    }

    public get gradient(): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(this.getGradient('to right'));
    }

    public get isGradient(): boolean {
        return this.currentMode === this.modes[TuiColorSelectorMode.Gradient];
    }

    public getIcon(direction: TuiGradientDirection): string {
        return this.selectorOptions.gradient.icons[direction];
    }

    public isModeActive(mode: string): boolean {
        return this.currentMode === mode;
    }

    public isDirectionActive(direction: TuiGradientDirection): boolean {
        return this.direction === direction;
    }

    public onPalettePick(color: string): void {
        this.updateColor(color);
    }

    public onDirectionChange(direction: TuiGradientDirection): void {
        this.direction = direction;
        this.updateColor(this.getGradient(direction));
    }

    public onModeSelect(mode: string): void {
        this.currentMode = mode;
        this.open = false;

        this.updateColor(
            mode === this.modes[TuiColorSelectorMode.SolidColor]
                ? `rgba(${this.rgba.join(', ')})`
                : this.getGradient(this.direction),
        );
    }

    public onIndexChange(index: number): void {
        this.currentStop = this.stopsKeys[index] ?? 0;
    }

    public onColorChange(color: [number, number, number, number]): void {
        if (!this.isGradient) {
            this.updateColor(`rgba(${color.join(', ')})`);

            return;
        }

        this.stops.set(this.currentStop, color);
        this.updateColor(this.getGradient(this.direction));
    }

    public onStopsChange(stopsKeys: readonly number[]): void {
        const removed = this.stopsKeys.find((item) => !stopsKeys.includes(item));
        const added = stopsKeys.find((item) => !this.stopsKeys.includes(item));

        if (removed === undefined && added !== undefined) {
            this.addStop(added);
        }

        if (removed !== undefined && added === undefined) {
            this.removeStop(removed);
        }

        if (removed !== undefined && added !== undefined) {
            this.replaceStop(removed, added);
        }

        this.updateColor(this.getGradient(this.direction));
    }

    private getStopsKeys(stops: Map<number, unknown>): number[] {
        return Array.from(stops.keys());
    }

    private filterPalette(
        colors: ReadonlyMap<string, string>,
        isGradient: boolean,
    ): Map<string, string> {
        const map = new Map(colors);

        map.forEach((value, key) => {
            if (
                (value.startsWith('linear-gradient') && !isGradient) ||
                (!value.startsWith('linear-gradient') && isGradient)
            ) {
                map.delete(key);
            }
        });

        return map;
    }

    private updateColor(color: string): void {
        this.color.set(color);
    }

    private getGradient(direction: TuiGradientDirection): string {
        return `linear-gradient(${direction}, ${[...this.stopsKeys]
            .sort(tuiDefaultSort)
            .map((key) => `rgba(${this.getStop(key).join(', ')}) ${key * 100}%`)
            .join(', ')})`;
    }

    private getStop(stop: number): [number, number, number, number] {
        return this.stops.get(stop) || this.selectorOptions.gradient.emptyStop;
    }

    private addStop(stop: number): void {
        const closest = this.stopsKeys.reduce(
            (prev, curr) => (Math.abs(curr - stop) < Math.abs(prev - stop) ? curr : prev),
            this.stopsKeys[0] ?? 0,
        );

        this.stops.set(stop, this.getStop(closest));
        this.stops = new Map(this.stops);
        this.currentStop = stop;
    }

    private removeStop(stop: number): void {
        this.stops.delete(stop);
        this.stops = new Map(this.stops);
        this.currentStop = this.stopsKeys[0] ?? 0;
    }

    private replaceStop(removed: number, added: number): void {
        const value = this.getStop(removed);

        this.currentStop = added;
        this.stops = new Map(
            this.stopsKeys.map<[number, [number, number, number, number]]>((key) =>
                key === removed ? [added, value] : [key, this.getStop(key)],
            ),
        );
    }

    private parseGradient(color: string): void {
        if (color === this.getGradient(this.direction)) {
            return;
        }

        const gradient = tuiParseGradient(tuiGetGradientData(color));

        this.direction = gradient.side;
        this.currentStop = this.selectorOptions.gradient.stop;
        this.stops = new Map(
            gradient.stops.length
                ? gradient.stops.map<[number, [number, number, number, number]]>(
                      ({color, position}) => [
                          Number.parseFloat(position) / 100,
                          tuiParseColor(color),
                      ],
                  )
                : this.selectorOptions.gradient.steps,
        );
    }

    private parseColor(color: string): void {
        this.currentStop = this.selectorOptions.gradient.stop;
        this.rgba = tuiParseColor(color);
    }
}
