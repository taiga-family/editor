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
import "./chunk-MDENZQPE.js";
import "./chunk-DNJ4OT4W.js";
import "./chunk-DNNER7KQ.js";
import {
  TuiEditorTool,
  provideTuiEditorOptions
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
import "./chunk-ARGRSNLC.js";
import "./chunk-KMOYXMM5.js";
import "./chunk-VI2JCI56.js";
import "./chunk-3Z6DR5PV.js";
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
//# sourceMappingURL=chunk-TNONO56P.js.map
