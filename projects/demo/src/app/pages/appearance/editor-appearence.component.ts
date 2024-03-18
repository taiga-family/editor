import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TUI_EDITOR_DEFAULT_EXTENSIONS, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

@Component({
    selector: 'editor-anchors',
    templateUrl: './editor-appearence.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: TUI_EDITOR_DEFAULT_EXTENSIONS,
        },
    ],
})
export class ExampleTuiEditorToolbarComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };
}
