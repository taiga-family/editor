import {NgForOf, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDataList, TuiInitialsPipe} from '@taiga-ui/core';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiAvatar} from '@taiga-ui/kit';

import type {User} from './mention';
import {Mentions} from './mention';

@Component({
    standalone: true,
    imports: [
        TuiEditor,
        ReactiveFormsModule,
        TuiDataList,
        NgForOf,
        TuiAvatar,
        TuiInitialsPipe,
        TuiEditorSocket,
        Mentions,
        NgIf,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@taiga-ui/editor').then(({TuiLink}) => TuiLink),
                import('@tiptap/extension-text-style').then(
                    ({default: TextStyle}) => TextStyle,
                ),
                import('@taiga-ui/editor').then(({TuiMention}) => TuiMention),
            ],
        },
    ],
})
export default class Example {
    @ViewChild(TuiEditor)
    protected readonly wysiwyg?: TuiEditor;

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
