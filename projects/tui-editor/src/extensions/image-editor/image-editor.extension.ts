import type {Injector} from '@angular/core';
import {tuiIsPresent} from '@taiga-ui/cdk';
import type {
    Attribute,
    Node,
    NodeViewRenderer,
    NodeViewRendererProps,
    RawCommands,
} from '@tiptap/core';
import {mergeAttributes} from '@tiptap/core';
import {Image} from '@tiptap/extension-image';
import {Plugin} from '@tiptap/pm/state';
import type {DOMOutputSpec, NodeSpec} from 'prosemirror-model';
import type {EditorView} from 'prosemirror-view';
import {take, takeWhile} from 'rxjs';

import {TUI_IMAGE_LOADER} from '../../tokens/image-loader';
import {TuiNodeView} from '../tiptap-node-view';
import {TuiImageEditorComponent} from './image-editor.component';
import type {TuiEditableImage} from './image-editor.options';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        imageEditor: {
            setEditableImage: (imageConfigs: TuiEditableImage) => ReturnType;
        };
    }
}

const IMAGE_EDITOR_PARSE_META = [{tag: 'img[data-type="image-editor"]'}];

const DEFAULT_IMAGE_ATTRS = {
    src: {
        default: '',
        keepOnSplit: false,
    },
    width: {
        default: 300,
        keepOnSplit: false,
    },
    alt: {
        default: '',
        keepOnSplit: false,
    },
    title: {
        default: '',
        keepOnSplit: false,
    },
};

function pasteImage(injector: Injector) {
    return (view: EditorView, event: ClipboardEvent | DragEvent): void => {
        const dataTransfer =
            event instanceof DragEvent ? event.dataTransfer : event.clipboardData;
        const imagesFiles = Array.from(dataTransfer?.files ?? []).filter(file =>
            /image/i.test(file.type),
        );

        if (imagesFiles.length) {
            event.preventDefault();
        }

        const loader = injector.get(TUI_IMAGE_LOADER);

        imagesFiles.forEach(file => {
            loader(file)
                .pipe(
                    take(1),
                    // eslint-disable-next-line rxjs/no-ignored-takewhile-value
                    takeWhile(() => !view.isDestroyed),
                )
                .subscribe(src => {
                    const node = view.state.schema.nodes.imageEditor.create({src});
                    const transaction = view.state.tr.replaceSelectionWith(node);

                    setTimeout?.(() => {
                        if (!view.isDestroyed) {
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
        name: 'imageEditor',
        group: 'inline',
        inline: true,
        atom: true,
        priority: 0,
        selectable: true,
        draggable: enableDraggable,

        parseHTML(): NodeSpec['parseDOM'] {
            return IMAGE_EDITOR_PARSE_META;
        },

        addAttributes(): Record<keyof TuiEditableImage, Attribute> {
            return {
                ...DEFAULT_IMAGE_ATTRS,
                draggable: {
                    default: enableDraggable ? '' : null,
                    keepOnSplit: false,
                },
            };
        },

        renderHTML({HTMLAttributes}: Record<string, any>): DOMOutputSpec {
            return [
                'img',
                mergeAttributes(HTMLAttributes, {'data-type': 'image-editor'}),
            ];
        },

        addNodeView(): NodeViewRenderer {
            return (props: NodeViewRendererProps) =>
                new TuiNodeView(TuiImageEditorComponent, props, {injector, ...props});
        },

        addCommands(): Partial<RawCommands> {
            return {
                setEditableImage:
                    attrs =>
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
