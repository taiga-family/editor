import {Node} from '@tiptap/core';
import type MarkdownIt from 'markdown-it';
import type {Node as ProseNode} from 'prosemirror-model';

export default Node.create({
    name: 'codeBlock',
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize(state: any, node: ProseNode) {
                    state.write(`\`\`\`${node.attrs.language || ''}\n`);
                    state.text(node.textContent, false);
                    state.ensureNewLine();
                    state.write('```');
                    state.closeBlock(node);
                },
                parse: {
                    setup(markdown: MarkdownIt) {
                        markdown.set({
                            langPrefix:
                                (this as any).options?.languageClassPrefix ?? 'language-',
                        });
                    },
                    updateDOM(element: Element) {
                        element.innerHTML = element.innerHTML.replaceAll(
                            '\n</code></pre>',
                            '</code></pre>',
                        );
                    },
                },
            },
        };
    },
});
