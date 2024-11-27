import {TUI_TIPTAP_WHITESPACE_HACK} from '@taiga-ui/editor/common';
import {
    tuiGetCurrentWordBounds,
    tuiGetSlicedFragment,
    tuiParseNodeAttributes,
} from '@taiga-ui/editor/utils';
import type {KeyboardShortcutCommand} from '@tiptap/core';
import {markPasteRule} from '@tiptap/core';
import {Link} from '@tiptap/extension-link';
import {find} from 'linkifyjs';

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
                ({chain, state, editor}) => {
                    // eslint-disable-next-line no-lone-blocks
                    {
                        const {from, to} = tuiGetCurrentWordBounds(editor);
                        const sliced = tuiGetSlicedFragment(state, to);
                        const forwardSymbolIsWhitespace = sliced === ' ';

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

    addKeyboardShortcuts(): Record<string, KeyboardShortcutCommand> {
        return {
            'Mod-k': ({editor}) => {
                const isLink = this.editor.isActive('link');
                const editorChain = editor.chain().focus();
                const command = isLink
                    ? editorChain.unsetLink()
                    : editorChain.toggleLink({href: ''});

                return command.run();
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
