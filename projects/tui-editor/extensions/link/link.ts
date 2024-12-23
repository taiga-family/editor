import {TUI_TIPTAP_WHITESPACE_HACK} from '@tinkoff/tui-editor/constants';
import {
    tuiGetCurrentWordBounds,
    tuiGetSlicedFragment,
    tuiParseNodeAttributes,
} from '@tinkoff/tui-editor/utils';
import {Link} from '@tiptap/extension-link';

export const TuiLink = Link.extend({
    addAttributes() {
        return {
            ...this.parent?.(),
            ...tuiParseNodeAttributes([`download`]),
        };
    },

    addCommands() {
        return {
            ...this.parent?.(),
            toggleLink:
                attributes =>
                ({chain, state, editor}) => {
                    // eslint-disable-next-line no-lone-blocks
                    {
                        const {from, to} = tuiGetCurrentWordBounds(editor);
                        const sliced = tuiGetSlicedFragment(state, to);
                        const forwardSymbolIsWhitespace = sliced === ` `;

                        const toggleMark = chain()
                            .setTextSelection({from, to})
                            .toggleMark(this.name, attributes, {
                                extendEmptyMarkRange: true,
                            });

                        return (
                            forwardSymbolIsWhitespace
                                ? toggleMark.setTextSelection(to - 1)
                                : toggleMark
                                      .setTextSelection(to)
                                      .insertContent(TUI_TIPTAP_WHITESPACE_HACK)
                                      .setTextSelection(to - 1)
                        ).run();
                    }
                },
        };
    },

    addPasteRules() {
        return [
            // Workaround for issue: https://github.com/ueberdosis/tiptap/issues/5957
        ];
    },
}).configure({openOnClick: false});
