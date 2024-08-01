import {Directive, ElementRef, Inject} from '@angular/core';
import {tuiAsPositionAccessor, TuiPoint, TuiPositionAccessor} from '@taiga-ui/core';

@Directive({
    selector: '[tuiImageOptionsPosition]',
    providers: [tuiAsPositionAccessor(TuiImageOptionsPositionDirective)],
})
export class TuiImageOptionsPositionDirective extends TuiPositionAccessor {
    readonly type = 'dropdown';

    constructor(@Inject(ElementRef) private readonly el: ElementRef<HTMLElement>) {
        super();
    }

    getPosition({width, height}: ClientRect): TuiPoint {
        const {right, top} = this.el.nativeElement.getBoundingClientRect();

        return [top + height + 5, right - width / 2];
    }
}
