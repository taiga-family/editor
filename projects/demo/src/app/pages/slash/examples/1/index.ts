import {NgForOf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    inject,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiContentTable} from '@demo/shared/content-table';
import {
    TuiDataList,
    TuiDataListComponent,
    TuiDropdown,
    TuiTextfield,
} from '@taiga-ui/core';
import {TUI_EDITOR_EXTENSIONS, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';

interface MyCommand {
    name: string;
}

@Component({
    standalone: true,
    imports: [
        NgForOf,
        ReactiveFormsModule,
        TuiContentTable,
        TuiDataList,
        TuiDropdown,
        TuiEditor,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useFactory: () => [
                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
                import('@taiga-ui/editor').then(({TuiLink}) => TuiLink),
                import('@taiga-ui/editor').then(({TuiJumpAnchor}) => TuiJumpAnchor),
            ],
        },
    ],
    host: {
        '(window:keydown.arrowUp)': 'down($event, false)',
        '(window:keydown.arrowDown)': 'down($event, true)',
    },
})
export default class Example implements OnInit {
    private readonly destroy$ = inject(DestroyRef);

    @ViewChild(TuiEditor, {static: true})
    protected readonly wysiwyg?: TuiEditor;

    @ViewChild(TuiDataListComponent, {read: ElementRef})
    protected datalist?: ElementRef<HTMLDivElement>;

    protected open = true;

    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Bold,
        TuiEditorTool.Italic,
        TuiEditorTool.Link,
        TuiEditorTool.Anchor,
    ];

    protected control = new FormControl('');

    protected readonly items: readonly MyCommand[] = [
        {name: 'Heading 1'},
        {name: 'Heading 2'},
        {name: 'Bold'},
        {name: 'Italic'},
    ];

    public ngOnInit(): void {
        this.control.valueChanges
            .pipe(takeUntilDestroyed(this.destroy$))
            .subscribe(() => {
                const isLinkSelected = !!this.wysiwyg?.isLinkSelected;
                const isMentionMode = !!this.wysiwyg?.isMentionMode;
                const hasSlash = !!this.wysiwyg?.selectionState.before?.startsWith('/');

                this.open = isMentionMode || isLinkSelected ? false : hasSlash;
            });
    }

    protected get suggestion(): string {
        const before = this.wysiwyg?.selectionState.before;

        return before?.startsWith('/') && before.length > 1
            ? before?.replace('/', '') || ''
            : '';
    }

    protected down(event: Event, isDown: boolean): void {
        const buttons = Array.from(this.el?.querySelectorAll('button') ?? []);
        const button = isDown ? buttons[0] : buttons[buttons.length - 1];

        if (!this.el?.contains(event.target as any)) {
            button?.focus();
        }
    }

    protected filter(search: string): readonly MyCommand[] {
        return search?.length
            ? this.items.filter(({name}) =>
                  name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()),
              )
            : this.items;
    }

    protected command(command: MyCommand): void {
        const editor = this.wysiwyg?.editor?.getOriginTiptapEditor();

        if (!editor) {
            return;
        }

        const {from, to} = editor.state.selection;

        editor
            .chain()
            .focus()
            .deleteRange({from: from - (this.suggestion.length + 1), to})
            .run();

        switch (command.name) {
            case 'Bold':
                editor.chain().toggleBold().run();
                break;
            case 'Heading 1':
                editor.chain().setNode('heading', {level: 1}).run();
                break;
            case 'Heading 2':
                editor.chain().setNode('heading', {level: 2}).run();
                break;
            case 'Italic':
                editor.chain().toggleItalic().run();
                break;
        }
    }

    private get el(): HTMLDivElement | null {
        return this.datalist?.nativeElement ?? null;
    }
}
