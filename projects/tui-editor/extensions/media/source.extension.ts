import {tuiParseNodeAttributes} from '@tinkoff/tui-editor/utils';
import {mergeAttributes, Node} from '@tiptap/core';
import {NodeSpec} from '@tiptap/pm/model';

export const TuiSource = Node.create({
    name: `source`,

    addAttributes() {
        return tuiParseNodeAttributes([
            `src`,
            `type`,
            `width`,
            `height`,
            `media`,
            `sizes`,
            `srcset`,
        ]);
    },

    parseHTML(): NodeSpec['parseDOM'] {
        return [{tag: `source`}];
    },

    renderHTML({HTMLAttributes}: Record<string, any>) {
        return [`source`, mergeAttributes(HTMLAttributes)];
    },
});
