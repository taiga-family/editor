import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiDocExample, TuiDocExampleModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TUI_EDITOR_DEFAULT_EXTENSIONS, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

import {TuiEditorAnchorsExample1} from './examples/1';

@Component({
    standalone: true,
    selector: 'editor-anchors',
    imports: [
        TuiEditorAnchorsExample1,
        TuiDocExampleModule,
        RouterLink,
        TuiLinkModule,
        TuiDocPageModule,
    ],
    templateUrl: './editor-anchors.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: TUI_EDITOR_DEFAULT_EXTENSIONS,
        },
    ],
})
export default class ExampleTuiEditorAnchorsComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };
}
