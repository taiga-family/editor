import {getHTMLFromFragment} from '@tiptap/core';
import type {EditorState} from '@tiptap/pm/state';

export function tuiGetSelectedContent(state: EditorState, current?: string): string {
    const currentNodeContent = current ?? state.selection.$head.parent.textContent;
    const selected = state.tr.doc.cut(state.tr.selection.from, state.tr.selection.to);

    return selected.content.size
        ? getHTMLFromFragment(selected.content, state.schema)
        : currentNodeContent;
}
