import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-W6GQCH54.js";
import "./chunk-6MP7IPJW.js";
import "./chunk-CQCVA6IH.js";
import "./chunk-35INNUXK.js";
import "./chunk-HEWXKLLS.js";
import "./chunk-FSBD2B32.js";
import "./chunk-MOZWJJCS.js";
import "./chunk-XK45D6UZ.js";
import "./chunk-NGQVSVIB.js";
import "./chunk-DD32KBA7.js";
import "./chunk-C4PFMQ72.js";
import "./chunk-LT7X7D6S.js";
import "./chunk-O7DJUOJG.js";
import "./chunk-VV3D2HHM.js";
import "./chunk-2MSSL2IN.js";
import "./chunk-MO4NYBTB.js";
import "./chunk-W4U25YU5.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-UOROJ4OO.js";
import {
  TuiItem
} from "./chunk-D3YV7ZHS.js";
import {
  WA_IS_E2E
} from "./chunk-NLNCZRCI.js";
import "./chunk-LPBSAZLJ.js";
import "./chunk-DMAZJOQQ.js";
import "./chunk-SID5SRJX.js";
import "./chunk-2SAJKKTH.js";
import "./chunk-QD3ZUMKY.js";
import {
  TuiEditorTool
} from "./chunk-MKSJ7GZB.js";
import "./chunk-IKZS23CJ.js";
import "./chunk-EMEGSUC4.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-5BSJ6YPL.js";
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
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
} from "./chunk-KFKFA6WT.js";
import "./chunk-YANEK5OP.js";
import "./chunk-JTJXQAN7.js";
import "./chunk-PSTGTYGJ.js";
import "./chunk-LXNO5FKD.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/focus/examples/1/index.ts
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
    this.builtInTools = [
      TuiEditorTool.Undo,
      TuiEditorTool.Img,
      TuiEditorTool.Link,
      TuiEditorTool.Anchor
    ];
    this.isE2E = inject(WA_IS_E2E);
    this.control = new FormControl('<img src="./assets/images/piece-and-war.jpg" width="732" alt="" title="" /><p><strong>WYSIWYG</strong> (<em>What you see is what you get</em>) \u2014 <u>Rich Text Editor</u> for using with Angular <sup>forms.</sup></p><h1>Heading</h1><p>Lorem ipsum dolor sit amet consectetur <a target="_blank" rel="noopener noreferrer nofollow" href="http://taiga-ui.dev">adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p><blockquote><p> ad minim veniam, quis nostrud exercitation <span style="color: rgb(196, 11, 8); background-color: rgb(221, 228, 237)">ullamco</span>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></blockquote><p style="text-align: right">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><pre><code>class EditorExample {}</code></pre><table><tbody><tr><th colspan="1" rowspan="1"><p></p></th><th colspan="1" rowspan="1"><p>Free</p></th><th colspan="1" rowspan="1"><p>Pro</p></th></tr><tr><td colspan="1" rowspan="1"><p>24/7 support</p></td><td style="background: rgb(255, 221, 41)" colspan="1" rowspan="1"><p>+</p></td><td style="background: rgb(57, 181, 77)" colspan="1" rowspan="1"><p>+</p></td></tr></tbody></table><p style="text-align: center"><code>Code in text</code></p>');
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([
  provideTuiEditor({
    details: true,
    detailsSummary: true,
    detailsContent: true,
    image: true
  }, async () => import("./chunk-WH5UPDBT.js").then(({ Focus }) => Focus.configure({
    className: "has-focus",
    /**
     * @description:
     * Apply the class to 'all', the 'shallowest' or the 'deepest' node.
     *
     * Default: 'all'
     */
    mode: "shallowest"
  })))
])], decls: 10, vars: 5, consts: [[1, "editor", 3, "formControl", "tools"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
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
], styles: ["/* projects/demo/src/app/pages/focus/examples/1/index.less */\n.has-focus,\n.has-focus.ProseMirror-selectednode img {\n  outline: none !important;\n  box-shadow: 0 0 0 0.1875rem #68cef8;\n}\n/*# sourceMappingURL=index.css.map */\n"], encapsulation: 2, changeDetection: 0 });
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
    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor({
        details: true,
        detailsSummary: true,
        detailsContent: true,
        image: true
      }, async () => import("./chunk-WH5UPDBT.js").then(({ Focus }) => Focus.configure({
        className: "has-focus",
        /**
         * @description:
         * Apply the class to 'all', the 'shallowest' or the 'deepest' node.
         *
         * Default: 'all'
         */
        mode: "shallowest"
      })))
    ], template: '<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n/>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n', styles: ["/* projects/demo/src/app/pages/focus/examples/1/index.less */\n.has-focus,\n.has-focus.ProseMirror-selectednode img {\n  outline: none !important;\n  box-shadow: 0 0 0 0.1875rem #68cef8;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/focus/examples/1/index.ts", lineNumber: 56 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-HR6GZD3J.js.map
