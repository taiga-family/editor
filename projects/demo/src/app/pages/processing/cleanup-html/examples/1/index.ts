import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {
    defaultEditorExtensions,
    TUI_EDITOR_EXTENSIONS,
    TUI_EDITOR_VALUE_TRANSFORMER,
    TuiEditorModule,
    TuiEditorSocketModule,
} from '@tinkoff/tui-editor';

import {ExampleEditorCleanupHtmlTransformer} from './transformer';

@Component({
    standalone: true,
    selector: 'tui-editor-cleanup-html-example-1',
    imports: [TuiEditorModule, ReactiveFormsModule, TuiEditorSocketModule],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
        {
            provide: TUI_EDITOR_VALUE_TRANSFORMER,
            useClass: ExampleEditorCleanupHtmlTransformer,
        },
    ],
})
export class TuiEditorCleanupHtmlExample1 {
    control = new FormControl(
        '<p class="t-content">TipTap Editor</p>',
        Validators.required,
    );
}
