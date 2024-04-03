import type {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';

import {
    EDITOR_BLANK_COLOR,
    TUI_EDITOR_DEFAULT_EDITOR_COLORS,
} from '../constants/default-editor-colors';
import {tuiDefaultFontOptionsHandler} from '../constants/default-font-options-handler';
import type {TuiEditorLinkOptions} from '../constants/default-link-options-handler';
import {TUI_DEFAULT_LINK_OPTIONS} from '../constants/default-link-options-handler';

export interface TuiEditorOptions {
    readonly appearence: string;
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
        readonly link: string;
        readonly listOrdered: string;
        readonly taskList: string;
        readonly listPreview: string;
        readonly listUnOrdered: string;
        readonly outdent: string;
        readonly paint: string;
        readonly popupLinkRemove: string;
        readonly popupLinkSave: string;
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
    };
    readonly linkOptions?: TuiEditorLinkOptions;
    readonly spellcheck: boolean;
    readonly enableDefaultStyles: boolean;
    readonly translate: 'no' | 'yes';
}

export const TUI_EDITOR_DEFAULT_OPTIONS: TuiEditorOptions = {
    translate: 'no',
    appearence: 'textfield',
    spellcheck: false,
    enableDefaultStyles: true,
    colors: TUI_EDITOR_DEFAULT_EDITOR_COLORS,
    blankColor: EDITOR_BLANK_COLOR,
    linkOptions: TUI_DEFAULT_LINK_OPTIONS,
    fontOptions: tuiDefaultFontOptionsHandler,
    icons: {
        undo: 'tuiIconUndoOutline',
        redo: 'tuiIconRedoOutline',
        quote: 'tuiIconQuoteOutline',
        link: 'tuiIconLinkOutline',
        anchor: 'tuiIconAnchorOutline',
        attach: 'tuiIconPaperclipOutline',
        sub: 'tuiIconSubscriptOutline',
        sup: 'tuiIconSuperscriptOutline',
        tex: 'tuiIconTeXOutline',
        image: 'tuiIconImageOutline',
        hr: 'tuiIconHrOutline',
        clear: 'tuiIconClearFormatOutline',
        groupAdd: 'tuiIconPlusOutline',
        groupRemove: 'tuiIconCloseOutline',
        detailsAdd: 'tuiIconSpoilerOutline',
        detailsRemove: 'tuiIconSpoilerDeleteOutline',
        popupLinkSave: 'tuiIconCheckCircleOutline',
        popupLinkRemove: 'tuiIconCloseOutline',
        popupPreviewLinkEdit: 'tuiIconEdit2Outline',
        popupPreviewLinkClear: 'tuiIconUnlinkOutline',
        paint: 'tuiIconPaintOutline',
        textAlignPreview: 'tuiIconAlignLeftOutline',
        textAlignLeft: 'tuiIconAlignLeftOutline',
        textAlignCenter: 'tuiIconAlignCenterOutline',
        textAlignRight: 'tuiIconAlignRightOutline',
        textAlignJustify: 'tuiIconAlignJustifyOutline',
        textColor: 'tuiIconColorOutline',
        textHilite: 'tuiIconHiliteOutline',
        listPreview: 'tuiIconListOutline',
        listUnOrdered: 'tuiIconListOutline',
        listOrdered: 'tuiIconOLOutline',
        taskList: 'tuiIconCheckSquare',
        indent: 'tuiIconIndentOutline',
        outdent: 'tuiIconOutdentOutline',
        fontSize: 'tuiIconFontOutline',
        insertTable: 'tuiIconTableOutline',
        addRowTable: 'tuiIconAddRowOutline',
        code: 'tuiIconCodeOutline',
        fontStylePreview: 'tuiIconFormatOutline',
        fontStyleBold: 'tuiIconBoldOutline',
        fontStyleItalic: 'tuiIconItalicOutline',
        fontStyleUnderline: 'tuiIconUnderlineOutline',
        fontStyleStrike: 'tuiIconStrikeThroughOutline',
        colorSelectorDropdownChevron: 'tuiIconChevronDown',
        colorSelectorDropdownCheck: 'tuiIconCheck',
    },
};

export const TUI_EDITOR_OPTIONS = tuiCreateOptions(TUI_EDITOR_DEFAULT_OPTIONS);

export function tuiEditorOptionsProvider(options: Partial<TuiEditorOptions>): Provider {
    return tuiProvideOptions(TUI_EDITOR_OPTIONS, options, TUI_EDITOR_DEFAULT_OPTIONS);
}
