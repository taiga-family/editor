import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiIslandModule, TuiMarkerIconModule} from '@taiga-ui/kit';

import {WhatIsTuiEditorPageComponent} from './what-is-tui-editor.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiIslandModule,
        TuiLinkModule,
        TuiMarkerIconModule,
        RouterModule.forChild(tuiGenerateRoutes(WhatIsTuiEditorPageComponent)),
    ],
    declarations: [WhatIsTuiEditorPageComponent],
    exports: [WhatIsTuiEditorPageComponent],
})
export class WhatIsTuiEditorPageModule {}
