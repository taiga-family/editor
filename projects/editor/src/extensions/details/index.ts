import type {RawCommands} from '@tiptap/core';
import {mergeAttributes, Node} from '@tiptap/core';

import {tuiDeleteNode} from '../../utils/delete-nodes';
import {tuiGetSelectedContent} from '../../utils/get-selected-content';
import {TUI_EDITOR_RESIZE_EVENT} from '../../constants/default-events';

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
        const attrs = mergeAttributes(this.options.HTMLAttributes, {
            ...HTMLAttributes,
            'data-opened': undefined,
            open: HTMLAttributes['data-opened'] || undefined,
        });

        Object.keys(attrs).forEach((key) => {
            if (attrs[key] === undefined) {
                delete attrs[key];
            }
        });

        return [
            'div',
            {class: 't-details-wrapper t-details-wrapper_rendered'},
            ['details', attrs, 0],
            ['button', {class: 't-details-arrow'}],
        ];
    },

    addNodeView() {
        return ({node, getPos}): any => {
            if (globalThis.document) {
                const wrapper = document.createElement('div');
                const details = document.createElement('details');
                const collapseButton = document.createElement('button');
                const deleteButton = document.createElement('button');

                wrapper.className = 't-details-wrapper';
                collapseButton.className = 't-details-arrow';
                collapseButton.type = 'button';
                deleteButton.className = 't-details-delete';
                deleteButton.type = 'button';
                details.open = node.attrs.opened;

                const openHandler = (event: Event): void => {
                    details.open = !details.open;
                    (node.attrs as unknown as Record<string, unknown>).opened =
                        details.open;

                    event.target?.dispatchEvent(
                        new CustomEvent(TUI_EDITOR_RESIZE_EVENT, {bubbles: true}),
                    );
                };

                collapseButton.addEventListener('click', openHandler);

                deleteButton.addEventListener(
                    'click',
                    (e) => {
                        collapseButton.removeEventListener('click', openHandler);

                        const from = (getPos as any)?.() ?? 0;

                        this.editor
                            .chain()
                            .focus()
                            .setTextSelection((getPos as any)?.())
                            .run();

                        const node = this.editor.state.selection.$anchor.nodeAfter;
                        const to = from + (node?.nodeSize ?? 0);

                        this.editor.commands.deleteRange({from, to});

                        e.preventDefault();
                    },
                    {capture: true, once: true},
                );

                wrapper.append(details, collapseButton, deleteButton);

                return {
                    dom: wrapper,
                    contentDOM: details,
                };
            }
        };
    },

    addCommands(): Partial<RawCommands> {
        return {
            setDetails:
                () =>
                ({commands, editor, state}) => {
                    let content = '';

                    const pos = this.editor.state.selection.$anchor.pos;

                    if (globalThis.document) {
                        content =
                            (document.defaultView?.window
                                .getSelection()
                                ?.toString()
                                .trim().length ?? 0) > 0
                                ? tuiGetSelectedContent(state)
                                : '';

                        setTimeout(() =>
                            editor.chain().focus().setTextSelection(pos).run(),
                        );
                    }

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
