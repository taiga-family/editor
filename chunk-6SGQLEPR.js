import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-3OIY7UB3.js";
import "./chunk-OKZHXUP7.js";
import "./chunk-SP2RLMJ3.js";
import "./chunk-EINUTI2P.js";
import "./chunk-3FE37GZG.js";
import "./chunk-JJURWGWL.js";
import "./chunk-D77NNQR5.js";
import "./chunk-J54AAGPK.js";
import "./chunk-66PKXWTB.js";
import "./chunk-HR6RGQTF.js";
import "./chunk-U5XPJJUG.js";
import "./chunk-Z4MMAAMA.js";
import "./chunk-AODASGXZ.js";
import "./chunk-IDGNFT5E.js";
import "./chunk-GJIKFFCQ.js";
import "./chunk-HCNAOYP7.js";
import "./chunk-3YPDJXUW.js";
import {
  tuiRawLoad,
  tuiTryParseMarkdownCodeBlock
} from "./chunk-2A3N6FXA.js";
import "./chunk-ZAIJXHNT.js";
import "./chunk-BZVHQ5IJ.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-MDKCYD7T.js";
import "./chunk-GAIAKNWE.js";
import "./chunk-AXQ3T7JW.js";
import "./chunk-S4XH5VPI.js";
import "./chunk-DA6ZWNIU.js";
import {
  TuiItem
} from "./chunk-5VU3JYWR.js";
import {
  WA_IS_E2E
} from "./chunk-EHNT4D2S.js";
import "./chunk-DDZQRXHH.js";
import "./chunk-3ZHEQMJ3.js";
import "./chunk-LZR2XIKZ.js";
import "./chunk-5XN4VSG5.js";
import "./chunk-VW5TSD5Y.js";
import "./chunk-6VV32JRO.js";
import {
  TuiEditorTool
} from "./chunk-GFIQ2BCG.js";
import "./chunk-L5FGR7FL.js";
import "./chunk-G7J7ZFQZ.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-CRKP42UQ.js";
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
} from "./chunk-F26JVLG2.js";
import "./chunk-46H3G724.js";
import "./chunk-G6LPKBY6.js";
import "./chunk-JCOA2MEW.js";
import "./chunk-QYO3DBNN.js";
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
//# sourceMappingURL=chunk-6SGQLEPR.js.map
