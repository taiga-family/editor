import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {tuiRawLoad, tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorSocketComponent,
    TuiEditorTool,
} from '@tbank/tui-editor';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiEditorSocketComponent, TuiEditorComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useFactory: () => [
                import('@tbank/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
            ],
        },
    ],
})
export default class ExampleComponent implements OnInit {
    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Code];

    protected control = new FormControl('');

    public async ngOnInit(): Promise<void> {
        const [code] = tuiTryParseMarkdownCodeBlock(
            await tuiRawLoad(import('./example.md?raw')),
        );

        this.control.patchValue(code);
    }
}
