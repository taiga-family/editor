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
    protected readonly exampleOptions = import('./import/tokens/options.md?raw');

    protected readonly component1 = import('./examples/1');

    protected readonly example1 = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly component2 = import('./examples/2');

    protected readonly example2 = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };
}
