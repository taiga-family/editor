import {TUI_EDITOR_RESIZE_EVENT, type TuiMutable} from '@taiga-ui/editor/common';
import {tuiDeleteNode} from '@taiga-ui/editor/utils';
import {mergeAttributes, type RawCommands} from '@tiptap/core';
import {
    Details,
    DetailsContent,
    type DetailsContentOptions,
    type DetailsOptions,
    DetailsSummary,
    type DetailsSummaryOptions,
} from '@tiptap/extension-details';
import {type NodeView} from '@tiptap/pm/view';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        detailsExtended: {
            setDetails(): ReturnType;
            unsetDetailsAt(pos?: number): ReturnType;
        };
    }
}

export interface TuiDetailsExtensionOptions extends DetailsOptions {
    inheritOpen?: boolean;
}

declare const globalThis: {document: Document | undefined};

export const TuiDetails = Details.extend<TuiDetailsExtensionOptions>({
    addOptions() {
        return {
            ...this.parent?.(),
            persist: false,
            openClassName: 'is-open',
            HTMLAttributes: {},
            renderToggleButton: ({element, isOpen}) => {
                element.setAttribute(
                    'aria-label',
                    isOpen ? 'Collapse details content' : 'Expand details content',
                );
            },
            inheritOpen: false,
        };
    },

    addAttributes() {
        return {
            open: {
                default: 'open',
                keepOnSplit: false,
                parseHTML: (element) =>
                    element.getAttribute('open') === 'open' ||
                    element.getAttribute('open') === 'true' ||
                    element.hasAttribute('open') ||
                    element.hasAttribute('data-opened'), // legacy
                renderHTML: (attributes) => ({
                    open:
                        attributes.open && this.options.inheritOpen ? 'open' : undefined,
                }),
            },
        };
    },

    renderHTML({HTMLAttributes}) {
        return [
            'details',
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
            0,
        ];
    },

    addNodeView() {
        return globalThis.document
            ? ({node, getPos, editor}): NodeView => {
                  const wrapper = document.createElement('div');
                  const details = document.createElement('details');
                  const collapseButton = document.createElement('button');
                  const deleteButton = document.createElement('button');

                  wrapper.className = 't-details-wrapper';
                  collapseButton.className = 't-details-arrow';
                  collapseButton.type = 'button';
                  deleteButton.className = 't-details-delete';
                  deleteButton.type = 'button';
                  details.open = node.attrs.open;

                  const openHandler = (event: Event): void => {
                      const pos = getPos();

                      if (pos === undefined) {
                          return;
                      }

                      details.open = !details.open;

                      (node.attrs as TuiMutable<{open: boolean}>).open = details.open;

                      event.target?.dispatchEvent(
                          new CustomEvent(TUI_EDITOR_RESIZE_EVENT, {bubbles: true}),
                      );

                      editor.chain().focus().setTextSelection(pos).run();
                  };

                  collapseButton.addEventListener('click', openHandler);

                  deleteButton.addEventListener(
                      'click',
                      (event) => {
                          collapseButton.removeEventListener('click', openHandler);
                          event.preventDefault();
                          editor.commands.unsetDetailsAt(getPos());
                      },
                      {capture: true, once: true},
                  );

                  wrapper.append(details, collapseButton, deleteButton);

                  return {
                      dom: wrapper,
                      contentDOM: details,
                  };
              }
            : null;
    },
    addCommands(): Partial<RawCommands> {
        return {
            ...this.parent?.(),
            setDetails:
                () =>
                ({commands, editor, state}) => {
                    if (editor.isActive('detailsSummary')) {
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
                                    type: 'detailsSummary',
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
                },
            unsetDetailsAt:
                (pos?: number) =>
                ({state, dispatch}) => {
                    if (pos === undefined) {
                        return tuiDeleteNode(state, dispatch, this.name);
                    }

                    const currentNode = state.doc.nodeAt(pos);

                    if (currentNode?.type.name !== this.name) {
                        return false;
                    }

                    if (dispatch) {
                        dispatch(
                            state.tr
                                .delete(pos, pos + currentNode.nodeSize)
                                .scrollIntoView(),
                        );
                    }

                    return true;
                },
        };
    },
});

export const TuiDetailsSummary = DetailsSummary.extend<DetailsSummaryOptions>({
    content: 'block+',
    group: 'block',
});

export const TuiDetailsContent = DetailsContent.extend<DetailsContentOptions>({
    addNodeView: null,
    parseHTML() {
        return [{tag: 'div[data-type="details-content"]'}];
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
