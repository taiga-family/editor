import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {PreviewOutput} from '@demo/shared/preview-output';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [PreviewOutput, ReactiveFormsModule, TuiEditor, TuiEditorSocket],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor({
            details: {
                inheritOpen: true,
            },
            detailsSummary: true,
            detailsContent: true,
        }),
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
