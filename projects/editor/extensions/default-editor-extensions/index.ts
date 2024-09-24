import {TuiBackgroundColor} from '@taiga-ui/editor/extensions/background-color';
import {
    TuiDetailsContent,
    TuiDetailsExtension,
    TuiSummary,
} from '@taiga-ui/editor/extensions/details';
import {TuiFileLink} from '@taiga-ui/editor/extensions/file-link';
import {TuiFontColor} from '@taiga-ui/editor/extensions/font-color';
import {TuiFontSizeExtension} from '@taiga-ui/editor/extensions/font-size';
import {TuiTabExtension} from '@taiga-ui/editor/extensions/indent-outdent';
import {TuiJumpAnchor} from '@taiga-ui/editor/extensions/jump-anchor';
import {TuiLink} from '@taiga-ui/editor/extensions/link';
import {TuiStarterKit} from '@taiga-ui/editor/extensions/starter-kit';
import {TuiTable} from '@taiga-ui/editor/extensions/table';
import {TuiTableCell} from '@taiga-ui/editor/extensions/table-cell';
import {TableCellBackground} from '@taiga-ui/editor/extensions/table-cell-background';
import type {Extension, Mark, Node} from '@tiptap/core';

export const TUI_EDITOR_DEFAULT_EXTENSIONS: ReadonlyArray<
    Extension | Mark | Node | Promise<Extension | Mark | Node>
> = [
    TuiStarterKit.configure({heading: {levels: [1, 2, 3, 4, 5, 6]}}),
    import('@tiptap/extension-text-align').then(({TextAlign}) =>
        TextAlign.configure({types: ['heading', 'paragraph']}),
    ),
    import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
    import('@tiptap/extension-underline').then(({Underline}) => Underline),
    import('@tiptap/extension-subscript').then(({Subscript}) => Subscript),
    import('@tiptap/extension-superscript').then(({Superscript}) => Superscript),
    TuiFontColor,
    TuiLink,
    TuiJumpAnchor,
    TuiFileLink,
    TuiBackgroundColor,
    TuiTable.configure({resizable: true}),
    TuiTableCell,
    import('@tiptap/extension-table-row').then(({TableRow}) => TableRow),
    import('@tiptap/extension-table-header').then(({TableHeader}) => TableHeader),
    TuiTabExtension,
    TableCellBackground,
    TuiDetailsContent,
    TuiDetailsExtension,
    TuiSummary,
    TuiFontSizeExtension,
];
