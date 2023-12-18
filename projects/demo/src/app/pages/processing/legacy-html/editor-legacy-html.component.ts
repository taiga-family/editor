import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiDocExample, TuiDocExampleModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {TuiEditorLegacyHtmlExample1} from './examples/1';

@Component({
    standalone: true,
    selector: 'editor-legacy-html',
    imports: [
        TuiDocPageModule,
        TuiLinkModule,
        RouterLink,
        TuiDocExampleModule,
        TuiEditorLegacyHtmlExample1,
    ],
    templateUrl: './editor-legacy-html.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExampleTuiEditorProcessingContentComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        './transformer.ts': import('./examples/1/transformer.ts?raw'),
        './legacy-editor.ts': import(
            '../../../../../../tui-editor/utils/legacy-converter.ts?raw'
        ),
    };
}
