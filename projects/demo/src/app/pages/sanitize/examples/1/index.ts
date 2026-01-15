import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {PreviewOutput} from '@demo/shared/preview-output';
import {NgDompurifySanitizer} from '@taiga-ui/dompurify';
import {
    provideTuiEditor,
    TUI_EDITOR_SANITIZER,
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
        provideTuiEditor(),
        {
            provide: TUI_EDITOR_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
    ],
})
export default class Example {
    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected control = new FormControl(`
        <img src="x" onerror="javascript:alert(1)" />
    `);
}
