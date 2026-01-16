import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TUI_IS_E2E, TuiItem} from '@taiga-ui/cdk';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiAccordion, TuiExpand} from '@taiga-ui/experimental';
import {type Node} from '@tiptap/pm/model';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiAccordion,
        TuiEditor,
        TuiEditorSocket,
        TuiExpand,
        TuiItem,
    ],
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

    protected readonly isE2E = inject(TUI_IS_E2E);

    protected control = new FormControl('');

    constructor() {
        this.control.patchValue(
            '<div data-type="group"><p>This is a boring paragraph.</p></div><div data-type="group"><p>And another draggable paragraph.</p></div><div data-type="group"><p>Let’s finish with a boring paragraph.</p></div>',
        );
    }
}
