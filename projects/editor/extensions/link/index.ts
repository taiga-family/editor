import {TUI_TIPTAP_WHITESPACE_HACK} from '@taiga-ui/editor/common';
import {
    tuiGetCurrentWordBounds,
    tuiGetHtmlFromFragment,
    tuiGetSlicedFragment,
    tuiParseNodeAttributes,
} from '@taiga-ui/editor/utils';
import type {KeyboardShortcutCommand} from '@tiptap/core';
import {mergeAttributes} from '@tiptap/core';
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
                ({chain, state, editor, tr}) => {
                    {
                        if (!tuiGetSlicedFragment(state).trim()) {
                            return false;
                        }

                        const {from, to} = tuiGetCurrentWordBounds(editor);
                        const forwardSymbolIsWhitespace = tuiGetHtmlFromFragment(
                            tr.doc.cut(tr.selection.to, tr.selection.to + 1).content,
                            editor.schema,
                        );

                        const toggleMark = chain()
                            .setTextSelection({from, to})
                            .toggleMark(this.name, attributes, {
                                extendEmptyMarkRange: true,
                            });

                        return toggleMark
                            .setTextSelection(to)
                            .insertContent(
                                forwardSymbolIsWhitespace === ' '
                                    ? ''
                                    : TUI_TIPTAP_WHITESPACE_HACK,
                            )
                            .setTextSelection({
                                from,
                                to: to - from === 1 ? to : to - 1,
                            })
                            .run();
                    }
                },
        };
    },

    renderHTML({HTMLAttributes}) {
        return [
            'a',
            mergeAttributes(HTMLAttributes, {
                target: HTMLAttributes?.href?.startsWith('#') ? '_self' : '_blank',
            }),
            0,
        ];
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
