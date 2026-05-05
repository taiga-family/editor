import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-HNDDVGOU.js";
import "./chunk-DDXMN6JQ.js";
import "./chunk-DFI5ASPR.js";
import "./chunk-6CDTWSVZ.js";
import "./chunk-DE5QODYN.js";
import "./chunk-3RNKF3UO.js";
import "./chunk-O2R5TA2P.js";
import "./chunk-C2RQT3I6.js";
import "./chunk-UBEFBV2K.js";
import "./chunk-6ZFGJIHW.js";
import "./chunk-6K6ZFURU.js";
import "./chunk-BZTTG73I.js";
import "./chunk-7NTP4ZJW.js";
import "./chunk-7CQO4UTC.js";
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
} from "./chunk-KCQY4XIQ.js";
import "./chunk-JJYTWBAH.js";
import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/toolbar/shared/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-MGFGNVSB.js");
    this.example1 = {
      TypeScript: import("./chunk-G2NNX6VQ.js"),
      HTML: import("./chunk-ID3GQXHP.js"),
      LESS: import("./chunk-VWMWEMS6.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 2, vars: 3, consts: [["heading", "One toolbar for many editors", 3, "component", "content", "fullsize"]], template: function Example_Template(rf, ctx) {
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
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        heading="One toolbar for many editors"\n        [component]="component1"\n        [content]="example1"\n        [fullsize]="true"\n    />\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/toolbar/shared/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-KUIZTYBM.js.map
