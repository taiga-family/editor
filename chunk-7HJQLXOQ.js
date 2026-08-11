import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-M4QKVFJN.js";
import "./chunk-LLQOBDDE.js";
import "./chunk-MVBC5ZR2.js";
import "./chunk-47I7G6Y7.js";
import "./chunk-BOWF7HQR.js";
import "./chunk-6QS2JWS5.js";
import "./chunk-C6NKESJJ.js";
import "./chunk-F2D6DPIQ.js";
import "./chunk-HYWWOJV3.js";
import "./chunk-PKRVAYQI.js";
import "./chunk-HCMWLNIM.js";
import "./chunk-FYXXG3XV.js";
import "./chunk-MZL3EZZZ.js";
import "./chunk-2LKSBL3S.js";
import "./chunk-X7ZIJKJ6.js";
import "./chunk-C5GCXUTC.js";
import "./chunk-7T3RMNJM.js";
import "./chunk-7NVCN4ZH.js";
import "./chunk-42UC7I5S.js";
import "./chunk-HSVQSQDL.js";
import "./chunk-FFQ24UYZ.js";
import "./chunk-TGZGAZ7H.js";
import "./chunk-OBQL3SNH.js";
import "./chunk-OY4TWC3R.js";
import "./chunk-V4CTZRCG.js";
import "./chunk-NWD2EXSF.js";
import "./chunk-EVRMGIDW.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-UV3WKPLB.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty,
  ɵɵpureFunction0
} from "./chunk-WPT3CLAO.js";
import "./chunk-KLHKKEFX.js";
import "./chunk-CL4AI4RS.js";
import "./chunk-GMZOB5RC.js";
import "./chunk-RDCPDP3O.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/appearance/examples/1/index.ts
var _c0 = () => [];
var _Example = class _Example {
  constructor() {
    this.control = new FormControl("");
    this.builtInTools = [];
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([provideTuiEditor()])], decls: 1, vars: 3, consts: [["appearance", "no-border", 3, "formControl", "tools"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tui-editor", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control)("tools", \u0275\u0275pureFunction0(2, _c0));
  }
}, dependencies: [ReactiveFormsModule, NgControlStatus, FormControlDirective, TuiEditor], styles: ["\n\n[tuiAppearance][data-appearance=no-border][_ngcontent-%COMP%] {\n  outline: none;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [ReactiveFormsModule, TuiEditor], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideTuiEditor()], template: '<tui-editor\n    appearance="no-border"\n    [formControl]="control"\n    [tools]="[]"\n/>\n', styles: ["/* projects/demo/src/app/pages/appearance/examples/1/index.less */\n[tuiAppearance][data-appearance=no-border] {\n  outline: none;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/appearance/examples/1/index.ts", lineNumber: 12 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-7HJQLXOQ.js.map
