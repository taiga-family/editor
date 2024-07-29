import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {tuiDefaultSort, tuiParseColor, tuiPure} from '@taiga-ui/cdk';
import {TuiHostedDropdownComponent} from '@taiga-ui/core';
import {
    TUI_EDITOR_COLOR_SELECTOR_MODE_NAMES,
    TUI_EDITOR_OPTIONS,
    TuiEditorOptions,
} from '@tinkoff/tui-editor/tokens';
import {TuiGradientDirection} from '@tinkoff/tui-editor/types';
import {tuiGetGradientData, tuiParseGradient} from '@tinkoff/tui-editor/utils';

import {
    TUI_COLOR_SELECTOR_OPTIONS,
    TuiColorSelectorMode,
    TuiColorSelectorOptions,
} from './color-selector.options';

@Component({
    selector: 'tui-color-selector',
    templateUrl: './color-selector.template.html',
    styleUrls: ['./color-selector.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiColorSelectorComponent {
    private stops = new Map(this.selectorOptions.gradient.steps);
    private currentStop = this.selectorOptions.gradient.stop;
    private direction = this.selectorOptions.gradient.direction;

    @Input()
    colors = this.selectorOptions.colors;

    @Input('color')
    set colorSetter(color: string) {
        if (color.startsWith('linear-gradient')) {
            this.parseGradient(color);
        } else {
            this.parseColor(color);
        }
    }

    @Output()
    readonly colorChange = new EventEmitter<string>();

    color = this.selectorOptions.color;

    currentMode = this.modes[this.selectorOptions.mode];

    readonly buttons = this.selectorOptions.gradient.buttons;

    constructor(
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(TUI_EDITOR_COLOR_SELECTOR_MODE_NAMES) readonly modes: [string, string],
        @Inject(TUI_COLOR_SELECTOR_OPTIONS)
        readonly selectorOptions: TuiColorSelectorOptions,
    ) {}

    get palette(): Map<string, string> {
        return this.filterPalette(this.colors, this.isGradient);
    }

    get stopsKeys(): number[] {
        return this.getStopsKeys(this.stops);
    }

    get currentColor(): [number, number, number, number] {
        return this.isGradient ? this.getStop(this.currentStop) : this.color;
    }

    get gradient(): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(this.getGradient('to right'));
    }

    get isGradient(): boolean {
        return this.currentMode === this.modes[TuiColorSelectorMode.Gradient];
    }

    getIcon(direction: TuiGradientDirection): string {
        return this.selectorOptions.gradient.icons[direction];
    }

    isModeActive(mode: string): boolean {
        return this.currentMode === mode;
    }

    isDirectionActive(direction: TuiGradientDirection): boolean {
        return this.direction === direction;
    }

    onPalettePick(color: string): void {
        this.updateColor(color);
    }

    onDirectionChange(direction: TuiGradientDirection): void {
        this.direction = direction;
        this.updateColor(this.getGradient(direction));
    }

    onModeSelect(mode: string, dropdown: TuiHostedDropdownComponent): void {
        this.currentMode = mode;
        dropdown.open = false;
        this.updateColor(
            mode === this.modes[TuiColorSelectorMode.SolidColor]
                ? `rgba(${this.color.join(', ')})`
                : this.getGradient(this.direction),
        );
    }

    onIndexChange(index: number): void {
        this.currentStop = this.stopsKeys[index];
    }

    onColorChange(color: [number, number, number, number]): void {
        if (!this.isGradient) {
            this.updateColor(`rgba(${color.join(', ')})`);

            return;
        }

        this.stops.set(this.currentStop, color);
        this.updateColor(this.getGradient(this.direction));
    }

    onStopsChange(stopsKeys: readonly number[]): void {
        const removed = this.stopsKeys.find(item => !stopsKeys.includes(item));
        const added = stopsKeys.find(item => !this.stopsKeys.includes(item));

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

    @tuiPure
    private getStopsKeys(stops: Map<number, unknown>): number[] {
        return Array.from(stops.keys());
    }

    @tuiPure
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
        this.colorChange.emit(color);
    }

    private getGradient(direction: TuiGradientDirection): string {
        return `linear-gradient(${direction}, ${[...this.stopsKeys]
            .sort(tuiDefaultSort)
            .map(key => `rgba(${this.getStop(key).join(', ')}) ${key * 100}%`)
            .join(', ')})`;
    }

    private getStop(stop: number): [number, number, number, number] {
        return this.stops.get(stop) || this.selectorOptions.gradient.emptyStop;
    }

    private addStop(stop: number): void {
        const closest = this.stopsKeys.reduce(
            (prev, curr) => (Math.abs(curr - stop) < Math.abs(prev - stop) ? curr : prev),
            this.stopsKeys[0],
        );

        this.stops.set(stop, this.getStop(closest));
        this.stops = new Map(this.stops);
        this.currentStop = stop;
    }

    private removeStop(stop: number): void {
        this.stops.delete(stop);
        this.stops = new Map(this.stops);
        this.currentStop = this.stopsKeys[0];
    }

    private replaceStop(removed: number, added: number): void {
        const value = this.getStop(removed);

        this.currentStop = added;
        this.stops = new Map(
            this.stopsKeys.map<[number, [number, number, number, number]]>(key =>
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
                          parseFloat(position) / 100,
                          tuiParseColor(color),
                      ],
                  )
                : this.selectorOptions.gradient.steps,
        );
    }

    private parseColor(color: string): void {
        this.currentStop = this.selectorOptions.gradient.stop;
        this.color = tuiParseColor(color);
    }
}
