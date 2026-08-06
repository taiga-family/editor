import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-2QZKAU7U.js";
import "./chunk-TJEIXAFV.js";
import "./chunk-YBDWIUBZ.js";
import "./chunk-3WSUXZNO.js";
import "./chunk-TZL3KZPV.js";
import "./chunk-2X7ECQEH.js";
import "./chunk-PWEWQNSM.js";
import "./chunk-PTWIXU7X.js";
import "./chunk-SRPV5Q45.js";
import "./chunk-42UC7I5S.js";
import "./chunk-HSVQSQDL.js";
import "./chunk-LUTS7IYH.js";
import "./chunk-FFQ24UYZ.js";
import "./chunk-EVRMGIDW.js";
import "./chunk-UV3WKPLB.js";
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
} from "./chunk-WPT3CLAO.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/images/preview/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-M67LYF3L.js");
    this.example1 = {
      TypeScript: import("./chunk-LT3PJ2TF.js"),
      HTML: import("./chunk-HV4GTNLD.js"),
      "image-preview/image-preview.template.html": import("./chunk-BTR6KOZR.js"),
      "image-preview/image-preview.style.less": import("./chunk-TQ7IKQXQ.js"),
      "image-preview/image-preview.component.ts": import("./chunk-MJXSNPWT.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 2, vars: 2, consts: [["heading", "Preview for images", 3, "component", "content"]], template: function Example_Template(rf, ctx) {
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
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        heading="Preview for images"\n        [component]="component1"\n        [content]="example1"\n    />\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/images/preview/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-PZCED2C3.js.map
