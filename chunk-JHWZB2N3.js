import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/upload-files/examples/3/index.html?raw
var __default = '<form [formGroup]="group">\n    <tui-toolbar\n        class="toolbar"\n        [editor]="editorRef"\n        [tools]="builtInTools"\n        (fileAttached)="attach($event)"\n    />\n\n    <tui-loader\n        [overlay]="true"\n        [showLoader]="!!(uploadService.loading$ | async)"\n    >\n        <tui-editor\n            #header\n            formControlName="header"\n            class="editor"\n            [tools]="[]"\n            (focusIn)="editorRef = header.editor"\n        >\n            Header\n        </tui-editor>\n\n        <tui-editor\n            #main\n            formControlName="main"\n            class="editor"\n            [tools]="[]"\n            (focusIn)="editorRef = main.editor"\n        >\n            Main\n        </tui-editor>\n    </tui-loader>\n</form>\n';
export {
  __default as default
};
//# sourceMappingURL=chunk-JHWZB2N3.js.map
