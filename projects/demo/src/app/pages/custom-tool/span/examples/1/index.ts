import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TUI_IS_E2E, TuiItem} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiAccordion, TuiExpand} from '@taiga-ui/experimental';

@Component({
    standalone: true,
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
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor(async () =>
            import('./thread-span').then(({ThreadSpan}) => ThreadSpan),
        ),
    ],
})
export default class Example {
    @ViewChild(TuiEditor)
    private readonly wysiwyg?: TuiEditor;

    protected readonly isE2E = inject(TUI_IS_E2E);

    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected readonly control = new FormControl(`
        <p>
            Here is some text with a
            <span class="comment-highlight comment-highlight--active" data-thread-id="635">
                span thread
            </span>
        </p>
    `);

    protected paint(): void {
        const id = Math.floor(Math.random() * 100) + 1;
        const tiptap = this.wysiwyg?.editor?.getOriginTiptapEditor();

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
