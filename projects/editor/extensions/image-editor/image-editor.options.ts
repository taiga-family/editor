/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {InjectionToken} from '@angular/core';
import type {TuiImageEditorOptions} from '@taiga-ui/editor/common';

/**
 * Size of resizable image inside editor
 */
export const TUI_IMAGE_EDITOR_OPTIONS = new InjectionToken<TuiImageEditorOptions>(
    ngDevMode ? 'TUI_IMAGE_EDITOR_OPTIONS' : '',
    {
        factory: () => ({
            minWidth: null,
            maxWidth: Infinity,
        }),
    },
);
