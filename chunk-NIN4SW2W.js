import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-FF7L3QWE.js";
import "./chunk-AF3JEI3T.js";
import "./chunk-2ES6PUYZ.js";
import "./chunk-I7X6V4CT.js";
import "./chunk-75FDNOQF.js";
import "./chunk-VVRQ5RPZ.js";
import "./chunk-IHVGLZ2Q.js";
import "./chunk-NXH7MFHV.js";
import "./chunk-RPYTK5KS.js";
import "./chunk-R53H6MIJ.js";
import "./chunk-HRCSHUH4.js";
import "./chunk-XM3MWE2U.js";
import "./chunk-JW4UQLV7.js";
import "./chunk-GMAQM436.js";
import "./chunk-3XG2MTAS.js";
import "./chunk-SQSAMZOC.js";
import "./chunk-KTNJ5Y6T.js";
import {
  TuiItem,
  TuiOption
} from "./chunk-3CRZRPMF.js";
import {
  PolymorpheusComponent,
  injectContext
} from "./chunk-CV6PGG7O.js";
import "./chunk-UOQYRYT2.js";
import "./chunk-YQZG6ATW.js";
import "./chunk-7YCTWNBQ.js";
import "./chunk-AS2ZUAFV.js";
import "./chunk-IK5IBJNP.js";
import {
  TuiEditorTool,
  provideTuiEditorOptions
} from "./chunk-TLJVX7U7.js";
import "./chunk-CVRSSI2P.js";
import "./chunk-2UOD7KNB.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-6HH4HFWJ.js";
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
} from "./chunk-NS3244ZP.js";
import "./chunk-3YAE2G2V.js";
import "./chunk-HX6R2MZW.js";
import "./chunk-YFDPJ5PH.js";
import "./chunk-77B4UB4S.js";
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
//# sourceMappingURL=chunk-NIN4SW2W.js.map
