import {DOCUMENT} from '@angular/common';
import {Injector, Type} from '@angular/core';
import {
    DecorationWithType,
    Editor,
    NodeView,
    NodeViewProps,
    NodeViewRendererOptions,
} from '@tiptap/core';
import type {Node as ProseMirrorNode} from 'prosemirror-model';
import type {Decoration} from 'prosemirror-view';

import {TuiComponentRenderer} from './component-render';

/**
 * You should extend this class to create custom
 * Tiptap's {@link https://tiptap.dev/guide/node-views NodeView} from angular component.
 * It contains compulsory properties which component will get externally while NodeView's rendering.
 */
export class TuiNodeViewNgComponent implements NodeViewProps {
    declare editor: NodeViewProps['editor'];
    declare node: NodeViewProps['node'];
    declare decorations: NodeViewProps['decorations'];
    declare selected: NodeViewProps['selected'];
    declare extension: NodeViewProps['extension'];
    declare getPos: NodeViewProps['getPos'];
    declare updateAttributes: NodeViewProps['updateAttributes'];
    declare deleteNode: NodeViewProps['deleteNode'];
}

export interface TuiNodeViewRendererOptions extends NodeViewRendererOptions {
    injector: Injector;
    update?: (node: ProseMirrorNode, decorations: Decoration[]) => boolean;
}

/**
 * Tiptap editor proposes concept of interactive {@link https://tiptap.dev/guide/node-views NodeViews}.
 * It gives you opportunity to create custom complex Node inside editor. And it will look like native Tiptap's Node.
 * Regard it like angular component inside editor.
 *
 * This solution is adaptation of official React implementation of NodeViews.
 * It was copied from
 * {@link https://github.com/sibiraj-s/ngx-tiptap/blob/master/projects/ngx-tiptap/src/lib/NodeViewRenderer.ts ngx-tiptap}
 */
export class TuiNodeView extends NodeView<
    Type<TuiNodeViewNgComponent>,
    Editor,
    TuiNodeViewRendererOptions
> {
    declare renderer: TuiComponentRenderer<TuiNodeViewNgComponent, NodeViewProps>;
    contentDOMElement: HTMLElement | null = null;

    override mount(): void {
        const injector = this.options.injector;
        const doc = injector.get(DOCUMENT);

        const props: NodeViewProps = {
            editor: this.editor,
            node: this.node,
            decorations: this.decorations,
            selected: false,
            extension: this.extension,
            getPos: () => this.getPos(),
            updateAttributes: (attributes = {}) => this.updateAttributes(attributes),
            deleteNode: () => this.deleteNode(),
        };

        this.editor.on(`selectionUpdate`, this.handleSelectionUpdate.bind(this));

        // create renderer
        this.renderer = new TuiComponentRenderer(this.component, injector, props);

        // Register drag handler
        if (this.extension.config.draggable) {
            this.renderer.el.nativeElement.ondragstart = (e: DragEvent) => {
                this.onDragStart(e);
            };
        }

        this.contentDOMElement = this.node.isLeaf
            ? null
            : doc.createElement(this.node.isInline ? `span` : `div`);

        if (this.contentDOMElement) {
            // For some reason the whiteSpace prop is not inherited properly in Chrome and Safari
            // With this fix it seems to work fine
            // See: https://github.com/ueberdosis/tiptap/issues/1197
            this.contentDOMElement.style.whiteSpace = `inherit`;
            this.renderer.detectChanges();
        }

        this.appendContendDom();
    }

    override get dom(): HTMLElement {
        return this.renderer.dom;
    }

    override get contentDOM(): HTMLElement | null {
        if (this.node.isLeaf) {
            return null;
        }

        return this.contentDOMElement;
    }

    update(node: ProseMirrorNode, decorations: DecorationWithType[]): boolean {
        if (this.options.update) {
            return this.options.update(node, decorations);
        }

        if (node.type !== this.node.type) {
            return false;
        }

        if (node === this.node && this.decorations === decorations) {
            return true;
        }

        this.node = node;
        this.decorations = decorations;
        this.renderer.updateProps({node, decorations});
        this.appendContendDom();

        return true;
    }

    handleSelectionUpdate(): void {
        const {from, to} = this.editor.state.selection;

        if (from <= this.getPos() && to >= this.getPos() + this.node.nodeSize) {
            this.selectNode();
        } else {
            this.deselectNode();
        }
    }

    selectNode(): void {
        this.renderer.updateProps({selected: true});
    }

    deselectNode(): void {
        this.renderer.updateProps({selected: false});
    }

    destroy(): void {
        this.renderer.destroy();
        this.editor.off(`selectionUpdate`, this.handleSelectionUpdate.bind(this));
        this.contentDOMElement = null;
    }

    private appendContendDom(): void {
        const contentElement = this.dom.querySelector(`[data-node-view-content]`);

        if (
            this.contentDOMElement &&
            contentElement &&
            !contentElement.contains(this.contentDOMElement)
        ) {
            contentElement.appendChild(this.contentDOMElement);
        }
    }
}