import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-IW6565BY.js";
import "./chunk-SRYFG2FP.js";
import "./chunk-Z5K5FL5P.js";
import "./chunk-P6H5HKAP.js";
import "./chunk-6VH6DR7W.js";
import "./chunk-YRC7Q7Y5.js";
import "./chunk-5VK4ME2H.js";
import "./chunk-MHHBIYHG.js";
import "./chunk-KOX7A3IC.js";
import "./chunk-CZCJZTAA.js";
import "./chunk-LTRKP6XS.js";
import "./chunk-GNZZPKI6.js";
import "./chunk-HXOYHNZA.js";
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

// projects/demo/src/app/pages/groups/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-KXOGCODZ.js");
    this.component2 = import("./chunk-KQYQVY6B.js");
    this.component3 = import("./chunk-BFJ3J6Z2.js");
    this.example1 = {
      TypeScript: import("./chunk-3HB537FG.js"),
      HTML: import("./chunk-6KAJ6ACN.js")
    };
    this.example2 = {
      TypeScript: import("./chunk-L6G4KI7O.js"),
      HTML: import("./chunk-4KDND7K4.js"),
      LESS: import("./chunk-FJUXMFSD.js")
    };
    this.example3 = {
      TypeScript: import("./chunk-5OUDCH2T.js"),
      HTML: import("./chunk-5EFTTAXF.js"),
      LESS: import("./chunk-FMYOCWHV.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 4, vars: 6, consts: [["heading", "Draggable groups the looks like in Notion", 3, "component", "content"], ["heading", "Hilite groups", 3, "component", "content"], ["heading", "Simple create nested groups", 3, "component", "content"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-doc-page");
    \u0275\u0275element(1, "tui-doc-example", 0)(2, "tui-doc-example", 1)(3, "tui-doc-example", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component1)("content", ctx.example1);
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component2)("content", ctx.example2);
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component3)("content", ctx.example3);
  }
}, dependencies: [TuiDocExample, TuiDocPage], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        heading="Draggable groups the looks like in Notion"\n        [component]="component1"\n        [content]="example1"\n    />\n\n    <tui-doc-example\n        heading="Hilite groups"\n        [component]="component2"\n        [content]="example2"\n    />\n\n    <tui-doc-example\n        heading="Simple create nested groups"\n        [component]="component3"\n        [content]="example3"\n    />\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/groups/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-GWMFYXON.js.map
