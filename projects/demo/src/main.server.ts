import {APP_BASE_HREF} from '@angular/common';
import {type ApplicationRef, ErrorHandler, mergeApplicationConfig} from '@angular/core';
import {bootstrapApplication, type BootstrapContext} from '@angular/platform-browser';
import {provideServerRendering} from '@angular/platform-server';
import {provideServerRouting, RenderMode} from '@angular/ssr';
import {ServerErrorHandler} from '@demo/shared/error-handler';
import {UNIVERSAL_PROVIDERS} from '@ng-web-apis/universal';

import {AppComponent} from './app/app.component';
import {appConfig} from './app/app.config';

/* eslint-disable @typescript-eslint/require-await */

const serverConfig = mergeApplicationConfig(appConfig, {
    providers: [
        provideServerRendering(),
        provideServerRouting([
            {
                path: '**',
                renderMode: RenderMode.Prerender,
                async getPrerenderParams() {
                    return [];
                },
            },
        ]),
        UNIVERSAL_PROVIDERS,
        {provide: ErrorHandler, useClass: ServerErrorHandler},
        {provide: APP_BASE_HREF, useValue: '/'},
    ],
});

export default async (context: BootstrapContext): Promise<ApplicationRef> =>
    bootstrapApplication(AppComponent, serverConfig, context);
