import {
  TuiError,
  TuiErrorComponent,
  TuiErrorDirective
} from "./chunk-66LP24S4.js";
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
import "./chunk-LZZ4FHRE.js";
import {
  TuiButton,
  tuiValidationErrorsProvider
} from "./chunk-HFC5F3F7.js";
import "./chunk-AUB4GJHI.js";
import "./chunk-GXEQYQRI.js";
import "./chunk-PDU6H2KZ.js";
import "./chunk-RCCORHGG.js";
import "./chunk-VPRZGEPF.js";
import "./chunk-Y3UWEWIG.js";
import "./chunk-ILGSV6CC.js";
import "./chunk-Y5QZTE4Q.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  Validators
} from "./chunk-26IZDJS5.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate4
} from "./chunk-BVXNDUDG.js";
import "./chunk-5Y77LQWP.js";
import "./chunk-KQS6TKY3.js";
import "./chunk-O23DE4M2.js";
import "./chunk-42BGUG2S.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/forms/examples/1/index.ts
var _Example = class _Example {
  constructor() {
    this.control = new FormControl("<p>Text</p>", Validators.required);
  }
  reset() {
    this.control.setValue("");
  }
  toggleDisabled() {
    if (this.control.disabled) {
      this.control.enable();
    } else {
      this.control.disable();
    }
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([
  provideTuiEditor(),
  tuiValidationErrorsProvider({ required: "Field is required" })
])], decls: 11, vars: 6, consts: [[1, "editor", 3, "formControl"], [1, "status"], [3, "formControl"], ["tuiButton", "", "type", "button", 3, "click"], ["data-testid", "outside", "tuiButton", "", "type", "button"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-editor", 0);
    \u0275\u0275text(1, " Typing...\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 1);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "tui-error", 2);
    \u0275\u0275elementStart(5, "button", 3);
    \u0275\u0275listener("click", function Example_Template_button_click_5_listener() {
      return ctx.reset();
    });
    \u0275\u0275text(6, " Reset\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 3);
    \u0275\u0275listener("click", function Example_Template_button_click_7_listener() {
      return ctx.toggleDisabled();
    });
    \u0275\u0275text(8, " Toggle disabled\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 4);
    \u0275\u0275text(10, " Outside\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate4(" touched: ", ctx.control.touched, " \xB7 dirty: ", ctx.control.dirty, " \xB7 invalid: ", ctx.control.invalid, " \xB7 disabled: ", ctx.control.disabled, "\n");
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx.control);
  }
}, dependencies: [ReactiveFormsModule, NgControlStatus, FormControlDirective, TuiButton, TuiEditor, TuiErrorComponent, TuiErrorDirective], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [ReactiveFormsModule, TuiButton, TuiEditor, TuiError], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor(),
      tuiValidationErrorsProvider({ required: "Field is required" })
    ], template: '<tui-editor\n    class="editor"\n    [formControl]="control"\n>\n    Typing...\n</tui-editor>\n\n<p class="status">\n    touched: {{ control.touched }} \xB7 dirty: {{ control.dirty }} \xB7 invalid: {{ control.invalid }} \xB7 disabled:\n    {{ control.disabled }}\n</p>\n\n<tui-error [formControl]="control" />\n\n<button\n    tuiButton\n    type="button"\n    (click)="reset()"\n>\n    Reset\n</button>\n\n<button\n    tuiButton\n    type="button"\n    (click)="toggleDisabled()"\n>\n    Toggle disabled\n</button>\n\n<button\n    data-testid="outside"\n    tuiButton\n    type="button"\n>\n    Outside\n</button>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/forms/examples/1/index.ts", lineNumber: 15 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-UF556BFG.js.map
