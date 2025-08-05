import {DOCUMENT} from '@angular/common';
import type {ComponentRef, Injector, Type} from '@angular/core';
import {ApplicationRef, ComponentFactoryResolver, ElementRef} from '@angular/core';
import type {
    DecorationWithType,
    Editor,
    NodeViewProps,
    NodeViewRendererOptions,
    NodeViewRendererProps,
} from '@tiptap/core';
import {NodeView} from '@tiptap/core';
import type {Node as ProseMirrorNode} from '@tiptap/pm/model';
import type {Decoration, DecorationSource, EditorView} from '@tiptap/pm/view';

/**
 * Copied from
 * {@link https://github.com/sibiraj-s/ngx-tiptap/blob/master/projects/ngx-tiptap/src/lib/AngularRenderer.ts ngx-tiptap}
 */
export class TuiComponentRenderer<C, P> {
    private readonly componentRef: ComponentRef<C>;

    constructor(component: Type<C>, injector: Injector, props: Partial<P>) {
        const applicationRef = injector.get(ApplicationRef);

        const componentFactoryResolver = injector.get(ComponentFactoryResolver);
        const factory = componentFactoryResolver.resolveComponentFactory(component);

        this.componentRef = factory.create(injector, []);

        // set input props to the component
        this.updateProps(props);

        // Attach to the view so that the change detector knows to run
        applicationRef.attachView(this.componentRef.hostView);
    }

    public get el(): ElementRef {
        return this.componentRef.injector.get(ElementRef);
    }

    public get dom(): HTMLElement {
        return this.el.nativeElement;
    }

    public updateProps<T extends P>(props: Partial<T>): void {
        Object.entries(props).forEach(([key, value]) => {
            this.instance[key as keyof C] = value as C[keyof C];
        });
    }

    public detectChanges(): void {
        this.componentRef.changeDetectorRef.detectChanges();
    }

    public destroy(): void {
        this.componentRef.destroy();
    }

    protected get instance(): C {
        return this.componentRef.instance;
    }
}

/**
 * You should extend this class to create custom
 * Tiptap's {@link https://tiptap.dev/guide/node-views NodeView} from angular component.
 * It contains compulsory properties which component will get externally while NodeView's rendering.
 */
export abstract class TuiNodeViewNg implements NodeViewProps {
    declare public editor: NodeViewProps['editor'];
    declare public decorations: NodeViewProps['decorations'];
    declare public selected: NodeViewProps['selected'];
    declare public extension: NodeViewProps['extension'];
    declare public getPos: NodeViewProps['getPos'];
    declare public updateAttributes: NodeViewProps['updateAttributes'];
    declare public deleteNode: NodeViewProps['deleteNode'];
    // eslint-disable-next-line @typescript-eslint/naming-convention
    declare public HTMLAttributes: Record<string, any>;
    declare public innerDecorations: DecorationSource;
    declare public view: EditorView;

    public abstract get node(): NodeViewProps['node'];
    public abstract set node(value: NodeViewProps['node']);
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
    Type<TuiNodeViewNg>,
    Editor,
    TuiNodeViewRendererOptions
> {
    declare protected renderer: TuiComponentRenderer<TuiNodeViewNg, NodeViewProps>;
    protected contentDOMElement: HTMLElement | null = null;

    /**
     * @caretaker note:
     * Class constructor NodeView cannot be invoked without 'new'
     */
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(
        component: Type<TuiNodeViewNg>,
        props: NodeViewRendererProps,
        options?: Partial<TuiNodeViewRendererOptions>,
    ) {
        super(component, props, options);
    }

    public override get dom(): HTMLElement {
        return this.renderer.dom;
    }

    public override get contentDOM(): HTMLElement | null {
        if (this.node.isLeaf) {
            return null;
        }

        return this.contentDOMElement;
    }

    public override mount(): void {
        const injector = this.options.injector;
        const doc = injector.get(DOCUMENT);

        const props: NodeViewProps = {
            editor: this.editor,
            node: this.node,
            decorations: this.decorations as readonly DecorationWithType[],
            selected: false,
            extension: this.extension,
            getPos: () => this.getPos(),
            updateAttributes: (attributes = {}) => this.updateAttributes(attributes),
            deleteNode: () => this.deleteNode(),
            view: this.view,
            innerDecorations: this.innerDecorations,
            HTMLAttributes: this.HTMLAttributes,
        };

        this.editor.on('selectionUpdate', this.handleSelectionUpdate.bind(this));

        // create renderer
        this.renderer = new TuiComponentRenderer(this.component, injector, props);

        // Register drag handler
        if (this.extension.config.draggable !== undefined) {
            this.renderer.el.nativeElement.ondragstart = (e: DragEvent) => {
                this.onDragStart(e);
            };
        }

        const inline = this.node.isInline ? 'span' : 'div';

        this.contentDOMElement = this.node.isLeaf ? null : doc.createElement(inline);

        if (this.contentDOMElement) {
            // For some reason the whiteSpace prop is not inherited properly in Chrome and Safari
            // With this fix it seems to work fine
            // See: https://github.com/ueberdosis/tiptap/issues/1197
            this.contentDOMElement.style.whiteSpace = 'inherit';
            this.renderer.detectChanges();
        }

        this.appendContendDom();
    }

    protected update(node: ProseMirrorNode, decorations: DecorationWithType[]): boolean {
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

    protected handleSelectionUpdate(): void {
        const {from, to} = this.editor.state.selection;

        if (from <= this.getPos() && to >= this.getPos() + this.node.nodeSize) {
            this.selectNode();
        } else {
            this.deselectNode();
        }
    }

    protected selectNode(): void {
        this.renderer.updateProps({selected: true});
    }

    protected deselectNode(): void {
        this.renderer.updateProps({selected: false});
    }

    protected destroy(): void {
        this.renderer.destroy();
        this.editor.off('selectionUpdate', this.handleSelectionUpdate.bind(this));
        this.contentDOMElement = null;
    }

    private appendContendDom(): void {
        const contentElement = this.dom.querySelector('[data-node-view-content]');

        if (
            this.contentDOMElement &&
            contentElement &&
            !contentElement.contains(this.contentDOMElement)
        ) {
            contentElement.appendChild(this.contentDOMElement);
        }
    }
}
