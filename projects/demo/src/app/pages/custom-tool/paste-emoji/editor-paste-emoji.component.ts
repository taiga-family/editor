import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiDocExample, TuiDocExampleModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

import {TuiEditorPasteEmojiToolExample1} from './examples/1';

@Component({
    standalone: true,
    selector: 'editor-paste-emoji-tool',
    imports: [
        TuiEditorPasteEmojiToolExample1,
        TuiDocPageModule,
        TuiLinkModule,
        RouterLink,
        TuiDocExampleModule,
    ],
    templateUrl: './editor-paste-emoji.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export default class ExampleTuiEditorPasteEmojiToolComponent {
    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
        LESS: import('./examples/1/index.less?raw'),
        'smiles-tool/emoji.extension.ts': import(
            './examples/1/smiles-tool/emoji.extension.ts?raw'
        ),
        'smiles-tool/smiles-tool.component.ts': import(
            './examples/1/smiles-tool/smiles-tool.component.ts?raw'
        ),
        'smiles-tool/smiles-tool.template.html': import(
            './examples/1/smiles-tool/smiles-tool.template.html?raw'
        ),
        'smiles-tool/smiles-tool.styles.less': import(
            './examples/1/smiles-tool/smiles-tool.styles.less?raw'
        ),
    };
}
