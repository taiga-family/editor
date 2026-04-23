import {ChangeDetectionStrategy, Component, inject, type OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR, tuiRawLoad} from '@taiga-ui/addon-doc';
import {TuiItem, TuiValueTransformer} from '@taiga-ui/cdk';
import {TuiExpand} from '@taiga-ui/core';
import {
    provideTuiEditor,
    TUI_EDITOR_VALUE_TRANSFORMER,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiAccordion} from '@taiga-ui/kit';
import {tuiPure} from '@taiga-ui/legacy';
import MarkdownIt from 'markdown-it';
import {Converter} from 'showdown';

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
        provideTuiEditor({image: true}),
        {
            /**
             * @description:
             * prevent parse 'example.md'
             */
            provide: TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR,
            useValue: (value: string): string[] => [value],
        },
        {
            provide: TUI_EDITOR_VALUE_TRANSFORMER,
            useValue: new (class extends TuiValueTransformer<string, string> {
                public readonly toControlValue = (value: string): string => value;

                public readonly fromControlValue = (value: string): string =>
                    new MarkdownIt().render(value);
            })(),
        },
    ],
})
export default class Example implements OnInit {
    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Img,
        TuiEditorTool.Link,
        TuiEditorTool.Anchor,
    ];

    protected control: FormControl = new FormControl('');
    protected readonly isE2E = inject(WA_IS_E2E);

    public ngOnInit(): void {
        void tuiRawLoad(import('./example.md?raw')).then((data) =>
            this.control.patchValue(data),
        );
    }

    @tuiPure
    protected toMarkdown(html: string): string {
        return new Converter().makeMarkdown(
            html.replaceAll('&lt;', '<').replaceAll('&gt;', '>'),
        );
    }
}
