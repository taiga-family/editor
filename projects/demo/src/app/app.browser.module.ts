import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    TUI_DOC_DEFAULT_TABS,
    TUI_DOC_LOGO,
    TUI_DOC_PAGES,
    TUI_DOC_SOURCE_CODE,
    TUI_DOC_TITLE,
    TuiDocHeaderModule,
    TuiDocMainModule,
    TuiDocSourceCodePathOptions,
} from '@taiga-ui/addon-doc';
import {TuiPreviewModule} from '@taiga-ui/addon-preview';
import {
    TUI_SANITIZER,
    TuiDialogModule,
    TuiLinkModule,
    TuiModeModule,
    TuiRootModule,
} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {MarkdownModule} from 'ngx-markdown';

import {TuiAppComponent} from './app.component';
import {DEMO_PAGES} from './app.pages';
import {TuiAppRoutingModule} from './app.routes';
import {TUI_LOGO_CONTENT} from './modules/logo/logo.component';
import {TuiLogoModule} from './modules/logo/logo.module';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({
            appId: `demo`,
        }),
        TuiAppRoutingModule,
        TuiRootModule,
        TuiDialogModule,
        TuiPreviewModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TuiLogoModule,
        MarkdownModule.forRoot({loader: HttpClient}),
        TuiDocMainModule,
        TuiLinkModule,
        TuiModeModule,
        TuiDocHeaderModule,
    ],
    declarations: [TuiAppComponent],
    providers: [
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
        {
            provide: TUI_DOC_TITLE,
            useValue: `TUI Editor | `,
        },
        {
            provide: TUI_DOC_LOGO,
            useValue: TUI_LOGO_CONTENT,
        },
        {
            provide: TUI_DOC_DEFAULT_TABS,
            useValue: [`Description and examples`, `API`],
        },
        {
            provide: TUI_DOC_PAGES,
            useValue: DEMO_PAGES,
        },
        {
            provide: TUI_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
        {
            provide: TUI_DOC_SOURCE_CODE,
            useValue: (context: TuiDocSourceCodePathOptions) => {
                const link = `https://github.com/taiga-family/tui-editor/tree/main/libs`;

                if (context.path) {
                    return `${link}/${context.path}`;
                }

                if (!context.package || context.package.toLowerCase() !== `kit`) {
                    return null;
                }

                return `${link}/${context.package.toLowerCase()}/src/lib/tui-editor/${(
                    context.header[0].toLowerCase() + context.header.slice(1)
                ).replace(/[A-Z]/g, (m: string) => `-${m.toLowerCase()}`)}`;
            },
        },
    ],
    bootstrap: [TuiAppComponent],
})
export class AppBrowserModule {}
