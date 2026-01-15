import {ChangeDetectionStrategy, Component, type OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {PreviewOutput} from '@demo/shared/preview-output';
import {tuiRawLoad, tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [PreviewOutput, ReactiveFormsModule, TuiEditor, TuiEditorSocket],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideTuiEditor()],
})
export default class Example implements OnInit {
    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Code];

    protected control = new FormControl('');

    public ngOnInit(): void {
        void tuiRawLoad(import('./example.md?raw')).then((raw) => {
            const [code] = tuiTryParseMarkdownCodeBlock(raw);

            this.control.patchValue(code ?? null);
        });
    }
}
