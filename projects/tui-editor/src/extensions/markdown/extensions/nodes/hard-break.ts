import {Node} from '@tiptap/core';
import type {Node as ProseNode} from 'prosemirror-model';

import HTMLNode from './html';

export default Node.create({
    name: 'hardBreak',
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize(state: any, node: ProseNode, parent: ProseNode, index: number) {
                    for (let i = index + 1; i < parent.childCount; i++) {
                        if (parent.child(i).type !== node.type) {
                            state.write(
                                state.inTable
                                    ? HTMLNode.storage.markdown.serialize.call(
                                          this,
                                          state,
                                          node,
                                          parent,
                                      )
                                    : '\\\n',
                            );

                            return;
                        }
                    }
                },
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
