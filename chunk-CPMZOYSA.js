import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-GUXKSSXB.js";
import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-KZS7YKOQ.js";
import "./chunk-JISC74IQ.js";
import "./chunk-BJZBC7OY.js";
import "./chunk-5NITR7HG.js";
import "./chunk-EK32FQMI.js";
import "./chunk-KMQDJKVH.js";
import "./chunk-PJJ4EG5U.js";
import "./chunk-LR6MFXG2.js";
import "./chunk-N3XZP6Z7.js";
import "./chunk-6JDH2PV3.js";
import "./chunk-7QK2CPSE.js";
import "./chunk-WBHAP4JC.js";
import "./chunk-X3PSOWX2.js";
import "./chunk-E3TKWIMT.js";
import "./chunk-HSMAYE7Z.js";
import "./chunk-ARYGUNWN.js";
import "./chunk-3L6ILX4W.js";
import "./chunk-M6TSJ4NT.js";
import "./chunk-BAXR2EDS.js";
import "./chunk-3MA5NXQZ.js";
import "./chunk-IG5NUA4T.js";
import "./chunk-LPOWL4X5.js";
import "./chunk-RURN6JQY.js";
import "./chunk-QOV567V2.js";
import "./chunk-UFW7RGXF.js";
import "./chunk-X7NG6AFM.js";
import "./chunk-J256VTJM.js";
import "./chunk-TKB72JFC.js";
import "./chunk-ZL2NLOVI.js";
import "./chunk-WQSN4Q62.js";
import "./chunk-F47ZTIMH.js";
import "./chunk-H6B6ZN6C.js";
import "./chunk-VCEUECWR.js";
import "./chunk-EHYODUHD.js";
import "./chunk-K3KVBV5Y.js";
import "./chunk-L5QVMFBS.js";
import {
  TuiItem
} from "./chunk-M277MCZ7.js";
import {
  TUI_IS_E2E,
  TuiValueTransformer
} from "./chunk-3VK442GK.js";
import "./chunk-XI2RCXXD.js";
import "./chunk-AHSN3FX6.js";
import "./chunk-PMDCSBJF.js";
import "./chunk-2X7NNA2Q.js";
import {
  TUI_EDITOR_VALUE_TRANSFORMER
} from "./chunk-I6VUD5CU.js";
import "./chunk-Q4JLRECA.js";
import "./chunk-6A2ZSXM6.js";
import "./chunk-LBJNUVBM.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  Validators
} from "./chunk-2QWGY2YZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-SLVEPEAC.js";
import "./chunk-CJ7OSSQR.js";
import "./chunk-TPMK677Z.js";
import "./chunk-Q6WMBPZ3.js";
import "./chunk-IN2LCJCD.js";
import "./chunk-G3QJNC4B.js";
import "./chunk-U65UEYRO.js";
import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/cleanup-html/examples/1/transformer.ts
var _ExampleEditorCleanupHtmlTransformer = class _ExampleEditorCleanupHtmlTransformer extends TuiValueTransformer {
  fromControlValue(controlValue) {
    return controlValue;
  }
  toControlValue(componentValue) {
    if (typeof DOMParser === "undefined") {
      return "";
    }
    const tree = new DOMParser().parseFromString(componentValue, "text/html");
    tree.body.querySelectorAll("*").forEach((element) => {
      element.removeAttribute("class");
      element.removeAttribute("style");
    });
    return tree.body.innerHTML;
  }
};
_ExampleEditorCleanupHtmlTransformer.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ExampleEditorCleanupHtmlTransformer_BaseFactory;
  return function ExampleEditorCleanupHtmlTransformer_Factory(__ngFactoryType__) {
    return (\u0275ExampleEditorCleanupHtmlTransformer_BaseFactory || (\u0275ExampleEditorCleanupHtmlTransformer_BaseFactory = \u0275\u0275getInheritedFactory(_ExampleEditorCleanupHtmlTransformer)))(__ngFactoryType__ || _ExampleEditorCleanupHtmlTransformer);
  };
})();
_ExampleEditorCleanupHtmlTransformer.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExampleEditorCleanupHtmlTransformer, factory: _ExampleEditorCleanupHtmlTransformer.\u0275fac });
var ExampleEditorCleanupHtmlTransformer = _ExampleEditorCleanupHtmlTransformer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleEditorCleanupHtmlTransformer, [{
    type: Injectable
  }], null, null);
})();

// projects/demo/src/app/pages/cleanup-html/examples/1/index.ts
function Example_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "tui-editor-socket", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("content", ctx_r0.control.value);
  }
}
function Example_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.control.value);
  }
}
var _Example = class _Example {
  constructor() {
    this.isE2E = inject(TUI_IS_E2E);
    this.control = new FormControl('<p class="t-content">TipTap Editor</p>', Validators.required);
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([
  provideTuiEditor(),
  {
    provide: TUI_EDITOR_VALUE_TRANSFORMER,
    useClass: ExampleEditorCleanupHtmlTransformer
  }
])], decls: 11, vars: 4, consts: [[1, "editor", 3, "formControl"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-editor", 0);
    \u0275\u0275text(1, " Placeholder\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tui-accordion", 1)(3, "button", 2);
    \u0275\u0275text(4, "HTML");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tui-expand");
    \u0275\u0275template(6, Example_ng_container_6_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 2);
    \u0275\u0275text(8, "Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "tui-expand");
    \u0275\u0275template(10, Example_ng_container_10_Template, 3, 1, "ng-container", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control);
    \u0275\u0275advance(2);
    \u0275\u0275property("closeOthers", false);
    \u0275\u0275advance();
    \u0275\u0275property("tuiAccordion", ctx.isE2E);
    \u0275\u0275advance(4);
    \u0275\u0275property("tuiAccordion", ctx.isE2E);
  }
}, dependencies: [
  ReactiveFormsModule,
  NgControlStatus,
  FormControlDirective,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand,
  TuiItem,
  TuiEditor,
  TuiEditorSocket
], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [
      ReactiveFormsModule,
      TuiAccordion,
      TuiEditor,
      TuiEditorSocket,
      TuiExpand,
      TuiItem
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor(),
      {
        provide: TUI_EDITOR_VALUE_TRANSFORMER,
        useClass: ExampleEditorCleanupHtmlTransformer
      }
    ], template: '<tui-editor\n    class="editor"\n    [formControl]="control"\n>\n    Placeholder\n</tui-editor>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/cleanup-html/examples/1/index.ts", lineNumber: 33 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-CPMZOYSA.js.map
