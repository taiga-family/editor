import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TUI_EDITOR_DEFAULT_EXTENSIONS, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

import {TuiEditorAppearanceExample1} from './examples/1';

@Component({
    standalone: true,
    selector: 'editor-anchors',
    imports: [TuiAddonDocModule, TuiEditorAppearanceExample1],
    templateUrl: './editor-appearence.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: TUI_EDITOR_DEFAULT_EXTENSIONS,
        },
    ],
})
export default class ExampleTuiEditorToolbarComponent {
    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };
}
