import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/images/resizable/examples/1/index.html?raw
var __default = '<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n/>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            @if (isE2E) {\n                Too heavy html code\n            } @else {\n                <span class="code">{{ control.value }}</span>\n            }\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n';
export {
  __default as default
};
//# sourceMappingURL=chunk-BY77ZLIZ.js.map
