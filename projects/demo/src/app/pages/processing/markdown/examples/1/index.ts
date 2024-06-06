import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {tuiRawLoad} from '@taiga-ui/addon-doc';
import {tuiPure} from '@taiga-ui/cdk';
import {TUI_EDITOR_CONTENT_PROCESSOR, TuiEditorTool} from '@tinkoff/tui-editor';
import MarkdownIt from 'markdown-it';
import {Converter} from 'showdown';

@Component({
    selector: 'tui-editor-markdown-example-1',
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
export class TuiEditorEditorExample1 implements OnInit {
    readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Img,
        TuiEditorTool.Link,
        TuiEditorTool.Anchor,
    ];

    control: FormControl = new FormControl('');

    @tuiPure
    toMarkdown(html: string): string {
        return new Converter().makeMarkdown(html);
    }

    async ngOnInit(): Promise<void> {
        const md = await tuiRawLoad(import('./example.md?raw'));

        this.control.patchValue(md);
    }
}
