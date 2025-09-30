import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiContentTable} from '@demo/shared/content-table';
import {provideTuiEditor, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiContentTable, TuiEditor],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor({}, async () =>
            import('@taiga-ui/editor').then(({tuiCreateGroupExtension}) =>
                tuiCreateGroupExtension({
                    nested: false,
                    draggable: false,
                    createOnEnter: true,
                    // @note: you can override css styles with your own classes
                    groupNodeClass: 'filled-group',
                    groupPointerNodeClass: '', // anyway element doesn't exists if `draggable` is false
                }),
            ),
        ),
    ],
})
export default class Example {
    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Group,
        TuiEditorTool.Hilite,
    ];

    protected control = new FormControl('');

    constructor() {
        this.control.patchValue(
            '<div data-type="group" style="background-color: blue"><p>This is a boring paragraph.</p></div><div data-type="group"><p>And another paragraph.</p></div><div data-type="group" style="background-color: green"><p>Let’s finish with a boring paragraph.</p></div>',
        );
    }
}
