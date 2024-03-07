import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDocExampleModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TUI_EDITOR_DEFAULT_EXTENSIONS, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

import {TuiEditorGroupExample1} from './examples/1';
import {TuiEditorGroupExample2} from './examples/2';
import {TuiEditorGroupExample3} from './examples/3';

@Component({
    standalone: true,
    selector: 'editor-groups',
    imports: [
        TuiEditorGroupExample3,
        TuiDocExampleModule,
        TuiEditorGroupExample2,
        TuiEditorGroupExample1,
        TuiDocPageModule,
        TuiLinkModule,
        RouterLink,
    ],
    templateUrl: './editor-groups.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: TUI_EDITOR_DEFAULT_EXTENSIONS,
        },
    ],
})
export default class ExampleTuiEditorDraggableGroupsComponent {
    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };
}
