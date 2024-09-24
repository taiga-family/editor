import {tuiEscapeHTML} from '@taiga-ui/editor/extensions/markdown/util';
import {Node} from '@tiptap/core';
import type {Node as ProseNode} from '@tiptap/pm/model';

export default Node.create({
    name: 'text',
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize(state: any, node: ProseNode) {
                    state.text(tuiEscapeHTML(node.text));
                },
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
