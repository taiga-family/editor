import {Node} from '@tiptap/core';
import type {Node as ProseNode} from 'prosemirror-model';

import {tuiEscapeHTML} from '../../util/dom';

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
