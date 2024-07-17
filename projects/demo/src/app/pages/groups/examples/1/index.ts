import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@tinkoff/tui-editor';
import type {Node} from '@tiptap/pm/model';

@Component({
    selector: 'tui-editor-groups-example-1',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tinkoff/tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tiptap/extension-placeholder').then(({Placeholder}) =>
                    Placeholder.configure({
                        emptyNodeClass: 't-editor-placeholder',
                        placeholder: (({node}: {node: Node}) => {
                            if (node.type.name === 'paragraph') {
                                return `Type '/' for command`;
                            }

                            return null;
                        }) as any,
                        showOnlyCurrent: true,
                        includeChildren: true,
                    }),
                ),
                import('@tinkoff/tui-editor/extensions/group').then(
                    ({createGroupExtension}) =>
                        createGroupExtension({nested: false, createOnEnter: true}),
                ),
            ],
        },
    ],
})
export class TuiEditorGroupExample1 {
    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Group];

    control = new FormControl('');

    constructor() {
        this.control.patchValue(
            '<div data-type="group"><p>This is a boring paragraph.</p></div><div data-type="group"><p>And another draggable paragraph.</p></div><div data-type="group"><p>Let’s finish with a boring paragraph.</p></div>',
        );
    }
}
