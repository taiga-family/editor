import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {type ApplicationConfig} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import {
    TUI_DOC_DEFAULT_TABS,
    TUI_DOC_LOGO,
    TUI_DOC_PAGES,
    TUI_DOC_SOURCE_CODE,
    TUI_DOC_TITLE,
    type TuiDocSourceCodePathOptions,
} from '@taiga-ui/addon-doc';
import {provideTaiga} from '@taiga-ui/core';
import {provideHighlightOptions} from 'ngx-highlightjs';

import {DEMO_PAGES} from './app.pages';
import {routes} from './app.routes';
import {TUI_LOGO_CONTENT} from './shared/logo';

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
        provideTaiga(),
        provideHighlightOptions({
            coreLibraryLoader: async () => import('highlight.js/lib/core'),
            lineNumbersLoader: async () => import('ngx-highlightjs/line-numbers'),
            languages: {
                typescript: async () => import('highlight.js/lib/languages/typescript'),
                less: async () => import('highlight.js/lib/languages/less'),
                xml: async () => import('highlight.js/lib/languages/xml'),
                bash: async () => import('highlight.js/lib/languages/bash'),
            },
        }),
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
        {
            provide: TUI_DOC_TITLE,
            useValue: 'Editor | ',
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
                const link = 'https://github.com/taiga-family/editor/tree/main/libs';

                if (context.path) {
                    return `${link}/${context.path}`;
                }

                if (context.package.toLowerCase() !== 'kit') {
                    return null;
                }

                return `${link}/${context.package.toLowerCase()}/src/lib/editor/${`${context.header[0]?.toLowerCase() ?? ''}${context.header.slice(1)}`.replaceAll(
                    /[A-Z]/g,
                    (m: string) => `-${m.toLowerCase()}`,
                )}`;
            },
        },
    ],
};
