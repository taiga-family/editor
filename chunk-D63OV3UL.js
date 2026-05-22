import"./chunk-DAQOROHW.js";var o=`import {
    ChangeDetectionStrategy,
    Component,
    inject,
    viewChild,
    ViewEncapsulation,
} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiButton, TuiExpand} from '@taiga-ui/core';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiAccordion,
        TuiButton,
        TuiEditor,
        TuiEditorSocket,
        TuiExpand,
        TuiItem,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor(async () =>
            import('./thread-span').then(({ThreadSpan}) => ThreadSpan),
        ),
    ],
})
export default class Example {
    private readonly wysiwyg = viewChild.required(TuiEditor);

    protected readonly isE2E = inject(WA_IS_E2E);
    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected readonly control = new FormControl(\`
        <p>
            Here is some text with a
            <span class="comment-highlight comment-highlight--active" data-thread-id="635">
                span thread
            </span>
        </p>
    \`);

    protected paint(): void {
        const id = Math.floor(Math.random() * 100) + 1;
        const tiptap = this.wysiwyg().editor?.getOriginTiptapEditor();

        tiptap
            ?.chain()
            .focus()
            .setMark('threadSpan', {
                class: 'comment-highlight',
                'data-thread-id': id,
            })
            .run();
    }
}
`;export{o as default};
