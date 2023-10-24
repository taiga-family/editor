import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '../../../../../tui-editor';

@Component({
    selector: 'editor-focus',
    templateUrl: './editor-focus.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export class ExampleTuiEditorFocusComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };
}
