import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorImagePreview,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiAccordion} from '@taiga-ui/experimental';

import {ImagePreviewExample} from './image-preview/image-preview.component';

@Component({
    standalone: true,
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
    protected readonly isE2E = inject(TUI_IS_E2E);
    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];

    protected control = new FormControl('');

    constructor() {
        this.control.patchValue(
            '<p>Small image</p><img src="assets/images/lumberjack.png" width="300" /><p>Big image</p><img src="assets/images/big-wallpaper.jpg" width="500" />',
        );
    }
}
