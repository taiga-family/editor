import {ChangeDetectionStrategy, Component, inject, Injector} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {
    TUI_EDITOR_EXTENSIONS,
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
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@taiga-ui/editor').then(({tuiCreateImageEditorExtension}) =>
                    tuiCreateImageEditorExtension({injector}),
                ),
            ],
        },
    ],
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
