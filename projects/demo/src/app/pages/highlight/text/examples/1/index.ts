import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';

import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorTool,
} from '../../../../../../../../tui-editor';

@Component({
    selector: 'tui-editor-mark-text-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('../../../../../../../../tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
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
export class TuiEditorMarkTextExample1 {
    @ViewChild(TuiEditorComponent)
    private readonly wysiwyg?: TuiEditorComponent;

    readonly builtInTools = [TuiEditorTool.Undo];

    control = new FormControl(
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

    toggleHighlight(): void {
        this.wysiwyg?.editor
            ?.getOriginTiptapEditor()
            .commands.toggleHighlight({color: '#c8eefc'});
    }
}
