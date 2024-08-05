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
import {TuiAccordionModule} from '@taiga-ui/kit';
import {
    TuiEditorModule,
    TuiEditorSocketModule,
    TuiToolbarModule,
} from '@tinkoff/tui-editor';

import {ExampleTuiEditorSharedComponent} from './editor-toolbar-shared.component';
import {TuiEditorToolbarSharedExample1} from './examples/1';

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
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiEditorSharedComponent)),
        TuiToolbarModule,
        TuiAccordionModule,
    ],
    declarations: [TuiEditorToolbarSharedExample1, ExampleTuiEditorSharedComponent],
})
export class ExampleToolbarSharedModule {}
