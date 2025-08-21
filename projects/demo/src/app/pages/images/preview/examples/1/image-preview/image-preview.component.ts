import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    type TemplateRef,
    ViewChild,
} from '@angular/core';
import {TuiButton, type TuiDialogContext} from '@taiga-ui/core';
import {TuiPreview, TuiPreviewDialogService} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'image-preview-example',
    imports: [NgIf, TuiButton, TuiPreview],
    templateUrl: './image-preview.template.html',
    styleUrls: ['./image-preview.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagePreviewExample {
    private readonly dialogs = inject(TuiPreviewDialogService);

    @ViewChild('previewImages')
    protected template?: TemplateRef<TuiDialogContext>;

    protected image?: HTMLImageElement;

    public showImage(image: HTMLImageElement): void {
        this.image = image;
        this.dialogs.open(this.template || '').subscribe();
    }
}
