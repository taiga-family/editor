import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiDocExample, TuiDocExampleModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {TuiEditorColorPickerToolExample1} from './examples/1';

@Component({
    standalone: true,
    selector: 'editor-color-picker-tool',
    imports: [
        TuiEditorColorPickerToolExample1,
        TuiDocExampleModule,
        RouterLink,
        TuiLinkModule,
        TuiDocPageModule,
    ],
    templateUrl: './editor-color-picker.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExampleTuiEditorColorPickerToolComponent {
    readonly example1: TuiDocExample = {
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
        './custom-color-picker/custom-color-picker.module.ts': import(
            './examples/1/custom-color-picker/custom-color-picker.module.ts?raw'
        ),
    };
}
