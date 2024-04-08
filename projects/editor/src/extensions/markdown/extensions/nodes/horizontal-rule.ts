import {Node} from '@tiptap/core';
import {defaultMarkdownSerializer} from 'prosemirror-markdown';

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
