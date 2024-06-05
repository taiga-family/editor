import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLinkDirective} from '@taiga-ui/core';
import {TUI_EDITOR_DEFAULT_EXTENSIONS, TUI_EDITOR_EXTENSIONS} from '@tbank/tui-editor';

@Component({
    standalone: true,
    imports: [TuiAddonDoc, TuiLinkDirective, RouterLink],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: TUI_EDITOR_DEFAULT_EXTENSIONS,
        },
    ],
})
export default class ExampleComponent {
    protected readonly component1 = import('./examples/1');

    protected readonly example1: TuiDocExample = {
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
