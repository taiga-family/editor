import {ChangeDetectionStrategy, Component, type OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiContentTable} from '@demo/shared/content-table';
import {tuiRawLoad, tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';
import {provideTuiEditor, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiContentTable, TuiEditor],
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
