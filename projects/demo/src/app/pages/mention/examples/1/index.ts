import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {tuiPure} from '@taiga-ui/cdk';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

interface User {
    name: string;
    avatar: string;
    login: string;
}

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
                import('@tinkoff/tui-editor/extensions/link').then(
                    ({TuiLink}) => TuiLink,
                ),
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
        <p><span data-type="mention">@a.inkin</span> FYI</p>
    `);

    readonly items: readonly User[] = [
        {
            name: 'Alexander Inkin',
            avatar: 'https://taiga-ui.dev/assets/images/avatar.jpg',
            login: 'a.inkin',
        },
        {
            name: 'Roman Sedov',
            avatar: '',
            login: 'r.sedov',
        },
    ];

    @tuiPure
    getFilteredItems(items: readonly User[], search?: string): readonly User[] {
        return search?.length
            ? items.filter(
                  ({name, login}) =>
                      login.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) ||
                      name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()),
              )
            : items;
    }

    setMention(item: User): void {
        const editor = this.wysiwyg?.editor?.getOriginTiptapEditor();

        if (!editor) {
            return;
        }

        const replaceText = `<span data-type="mention">@${item.login}</span>&nbsp;`;
        const to = editor.state.selection.to;
        const from =
            editor.state.selection.from -
            (this.wysiwyg?.mentionSuggestions.length ?? 0) -
            1;

        editor.chain().focus().insertContentAt({from, to}, replaceText).run();
    }
}
