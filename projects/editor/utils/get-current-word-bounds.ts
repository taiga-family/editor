import type {Editor, Range} from '@tiptap/core';
import type {ResolvedPos} from '@tiptap/pm/model';

export function tuiGetCurrentWordBounds(editor: Editor): Range {
    const {state} = editor;
    const {selection} = state;
    const {$anchor, empty} = selection;

    if (!empty) {
        return {
            from: selection.from,
            to: selection.to,
        };
    }

    // TODO: check is it true or not
    if ($anchor as ResolvedPos | undefined) {
        const {pos} = $anchor;
        const start = $anchor.start();
        const parent = $anchor.parent;
        const textBefore = parent.textBetween(0, pos - start, undefined, '\uFFFC');
        const textAfter = parent.textBetween(
            pos - start,
            parent.content.size,
            undefined,
            '\uFFFC',
        );

        const wordBefore = textBefore
            // eslint-disable-next-line unicorn/prefer-string-replace-all
            .replaceAll(/\uFFFC/g, '')
            .split(/\b/)
            .pop();
        const wordAfter = textAfter
            // eslint-disable-next-line unicorn/prefer-string-replace-all
            .replaceAll(/\uFFFC/g, '')
            .split(/\b/)
            .shift();

        const from = pos - (wordBefore?.length ?? 0);
        const to = pos + (wordAfter?.length ?? 0);

        return {
            from,
            to,
        };
    }

    return {
        from: selection.to,
        to: selection.to + 1,
    };
}
