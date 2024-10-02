import type {Editor, KeyboardShortcutCommand} from '@tiptap/core';
import {Extension} from '@tiptap/core';

export function tuiIsListActive(editor: Editor): boolean {
    return (
        editor.isActive('bulletList') ||
        editor.isActive('orderedList') ||
        editor.isActive('taskList')
    );
}

export const TuiTabExtension = Extension.create({
    name: 'indent',

    addKeyboardShortcuts(): Record<string, KeyboardShortcutCommand> {
        return {
            Tab: () =>
                tuiIsListActive(this.editor)
                    ? false
                    : this.editor.commands.insertContent('\t'),
        };
    },
});
