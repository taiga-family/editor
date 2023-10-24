import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';

import {
    defaultEditorExtensions,
    TUI_EDITOR_EXTENSIONS,
} from '../../../../../../tui-editor';

@Component({
    selector: 'editor-embed-html5',
    templateUrl: './editor-embed-html5.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export class ExampleTuiEditorEmbedHtml5Component {
    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
    };
}
