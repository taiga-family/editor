import {Mark} from '@tiptap/core';
import {defaultMarkdownSerializer} from 'prosemirror-markdown';

export default Mark.create({
    name: 'code',
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize: defaultMarkdownSerializer.marks.code,
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
