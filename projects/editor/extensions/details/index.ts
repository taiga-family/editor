import {TUI_EDITOR_RESIZE_EVENT} from '@taiga-ui/editor/common';
import {tuiDeleteNode, tuiGetSelectedContent} from '@taiga-ui/editor/utils';
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
        return ({node, getPos, editor}): any => {
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

                // caretaker note:
                // This is a workaround, because when the content contains whitespaces,
                // Tiptap ends up rendering two accordions instead of one.
                const pasteHandler = async (event: Event): Promise<void> => {
                    if ((event.target as Element)?.closest('summary')) {
                        event.preventDefault();

                        const buffer = await navigator.clipboard.readText();
                        const text = (buffer satisfies string).trim();

                        editor.commands.insertContent(text);
                    }
                };

                collapseButton.addEventListener('click', openHandler);
                details.addEventListener('paste', pasteHandler, {capture: true});

                deleteButton.addEventListener(
                    'click',
                    (e) => {
                        collapseButton.removeEventListener('click', openHandler);
                        details.removeEventListener('click', pasteHandler, {
                            capture: true,
                        });

                        const from = (getPos as any)?.() ?? 0;

                        this.editor
                            .chain()
                            .focus()
                            .setTextSelection((getPos as any)?.())
                            .run();

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

                // caretaker note:
                // This is a workaround to prevent double accordion
                // insertion after a copy/paste event.
                setTimeout(() => {
                    const target: HTMLElement | null = details.querySelector('summary p');

                    if (!target) {
                        return;
                    }

                    const range = document.createRange();
                    const sel = window.getSelection();

                    range.selectNodeContents(target);
                    range.collapse(false);

                    sel?.removeAllRanges();
                    sel?.addRange(range);

                    target.focus();
                    range.detach();

                    target.scrollTop = target.scrollHeight;
                });

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
                    }

                    setTimeout(() => editor.chain().focus().setTextSelection(pos).run());

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

    content: 'paragraph',

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
