import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiDocExample, TuiDocExampleModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {TuiEditorCleanupHtmlExample1} from './examples/1';

@Component({
    standalone: true,
    selector: 'editor-cleanup-html',
    imports: [
        TuiEditorCleanupHtmlExample1,
        TuiDocExampleModule,
        TuiLinkModule,
        RouterLink,
        TuiDocPageModule,
    ],
    templateUrl: './editor-cleanup-html.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExampleTuiEditorCleanupHtmlComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        './transformer.ts': import('./examples/1/transformer.ts?raw'),
    };
}
