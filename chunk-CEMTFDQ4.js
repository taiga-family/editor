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

// projects/demo/src/app/pages/font/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-XTZI42U4.js");
    this.component2 = import("./chunk-3SRFMEKD.js");
    this.component3 = import("./chunk-HZYUKVEI.js");
    this.component4 = import("./chunk-3GOEZEFO.js");
    this.example1 = {
      TypeScript: import("./chunk-6UWYWMRR.js"),
      HTML: import("./chunk-EBEKPMKQ.js"),
      LESS: import("./chunk-PQSH3TMP.js")
    };
    this.example2 = {
      TypeScript: import("./chunk-BIF7HEB2.js"),
      HTML: import("./chunk-IM4PTXE5.js")
    };
    this.example3 = {
      TypeScript: import("./chunk-LF44YKUZ.js"),
      HTML: import("./chunk-56QWR6LP.js"),
      "font-size-tool/font-size-tool.component.ts": import("./chunk-6UP4M4TW.js"),
      "font-size-tool/font-size-tool.template.html": import("./chunk-24FYQS74.js")
    };
    this.example4 = {
      TypeScript: import("./chunk-W3647LN7.js"),
      HTML: import("./chunk-HVY5O7LJ.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 5, vars: 8, consts: [["id", "font", "description", "The Heading extension adds support for headings of different levels. Headings are rendered with h1, h2, h3, h4, h5 or h6 HTML tags. By default all six heading levels (or styles) are enabled, but you can pass an array to only allow a few levels. Check the usage example to see how this is done. Type #  at the beginning of a new line and it will magically transform to a heading, same for ## , ### , #### , #####  and ######.", "heading", "Heading", 3, "component", "content"], ["id", "custom-px-size", "description", "You can use any size for paragraph like in your Google Docs", "heading", "Font size", 3, "component", "content"], ["id", "custom-size-tool", "heading", "Custom font size tool", 3, "component", "content"], ["id", "disable-hotkeys", "heading", "Disable default font hotkeys", 3, "component", "content"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-doc-page");
    \u0275\u0275element(1, "tui-doc-example", 0)(2, "tui-doc-example", 1)(3, "tui-doc-example", 2)(4, "tui-doc-example", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component1)("content", ctx.example1);
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component2)("content", ctx.example2);
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component3)("content", ctx.example3);
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component4)("content", ctx.example4);
  }
}, dependencies: [TuiDocExample, TuiDocPage], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        id="font"\n        description="The Heading extension adds support for headings of different levels. Headings are rendered with h1, h2, h3, h4, h5 or h6 HTML tags. By default all six heading levels (or styles) are enabled, but you can pass an array to only allow a few levels. Check the usage example to see how this is done. Type #  at the beginning of a new line and it will magically transform to a heading, same for ## , ### , #### , #####  and ######."\n        heading="Heading"\n        [component]="component1"\n        [content]="example1"\n    />\n\n    <tui-doc-example\n        id="custom-px-size"\n        description="You can use any size for paragraph like in your Google Docs"\n        heading="Font size"\n        [component]="component2"\n        [content]="example2"\n    />\n\n    <tui-doc-example\n        id="custom-size-tool"\n        heading="Custom font size tool"\n        [component]="component3"\n        [content]="example3"\n    />\n\n    <tui-doc-example\n        id="disable-hotkeys"\n        heading="Disable default font hotkeys"\n        [component]="component4"\n        [content]="example4"\n    />\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/font/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-CEMTFDQ4.js.map
