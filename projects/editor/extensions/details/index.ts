import {TUI_EDITOR_RESIZE_EVENT} from '@taiga-ui/editor/common';
import {tuiDeleteNode} from '@taiga-ui/editor/utils';
import {mergeAttributes, type RawCommands} from '@tiptap/core';
import {Details, type DetailsOptions} from '@tiptap/extension-details';
import {
    DetailsContent,
    type DetailsContentOptions,
} from '@tiptap/extension-details-content';
import {
    DetailsSummary,
    type DetailsSummaryOptions,
} from '@tiptap/extension-details-summary';

/**
 * @deprecated use {@link DetailsOptions}
 */
export type TuiDetailsOptions = DetailsOptions;

/**
 * @deprecated use {@link DetailsContentOptions}
 */
export type TuiDetailContentOptions = DetailsContentOptions;

export interface TuiDetailsExtensionOptions extends DetailsOptions {
    inheritOpen?: boolean;
}

/**
 * @deprecated use {@link DetailsSummaryOptions}
 */
export type TuiSummaryOptions = DetailsSummaryOptions;

interface ServerSideGlobal extends NodeJS.Global {
    document: Document | undefined;
}

declare const globalThis: ServerSideGlobal;

// TODO: rename to TuiDetails in v5
export const TuiDetailsExtension = Details.extend<TuiDetailsExtensionOptions>({
    addOptions() {
        return {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            ...this.parent?.(),
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
                    element.getAttribute('data-opened'), // legacy
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
                details.open = node.attrs.open;

                const openHandler = (event: Event): void => {
                    const pos = (getPos as any)?.() ?? 0;

                    details.open = !details.open;
                    (node.attrs as unknown as Record<string, unknown>).open =
                        details.open;

                    event.target?.dispatchEvent(
                        new CustomEvent(TUI_EDITOR_RESIZE_EVENT, {bubbles: true}),
                    );

                    editor.chain().focus().setTextSelection(pos).run();
                };

                collapseButton.addEventListener('click', openHandler);

                deleteButton.addEventListener(
                    'click',
                    (e) => {
                        collapseButton.removeEventListener('click', openHandler);
                        editor.commands.unsetDetails();
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
            ...this.parent?.(),
            setDetails: () => {
                return ({commands, editor, state}) => {
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
                };
            },
            unsetDetails:
                () =>
                ({state, dispatch}) =>
                    tuiDeleteNode(state, dispatch, this.name),
        };
    },
});

export const TuiDetailsSummary = DetailsSummary.extend<DetailsSummaryOptions>({
    content: 'block+',
    group: 'block',
});

/**
 * @deprecated use {@link TuiDetailsSummary}
 */
export const TuiSummary = TuiDetailsSummary;

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
