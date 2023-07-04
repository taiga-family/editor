import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiIslandModule, TuiMarkerIconModule} from '@taiga-ui/kit';

import {TuiInstallationPageComponent} from './installation.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiIslandModule,
        TuiLinkModule,
        TuiMarkerIconModule,
        TuiNotificationModule,
        RouterModule.forChild(tuiGenerateRoutes(TuiInstallationPageComponent)),
    ],
    declarations: [TuiInstallationPageComponent],
    exports: [TuiInstallationPageComponent],
})
export class TuiInstallationPageModule {}
