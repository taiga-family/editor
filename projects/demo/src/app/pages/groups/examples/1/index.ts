import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import type {Node} from '@tiptap/pm/model';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiEditor, TuiEditorSocket],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tiptap/extension-placeholder').then(({Placeholder}) =>
                    Placeholder.configure({
                        emptyNodeClass: 't-editor-placeholder',
                        placeholder: (({node}: {node: Node}) => {
                            if (node.type.name === 'paragraph') {
                                return "Type '/' for command";
                            }

                            return null;
                        }) as any,
                        showOnlyCurrent: true,
                        includeChildren: true,
                    }),
                ),
                import('@taiga-ui/editor').then(({tuiCreateGroupExtension}) =>
                    tuiCreateGroupExtension({nested: false, createOnEnter: true}),
                ),
            ],
        },
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
