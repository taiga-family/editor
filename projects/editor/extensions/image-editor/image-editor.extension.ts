import {type Injector} from '@angular/core';
import {tuiIsPresent} from '@taiga-ui/cdk';
import {TUI_IMAGE_LOADER, type TuiEditableImage} from '@taiga-ui/editor/common';
import {TuiNodeView} from '@taiga-ui/editor/extensions/tiptap-node-view';
import {
    type Attribute,
    mergeAttributes,
    type Node,
    type NodeViewRenderer,
    type NodeViewRendererProps,
    type RawCommands,
} from '@tiptap/core';
import {Image} from '@tiptap/extension-image';
import {isAllowedUri} from '@tiptap/extension-link';
import {type DOMOutputSpec, type NodeSpec} from '@tiptap/pm/model';
import {Plugin} from '@tiptap/pm/state';
import {type EditorView, type NodeView} from '@tiptap/pm/view';
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

function typeSafeIsAllowedUri(uri?: string): boolean {
    if (!uri) {
        return false;
    }

    return isAllowedUri(uri) !== null;
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
        priority: 0,
        selectable: true,
        draggable: enableDraggable,

        parseHTML(): NodeSpec['parseDOM'] {
            return [
                {
                    tag: 'a[href]',
                    // Caretaker note:
                    // Tiptap link extension priority is 1000
                    // ensuring current extension is being handled in precedence
                    priority: 1001,
                    getAttrs: (parsedElement: HTMLElement): TuiEditableImage | false => {
                        if (parsedElement.firstElementChild?.nodeName !== 'IMG') {
                            return false;
                        }

                        const [href, style] = ['href', 'style'].map(
                            (attrName) =>
                                parsedElement.getAttribute(attrName) ?? undefined,
                        );

                        if (!typeSafeIsAllowedUri(href)) {
                            return false;
                        }

                        const [src, width, alt, title] = [
                            'src',
                            'width',
                            'alt',
                            'title',
                        ].map(
                            (attrName) =>
                                parsedElement.firstElementChild?.getAttribute(attrName) ??
                                undefined,
                        );

                        return {
                            'data-href': href,
                            src: src ?? '',
                            style,
                            width,
                            alt,
                            title,
                        };
                    },
                },
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
                'data-href': {
                    default: null,
                    keepOnSplit: false,
                },
                'data-editing-href': {
                    default: null,
                    keepOnSplit: false,
                },
            };
        },

        renderHTML({HTMLAttributes}): DOMOutputSpec {
            const {'data-href': href, ...attributes} = HTMLAttributes;

            return href
                ? [
                      'a',
                      {
                          target: '_blank',
                          rel: 'noopener noreferrer nofollow',
                          href: typeSafeIsAllowedUri(href) ? href : '',
                      },
                      ['img', mergeAttributes(attributes)],
                  ]
                : ['img', mergeAttributes(attributes)];
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
                setImageLink:
                    () =>
                    ({commands}) =>
                        commands.updateAttributes(this.name, {
                            'data-editing-href': true,
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
