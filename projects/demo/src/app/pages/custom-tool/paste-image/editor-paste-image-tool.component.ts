import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiDocExample, TuiDocExampleModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

import {TuiEditorPasteImageToolExample1} from './examples/1';

@Component({
    standalone: true,
    selector: 'editor-emoji-tool',
    imports: [
        TuiEditorPasteImageToolExample1,
        TuiDocPageModule,
        TuiLinkModule,
        RouterLink,
        TuiDocExampleModule,
    ],
    templateUrl: './editor-paste-image-tool.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export default class ExampleTuiEditorPasteImageToolComponent {
    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
        LESS: import('./examples/1/index.less?raw'),
        'image-tool/paste.extension.ts': import(
            './examples/1/image-tool/paste.extension.ts?raw'
        ),
        'image-tool/image-tool.component.ts': import(
            './examples/1/image-tool/image-tool.component.ts?raw'
        ),
        'image-tool/image-tool.template.html': import(
            './examples/1/image-tool/image-tool.template.html?raw'
        ),
        'image-tool/image-tool.styles.less': import(
            './examples/1/image-tool/image-tool.styles.less?raw'
        ),
    };
}
