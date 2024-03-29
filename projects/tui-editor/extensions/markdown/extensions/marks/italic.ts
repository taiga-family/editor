import {Mark} from '@tiptap/core';
import {defaultMarkdownSerializer} from 'prosemirror-markdown';

export default Mark.create({
    name: `italic`,
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize: defaultMarkdownSerializer.marks.em,
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
