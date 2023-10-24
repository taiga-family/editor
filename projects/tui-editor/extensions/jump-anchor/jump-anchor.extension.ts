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
                ({chain}) =>
                    chain()
                        .extendMarkRange(`jumpAnchor`)
                        .setMark(`jumpAnchor`, {id})
                        .run(),

            removeAnchor:
                () =>
                ({chain}) =>
                    chain().unsetMark(this.name, {extendEmptyMarkRange: true}).run(),
        };
    },
});
