import {Directive} from '@angular/core';
import {TuiDestroyService, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {merge, takeUntil} from 'rxjs';

import {TuiNodeViewNgComponent} from '../../extensions/tiptap-node-view';

export interface TuiEditorResizableContainer {
    height?: number | string | null;
    width?: number | string | null;
}

@Directive()
export abstract class AbstractTuiEditorResizable<
    T extends TuiEditorResizableContainer,
> extends TuiNodeViewNgComponent {
    protected currentHeight = 0;
    protected currentWidth = 0;

    protected constructor(
        protected readonly doc: Document,
        protected readonly destroy$: TuiDestroyService,
    ) {
        super();

        merge(tuiTypedFromEvent(doc, 'touchend'), tuiTypedFromEvent(doc, 'mouseup'))
            .pipe(takeUntil(destroy$))
            .subscribe(() =>
                this.updateAttributes({width: this.width, height: this.currentHeight}),
            );
    }

    get attrs(): T {
        return (this.node?.attrs as T) || {src: ''};
    }

    get width(): number | string | null {
        return this.currentWidth || this.attrs.width || null;
    }

    get height(): number | string | null {
        return this.currentHeight || this.attrs.height || null;
    }

    abstract updateSize([width, height]: readonly [width: number, height: number]): void;
}
