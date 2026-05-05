import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-HNDDVGOU.js";
import "./chunk-DDXMN6JQ.js";
import "./chunk-DFI5ASPR.js";
import "./chunk-6CDTWSVZ.js";
import "./chunk-DE5QODYN.js";
import "./chunk-3RNKF3UO.js";
import "./chunk-O2R5TA2P.js";
import {
  TuiLink
} from "./chunk-C2RQT3I6.js";
import "./chunk-UBEFBV2K.js";
import "./chunk-6ZFGJIHW.js";
import "./chunk-6K6ZFURU.js";
import "./chunk-BZTTG73I.js";
import "./chunk-7NTP4ZJW.js";
import "./chunk-7CQO4UTC.js";
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
} from "./chunk-KCQY4XIQ.js";
import "./chunk-JJYTWBAH.js";
import "./chunk-4MWRP73S.js";

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
    this.component1 = import("./chunk-M3JNTE7F.js");
    this.example1 = {
      TypeScript: import("./chunk-UY7AIQT3.js"),
      HTML: import("./chunk-QOUOLKID.js")
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
//# sourceMappingURL=chunk-JSVJRJNW.js.map
