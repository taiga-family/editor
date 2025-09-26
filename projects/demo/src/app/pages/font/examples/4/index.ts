import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {provideTuiEditor, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiEditor],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor({
            bold: false,
            italic: false,
            strike: false,
        }),
    ],
})
export default class Example {
    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected control = new FormControl('<p>Hello</p>');
}
