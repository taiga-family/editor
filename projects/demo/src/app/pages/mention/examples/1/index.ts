import {NgForOf, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDataListModule, TuiInitialsPipe} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorSocketComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

import type {User} from './mention';
import {MentionsComponent} from './mention';

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
        MentionsComponent,
        NgIf,
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
