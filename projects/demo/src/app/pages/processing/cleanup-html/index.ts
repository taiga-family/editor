import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDocExampleModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {TuiEditorCleanupHtmlExample1} from './examples/1';

@Component({
    standalone: true,
    imports: [
        TuiEditorCleanupHtmlExample1,
        TuiDocExampleModule,
        TuiLinkModule,
        RouterLink,
        TuiDocPageModule,
    ],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExampleComponent {
    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        './transformer.ts': import('./examples/1/transformer.ts?raw'),
    };
}
