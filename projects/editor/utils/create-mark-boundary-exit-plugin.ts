import {Plugin, PluginKey, TextSelection} from '@tiptap/pm/state';

export function tuiCreateMarkBoundaryExitPlugin(markName: string): Plugin {
    return new Plugin({
        key: new PluginKey(`tui-${markName}-boundary-exit`),
        appendTransaction(transactions, _oldState, newState) {
            if (!transactions.some((transaction) => transaction.selectionSet)) {
                return null;
            }

            const {selection} = newState;

            if (!(selection instanceof TextSelection) || !selection.$cursor) {
                return null;
            }

            const {$cursor} = selection;
            const mark = newState.schema.marks[markName];

            if (!mark) {
                return null;
            }

            const markBefore = $cursor.nodeBefore
                ? mark.isInSet($cursor.nodeBefore.marks)
                : null;

            const markAfter = $cursor.nodeAfter
                ? mark.isInSet($cursor.nodeAfter.marks)
                : null;

            if (!markBefore || markAfter) {
                return null;
            }

            const storedMarks = newState.storedMarks ?? $cursor.marks();

            return storedMarks.some((storedMark) => storedMark.type === mark)
                ? newState.tr.setStoredMarks(
                      storedMarks.filter((storedMark) => storedMark.type !== mark),
                  )
                : null;
        },
    });
}
