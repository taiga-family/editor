import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
    TuiDocCodeModule,
    TuiDocDemoModule,
    TuiDocDocumentationModule,
    TuiDocExample,
    TuiDocExampleModule,
    TuiDocPageModule,
} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiColorPickerComponent} from '@tinkoff/tui-editor';

import {TuiColorPickerExample1} from './examples/1';
import {TuiColorPickerExample2} from './examples/2';
import {TuiColorPickerExample3} from './examples/3';
import {TuiColorPickerExample4} from './examples/4';

@Component({
    standalone: true,
    selector: 'example-tui-color-picker',
    imports: [
        TuiDocPageModule,
        TuiDocExampleModule,
        TuiColorPickerExample1,
        TuiNotificationModule,
        TuiColorPickerExample4,
        TuiColorPickerExample2,
        TuiColorPickerExample3,
        TuiDocDemoModule,
        TuiDocDocumentationModule,
        TuiDocCodeModule,
        TuiLinkModule,
        TuiColorPickerComponent,
    ],
    templateUrl: './editor-input-color-picker.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExampleTuiColorPickerComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };
}
