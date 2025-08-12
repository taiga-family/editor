import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiContentTable} from '@demo/shared/content-table';
import {TUI_EDITOR_EXTENSIONS, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiContentTable, TuiEditor],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
                import('@taiga-ui/editor').then(({TuiDetailsExtension}) =>
                    TuiDetailsExtension.configure({inheritOpen: true}),
                ),
                import('@taiga-ui/editor').then(({TuiSummary}) => TuiSummary),
                import('@taiga-ui/editor').then(
                    ({TuiDetailsContent}) => TuiDetailsContent,
                ),
            ],
        },
    ],
})
export default class Example {
    protected builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Size,
        TuiEditorTool.Bold,
        TuiEditorTool.Italic,
        TuiEditorTool.Underline,
        TuiEditorTool.Details,
    ];

    protected control = new FormControl(`
        <details open>
            <summary><p>Title 1</p></summary>
            <p>Content 1</p>
        </details>
    `);
}
