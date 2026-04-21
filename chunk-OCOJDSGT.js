import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/images/preview/examples/1/image-preview/image-preview.template.html?raw
var image_preview_template_default = '<ng-template\n    #previewImages\n    let-dialog\n>\n    <tui-preview [rotatable]="true">\n        @if (image) {\n            <img\n                alt=""\n                loading="lazy"\n                class="t-image-preview"\n                [src]="image.src"\n            />\n        }\n\n        <button\n            iconStart="@tui.x"\n            title="Close"\n            tuiIconButton\n            tuiPreviewAction\n            type="button"\n            (click)="dialog.complete()"\n        ></button>\n    </tui-preview>\n</ng-template>\n';
export {
  image_preview_template_default as default
};
//# sourceMappingURL=chunk-OCOJDSGT.js.map
