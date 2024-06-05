import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    OnInit,
    Self,
    ViewChild,
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorTool,
} from '@tbank/tui-editor';
import {Editor} from '@tiptap/core';
import {Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';

const markdown = `# h1 Heading 😎

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

----

![image info](./assets/icons/logo.svg)
`;

@Component({
    selector: 'tui-editor-markdown-extension-example-1',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tiptap/starter-kit').then(({StarterKit}) => StarterKit),
                import('@tiptap/extension-image').then(({Image}) =>
                    Image.configure({inline: true}),
                ),
                import('@tbank/tui-editor/extensions/markdown').then(({TuiMarkdown}) =>
                    TuiMarkdown.configure({
                        html: true, // Allow HTML input/output
                        tightLists: true, // No <p> inside <li> in markdown output
                        tightListClass: 'tight', // Add class to <ul> allowing you to remove <p> margins when tight
                        bulletListMarker: '-', // <li> prefix in markdown output
                        linkify: true, // Create links from "https://..." text
                        breaks: true, // New lines (\n) in markdown input are converted to <br>
                        transformPastedText: true, // Allow to paste markdown text in the editor
                        transformCopiedText: true, // Copied text is transformed to markdown
                    }),
                ),
            ],
        },
        TuiDestroyService,
    ],
})
export class TuiEditorEditorExample1 implements OnInit {
    @ViewChild(TuiEditorComponent)
    private readonly editorRef?: TuiEditorComponent;

    markdown$ = new Subject<string>();

    readonly builtInTools = [TuiEditorTool.Undo];

    control: FormControl = new FormControl(markdown);

    constructor(
        @Self()
        @Inject(TuiDestroyService)
        private readonly destroy$: TuiDestroyService,
    ) {}

    get editor(): Editor | null {
        return this.editorRef?.editorService.getOriginTiptapEditor() ?? null;
    }

    get markdown(): string {
        return this.editor?.storage?.markdown?.getMarkdown() ?? '';
    }

    ngOnInit(): void {
        this.markdown$
            .pipe(debounceTime(500), takeUntil(this.destroy$))
            .subscribe(value => this.editor?.commands.setContent(value));
    }
}
