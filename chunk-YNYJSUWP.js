import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/highlight/text/examples/1/index.html?raw
var __default = '<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    <ng-container ngProjectAs="tools">\n        <button\n            appearance="icon"\n            iconStart="@tui.droplets"\n            size="s"\n            tuiIconButton\n            tuiItem\n            tuiToolbarTool\n            type="button"\n            (click)="toggleHighlight()"\n        >\n            Toggle highlight\n        </button>\n    </ng-container>\n</tui-editor>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n';
export {
  __default as default
};
//# sourceMappingURL=chunk-YNYJSUWP.js.map
