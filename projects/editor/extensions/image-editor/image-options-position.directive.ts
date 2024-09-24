import {Directive, ElementRef, inject} from '@angular/core';
import type {TuiPoint} from '@taiga-ui/core';
import {tuiAsPositionAccessor, TuiPositionAccessor} from '@taiga-ui/core';

@Directive({
    standalone: true,
    selector: '[tuiImageOptionsPosition]',
    providers: [tuiAsPositionAccessor(TuiImageOptionsPosition)],
})
export class TuiImageOptionsPosition extends TuiPositionAccessor {
    private readonly el: ElementRef<HTMLElement> = inject(ElementRef);
    public readonly type = 'dropdown';

    public getPosition({width, height}: DOMRect): TuiPoint {
        const {right, top} = this.el.nativeElement.getBoundingClientRect();

        return [top + height + 5, right - width / 2];
    }
}
