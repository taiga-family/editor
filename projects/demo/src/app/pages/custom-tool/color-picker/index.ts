import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiAddonDoc, RouterLink, TuiLink],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    protected readonly component1 = import('./examples/1');
    protected readonly example1 = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
        './custom-color-picker/custom-color-picker.component.ts': import(
            './examples/1/custom-color-picker/index.ts?raw'
        ),
        './custom-color-picker/custom-color-picker.component.less': import(
            './examples/1/custom-color-picker/index.less?raw'
        ),
        './custom-color-picker/custom-color-picker.component.html': import(
            './examples/1/custom-color-picker/index.html?raw'
        ),
    };
}
