import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-Z4SGEKMW.js";
import "./chunk-FKXXQG6K.js";
import "./chunk-IYZNRN55.js";
import "./chunk-T3OKOD3A.js";
import "./chunk-OGDOLTW3.js";
import "./chunk-O4YFAAW5.js";
import "./chunk-FQYNGWGS.js";
import "./chunk-LXPXPQCS.js";
import "./chunk-X6U5273W.js";
import "./chunk-J4TAEO4S.js";
import "./chunk-CQBT7I7P.js";
import "./chunk-VYTUEVFY.js";
import "./chunk-EOH3NMDT.js";
import "./chunk-FSPXCFZT.js";
import "./chunk-4BZJ2B2Q.js";
import "./chunk-YNN3JM4E.js";
import "./chunk-GPYYXLWQ.js";
import "./chunk-3JPI6LSU.js";
import "./chunk-K5V67KBE.js";
import "./chunk-HSVQSQDL.js";
import "./chunk-FFQ24UYZ.js";
import "./chunk-HDBDXCXT.js";
import "./chunk-46JQFCTS.js";
import "./chunk-FWDXC2LG.js";
import "./chunk-XKGXV3KO.js";
import "./chunk-HBCP6ROE.js";
import "./chunk-OKNTYFGP.js";
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
import "./chunk-4HJQMCHN.js";
import "./chunk-VV7RTGQI.js";
import "./chunk-I33OXPP7.js";
import "./chunk-Q52BLV3K.js";
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
//# sourceMappingURL=chunk-4DNWGKO2.js.map
