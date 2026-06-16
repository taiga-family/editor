import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-2A3N6FXA.js";
import "./chunk-ZAIJXHNT.js";
import "./chunk-BZVHQ5IJ.js";
import "./chunk-MDKCYD7T.js";
import "./chunk-GAIAKNWE.js";
import "./chunk-AXQ3T7JW.js";
import "./chunk-S4XH5VPI.js";
import "./chunk-DA6ZWNIU.js";
import "./chunk-5VU3JYWR.js";
import {
  TuiLink
} from "./chunk-EHNT4D2S.js";
import "./chunk-DDZQRXHH.js";
import "./chunk-3ZHEQMJ3.js";
import "./chunk-LZR2XIKZ.js";
import "./chunk-G7J7ZFQZ.js";
import "./chunk-CRKP42UQ.js";
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
} from "./chunk-F26JVLG2.js";
import "./chunk-KWSTWQNB.js";

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
    this.component1 = import("./chunk-IBIOTKIM.js");
    this.example1 = {
      TypeScript: import("./chunk-CNX2O3LW.js"),
      HTML: import("./chunk-TOL4RVVB.js")
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
//# sourceMappingURL=chunk-QJZC4MM5.js.map
