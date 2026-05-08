import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-RBECBQPG.js";
import "./chunk-XM3R7WR7.js";
import "./chunk-U2A4WWTO.js";
import "./chunk-GRGGAYF6.js";
import "./chunk-RC75ZLQU.js";
import "./chunk-XRNRJXWK.js";
import "./chunk-FKOUSXA3.js";
import {
  TuiLink
} from "./chunk-6XV2X7BK.js";
import "./chunk-R3NXKXZ4.js";
import "./chunk-67AS2LST.js";
import "./chunk-ZBWOCD7G.js";
import "./chunk-5KWHOROR.js";
import "./chunk-7VRO2DFS.js";
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

// projects/demo/src/app/pages/table-of-contents/index.ts
function Example_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " The ");
    \u0275\u0275elementStart(2, "a", 2);
    \u0275\u0275text(3, " TableOfContents ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " extension lets you get a list of anchors from your document and passes on important information about each anchor (for example the depth, the content and a unique ID for each heading but also the active state and scroll states for each anchor). This can be used to render the table of content on your own. ");
    \u0275\u0275elementEnd();
  }
}
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-PEMMJFHD.js");
    this.example1 = {
      TypeScript: import("./chunk-FWBEZ3BJ.js"),
      LESS: import("./chunk-LCDCY44O.js"),
      "./my-toc.html": import("./chunk-2C5RD2J2.js"),
      "./my-toc.ts": import("./chunk-CDZALD2W.js"),
      "./my-toc.less": import("./chunk-ENY26VVQ.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 4, vars: 3, consts: [["description", ""], ["heading", "Table of contents", 3, "component", "content", "description"], ["href", "https://tiptap.dev/docs/editor/extensions/functionality/table-of-contents", "target", "_blank", "tuiLink", ""]], template: function Example_Template(rf, ctx) {
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
    args: [{ imports: [TuiAddonDoc, TuiLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        heading="Table of contents"\n        [component]="component1"\n        [content]="example1"\n        [description]="description"\n    >\n        <ng-template #description>\n            <p>\n                The\n                <a\n                    href="https://tiptap.dev/docs/editor/extensions/functionality/table-of-contents"\n                    target="_blank"\n                    tuiLink\n                >\n                    TableOfContents\n                </a>\n                extension lets you get a list of anchors from your document and passes on important information about\n                each anchor (for example the depth, the content and a unique ID for each heading but also the active\n                state and scroll states for each anchor). This can be used to render the table of content on your own.\n            </p>\n        </ng-template>\n    </tui-doc-example>\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/table-of-contents/index.ts", lineNumber: 10 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-UN56NJ3E.js.map
