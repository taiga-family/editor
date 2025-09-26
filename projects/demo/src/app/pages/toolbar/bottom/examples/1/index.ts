import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiButton, TuiDialogService} from '@taiga-ui/core';
import {provideTuiEditor, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiButton, TuiEditor],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideTuiEditor()],
})
export default class Example {
    private readonly dialog = inject(TuiDialogService);

    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Link,
        TuiEditorTool.Img,
    ];

    protected readonly control = new FormControl('');

    protected send(): void {
        this.dialog.open(this.control.value).subscribe();
    }
}
