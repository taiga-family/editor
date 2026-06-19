import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiButton, TuiDialog} from '@taiga-ui/core';
import {provideTuiEditor, TUI_EDITOR_DEFAULT_TOOLS, TuiEditor} from '@taiga-ui/editor';

@Component({
    imports: [ReactiveFormsModule, TuiButton, TuiDialog, TuiEditor],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideTuiEditor()],
})
export default class Example {
    protected readonly tools = TUI_EDITOR_DEFAULT_TOOLS;
    protected readonly form = new FormGroup({content: new FormControl('')});
    protected open = false;

    protected showDialog(): void {
        this.open = true;
    }
}
