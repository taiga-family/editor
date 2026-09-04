import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-XRPCALX3.js";
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
import {
  TuiItem,
  TuiOption
} from "./chunk-7NVCN4ZH.js";
import {
  PolymorpheusComponent,
  injectContext
} from "./chunk-42UC7I5S.js";
import "./chunk-HSVQSQDL.js";
import "./chunk-FFQ24UYZ.js";
import "./chunk-TGZGAZ7H.js";
import "./chunk-OBQL3SNH.js";
import "./chunk-OY4TWC3R.js";
import {
  TuiEditorTool,
  provideTuiEditorOptions
} from "./chunk-V4CTZRCG.js";
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
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-WPT3CLAO.js";
import "./chunk-KLHKKEFX.js";
import "./chunk-CL4AI4RS.js";
import "./chunk-GMZOB5RC.js";
import "./chunk-RDCPDP3O.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/font/examples/5/font-option/index.ts
function FontOption_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.ctx.$implicit.px, "px");
  }
}
var _FontOption = class _FontOption {
  constructor() {
    this.ctx = injectContext();
  }
};
_FontOption.\u0275fac = function FontOption_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FontOption)();
};
_FontOption.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FontOption, selectors: [["ng-component"]], decls: 3, vars: 4, consts: [["tuiItem", "", "tuiOption", "", "type", "button", 3, "click"]], template: function FontOption_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", function FontOption_Template_button_click_0_listener() {
      return ctx.ctx.setFontOption(ctx.ctx.$implicit);
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, FontOption_Conditional_2_Template, 2, 1, "small");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("font-weight", ctx.ctx.$implicit.weight);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.ctx.$implicit.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.ctx.$implicit.px ? 2 : -1);
  }
}, dependencies: [TuiItem, TuiOption], styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n[tuiOption][_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var FontOption = _FontOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FontOption, [{
    type: Component,
    args: [{ imports: [TuiItem, TuiOption], changeDetection: ChangeDetectionStrategy.OnPush, template: '<button\n    tuiItem\n    tuiOption\n    type="button"\n    [style.font-weight]="ctx.$implicit.weight"\n    (click)="ctx.setFontOption(ctx.$implicit)"\n>\n    {{ ctx.$implicit.name }}\n\n    @if (ctx.$implicit.px) {\n        <small>{{ ctx.$implicit.px }}px</small>\n    }\n</button>\n', styles: ["/* projects/demo/src/app/pages/font/examples/5/font-option/index.less */\n:host {\n  display: contents;\n}\n[tuiOption] {\n  justify-content: space-between;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FontOption, { className: "FontOption", filePath: "projects/demo/src/app/pages/font/examples/5/font-option/index.ts", lineNumber: 13 });
})();

// projects/demo/src/app/pages/font/examples/5/index.ts
var _Example = class _Example {
  constructor() {
    this.builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Size];
    this.control = new FormControl(`
        <h1>Title</h1>
        <h2>Subtitle</h2>
        <p>Normal text</p>
    `);
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([
  provideTuiEditor(),
  provideTuiEditorOptions({
    fontOptionContent: new PolymorpheusComponent(FontOption)
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
    args: [{
      imports: [ReactiveFormsModule, TuiEditor],
      template: '<tui-editor [formControl]="control" [tools]="builtInTools" />',
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [
        provideTuiEditor(),
        provideTuiEditorOptions({
          fontOptionContent: new PolymorpheusComponent(FontOption)
        })
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/font/examples/5/index.ts", lineNumber: 24 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-AZF4F2PA.js.map
