import {ChangeDetectionStrategy, Component, inject, Injector} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TUI_IS_STACKBLITZ} from '@taiga-ui/cdk';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditor,
    TuiEditorImagePreview,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiPreview} from '@taiga-ui/kit';

import {ImagePreviewExample} from './image-preview/image-preview.component';

@Component({
    standalone: true,
    imports: [
        ImagePreviewExample,
        ReactiveFormsModule,
        TuiPreview,
        TuiEditorSocket,
        TuiEditorImagePreview,
        TuiEditor,
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
    private readonly isStackblitz = inject(TUI_IS_STACKBLITZ);
    private readonly relativePath = this.isStackblitz ? 'https://taiga-ui.dev/' : '';

    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];

    protected control = new FormControl('');

    constructor() {
        this.control.patchValue(
            `<p>Small image</p><img src="${this.relativePath}assets/images/lumberjack.png" width="300" /><p>Big image</p><img src="${this.relativePath}assets/images/big-wallpaper.jpg" width="500" />`,
        );
    }
}
