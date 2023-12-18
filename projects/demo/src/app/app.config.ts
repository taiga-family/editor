import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';
import {ApplicationConfig} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import {
    TUI_DOC_DEFAULT_TABS,
    TUI_DOC_LOGO,
    TUI_DOC_PAGES,
    TUI_DOC_SOURCE_CODE,
    TUI_DOC_TITLE,
    TuiDocSourceCodePathOptions,
} from '@taiga-ui/addon-doc';
import {TUI_SANITIZER, TuiDialogModule, TuiRootModule} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {MarkdownModule} from 'ngx-markdown';

import {DEMO_PAGES} from './app.pages';
import {routes} from './app.routes';
import {TUI_LOGO_CONTENT} from './modules/logo/logo.component';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideRouter(
            routes,
            withInMemoryScrolling({
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
            }),
        ),
        importProvidersFrom(
            TuiRootModule,
            TuiDialogModule,
            MarkdownModule.forRoot({loader: HttpClient}),
        ),
        {
            provide: TUI_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
        {
            provide: TUI_DOC_TITLE,
            useValue: 'TUI Editor | ',
        },
        {
            provide: TUI_DOC_LOGO,
            useValue: TUI_LOGO_CONTENT,
        },
        {
            provide: TUI_DOC_DEFAULT_TABS,
            useValue: ['Description and examples', 'API'],
        },
        {
            provide: TUI_DOC_PAGES,
            useValue: DEMO_PAGES,
        },
        {
            provide: TUI_DOC_SOURCE_CODE,
            useValue: (context: TuiDocSourceCodePathOptions) => {
                const link = 'https://github.com/taiga-family/tui-editor/tree/main/libs';

                if (context.path) {
                    return `${link}/${context.path}`;
                }

                if (!context.package || context.package.toLowerCase() !== 'kit') {
                    return null;
                }

                return `${link}/${context.package.toLowerCase()}/src/lib/tui-editor/${(
                    context.header[0].toLowerCase() + context.header.slice(1)
                ).replace(/[A-Z]/g, (m: string) => `-${m.toLowerCase()}`)}`;
            },
        },
    ],
};
