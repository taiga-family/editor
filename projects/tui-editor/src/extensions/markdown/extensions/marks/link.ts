import {Mark} from '@tiptap/core';
import {defaultMarkdownSerializer} from 'prosemirror-markdown';

export default Mark.create({
    name: 'link',
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize: defaultMarkdownSerializer.marks.link,
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
