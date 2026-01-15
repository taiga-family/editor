import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {PreviewOutput} from '@demo/shared/preview-output';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [
        PreviewOutput,
        ReactiveFormsModule,
        TuiButton,
        TuiEditor,
        TuiEditorSocket,
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
                    HTMLAttributes: {
                        class: 'marked',
                    },
                }),
            ),
        ),
    ],
})
export default class Example {
    @ViewChild(TuiEditor)
    private readonly wysiwyg?: TuiEditor;

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
