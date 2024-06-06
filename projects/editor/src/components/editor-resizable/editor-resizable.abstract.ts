import {Directive} from '@angular/core';

import {TuiNodeViewNg} from '../../extensions/tiptap-node-view';

export interface TuiEditorResizableContainer {
    height?: number | string | null;
    width?: number | string | null;
}

@Directive()
export abstract class AbstractTuiEditorResizable<
    T extends TuiEditorResizableContainer,
> extends TuiNodeViewNg {
    protected currentHeight = 0;
    protected currentWidth = 0;

    public abstract updateSize([width, height]: readonly [
        width: number,
        height: number,
    ]): void;

    protected get attrs(): T {
        return (this.node?.attrs as T) || {src: ''};
    }

    protected get width(): number | string | null {
        return this.currentWidth || this.attrs.width || null;
    }

    protected get height(): number | string | null {
        return this.currentHeight || this.attrs.height || null;
    }
}
