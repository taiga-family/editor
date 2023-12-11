import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

@Component({
    selector: 'editor-paste-emoji-tool',
    templateUrl: './editor-paste-emoji.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export class ExampleTuiEditorPasteEmojiToolComponent {
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
        'smiles-tool/smiles-tool.module.ts': import(
            './examples/1/smiles-tool/smiles-tool.module.ts?raw'
        ),
    };
}
