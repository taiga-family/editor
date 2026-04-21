import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';

@Component({
    imports: [TuiAddonDoc, TuiLink],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    protected readonly component1 = import('./examples/1');
    protected readonly example1 = {
        TypeScript: import('./examples/1/index.ts?raw', {with: {loader: 'text'}}),
        HTML: import('./examples/1/index.html?raw'),
    };
}
