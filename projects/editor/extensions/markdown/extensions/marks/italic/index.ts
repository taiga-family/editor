import {Mark} from '@tiptap/core';
import {defaultMarkdownSerializer} from '@tiptap/pm/markdown';

export default Mark.create({name: 'italic'}).extend({
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
