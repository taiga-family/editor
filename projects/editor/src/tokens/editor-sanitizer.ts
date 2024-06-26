import type {Sanitizer} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';
import {NgDompurifySanitizer} from '@taiga-ui/dompurify';

export const TUI_EDITOR_SANITIZER = tuiCreateTokenFromFactory<Sanitizer>(
    () => new NgDompurifySanitizer(),
);
