import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {tuiRawLoad, tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@tbank/tui-editor';

@Component({
    selector: 'tui-editor-code-block-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useFactory: () => [
                import('@tbank/tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
            ],
        },
    ],
})
export class TuiEditorCodeBlockExample1 implements OnInit {
    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Code];

    control = new FormControl('');

    async ngOnInit(): Promise<void> {
        const [code] = tuiTryParseMarkdownCodeBlock(
            await tuiRawLoad(import('./example.md?raw')),
        );

        this.control.patchValue(code);
    }
}
