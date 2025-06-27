import {ChangeDetectionStrategy, Component, Injector} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiButton} from '@taiga-ui/core';
import {
    TableCellBackground,
    TUI_EDITOR_EXTENSIONS,
    TuiBackgroundColor,
    TuiBoldTool,
    TuiDetailsContent,
    TuiDetailsExtension,
    TuiEditor,
    TuiEditorTool,
    TuiFileLink,
    TuiFontColor,
    TuiFontSize,
    TuiFontSizeExtension,
    TuiItalicTool,
    TuiJumpAnchor,
    TuiLink,
    TuiStarterKit,
    TuiSummary,
    TuiTabExtension,
    TuiTable,
    TuiTableCell,
    TuiToolbar,
    TuiUnderlineTool,
} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiBoldTool,
        TuiButton,
        TuiEditor,
        TuiFontSize,
        TuiItalicTool,
        TuiToolbar,
        TuiUnderlineTool,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                TuiStarterKit.configure({
                    placeholder: {placeholder: 'Type /'},
                    heading: {levels: [1, 2, 3, 4, 5, 6]},
                }),
                import('@tiptap/extension-text-align').then(({TextAlign}) =>
                    TextAlign.configure({types: ['heading', 'paragraph']}),
                ),
                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
                import('@tiptap/extension-underline').then(({Underline}) => Underline),
                import('@tiptap/extension-subscript').then(({Subscript}) => Subscript),
                import('@tiptap/extension-superscript').then(
                    ({Superscript}) => Superscript,
                ),
                TuiFontColor,
                TuiLink,
                TuiJumpAnchor,
                TuiFileLink,
                TuiBackgroundColor,
                TuiTable.configure({resizable: true}),
                TuiTableCell,
                import('@tiptap/extension-table-row').then(({TableRow}) => TableRow),
                import('@tiptap/extension-table-header').then(
                    ({TableHeader}) => TableHeader,
                ),
                TuiTabExtension,
                TableCellBackground,
                TuiDetailsContent,
                TuiDetailsExtension,
                TuiSummary,
                TuiFontSizeExtension,
                import('@taiga-ui/editor').then(({tuiCreateImageEditorExtension}) =>
                    tuiCreateImageEditorExtension({injector}),
                ),
            ],
        },
    ],
})
export default class Example {
    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Clear,
        TuiEditorTool.Color,
        TuiEditorTool.HR,
        TuiEditorTool.Img,
        TuiEditorTool.Link,
        TuiEditorTool.Table,
    ];

    protected readonly control = new FormControl(`
        <h2>What is Lorem Ipsum?</h2>
        <p>
            <a
                href="https://www.google.com/search?q=wikipedia&sca_esv=563020551&sxsrf=AB5stBhNcprCNZotMYrhf_8rPUA7JwZ4XQ%3A1693989718615&ei=Vjv4ZKGaJaPMwPAPx5m68Ag&ved=0ahUKEwihnbm7y5WBAxUjJhAIHceMDo4Q4dUDCBA&uact=5&oq=wikipedia&gs_lp=Egxnd3Mtd2l6LXNlcnAiCXdpa2lwZWRpYTIKEAAYigUYsQMYQzIKEAAYgAQYFBiHAjIHEAAYigUYQzILEAAYgAQYsQMYgwEyBxAAGIoFGEMyBxAAGIoFGEMyCBAAGIAEGLEDMgcQABiKBRhDMgUQABiABDIFEAAYgARIqDZQAFjRMXAAeAGQAQCYAYEBoAG4B6oBAzMuNrgBA8gBAPgBAcICBxAjGIoFGCfCAhEQLhiABBixAxiDARjHARjRA8ICCxAuGIAEGLEDGIMBwgINEAAYigUYsQMYgwEYQ8ICExAuGIoFGLEDGIMBGMcBGNEDGEPCAgoQLhiKBRjUAhhDwgINEAAYgAQYsQMYgwEYCsICDRAuGIoFGMcBGNEDGEPiAwQYACBBiAYB&sclient=gws-wiz-serp"
            >
                Lorem Ipsum
            </a>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    `);
}
