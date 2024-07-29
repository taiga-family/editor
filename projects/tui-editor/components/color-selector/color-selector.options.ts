import {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiGradientDirection} from '@tinkoff/tui-editor/types';

export const TuiColorSelectorMode = {
    SolidColor: 0,
    Gradient: 1,
} as const;

export interface TuiColorSelectorOptions {
    readonly mode: (typeof TuiColorSelectorMode)[keyof typeof TuiColorSelectorMode];
    readonly selectorMode: boolean;
    readonly color: [number, number, number, number];
    readonly colors: ReadonlyMap<string, string>;
    readonly gradient: {
        readonly icons: Record<TuiGradientDirection, string>;
        readonly steps: ReadonlyArray<[number, [number, number, number, number]]>;
        readonly stop: number;
        readonly direction: TuiGradientDirection;
        readonly emptyStop: [number, number, number, number];
        readonly buttons: readonly TuiGradientDirection[];
    };
}

export const TUI_COLOR_SELECTOR_DEFAULT_OPTIONS: TuiColorSelectorOptions = {
    selectorMode: true,
    mode: TuiColorSelectorMode.SolidColor,
    color: [0, 0, 0, 1],
    colors: new Map<string, string>(),
    gradient: {
        icons: {
            'to top right': `tuiIconArrowUpRight`,
            'to right': `tuiIconArrowRight`,
            'to bottom right': `tuiIconArrowDownRight`,
            'to bottom': `tuiIconArrowDown`,
            'to bottom left': `tuiIconArrowDownLeft`,
            'to left': `tuiIconArrowLeft`,
            'to top left': `tuiIconArrowUpLeft`,
            'to top': `tuiIconArrowUp`,
        },
        steps: [
            [0, [0, 0, 0, 1]],
            [1, [255, 255, 255, 1]],
        ],
        stop: 0,
        direction: `to bottom`,
        emptyStop: [0, 0, 0, 0],
        buttons: [
            `to top right`,
            `to right`,
            `to bottom right`,
            `to bottom`,
            `to bottom left`,
            `to left`,
            `to top left`,
            `to top`,
        ],
    },
};

export const TUI_COLOR_SELECTOR_OPTIONS = tuiCreateToken(
    TUI_COLOR_SELECTOR_DEFAULT_OPTIONS,
);

export function tuiColorSelectorOptionsProvider(
    options: Partial<TuiColorSelectorOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_COLOR_SELECTOR_OPTIONS,
        options,
        TUI_COLOR_SELECTOR_DEFAULT_OPTIONS,
    );
}
