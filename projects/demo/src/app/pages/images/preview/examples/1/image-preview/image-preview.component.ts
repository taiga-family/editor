import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {TuiPreviewDialogService, TuiPreviewModule} from '@taiga-ui/addon-preview';
import {TuiButtonModule, TuiDialogContext} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'image-preview-example',
    imports: [TuiPreviewModule, TuiButtonModule, NgIf],
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
