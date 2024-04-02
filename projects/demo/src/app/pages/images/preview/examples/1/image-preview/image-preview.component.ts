import {NgIf} from '@angular/common';
import type {TemplateRef} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, ViewChild} from '@angular/core';
import {TuiPreviewDialogService, TuiPreviewModule} from '@taiga-ui/addon-preview';
import type {TuiDialogContext} from '@taiga-ui/core';
import {TuiButtonDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'image-preview-example',
    imports: [TuiPreviewModule, TuiButtonDirective, NgIf],
    templateUrl: './image-preview.template.html',
    styleUrls: ['./image-preview.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagePreviewExampleComponent {
    private readonly dialogs = inject(TuiPreviewDialogService);

    @ViewChild('previewImages')
    protected template?: TemplateRef<TuiDialogContext>;

    protected image?: HTMLImageElement;

    public showImage(image: HTMLImageElement): void {
        this.image = image;
        this.dialogs.open(this.template || '').subscribe();
    }
}
