import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@tinkoff/tui-editor';

@Component({
    selector: 'tui-editor-groups-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tinkoff/tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tinkoff/tui-editor/extensions/group').then(
                    ({createGroupExtension}) =>
                        createGroupExtension({
                            draggable: false,

                            // @note: you can override css styles with your own classes
                            groupNodeClass: 'group',
                            groupPointerNodeClass: '', // anyway element doesn't exists if `draggable` is false
                        }),
                ),
            ],
        },
    ],
})
export class TuiEditorGroupExample3 {
    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Group];

    control = new FormControl('');

    constructor() {
        this.control.patchValue(
            '<p>This is a boring paragraph.</p><div data-type="group"><p>And another paragraph.</p><div data-type="group"><p>And a nested paragraph.</p><div data-type="group"><p>But can we go deeper?</p></div></div></div><p>Let’s finish with a boring paragraph.</p>',
        );
    }
}
