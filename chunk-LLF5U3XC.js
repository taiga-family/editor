import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-HIROPWVQ.js";
import "./chunk-URCI2WZE.js";
import "./chunk-OASLAXI3.js";
import "./chunk-EF4ATJ2Z.js";
import "./chunk-OKHG23JX.js";
import "./chunk-D5HJUDO5.js";
import "./chunk-5JTIYZOP.js";
import "./chunk-CFSNFPMI.js";
import "./chunk-X7GRIVH7.js";
import "./chunk-BILNAO2Z.js";
import "./chunk-M562FPU2.js";
import "./chunk-43GMD6GA.js";
import "./chunk-KD3HJTV7.js";
import "./chunk-CGIMAQGG.js";
import "./chunk-4FOPQVVL.js";
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
} from "./chunk-G7TA3DS4.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/legacy-html/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-YRYPSBJ4.js");
    this.example1 = {
      TypeScript: import("./chunk-46JAVGUC.js"),
      HTML: import("./chunk-CCNUBMJ7.js"),
      "./transformer.ts": import("./chunk-XKRD6QKQ.js"),
      "./legacy-editor.ts": import("./chunk-PMFLXKTS.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 2, vars: 2, consts: [["heading", "Processing legacy html", 3, "component", "content"]], template: function Example_Template(rf, ctx) {
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
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        heading="Processing legacy html"\n        [component]="component1"\n        [content]="example1"\n    />\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/legacy-html/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-LLF5U3XC.js.map
