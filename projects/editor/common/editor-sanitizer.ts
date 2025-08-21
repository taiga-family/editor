/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {InjectionToken, type Sanitizer} from '@angular/core';

export const TUI_EDITOR_SANITIZER = new InjectionToken<Sanitizer | null>(
    ngDevMode ? 'TUI_EDITOR_SANITIZER' : '',
    {
        factory: () => null,
    },
);
