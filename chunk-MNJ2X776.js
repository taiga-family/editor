import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-UDLUX2T6.js";
import "./chunk-VOETHGIC.js";
import "./chunk-5CV5RYZ5.js";
import "./chunk-J2FOB3T2.js";
import "./chunk-RC75ZLQU.js";
import "./chunk-Q62QLO23.js";
import "./chunk-GFHR6XY2.js";
import "./chunk-SXFCOZII.js";
import "./chunk-UCUDBNZD.js";
import "./chunk-67AS2LST.js";
import "./chunk-ZBWOCD7G.js";
import "./chunk-KTHA2NW7.js";
import "./chunk-XQPBGS7K.js";
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
} from "./chunk-WNG4JUA7.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/toolbar/custom/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-CGKC3PFE.js");
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
//# sourceMappingURL=chunk-MNJ2X776.js.map
