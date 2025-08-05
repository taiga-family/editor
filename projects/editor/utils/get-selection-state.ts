import type {AbstractTuiEditor} from '@taiga-ui/editor/common';

export interface TuiSelectionState {
    before: string;
    after: string;
}

export function tuiGetSelectionState(
    editor: AbstractTuiEditor | null,
): TuiSelectionState {
    if (!editor?.state?.selection) {
        return {before: '', after: ''};
    }

    const {$from, $to} = editor.state.selection;

    let before = $from.nodeBefore?.textContent;

    before = (
        before?.slice((before.lastIndexOf(' ') || before.lastIndexOf('\n')) + 1) ?? ''
    ).trim();

    const after = $to.nodeAfter?.textContent.trim() ?? '';

    return {before, after};
}
