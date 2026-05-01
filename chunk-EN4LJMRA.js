import {
  TuiEditor,
  TuiToolbar,
  provideTuiEditor
} from "./chunk-7F4Z4OEH.js";
import "./chunk-BTUNPS36.js";
import "./chunk-EP2JXLAZ.js";
import "./chunk-FQFMIA7P.js";
import "./chunk-ENNG77OY.js";
import "./chunk-4KQC5VQM.js";
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
import "./chunk-KABZ5ZTT.js";
import "./chunk-RR2HWU3Q.js";
import "./chunk-ZL2NLOVI.js";
import "./chunk-WQSN4Q62.js";
import "./chunk-F47ZTIMH.js";
import "./chunk-H6B6ZN6C.js";
import "./chunk-VCEUECWR.js";
import "./chunk-EHYODUHD.js";
import "./chunk-K3KVBV5Y.js";
import {
  TuiAccordion,
  TuiAccordionDirective,
  TuiAccordionItem,
  TuiAccordionItemContent
} from "./chunk-BFZ7YZ3B.js";
import "./chunk-EQTN4WLW.js";
import "./chunk-QA7BIT47.js";
import "./chunk-GJ4XEV4D.js";
import "./chunk-AHSN3FX6.js";
import "./chunk-6UFFMEMO.js";
import "./chunk-2X7NNA2Q.js";
import {
  TUI_EDITOR_DEFAULT_TOOLS
} from "./chunk-AJIK2DF5.js";
import "./chunk-RDIT4KNC.js";
import "./chunk-Z64UTBP3.js";
import "./chunk-LBJNUVBM.js";
import {
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  JsonPipe,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-P325F6NW.js";
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-MN3TG6GQ.js";
import "./chunk-CJ7OSSQR.js";
import "./chunk-TPMK677Z.js";
import "./chunk-Q6WMBPZ3.js";
import "./chunk-IN2LCJCD.js";
import "./chunk-G3QJNC4B.js";
import "./chunk-U65UEYRO.js";
import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/toolbar/shared/examples/1/index.ts
var _c0 = () => [];
function Example_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, ctx_r4.group.value));
  }
}
var _Example = class _Example {
  constructor() {
    this.editorRef = null;
    this.builtInTools = TUI_EDITOR_DEFAULT_TOOLS;
    this.group = new FormGroup({
      header: new FormControl(""),
      main: new FormControl(""),
      footer: new FormControl("")
    });
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([provideTuiEditor({ image: true })])], decls: 15, vars: 11, consts: [["header", ""], ["main", ""], ["footer", ""], [3, "formGroup"], [1, "toolbar", 3, "editor", "tools"], ["formControlName", "header", 1, "editor", 3, "focusIn", "tools"], ["formControlName", "main", 1, "editor", 3, "focusIn", "tools"], ["formControlName", "footer", 1, "editor", 3, "focusIn", "tools"], [3, "rounded"], [3, "open"], ["tuiAccordionItemContent", ""]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 3);
    \u0275\u0275element(1, "tui-toolbar", 4);
    \u0275\u0275elementStart(2, "tui-editor", 5, 0);
    \u0275\u0275listener("focusIn", function Example_Template_tui_editor_focusIn_2_listener() {
      \u0275\u0275restoreView(_r1);
      const header_r2 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(ctx.editorRef = header_r2.editor);
    });
    \u0275\u0275text(4, " Header ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tui-editor", 6, 1);
    \u0275\u0275listener("focusIn", function Example_Template_tui_editor_focusIn_5_listener() {
      \u0275\u0275restoreView(_r1);
      const main_r3 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(ctx.editorRef = main_r3.editor);
    });
    \u0275\u0275text(7, " Main ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tui-editor", 7, 2);
    \u0275\u0275listener("focusIn", function Example_Template_tui_editor_focusIn_8_listener() {
      \u0275\u0275restoreView(_r1);
      const footer_r4 = \u0275\u0275reference(9);
      return \u0275\u0275resetView(ctx.editorRef = footer_r4.editor);
    });
    \u0275\u0275text(10, " Footer ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tui-accordion", 8)(12, "tui-accordion-item", 9);
    \u0275\u0275text(13, " Output ");
    \u0275\u0275template(14, Example_ng_template_14_Template, 4, 3, "ng-template", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.group);
    \u0275\u0275advance();
    \u0275\u0275property("editor", ctx.editorRef)("tools", ctx.builtInTools);
    \u0275\u0275advance();
    \u0275\u0275property("tools", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("tools", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("tools", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", false);
    \u0275\u0275advance();
    \u0275\u0275property("open", true);
  }
}, dependencies: [JsonPipe, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TuiAccordionItem, TuiAccordionDirective, TuiAccordionItemContent, TuiEditor, TuiToolbar], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\ntui-toolbar.toolbar[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 1;\n  inset-block-start: 0;\n  background: var(--tui-base-01);\n}\ntui-editor.editor[_ngcontent-%COMP%] {\n  min-block-size: auto;\n  border-radius: 0;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [JsonPipe, ReactiveFormsModule, TuiAccordion, TuiEditor, TuiToolbar], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideTuiEditor({ image: true })], template: '<form [formGroup]="group">\n    <tui-toolbar\n        class="toolbar"\n        [editor]="editorRef"\n        [tools]="builtInTools"\n    />\n\n    <tui-editor\n        #header\n        formControlName="header"\n        class="editor"\n        [tools]="[]"\n        (focusIn)="editorRef = header.editor"\n    >\n        Header\n    </tui-editor>\n\n    <tui-editor\n        #main\n        formControlName="main"\n        class="editor"\n        [tools]="[]"\n        (focusIn)="editorRef = main.editor"\n    >\n        Main\n    </tui-editor>\n\n    <tui-editor\n        #footer\n        formControlName="footer"\n        class="editor"\n        [tools]="[]"\n        (focusIn)="editorRef = footer.editor"\n    >\n        Footer\n    </tui-editor>\n</form>\n\n<tui-accordion [rounded]="false">\n    <tui-accordion-item [open]="true">\n        Output\n\n        <ng-template tuiAccordionItemContent>\n            <pre><code>{{ group.value|json }}</code></pre>\n        </ng-template>\n    </tui-accordion-item>\n</tui-accordion>\n', styles: ["/* projects/demo/src/app/pages/toolbar/shared/examples/1/index.less */\n:host {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\ntui-toolbar.toolbar {\n  position: sticky;\n  z-index: 1;\n  inset-block-start: 0;\n  background: var(--tui-base-01);\n}\ntui-editor.editor {\n  min-block-size: auto;\n  border-radius: 0;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/toolbar/shared/examples/1/index.ts", lineNumber: 20 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-EN4LJMRA.js.map
