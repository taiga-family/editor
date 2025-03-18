import {tuiDeleteNode, tuiGetSelectedContent} from '@taiga-ui/editor/utils';
import type {RawCommands} from '@tiptap/core';
import {mergeAttributes, Node} from '@tiptap/core';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        group: {
            removeGroup: () => ReturnType;
            setGroup: () => ReturnType;
            setGroupHilite: (color: string) => ReturnType;
        };
    }
}

export interface TuiEditorGroupOptions {
    readonly createOnEnter: boolean;
    readonly draggable: boolean;
    readonly groupNodeClass: string;
    readonly groupPointerNodeClass: string;
    readonly nested: boolean;
}

export const TUI_EDITOR_GROUP_DEFAULT_OPTIONS: TuiEditorGroupOptions = {
    groupNodeClass: 'tui-group-node',
    groupPointerNodeClass: 'tui-group-pointer',
    nested: true,
    draggable: true,
    createOnEnter: false,
};

export const tuiCreateGroupExtension = (
    options: Partial<TuiEditorGroupOptions> = {},
): Node => {
    const {draggable, nested, groupNodeClass, groupPointerNodeClass, createOnEnter} = {
        ...TUI_EDITOR_GROUP_DEFAULT_OPTIONS,
        ...options,
    };

    return Node.create({
        name: 'group',
        draggable,
        group: 'block',
        content: nested ? 'block+' : 'block',

        addAttributes() {
            return {
                style: {
                    default: null,
                    parseHTML: (element) => element.getAttribute('style'),
                    renderHTML: (attributes) => {
                        if (!attributes.style) {
                            return {};
                        }

                        return {style: attributes.style};
                    },
                },
            };
        },

        parseHTML() {
            return [{tag: 'div[data-type="group"]'}];
        },

        renderHTML({HTMLAttributes}) {
            return ['div', mergeAttributes(HTMLAttributes, {'data-type': 'group'}), 0];
        },

        addNodeView() {
            return ({HTMLAttributes, node}): any => {
                if (globalThis.document) {
                    const dom = document.createElement('div');
                    const content = document.createElement('div');

                    dom.classList.add(groupNodeClass);
                    content.setAttribute('data-type', 'group');

                    if (HTMLAttributes.style) {
                        (node.attrs as any).style = HTMLAttributes.style;
                        content.setAttribute('style', HTMLAttributes.style);
                    }

                    if (draggable) {
                        const pointer = document.createElement('div');

                        pointer.classList.add(groupPointerNodeClass);
                        pointer.innerHTML = '';
                        pointer.contentEditable = 'false';

                        dom.append(pointer, content);
                    } else {
                        dom.append(content);
                    }

                    return {dom, contentDOM: content};
                }

                return null;
            };
        },

        addCommands(): Partial<RawCommands> {
            return {
                setGroup:
                    () =>
                    ({commands, state}) => {
                        this.editor.chain().focus().run();

                        const content = tuiGetSelectedContent(state, '');
                        const wrapped = content.trim().startsWith('<p>')
                            ? content
                            : `<p>${content}</p>`;
                        const result = `<div data-type="group">${wrapped}</div>`;

                        return commands.insertContent(result);
                    },
                setGroupHilite:
                    (color: string) =>
                    ({editor}) => {
                        let position = editor.state.selection.$anchor;

                        /**
                         * @note:
                         * we can't mutate DOM directly in tiptap
                         * find group element for update style attribute
                         */
                        for (let depth = position.depth; depth > 0; depth--) {
                            position = editor.state.selection.$anchor;

                            const node = position.node(depth);

                            if (node.type.name === this.name) {
                                /**
                                 * @note:
                                 * workaround for `Applying a mismatched transaction`
                                 */
                                setTimeout(() =>
                                    editor.commands.updateAttributes(node.type, {
                                        style: `background: ${color}`,
                                    }),
                                );

                                break;
                            }
                        }

                        return true;
                    },
                removeGroup:
                    () =>
                    ({state, dispatch}) =>
                        tuiDeleteNode(state, dispatch, this.name),
            };
        },

        addKeyboardShortcuts(): Record<string, () => boolean> {
            return createOnEnter ? {Enter: () => this.editor.commands.setGroup()} : {};
        },
    });
};
