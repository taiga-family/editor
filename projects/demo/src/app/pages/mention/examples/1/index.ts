import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiAccordion, TuiExpand} from '@taiga-ui/experimental';

import {Mentions, type User} from './mention';

@Component({
    standalone: true,
    imports: [
        Mentions,
        ReactiveFormsModule,
        TuiAccordion,
        TuiEditor,
        TuiEditorSocket,
        TuiExpand,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor(async () =>
            import('@taiga-ui/editor').then(({TuiMention}) => TuiMention),
        ),
    ],
})
export default class Example {
    @ViewChild(TuiEditor)
    protected readonly wysiwyg?: TuiEditor;

    protected readonly isE2E = inject(TUI_IS_E2E);

    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Size,
        TuiEditorTool.Link,
    ];

    protected control = new FormControl(`
        <p><span class="my-mention" data-type="mention" data-user="7dabb7f0-099b-4c19-b70c-7a5ebdf53a86">@m.ivanov</span> FYI</p>
    `);

    protected setMention(item: User): void {
        const editor = this.wysiwyg?.editor?.getOriginTiptapEditor();

        if (!editor) {
            return;
        }

        const uuid = crypto.randomUUID();
        const replaceText = `<span class="my-mention" data-type="mention" data-user="${uuid}">@${item.login}</span>&nbsp;`;
        const to = editor.state.selection.to;
        const from =
            editor.state.selection.from -
            (this.wysiwyg?.mentionSuggestions.length ?? 0) -
            1;

        editor.chain().focus().insertContentAt({from, to}, replaceText).run();
    }
}
