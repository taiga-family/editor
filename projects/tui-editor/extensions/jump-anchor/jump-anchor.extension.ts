import {TUI_TIPTAP_WHITESPACE_HACK} from '@tinkoff/tui-editor/constants';
import {tuiGetCurrentWordBounds, tuiGetSlicedFragment} from '@tinkoff/tui-editor/utils';
import {Mark, mergeAttributes} from '@tiptap/core';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        anchor: {
            removeAnchor: () => ReturnType;
            setAnchor: (id: string) => ReturnType;
        };
    }
}

export const TuiJumpAnchor = Mark.create({
    name: `jumpAnchor`,
    priority: 1000,
    keepOnSplit: false,

    addAttributes() {
        return {
            id: {
                default: null,
                parseHTML: element => element.getAttribute(`id`),
                renderHTML: attributes => {
                    if (!attributes.id) {
                        return {};
                    }

                    return {id: attributes.id};
                },
            },
        };
    },

    parseHTML() {
        return [{tag: `a[data-type="jump-anchor"]`}];
    },

    renderHTML({HTMLAttributes}) {
        return [`a`, mergeAttributes({'data-type': `jump-anchor`}, HTMLAttributes), 0];
    },

    addCommands() {
        return {
            setAnchor:
                id =>
                ({chain, state, editor}) => {
                    const {from, to} = tuiGetCurrentWordBounds(editor);
                    const sliced = tuiGetSlicedFragment(state, to);
                    const forwardSymbolIsWhitespace = sliced === ` `;
                    const jumpAnchorMark = chain()
                        .setTextSelection({from, to})
                        .extendMarkRange(`jumpAnchor`)
                        .setMark(`jumpAnchor`, {id});

                    return (
                        forwardSymbolIsWhitespace
                            ? jumpAnchorMark.setTextSelection(to - 1)
                            : jumpAnchorMark
                                  .setTextSelection(to)
                                  .insertContent(TUI_TIPTAP_WHITESPACE_HACK)
                                  .setTextSelection(to - 1)
                    ).run();
                },

            removeAnchor:
                () =>
                ({chain}) =>
                    chain().unsetMark(this.name, {extendEmptyMarkRange: true}).run(),
        };
    },
});
