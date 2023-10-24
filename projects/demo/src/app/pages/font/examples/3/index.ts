import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '../../../../../../../tui-editor';

@Component({
    selector: 'tui-editor-font-example-3',
    templateUrl: './index.html',
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('../../../../../../../tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tiptap/extension-text-style').then(
                    ({default: TextStyle}) => TextStyle,
                ),
                import('../../../../../../../tui-editor/extensions/font-size').then(
                    ({TuiFontSize}) => TuiFontSize,
                ),
            ],
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEditorFontExample3 {
    readonly builtInTools = [TuiEditorTool.Undo];

    control = new FormControl(`
        <p>Hello</p>
        <p><span style="font-size: 24px">Hello world</span></p>
    `);
}
