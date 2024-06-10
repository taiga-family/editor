import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {
    TUI_EDITOR_DEFAULT_EXTENSIONS,
    TUI_EDITOR_EXTENSIONS,
    TUI_EDITOR_VALUE_TRANSFORMER,
    TuiEditor,
    TuiEditorSocket,
} from '@taiga-ui/editor';

import {ExampleEditorCleanupHtmlTransformer} from './transformer';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiEditor, TuiEditorSocket],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: TUI_EDITOR_DEFAULT_EXTENSIONS,
        },
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
