import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-OJI7NEMY.js";
import "./chunk-ZWVVDWT5.js";
import "./chunk-AXANVBV5.js";
import "./chunk-MXICQEMR.js";
import "./chunk-2QWJYW7T.js";
import "./chunk-WLU4T4R7.js";
import "./chunk-4W47VJX7.js";
import "./chunk-QLYIM47N.js";
import "./chunk-BWCWLN77.js";
import "./chunk-B3ZIK3YY.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-6FE6LACA.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/slash/index.ts
function Example_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " The Slash example adds a toolbar via / that pops up at the slash position, well known from other editor applications. It's great to quickly insert different content types or apply inline formatting. ");
  }
}
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-XAYQVVPJ.js");
    this.example1 = {
      TypeScript: import("./chunk-BDMSZ5YB.js"),
      HTML: import("./chunk-PEZRVUNQ.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 4, vars: 3, consts: [["description", ""], ["heading", "Slash commands", 3, "component", "content", "description"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-doc-page")(1, "tui-doc-example", 1);
    \u0275\u0275template(2, Example_ng_template_2_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const description_r1 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component1)("content", ctx.example1)("description", description_r1);
  }
}, dependencies: [TuiDocExample, TuiDocPage], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: `<tui-doc-page>
    <tui-doc-example
        heading="Slash commands"
        [component]="component1"
        [content]="example1"
        [description]="description"
    >
        <ng-template #description>
            The Slash example adds a toolbar via / that pops up at the slash position, well known from other editor
            applications. It's great to quickly insert different content types or apply inline formatting.
        </ng-template>
    </tui-doc-example>
</tui-doc-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/slash/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-H5IIO7VG.js.map
