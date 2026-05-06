import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-5OYCAE6U.js";
import "./chunk-N2I4NDEC.js";
import "./chunk-43T2765T.js";
import "./chunk-RGU5X6JK.js";
import "./chunk-6VH6DR7W.js";
import "./chunk-GLG7L24I.js";
import "./chunk-TO6IF4KK.js";
import {
  TuiLink
} from "./chunk-2LK3XWNF.js";
import "./chunk-UK3D2IJN.js";
import "./chunk-CZCJZTAA.js";
import "./chunk-LTRKP6XS.js";
import "./chunk-UO32WQJY.js";
import "./chunk-XQBFNBOU.js";
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
} from "./chunk-QZKNXBAU.js";
import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/sanitize/index.ts
function Example_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " There is no reason to use one or the other because of security concerns. If someone wants to send malicious content to your server, it doesn\u2019t matter if it\u2019s JSON or HTML. It doesn\u2019t even matter if you\u2019re using Tiptap or not. You should always validate user input. Read more about ");
    \u0275\u0275elementStart(2, "a", 2);
    \u0275\u0275text(3, " @taiga-ui/dompurify. ");
    \u0275\u0275elementEnd()();
  }
}
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-NHM54KGX.js");
    this.example1 = {
      TypeScript: import("./chunk-VYCF446T.js"),
      HTML: import("./chunk-6H2JKZNX.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 4, vars: 3, consts: [["description", ""], ["heading", "Sanitize", 3, "component", "content", "description"], ["href", "https://github.com/taiga-family/ng-dompurify", "target", "_blank", "tuiLink", ""]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-doc-page")(1, "tui-doc-example", 1);
    \u0275\u0275template(2, Example_ng_template_2_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
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
    args: [{ imports: [TuiAddonDoc, TuiLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        heading="Sanitize"\n        [component]="component1"\n        [content]="example1"\n        [description]="description"\n    >\n        <ng-template #description>\n            <p>\n                There is no reason to use one or the other because of security concerns. If someone wants to send\n                malicious content to your server, it doesn\u2019t matter if it\u2019s JSON or HTML. It doesn\u2019t even matter if\n                you\u2019re using Tiptap or not. You should always validate user input. Read more about\n                <a\n                    href="https://github.com/taiga-family/ng-dompurify"\n                    target="_blank"\n                    tuiLink\n                >\n                    &#64;taiga-ui/dompurify.\n                </a>\n            </p>\n        </ng-template>\n    </tui-doc-example>\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/sanitize/index.ts", lineNumber: 10 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-5FQKYRZQ.js.map
