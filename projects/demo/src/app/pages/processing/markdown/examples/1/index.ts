import {NgIf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {tuiRawLoad} from '@taiga-ui/addon-doc';
import {tuiPure} from '@taiga-ui/cdk';
import {
    TUI_EDITOR_CONTENT_PROCESSOR,
    TuiEditorComponent,
    TuiEditorSocketComponent,
    TuiEditorTool,
} from '@tbank/tui-editor';
import MarkdownIt from 'markdown-it';
import {Converter} from 'showdown';

@Component({
    standalone: true,
    imports: [NgIf, ReactiveFormsModule, TuiEditorSocketComponent, TuiEditorComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_CONTENT_PROCESSOR,
            useValue: (markdown: string): string => new MarkdownIt().render(markdown),
        },
    ],
})
export default class ExampleComponent implements OnInit {
    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Img,
        TuiEditorTool.Link,
        TuiEditorTool.Anchor,
    ];

    protected control: FormControl = new FormControl('');

    public async ngOnInit(): Promise<void> {
        const md = await tuiRawLoad(import('./example.md?raw'));

        this.control.patchValue(md);
    }

    @tuiPure
    protected toMarkdown(html: string): string {
        return new Converter().makeMarkdown(html);
    }
}
