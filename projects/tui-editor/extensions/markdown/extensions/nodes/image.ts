import {Node} from '@tiptap/core';
import {defaultMarkdownSerializer} from 'prosemirror-markdown';

export default Node.create({
    name: `image`,
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize: defaultMarkdownSerializer.nodes.image,
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
