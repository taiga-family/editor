import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {PreviewOutput} from '@demo/shared/preview-output';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {type Node} from '@tiptap/pm/model';

@Component({
    standalone: true,
    imports: [PreviewOutput, ReactiveFormsModule, TuiEditor, TuiEditorSocket],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor(
            {
                placeholder: {
                    emptyNodeClass: 't-editor-placeholder',
                    placeholder: ({node}: {node: Node}) => {
                        if (node.type.name === 'paragraph') {
                            return "Type '/' for command";
                        }

                        return '';
                    },
                    showOnlyCurrent: true,
                    includeChildren: true,
                },
            },
            async () =>
                import('@taiga-ui/editor/extensions/group').then(
                    ({tuiCreateGroupExtension}) =>
                        tuiCreateGroupExtension({nested: false, createOnEnter: true}),
                ),
        ),
    ],
})
export default class Example {
    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Group];

    protected control = new FormControl('');

    constructor() {
        this.control.patchValue(
            '<div data-type="group"><p>This is a boring paragraph.</p></div><div data-type="group"><p>And another draggable paragraph.</p></div><div data-type="group"><p>Let’s finish with a boring paragraph.</p></div>',
        );
    }
}
