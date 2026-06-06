import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-7ZEWM3WO.js";
import "./chunk-YGOCUPM6.js";
import "./chunk-JRMRMBLQ.js";
import "./chunk-M7SBT5T7.js";
import "./chunk-QBSXUJOT.js";
import "./chunk-CEHQ5QIS.js";
import "./chunk-JDPEJWFS.js";
import "./chunk-NLNCZRCI.js";
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

// projects/demo/src/app/pages/highlight/text/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-4YGBOKE6.js");
    this.example1 = {
      TypeScript: import("./chunk-477MZDQB.js"),
      HTML: import("./chunk-7Q4IPLSL.js"),
      LESS: import("./chunk-G2C25U7D.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 2, vars: 2, consts: [["description", "Use this extension to render highlighted text with <mark>. You can use only default <mark> HTML tag, which has a yellow background color by default, or apply different colors.", "heading", "Highlight", 3, "component", "content"]], template: function Example_Template(rf, ctx) {
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
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        description="Use this extension to render highlighted text with <mark>. You can use only default <mark> HTML tag, which has a yellow background color by default, or apply different colors."\n        heading="Highlight"\n        [component]="component1"\n        [content]="example1"\n    />\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/highlight/text/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-3FZKTWV3.js.map
