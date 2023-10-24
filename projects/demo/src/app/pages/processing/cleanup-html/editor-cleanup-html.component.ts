import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'editor-cleanup-html',
    templateUrl: './editor-cleanup-html.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiEditorCleanupHtmlComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1?raw'),
        HTML: import('./examples/1/index.html?raw'),
        './transformer.ts': import('./examples/1/transformer.ts?raw'),
    };
}
