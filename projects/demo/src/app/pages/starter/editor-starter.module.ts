import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    TuiAddonDocModule,
    tuiGenerateRoutes,
    TuiTextCodeModule,
} from '@taiga-ui/addon-doc';
import {TuiAutoFocusModule} from '@taiga-ui/cdk';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiIslandModule, TuiMarkerIconModule} from '@taiga-ui/kit';
import {TuiEditorModule, TuiEditorSocketModule} from '@tbank/tui-editor';

import {TuiEditorStarterPageComponent} from './editor-starter.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiIslandModule,
        TuiLinkModule,
        TuiMarkerIconModule,
        TuiTextCodeModule,
        TuiEditorModule,
        TuiAutoFocusModule,
        ReactiveFormsModule,
        RouterModule.forChild(tuiGenerateRoutes(TuiEditorStarterPageComponent)),
        TuiEditorSocketModule,
    ],
    declarations: [TuiEditorStarterPageComponent],
    exports: [TuiEditorStarterPageComponent],
})
export class ExampleTuiEditorStarterModule {}
