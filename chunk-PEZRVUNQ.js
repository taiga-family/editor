import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/slash/examples/1/index.html?raw
var __default = '<tui-editor\n    [formControl]="control"\n    [tools]="builtInTools"\n    [(tuiDropdownOpen)]="open"\n>\n    <tui-data-list *tuiDropdown>\n        @for (item of filter(suggestion); track item.name) {\n            <button\n                tuiOption\n                type="button"\n                (click)="command(item)"\n            >\n                {{ item.name }}\n            </button>\n        }\n    </tui-data-list>\n</tui-editor>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n';
export {
  __default as default
};
//# sourceMappingURL=chunk-PEZRVUNQ.js.map
