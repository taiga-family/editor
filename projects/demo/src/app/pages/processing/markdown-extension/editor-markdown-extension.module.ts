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
import {TuiTextareaModule} from '@taiga-ui/kit';
import {TuiEditorModule, TuiEditorSocketModule} from '@tinkoff/tui-editor';

import {ExampleTuiEditorMarkdownExtensionComponent} from './editor-markdown-extension.component';
import {TuiEditorEditorExample1} from './examples/1';

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
        RouterModule.forChild(
            tuiGenerateRoutes(ExampleTuiEditorMarkdownExtensionComponent),
        ),
        TuiTextareaModule,
    ],
    declarations: [TuiEditorEditorExample1, ExampleTuiEditorMarkdownExtensionComponent],
})
export class ExampleTuiEditorMarkdownExtensionModule {}
