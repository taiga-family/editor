import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/mention/examples/1/index.ts?raw
var __default = `import {
    ChangeDetectionStrategy,
    Component,
    inject,
    viewChild,
    ViewEncapsulation,
} from '@angular/core';
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
export default class Example {
    protected readonly wysiwyg = viewChild.required(TuiEditor);
    protected readonly isE2E = inject(WA_IS_E2E);

    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Size,
        TuiEditorTool.Link,
    ];

    protected control = new FormControl(\`
        <p><span class="my-mention" data-type="mention" data-user="7dabb7f0-099b-4c19-b70c-7a5ebdf53a86">@m.ivanov</span> FYI</p>
    \`);

    protected setMention(item: User): void {
        const editor = this.wysiwyg().editor?.getOriginTiptapEditor();

        if (!editor) {
            return;
        }

        // eslint-disable-next-line compat/compat
        const uuid = crypto.randomUUID();
        const replaceText = \`<span class="my-mention" data-type="mention" data-user="\${uuid}">@\${item.login}</span>&nbsp;\`;
        const to = editor.state.selection.to;

        const from =
            editor.state.selection.from - this.wysiwyg().mentionSuggestions.length - 1;

        editor.chain().focus().insertContentAt({from, to}, replaceText).run();
    }
}
`;
export {
  __default as default
};
//# sourceMappingURL=chunk-KR6ORFYF.js.map
