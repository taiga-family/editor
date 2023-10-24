import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiDestroyService} from '@taiga-ui/cdk';

import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '../../../../../../../tui-editor';

@Component({
    selector: 'tui-editor-groups-example-1',
    templateUrl: './index.html',
    providers: [
        TuiDestroyService,
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('../../../../../../../tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tiptap/extension-placeholder').then(({Placeholder}) =>
                    Placeholder.configure({
                        emptyNodeClass: 't-editor-placeholder',
                        // eslint-disable-next-line @typescript-eslint/quotes
                        placeholder: "Type '/' for command", // Notion like
                        includeChildren: true,
                    }),
                ),
                import('../../../../../../../tui-editor/extensions/group').then(
                    ({createGroupExtension}) =>
                        createGroupExtension({nested: false, createOnEnter: true}),
                ),
            ],
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
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
