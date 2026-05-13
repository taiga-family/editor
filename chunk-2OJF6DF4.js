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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-WNG4JUA7.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/slash/index.ts
function Example_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " The Slash example adds a toolbar via / that pops up at the slash position, well known from other editor applications. It's great to quickly insert different content types or apply inline formatting. ");
  }
}
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-JGXB2WST.js");
    this.example1 = {
      TypeScript: import("./chunk-EL6WK7NJ.js"),
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
//# sourceMappingURL=chunk-2OJF6DF4.js.map
