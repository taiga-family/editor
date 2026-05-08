import"./chunk-DAQOROHW.js";var o=`import {ChangeDetectionStrategy, Component, inject, viewChild} from '@angular/core';
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
    private readonly wysiwyg = viewChild.required(TuiEditor);
    protected readonly isE2E = inject(WA_IS_E2E);
    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected control = new FormControl(
        \`
        <p>This isn\u2019t highlighted.</p>
        <p>
            <mark data-color="#e1d0fb">Grammar</mark>
            <mark data-color="#c8eefc">can</mark> be tricky,
            <mark style="background-color: #fae498">especially</mark>
            for the <mark>uninitiated</mark>
        </p>
        \`,
    );

    protected toggleHighlight(): void {
        this.wysiwyg()
            .editor?.getOriginTiptapEditor()
            ?.commands.toggleHighlight({color: '#c8eefc'});
    }
}
`;export{o as default};
