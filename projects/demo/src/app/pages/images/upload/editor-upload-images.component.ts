import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';

import {
    defaultEditorExtensions,
    TUI_EDITOR_EXTENSIONS,
} from '../../../../../../tui-editor';

@Component({
    selector: 'editor-upload-images',
    templateUrl: './editor-upload-images.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export class ExampleTuiEditorUploadingImagesComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        'image-loader.ts': import('./examples/1/image-loader.ts?raw'),
        'imgbb.service.ts': import('./examples/1/imgbb.service.ts?raw'),
    };
}
