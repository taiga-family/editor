import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

@Component({
    imports: [TuiAddonDoc],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    protected readonly component1 = import('./examples/1');

    protected readonly example1 = {
        TypeScript: import('./examples/1/index.ts?raw', {with: {loader: 'text'}}),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
        'mention.ts': import('./examples/1/mention/index.ts?raw', {
            with: {loader: 'text'},
        }),
        'filter.ts': import('./examples/1/mention/filter.ts?raw', {
            with: {loader: 'text'},
        }),
        'user.ts': import('./examples/1/mention/user.ts?raw', {with: {loader: 'text'}}),
        'mention.html': import('./examples/1/mention/index.html?raw'),
    };
}
