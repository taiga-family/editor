import {Extension} from '@tiptap/core';

export const TuiCustomEnter = Extension.create({
    name: 'customEnter',
    addKeyboardShortcuts() {
        return {
            Enter: ({editor}) => {
                if (editor.isActive('summary')) {
                    editor.commands.selectNodeForward();
                    editor?.commands.focus(editor?.state.selection.anchor + 1);

                    if (globalThis.document) {
                        editor.view
                            .nodeDOM(editor.state.selection.anchor)
                            ?.parentElement?.closest('details')
                            ?.querySelector('[data-type="details-content"]')
                            ?.prepend(document.createElement('p'));
                    }

                    return false;
                }

                return this.editor.chain().createParagraphNear().run();
            },
        };
    },
});
