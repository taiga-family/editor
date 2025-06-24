import {Extension} from '@tiptap/core';

export const TuiCustomEnter = Extension.create({
    name: 'customEnter',
    addKeyboardShortcuts() {
        return {
            Enter: ({editor}) => {
                if (editor.isActive('summary')) {
                    editor.commands.selectNodeForward();
                    editor?.commands.focus((editor?.state.selection.anchor ?? 0) + 1);

                    if (globalThis.document) {
                        editor.view
                            .nodeDOM(editor.state.selection.anchor)
                            ?.parentElement?.closest('details')
                            ?.querySelector('[data-type="details-content"]')
                            ?.prepend(document.createElement('p'));
                    }

                    return false;
                }

                if (editor.isActive('listItem') || editor.isActive('taskItem')) {
                    const {$from} = editor.state.selection;
                    const $pos = this.editor.$pos(editor.state.selection.from);
                    const grandParentPos = $pos.parent?.parent;
                    const children = grandParentPos?.children ?? [];
                    const isFirstEmptyItem =
                        children.length === 1 && !$from.parent.textContent.trim();

                    if (isFirstEmptyItem) {
                        editor.chain().focus().insertContent(' ').run();
                    }

                    const parentNodeTypeName = $from.node($from.depth - 1).type.name;

                    return editor.commands.splitListItem(parentNodeTypeName);
                }

                return editor.chain().createParagraphNear().run();
            },
        };
    },
});
