import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-PCC4JY5W.js";
import "./chunk-BKBI5FDR.js";
import "./chunk-SP2RLMJ3.js";
import "./chunk-EINUTI2P.js";
import "./chunk-3FE37GZG.js";
import "./chunk-JJURWGWL.js";
import "./chunk-D77NNQR5.js";
import "./chunk-J54AAGPK.js";
import "./chunk-LRQ53CSP.js";
import "./chunk-HR6RGQTF.js";
import "./chunk-WRIQDWYS.js";
import "./chunk-ODLDHFKK.js";
import "./chunk-2ST3K3BL.js";
import "./chunk-IDGNFT5E.js";
import "./chunk-UZMOA7JP.js";
import "./chunk-XM5RTYUR.js";
import "./chunk-3YPDJXUW.js";
import "./chunk-X7GRIVH7.js";
import "./chunk-BILNAO2Z.js";
import "./chunk-M562FPU2.js";
import "./chunk-KD3HJTV7.js";
import "./chunk-5XN4VSG5.js";
import "./chunk-NSYJ5MQ7.js";
import "./chunk-6VV32JRO.js";
import "./chunk-3BHDA4GH.js";
import "./chunk-HZQ27SF5.js";
import "./chunk-CGIMAQGG.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-4FOPQVVL.js";
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
} from "./chunk-G7TA3DS4.js";
import "./chunk-46H3G724.js";
import "./chunk-G6LPKBY6.js";
import "./chunk-JCOA2MEW.js";
import "./chunk-QYO3DBNN.js";
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
//# sourceMappingURL=chunk-32YY2UUH.js.map
