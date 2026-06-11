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
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-6FE6LACA.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/font/index.ts
function Example_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Provide ");
    \u0275\u0275elementStart(1, "code");
    \u0275\u0275text(2, "fontOptionContent");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " property via ");
    \u0275\u0275elementStart(4, "code");
    \u0275\u0275text(5, "provideTuiEditorOptions");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " to fully customize how each option is rendered inside the font dropdown ");
  }
}
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-UZL4CXVQ.js");
    this.component2 = import("./chunk-MICJ4PEB.js");
    this.component3 = import("./chunk-XLZTE64A.js");
    this.component4 = import("./chunk-WNOEUVYG.js");
    this.component5 = import("./chunk-CBCYCQIA.js");
    this.example1 = {
      TypeScript: import("./chunk-PYGYMDVF.js"),
      HTML: import("./chunk-U7PADLLV.js"),
      LESS: import("./chunk-L2NVWT2N.js")
    };
    this.example2 = {
      TypeScript: import("./chunk-XMERYFVN.js"),
      HTML: import("./chunk-JWADQRA2.js")
    };
    this.example3 = {
      TypeScript: import("./chunk-QQ6VO43T.js"),
      HTML: import("./chunk-3IUGDBJM.js"),
      "font-size-tool/font-size-tool.component.ts": import("./chunk-MBDN4THU.js"),
      "font-size-tool/font-size-tool.template.html": import("./chunk-UTYA45AO.js")
    };
    this.example4 = {
      TypeScript: import("./chunk-5EQUVTM3.js"),
      HTML: import("./chunk-5X2NRWNV.js")
    };
    this.example5 = {
      TypeScript: import("./chunk-AW2ZKJAT.js"),
      "font-option/index.ts": import("./chunk-644G7JXR.js"),
      "font-option/index.html": import("./chunk-NUSH3XFY.js"),
      "font-option/index.less": import("./chunk-2QHREMPJ.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 8, vars: 11, consts: [["description", ""], ["description", "The Heading extension adds support for headings of different levels. Headings are rendered with h1, h2, h3, h4, h5 or h6 HTML tags. By default all six heading levels (or styles) are enabled, but you can pass an array to only allow a few levels. Check the usage example to see how this is done. Type #  at the beginning of a new line and it will magically transform to a heading, same for ## , ### , #### , #####  and ######.", "heading", "Heading", 3, "component", "content"], ["description", "You can use any size for paragraph like in your Google Docs", "heading", "Font size", 3, "component", "content"], ["heading", "Custom font size tool", 3, "component", "content"], ["heading", "Disable default font hotkeys", 3, "component", "content"], ["heading", "Override font option template", 3, "component", "content", "description"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-doc-page");
    \u0275\u0275element(1, "tui-doc-example", 1)(2, "tui-doc-example", 2)(3, "tui-doc-example", 3)(4, "tui-doc-example", 4);
    \u0275\u0275elementStart(5, "tui-doc-example", 5);
    \u0275\u0275template(6, Example_ng_template_6_Template, 7, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const description_r1 = \u0275\u0275reference(7);
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component1)("content", ctx.example1);
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component2)("content", ctx.example2);
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component3)("content", ctx.example3);
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component4)("content", ctx.example4);
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component5)("content", ctx.example5)("description", description_r1);
  }
}, dependencies: [TuiDocExample, TuiDocPage], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        description="The Heading extension adds support for headings of different levels. Headings are rendered with h1, h2, h3, h4, h5 or h6 HTML tags. By default all six heading levels (or styles) are enabled, but you can pass an array to only allow a few levels. Check the usage example to see how this is done. Type #  at the beginning of a new line and it will magically transform to a heading, same for ## , ### , #### , #####  and ######."\n        heading="Heading"\n        [component]="component1"\n        [content]="example1"\n    />\n\n    <tui-doc-example\n        description="You can use any size for paragraph like in your Google Docs"\n        heading="Font size"\n        [component]="component2"\n        [content]="example2"\n    />\n\n    <tui-doc-example\n        heading="Custom font size tool"\n        [component]="component3"\n        [content]="example3"\n    />\n\n    <tui-doc-example\n        heading="Disable default font hotkeys"\n        [component]="component4"\n        [content]="example4"\n    />\n\n    <tui-doc-example\n        heading="Override font option template"\n        [component]="component5"\n        [content]="example5"\n        [description]="description"\n    >\n        <ng-template #description>\n            Provide\n            <code>fontOptionContent</code>\n            property via\n            <code>provideTuiEditorOptions</code>\n            to fully customize how each option is rendered inside the font dropdown\n        </ng-template>\n    </tui-doc-example>\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/font/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-IYNM7OUJ.js.map
