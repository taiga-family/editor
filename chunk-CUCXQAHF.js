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

// projects/demo/src/app/pages/embed/iframe/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-MEEZFLEF.js");
    this.example1 = {
      HTML: import("./chunk-FV6RV62I.js"),
      TypeScript: import("./chunk-PNSP234V.js"),
      LESS: import("./chunk-TBLXWCYH.js"),
      "embed-tool/embed-tool.component.ts": import("./chunk-44LCSS6N.js"),
      "embed-tool/embed-tool.template.html": import("./chunk-BIE3F4C3.js"),
      "embed-tool/embed-tool.styles.less": import("./chunk-UA6HMEBZ.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 2, vars: 2, consts: [["heading", "Resizable iframe", 3, "component", "content"]], template: function Example_Template(rf, ctx) {
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
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        heading="Resizable iframe"\n        [component]="component1"\n        [content]="example1"\n    />\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/embed/iframe/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-CUCXQAHF.js.map
