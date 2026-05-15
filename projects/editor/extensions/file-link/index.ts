import {type TuiEditorAttachedFile} from '@taiga-ui/editor/common';
import {Extension} from '@tiptap/core';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fileLink: {
            setFileLink(preview: TuiEditorAttachedFile<unknown>): ReturnType;
        };
    }
}

function linkAttributesToString(attrs: Record<string, unknown>): string {
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

                    const attrs =
                        fileLink.attrs && typeof fileLink.attrs === 'object'
                            ? linkAttributesToString(
                                  fileLink.attrs as Record<string, unknown>,
                              )
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
                            : chain().insertContent(
                                  `<a href="${fileLink.link}" ${attrs}>${fileLink.name}</a>`,
                              )
                    )
                        .setTextSelection(selection.to)
                        .run();
                },
        };
    },
});
