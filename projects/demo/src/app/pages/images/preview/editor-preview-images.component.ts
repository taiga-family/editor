import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiDocExample, TuiDocExampleModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

import {TuiEditorPreviewImagesExample1} from './examples/1';

@Component({
    standalone: true,
    selector: 'editor-preview-images',
    imports: [
        TuiEditorPreviewImagesExample1,
        TuiDocExampleModule,
        TuiDocPageModule,
        TuiLinkModule,
        RouterLink,
    ],
    templateUrl: './editor-preview-images.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export default class ExampleTuiEditorResizableImagesComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        'image-preview/image-preview.template.html': import(
            './examples/1/image-preview/image-preview.template.html?raw'
        ),
        'image-preview/image-preview.style.less': import(
            './examples/1/image-preview/image-preview.style.less?raw'
        ),
        'image-preview/image-preview.component.ts': import(
            './examples/1/image-preview/image-preview.component.ts?raw'
        ),
    };
}
