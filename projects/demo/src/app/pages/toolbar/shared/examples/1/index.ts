import {JsonPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {
    type AbstractTuiEditor,
    provideTuiEditor,
    TUI_EDITOR_DEFAULT_TOOLS,
    TuiEditor,
    TuiToolbar,
} from '@taiga-ui/editor';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [JsonPipe, ReactiveFormsModule, TuiAccordion, TuiEditor, TuiToolbar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideTuiEditor({image: true})],
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
