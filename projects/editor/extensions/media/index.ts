import {TUI_DEFAULT_HTML5_MEDIA_ATTRIBUTES} from '@taiga-ui/editor/common';
import {tuiGetNestedNodes, tuiParseNodeAttributes} from '@taiga-ui/editor/utils';
import {mergeAttributes, Node} from '@tiptap/core';
import {type NodeSpec} from '@tiptap/pm/model';

export const TuiAudio = Node.create({
    name: 'audio',
    group: 'block',
    content: 'source+',

    addAttributes() {
        return tuiParseNodeAttributes(TUI_DEFAULT_HTML5_MEDIA_ATTRIBUTES);
    },

    parseHTML(): NodeSpec['parseDOM'] {
        return [{tag: 'audio'}];
    },

    renderHTML({node, HTMLAttributes}) {
        return ['audio', HTMLAttributes, ...tuiGetNestedNodes(node)];
    },
});

export const TuiSource = Node.create({
    name: 'source',

    addAttributes() {
        return tuiParseNodeAttributes([
            'src',
            'type',
            'width',
            'height',
            'media',
            'sizes',
            'srcset',
        ]);
    },

    parseHTML(): NodeSpec['parseDOM'] {
        return [{tag: 'source'}];
    },

    renderHTML({HTMLAttributes}: Record<string, any>) {
        return ['source', mergeAttributes(HTMLAttributes)];
    },
});

export const TuiVideo = Node.create({
    name: 'video',
    group: 'block',
    content: 'source+',

    addAttributes() {
        return tuiParseNodeAttributes(TUI_DEFAULT_HTML5_MEDIA_ATTRIBUTES);
    },

    parseHTML(): NodeSpec['parseDOM'] {
        return [{tag: 'video'}];
    },

    renderHTML({node, HTMLAttributes}) {
        return ['video', HTMLAttributes, ...tuiGetNestedNodes(node)];
    },
});
