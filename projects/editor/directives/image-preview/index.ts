import {Directive, EventEmitter, Output} from '@angular/core';

@Directive({
    standalone: true,
    selector: 'tui-editor-socket[imagePreview]',
    host: {
        class: '_preview-image',
        '(click)': 'click($event.target)',
    },
})
export class TuiEditorImagePreview {
    @Output()
    public readonly imagePreview = new EventEmitter<HTMLImageElement>();

    protected click(target: HTMLElement): void {
        if (target instanceof HTMLImageElement) {
            this.imagePreview.emit(target);
        }
    }
}
