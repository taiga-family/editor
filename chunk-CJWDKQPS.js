import {
  TuiDialogService
} from "./chunk-GKQBJ6LJ.js";
import "./chunk-LMSIAHHN.js";
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
import "./chunk-PWEWQNSM.js";
import "./chunk-PTWIXU7X.js";
import "./chunk-7NVCN4ZH.js";
import {
  TuiButton
} from "./chunk-42UC7I5S.js";
import "./chunk-HSVQSQDL.js";
import "./chunk-FFQ24UYZ.js";
import "./chunk-MDENZQPE.js";
import "./chunk-DNJ4OT4W.js";
import "./chunk-DNNER7KQ.js";
import {
  TuiEditorTool
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
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵdefineComponent,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-WPT3CLAO.js";
import "./chunk-ARGRSNLC.js";
import "./chunk-KMOYXMM5.js";
import "./chunk-VI2JCI56.js";
import "./chunk-3Z6DR5PV.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/toolbar/bottom/examples/1/index.ts
var _Example = class _Example {
  constructor() {
    this.dialog = inject(TuiDialogService);
    this.builtInTools = [
      TuiEditorTool.Undo,
      TuiEditorTool.Link,
      TuiEditorTool.Img
    ];
    this.control = new FormControl("");
  }
  send() {
    this.dialog.open(this.control.value).subscribe();
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([provideTuiEditor()])], decls: 5, vars: 2, consts: [[1, "editor", 3, "formControl", "tools"], ["ngProjectAs", "tools", 5, ["tools"]], ["appearance", "secondary", "size", "s", "tuiButton", "", "type", "button", 3, "click"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-editor", 0);
    \u0275\u0275text(1, " Write message... ");
    \u0275\u0275elementContainerStart(2, 1);
    \u0275\u0275elementStart(3, "button", 2);
    \u0275\u0275listener("click", function Example_Template_button_click_3_listener() {
      return ctx.send();
    });
    \u0275\u0275text(4, " Send ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools);
  }
}, dependencies: [ReactiveFormsModule, NgControlStatus, FormControlDirective, TuiButton, TuiEditor], styles: ["\n\n.editor[_ngcontent-%COMP%] {\n  min-block-size: 12.5rem;\n  max-block-size: 12.5rem;\n}\n.editor[_ngcontent-%COMP%]     tui-toolbar {\n  position: absolute;\n  z-index: 1;\n  inset-inline-start: 0;\n  inset-block-end: 0;\n  inline-size: 100%;\n}\n.editor[_ngcontent-%COMP%]     tui-toolbar [tuiToolbar] {\n  box-shadow: 0 -0.0625rem 0.0625rem var(--tui-background-neutral-1-hover);\n}\n.editor[_ngcontent-%COMP%]     tui-scrollbar {\n  margin-block-end: 2.875rem;\n  padding: 0;\n}\n.editor[_ngcontent-%COMP%]     .t-placeholder {\n  margin-block-start: 1.625rem;\n}\n.editor[_ngcontent-%COMP%]     [tuiToolbarBlock]:last-child {\n  margin-inline-start: auto;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [ReactiveFormsModule, TuiButton, TuiEditor], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideTuiEditor()], template: '<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    Write message...\n\n    <ng-container ngProjectAs="tools">\n        <button\n            appearance="secondary"\n            size="s"\n            tuiButton\n            type="button"\n            (click)="send()"\n        >\n            Send\n        </button>\n    </ng-container>\n</tui-editor>\n', styles: ["/* projects/demo/src/app/pages/toolbar/bottom/examples/1/index.less */\n.editor {\n  min-block-size: 12.5rem;\n  max-block-size: 12.5rem;\n}\n.editor ::ng-deep tui-toolbar {\n  position: absolute;\n  z-index: 1;\n  inset-inline-start: 0;\n  inset-block-end: 0;\n  inline-size: 100%;\n}\n.editor ::ng-deep tui-toolbar [tuiToolbar] {\n  box-shadow: 0 -0.0625rem 0.0625rem var(--tui-background-neutral-1-hover);\n}\n.editor ::ng-deep tui-scrollbar {\n  margin-block-end: 2.875rem;\n  padding: 0;\n}\n.editor ::ng-deep .t-placeholder {\n  margin-block-start: 1.625rem;\n}\n.editor ::ng-deep [tuiToolbarBlock]:last-child {\n  margin-inline-start: auto;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/toolbar/bottom/examples/1/index.ts", lineNumber: 13 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-CJWDKQPS.js.map
