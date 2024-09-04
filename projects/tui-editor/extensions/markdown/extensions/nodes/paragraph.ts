import {Node} from '@tiptap/core';
import {defaultMarkdownSerializer} from '@tiptap/pm/markdown';

export default Node.create({
    name: `paragraph`,
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize: defaultMarkdownSerializer.nodes.paragraph,
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
