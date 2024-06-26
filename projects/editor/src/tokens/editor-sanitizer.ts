import {NgDompurifySanitizer} from '@taiga-ui/dompurify';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';
import {Sanitizer} from '@angular/core';

export const TUI_EDITOR_SANITIZER = tuiCreateTokenFromFactory<Sanitizer>(
    () => new NgDompurifySanitizer(),
);
