import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@tinkoff/tui-editor';

@Component({
    selector: 'tui-editor-paste-emoji-tool-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tinkoff/tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('./smiles-tool/emoji.extension').then(
                    ({EmojiExtension}) => EmojiExtension,
                ),
            ],
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEditorPasteEmojiToolExample1 {
    readonly builtInTools = [TuiEditorTool.Undo];
    readonly control = new FormControl('');
}
