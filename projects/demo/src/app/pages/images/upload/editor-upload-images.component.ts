import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiDocExample, TuiDocExampleModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

import {TuiEditorUploadingImagesExample1} from './examples/1';

@Component({
    standalone: true,
    selector: 'editor-upload-images',
    imports: [
        TuiDocExampleModule,
        TuiEditorUploadingImagesExample1,
        TuiDocPageModule,
        TuiLinkModule,
        RouterLink,
    ],
    templateUrl: './editor-upload-images.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export default class ExampleTuiEditorUploadingImagesComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        'image-loader.ts': import('./examples/1/image-loader.ts?raw'),
        'imgbb.service.ts': import('./examples/1/imgbb.service.ts?raw'),
    };
}
