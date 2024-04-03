import {NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiDataListModule, TuiInitialsPipe} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorSocketComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

interface User {
    name: string;
    avatar: string;
    login: string;
}

@Component({
    standalone: true,
    imports: [
        TuiEditorComponent,
        ReactiveFormsModule,
        TuiDataListModule,
        NgForOf,
        TuiAvatarComponent,
        TuiInitialsPipe,
        TuiEditorSocketComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tinkoff/tui-editor').then(({TuiLink}) => TuiLink),
                import('@tiptap/extension-text-style').then(
                    ({default: TextStyle}) => TextStyle,
                ),
                import('@tinkoff/tui-editor').then(({TuiMention}) => TuiMention),
            ],
        },
    ],
})
export default class ExampleComponent {
    @ViewChild(TuiEditorComponent)
    protected readonly wysiwyg?: TuiEditorComponent;

    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Size,
        TuiEditorTool.Link,
    ];

    protected control = new FormControl(`
        <p><span class="my-mention" data-type="mention">@a.inkin</span> FYI</p>
    `);

    protected readonly items: readonly User[] = [
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
    protected getFilteredItems(items: readonly User[], search?: string): readonly User[] {
        return search?.length
            ? items.filter(
                  ({name, login}) =>
                      login.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) ||
                      name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()),
              )
            : items;
    }

    protected setMention(item: User): void {
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
