import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-EEKPJ2QM.js";
import "./chunk-YGOCUPM6.js";
import "./chunk-UOROJ4OO.js";
import "./chunk-F6IX2MX2.js";
import "./chunk-QBSXUJOT.js";
import "./chunk-CEHQ5QIS.js";
import "./chunk-D3YV7ZHS.js";
import "./chunk-NLNCZRCI.js";
import "./chunk-LPBSAZLJ.js";
import "./chunk-HHFYZN44.js";
import "./chunk-DMAZJOQQ.js";
import "./chunk-EMEGSUC4.js";
import "./chunk-5BSJ6YPL.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty
} from "./chunk-KFKFA6WT.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/markdown/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-ITXAL6AB.js");
    this.example1 = {
      TypeScript: import("./chunk-F3PXOKUI.js"),
      HTML: import("./chunk-4KUEIGG5.js"),
      LESS: import("./chunk-ILS3VKQI.js"),
      "example.md": import("./chunk-IT3RBWMB.js"),
      "make-markdown.ts": import("./chunk-BGBZ62RD.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 2, vars: 2, consts: [["description", "You can use any parsing markdown library outside", "heading", "Markdown", 3, "component", "content"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-doc-page");
    \u0275\u0275element(1, "tui-doc-example", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component1)("content", ctx.example1);
  }
}, dependencies: [TuiDocExample, TuiDocPage], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        description="You can use any parsing markdown library outside"\n        heading="Markdown"\n        [component]="component1"\n        [content]="example1"\n    />\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/markdown/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-2A226UHK.js.map
