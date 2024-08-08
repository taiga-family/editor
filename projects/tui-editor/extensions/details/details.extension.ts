import {tuiDeleteNode, tuiGetSelectedContent} from '@tinkoff/tui-editor/utils';
import {mergeAttributes, Node, RawCommands} from '@tiptap/core';

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

export const TuiDetails = Node.create<TuiDetailsOptions>({
    name: `details`,

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
                parseHTML: element => element.getAttribute(`data-opened`) === `true`,
                renderHTML: attributes => ({
                    'data-opened': attributes.opened,
                }),
            },
        };
    },

    content: `summary detailsContent`,

    group: `block`,
    draggable: true,
    allowGapCursor: true,
    isolating: true,

    parseHTML() {
        return [
            {
                tag: `details`,
            },
        ];
    },

    renderHTML({HTMLAttributes}) {
        return [
            `div`,
            {class: `t-details-wrapper t-details-wrapper_rendered`},
            [`details`, mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0],
            [`button`, {class: `t-details-arrow`}],
        ];
    },

    addNodeView() {
        return ({node, getPos}): any => {
            if (globalThis.document) {
                const wrapper = document.createElement(`div`);
                const details = document.createElement(`details`);
                const collapseButton = document.createElement(`button`);
                const deleteButton = document.createElement(`button`);

                wrapper.className = `t-details-wrapper`;
                collapseButton.className = `t-details-arrow`;
                collapseButton.type = `button`;
                deleteButton.className = `t-details-delete`;
                deleteButton.type = `button`;
                details.open = node.attrs.opened;

                let openHandler = () => {
                    details.open = !details.open;
                    (node.attrs as unknown as Record<string, unknown>).opened =
                        details.open;
                };

                collapseButton.addEventListener(`click`, openHandler);

                deleteButton.addEventListener(
                    `click`,
                    e => {
                        collapseButton.removeEventListener(`click`, openHandler);

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

                    if (!!globalThis.document) {
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

                    return editor.commands.focus(`end`);
                },
        };
    },
});
