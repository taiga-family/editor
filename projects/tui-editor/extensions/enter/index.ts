import {Extension} from '@tiptap/core';

export const TuiCustomEnter = Extension.create({
    name: `customEnter`,
    addKeyboardShortcuts() {
        return {
            Enter: ({editor}) => {
                (editor.commands as any)?.setHardBreak?.();
                (editor.commands as any)?.setHardBreak?.();

                return true;
            },
        };
    },
});
