import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-5OYCAE6U.js";
import "./chunk-N2I4NDEC.js";
import "./chunk-43T2765T.js";
import "./chunk-RGU5X6JK.js";
import "./chunk-6VH6DR7W.js";
import "./chunk-GLG7L24I.js";
import "./chunk-TO6IF4KK.js";
import "./chunk-2LK3XWNF.js";
import "./chunk-UK3D2IJN.js";
import "./chunk-CZCJZTAA.js";
import "./chunk-LTRKP6XS.js";
import "./chunk-UO32WQJY.js";
import "./chunk-XQBFNBOU.js";
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
} from "./chunk-QZKNXBAU.js";
import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/toolbar/floating/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-E3AK4B6P.js");
    this.example1 = {
      TypeScript: import("./chunk-XXUWJSYV.js"),
      HTML: import("./chunk-UIPZSSW6.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 2, vars: 2, consts: [["heading", "Floating", 3, "component", "content"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-doc-page");
    \u0275\u0275element(1, "tui-doc-example", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component1)("content", ctx.example1);
  }
}, dependencies: [TuiDocExample, TuiDocPage], styles: ["\n\n[heading=Floating][_ngcontent-%COMP%]  .t-demo {\n  padding: 0;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        heading="Floating"\n        [component]="component1"\n        [content]="example1"\n    />\n</tui-doc-page>\n', styles: ["/* projects/demo/src/app/pages/toolbar/floating/index.less */\n[heading=Floating]::ng-deep .t-demo {\n  padding: 0;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/toolbar/floating/index.ts", lineNumber: 10 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-NYXQU4S3.js.map
