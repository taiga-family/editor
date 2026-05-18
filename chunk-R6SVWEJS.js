import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-5KHKUJED.js";
import "./chunk-34YKIHCK.js";
import "./chunk-CLCX3JH2.js";
import "./chunk-WFC365XV.js";
import "./chunk-TNPUBTXS.js";
import "./chunk-ZB4FQPU6.js";
import "./chunk-VBCJONIF.js";
import "./chunk-42JXV3G3.js";
import "./chunk-4FRPOUVT.js";
import "./chunk-GZISCF73.js";
import "./chunk-YQZG6ATW.js";
import "./chunk-BQB57HZN.js";
import "./chunk-EEBAV3RI.js";
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
} from "./chunk-NS3244ZP.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/appearance/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-G3QINFI3.js");
    this.example1 = {
      TypeScript: import("./chunk-MN6I6MNL.js"),
      HTML: import("./chunk-AXYLQ2QQ.js"),
      LESS: import("./chunk-YZER7AHD.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 2, vars: 2, consts: [["heading", "No border appearance", 3, "component", "content"]], template: function Example_Template(rf, ctx) {
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
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        heading="No border appearance"\n        [component]="component1"\n        [content]="example1"\n    />\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/appearance/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-R6SVWEJS.js.map
