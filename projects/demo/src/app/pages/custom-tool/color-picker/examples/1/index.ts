import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {provideTuiEditor, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';

import {CustomColorPicker} from './custom-color-picker';

@Component({
    standalone: true,
    imports: [CustomColorPicker, ReactiveFormsModule, TuiEditor],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideTuiEditor()],
})
export default class Example {
    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected readonly control = new FormControl('');
}
