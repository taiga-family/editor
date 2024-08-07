import {JsonPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Injector,
    ViewEncapsulation,
} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import type {AbstractTuiEditor} from '@taiga-ui/editor';
import {
    TUI_EDITOR_DEFAULT_EXTENSIONS,
    TUI_EDITOR_DEFAULT_TOOLS,
    TUI_EDITOR_EXTENSIONS,
    TuiEditor,
    TuiToolbar,
} from '@taiga-ui/editor';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [JsonPipe, ReactiveFormsModule, TuiAccordion, TuiEditor, TuiToolbar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                ...TUI_EDITOR_DEFAULT_EXTENSIONS,
                import('@taiga-ui/editor').then(({tuiCreateImageEditorExtension}) =>
                    tuiCreateImageEditorExtension({injector}),
                ),
            ],
        },
    ],
})
export default class Example {
    public editorRef: AbstractTuiEditor | null = null;

    public readonly builtInTools = TUI_EDITOR_DEFAULT_TOOLS;

    public readonly group = new FormGroup({
        header: new FormControl(''),
        main: new FormControl(''),
        footer: new FormControl(''),
    });
}
