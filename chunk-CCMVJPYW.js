import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-M24MAHZS.js";
import "./chunk-3XVJMIM3.js";
import "./chunk-FBQNRTPI.js";
import "./chunk-CKXEDIVD.js";
import "./chunk-SMDRVCPH.js";
import "./chunk-RIWP3IDD.js";
import "./chunk-E7AF2JDM.js";
import "./chunk-V3K44WH7.js";
import "./chunk-CLVNSX4V.js";
import "./chunk-LPRARDUT.js";
import "./chunk-W7HY5AXV.js";
import "./chunk-7ZVEQUBF.js";
import "./chunk-RZJNXUCQ.js";
import "./chunk-GSCVANV4.js";
import "./chunk-2V4Q7DK4.js";
import "./chunk-BWYYF7OY.js";
import "./chunk-VKFVYRQZ.js";
import "./chunk-7NVCN4ZH.js";
import "./chunk-42UC7I5S.js";
import "./chunk-HSVQSQDL.js";
import "./chunk-FFQ24UYZ.js";
import "./chunk-C5B5YSKO.js";
import "./chunk-3DZ6ZIOY.js";
import "./chunk-LCKHD4D6.js";
import {
  TuiEditorTool
} from "./chunk-33HKU3CS.js";
import "./chunk-F4EPXCJX.js";
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
import "./chunk-HZ2ODKNV.js";
import "./chunk-JUWQPHXY.js";
import "./chunk-YRQX6IXR.js";
import "./chunk-4ZUCQRR7.js";
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
//# sourceMappingURL=chunk-CCMVJPYW.js.map
