import {getHTMLFromFragment} from '@tiptap/core';
import type {EditorState} from '@tiptap/pm/state';

export function tuiGetSlicedFragment({schema, tr}: EditorState): string {
    const selected = tr.doc.cut(tr.selection.from, tr.selection.to);

    return getHTMLFromFragment(selected.content, schema).replaceAll(
        /<\/?[^>]+(>|$)/g,
        '',
    );
}
