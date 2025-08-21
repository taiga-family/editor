import {type NodeConfig} from '@tiptap/core';
import {Plugin} from '@tiptap/pm/state';
import {type EditorView} from '@tiptap/pm/view';

export const IMAGE_CLIPBOARD_PASTE_EXTENSION: Partial<NodeConfig<unknown, unknown>> = {
    addProseMirrorPlugins() {
        return [
            new Plugin({
                props: {
                    handleDOMEvents: {
                        paste: (view: EditorView, event: ClipboardEvent) => {
                            const url = event.clipboardData?.getData('text/plain') ?? '';
                            const isImage =
                                /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(
                                    url,
                                );

                            if (isImage) {
                                const node = view.state.schema.nodes.image?.create({
                                    src: url,
                                });

                                if (!node) {
                                    return;
                                }

                                const transaction =
                                    view.state.tr.replaceSelectionWith(node);

                                /**
                                 * @note:
                                 * workaround for `Applying a mismatched transaction`
                                 */
                                setTimeout(() => view.dispatch(transaction));

                                event.preventDefault();
                            }
                        },
                    },
                },
            }),
        ];
    },
};
