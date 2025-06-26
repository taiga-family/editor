import {TUI_EDITOR_RESIZE_EVENT} from '@taiga-ui/editor/common';
import {tuiDeleteNode} from '@taiga-ui/editor/utils';
import type {RawCommands} from '@tiptap/core';
import {mergeAttributes, Node} from '@tiptap/core';

export interface TuiDetailsOptions {
    readonly HTMLAttributes: Record<string, unknown>;
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        details: {
            removeDetails: () => ReturnType;
            setDetails: () => ReturnType;
        };
    }
}

export const TuiDetailsExtension = Node.create<TuiDetailsOptions>({
    name: 'details',
    content: 'summary detailsContent',
    group: 'block',
    draggable: true,
    allowGapCursor: true,
    isolating: true,

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
                    const pos = (getPos as any)?.() ?? 0;

                    details.open = !details.open;
                    (node.attrs as unknown as Record<string, unknown>).opened =
                        details.open;

                    event.target?.dispatchEvent(
                        new CustomEvent(TUI_EDITOR_RESIZE_EVENT, {bubbles: true}),
                    );

                    this.editor.chain().focus().setTextSelection(pos).run();
                };

                collapseButton.addEventListener('click', openHandler);

                deleteButton.addEventListener(
                    'click',
                    (e) => {
                        collapseButton.removeEventListener('click', openHandler);

                        const from = (getPos as any)?.() ?? 0;

                        this.editor.chain().focus().setTextSelection(from).run();

                        const node = this.editor.state.selection.$anchor.nodeAfter;
                        const to = from + (node?.nodeSize ?? 0);

                        if (this.editor.isActive('summary')) {
                            this.editor.commands.deleteNode(this.type);
                        } else {
                            this.editor.commands.deleteRange({from, to});
                        }

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
            setDetails: () => {
                return ({commands, editor, state}) => {
                    if (editor.isActive('details')) {
                        return false;
                    }

                    const {schema, selection} = state;
                    const {$from, $to} = selection;
                    const range = $from.blockRange($to);

                    if (!range) {
                        return false;
                    }

                    const slice = state.doc.slice(range.start, range.end);
                    const match = schema.nodes.detailsContent?.contentMatch.matchFragment(
                        slice.content,
                    );

                    if (!match) {
                        return false;
                    }

                    commands.insertContentAt(
                        {from: range.start, to: range.end},
                        {
                            type: this.name,
                            content: [
                                {
                                    type: 'summary',
                                    content: [
                                        {
                                            type: 'paragraph',
                                            content: [],
                                        },
                                    ],
                                },
                                {
                                    type: 'detailsContent',
                                    content: slice.toJSON()?.content ?? [],
                                },
                            ],
                        },
                    );

                    commands.focus();
                    commands.setTextSelection(range.start + 2);

                    return true;
                };
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
    content: 'block+',
    group: 'block',

    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },

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
