import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/dialog/examples/1/index.html?raw
var __default = `<button
    tuiButton
    type="button"
    (click)="showDialog()"
>
    Show dialog
</button>

<ng-template
    let-observer
    [tuiDialogOptions]="{label: 'Editor', size: 'l'}"
    [(tuiDialog)]="open"
>
    <form
        [formGroup]="form"
        (ngSubmit)="observer.complete()"
    >
        <tui-editor
            formControlName="content"
            [tools]="tools"
        >
            Start typing
        </tui-editor>

        <button
            tuiButton
            type="submit"
            class="tui-space_top-4"
        >
            Save
        </button>
    </form>
</ng-template>
`;
export {
  __default as default
};
//# sourceMappingURL=chunk-E3KNMSL6.js.map
