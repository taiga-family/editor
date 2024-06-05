import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorSocketComponent,
    TuiEditorTool,
} from '@tbank/tui-editor';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiEditorComponent, TuiEditorSocketComponent],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tbank/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tiptap/extension-placeholder').then(({Placeholder}) =>
                    Placeholder.configure({
                        emptyNodeClass: 't-editor-placeholder',
                        placeholder: "Type '/' for command", // Notion like
                        includeChildren: true,
                    }),
                ),
                import('@tbank/tui-editor').then(({tuiCreateGroupExtension}) =>
                    tuiCreateGroupExtension({nested: false, createOnEnter: true}),
                ),
            ],
        },
    ],
})
export default class ExampleComponent {
    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Group];

    protected control = new FormControl('');

    constructor() {
        this.control.patchValue(
            '<div data-type="group"><p>This is a boring paragraph.</p></div><div data-type="group"><p>And another draggable paragraph.</p></div><div data-type="group"><p>Let’s finish with a boring paragraph.</p></div>',
        );
    }
}
