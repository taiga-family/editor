import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

import {CustomColorPickerComponent} from './custom-color-picker/custom-color-picker.component';

@Component({
    standalone: true,
    imports: [CustomColorPickerComponent, ReactiveFormsModule, TuiEditorComponent],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tiptap/extension-text-style').then(
                    ({default: TextStyle}) => TextStyle,
                ),
                import('@tinkoff/tui-editor').then(({TuiFontColor}) => TuiFontColor),
                import('@tinkoff/tui-editor').then(
                    ({TuiBackgroundColor}) => TuiBackgroundColor,
                ),
            ],
        },
    ],
})
export default class ExampleComponent {
    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected readonly control = new FormControl('');
}
