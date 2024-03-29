import {Node} from '@tiptap/core';
import MarkdownIt from 'markdown-it';
import {Node as ProseNode} from 'prosemirror-model';

export default Node.create({
    name: `codeBlock`,
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize(state: any, node: ProseNode) {
                    state.write(`\`\`\`${node.attrs.language || ``}\n`);
                    state.text(node.textContent, false);
                    state.ensureNewLine();
                    state.write(`\`\`\``);
                    state.closeBlock(node);
                },
                parse: {
                    setup(markdown: MarkdownIt) {
                        markdown.set({
                            langPrefix:
                                (this as any).options?.languageClassPrefix ?? `language-`,
                        });
                    },
                    updateDOM(element: Element) {
                        element.innerHTML = element.innerHTML.replace(
                            /\n<\/code><\/pre>/g,
                            `</code></pre>`,
                        );
                    },
                },
            },
        };
    },
});
