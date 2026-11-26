import {
  TuiDialogService
} from "./chunk-RVYJVLQ5.js";
import "./chunk-KZ4VL6ID.js";
import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-NNJYG7IE.js";
import "./chunk-6H42RGPU.js";
import "./chunk-YBBQR7OJ.js";
import "./chunk-OMFADM6O.js";
import "./chunk-SRJ6VREM.js";
import "./chunk-CJCOLMBG.js";
import "./chunk-OABTULWK.js";
import "./chunk-WTWKXZU6.js";
import "./chunk-72BPGFKA.js";
import "./chunk-ELTFDOPS.js";
import "./chunk-WRVKIEH3.js";
import "./chunk-677D3BIO.js";
import "./chunk-RZFANQIX.js";
import "./chunk-WJGHI4OW.js";
import "./chunk-QCWL64LO.js";
import "./chunk-BSPC2OFF.js";
import "./chunk-DYHGQKM2.js";
import "./chunk-EG4PPJ7B.js";
import "./chunk-7RIJX2FU.js";
import "./chunk-LZZ4FHRE.js";
import {
  TuiButton
} from "./chunk-HFC5F3F7.js";
import "./chunk-AUB4GJHI.js";
import "./chunk-GXEQYQRI.js";
import "./chunk-PDU6H2KZ.js";
import "./chunk-RCCORHGG.js";
import "./chunk-VPRZGEPF.js";
import {
  TuiEditorTool
} from "./chunk-Y3UWEWIG.js";
import "./chunk-ILGSV6CC.js";
import "./chunk-Y5QZTE4Q.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-26IZDJS5.js";
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
} from "./chunk-BVXNDUDG.js";
import "./chunk-5Y77LQWP.js";
import "./chunk-KQS6TKY3.js";
import "./chunk-O23DE4M2.js";
import "./chunk-42BGUG2S.js";
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
//# sourceMappingURL=chunk-64HMYXBW.js.map
