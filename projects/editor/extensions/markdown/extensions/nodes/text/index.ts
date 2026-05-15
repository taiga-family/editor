import {Node} from '@tiptap/core';
import {type Node as ProseNode} from '@tiptap/pm/model';

import {type TuiMarkdownSerializerState} from '../../../serialize/state';
import {tuiEscapeHTML} from '../../../util/dom';

export default Node.create({name: 'text'}).extend({
    addStorage() {
        return {
            markdown: {
                serialize(state: TuiMarkdownSerializerState, node: ProseNode) {
                    state.text(tuiEscapeHTML(node.text));
                },
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
