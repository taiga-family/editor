import {Mark} from '@tiptap/core';
import {defaultMarkdownSerializer} from '@tiptap/pm/markdown';

export default Mark.create({
    name: `bold`,
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
