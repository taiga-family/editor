import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiActiveZoneModule, TuiAutoFocusModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {
    TuiEditorModule,
    TuiEditorSocketModule,
    TuiToolbarModule,
} from '@tinkoff/tui-editor';

import {ExampleTuiEditorToolbarComponent} from './editor-appearence.component';
import {TuiEditorAppearanceExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiActiveZoneModule,
        TuiSvgModule,
        TuiLinkModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiAddonDocModule,
        FormsModule,
        ReactiveFormsModule,
        TuiEditorModule,
        TuiEditorSocketModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiEditorToolbarComponent)),
        TuiAutoFocusModule,
        TuiToolbarModule,
    ],
    declarations: [TuiEditorAppearanceExample1, ExampleTuiEditorToolbarComponent],
})
export class ExampleTuiEditorAppearanceModule {}
