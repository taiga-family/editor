import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, ViewChild} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiTextareaModule} from '@taiga-ui/kit';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';
import type {Editor} from '@tiptap/core';
import {debounceTime, Subject, takeUntil} from 'rxjs';

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
    standalone: true,
    imports: [TuiEditorComponent, ReactiveFormsModule, TuiTextareaModule, FormsModule],
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
                import('@tinkoff/tui-editor').then(({TuiMarkdown}) =>
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
export default class ExampleComponent implements OnInit {
    @ViewChild(TuiEditorComponent)
    private readonly editorRef?: TuiEditorComponent;

    private readonly destroy$ = inject(TuiDestroyService, {self: true});

    protected markdown$ = new Subject<string>();

    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected control: FormControl = new FormControl(markdown);

    public ngOnInit(): void {
        this.markdown$
            .pipe(debounceTime(500), takeUntil(this.destroy$))
            .subscribe(value => this.editor?.commands.setContent(value));
    }

    protected get editor(): Editor | null {
        return this.editorRef?.editorService.getOriginTiptapEditor() ?? null;
    }

    protected get markdown(): string {
        return this.editor?.storage?.markdown?.getMarkdown() ?? '';
    }
}
