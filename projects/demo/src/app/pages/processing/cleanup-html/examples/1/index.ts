import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {
    TUI_EDITOR_DEFAULT_EXTENSIONS,
    TUI_EDITOR_EXTENSIONS,
    TUI_EDITOR_VALUE_TRANSFORMER,
    TuiEditorComponent,
    TuiEditorSocketComponent,
} from '@tbank/tui-editor';

import {ExampleEditorCleanupHtmlTransformer} from './transformer';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiEditorComponent, TuiEditorSocketComponent],
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
export default class ExampleComponent {
    protected control = new FormControl(
        '<p class="t-content">TipTap Editor</p>',
        Validators.required,
    );
}
