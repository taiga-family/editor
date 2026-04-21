import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/custom-tool/span/examples/1/index.html?raw
var __default = '<tui-editor\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    <ng-container ngProjectAs="tools">\n        <button\n            appearance="icon"\n            iconStart="@tui.paintbrush-vertical"\n            size="s"\n            tuiIconButton\n            tuiToolbarTool\n            type="button"\n            (click)="paint()"\n        >\n            Select\n        </button>\n    </ng-container>\n</tui-editor>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n';
export {
  __default as default
};
//# sourceMappingURL=chunk-M37VHFL2.js.map
