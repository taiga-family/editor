import {TUI_DEFAULT_HTML5_MEDIA_ATTRIBUTES} from '@tinkoff/tui-editor/constants';
import {tuiGetNestedNodes, tuiParseNodeAttributes} from '@tinkoff/tui-editor/utils';
import {Node} from '@tiptap/core';
import {NodeSpec} from '@tiptap/pm/model';

export const TuiAudio = Node.create({
    name: `audio`,
    group: `block`,
    content: `source+`,

    addAttributes() {
        return tuiParseNodeAttributes(TUI_DEFAULT_HTML5_MEDIA_ATTRIBUTES);
    },

    parseHTML(): NodeSpec['parseDOM'] {
        return [{tag: `audio`}];
    },

    renderHTML({node, HTMLAttributes}) {
        return [`audio`, HTMLAttributes, ...tuiGetNestedNodes(node)];
    },
});
