import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TUI_EDITOR_EXTENSIONS, TuiEditor, TuiEditorTool} from '@tbank/tui-editor';

import {CustomColorPicker} from './custom-color-picker/custom-color-picker.component';

@Component({
    standalone: true,
    imports: [CustomColorPicker, ReactiveFormsModule, TuiEditor],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tbank/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tiptap/extension-text-style').then(
                    ({default: TextStyle}) => TextStyle,
                ),
                import('@tbank/tui-editor').then(({TuiFontColor}) => TuiFontColor),
                import('@tbank/tui-editor').then(
                    ({TuiBackgroundColor}) => TuiBackgroundColor,
                ),
            ],
        },
    ],
})
export default class Example {
    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected readonly control = new FormControl('');
}
