import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-2SD77XV6.js";
import "./chunk-I3RI4OQZ.js";
import "./chunk-WEXA2PXX.js";
import "./chunk-MCMFJNSF.js";
import "./chunk-PC2OPMXP.js";
import "./chunk-TU7B24ZA.js";
import "./chunk-5JTIYZOP.js";
import "./chunk-G6EUNS5T.js";
import "./chunk-MCDKU7FT.js";
import "./chunk-VPNECSOA.js";
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

// projects/demo/src/app/pages/toolbar/floating/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-2I7XVB26.js");
    this.example1 = {
      TypeScript: import("./chunk-JFVQ6VZN.js"),
      HTML: import("./chunk-KDCU42RC.js")
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
//# sourceMappingURL=chunk-XANUN5P4.js.map
