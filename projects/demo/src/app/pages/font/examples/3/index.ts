import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorModule,
    TuiEditorSocketModule,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

import {ExampleTuiFontSizeToolComponent} from './font-size-tool/font-size-tool.component';

@Component({
    standalone: true,
    selector: 'tui-editor-font-example-3',
    imports: [
        TuiEditorSocketModule,
        TuiEditorModule,
        ReactiveFormsModule,
        ExampleTuiFontSizeToolComponent,
    ],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tinkoff/tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tiptap/extension-text-style').then(
                    ({default: TextStyle}) => TextStyle,
                ),
                import('@tinkoff/tui-editor/extensions/font-size').then(
                    ({TuiFontSize}) => TuiFontSize,
                ),
            ],
        },
    ],
})
export class TuiEditorFontExample3 {
    readonly builtInTools = [TuiEditorTool.Undo];

    control = new FormControl(`
        <p>Hello</p>
        <p><span style="font-size: 24px">Hello world</span></p>
    `);
}
