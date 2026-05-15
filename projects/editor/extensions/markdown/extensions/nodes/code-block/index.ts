import {Node} from '@tiptap/core';
import {type Node as ProseNode} from '@tiptap/pm/model';
import type MarkdownIt from 'markdown-it';

import {type TuiMarkdownContext} from '../../../extension';
import {type TuiMarkdownSerializerState} from '../../../serialize/state';

export default Node.create({name: 'codeBlock'}).extend({
    addStorage() {
        return {
            markdown: {
                serialize(state: TuiMarkdownSerializerState, node: ProseNode) {
                    state.write(`\`\`\`${node.attrs.language || ''}\n`);
                    state.text(node.textContent, false);
                    state.ensureNewLine();
                    state.write('```');
                    state.closeBlock(node);
                },
                parse: {
                    setup(this: TuiMarkdownContext, markdown: MarkdownIt) {
                        markdown.set({
                            langPrefix:
                                (this.options['languageClassPrefix'] as
                                    | string
                                    | undefined) ?? 'language-',
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
