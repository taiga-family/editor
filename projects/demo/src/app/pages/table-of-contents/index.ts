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
        TypeScript: import('./examples/1/index.ts?raw'),
        LESS: import('./examples/1/index.less?raw'),
        './my-toc.html': import('./examples/1/my-toc/index.html?raw'),
        './my-toc.ts': import('./examples/1/my-toc/index.ts?raw'),
        './my-toc.less': import('./examples/1/my-toc/index.less?raw'),
    };
}
