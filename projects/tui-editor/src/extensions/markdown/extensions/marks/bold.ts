import {Mark} from '@tiptap/core';
import {defaultMarkdownSerializer} from 'prosemirror-markdown';

export default Mark.create({
    name: 'bold',
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize: defaultMarkdownSerializer.marks.strong,
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
