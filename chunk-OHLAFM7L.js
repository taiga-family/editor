import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-2A3N6FXA.js";
import "./chunk-ZAIJXHNT.js";
import "./chunk-BZVHQ5IJ.js";
import "./chunk-MDKCYD7T.js";
import "./chunk-GAIAKNWE.js";
import "./chunk-AXQ3T7JW.js";
import "./chunk-S4XH5VPI.js";
import "./chunk-DA6ZWNIU.js";
import "./chunk-5VU3JYWR.js";
import "./chunk-EHNT4D2S.js";
import "./chunk-DDZQRXHH.js";
import "./chunk-3ZHEQMJ3.js";
import "./chunk-LZR2XIKZ.js";
import "./chunk-G7J7ZFQZ.js";
import "./chunk-CRKP42UQ.js";
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
} from "./chunk-F26JVLG2.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/custom-tool/color-picker/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-6KBMA7HL.js");
    this.example1 = {
      HTML: import("./chunk-ZGFVJ2FI.js"),
      TypeScript: import("./chunk-JV2ZLLEC.js"),
      "./custom-color-picker/custom-color-picker.component.ts": import("./chunk-UE3YYNQQ.js"),
      "./custom-color-picker/custom-color-picker.component.less": import("./chunk-OEUUXQW4.js"),
      "./custom-color-picker/custom-color-picker.component.html": import("./chunk-BT4GYMAG.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 2, vars: 2, consts: [["heading", "Custom color picker tools", 3, "component", "content"]], template: function Example_Template(rf, ctx) {
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
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        heading="Custom color picker tools"\n        [component]="component1"\n        [content]="example1"\n    />\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/custom-tool/color-picker/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-OHLAFM7L.js.map
