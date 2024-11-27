import {TUI_TIPTAP_WHITESPACE_HACK} from '@tinkoff/tui-editor/constants';
import {
    tuiGetCurrentWordBounds,
    tuiGetSlicedFragment,
    tuiParseNodeAttributes,
} from '@tinkoff/tui-editor/utils';
import {markPasteRule} from '@tiptap/core';
import {Link} from '@tiptap/extension-link';
import {find} from 'linkifyjs';

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
            markPasteRule({
                find: text =>
                    find(text)
                        .filter(link => this.options.validate?.(link.value) ?? true)
                        .filter(link => link.isLink)
                        .map(link => ({
                            text: link.value,
                            index: link.start,
                            data: link,
                        })),
                type: this.type,
                getAttributes: match => ({href: match.data?.href}),
            }),
        ];
    },
}).configure({openOnClick: false});
