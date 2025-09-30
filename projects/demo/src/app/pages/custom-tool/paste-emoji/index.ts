import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiAddonDoc, TuiLink],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    protected readonly component1 = import('./examples/1');

    protected readonly example1 = {
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
