import {Mark} from '@tiptap/core';

export default Mark.create({
    name: `strike`,
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize: {open: `~~`, close: `~~`, expelEnclosingWhitespace: true},
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
