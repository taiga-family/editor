import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-HIROPWVQ.js";
import "./chunk-URCI2WZE.js";
import "./chunk-OASLAXI3.js";
import "./chunk-EF4ATJ2Z.js";
import "./chunk-OKHG23JX.js";
import "./chunk-D5HJUDO5.js";
import "./chunk-5JTIYZOP.js";
import "./chunk-CFSNFPMI.js";
import "./chunk-X7GRIVH7.js";
import {
  TuiLink
} from "./chunk-BILNAO2Z.js";
import "./chunk-M562FPU2.js";
import "./chunk-43GMD6GA.js";
import "./chunk-KD3HJTV7.js";
import "./chunk-CGIMAQGG.js";
import "./chunk-4FOPQVVL.js";
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
} from "./chunk-G7TA3DS4.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/character-counter/index.ts
function Example_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " The ");
    \u0275\u0275elementStart(2, "a", 2);
    \u0275\u0275text(3, " CharacterCount ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " extension limits the number of allowed characters to a specific length and is able to return the number of characters and words. That\u2019s it, that\u2019s all. ");
    \u0275\u0275elementEnd();
  }
}
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-DKM3XHVK.js");
    this.example1 = {
      TypeScript: import("./chunk-EPZEUVX7.js"),
      HTML: import("./chunk-PYHQHSPK.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 4, vars: 3, consts: [["description", ""], ["heading", "Character counter", 3, "component", "content", "description"], ["href", "https://tiptap.dev/docs/editor/extensions/functionality/character-count", "target", "_blank", "tuiLink", ""]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-doc-page")(1, "tui-doc-example", 1);
    \u0275\u0275template(2, Example_ng_template_2_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const description_r1 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component1)("content", ctx.example1)("description", description_r1);
  }
}, dependencies: [TuiDocExample, TuiDocPage, TuiLink], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [TuiAddonDoc, TuiLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        heading="Character counter"\n        [component]="component1"\n        [content]="example1"\n        [description]="description"\n    >\n        <ng-template #description>\n            <p>\n                The\n                <a\n                    href="https://tiptap.dev/docs/editor/extensions/functionality/character-count"\n                    target="_blank"\n                    tuiLink\n                >\n                    CharacterCount\n                </a>\n                extension limits the number of allowed characters to a specific length and is able to return the number\n                of characters and words. That\u2019s it, that\u2019s all.\n            </p>\n        </ng-template>\n    </tui-doc-example>\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/character-counter/index.ts", lineNumber: 10 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-XU6ANV63.js.map
