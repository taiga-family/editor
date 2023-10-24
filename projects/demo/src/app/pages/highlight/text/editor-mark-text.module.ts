import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule, TuiSvgModule} from '@taiga-ui/core';

import {TuiEditorModule, TuiEditorSocketModule} from '../../../../../../tui-editor';
import {ExampleTuiEditorMarkTextComponent} from './editor-mark-text.component';
import {TuiEditorMarkTextExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiSvgModule,
        TuiLinkModule,
        TuiButtonModule,
        TuiAddonDocModule,
        FormsModule,
        ReactiveFormsModule,
        TuiEditorModule,
        TuiEditorSocketModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiEditorMarkTextComponent)),
    ],
    declarations: [TuiEditorMarkTextExample1, ExampleTuiEditorMarkTextComponent],
})
export class ExampleTuiEditorMarkTextModule {}
