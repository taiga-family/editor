import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-JNIZ5DNU.js";
import "./chunk-BFZ7YZ3B.js";
import "./chunk-2P7H5VCK.js";
import "./chunk-Q6P4AWYY.js";
import "./chunk-UHHDJT7R.js";
import "./chunk-DDKLLXTS.js";
import "./chunk-WBFFCQ2B.js";
import "./chunk-BBPZELMZ.js";
import "./chunk-7Q3SE4QU.js";
import "./chunk-EQTN4WLW.js";
import "./chunk-QA7BIT47.js";
import "./chunk-GJ4XEV4D.js";
import "./chunk-Z64UTBP3.js";
import "./chunk-LBJNUVBM.js";
import "./chunk-P325F6NW.js";
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
} from "./chunk-MN3TG6GQ.js";
import "./chunk-CJ7OSSQR.js";
import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/anchors/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-3YHAWTHV.js");
    this.example1 = {
      TypeScript: import("./chunk-WMO5H5HB.js"),
      HTML: import("./chunk-MAH2ZG3U.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["editor-anchors"]], decls: 2, vars: 2, consts: [["id", "anchors", "description", "The anchor element defines a hyperlink, which is used to link to part of section", "heading", "Anchors", 3, "component", "content"]], template: function Example_Template(rf, ctx) {
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
    args: [{ selector: "editor-anchors", imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        id="anchors"\n        description="The anchor element defines a hyperlink, which is used to link to part of section"\n        heading="Anchors"\n        [component]="component1"\n        [content]="example1"\n    />\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/anchors/index.ts", lineNumber: 10 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-VCNSY7SP.js.map
