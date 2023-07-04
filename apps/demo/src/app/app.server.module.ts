import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {UniversalModule} from '@ng-web-apis/universal';

import {TuiAppBrowserModule} from './app.browser.module';
import {TuiAppComponent} from './app.component';

@NgModule({
    imports: [TuiAppBrowserModule, ServerModule, UniversalModule],
    bootstrap: [TuiAppComponent],
})
export class TuiAppServerModule {}
