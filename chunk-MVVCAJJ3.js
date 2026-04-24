import {
  TuiAddonDoc,
  TuiDocExample,
  TuiDocPage
} from "./chunk-GP5GXI3G.js";
import "./chunk-VQYWSL72.js";
import "./chunk-4QQZBGYJ.js";
import "./chunk-PRS6ECY2.js";
import "./chunk-WWNKJV6L.js";
import "./chunk-2P6XZLUI.js";
import "./chunk-WG3DIIIA.js";
import "./chunk-JHR5K2RS.js";
import "./chunk-L5QVMFBS.js";
import "./chunk-M277MCZ7.js";
import "./chunk-3VK442GK.js";
import "./chunk-XI2RCXXD.js";
import "./chunk-6A2ZSXM6.js";
import "./chunk-LBJNUVBM.js";
import "./chunk-2QWGY2YZ.js";
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
} from "./chunk-SLVEPEAC.js";
import "./chunk-CJ7OSSQR.js";
import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/embed/youtube/index.ts
var _Example = class _Example {
  constructor() {
    this.component1 = import("./chunk-JFYUI6MJ.js");
    this.example1 = {
      HTML: import("./chunk-O3FA4TWN.js"),
      TypeScript: import("./chunk-J5WRBKUQ.js"),
      LESS: import("./chunk-NC7ME2FV.js"),
      "youtube-tool/youtube-tool.component.ts": import("./chunk-HKLHBWO2.js"),
      "youtube-tool/youtube-tool.template.html": import("./chunk-UX5VUXKA.js"),
      "youtube-tool/youtube-tool.styles.less": import("./chunk-OO4X5MPG.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 2, vars: 2, consts: [["id", "youtube", "heading", "Youtube extension", 3, "component", "content"]], template: function Example_Template(rf, ctx) {
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
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-doc-page>\n    <tui-doc-example\n        id="youtube"\n        heading="Youtube extension"\n        [component]="component1"\n        [content]="example1"\n    />\n</tui-doc-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/embed/youtube/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-MVVCAJJ3.js.map
