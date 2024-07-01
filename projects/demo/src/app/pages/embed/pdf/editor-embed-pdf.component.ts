import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

@Component({
    selector: 'editor-embed-pdf',
    templateUrl: './editor-embed-pdf.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export class ExampleTuiEditorEmbedPdfComponent {
    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
    };
}
