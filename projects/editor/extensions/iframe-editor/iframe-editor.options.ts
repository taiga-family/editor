/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {InjectionToken} from '@angular/core';
import {type TuiEditableIframeOptions} from '@taiga-ui/editor/common';

/**
 * Size of resizable iframe inside editor
 */
export const TUI_IFRAME_EDITOR_OPTIONS = new InjectionToken<TuiEditableIframeOptions>(
    ngDevMode ? 'TUI_IFRAME_EDITOR_OPTIONS' : '',
    {
        factory: () => ({
            minWidth: 100,
            maxWidth: Infinity,
            minHeight: 100,
            maxHeight: Infinity,
        }),
    },
);
