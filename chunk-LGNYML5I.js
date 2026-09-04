import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-XRPCALX3.js";
import "./chunk-LLQOBDDE.js";
import "./chunk-MVBC5ZR2.js";
import "./chunk-47I7G6Y7.js";
import "./chunk-BOWF7HQR.js";
import "./chunk-6QS2JWS5.js";
import "./chunk-C6NKESJJ.js";
import "./chunk-F2D6DPIQ.js";
import "./chunk-HYWWOJV3.js";
import "./chunk-PKRVAYQI.js";
import "./chunk-HCMWLNIM.js";
import "./chunk-FYXXG3XV.js";
import "./chunk-MZL3EZZZ.js";
import "./chunk-2LKSBL3S.js";
import "./chunk-X7ZIJKJ6.js";
import "./chunk-C5GCXUTC.js";
import "./chunk-7T3RMNJM.js";
import {
  tuiRawLoad,
  tuiTryParseMarkdownCodeBlock
} from "./chunk-L6EDLEE3.js";
import "./chunk-7L5K3B25.js";
import "./chunk-YBDWIUBZ.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-K2DO5ILG.js";
import "./chunk-JFGCAXZF.js";
import "./chunk-2X7ECQEH.js";
import "./chunk-PWEWQNSM.js";
import "./chunk-PTWIXU7X.js";
import {
  TuiItem
} from "./chunk-7NVCN4ZH.js";
import {
  WA_IS_E2E
} from "./chunk-42UC7I5S.js";
import "./chunk-HSVQSQDL.js";
import "./chunk-LUTS7IYH.js";
import "./chunk-FFQ24UYZ.js";
import "./chunk-TGZGAZ7H.js";
import "./chunk-OBQL3SNH.js";
import "./chunk-OY4TWC3R.js";
import {
  TuiEditorTool
} from "./chunk-V4CTZRCG.js";
import "./chunk-NWD2EXSF.js";
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
} from "./chunk-WPT3CLAO.js";
import "./chunk-KLHKKEFX.js";
import "./chunk-CL4AI4RS.js";
import "./chunk-GMZOB5RC.js";
import "./chunk-RDCPDP3O.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/highlight/code/examples/1/index.ts
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
    this.builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Code];
    this.isE2E = inject(WA_IS_E2E);
    this.control = new FormControl("");
  }
  ngOnInit() {
    void tuiRawLoad(import("./chunk-O4DLIAT4.js")).then((raw) => {
      const [code] = tuiTryParseMarkdownCodeBlock(raw);
      this.control.patchValue(code ?? null);
    });
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([provideTuiEditor()])], decls: 10, vars: 5, consts: [[1, "editor", 3, "formControl", "tools"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
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
], styles: ['\n\n@font-face {\n  font-family: "Monaspace";\n  src: url(https://assets.codepen.io/2585/MonaspaceKrypton-SyntaxHighlighter-Regular.woff2) format("woff2");\n}\n@font-palette-values --kung-fury {\n  @font-palette-values --kung-fury {\n    font-family: Monaspace, sans-serif;\n    override-colors:\n      0 hsl(188, 100%, 75%),\n      1 hsl(250, 100%, 80%),\n      2 hsl(188, 100%, 75%),\n      3 hsl(188, 100%, 75%),\n      4 hsl(250, 100%, 80%),\n      5 hsl(210, 40%, 98%),\n      6 hsl(210, 40%, 80%),\n      7 hsl(300, 100%, 80%);\n  }\n}\n[_nghost-%COMP%]     .tui-editor-socket pre:has(code[class=language-ts]) {\n  background: var(--tui-background-accent-opposite-hover);\n  min-inline-size: 0;\n  overflow-x: auto;\n  padding: 2ch;\n}\n[_nghost-%COMP%]     code[class=language-ts] {\n  font-family: "Monaspace", monospace;\n  font-palette: --kung-fury;\n  color: var(--tui-background-base);\n  text-shadow: none;\n}\n/*# sourceMappingURL=index.css.map */'], changeDetection: 0 });
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
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideTuiEditor()], template: '<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n/>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n', styles: ['/* projects/demo/src/app/pages/highlight/code/examples/1/index.less */\n@font-face {\n  font-family: "Monaspace";\n  src: url(https://assets.codepen.io/2585/MonaspaceKrypton-SyntaxHighlighter-Regular.woff2) format("woff2");\n}\n@font-palette-values --kung-fury {\n  @font-palette-values --kung-fury {\n    font-family: Monaspace, sans-serif;\n    override-colors:\n      0 hsl(188, 100%, 75%),\n      1 hsl(250, 100%, 80%),\n      2 hsl(188, 100%, 75%),\n      3 hsl(188, 100%, 75%),\n      4 hsl(250, 100%, 80%),\n      5 hsl(210, 40%, 98%),\n      6 hsl(210, 40%, 80%),\n      7 hsl(300, 100%, 80%);\n  }\n}\n:host ::ng-deep .tui-editor-socket pre:has(code[class=language-ts]) {\n  background: var(--tui-background-accent-opposite-hover);\n  min-inline-size: 0;\n  overflow-x: auto;\n  padding: 2ch;\n}\n:host ::ng-deep code[class=language-ts] {\n  font-family: "Monaspace", monospace;\n  font-palette: --kung-fury;\n  color: var(--tui-background-base);\n  text-shadow: none;\n}\n/*# sourceMappingURL=index.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/highlight/code/examples/1/index.ts", lineNumber: 29 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-LGNYML5I.js.map
