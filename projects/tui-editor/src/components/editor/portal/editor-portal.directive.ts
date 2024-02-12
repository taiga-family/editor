import {Directive, ElementRef, Inject} from '@angular/core';
import {tuiAsViewport, TuiDropdownService, TuiRectAccessor} from '@taiga-ui/core';

import {TuiEditorPortalService} from './editor-portal.service';

@Directive({
    standalone: true,
    selector: '[tuiEditorPortal]',
    providers: [
        {provide: TuiDropdownService, useExisting: TuiEditorPortalService},
        tuiAsViewport(TuiEditorPortalDirective),
    ],
})
export class TuiEditorPortalDirective extends TuiRectAccessor {
    readonly type = 'viewport';

    constructor(@Inject(ElementRef) private readonly el: ElementRef<HTMLElement>) {
        super();
    }

    getClientRect(): ClientRect {
        return this.el.nativeElement.getBoundingClientRect();
    }
}
