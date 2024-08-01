import {InjectionToken} from '@angular/core';

export interface TuiImageEditorOptions {
    maxWidth: number | null;
    minWidth: number | null;
}

export interface TuiEditableImage {
    alt?: string;
    draggable?: '' | null;
    src: string;
    title?: string;
    width?: number | string | null;
    style?: string | null;
}

/**
 * Min size of resizable image inside editor
 * @deprecated use {@link TUI_IMAGE_EDITOR_OPTIONS} instead
 * TODO: remove in v4.0
 */
export const TUI_EDITOR_MIN_IMAGE_WIDTH = new InjectionToken<number | null>(
    `[TUI_EDITOR_MIN_IMAGE_WIDTH]`,
    {
        factory: () => null,
    },
);

/**
 * Max size of resizable image inside editor
 * @deprecated use {@link TUI_IMAGE_EDITOR_OPTIONS} instead
 * TODO: remove in v4.0
 */
export const TUI_EDITOR_MAX_IMAGE_WIDTH = new InjectionToken<number | null>(
    `[TUI_EDITOR_MAX_IMAGE_WIDTH]`,
    {
        factory: () => null,
    },
);

/**
 * Size of resizable image inside editor
 */
export const TUI_IMAGE_EDITOR_OPTIONS = new InjectionToken<TuiImageEditorOptions>(
    `[TUI_IMAGE_EDITOR_OPTIONS]`,
    {
        factory: () => ({
            minWidth: null,
            maxWidth: Infinity,
        }),
    },
);
