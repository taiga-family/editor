import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiItemDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiItemDirective,
        ReactiveFormsModule,
        TuiEditorSocket,
        TuiEditor,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tiptap/extension-text-align').then(({default: TextAlign}) =>
                    TextAlign.configure({types: ['heading', 'paragraph']}),
                ),
                import('@tiptap/extension-text-style').then(
                    ({default: TextStyle}) => TextStyle,
                ),
                import('@tiptap/extension-highlight').then(({Highlight}) =>
                    Highlight.configure({
                        multicolor: true,
                        HTMLAttributes: {
                            class: 'marked',
                        },
                    }),
                ),
            ],
        },
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
            .commands.toggleHighlight({color: '#c8eefc'});
    }
}
