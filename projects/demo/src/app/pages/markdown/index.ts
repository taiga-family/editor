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
        TypeScript: import('./examples/1?raw', {with: {loader: 'text'}}),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
        'example.md': import('./examples/1/example.md?raw'),
        'make-markdown.ts': import('./examples/1/make-markdown.ts?raw', {
            with: {loader: 'text'},
        }),
    };
}
