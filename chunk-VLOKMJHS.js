import"./chunk-DAQOROHW.js";var i=`<ng-template
    #previewImages
    let-dialog
>
    <tui-preview [rotatable]="true">
        @if (image) {
            <img
                alt=""
                loading="lazy"
                class="t-image-preview"
                [src]="image.src"
            />
        }

        <button
            iconStart="@tui.x"
            title="Close"
            tuiIconButton
            tuiPreviewAction
            type="button"
            (click)="dialog.complete()"
        ></button>
    </tui-preview>
</ng-template>
`;export{i as default};
