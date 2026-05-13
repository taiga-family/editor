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
import {
  TuiLink
} from "./chunk-SXFCOZII.js";
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-WNG4JUA7.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/custom-tool/paste-image/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-ESNKIXVT.js");
    this.example1 = {
      HTML: import("./chunk-AVABDEV4.js"),
      TypeScript: import("./chunk-MGRBE3WU.js"),
      LESS: import("./chunk-UKVQJ6K6.js"),
      "image-tool/paste.extension.ts": import("./chunk-CXSXD5ZB.js"),
      "image-tool/image-tool.component.ts": import("./chunk-URERWEQS.js"),
      "image-tool/image-tool.template.html": import("./chunk-RLPYHXS5.js"),
      "image-tool/image-tool.styles.less": import("./chunk-AVHBXRCD.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 22, vars: 3, consts: [["heading", "Add an image using a URL", 3, "component", "content"], [1, "tui-list", "tui-space_bottom-6"], [1, "tui-list__item"], ["href", "https://tiptap.dev/api/introduction", "rel", "noreferrer", "target", "_blank", "tuiLink", ""], [3, "innerText"]], template: function Example_Template(rf, ctx) {
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
        heading="Add an image using a URL"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/custom-tool/paste-image/index.ts", lineNumber: 10 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-7KQPUXN3.js.map
