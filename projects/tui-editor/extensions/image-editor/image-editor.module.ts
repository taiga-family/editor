import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';
import {TuiDataListDropdownManagerModule} from '@taiga-ui/kit';
import {TuiEditorResizableModule} from '@tinkoff/tui-editor/components/editor-resizable';

import {TuiImageEditorComponent} from './image-editor.component';
import {TuiImageOptionsPositionDirective} from './image-options-position.directive';
import {TuiImageAlignComponent} from './options/image-align/image-align.component';

@NgModule({
    imports: [
        CommonModule,
        TuiEditorResizableModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiDataListDropdownManagerModule,
        TuiActiveZoneModule,
        TuiDropdownModule,
        TuiDataListModule,
    ],
    declarations: [
        TuiImageEditorComponent,
        TuiImageOptionsPositionDirective,
        TuiImageAlignComponent,
    ],
    exports: [TuiImageEditorComponent],
})
export class TuiImageEditorModule {}
