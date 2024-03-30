import {Node} from '@tiptap/core';
import type {Node as ProseNode} from 'prosemirror-model';

export default Node.create({
    name: 'taskItem',
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize(state: any, node: ProseNode) {
                    const check = node.attrs.checked ? '[x]' : '[ ]';

                    state.write(`${check} `);
                    state.renderContent(node);
                },
                parse: {
                    updateDOM(element: Element) {
                        Array.from(element.querySelectorAll('.task-list-item')).forEach(
                            item => {
                                const input = item.querySelector('input');

                                item.setAttribute('data-type', 'taskItem');

                                if (input) {
                                    item.setAttribute(
                                        'data-checked',
                                        input.checked.toString(),
                                    );
                                    input.remove();
                                }
                            },
                        );
                    },
                },
            },
        };
    },
});
