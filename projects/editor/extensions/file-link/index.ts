import {
    TUI_TIPTAP_WHITESPACE_HACK,
    type TuiEditorAttachedFile,
    type TuiLinkAttributes,
} from '@taiga-ui/editor/common';
import {Extension} from '@tiptap/core';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fileLink: {
            setFileLink: (preview: TuiEditorAttachedFile) => ReturnType;
        };
    }
}

function linkAttributesToString(attrs: TuiLinkAttributes): string {
    return Object.entries(attrs)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ');
}

export const TuiFileLink = Extension.create({
    name: 'fileLink',

    addCommands() {
        return {
            setFileLink:
                (fileLink) =>
                ({state, chain}) => {
                    const {selection} = state;
                    const selectedSize = Math.abs(selection.to - selection.from);
                    const attrs = fileLink.attrs
                        ? linkAttributesToString(fileLink.attrs)
                        : '';

                    return (
                        selectedSize > 0
                            ? chain()
                                  .toggleMark(
                                      'link',
                                      {href: fileLink.link},
                                      {extendEmptyMarkRange: true},
                                  )
                                  .setTextSelection(selection.to)
                                  .insertContent(TUI_TIPTAP_WHITESPACE_HACK)
                            : chain().insertContent(
                                  `<a href="${fileLink.link}" ${attrs}>${fileLink.name}</a>${TUI_TIPTAP_WHITESPACE_HACK}`,
                              )
                    )
                        .setTextSelection(selection.to)
                        .run();
                },
        };
    },
});
