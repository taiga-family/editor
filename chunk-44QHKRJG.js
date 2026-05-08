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

// projects/demo/src/app/pages/markdown/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-2YRVYSVK.js");
    this.example1 = {
      TypeScript: import("./chunk-C7GDSMBA.js"),
      HTML: import("./chunk-4HW4KTDH.js"),
      LESS: import("./chunk-TQCIFCFA.js"),
      "example.md": import("./chunk-KHLPVT2F.js"),
      "make-markdown.ts": import("./chunk-VLAMUTMK.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 2, vars: 2, consts: [["description", "You can use any parsing markdown library outside", "heading", "Markdown", 3, "component", "content"]], template: function Example_Template(rf, ctx) {
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
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        description="You can use any parsing markdown library outside"\n        heading="Markdown"\n        [component]="component1"\n        [content]="example1"\n    />\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/markdown/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-44QHKRJG.js.map
