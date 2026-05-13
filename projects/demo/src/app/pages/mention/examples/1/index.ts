import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    type OnInit,
    viewChild,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiExpand, TuiInput} from '@taiga-ui/core';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiAccordion} from '@taiga-ui/kit';

import {Mentions} from './mention';
import {type User} from './mention/user';

@Component({
    imports: [
        Mentions,
        ReactiveFormsModule,
        TuiAccordion,
        TuiEditor,
        TuiEditorSocket,
        TuiExpand,
        TuiInput,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor(async () =>
            import('@taiga-ui/editor').then(({TuiMention}) => TuiMention),
        ),
    ],
})
export default class Example implements OnInit {
    private readonly destroyRef = inject(DestroyRef);
    protected readonly wysiwyg = viewChild.required(TuiEditor);
    protected readonly isE2E = inject(WA_IS_E2E);

    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Size,
        TuiEditorTool.Link,
    ];

    protected control = new FormControl(`
        <p><span class="my-mention" data-type="mention" data-user="7dabb7f0-099b-4c19-b70c-7a5ebdf53a86">@m.ivanov</span> FYI</p>
    `);

    protected isMentionMode = false;

    public ngOnInit(): void {
        this.control.valueChanges
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                this.isMentionMode = this.wysiwyg().selectionState.before.startsWith('@');
            });
    }

    protected get mentionSuggestions(): string {
        const before = this.wysiwyg().selectionState.before;

        return before.startsWith('@') && before.length > 1 ? before.slice(1) : '';
    }

    protected setMention(item: User): void {
        const editor = this.wysiwyg().editor?.getOriginTiptapEditor();

        if (!editor) {
            return;
        }

        // eslint-disable-next-line compat/compat
        const uuid = crypto.randomUUID();
        const replaceText = `<span class="my-mention" data-type="mention" data-user="${uuid}">@${item.login}</span>&nbsp;`;
        const to = editor.state.selection.to;
        const from = editor.state.selection.from - this.mentionSuggestions.length - 1;

        editor.chain().focus().insertContentAt({from, to}, replaceText).run();
    }
}
