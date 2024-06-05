/**
 * @deprecated, use {@link TUI_EDITOR_DEFAULT_EXTENSIONS}
 */
export const defaultEditorExtensions = [
    import(`@tbank/tui-editor/extensions/starter-kit`)
        .then(({StarterKit}) => StarterKit)
        .then(extension => extension.configure({heading: {levels: [1, 2, 3, 4, 5, 6]}})),
    import(`@tiptap/extension-text-align`).then(({default: TextAlign}) =>
        TextAlign.configure({types: [`heading`, `paragraph`]}),
    ),
    import(`@tiptap/extension-text-style`).then(({default: TextStyle}) => TextStyle),
    import(`@tiptap/extension-underline`).then(({default: Underline}) => Underline),
    import(`@tiptap/extension-subscript`).then(({default: Subscript}) => Subscript),
    import(`@tiptap/extension-superscript`).then(({default: Superscript}) => Superscript),
    import(`@tbank/tui-editor/extensions/font-color`).then(({FontColor}) => FontColor),
    import(`@tbank/tui-editor/extensions/link`).then(({TuiLink}) => TuiLink),
    import(`@tbank/tui-editor/extensions/jump-anchor`).then(
        ({TuiJumpAnchor}) => TuiJumpAnchor,
    ),
    import(`@tbank/tui-editor/extensions/file-link`).then(({TuiFileLink}) => TuiFileLink),
    import(`@tbank/tui-editor/extensions/background-color`).then(
        ({BackgroundColor}) => BackgroundColor,
    ),
    import(`@tbank/tui-editor/extensions/table`).then(({TuiTable}) =>
        TuiTable.configure({resizable: true}),
    ),
    import(`@tbank/tui-editor/extensions/table-cell`).then(
        ({TuiTableCell}) => TuiTableCell,
    ),
    import(`@tiptap/extension-table-row`).then(({default: TableRow}) => TableRow),
    import(`@tiptap/extension-table-header`).then(({TableHeader}) => TableHeader),
    import(`@tbank/tui-editor/extensions/indent-outdent`).then(
        ({TuiTabExtension}) => TuiTabExtension,
    ),
    import(`@tbank/tui-editor/extensions/table-cell-background`).then(
        ({TableCellBackground}) => TableCellBackground,
    ),
    import(`@tbank/tui-editor/extensions/details`).then(
        ({TuiDetailsContent}) => TuiDetailsContent,
    ),
    import(`@tbank/tui-editor/extensions/details`).then(({TuiDetails}) => TuiDetails),
    import(`@tbank/tui-editor/extensions/details`).then(({TuiSummary}) => TuiSummary),
    import(`@tbank/tui-editor/extensions/font-size`).then(({TuiFontSize}) => TuiFontSize),
];

export const TUI_EDITOR_DEFAULT_EXTENSIONS = defaultEditorExtensions;
