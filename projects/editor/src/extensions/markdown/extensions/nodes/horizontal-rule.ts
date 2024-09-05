import {Node} from '@tiptap/core';
import {defaultMarkdownSerializer} from '@tiptap/pm/markdown';

export default Node.create({
    name: 'horizontalRule',
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize: defaultMarkdownSerializer.nodes.horizontal_rule,
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
