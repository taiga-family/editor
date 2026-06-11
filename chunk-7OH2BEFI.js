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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-KFKFA6WT.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/slash/index.ts
function Example_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " The Slash example adds a toolbar via / that pops up at the slash position, well known from other editor applications. It's great to quickly insert different content types or apply inline formatting. ");
  }
}
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-GYOHL5TN.js");
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
//# sourceMappingURL=chunk-7OH2BEFI.js.map
