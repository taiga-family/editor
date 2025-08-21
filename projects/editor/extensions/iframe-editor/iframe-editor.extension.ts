import {type Injector} from '@angular/core';
import {type TuiEditableIframe} from '@taiga-ui/editor/common';
import {TuiNodeView} from '@taiga-ui/editor/extensions/tiptap-node-view';
import {
    type Attribute,
    mergeAttributes,
    Node,
    type NodeViewRenderer,
    type NodeViewRendererProps,
    type RawCommands,
} from '@tiptap/core';
import {type DOMOutputSpec, type NodeSpec} from '@tiptap/pm/model';
import {type NodeView} from '@tiptap/pm/view';

import {TuiIframeEditor} from './iframe-editor.component';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        iframe: {
            setIframe: (options: TuiEditableIframe) => ReturnType;
        };
    }
}

export const tuiCreateIframeEditorExtension = ({injector}: {injector: Injector}): Node =>
    Node.create({
        name: 'iframe',
        group: 'block',
        atom: true,
        draggable: false,

        parseHTML(): NodeSpec['parseDOM'] {
            return [{tag: 'iframe'}];
        },

        addAttributes(): Record<keyof TuiEditableIframe, Attribute> {
            return {
                src: {
                    default: null,
                    keepOnSplit: false,
                    parseHTML: (element) => element.getAttribute('src'),
                },
                frameborder: {
                    default: 0,
                    keepOnSplit: false,
                    parseHTML: (element) => element.getAttribute('frameborder'),
                },
                width: {
                    default: '100%',
                    keepOnSplit: false,
                    parseHTML: (element) => element.getAttribute('width'),
                },
                height: {
                    default: null,
                    keepOnSplit: false,
                    parseHTML: (element) => element.getAttribute('height'),
                },
                allowfullscreen: {
                    keepOnSplit: false,
                    default: this.options.allowFullscreen,
                    parseHTML: (element) => element.getAttribute('allowfullscreen'),
                },
            };
        },

        renderHTML({HTMLAttributes}: Record<string, any>): DOMOutputSpec {
            return [
                'iframe',
                mergeAttributes(HTMLAttributes, {'data-type': 'iframe-editor'}),
            ];
        },

        addNodeView(): NodeViewRenderer {
            return (props: NodeViewRendererProps): NodeView =>
                new TuiNodeView(TuiIframeEditor, props, {
                    injector,
                    ...props,
                }) as unknown as NodeView;
        },

        addCommands(): Partial<RawCommands> {
            return {
                setIframe:
                    (attrs) =>
                    ({commands, state}) => {
                        const prevLine = state.selection.anchor;

                        commands.enter();
                        commands.setTextSelection(prevLine);

                        commands.insertContent({
                            type: this.name,
                            attrs,
                        });

                        commands.setTextSelection(state.selection.anchor);

                        return true;
                    },
            };
        },
    });
