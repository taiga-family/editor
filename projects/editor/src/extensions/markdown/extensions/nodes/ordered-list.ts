import {Node} from '@tiptap/core';
import type {Node as ProseNode} from 'prosemirror-model';

function findIndexOfAdjacentNode(
    node: ProseNode,
    parent: ProseNode,
    index: number,
): number {
    let i = 0;

    for (; index - i > 0; i++) {
        if (parent.child(index - i - 1).type.name !== node.type.name) {
            break;
        }
    }

    return i;
}

export default Node.create({
    name: 'orderedList',
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize(state: any, node: ProseNode, parent: ProseNode, index: number) {
                    const start = node.attrs.start || 1;
                    const maxW = String(start + node.childCount - 1).length;
                    const space = state.repeat(' ', maxW + 2);
                    const adjacentIndex = findIndexOfAdjacentNode(node, parent, index);
                    const separator = adjacentIndex % 2 ? ') ' : '. ';

                    state.renderList(node, space, (i: number) => {
                        const nStr = String(start + i);

                        return state.repeat(' ', maxW - nStr.length) + nStr + separator;
                    });
                },
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
