import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-JNIZ5DNU.js";
import "./chunk-BFZ7YZ3B.js";
import "./chunk-2P7H5VCK.js";
import "./chunk-Q6P4AWYY.js";
import "./chunk-UHHDJT7R.js";
import "./chunk-DDKLLXTS.js";
import "./chunk-WBFFCQ2B.js";
import "./chunk-BBPZELMZ.js";
import "./chunk-7Q3SE4QU.js";
import "./chunk-EQTN4WLW.js";
import {
  TuiLink
} from "./chunk-QA7BIT47.js";
import "./chunk-GJ4XEV4D.js";
import "./chunk-Z64UTBP3.js";
import "./chunk-LBJNUVBM.js";
import "./chunk-P325F6NW.js";
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
  ɵɵtext
} from "./chunk-MN3TG6GQ.js";
import "./chunk-CJ7OSSQR.js";
import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/custom-tool/paste-emoji/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-RI62T3CI.js");
    this.example1 = {
      HTML: import("./chunk-5B5NKLQI.js"),
      TypeScript: import("./chunk-GBE7HESZ.js"),
      LESS: import("./chunk-2NIOLQF4.js"),
      "smiles-tool/emoji.extension.ts": import("./chunk-RGKAN6RO.js"),
      "smiles-tool/smiles-tool.component.ts": import("./chunk-CDW236BP.js"),
      "smiles-tool/smiles-tool.template.html": import("./chunk-P245QKMO.js"),
      "smiles-tool/smiles-tool.styles.less": import("./chunk-UXZJGIGO.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 22, vars: 3, consts: [["id", "custom-tool", "heading", "Custom emoji tool", 3, "component", "content"], [1, "tui-list", "tui-space_bottom-6"], [1, "tui-list__item"], ["href", "https://tiptap.dev/api/introduction", "rel", "noreferrer", "target", "_blank", "tuiLink", ""], [3, "innerText"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-doc-page")(1, "tui-doc-example", 0);
    \u0275\u0275text(2, " You can create your own tool: ");
    \u0275\u0275elementStart(3, "ul", 1)(4, "li", 2);
    \u0275\u0275text(5, " Create component with tool button, which can get access to ");
    \u0275\u0275elementStart(6, "a", 3);
    \u0275\u0275text(7, " original TipTap editor API ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " via ");
    \u0275\u0275elementStart(9, "code");
    \u0275\u0275text(10, "TuiTiptapEditorService");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " from ");
    \u0275\u0275elementStart(12, "code");
    \u0275\u0275text(13, "@taiga-ui/editor");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " . ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li", 2);
    \u0275\u0275text(16, " Pass the component as content projection (with ");
    \u0275\u0275elementStart(17, "code");
    \u0275\u0275text(18, 'ngProjectAs="tools"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " ) to ");
    \u0275\u0275element(20, "code", 4);
    \u0275\u0275text(21, " . ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component1)("content", ctx.example1);
    \u0275\u0275advance(19);
    \u0275\u0275property("innerText", "<tui-editor />");
  }
}, dependencies: [TuiDocExample, TuiDocPage, TuiLink], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [TuiAddonDoc, TuiLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<tui-doc-page>
    <tui-doc-example
        id="custom-tool"
        heading="Custom emoji tool"
        [component]="component1"
        [content]="example1"
    >
        You can create your own tool:
        <ul class="tui-list tui-space_bottom-6">
            <li class="tui-list__item">
                Create component with tool button, which can get access to
                <a
                    href="https://tiptap.dev/api/introduction"
                    rel="noreferrer"
                    target="_blank"
                    tuiLink
                >
                    original TipTap editor API
                </a>
                via
                <code>TuiTiptapEditorService</code>
                from
                <code>&#64;taiga-ui/editor</code>
                .
            </li>
            <li class="tui-list__item">
                Pass the component as content projection (with
                <code>ngProjectAs="tools"</code>
                ) to
                <code [innerText]="'<tui-editor />'"></code>
                .
            </li>
        </ul>
    </tui-doc-example>
</tui-doc-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/custom-tool/paste-emoji/index.ts", lineNumber: 10 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-YCS55HDA.js.map
