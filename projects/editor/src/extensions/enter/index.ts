import {Extension} from '@tiptap/core';

export const TuiCustomEnter = Extension.create({
    name: 'customEnter',
    addKeyboardShortcuts() {
        return {
            Enter: ({editor}) => {
                editor.commands.setHardBreak();
                editor.commands.setHardBreak();

                return true;
            },
        };
    },
});
