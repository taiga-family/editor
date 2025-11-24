import {
    ChangeDetectionStrategy,
    Component,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiContentTable} from '@demo/shared/content-table';
import {TuiButton} from '@taiga-ui/core';
import {provideTuiEditor, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiButton, TuiContentTable, TuiEditor],
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
