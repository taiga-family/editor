import"./chunk-DAQOROHW.js";var t=`import {
    ChangeDetectionStrategy,
    Component,
    inject,
    type TemplateRef,
    viewChild,
} from '@angular/core';
import {TuiButton, type TuiDialogContext} from '@taiga-ui/core';
import {TuiPreview, TuiPreviewDialogService} from '@taiga-ui/kit';

@Component({
    selector: 'image-preview-example',
    imports: [TuiButton, TuiPreview],
    templateUrl: './image-preview.template.html',
    styleUrl: './image-preview.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagePreviewExample {
    private readonly dialogs = inject(TuiPreviewDialogService);

    protected readonly template =
        viewChild.required<TemplateRef<TuiDialogContext>>('previewImages');

    protected image?: HTMLImageElement;

    public showImage(image: HTMLImageElement): void {
        this.image = image;
        this.dialogs.open(this.template()).subscribe();
    }
}
`;export{t as default};
