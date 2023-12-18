import {InjectionToken} from '@angular/core';

export interface TuiEditableIframeOptions {
    maxHeight: number;
    maxWidth: number;
    minHeight: number;
    minWidth: number;
}

export interface TuiEditableIframe {
    allowfullscreen?: boolean | null;
    frameborder?: number | null;
    height?: number | string | null;
    src: string | null;
    width?: number | string | null;
}

/**
 * Size of resizable iframe inside editor
 */
export const TUI_IFRAME_EDITOR_OPTIONS = new InjectionToken<TuiEditableIframeOptions>(
    '[TUI_IFRAME_EDITOR_OPTIONS]',
    {
        factory: () => ({
            minWidth: 100,
            maxWidth: Infinity,
            minHeight: 100,
            maxHeight: Infinity,
        }),
    },
);
