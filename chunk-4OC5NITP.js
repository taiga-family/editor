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

// projects/demo/src/app/pages/font/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-2ZR6ZOWN.js");
    this.component2 = import("./chunk-4KFCYHZC.js");
    this.component3 = import("./chunk-DV2ZBJRZ.js");
    this.component4 = import("./chunk-N3VR66YY.js");
    this.example1 = {
      TypeScript: import("./chunk-3DARPAOR.js"),
      HTML: import("./chunk-U7PADLLV.js"),
      LESS: import("./chunk-Z7YXBERQ.js")
    };
    this.example2 = {
      TypeScript: import("./chunk-CKCL2J54.js"),
      HTML: import("./chunk-JWADQRA2.js")
    };
    this.example3 = {
      TypeScript: import("./chunk-QQ6VO43T.js"),
      HTML: import("./chunk-3IUGDBJM.js"),
      "font-size-tool/font-size-tool.component.ts": import("./chunk-E55QHD5Z.js"),
      "font-size-tool/font-size-tool.template.html": import("./chunk-UTYA45AO.js")
    };
    this.example4 = {
      TypeScript: import("./chunk-5EQUVTM3.js"),
      HTML: import("./chunk-5X2NRWNV.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 5, vars: 8, consts: [["description", "The Heading extension adds support for headings of different levels. Headings are rendered with h1, h2, h3, h4, h5 or h6 HTML tags. By default all six heading levels (or styles) are enabled, but you can pass an array to only allow a few levels. Check the usage example to see how this is done. Type #  at the beginning of a new line and it will magically transform to a heading, same for ## , ### , #### , #####  and ######.", "heading", "Heading", 3, "component", "content"], ["description", "You can use any size for paragraph like in your Google Docs", "heading", "Font size", 3, "component", "content"], ["heading", "Custom font size tool", 3, "component", "content"], ["heading", "Disable default font hotkeys", 3, "component", "content"]], template: function Example_Template(rf, ctx) {
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
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        description="The Heading extension adds support for headings of different levels. Headings are rendered with h1, h2, h3, h4, h5 or h6 HTML tags. By default all six heading levels (or styles) are enabled, but you can pass an array to only allow a few levels. Check the usage example to see how this is done. Type #  at the beginning of a new line and it will magically transform to a heading, same for ## , ### , #### , #####  and ######."\n        heading="Heading"\n        [component]="component1"\n        [content]="example1"\n    />\n\n    <tui-doc-example\n        description="You can use any size for paragraph like in your Google Docs"\n        heading="Font size"\n        [component]="component2"\n        [content]="example2"\n    />\n\n    <tui-doc-example\n        heading="Custom font size tool"\n        [component]="component3"\n        [content]="example3"\n    />\n\n    <tui-doc-example\n        heading="Disable default font hotkeys"\n        [component]="component4"\n        [content]="example4"\n    />\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/font/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-4OC5NITP.js.map
