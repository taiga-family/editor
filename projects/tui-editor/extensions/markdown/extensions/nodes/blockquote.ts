import {Node} from '@tiptap/core';
import {defaultMarkdownSerializer} from 'prosemirror-markdown';

export default Node.create({
    name: `blockquote`,
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize: defaultMarkdownSerializer.nodes.blockquote,
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
