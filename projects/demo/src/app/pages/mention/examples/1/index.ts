import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

import {User} from './mention';

@Component({
    selector: 'tui-editor-mention-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tinkoff/tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tinkoff/tui-editor/extensions/link').then(({TuiLink}) => TuiLink),
                import('@tiptap/extension-text-style').then(
                    ({default: TextStyle}) => TextStyle,
                ),
                import('@tinkoff/tui-editor/extensions/mention').then(
                    ({TuiMention}) => TuiMention,
                ),
            ],
        },
    ],
})
export class TuiEditorMentionExample1 {
    @ViewChild(TuiEditorComponent)
    readonly wysiwyg?: TuiEditorComponent;

    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Size, TuiEditorTool.Link];

    control = new FormControl(`
        <p><span class="my-mention" data-type="mention">@a.inkin</span> FYI</p>
    `);

    setMention(item: User): void {
        const editor = this.wysiwyg?.editor?.getOriginTiptapEditor();

        if (!editor) {
            return;
        }

        const replaceText = `<span class="my-mention" data-type="mention">@${item.login}</span>&nbsp;`;
        const to = editor.state.selection.to;
        const from =
            editor.state.selection.from -
            (this.wysiwyg?.mentionSuggestions.length ?? 0) -
            1;

        editor.chain().focus().insertContentAt({from, to}, replaceText).run();
    }
}
