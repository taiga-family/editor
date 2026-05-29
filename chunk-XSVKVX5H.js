import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-U3MUV7UV.js";
import "./chunk-7GTWMHAC.js";
import "./chunk-CQCVA6IH.js";
import "./chunk-35INNUXK.js";
import "./chunk-HEWXKLLS.js";
import "./chunk-FSBD2B32.js";
import "./chunk-MOZWJJCS.js";
import "./chunk-XK45D6UZ.js";
import "./chunk-Y7ZCXK7T.js";
import "./chunk-DD32KBA7.js";
import "./chunk-EDND4ZRD.js";
import "./chunk-DJU4YGZG.js";
import "./chunk-JQT6NZCN.js";
import "./chunk-VV3D2HHM.js";
import "./chunk-SGBXHZN5.js";
import "./chunk-ZYO2ROQB.js";
import "./chunk-W4U25YU5.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-THJ2EXOX.js";
import {
  TuiItem
} from "./chunk-7WB2HA2I.js";
import {
  WA_IS_E2E
} from "./chunk-XHHESVMY.js";
import "./chunk-UOQYRYT2.js";
import "./chunk-YQZG6ATW.js";
import "./chunk-SID5SRJX.js";
import "./chunk-HQC3MWMQ.js";
import "./chunk-QD3ZUMKY.js";
import {
  TuiEditorTool,
  provideTuiEditorOptions
} from "./chunk-5B5T5J6E.js";
import "./chunk-3MYWO3JS.js";
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
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-NS3244ZP.js";
import "./chunk-YANEK5OP.js";
import "./chunk-JTJXQAN7.js";
import "./chunk-PSTGTYGJ.js";
import "./chunk-LXNO5FKD.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/font/examples/2/index.ts
function Example_ng_container_5_Template(rf, ctx) {
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
function Example_ng_container_9_Template(rf, ctx) {
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
    this.builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Size];
    this.isE2E = inject(WA_IS_E2E);
    this.control = new FormControl(`
        <p><span style="font-size: 96px">96</span></p>
        <p><span style="font-size: 72px">72</span></p>
        <p><span style="font-size: 48px">48</span></p>
        <p><span style="font-size: 36px">36</span></p>
        <p><span style="font-size: 30px">30</span></p>
        <p><span style="font-size: 24px">24</span></p>
        <p><span style="font-size: 18px">18</span></p>
        <p><span style="font-size: 14px">14</span></p>
        <p><span style="font-size: 12px">12</span></p>
        <p><span style="font-size: 11px">11</span></p>
        <p><span style="font-size: 10px">10</span></p>
        <p><span style="font-size: 9px">9</span></p>
        <p><span style="font-size: 8px">8</span></p>
    `);
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([
  provideTuiEditorOptions({
    fontOptions: () => [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96].map((size) => ({
      px: size,
      name: `${size}`
    }))
  }),
  provideTuiEditor()
])], decls: 10, vars: 5, consts: [[1, "heading", 3, "formControl", "tools"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tui-editor", 0);
    \u0275\u0275elementStart(1, "tui-accordion", 1)(2, "button", 2);
    \u0275\u0275text(3, "HTML");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "tui-expand");
    \u0275\u0275template(5, Example_ng_container_5_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 2);
    \u0275\u0275text(7, "Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tui-expand");
    \u0275\u0275template(9, Example_ng_container_9_Template, 3, 1, "ng-container", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools);
    \u0275\u0275advance();
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
      provideTuiEditorOptions({
        fontOptions: () => [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96].map((size) => ({
          px: size,
          name: `${size}`
        }))
      }),
      provideTuiEditor()
    ], template: '<tui-editor\n    class="heading"\n    [formControl]="control"\n    [tools]="builtInTools"\n/>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/font/examples/2/index.ts", lineNumber: 37 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-XSVKVX5H.js.map
