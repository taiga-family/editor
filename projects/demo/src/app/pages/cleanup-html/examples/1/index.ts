import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {PreviewOutput} from '@demo/shared/preview-output';
import {
    provideTuiEditor,
    TUI_EDITOR_VALUE_TRANSFORMER,
    TuiEditor,
    TuiEditorSocket,
} from '@taiga-ui/editor';

import {ExampleEditorCleanupHtmlTransformer} from './transformer';

@Component({
    standalone: true,
    imports: [PreviewOutput, ReactiveFormsModule, TuiEditor, TuiEditorSocket],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor(),
        {
            provide: TUI_EDITOR_VALUE_TRANSFORMER,
            useClass: ExampleEditorCleanupHtmlTransformer,
        },
    ],
})
export default class Example {
    protected control = new FormControl(
        '<p class="t-content">TipTap Editor</p>',
        Validators.required,
    );
}
