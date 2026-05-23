import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-5BCUYUXB.js";
import "./chunk-STT5GWZO.js";
import "./chunk-CZ44SNJO.js";
import "./chunk-FGUPXREW.js";
import "./chunk-TNPUBTXS.js";
import "./chunk-APMVHMIW.js";
import "./chunk-3CRZRPMF.js";
import "./chunk-CV6PGG7O.js";
import "./chunk-UOQYRYT2.js";
import "./chunk-GZISCF73.js";
import "./chunk-YQZG6ATW.js";
import "./chunk-2UOD7KNB.js";
import "./chunk-6HH4HFWJ.js";
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
} from "./chunk-NS3244ZP.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/details/index.ts
function Example_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "code");
    \u0275\u0275text(2, "TuiDetails");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " has a flag ");
    \u0275\u0275elementStart(4, "code");
    \u0275\u0275text(5, "inheritOpen");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " which means that the details element will inherit the open state when opened or closed inside ");
    \u0275\u0275elementStart(7, "code");
    \u0275\u0275text(8, "tui-editor");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " when rendered in a ");
    \u0275\u0275elementStart(10, "code");
    \u0275\u0275text(11, "tui-editor-socket");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " . ");
    \u0275\u0275elementEnd();
  }
}
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-LDSVJ34B.js");
    this.example1 = {
      TypeScript: import("./chunk-DVNT2DCR.js"),
      HTML: import("./chunk-OV7QUENZ.js")
    };
    this.component2 = import("./chunk-SJTTGPBL.js");
    this.example2 = {
      TypeScript: import("./chunk-UW5YOAXS.js"),
      HTML: import("./chunk-E22XBUOM.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 5, vars: 5, consts: [["description", ""], ["heading", "Details", 3, "component", "content"], ["heading", "Configuration", 3, "component", "content", "description"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-doc-page");
    \u0275\u0275element(1, "tui-doc-example", 1);
    \u0275\u0275elementStart(2, "tui-doc-example", 2);
    \u0275\u0275template(3, Example_ng_template_3_Template, 13, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const description_r1 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component1)("content", ctx.example1);
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component2)("content", ctx.example2)("description", description_r1);
  }
}, dependencies: [TuiDocExample, TuiDocPage], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        heading="Details"\n        [component]="component1"\n        [content]="example1"\n    />\n\n    <tui-doc-example\n        heading="Configuration"\n        [component]="component2"\n        [content]="example2"\n        [description]="description"\n    >\n        <ng-template #description>\n            <p>\n                <code>TuiDetails</code>\n                has a flag\n                <code>inheritOpen</code>\n                which means that the details element will inherit the open state when opened or closed inside\n                <code>tui-editor</code>\n                when rendered in a\n                <code>tui-editor-socket</code>\n                .\n            </p>\n        </ng-template>\n    </tui-doc-example>\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/details/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-SMUWMAO7.js.map
