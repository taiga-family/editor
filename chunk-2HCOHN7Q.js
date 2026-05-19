import {
  TuiAlignButtonTool,
  TuiEditor,
  TuiFontStyleButtonTool,
  TuiListButtonTool,
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
import "./chunk-3CRZRPMF.js";
import "./chunk-CV6PGG7O.js";
import "./chunk-UOQYRYT2.js";
import "./chunk-YQZG6ATW.js";
import "./chunk-7YCTWNBQ.js";
import "./chunk-AS2ZUAFV.js";
import "./chunk-IK5IBJNP.js";
import {
  TUI_EDITOR_OPTIONS
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
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-NS3244ZP.js";
import "./chunk-3YAE2G2V.js";
import "./chunk-HX6R2MZW.js";
import "./chunk-YFDPJ5PH.js";
import "./chunk-77B4UB4S.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/toolbar/custom/examples/1/index.ts
function Example_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275element(2, "button", 4)(3, "button", 5)(4, "button", 6);
    \u0275\u0275elementEnd()();
  }
}
var _Example = class _Example {
  constructor() {
    this.options = inject(TUI_EDITOR_OPTIONS);
    this.control = new FormControl(`
        <h2>What is Lorem Ipsum?</h2>
        <p>
            <a
                href="https://www.google.com/search?q=wikipedia&sca_esv=563020551&sxsrf=AB5stBhNcprCNZotMYrhf_8rPUA7JwZ4XQ%3A1693989718615&ei=Vjv4ZKGaJaPMwPAPx5m68Ag&ved=0ahUKEwihnbm7y5WBAxUjJhAIHceMDo4Q4dUDCBA&uact=5&oq=wikipedia&gs_lp=Egxnd3Mtd2l6LXNlcnAiCXdpa2lwZWRpYTIKEAAYigUYsQMYQzIKEAAYgAQYFBiHAjIHEAAYigUYQzILEAAYgAQYsQMYgwEyBxAAGIoFGEMyBxAAGIoFGEMyCBAAGIAEGLEDMgcQABiKBRhDMgUQABiABDIFEAAYgARIqDZQAFjRMXAAeAGQAQCYAYEBoAG4B6oBAzMuNrgBA8gBAPgBAcICBxAjGIoFGCfCAhEQLhiABBixAxiDARjHARjRA8ICCxAuGIAEGLEDGIMBwgINEAAYigUYsQMYgwEYQ8ICExAuGIoFGLEDGIMBGMcBGNEDGEPCAgoQLhiKBRjUAhhDwgINEAAYgAQYsQMYgwEYCsICDRAuGIoFGMcBGNEDGEPiAwQYACBBiAYB&sclient=gws-wiz-serp"
            >
                Lorem Ipsum
            </a>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    `);
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([provideTuiEditor()])], decls: 3, vars: 2, consts: [["toolbar", ""], [3, "formControl", "toolbar"], ["tuiToolbar", ""], ["tuiToolbarBlock", ""], ["tuiFontStyleTool", ""], ["tuiAlignTool", ""], ["tuiListTool", ""]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-editor", 1);
    \u0275\u0275template(1, Example_ng_template_1_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toolbar_r1 = \u0275\u0275reference(2);
    \u0275\u0275property("formControl", ctx.control)("toolbar", toolbar_r1);
  }
}, dependencies: [
  ReactiveFormsModule,
  NgControlStatus,
  FormControlDirective,
  TuiAlignButtonTool,
  TuiEditor,
  TuiFontStyleButtonTool,
  TuiListButtonTool
], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [
      ReactiveFormsModule,
      TuiAlignButtonTool,
      TuiEditor,
      TuiFontStyleButtonTool,
      TuiListButtonTool
    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideTuiEditor()], template: '<tui-editor\n    [formControl]="control"\n    [toolbar]="toolbar"\n>\n    <ng-template #toolbar>\n        <div tuiToolbar>\n            <div tuiToolbarBlock>\n                <button tuiFontStyleTool></button>\n                <button tuiAlignTool></button>\n                <button tuiListTool></button>\n            </div>\n        </div>\n    </ng-template>\n</tui-editor>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/toolbar/custom/examples/1/index.ts", lineNumber: 30 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-2HCOHN7Q.js.map
