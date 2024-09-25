import {Node} from '@tiptap/core';
import {defaultMarkdownSerializer} from '@tiptap/pm/markdown';

export default Node.create({
    name: 'heading',
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize: defaultMarkdownSerializer.nodes.heading,
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
