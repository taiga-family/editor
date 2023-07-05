import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {TuiPreviewDialogService} from '@taiga-ui/addon-preview';
import {TuiDialogContext} from '@taiga-ui/core';

@Component({
    selector: 'image-preview-example',
    templateUrl: './image-preview.template.html',
    styleUrls: ['./image-preview.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagePreviewExampleComponent {
    @ViewChild('previewImages')
    template?: TemplateRef<TuiDialogContext>;

    image?: HTMLImageElement;

    constructor(
        @Inject(TuiPreviewDialogService)
        private readonly dialogs: TuiPreviewDialogService,
    ) {}

    showImage(image: HTMLImageElement): void {
        this.image = image;
        this.dialogs.open(this.template || '').subscribe();
    }
}
