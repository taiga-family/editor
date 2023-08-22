import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {
    defaultEditorColors,
    EDITOR_BLANK_COLOR,
    TUI_DEFAULT_LINK_OPTIONS,
    tuiDefaultFontOptionsHandler,
    TuiEditorLinkOptions,
} from '@tinkoff/tui-editor/constants';

export interface TuiEditorOptions {
    readonly translate: 'no' | 'yes';
    readonly spellcheck: boolean;
    readonly blankColor: string;
    readonly colors: ReadonlyMap<string, string>;
    readonly fontOptions: typeof tuiDefaultFontOptionsHandler;
    readonly linkOptions?: TuiEditorLinkOptions;
    readonly icons: {
        readonly undo: string;
        readonly redo: string;
        readonly quote: string;
        readonly link: string;
        readonly anchor: string;
        readonly attach: string;
        readonly sub: string;
        readonly sup: string;
        readonly tex: string;
        readonly image: string;
        readonly hr: string;
        readonly clear: string;
        readonly groupAdd: string;
        readonly groupRemove: string;
        readonly detailsAdd: string;
        readonly detailsRemove: string;
        readonly popupLinkSave: string;
        readonly popupLinkRemove: string;
        readonly popupPreviewLinkEdit: string;
        readonly popupPreviewLinkClear: string;
        readonly paint: string;
        readonly textAlignPreview: string;
        readonly textAlignLeft: string;
        readonly textAlignCenter: string;
        readonly textAlignRight: string;
        readonly textAlignJustify: string;
        readonly textColor: string;
        readonly textHilite: string;
        readonly listPreview: string;
        readonly listUnOrdered: string;
        readonly listOrdered: string;
        readonly indent: string;
        readonly outdent: string;
        readonly fontSize: string;
        readonly insertTable: string;
        readonly addRowTable: string;
        readonly code: string;
        readonly fontStylePreview: string;
        readonly fontStyleBold: string;
        readonly fontStyleItalic: string;
        readonly fontStyleUnderline: string;
        readonly fontStyleStrike: string;
        readonly colorSelectorDropdownChevron: string;
        readonly colorSelectorDropdownCheck: string;
    };
}

export const TUI_EDITOR_DEFAULT_OPTIONS: TuiEditorOptions = {
    translate: `no`,
    spellcheck: false,
    colors: defaultEditorColors,
    blankColor: EDITOR_BLANK_COLOR,
    linkOptions: TUI_DEFAULT_LINK_OPTIONS,
    fontOptions: tuiDefaultFontOptionsHandler,
    icons: {
        undo: `tuiIconUndoLarge`,
        redo: `tuiIconRedoLarge`,
        quote: `tuiIconQuoteLarge`,
        link: `tuiIconLinkLarge`,
        anchor: `tuiIconAnchorLarge`,
        attach: `tuiIconPaperclipLarge`,
        sub: `tuiIconSubscriptLarge`,
        sup: `tuiIconSuperscriptLarge`,
        tex: `tuiIconTeXLarge`,
        image: `tuiIconImageLarge`,
        hr: `tuiIconHrLarge`,
        clear: `tuiIconClearFormatLarge`,
        groupAdd: `tuiIconPlusLarge`,
        groupRemove: `tuiIconCloseLarge`,
        detailsAdd: `tuiIconSpoilerLarge`,
        detailsRemove: `tuiIconSpoilerDeleteLarge`,
        popupLinkSave: `tuiIconCheckCircleLarge`,
        popupLinkRemove: `tuiIconCloseLarge`,
        popupPreviewLinkEdit: `tuiIconEdit2Large`,
        popupPreviewLinkClear: `tuiIconUnlinkLarge`,
        paint: `tuiIconPaintLarge`,
        textAlignPreview: `tuiIconAlignLeftLarge`,
        textAlignLeft: `tuiIconAlignLeftLarge`,
        textAlignCenter: `tuiIconAlignCenterLarge`,
        textAlignRight: `tuiIconAlignRightLarge`,
        textAlignJustify: `tuiIconAlignJustifyLarge`,
        textColor: `tuiIconColorLarge`,
        textHilite: `tuiIconHiliteLarge`,
        listPreview: `tuiIconListLarge`,
        listUnOrdered: `tuiIconListLarge`,
        listOrdered: `tuiIconOLLarge`,
        indent: `tuiIconIndentLarge`,
        outdent: `tuiIconOutdentLarge`,
        fontSize: `tuiIconFontLarge`,
        insertTable: `tuiIconTableLarge`,
        addRowTable: `tuiIconAddRowLarge`,
        code: `tuiIconCodeLarge`,
        fontStylePreview: `tuiIconFormatLarge`,
        fontStyleBold: `tuiIconBoldLarge`,
        fontStyleItalic: `tuiIconItalicLarge`,
        fontStyleUnderline: `tuiIconUnderlineLarge`,
        fontStyleStrike: `tuiIconStrikeThroughLarge`,
        colorSelectorDropdownChevron: `tuiIconChevronDown`,
        colorSelectorDropdownCheck: `tuiIconCheck`,
    },
};

export const TUI_EDITOR_OPTIONS = tuiCreateOptions(TUI_EDITOR_DEFAULT_OPTIONS);

export function tuiEditorOptionsProvider(options: Partial<TuiEditorOptions>): Provider {
    return tuiProvideOptions(TUI_EDITOR_OPTIONS, options, TUI_EDITOR_DEFAULT_OPTIONS);
}
