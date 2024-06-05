import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@tbank/tui-editor';

@Component({
    selector: 'tui-editor-groups-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tbank/tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tbank/tui-editor/extensions/group').then(
                    ({createGroupExtension}) =>
                        createGroupExtension({
                            nested: false,
                            draggable: false,
                            createOnEnter: true,
                            // @note: you can override css styles with your own classes
                            groupNodeClass: 'filled-group',
                            groupPointerNodeClass: '', // anyway element doesn't exists if `draggable` is false
                        }),
                ),
                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
                import('@tbank/tui-editor/extensions/background-color').then(
                    ({BackgroundColor}) => BackgroundColor,
                ),
            ],
        },
    ],
})
export class TuiEditorGroupExample2 {
    readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Group,
        TuiEditorTool.Hilite,
    ];

    control = new FormControl('');

    constructor() {
        this.control.patchValue(
            '<div data-type="group" style="background-color: blue"><p>This is a boring paragraph.</p></div><div data-type="group"><p>And another paragraph.</p></div><div data-type="group" style="background-color: green"><p>Let’s finish with a boring paragraph.</p></div>',
        );
    }
}
