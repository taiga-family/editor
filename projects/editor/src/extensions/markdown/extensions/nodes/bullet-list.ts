import type {Editor} from '@tiptap/core';
import {Node} from '@tiptap/core';
import type {Node as ProseNode} from 'prosemirror-model';

export default Node.create({
    name: 'bulletList',
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize(state: any, node: ProseNode) {
                    return state.renderList(
                        node,
                        '  ',
                        () =>
                            `${
                                ((this as any).editor as Editor)?.storage.markdown.options
                                    .bulletListMarker || '-'
                            } `,
                    );
                },
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
