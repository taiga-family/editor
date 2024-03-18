import type {ApplicationRef} from '@angular/core';
import {importProvidersFrom, mergeApplicationConfig} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideServerRendering, ServerModule} from '@angular/platform-server';
import {UNIVERSAL_PROVIDERS} from '@ng-web-apis/universal';

import {AppComponent} from './app/app.component';
import {appConfig} from './app/app.config';

const serverConfig = mergeApplicationConfig(appConfig, {
    providers: [
        importProvidersFrom(ServerModule),
        provideServerRendering(),
        UNIVERSAL_PROVIDERS,
    ],
});

export default async (): Promise<ApplicationRef> =>
    bootstrapApplication(AppComponent, serverConfig);
