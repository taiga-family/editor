import {TUI_TIPTAP_WHITESPACE_HACK} from '@taiga-ui/editor/common';
import {
    tuiGetCurrentWordBounds,
    tuiGetSlicedFragment,
    tuiParseNodeAttributes,
} from '@taiga-ui/editor/utils';
import type {KeyboardShortcutCommand} from '@tiptap/core';
import {Link} from '@tiptap/extension-link';

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
            // Workaround for issue: https://github.com/ueberdosis/tiptap/issues/5957
        ];
    },
}).configure({openOnClick: false});
