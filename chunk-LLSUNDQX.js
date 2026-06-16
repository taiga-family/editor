import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-OJI7NEMY.js";
import "./chunk-ZWVVDWT5.js";
import "./chunk-AXANVBV5.js";
import "./chunk-MXICQEMR.js";
import "./chunk-2QWJYW7T.js";
import "./chunk-WLU4T4R7.js";
import "./chunk-4W47VJX7.js";
import "./chunk-QLYIM47N.js";
import "./chunk-BWCWLN77.js";
import "./chunk-B3ZIK3YY.js";
import "./chunk-HCLCQICK.js";
import "./chunk-Y5NXHTWC.js";
import "./chunk-F67AGDSR.js";
import "./chunk-5464WHRF.js";
import "./chunk-YZQ2AVZQ.js";
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
} from "./chunk-6FE6LACA.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/toolbar/custom/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-2D3UXQCB.js");
    this.example1 = {
      TypeScript: import("./chunk-4CZ6IMMQ.js"),
      HTML: import("./chunk-QJMRD5KO.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 2, vars: 3, consts: [["heading", "Pass own toolbar", 3, "component", "content", "fullsize"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-doc-page");
    \u0275\u0275element(1, "tui-doc-example", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component1)("content", ctx.example1)("fullsize", true);
  }
}, dependencies: [TuiDocExample, TuiDocPage], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        heading="Pass own toolbar"\n        [component]="component1"\n        [content]="example1"\n        [fullsize]="true"\n    />\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/toolbar/custom/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-LLSUNDQX.js.map
