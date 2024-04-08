import type {Editor, KeyboardShortcutCommand} from '@tiptap/core';
import {Extension} from '@tiptap/core';

export function tuiIsOrderedOrBulletList(editor: Editor): boolean {
    return editor.isActive('bulletList') || editor.isActive('orderedList');
}

export const TuiTabExtension = Extension.create({
    name: 'indent',

    addKeyboardShortcuts(): Record<string, KeyboardShortcutCommand> {
        return {
            Tab: () =>
                tuiIsOrderedOrBulletList(this.editor)
                    ? false
                    : this.editor.commands.insertContent('\t'),
        };
    },
});
