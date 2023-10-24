import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {
    defaultEditorExtensions,
    TUI_EDITOR_EXTENSIONS,
    TUI_EDITOR_VALUE_TRANSFORMER,
} from '../../../../../../../../tui-editor';
import {ExampleEditorCleanupHtmlTransformer} from './transformer';

@Component({
    selector: 'tui-editor-cleanup-html-example-1',
    templateUrl: './index.html',
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
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEditorCleanupHtmlExample1 {
    control = new FormControl(
        '<p class="t-content">TipTap Editor</p>',
        Validators.required,
    );
}
