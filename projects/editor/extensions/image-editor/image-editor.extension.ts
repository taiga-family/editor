import type {Injector} from '@angular/core';
import {tuiIsPresent} from '@taiga-ui/cdk';
import type {TuiEditableImage} from '@taiga-ui/editor/common';
import {TUI_IMAGE_LOADER} from '@taiga-ui/editor/common';
import {TuiNodeView} from '@taiga-ui/editor/extensions/tiptap-node-view';
import type {
    Attribute,
    Node,
    NodeViewRenderer,
    NodeViewRendererProps,
    RawCommands,
} from '@tiptap/core';
import {mergeAttributes} from '@tiptap/core';
import {Image} from '@tiptap/extension-image';
import type {DOMOutputSpec, NodeSpec} from '@tiptap/pm/model';
import {Plugin} from '@tiptap/pm/state';
import type {EditorView, NodeView} from '@tiptap/pm/view';
import {take, takeWhile} from 'rxjs';

import {TuiImageEditor} from './image-editor';

function pasteImage(injector: Injector) {
    return (view: EditorView, event: ClipboardEvent | DragEvent): void => {
        const dataTransfer =
            event instanceof DragEvent ? event.dataTransfer : event.clipboardData;
        const imagesFiles = Array.from(dataTransfer?.files ?? []).filter((file) =>
            /image/i.test(file.type),
        );

        if (imagesFiles.length) {
            event.preventDefault();
        }

        const loader = injector.get(TUI_IMAGE_LOADER);

        imagesFiles.forEach((file) => {
            loader(file)
                .pipe(
                    take(1),

                    takeWhile(() => !view.isDestroyed),
                )
                .subscribe((src) => {
                    const node = view.state.schema.nodes.image?.create({src});
                    const transaction = node
                        ? view.state.tr.replaceSelectionWith(node)
                        : null;

                    setTimeout(() => {
                        if (!view.isDestroyed && transaction) {
                            view.dispatch(transaction);
                        }
                    });
                });
        });
    };
}

export function tuiCreateImageEditorExtension<T, K>({
    injector,
    draggable,
}: {
    draggable?: boolean;
    injector: Injector;
}): Node<T, K> {
    const enableDraggable = tuiIsPresent(draggable) ? draggable : true;

    return Image.extend({
        name: 'image',
        group: 'inline',
        inline: true,
        priority: 0,
        selectable: true,
        draggable: enableDraggable,

        parseHTML(): NodeSpec['parseDOM'] {
            return [
                {
                    tag: 'img',
                },
            ];
        },

        addAttributes(): Record<keyof TuiEditableImage, Attribute> {
            return {
                src: {
                    default: '',
                    keepOnSplit: false,
                },
                width: {
                    default: null,
                    keepOnSplit: false,
                },
                alt: {
                    default: '',
                    keepOnSplit: false,
                },
                style: {
                    default: '',
                    keepOnSplit: false,
                },
                title: {
                    default: '',
                    keepOnSplit: false,
                },
                draggable: {
                    default: enableDraggable ? '' : null,
                    keepOnSplit: false,
                },
            };
        },

        renderHTML({HTMLAttributes}: Record<string, any>): DOMOutputSpec {
            return ['img', mergeAttributes(HTMLAttributes)];
        },

        addNodeView(): NodeViewRenderer {
            return (props: NodeViewRendererProps): NodeView =>
                new TuiNodeView(TuiImageEditor, props, {
                    injector,
                    ...props,
                }) as unknown as NodeView;
        },

        addCommands(): Partial<RawCommands> {
            return {
                setEditableImage:
                    (attrs) =>
                    ({commands}) =>
                        commands.insertContent({
                            type: this.name,
                            attrs,
                        }),
            };
        },

        addProseMirrorPlugins() {
            return [
                new Plugin({
                    props: {
                        handleDOMEvents: {
                            paste: pasteImage(injector),
                            drop: pasteImage(injector),
                        },
                    },
                }),
            ];
        },
    });
}

export const setup = tuiCreateImageEditorExtension;
