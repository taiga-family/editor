import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDocExampleModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDocExampleModule, RouterLink, TuiLinkDirective, TuiDocPageModule],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExampleComponent {
    protected readonly component1 = import('./examples/1');
    protected readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
        './custom-color-picker/custom-color-picker.component.ts': import(
            './examples/1/custom-color-picker/custom-color-picker.component.ts?raw'
        ),
        './custom-color-picker/custom-color-picker.component.less': import(
            './examples/1/custom-color-picker/custom-color-picker.component.less?raw'
        ),
        './custom-color-picker/custom-color-picker.component.html': import(
            './examples/1/custom-color-picker/custom-color-picker.component.html?raw'
        ),
    };
}
