import type {Sanitizer} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

export const TUI_EDITOR_SANITIZER = tuiCreateTokenFromFactory<Sanitizer | null>(
    () => null,
);
