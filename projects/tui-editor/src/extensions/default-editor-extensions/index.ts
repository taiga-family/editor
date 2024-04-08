import type {Extension, Mark, Node} from '@tiptap/core';

import {TuiBackgroundColor} from '../background-color';
import {TuiDetails, TuiDetailsContent, TuiSummary} from '../details';
import {TuiFileLink} from '../file-link';
import {TuiFontColor} from '../font-color';
import {TuiFontSize} from '../font-size';
import {TuiTabExtension} from '../indent-outdent';
import {TuiJumpAnchor} from '../jump-anchor';
import {TuiLink} from '../link';
import {TuiStarterKit} from '../starter-kit';
import {TuiTable} from '../table';
import {TableCellBackground} from '../table-cell-background';

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
    import('@tiptap/extension-image').then(({default: Image}) =>
        Image.configure({inline: true, allowBase64: true}),
    ),
    TuiLink,
    TuiJumpAnchor,
    TuiFileLink,
    TuiBackgroundColor,
    TuiTable.configure({resizable: true}),
    import('@tiptap/extension-table-row').then(({TableRow}) => TableRow),
    import('@tinkoff/tui-editor').then(({TuiTableCell}) => TuiTableCell),
    import('@tiptap/extension-table-header').then(({TableHeader}) => TableHeader),
    TuiTabExtension,
    TableCellBackground,
    TuiDetailsContent,
    TuiDetailsContent,
    TuiDetails,
    TuiSummary,
    TuiFontSize,
];
