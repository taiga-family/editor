import {getHTMLFromFragment, markPasteRule} from '@tiptap/core';
import {Link} from '@tiptap/extension-link';
import {find} from 'linkifyjs';

import {tuiParseNodeAttributes} from '../../utils/parse-node-attributes';

export const TuiLink = Link.extend({
    addAttributes() {
        return {
            ...this.parent?.(),
            ...tuiParseNodeAttributes(['download']),
        };
    },

    addCommands() {
        return {
            ...this.parent?.(),
            toggleLink:
                (attributes) =>
                ({chain, state}) => {
                    // eslint-disable-next-line no-lone-blocks
                    {
                        const {selection, doc, schema} = state;
                        const selected = doc.cut(selection.to, selection.to + 1);
                        const sliced = getHTMLFromFragment(
                            selected.content,
                            schema,
                        ).replaceAll(/<\/?[^>]+(>|$)/g, '');
                        const forwardSymbolIsWhitespace = sliced === ' ';

                        const toggleMark = chain().toggleMark(this.name, attributes, {
                            extendEmptyMarkRange: true,
                        });

                        return (
                            forwardSymbolIsWhitespace
                                ? toggleMark.setTextSelection(selection.to + 1)
                                : toggleMark.setTextSelection(selection.to).insertContent(
                                      // require: `@tiptap/extension-text-style`
                                      '<span style="font-size: 15px"> </span>',
                                  )
                        ).run();
                    }
                },
        };
    },

    addPasteRules() {
        return [
            markPasteRule({
                find: (text) =>
                    find(text)
                        .filter((link) => this.options.validate?.(link.value) ?? true)
                        .filter((link) => link.isLink)
                        .map((link) => ({
                            text: link.value,
                            index: link.start,
                            data: link,
                        })),
                type: this.type,
                getAttributes: (match) => ({href: match.data?.href}),
            }),
        ];
    },
}).configure({openOnClick: false});
