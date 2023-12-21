import {InjectionToken} from '@angular/core';

export interface TuiImageEditorOptions {
    maxWidth: number;
    minWidth: number;
}

export interface TuiEditableImage {
    alt?: string;
    draggable?: '' | null;
    src: string;
    title?: string;
    width?: number | string;
}

/**
 * Size of resizable image inside editor
 */
export const TUI_IMAGE_EDITOR_OPTIONS = new InjectionToken<TuiImageEditorOptions>(
    '[TUI_IMAGE_EDITOR_OPTIONS]',
    {
        factory: () => ({
            minWidth: 100,
            maxWidth: Infinity,
        }),
    },
);
