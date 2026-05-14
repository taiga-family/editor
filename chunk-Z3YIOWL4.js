import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-OH73BKY7.js";
import "./chunk-Z4FTEFSF.js";
import "./chunk-CLVENATQ.js";
import "./chunk-7WWYKXMX.js";
import "./chunk-TNPUBTXS.js";
import "./chunk-QZEPRD3J.js";
import "./chunk-VXEJWRUO.js";
import "./chunk-W65AVIGF.js";
import "./chunk-R3AGXJOZ.js";
import "./chunk-GZISCF73.js";
import "./chunk-YQZG6ATW.js";
import "./chunk-D23KIQ33.js";
import "./chunk-MRTTS2CM.js";
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

// projects/demo/src/app/pages/focus/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-PKYG5OYK.js");
    this.example1 = {
      TypeScript: import("./chunk-X3MTHPEC.js"),
      HTML: import("./chunk-H7X2ZOQT.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 2, vars: 2, consts: [["description", "The Focus extension adds a CSS class to focused nodes. By default it adds .has-focus, but you can change that. Note that it\u2019s only a class, the styling is totally up to you. The usage example below has some CSS for that class.", "heading", "Focus", 3, "component", "content"]], template: function Example_Template(rf, ctx) {
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
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        description="The Focus extension adds a CSS class to focused nodes. By default it adds .has-focus, but you can change that. Note that it\u2019s only a class, the styling is totally up to you. The usage example below has some CSS for that class."\n        heading="Focus"\n        [component]="component1"\n        [content]="example1"\n    />\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/focus/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-Z3YIOWL4.js.map
