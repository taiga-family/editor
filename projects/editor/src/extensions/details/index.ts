import type {RawCommands} from '@tiptap/core';
import {mergeAttributes, Node} from '@tiptap/core';

import {tuiDeleteNode} from '../../utils/delete-nodes';
import {tuiGetSelectedContent} from '../../utils/get-selected-content';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        details: {
            removeDetails: () => ReturnType;
            setDetails: () => ReturnType;
        };
    }
}

export interface TuiDetailsOptions {
    readonly HTMLAttributes: Record<string, unknown>;
}

export const TuiDetailsExtension = Node.create<TuiDetailsOptions>({
    name: 'details',

    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },

    addAttributes() {
        return {
            opened: {
                default: true,
                keepOnSplit: false,
                parseHTML: (element) => element.getAttribute('data-opened') === 'true',
                renderHTML: (attributes) => ({
                    'data-opened': attributes.opened,
                }),
            },
        };
    },

    content: 'summary detailsContent',

    group: 'block',
    draggable: true,
    allowGapCursor: true,
    isolating: true,

    parseHTML() {
        return [
            {
                tag: 'details',
            },
        ];
    },

    renderHTML({HTMLAttributes}) {
        return [
            'div',
            {class: 't-details-wrapper t-details-wrapper_rendered'},
            ['details', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0],
            ['button', {class: 't-details-arrow'}],
        ];
    },

    addNodeView() {
        return ({node, editor}): any => {
            if (globalThis.document) {
                const wrapper = document.createElement('div');
                const details = document.createElement('details');
                const collapseButton = document.createElement('button');
                const deleteButton = document.createElement('button');

                wrapper.className = 't-details-wrapper';
                collapseButton.className = 't-details-arrow';
                deleteButton.className = 't-details-delete';

                details.open = node.attrs.opened;

                collapseButton.addEventListener('click', () => {
                    details.open = !details.open;
                    (node.attrs as unknown as Record<string, unknown>).opened =
                        details.open;
                });

                deleteButton.addEventListener('click', () => {
                    tuiDeleteNode(editor.state, editor.view.dispatch, this.name);
                    editor.commands.focus('end');
                });

                wrapper.append(details, collapseButton, deleteButton);

                return {
                    dom: wrapper,
                    contentDOM: details,
                };
            }

            return null;
        };
    },

    addCommands(): Partial<RawCommands> {
        return {
            setDetails:
                () =>
                ({commands, state}) => {
                    const content = tuiGetSelectedContent(state);

                    return commands.insertContent(
                        `<details data-opened="true"><summary><p></p></summary><div data-type="details-content"><p>${content}</p></div></details><p></p>`,
                    );
                },
            removeDetails:
                () =>
                ({editor, state, dispatch}) => {
                    tuiDeleteNode(state, dispatch, this.name);

                    return editor.commands.focus('end');
                },
        };
    },
});

export interface TuiDetailContentOptions {
    readonly HTMLAttributes: Record<string, unknown>;
}

export const TuiDetailsContent = Node.create<TuiDetailContentOptions>({
    name: 'detailsContent',

    content: 'block+',

    group: 'block',

    allowGapCursor: true,

    parseHTML() {
        return [
            {
                tag: 'div[data-type="details-content"]',
            },
        ];
    },

    renderHTML({HTMLAttributes}) {
        return [
            'div',
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                'data-type': 'details-content',
            }),
            0,
        ];
    },
});

export interface TuiSummaryOptions {
    readonly HTMLAttributes: Record<string, unknown>;
}

export const TuiSummary = Node.create<TuiSummaryOptions>({
    name: 'summary',

    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },

    content: 'paragraph',

    group: 'block',

    parseHTML() {
        return [
            {
                tag: 'summary',
            },
        ];
    },

    renderHTML({HTMLAttributes}) {
        return [
            'summary',
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
            0,
        ];
    },
});
