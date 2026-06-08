import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-TWYWZRVA.js";
import "./chunk-7VY7RR6F.js";
import "./chunk-RFPAUGZU.js";
import "./chunk-EX75VRI7.js";
import "./chunk-F32N5NTP.js";
import "./chunk-B7MKQDCA.js";
import "./chunk-QBSXUJOT.js";
import "./chunk-FPB4G23O.js";
import "./chunk-CDSTSEQI.js";
import "./chunk-462RAKEG.js";
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

// projects/demo/src/app/pages/anchors/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-NUNR3YQV.js");
    this.example1 = {
      TypeScript: import("./chunk-LLOQJITK.js"),
      HTML: import("./chunk-43TYHQJO.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["editor-anchors"]], decls: 2, vars: 2, consts: [["description", "The anchor element defines a hyperlink, which is used to link to part of section", "heading", "Anchors", 3, "component", "content"]], template: function Example_Template(rf, ctx) {
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
    args: [{ selector: "editor-anchors", imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        description="The anchor element defines a hyperlink, which is used to link to part of section"\n        heading="Anchors"\n        [component]="component1"\n        [content]="example1"\n    />\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/anchors/index.ts", lineNumber: 10 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-4TKTMV6E.js.map
