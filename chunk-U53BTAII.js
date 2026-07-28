import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-HNGS33J4.js";
import "./chunk-ZBMDLT5W.js";
import "./chunk-REBFPV2I.js";
import "./chunk-L27UPW7Z.js";
import "./chunk-RMDV52BE.js";
import "./chunk-CNAPJKJD.js";
import "./chunk-PWEWQNSM.js";
import "./chunk-3CLCIOYC.js";
import "./chunk-3JPI6LSU.js";
import "./chunk-K5V67KBE.js";
import "./chunk-HSVQSQDL.js";
import "./chunk-LUTS7IYH.js";
import "./chunk-FFQ24UYZ.js";
import "./chunk-OKNTYFGP.js";
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

// projects/demo/src/app/pages/appearance/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-4DNWGKO2.js");
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
//# sourceMappingURL=chunk-U53BTAII.js.map
