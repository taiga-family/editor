import {NgIf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiContentTable} from '@demo/shared/content-table';
import {tuiRawLoad} from '@taiga-ui/addon-doc';
import {TUI_IS_E2E, tuiPure, TuiValueTransformer} from '@taiga-ui/cdk';
import {TUI_EDITOR_VALUE_TRANSFORMER, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';
import {TuiAccordion} from '@taiga-ui/experimental';
import MarkdownIt from 'markdown-it';
import {Converter} from 'showdown';

@Component({
    standalone: true,
    imports: [NgIf, ReactiveFormsModule, TuiAccordion, TuiContentTable, TuiEditor],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
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
    protected readonly isE2E = inject(TUI_IS_E2E);

    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Img,
        TuiEditorTool.Link,
        TuiEditorTool.Anchor,
    ];

    protected control: FormControl = new FormControl('');

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
