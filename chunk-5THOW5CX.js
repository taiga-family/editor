import"./chunk-DAQOROHW.js";var i=`import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiExpand} from '@taiga-ui/core';
import {
    provideTuiEditor,
    provideTuiEditorOptions,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiAccordion} from '@taiga-ui/kit';
import {mergeAttributes} from '@tiptap/core';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiAccordion,
        TuiEditor,
        TuiEditorSocket,
        TuiExpand,
        TuiItem,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditorOptions({
            fontOptions: () => [
                {name: 'H1', headingLevel: 1},
                {name: 'H2', headingLevel: 2},
                {name: 'H3', headingLevel: 3},
                {name: 'H4', headingLevel: 4},
                {name: 'H5', headingLevel: 5},
                {name: 'H6', headingLevel: 6},
            ],
        }),
        provideTuiEditor(async () =>
            import('@tiptap/extension-heading').then(({Heading}) =>
                Heading.configure({levels: [1, 2, 3, 4, 5, 6]})
                    // @note: if you want to add custom css classes
                    // then you need customize Heading extension
                    .extend({
                        renderHTML({node, HTMLAttributes}) {
                            type Levels = 1 | 2 | 3 | 4 | 5 | 6;
                            const classes: Record<Levels, string> = {
                                1: 'text-h1',
                                2: 'text-h2',
                                3: 'text-h3',
                                4: 'text-h4',
                                5: 'text-h5',
                                6: 'text-h6',
                            };

                            const hasLevel = this.options.levels.includes(
                                node.attrs.level,
                            );

                            const level: Levels = hasLevel
                                ? node.attrs.level
                                : this.options.levels[0];

                            return [
                                \`h\${level}\`,
                                mergeAttributes(
                                    this.options.HTMLAttributes,
                                    HTMLAttributes,
                                    {class: classes[level]},
                                ),
                                0,
                            ];
                        },
                    }),
            ),
        ),
    ],
})
export default class Example {
    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Size];
    protected readonly isE2E = inject(WA_IS_E2E);

    protected control = new FormControl(\`
        <h1>This is a 1st level heading</h1>
        <h2>This is a 2nd level heading</h2>
        <h3>This is a 3rd level heading</h3>
        <h4>This is a 4th level heading</h4>
        <h5>This is a 5th level heading</h5>
        <h6>This is a 6th level heading</h6>
        <p>This is a paragraph</p>
    \`);
}
`;export{i as default};
