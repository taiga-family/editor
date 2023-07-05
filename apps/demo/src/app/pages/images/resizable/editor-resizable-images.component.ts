import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

@Component({
    selector: 'editor-resizable-images',
    templateUrl: './editor-resizable-images.component.html',
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
    };
}
