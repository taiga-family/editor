import {
  TuiDialog
} from "./chunk-GKQBJ6LJ.js";
import "./chunk-LMSIAHHN.js";
import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-R4FLG6NU.js";
import "./chunk-FJU7IKRM.js";
import "./chunk-YBBQR7OJ.js";
import "./chunk-OMFADM6O.js";
import "./chunk-SRJ6VREM.js";
import "./chunk-CJCOLMBG.js";
import "./chunk-OABTULWK.js";
import "./chunk-WTWKXZU6.js";
import "./chunk-HQNEZ7FD.js";
import "./chunk-ELTFDOPS.js";
import "./chunk-HPXD2ZPW.js";
import "./chunk-3JHOWGSB.js";
import "./chunk-5X6UH2RV.js";
import "./chunk-WJGHI4OW.js";
import "./chunk-337OPFJJ.js";
import "./chunk-GEE34FFQ.js";
import "./chunk-DYHGQKM2.js";
import "./chunk-PWEWQNSM.js";
import "./chunk-PTWIXU7X.js";
import "./chunk-7NVCN4ZH.js";
import {
  TuiButton
} from "./chunk-42UC7I5S.js";
import "./chunk-HSVQSQDL.js";
import "./chunk-FFQ24UYZ.js";
import "./chunk-PDU6H2KZ.js";
import "./chunk-VLIOI2SV.js";
import "./chunk-VPRZGEPF.js";
import {
  TUI_EDITOR_DEFAULT_TOOLS
} from "./chunk-C7Z7VG7M.js";
import "./chunk-L6H6ZKD6.js";
import "./chunk-EVRMGIDW.js";
import {
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-UV3WKPLB.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WPT3CLAO.js";
import "./chunk-5Y77LQWP.js";
import "./chunk-KQS6TKY3.js";
import "./chunk-O23DE4M2.js";
import "./chunk-42BGUG2S.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/dialog/examples/1/index.ts
var _c0 = () => ({ label: "Editor", size: "l" });
function Example_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275listener("ngSubmit", function Example_ng_template_2_Template_form_ngSubmit_0_listener() {
      const observer_r2 = \u0275\u0275restoreView(_r1).$implicit;
      return \u0275\u0275resetView(observer_r2.complete());
    });
    \u0275\u0275elementStart(1, "tui-editor", 3);
    \u0275\u0275text(2, " Start typing ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275text(4, " Save ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance();
    \u0275\u0275property("tools", ctx_r2.tools);
  }
}
var _Example = class _Example {
  constructor() {
    this.tools = TUI_EDITOR_DEFAULT_TOOLS;
    this.form = new FormGroup({ content: new FormControl("") });
    this.open = false;
  }
  showDialog() {
    this.open = true;
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([provideTuiEditor()])], decls: 3, vars: 3, consts: [["tuiButton", "", "type", "button", 3, "click"], [3, "tuiDialogChange", "tuiDialogOptions", "tuiDialog"], [3, "ngSubmit", "formGroup"], ["formControlName", "content", 3, "tools"], ["tuiButton", "", "type", "submit", 1, "tui-space_top-4"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", function Example_Template_button_click_0_listener() {
      return ctx.showDialog();
    });
    \u0275\u0275text(1, " Show dialog\n");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, Example_ng_template_2_Template, 5, 2, "ng-template", 1);
    \u0275\u0275twoWayListener("tuiDialogChange", function Example_Template_ng_template_tuiDialogChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.open, $event) || (ctx.open = $event);
      return $event;
    });
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("tuiDialogOptions", \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275twoWayProperty("tuiDialog", ctx.open);
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TuiButton, TuiDialog, TuiEditor], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [ReactiveFormsModule, TuiButton, TuiDialog, TuiEditor], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideTuiEditor()], template: `<button
    tuiButton
    type="button"
    (click)="showDialog()"
>
    Show dialog
</button>

<ng-template
    let-observer
    [tuiDialogOptions]="{label: 'Editor', size: 'l'}"
    [(tuiDialog)]="open"
>
    <form
        [formGroup]="form"
        (ngSubmit)="observer.complete()"
    >
        <tui-editor
            formControlName="content"
            [tools]="tools"
        >
            Start typing
        </tui-editor>

        <button
            tuiButton
            type="submit"
            class="tui-space_top-4"
        >
            Save
        </button>
    </form>
</ng-template>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/dialog/examples/1/index.ts", lineNumber: 12 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-ASKUW3NB.js.map
