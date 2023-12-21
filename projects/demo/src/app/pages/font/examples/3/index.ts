import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiItemModule} from '@taiga-ui/cdk';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorSocketComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

import {ExampleTuiFontSizeToolComponent} from './font-size-tool/font-size-tool.component';

@Component({
    standalone: true,
    selector: 'tui-editor-font-example-3',
    imports: [
        ReactiveFormsModule,
        ExampleTuiFontSizeToolComponent,
        TuiEditorSocketComponent,
        TuiEditorComponent,
        TuiItemModule,
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
