import type {ChangeDetectorRef} from '@angular/core';
import {Directive} from '@angular/core';
import {TuiNodeViewNg} from '@taiga-ui/editor/extensions/tiptap-node-view';
import type {NodeViewProps} from '@tiptap/core';

export interface TuiEditorResizableContainer {
    height?: number | string | null;
    width?: number | string | null;
}

@Directive()
export abstract class AbstractTuiEditorResizable<
    T extends TuiEditorResizableContainer,
> extends TuiNodeViewNg {
    protected abstract readonly changeDetector: ChangeDetectorRef;
    private localNode!: NodeViewProps['node'];
    protected currentHeight = 0;
    protected currentWidth = 0;

    public abstract updateSize([width, height]: readonly [
        width: number,
        height: number,
    ]): void;

    public get node(): NodeViewProps['node'] {
        return this.localNode;
    }

    public set node(value: NodeViewProps['node']) {
        this.localNode = value;
        this.changeDetector.detectChanges();
    }

    protected get attrs(): T {
        return (this.node?.attrs as T) || {src: ''};
    }

    protected get width(): number | string | null {
        return (this.currentWidth || this.attrs.width) ?? null;
    }

    protected get height(): number | string | null {
        return (this.currentHeight || this.attrs.height) ?? null;
    }
}
