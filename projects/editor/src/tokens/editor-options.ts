import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';

import {
    EDITOR_BLANK_COLOR,
    TUI_EDITOR_DEFAULT_EDITOR_COLORS,
} from '../constants/default-editor-colors';
import {tuiDefaultFontOptionsHandler} from '../constants/default-font-options-handler';
import type {TuiEditorLinkOptions} from '../constants/default-link-options-handler';
import {TUI_DEFAULT_LINK_OPTIONS} from '../constants/default-link-options-handler';

export interface TuiEditorOptions {
    readonly appearance: string;
    readonly blankColor: string;
    readonly colors: ReadonlyMap<string, string>;
    readonly fontOptions: typeof tuiDefaultFontOptionsHandler;
    readonly icons: {
        readonly addRowTable: string;
        readonly anchor: string;
        readonly attach: string;
        readonly clear: string;
        readonly code: string;
        readonly colorSelectorDropdownCheck: string;
        readonly colorSelectorDropdownChevron: string;
        readonly detailsAdd: string;
        readonly detailsRemove: string;
        readonly fontSize: string;
        readonly fontStyleBold: string;
        readonly fontStyleItalic: string;
        readonly fontStylePreview: string;
        readonly fontStyleStrike: string;
        readonly fontStyleUnderline: string;
        readonly groupAdd: string;
        readonly groupRemove: string;
        readonly hr: string;
        readonly image: string;
        readonly indent: string;
        readonly insertTable: string;
        readonly tableCellMerge: string;
        readonly tableCellSplit: string;
        readonly link: string;
        readonly listOrdered: string;
        readonly taskList: string;
        readonly listPreview: string;
        readonly listUnOrdered: string;
        readonly outdent: string;
        readonly paint: string;
        readonly popupLinkRemove: string;
        readonly popupLinkSave: string;
        readonly hash: string;
        readonly externalLink: string;
        readonly popupPreviewLinkClear: string;
        readonly popupPreviewLinkEdit: string;
        readonly quote: string;
        readonly redo: string;
        readonly sub: string;
        readonly sup: string;
        readonly tex: string;
        readonly textAlignCenter: string;
        readonly textAlignJustify: string;
        readonly textAlignLeft: string;
        readonly textAlignPreview: string;
        readonly textAlignRight: string;
        readonly textColor: string;
        readonly textHilite: string;
        readonly undo: string;
        readonly imageExtension: {
            readonly settings: string;
            readonly alignJustify: string;
            readonly alignCenter: string;
            readonly alignLeft: string;
            readonly alignRight: string;
        };
    };
    readonly linkOptions?: TuiEditorLinkOptions;
    readonly spellcheck: boolean;
    readonly enableDefaultStyles: boolean;
    readonly translate: 'no' | 'yes';
}

export const TUI_EDITOR_DEFAULT_OPTIONS: TuiEditorOptions = {
    translate: 'no',
    appearance: 'flat',
    spellcheck: false,
    enableDefaultStyles: true,
    colors: TUI_EDITOR_DEFAULT_EDITOR_COLORS,
    blankColor: EDITOR_BLANK_COLOR,
    linkOptions: TUI_DEFAULT_LINK_OPTIONS,
    fontOptions: tuiDefaultFontOptionsHandler,
    icons: {
        undo: '@tui.undo',
        redo: '@tui.redo',
        quote: '@tui.quote',
        link: '@tui.link',
        anchor: '@tui.anchor',
        attach: '@tui.paperclip',
        sub: '@tui.subscript',
        sup: '@tui.superscript',
        tex: '@tui.whole-word',
        image: '@tui.image',
        hr: '@tui.minus',
        clear: '@tui.remove-formatting',
        groupAdd: '@tui.plus',
        groupRemove: '@tui.circle-minus',
        detailsAdd: '@tui.copy-plus',
        detailsRemove: '@tui.square-minus',
        popupLinkSave: '@tui.save',
        popupLinkRemove: '@tui.x',
        popupPreviewLinkEdit: '@tui.pencil',
        popupPreviewLinkClear: '@tui.x',
        paint: '@tui.paint-bucket',
        hash: '@tui.hash',
        externalLink: '@tui.external-link',
        textAlignPreview: '@tui.align-left',
        textAlignLeft: '@tui.align-left',
        textAlignCenter: '@tui.align-center',
        textAlignRight: '@tui.align-right',
        textAlignJustify: '@tui.align-justify',
        textColor: '@tui.baseline',
        textHilite: '@tui.paint-roller',
        listPreview: '@tui.list',
        listUnOrdered: '@tui.list',
        listOrdered: '@tui.list-ordered',
        taskList: '@tui.check-check',
        indent: '@tui.indent-increase',
        outdent: '@tui.indent-decrease',
        fontSize: '@tui.a-large-small',
        insertTable: '@tui.table',
        tableCellMerge: '@tui.table-cells-merge',
        tableCellSplit: '@tui.table-rows-split',
        addRowTable: '@tui.between-horizontal-start',
        code: '@tui.code',
        fontStylePreview: '@tui.remove-formatting',
        fontStyleBold: '@tui.bold',
        fontStyleItalic: '@tui.italic',
        fontStyleUnderline: '@tui.underline',
        fontStyleStrike: '@tui.strikethrough',
        colorSelectorDropdownChevron: '@tui.chevron-down',
        colorSelectorDropdownCheck: '@tui.check',
        imageExtension: {
            settings: '@tui.settings',
            alignJustify: '@tui.align-justify',
            alignCenter: '@tui.align-center',
            alignLeft: '@tui.align-left',
            alignRight: '@tui.align-right',
        },
    },
};

export const TUI_EDITOR_OPTIONS = tuiCreateToken(TUI_EDITOR_DEFAULT_OPTIONS);

export function tuiEditorOptionsProvider(options: Partial<TuiEditorOptions>): Provider {
    return tuiProvideOptions(TUI_EDITOR_OPTIONS, options, TUI_EDITOR_DEFAULT_OPTIONS);
}
