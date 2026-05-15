import {getHTMLFromFragment, Node} from '@tiptap/core';
import {Fragment, type Node as ProseNode} from '@tiptap/pm/model';

import {type TuiMarkdownContext} from '../../../extension';
import {type TuiMarkdownSerializerState} from '../../../serialize/state';
import {tuiElementFromString} from '../../../util/dom';

export default Node.create({
    name: 'markdownHTMLNode',
    addStorage() {
        return {
            markdown: {
                serialize(
                    this: TuiMarkdownContext,
                    state: TuiMarkdownSerializerState,
                    node: ProseNode,
                    parent: ProseNode,
                ) {
                    if (this.editor.storage.markdown.options.html) {
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

    return node.isBlock &&
        (parent instanceof Fragment || parent.type.name === schema.topNodeType.name)
        ? formatBlock(html)
        : html;
}

function formatBlock(html: string): string {
    const dom = tuiElementFromString(html);

    if (!dom) {
        return '';
    }

    const element = dom.firstElementChild;

    if (element) {
        element.innerHTML = element.innerHTML.trim() ? `\n${element.innerHTML}\n` : '\n';
    }

    return element?.outerHTML ?? '';
}
