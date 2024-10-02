import {tuiParseNodeAttributes} from '@taiga-ui/editor/utils';
import type {Editor, KeyboardShortcutCommand, Range} from '@tiptap/core';
import {getHTMLFromFragment, markPasteRule} from '@tiptap/core';
import {Link} from '@tiptap/extension-link';
import {find} from 'linkifyjs';

function getCurrentWordBounds(editor: Editor): Range {
    const {state} = editor;
    const {selection} = state;
    const {$anchor, empty} = selection;

    if (!empty) {
        return {
            from: selection.from,
            to: selection.to,
        };
    }

    if ($anchor) {
        const {pos} = $anchor;
        const start = $anchor.start();
        const parent = $anchor.parent;
        const textBefore = parent.textBetween(0, pos - start, undefined, '\uFFFC');
        const textAfter = parent.textBetween(
            pos - start,
            parent.content.size,
            undefined,
            '\uFFFC',
        );

        const wordBefore = textBefore
            .replaceAll(/\uFFFC/g, '')
            .split(/\b/)
            .pop();
        const wordAfter = textAfter
            .replaceAll(/\uFFFC/g, '')
            .split(/\b/)
            .shift();

        const from = pos - (wordBefore?.length ?? 0);
        const to = pos + (wordAfter?.length ?? 0);

        return {
            from,
            to,
        };
    }

    return {
        from: selection.to,
        to: selection.to + 1,
    };
}

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
                        const {doc, schema} = state;
                        const {from, to} = getCurrentWordBounds(editor);
                        const selected = doc.cut(to, to + 1);
                        const sliced = getHTMLFromFragment(
                            selected.content,
                            schema,
                        ).replaceAll(/<\/?[^>]+(>|$)/g, '');

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
                                      .insertContent(
                                          // require: `@tiptap/extension-text-style`
                                          '<span style="font-size: 15px"> </span>',
                                      )
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
