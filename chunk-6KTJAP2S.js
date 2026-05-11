import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-KOEJR3UV.js";
import "./chunk-XUT57MFZ.js";
import "./chunk-ONGVM4GJ.js";
import "./chunk-MTFKGVUX.js";
import "./chunk-FXPT24WY.js";
import "./chunk-SUJWYGZS.js";
import "./chunk-KIYCCMVA.js";
import "./chunk-HAE43MDU.js";
import "./chunk-LGM6JTI4.js";
import "./chunk-BGCTYHEB.js";
import "./chunk-UVV7USAX.js";
import "./chunk-N3ASRP5P.js";
import "./chunk-BP7L4YXV.js";
import "./chunk-4WC5OTYE.js";
import "./chunk-3F4QNJFV.js";
import "./chunk-OZQMG2V2.js";
import "./chunk-VEVUDH35.js";
import "./chunk-FWOW37TG.js";
import "./chunk-L3GOEM5R.js";
import "./chunk-B43K272B.js";
import "./chunk-N5RRZVQ3.js";
import "./chunk-3ZQ2AWCT.js";
import "./chunk-JA46CMTS.js";
import "./chunk-NKJMBZ76.js";
import "./chunk-SS6YEVNJ.js";
import "./chunk-IHDMRANP.js";
import "./chunk-RWJ2HBVJ.js";
import "./chunk-EFOSPXQH.js";
import "./chunk-T3R67HDH.js";
import "./chunk-7TRXGXB5.js";
import "./chunk-4BKSQ4WE.js";
import "./chunk-MQBRMCSJ.js";
import "./chunk-5HK4TACZ.js";
import "./chunk-JIT3DKX5.js";
import "./chunk-E4VTS3R6.js";
import "./chunk-POEE2B5N.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-U2A4WWTO.js";
import {
  TuiItem,
  TuiValueTransformer
} from "./chunk-FKOUSXA3.js";
import {
  WA_IS_E2E
} from "./chunk-6XV2X7BK.js";
import "./chunk-R3NXKXZ4.js";
import "./chunk-ZBWOCD7G.js";
import "./chunk-JHFJB5LV.js";
import "./chunk-6RV2SSBI.js";
import "./chunk-CW45XSAV.js";
import {
  TUI_EDITOR_VALUE_TRANSFORMER
} from "./chunk-UXUYEKAA.js";
import {
  tuiLegacyEditorConverter
} from "./chunk-BGJRQH3N.js";
import "./chunk-5KWHOROR.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  Validators
} from "./chunk-7VRO2DFS.js";
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
} from "./chunk-WNG4JUA7.js";
import "./chunk-RXK6YP7O.js";
import "./chunk-FFR5OF2V.js";
import "./chunk-VUNK2IUC.js";
import "./chunk-OPLENYEC.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/legacy-html/examples/1/transformer.ts
var _ExampleEditorConvertLegacyHtmlTransformer = class _ExampleEditorConvertLegacyHtmlTransformer extends TuiValueTransformer {
  fromControlValue(controlValue) {
    return tuiLegacyEditorConverter(controlValue);
  }
  toControlValue(componentValue) {
    return componentValue;
  }
};
_ExampleEditorConvertLegacyHtmlTransformer.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ExampleEditorConvertLegacyHtmlTransformer_BaseFactory;
  return function ExampleEditorConvertLegacyHtmlTransformer_Factory(__ngFactoryType__) {
    return (\u0275ExampleEditorConvertLegacyHtmlTransformer_BaseFactory || (\u0275ExampleEditorConvertLegacyHtmlTransformer_BaseFactory = \u0275\u0275getInheritedFactory(_ExampleEditorConvertLegacyHtmlTransformer)))(__ngFactoryType__ || _ExampleEditorConvertLegacyHtmlTransformer);
  };
})();
_ExampleEditorConvertLegacyHtmlTransformer.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExampleEditorConvertLegacyHtmlTransformer, factory: _ExampleEditorConvertLegacyHtmlTransformer.\u0275fac });
var ExampleEditorConvertLegacyHtmlTransformer = _ExampleEditorConvertLegacyHtmlTransformer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleEditorConvertLegacyHtmlTransformer, [{
    type: Injectable
  }], null, null);
})();

// projects/demo/src/app/pages/legacy-html/examples/1/index.ts
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
    this.control = new FormControl(
      // Legacy HTML markup from DB
      'WYSIWYG (What you see is what you get) \u2014 Rich Text Editor for using with Angular forms.<p><font size="6">Heading</font></p><font size="4">Lorem ipsum dolor sit amet <font color="#ff78a7">consectetur adipiscing elit</font>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span style="background-color: rgb(163, 129, 255);">Ut enim </span></font><blockquote>ad minim veniam, <u>quis nostrud exercitation</u> <b>ullamco</b>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</blockquote><p style="text-align: right;">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      Validators.required
    );
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([
  provideTuiEditor(),
  {
    provide: TUI_EDITOR_VALUE_TRANSFORMER,
    useClass: ExampleEditorConvertLegacyHtmlTransformer
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
        useClass: ExampleEditorConvertLegacyHtmlTransformer
      }
    ], template: '<tui-editor\n    class="editor"\n    [formControl]="control"\n>\n    Placeholder\n</tui-editor>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/legacy-html/examples/1/index.ts", lineNumber: 35 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-6KTJAP2S.js.map
