import {ChangeDetectionStrategy, Component, inject, ViewChild} from '@angular/core';
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
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor({textAlign: {types: ['heading', 'paragraph']}}, async () =>
            import('@tiptap/extension-highlight').then(({Highlight}) =>
                Highlight.configure({
                    multicolor: true,
                    HTMLAttributes: {class: 'marked'},
                }),
            ),
        ),
    ],
})
export default class Example {
    @ViewChild(TuiEditor)
    private readonly wysiwyg?: TuiEditor;

    protected readonly isE2E = inject(TUI_IS_E2E);

    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected control = new FormControl(
        `
        <p>This isn’t highlighted.</p>
        <p>
            <mark data-color="#e1d0fb">Grammar</mark>
            <mark data-color="#c8eefc">can</mark> be tricky,
            <mark style="background-color: #fae498">especially</mark>
            for the <mark>uninitiated</mark>
        </p>
        `,
    );

    protected toggleHighlight(): void {
        this.wysiwyg?.editor
            ?.getOriginTiptapEditor()
            ?.commands.toggleHighlight({color: '#c8eefc'});
    }
}
