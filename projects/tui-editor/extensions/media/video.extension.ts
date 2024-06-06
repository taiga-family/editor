import {TUI_DEFAULT_HTML5_MEDIA_ATTRIBUTES} from '@tinkoff/tui-editor/constants';
import {tuiGetNestedNodes, tuiParseNodeAttributes} from '@tinkoff/tui-editor/utils';
import {Node} from '@tiptap/core';
import {MarkSpec} from 'prosemirror-model';

export const TuiVideo = Node.create({
    name: `video`,
    group: `block`,
    content: `source+`,

    addAttributes() {
        return tuiParseNodeAttributes(TUI_DEFAULT_HTML5_MEDIA_ATTRIBUTES);
    },

    parseHTML(): MarkSpec['parseDOM'] {
        return [{tag: `video`}];
    },

    renderHTML({node, HTMLAttributes}) {
        return [`video`, HTMLAttributes, ...tuiGetNestedNodes(node)];
    },
});
