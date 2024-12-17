import type {TuiEditorAttachedFile, TuiLinkAttributes} from '@taiga-ui/editor/common';
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
                    const whitespace = '<span style="font-size: 15px"> </span>';
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
                                  .insertContent(whitespace)
                            : chain().insertContent(
                                  `<a href="${fileLink.link}" ${attrs}>${fileLink.name}</a>${whitespace}`,
                              )
                    )
                        .setTextSelection(selection.to)
                        .run();
                },
        };
    },
});
