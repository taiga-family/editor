import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiDocPageModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {ContenteditableValueAccessorModule} from '@tinkoff/tui-editor/angular-contenteditable-accessor';

import {TuiAngularContenteditableAccessorPageComponent} from './angular-contenteditable-accessor.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        ContenteditableValueAccessorModule,
        RouterModule.forChild(
            tuiGenerateRoutes(TuiAngularContenteditableAccessorPageComponent),
        ),
        TuiDocPageModule,
    ],
    declarations: [TuiAngularContenteditableAccessorPageComponent],
    exports: [TuiAngularContenteditableAccessorPageComponent],
})
export class ExampleAngularContenteditableAccessorModule {}
