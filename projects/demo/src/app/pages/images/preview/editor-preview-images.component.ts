import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@tbank/tui-editor';

@Component({
    selector: 'editor-preview-images',
    templateUrl: './editor-preview-images.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export class ExampleTuiEditorResizableImagesComponent {
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
        'image-preview/image-preview.module.ts': import(
            './examples/1/image-preview/image-preview.module.ts?raw'
        ),
    };
}
