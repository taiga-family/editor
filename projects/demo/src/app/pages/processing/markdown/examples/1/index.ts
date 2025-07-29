import {NgIf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {tuiRawLoad} from '@taiga-ui/addon-doc';
import {tuiPure, TuiValueTransformer} from '@taiga-ui/cdk';
import {
    TUI_EDITOR_VALUE_TRANSFORMER,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import MarkdownIt from 'markdown-it';
import {Converter} from 'showdown';

@Component({
    standalone: true,
    imports: [NgIf, ReactiveFormsModule, TuiEditor, TuiEditorSocket],
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
    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Img,
        TuiEditorTool.Link,
        TuiEditorTool.Anchor,
    ];

    protected control: FormControl = new FormControl('');

    public ngOnInit(): void {
        void tuiRawLoad(import('./example.md?raw')).then((data) =>
            this.control.patchValue(data ?? null),
        );
    }

    @tuiPure
    protected toMarkdown(html: string): string {
        return new Converter().makeMarkdown(
            html.replaceAll('&lt;', '<').replaceAll('&gt;', '>'),
        );
    }
}
