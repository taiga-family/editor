import {getHTMLFromFragment} from '@tiptap/core';
import {type Fragment} from '@tiptap/pm/model';
import {type EditorState} from '@tiptap/pm/state';

export function tuiGetSlicedFragment({schema, tr}: EditorState): string {
    const selected = tr.doc.cut(tr.selection.from, tr.selection.to);

    return tuiGetHtmlFromFragment(selected.content, schema);
}

export function tuiGetHtmlFromFragment(
    fragment: Fragment,
    schema: EditorState['schema'],
): string {
    return getHTMLFromFragment(fragment, schema).replaceAll(/<\/?[^>]+(>|$)/g, '');
}
