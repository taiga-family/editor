import type {Injector, OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    INJECTOR,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TUI_EDITOR_EXTENSIONS, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';
import {TuiTextareaModule} from '@taiga-ui/legacy';
import type {Editor} from '@tiptap/core';
import {debounceTime, Subject} from 'rxjs';

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
    imports: [TuiEditor, ReactiveFormsModule, TuiTextareaModule, FormsModule],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [INJECTOR],
            useFactory: (injector: Injector) => [
                import('@tiptap/starter-kit').then(({StarterKit}) => StarterKit),
                import('@taiga-ui/editor').then(({tuiCreateImageEditorExtension}) =>
                    tuiCreateImageEditorExtension({injector}),
                ),
                import('@taiga-ui/editor').then(({TuiMarkdown}) =>
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
    ],
})
export default class Example implements OnInit {
    @ViewChild(TuiEditor)
    private readonly editorRef?: TuiEditor;

    private readonly destroyRef = inject(DestroyRef);

    protected markdown$ = new Subject<string>();

    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected control: FormControl = new FormControl(markdown);

    public ngOnInit(): void {
        this.markdown$
            .pipe(debounceTime(500), takeUntilDestroyed(this.destroyRef))
            .subscribe(value => this.editor?.commands.setContent(value));
    }

    protected get editor(): Editor | null {
        return this.editorRef?.editorService.getOriginTiptapEditor() ?? null;
    }

    protected get markdown(): string {
        return this.editor?.storage?.markdown?.getMarkdown() ?? '';
    }
}
