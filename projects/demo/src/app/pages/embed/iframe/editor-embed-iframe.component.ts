import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiDocExample, TuiDocExampleModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TUI_EDITOR_DEFAULT_EXTENSIONS, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

import {TuiEditorEmbedIframeExample1} from './examples/1';

@Component({
    standalone: true,
    selector: 'editor-embed-iframe',
    imports: [
        TuiEditorEmbedIframeExample1,
        TuiDocExampleModule,
        TuiDocPageModule,
        TuiLinkModule,
        RouterLink,
    ],
    templateUrl: './editor-embed-iframe.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: TUI_EDITOR_DEFAULT_EXTENSIONS,
        },
    ],
})
export default class ExampleTuiEditorEmbedIframeComponent {
    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
        LESS: import('./examples/1/index.less?raw'),
        'embed-tool/embed-tool.component.ts': import(
            './examples/1/embed-tool/embed-tool.component.ts?raw'
        ),
        'embed-tool/embed-tool.template.html': import(
            './examples/1/embed-tool/embed-tool.template.html?raw'
        ),
        'embed-tool/embed-tool.styles.less': import(
            './examples/1/embed-tool/embed-tool.styles.less?raw'
        ),
    };
}
