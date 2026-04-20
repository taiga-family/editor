import {Directive, output} from '@angular/core';

@Directive({
    standalone: true,
    selector: 'tui-editor-socket[imagePreview]',
    host: {
        class: '_preview-image',
        '(click)': 'click($event.target)',
    },
})
export class TuiEditorImagePreview {
    public readonly imagePreview = output<HTMLImageElement>();

    protected click(target: HTMLElement): void {
        if (target instanceof HTMLImageElement) {
            this.imagePreview.emit(target);
        }
    }
}
