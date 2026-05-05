import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorImagePreview,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiAccordion} from '@taiga-ui/kit';

import {ImagePreviewExample} from './image-preview/image-preview.component';

@Component({
    imports: [
        ImagePreviewExample,
        ReactiveFormsModule,
        TuiAccordion,
        TuiEditor,
        TuiEditorImagePreview,
        TuiEditorSocket,
    ],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideTuiEditor({image: true})],
})
export default class Example {
    protected readonly isE2E = inject(WA_IS_E2E);
    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];
    protected control = new FormControl('');

    constructor() {
        this.control.patchValue(
            '<p>Small image</p><img src="assets/images/lumberjack.png" width="300" /><p>Big image</p><img src="assets/images/big-wallpaper.jpg" width="500" />',
        );
    }
}
