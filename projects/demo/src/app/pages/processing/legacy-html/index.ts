import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDocExampleModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {TuiEditorLegacyHtmlExample1} from './examples/1';

@Component({
    standalone: true,
    imports: [
        TuiDocPageModule,
        TuiLinkModule,
        RouterLink,
        TuiDocExampleModule,
        TuiEditorLegacyHtmlExample1,
    ],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExampleComponent {
    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        './transformer.ts': import('./examples/1/transformer.ts?raw'),
        './legacy-editor.ts': import(
            '../../../../../../tui-editor/src/utils/legacy-converter.ts?raw'
        ),
    };
}
