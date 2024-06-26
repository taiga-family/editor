```ts
import 'zone.js';

import {importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {tuiSvgOptionsProvider} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@taiga-ui/dompurify';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    tuiSvgOptionsProvider({
      path: 'https://taiga-ui.dev/assets/taiga-ui/icons',
    }),
  ],
}).catch(err => console.error(err));
```
