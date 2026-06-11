import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-ENNXUFHI.js";
import "./chunk-RSKDBJZQ.js";
import "./chunk-QREVGMCT.js";
import "./chunk-LWXG2KY6.js";
import "./chunk-H3J5YKOM.js";
import "./chunk-XFLAHQA2.js";
import "./chunk-4W47VJX7.js";
import "./chunk-SRPFHD76.js";
import "./chunk-L4I5LKBQ.js";
import "./chunk-DFGPXHHY.js";
import "./chunk-HCLCQICK.js";
import "./chunk-Y5NXHTWC.js";
import "./chunk-F67AGDSR.js";
import "./chunk-5464WHRF.js";
import "./chunk-YZQ2AVZQ.js";
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
} from "./chunk-6FE6LACA.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/groups/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-Z4PCPDDE.js");
    this.component2 = import("./chunk-XNNF7MC4.js");
    this.component3 = import("./chunk-YPMXF42C.js");
    this.example1 = {
      TypeScript: import("./chunk-AZWDBTWC.js"),
      HTML: import("./chunk-6LBDEG2N.js")
    };
    this.example2 = {
      TypeScript: import("./chunk-QZJH6XR7.js"),
      HTML: import("./chunk-XEYD4YSW.js"),
      LESS: import("./chunk-WAE34WEO.js")
    };
    this.example3 = {
      TypeScript: import("./chunk-M67HLQNQ.js"),
      HTML: import("./chunk-Z4DZUM2C.js"),
      LESS: import("./chunk-5SHZOVWT.js")
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
//# sourceMappingURL=chunk-GUIRC2S5.js.map
