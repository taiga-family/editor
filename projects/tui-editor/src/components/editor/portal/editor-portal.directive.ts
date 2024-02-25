import {Directive, ElementRef, inject} from '@angular/core';
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
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    readonly type = 'viewport';

    getClientRect(): ClientRect {
        return this.el.getBoundingClientRect();
    }
}
