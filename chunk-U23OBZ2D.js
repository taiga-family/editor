import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-5OF5XCWJ.js";
import "./chunk-63UAFU6U.js";
import "./chunk-2ES6PUYZ.js";
import "./chunk-I7X6V4CT.js";
import "./chunk-75FDNOQF.js";
import "./chunk-DSHVBE6A.js";
import "./chunk-IHVGLZ2Q.js";
import "./chunk-NXH7MFHV.js";
import "./chunk-ATATJQXQ.js";
import "./chunk-R53H6MIJ.js";
import "./chunk-IO47ZSZ5.js";
import "./chunk-IY3TMNXS.js";
import "./chunk-RCTC7M4X.js";
import "./chunk-GMAQM436.js";
import "./chunk-CCLNU5WX.js";
import "./chunk-OKCG6U2V.js";
import "./chunk-KTNJ5Y6T.js";
import "./chunk-QZTLTFCW.js";
import "./chunk-FM47Y63S.js";
import "./chunk-R3AGXJOZ.js";
import "./chunk-YQZG6ATW.js";
import "./chunk-PWR5JH2U.js";
import "./chunk-ANOJQ2S3.js";
import "./chunk-IK5IBJNP.js";
import {
  TuiEditorTool
} from "./chunk-AFITYD3E.js";
import "./chunk-YZMZTTW5.js";
import "./chunk-4K4DVCQ3.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-MRTTS2CM.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-NS3244ZP.js";
import "./chunk-3YAE2G2V.js";
import "./chunk-G7N6NM5P.js";
import "./chunk-AE53DBVW.js";
import "./chunk-77B4UB4S.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/font/examples/4/index.ts
var _Example = class _Example {
  constructor() {
    this.builtInTools = [TuiEditorTool.Undo];
    this.control = new FormControl("<p>Hello</p>");
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([
  provideTuiEditor({
    bold: false,
    italic: false,
    strike: false
  })
])], decls: 1, vars: 2, consts: [[3, "formControl", "tools"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tui-editor", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools);
  }
}, dependencies: [ReactiveFormsModule, NgControlStatus, FormControlDirective, TuiEditor], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [ReactiveFormsModule, TuiEditor], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor({
        bold: false,
        italic: false,
        strike: false
      })
    ], template: '<tui-editor\n    [formControl]="control"\n    [tools]="builtInTools"\n/>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/font/examples/4/index.ts", lineNumber: 17 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-U23OBZ2D.js.map
