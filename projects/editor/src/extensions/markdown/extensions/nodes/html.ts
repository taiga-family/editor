import type {Editor} from '@tiptap/core';
import {getHTMLFromFragment, Node} from '@tiptap/core';
import {Fragment} from '@tiptap/pm/model';
import type {Node as ProseNode} from 'prosemirror-model';

import {tuiElementFromString} from '../../util/dom';

export default Node.create({
    name: 'markdownHTMLNode',
    addStorage() {
        return {
            markdown: {
                serialize(state: any, node: ProseNode, parent: ProseNode) {
                    if (((this as any).editor as Editor).storage.markdown.options.html) {
                        state.write(serializeHTML(node, parent));
                    } else {
                        console.warn(
                            `Tiptap Markdown: "${node.type.name}" node is only available in html mode`,
                        );
                        state.write(`[${node.type.name}]`);
                    }

                    if (node.isBlock) {
                        state.closeBlock(node);
                    }
                },
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});

function serializeHTML(node: ProseNode, parent: ProseNode): string {
    const schema = node.type.schema;
    const html = getHTMLFromFragment(Fragment.from(node), schema);

    if (
        node.isBlock &&
        (parent instanceof Fragment || parent.type.name === schema.topNodeType.name)
    ) {
        return formatBlock(html);
    }

    return html;
}

function formatBlock(html: string): string {
    const dom = tuiElementFromString(html);
    const element = dom.firstElementChild;

    if (element) {
        element.innerHTML = element.innerHTML.trim() ? `\n${element.innerHTML}\n` : '\n';
    }

    return element?.outerHTML ?? '';
}
