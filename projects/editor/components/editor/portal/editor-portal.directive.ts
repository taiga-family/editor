import {Directive, ElementRef, forwardRef, inject} from '@angular/core';
import {tuiAsViewport, TuiDropdownService, TuiRectAccessor} from '@taiga-ui/core';

import {TuiEditorPortalService} from './editor-portal.service';

@Directive({
    standalone: true,
    selector: '[tuiEditorPortal]',
    providers: [
        {provide: TuiDropdownService, useExisting: TuiEditorPortalService},
        tuiAsViewport(forwardRef(() => TuiEditorPortal)),
    ],
})
export class TuiEditorPortal extends TuiRectAccessor {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    public readonly type = 'viewport';

    public getClientRect(): ClientRect {
        return this.el.getBoundingClientRect();
    }
}
