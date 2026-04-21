import {type ApplicationRef, ErrorHandler, mergeApplicationConfig} from '@angular/core';
import {bootstrapApplication, type BootstrapContext} from '@angular/platform-browser';
import {provideServerRendering} from '@angular/platform-server';
import {provideServerRouting, RenderMode, type ServerRoute} from '@angular/ssr';
import {ServerErrorHandler} from '@demo/shared/error-handler';
import {UNIVERSAL_PROVIDERS} from '@ng-web-apis/universal';

import {AppComponent} from './app/app.component';
import {appConfig} from './app/app.config';
import {routes} from './app/app.routes';

/* eslint-disable @typescript-eslint/require-await */

const serverConfig = mergeApplicationConfig(appConfig, {
    providers: [
        provideServerRendering(),
        provideServerRouting([
            {
                path: '',
                renderMode: RenderMode.Prerender,
                async getPrerenderParams() {
                    return [];
                },
            },
            ...routes
                .filter(
                    (route) =>
                        route.path && !route.path.includes('/') && route.path !== '**',
                )
                .map((route) => route.path!)
                .map(
                    (path): ServerRoute => ({
                        path: `${path}/:tab`,
                        renderMode: RenderMode.Prerender,
                        async getPrerenderParams() {
                            return ['API'].map((tab) => ({tab}));
                        },
                    }),
                ),
            {path: '**', renderMode: RenderMode.Server},
        ]),
        UNIVERSAL_PROVIDERS,
        {provide: ErrorHandler, useClass: ServerErrorHandler},
    ],
});

export default async (context: BootstrapContext): Promise<ApplicationRef> =>
    bootstrapApplication(AppComponent, serverConfig, context);
