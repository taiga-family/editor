import {Node} from '@tiptap/core';
import {type Node as ProseNode} from '@tiptap/pm/model';

import {type TuiMarkdownContext} from '../../../extension';
import {type TuiMarkdownSerializerState} from '../../../serialize/state';

export default Node.create({name: 'bulletList'}).extend({
    addStorage() {
        return {
            markdown: {
                serialize(
                    this: TuiMarkdownContext,
                    state: TuiMarkdownSerializerState,
                    node: ProseNode,
                ) {
                    return state.renderList(
                        node,
                        '  ',
                        () =>
                            `${this.editor.storage.markdown.options.bulletListMarker || '-'} `,
                    );
                },
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
