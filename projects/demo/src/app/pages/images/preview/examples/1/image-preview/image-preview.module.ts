import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiPreviewModule} from '@taiga-ui/addon-preview';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiEditorImagePreviewModule} from '@tbank/tui-editor';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {ImagePreviewExampleComponent} from './image-preview.component';

@NgModule({
    imports: [
        CommonModule,
        TuiPreviewModule,
        TuiButtonModule,
        PolymorpheusModule,
        TuiEditorImagePreviewModule,
    ],
    declarations: [ImagePreviewExampleComponent],
    exports: [
        TuiEditorImagePreviewModule,
        TuiEditorImagePreviewModule,
        ImagePreviewExampleComponent,
    ],
})
export class ImagePreviewExampleModule {}
