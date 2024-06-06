import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiEditorModule, TuiEditorSocketModule} from '@tinkoff/tui-editor';

import {ExampleTuiEditorCheckboxComponent} from './editor-checkbox.component';
import {TuiEditorCheckboxExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        ReactiveFormsModule,
        TuiEditorModule,
        TuiEditorSocketModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiEditorCheckboxComponent)),
    ],
    declarations: [TuiEditorCheckboxExample1, ExampleTuiEditorCheckboxComponent],
})
export class ExampleTuiEditorCheckboxModule {}
