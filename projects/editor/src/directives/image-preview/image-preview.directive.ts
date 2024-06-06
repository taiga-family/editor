import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
    standalone: true,
    selector: 'tui-editor-socket[imagePreview]',
    host: {class: '_preview-image'},
})
export class TuiEditorImagePreview {
    @Output()
    public readonly imagePreview = new EventEmitter<HTMLImageElement>();

    @HostListener('click', ['$event.target'])
    protected click(target: HTMLElement): void {
        if (target instanceof HTMLImageElement) {
            this.imagePreview.emit(target);
        }
    }
}
