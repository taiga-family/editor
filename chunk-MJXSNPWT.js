import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/images/preview/examples/1/image-preview/image-preview.component.ts?raw
var image_preview_component_default = "import {\n    ChangeDetectionStrategy,\n    Component,\n    inject,\n    type TemplateRef,\n    viewChild,\n} from '@angular/core';\nimport {TuiButton, type TuiDialogContext} from '@taiga-ui/core';\nimport {TuiPreview, TuiPreviewDialogService} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'image-preview-example',\n    imports: [TuiButton, TuiPreview],\n    templateUrl: './image-preview.template.html',\n    styleUrl: './image-preview.style.less',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class ImagePreviewExample {\n    private readonly dialogs = inject(TuiPreviewDialogService);\n\n    protected readonly template =\n        viewChild.required<TemplateRef<TuiDialogContext>>('previewImages');\n\n    protected image?: HTMLImageElement;\n\n    public showImage(image: HTMLImageElement): void {\n        this.image = image;\n        this.dialogs.open(this.template()).subscribe();\n    }\n}\n";
export {
  image_preview_component_default as default
};
//# sourceMappingURL=chunk-MJXSNPWT.js.map
