import {Node} from '@tiptap/core';
import {defaultMarkdownSerializer} from '@tiptap/pm/markdown';

export default Node.create({name: 'image'}).extend({
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
