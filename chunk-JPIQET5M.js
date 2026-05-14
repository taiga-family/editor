import {
  TuiEditor,
  TuiToolbar,
  provideTuiEditor
} from "./chunk-5OF5XCWJ.js";
import "./chunk-63UAFU6U.js";
import "./chunk-2ES6PUYZ.js";
import "./chunk-I7X6V4CT.js";
import "./chunk-75FDNOQF.js";
import "./chunk-DSHVBE6A.js";
import "./chunk-IHVGLZ2Q.js";
import "./chunk-NXH7MFHV.js";
import "./chunk-ATATJQXQ.js";
import "./chunk-R53H6MIJ.js";
import "./chunk-IO47ZSZ5.js";
import "./chunk-IY3TMNXS.js";
import "./chunk-RCTC7M4X.js";
import "./chunk-GMAQM436.js";
import "./chunk-CCLNU5WX.js";
import "./chunk-OKCG6U2V.js";
import "./chunk-KTNJ5Y6T.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-ODER4NNH.js";
import "./chunk-QZTLTFCW.js";
import "./chunk-FM47Y63S.js";
import "./chunk-R3AGXJOZ.js";
import "./chunk-YQZG6ATW.js";
import "./chunk-PWR5JH2U.js";
import "./chunk-ANOJQ2S3.js";
import "./chunk-IK5IBJNP.js";
import {
  TUI_EDITOR_DEFAULT_TOOLS
} from "./chunk-AFITYD3E.js";
import "./chunk-YZMZTTW5.js";
import "./chunk-4K4DVCQ3.js";
import {
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-MRTTS2CM.js";
import {
  ChangeDetectionStrategy,
  Component,
  JsonPipe,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-NS3244ZP.js";
import "./chunk-3YAE2G2V.js";
import "./chunk-G7N6NM5P.js";
import "./chunk-AE53DBVW.js";
import "./chunk-77B4UB4S.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/toolbar/shared/examples/1/index.ts
var _c0 = () => [];
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
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([provideTuiEditor({ image: true })])], decls: 19, vars: 13, consts: [["header", ""], ["main", ""], ["footer", ""], [3, "formGroup"], [1, "toolbar", 3, "editor", "tools"], ["formControlName", "header", 1, "editor", 3, "focusIn", "tools"], ["formControlName", "main", 1, "editor", 3, "focusIn", "tools"], ["formControlName", "footer", 1, "editor", 3, "focusIn", "tools"], [3, "tuiAccordion"]], template: function Example_Template(rf, ctx) {
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
    \u0275\u0275elementStart(11, "tui-accordion")(12, "button", 8);
    \u0275\u0275text(13, "Output");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "tui-expand")(15, "pre")(16, "code");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "json");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.group);
    \u0275\u0275advance();
    \u0275\u0275property("editor", ctx.editorRef)("tools", ctx.builtInTools);
    \u0275\u0275advance();
    \u0275\u0275property("tools", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("tools", \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("tools", \u0275\u0275pureFunction0(12, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275property("tuiAccordion", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 8, ctx.group.value));
  }
}, dependencies: [JsonPipe, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TuiAccordionComponent, TuiAccordionDirective, TuiExpand, TuiEditor, TuiToolbar], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\ntui-toolbar.toolbar[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 1;\n  inset-block-start: 0;\n  background: var(--tui-base-01);\n}\ntui-editor.editor[_ngcontent-%COMP%] {\n  min-block-size: auto;\n  border-radius: 0;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [JsonPipe, ReactiveFormsModule, TuiAccordion, TuiEditor, TuiToolbar], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideTuiEditor({ image: true })], template: '<form [formGroup]="group">\n    <tui-toolbar\n        class="toolbar"\n        [editor]="editorRef"\n        [tools]="builtInTools"\n    />\n\n    <tui-editor\n        #header\n        formControlName="header"\n        class="editor"\n        [tools]="[]"\n        (focusIn)="editorRef = header.editor"\n    >\n        Header\n    </tui-editor>\n\n    <tui-editor\n        #main\n        formControlName="main"\n        class="editor"\n        [tools]="[]"\n        (focusIn)="editorRef = main.editor"\n    >\n        Main\n    </tui-editor>\n\n    <tui-editor\n        #footer\n        formControlName="footer"\n        class="editor"\n        [tools]="[]"\n        (focusIn)="editorRef = footer.editor"\n    >\n        Footer\n    </tui-editor>\n</form>\n\n<tui-accordion>\n    <button [tuiAccordion]="true">Output</button>\n\n    <tui-expand>\n        <pre><code>{{ group.value|json }}</code></pre>\n    </tui-expand>\n</tui-accordion>\n', styles: ["/* projects/demo/src/app/pages/toolbar/shared/examples/1/index.less */\n:host {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\ntui-toolbar.toolbar {\n  position: sticky;\n  z-index: 1;\n  inset-block-start: 0;\n  background: var(--tui-base-01);\n}\ntui-editor.editor {\n  min-block-size: auto;\n  border-radius: 0;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/toolbar/shared/examples/1/index.ts", lineNumber: 20 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-JPIQET5M.js.map
