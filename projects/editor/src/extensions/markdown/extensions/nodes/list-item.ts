import {Node} from '@tiptap/core';
import {defaultMarkdownSerializer} from '@tiptap/pm/markdown';

export default Node.create({
    name: 'listItem',
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize: defaultMarkdownSerializer.nodes.list_item,
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
