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
import "./chunk-6XV2X7BK.js";
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty
} from "./chunk-WNG4JUA7.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/anchors/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-4H6LTMCL.js");
    this.example1 = {
      TypeScript: import("./chunk-LLOQJITK.js"),
      HTML: import("./chunk-43TYHQJO.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["editor-anchors"]], decls: 2, vars: 2, consts: [["description", "The anchor element defines a hyperlink, which is used to link to part of section", "heading", "Anchors", 3, "component", "content"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-doc-page");
    \u0275\u0275element(1, "tui-doc-example", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component1)("content", ctx.example1);
  }
}, dependencies: [TuiDocExample, TuiDocPage], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ selector: "editor-anchors", imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        description="The anchor element defines a hyperlink, which is used to link to part of section"\n        heading="Anchors"\n        [component]="component1"\n        [content]="example1"\n    />\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/anchors/index.ts", lineNumber: 10 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-GO2JSJM6.js.map
