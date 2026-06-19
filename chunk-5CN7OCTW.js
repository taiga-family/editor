import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-RH6GHVKL.js";
import "./chunk-EO7LQO3V.js";
import "./chunk-IYZNRN55.js";
import "./chunk-T3OKOD3A.js";
import "./chunk-OGDOLTW3.js";
import "./chunk-O4YFAAW5.js";
import "./chunk-FQYNGWGS.js";
import "./chunk-LXPXPQCS.js";
import "./chunk-INMNDEHV.js";
import "./chunk-J4TAEO4S.js";
import "./chunk-A33AM5OH.js";
import "./chunk-T5QAZXLT.js";
import "./chunk-CEVSZ4W2.js";
import "./chunk-FSPXCFZT.js";
import "./chunk-C7MBO5OX.js";
import "./chunk-IZQL34JE.js";
import "./chunk-GPYYXLWQ.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-EF4ATJ2Z.js";
import {
  TuiItem,
  TuiValueTransformer
} from "./chunk-X7GRIVH7.js";
import {
  WA_IS_E2E
} from "./chunk-BILNAO2Z.js";
import "./chunk-M562FPU2.js";
import "./chunk-KD3HJTV7.js";
import "./chunk-HDBDXCXT.js";
import "./chunk-SWVF5MG7.js";
import "./chunk-FWDXC2LG.js";
import {
  TUI_EDITOR_VALUE_TRANSFORMER
} from "./chunk-TU7TDGZA.js";
import "./chunk-3PCP22CS.js";
import "./chunk-CGIMAQGG.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  Validators
} from "./chunk-4FOPQVVL.js";
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
} from "./chunk-G7TA3DS4.js";
import "./chunk-4HJQMCHN.js";
import "./chunk-VV7RTGQI.js";
import "./chunk-I33OXPP7.js";
import "./chunk-Q52BLV3K.js";
import "./chunk-KWSTWQNB.js";

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
    this.isE2E = inject(WA_IS_E2E);
    this.control = new FormControl('<p class="t-content">TipTap Editor</p>', Validators.required);
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], exportAs: ["cleanup-example"], features: [\u0275\u0275ProvidersFeature([
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
    ], exportAs: "cleanup-example", changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor(),
      {
        provide: TUI_EDITOR_VALUE_TRANSFORMER,
        useClass: ExampleEditorCleanupHtmlTransformer
      }
    ], template: '<tui-editor\n    class="editor"\n    [formControl]="control"\n>\n    Placeholder\n</tui-editor>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/cleanup-html/examples/1/index.ts", lineNumber: 36 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-5CN7OCTW.js.map
