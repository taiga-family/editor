import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-OH73BKY7.js";
import "./chunk-Z4FTEFSF.js";
import "./chunk-CLVENATQ.js";
import "./chunk-7WWYKXMX.js";
import "./chunk-TNPUBTXS.js";
import "./chunk-QZEPRD3J.js";
import "./chunk-VXEJWRUO.js";
import {
  TuiLink
} from "./chunk-W65AVIGF.js";
import "./chunk-R3AGXJOZ.js";
import "./chunk-GZISCF73.js";
import "./chunk-YQZG6ATW.js";
import "./chunk-D23KIQ33.js";
import "./chunk-MRTTS2CM.js";
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
} from "./chunk-NS3244ZP.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/custom-tool/paste-emoji/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-E3BLI7B4.js");
    this.example1 = {
      HTML: import("./chunk-BEDDNKQN.js"),
      TypeScript: import("./chunk-VSNJT3UC.js"),
      LESS: import("./chunk-4ARCP4DR.js"),
      "smiles-tool/emoji.extension.ts": import("./chunk-JKUG42EV.js"),
      "smiles-tool/smiles-tool.component.ts": import("./chunk-EZPLLYHG.js"),
      "smiles-tool/smiles-tool.template.html": import("./chunk-ZN5UIBEY.js"),
      "smiles-tool/smiles-tool.styles.less": import("./chunk-YOT35YDF.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 22, vars: 3, consts: [["heading", "Custom emoji tool", 3, "component", "content"], [1, "tui-list", "tui-space_bottom-6"], [1, "tui-list__item"], ["href", "https://tiptap.dev/api/introduction", "rel", "noreferrer", "target", "_blank", "tuiLink", ""], [3, "innerText"]], template: function Example_Template(rf, ctx) {
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
//# sourceMappingURL=chunk-FNX7IM5H.js.map
