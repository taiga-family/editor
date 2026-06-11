import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-NSTTLCZN.js";
import "./chunk-77Q7E6KR.js";
import "./chunk-ON6CMRJE.js";
import "./chunk-CGQ7SF5X.js";
import "./chunk-K4VHZDJ3.js";
import "./chunk-BMQKW5MW.js";
import "./chunk-AJXXSTGP.js";
import "./chunk-PZFOFBEJ.js";
import "./chunk-T7ACE4S4.js";
import "./chunk-DFL5NIEH.js";
import "./chunk-YCZ4XIMS.js";
import "./chunk-ZFBS4UHE.js";
import "./chunk-E2MCQ2GA.js";
import "./chunk-ZRZNAMTC.js";
import "./chunk-2EOU6FUY.js";
import "./chunk-PQORXA7M.js";
import "./chunk-3N57KBZI.js";
import "./chunk-L4I5LKBQ.js";
import "./chunk-DFGPXHHY.js";
import "./chunk-HCLCQICK.js";
import "./chunk-F67AGDSR.js";
import "./chunk-QVEY2JIK.js";
import "./chunk-DEMSUB7H.js";
import "./chunk-MAMGYOWB.js";
import {
  TuiEditorTool
} from "./chunk-HPI4FTRE.js";
import "./chunk-CDRWMLUY.js";
import "./chunk-5464WHRF.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-YZQ2AVZQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-6FE6LACA.js";
import "./chunk-OT66PQDS.js";
import "./chunk-6E3PG6FD.js";
import "./chunk-GAZHX25U.js";
import "./chunk-QAKA6OWS.js";
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
//# sourceMappingURL=chunk-R75IN2RK.js.map
