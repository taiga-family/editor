import {getHTMLFromFragment} from '@tiptap/core';
import type {EditorState} from '@tiptap/pm/state';

export function tuiGetSlicedFragment(state: EditorState, to: number): string {
    const {doc, schema} = state;
    const selected = doc.cut(to, to + 1);

    return getHTMLFromFragment(selected.content, schema).replaceAll(
        /<\/?[^>]+(>|$)/g,
        '',
    );
}
