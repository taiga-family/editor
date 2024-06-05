import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiEditorModule, TuiEditorSocketModule} from '@tbank/tui-editor';

import {ExampleTuiEditorCleanupHtmlComponent} from './editor-cleanup-html.component';
import {TuiEditorCleanupHtmlExample1} from './examples/1';

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
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiEditorCleanupHtmlComponent)),
    ],
    declarations: [TuiEditorCleanupHtmlExample1, ExampleTuiEditorCleanupHtmlComponent],
})
export class ExampleTuiEditorCleanupHtmlModule {}