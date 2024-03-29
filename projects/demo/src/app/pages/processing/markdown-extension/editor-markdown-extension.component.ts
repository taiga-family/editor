import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'editor-markdown',
    templateUrl: './editor-markdown-extension.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiEditorMarkdownExtensionComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };
}
