import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-2NNHZT67.js";
import "./chunk-FMSD23SZ.js";
import "./chunk-L3DUK3AD.js";
import "./chunk-KHDUIXS3.js";
import "./chunk-7TYTEEOQ.js";
import "./chunk-3BNZ2YHP.js";
import "./chunk-MMTSD25Y.js";
import "./chunk-XYM3JIEW.js";
import "./chunk-MYF2H5PS.js";
import "./chunk-3PT6WN7M.js";
import "./chunk-R22R6PSE.js";
import "./chunk-VQFUPJTQ.js";
import "./chunk-HOXTOOAE.js";
import "./chunk-7IXOUSQI.js";
import "./chunk-XLLPTL25.js";
import "./chunk-VMTDPEBC.js";
import "./chunk-Z56VIHWI.js";
import "./chunk-7NVCN4ZH.js";
import "./chunk-42UC7I5S.js";
import "./chunk-HSVQSQDL.js";
import "./chunk-FFQ24UYZ.js";
import "./chunk-MDENZQPE.js";
import "./chunk-DNJ4OT4W.js";
import "./chunk-DNNER7KQ.js";
import {
  TuiEditorTool
} from "./chunk-UCOMS7QJ.js";
import "./chunk-PVPAR4RU.js";
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
  ɵɵproperty
} from "./chunk-WPT3CLAO.js";
import "./chunk-ARGRSNLC.js";
import "./chunk-KMOYXMM5.js";
import "./chunk-VI2JCI56.js";
import "./chunk-3Z6DR5PV.js";
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
//# sourceMappingURL=chunk-3IQ6NHMP.js.map
