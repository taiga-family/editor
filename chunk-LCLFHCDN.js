import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/images/upload/examples/1/index.html?raw
var __default = '<tui-loader\n    [overlay]="true"\n    [showLoader]="!!(imgbbService.loading$ | async)"\n>\n    <tui-editor\n        class="editor"\n        [formControl]="control"\n        [tools]="builtInTools"\n        [tuiValidator]="validator"\n    />\n</tui-loader>\n\n<tui-error\n    [error]="[] | tuiFieldError | async"\n    [formControl]="control"\n/>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n';
export {
  __default as default
};
//# sourceMappingURL=chunk-LCLFHCDN.js.map
