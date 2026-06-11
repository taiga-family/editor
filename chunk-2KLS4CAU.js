import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-CL4TYUPN.js";
import "./chunk-MJLH2TV4.js";
import "./chunk-S3E6HZOD.js";
import "./chunk-63U3CPUR.js";
import "./chunk-GUVKYR5W.js";
import "./chunk-6NBXHJBY.js";
import "./chunk-QBSXUJOT.js";
import "./chunk-NQEYKI5T.js";
import "./chunk-TPR7EYDZ.js";
import "./chunk-WEV3GG6Y.js";
import "./chunk-LPBSAZLJ.js";
import "./chunk-HHFYZN44.js";
import "./chunk-DMAZJOQQ.js";
import "./chunk-EMEGSUC4.js";
import "./chunk-5BSJ6YPL.js";
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
} from "./chunk-KFKFA6WT.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/groups/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-FCYPVOLP.js");
    this.component2 = import("./chunk-ZPKV2OS7.js");
    this.component3 = import("./chunk-IAGR5DSD.js");
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
//# sourceMappingURL=chunk-2KLS4CAU.js.map
