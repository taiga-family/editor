import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-ZMTUL5CN.js";
import "./chunk-APPRQDZ6.js";
import "./chunk-NY3P6LCX.js";
import "./chunk-ATRNTCHB.js";
import "./chunk-OUJFEBT7.js";
import "./chunk-IQ2YIPVE.js";
import "./chunk-IHVGLZ2Q.js";
import "./chunk-UZUTAX7N.js";
import "./chunk-4JJP4NFY.js";
import "./chunk-2ES6PUYZ.js";
import "./chunk-I7X6V4CT.js";
import "./chunk-75FDNOQF.js";
import "./chunk-DSHVBE6A.js";
import "./chunk-R44URWSU.js";
import "./chunk-4MAQMUPR.js";
import "./chunk-EDVSY6FW.js";
import "./chunk-4QU75GUP.js";
import "./chunk-IYMKP2BP.js";
import "./chunk-NEXVMHMK.js";
import "./chunk-HRD5QY3D.js";
import "./chunk-2RONQDX7.js";
import "./chunk-GMAQM436.js";
import "./chunk-Z4GBAGI2.js";
import "./chunk-I4XUZ4DJ.js";
import "./chunk-KTNJ5Y6T.js";
import "./chunk-3YAE2G2V.js";
import "./chunk-R53H6MIJ.js";
import "./chunk-25DFAGTP.js";
import "./chunk-L66R7ELK.js";
import "./chunk-Y4YR6BCP.js";
import "./chunk-QOAY4QUD.js";
import "./chunk-FKOUSXA3.js";
import "./chunk-6XV2X7BK.js";
import "./chunk-R3NXKXZ4.js";
import "./chunk-ZBWOCD7G.js";
import "./chunk-PWR5JH2U.js";
import "./chunk-6Y7W3GAR.js";
import "./chunk-IK5IBJNP.js";
import {
  TuiEditorTool
} from "./chunk-PZFEFT3A.js";
import "./chunk-PU5DVQVI.js";
import "./chunk-5KWHOROR.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-7VRO2DFS.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-WNG4JUA7.js";
import "./chunk-G7N6NM5P.js";
import "./chunk-AE53DBVW.js";
import "./chunk-NXH7MFHV.js";
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
//# sourceMappingURL=chunk-QM6BGI5M.js.map
