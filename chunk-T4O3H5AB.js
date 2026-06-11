import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-NSTTLCZN.js";
import "./chunk-77Q7E6KR.js";
import "./chunk-ON6CMRJE.js";
import "./chunk-CGQ7SF5X.js";
import "./chunk-K4VHZDJ3.js";
import "./chunk-BMQKW5MW.js";
import "./chunk-AJXXSTGP.js";
import "./chunk-PZFOFBEJ.js";
import "./chunk-T7ACE4S4.js";
import "./chunk-DFL5NIEH.js";
import "./chunk-YCZ4XIMS.js";
import "./chunk-ZFBS4UHE.js";
import "./chunk-E2MCQ2GA.js";
import "./chunk-ZRZNAMTC.js";
import "./chunk-2EOU6FUY.js";
import "./chunk-PQORXA7M.js";
import "./chunk-3N57KBZI.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-LWXG2KY6.js";
import {
  TuiItem
} from "./chunk-L4I5LKBQ.js";
import {
  TuiButton,
  WA_IS_E2E
} from "./chunk-DFGPXHHY.js";
import "./chunk-HCLCQICK.js";
import "./chunk-F67AGDSR.js";
import "./chunk-QVEY2JIK.js";
import "./chunk-DEMSUB7H.js";
import "./chunk-MAMGYOWB.js";
import {
  TuiEditorTool
} from "./chunk-HPI4FTRE.js";
import "./chunk-CDRWMLUY.js";
import "./chunk-5464WHRF.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-YZQ2AVZQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-6FE6LACA.js";
import "./chunk-OT66PQDS.js";
import "./chunk-6E3PG6FD.js";
import "./chunk-GAZHX25U.js";
import "./chunk-QAKA6OWS.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/highlight/text/examples/1/index.ts
function Example_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "tui-editor-socket", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("content", ctx_r0.control.value);
  }
}
function Example_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 7);
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
    this.wysiwyg = viewChild.required(TuiEditor);
    this.isE2E = inject(WA_IS_E2E);
    this.builtInTools = [TuiEditorTool.Undo];
    this.control = new FormControl(`
        <p>This isn\u2019t highlighted.</p>
        <p>
            <mark data-color="#e1d0fb">Grammar</mark>
            <mark data-color="#c8eefc">can</mark> be tricky,
            <mark style="background-color: #fae498">especially</mark>
            for the <mark>uninitiated</mark>
        </p>
        `);
  }
  toggleHighlight() {
    this.wysiwyg().editor?.getOriginTiptapEditor()?.commands.toggleHighlight({ color: "#c8eefc" });
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], viewQuery: function Example_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.wysiwyg, TuiEditor, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275ProvidersFeature([
  provideTuiEditor({ textAlign: { types: ["heading", "paragraph"] } }, async () => import("./chunk-PQV5LT5X.js").then(({ Highlight }) => Highlight.configure({
    multicolor: true,
    HTMLAttributes: { class: "marked" }
  })))
])], decls: 13, vars: 5, consts: [[1, "editor", 3, "formControl", "tools"], ["ngProjectAs", "tools", 5, ["tools"]], ["appearance", "icon", "iconStart", "@tui.droplets", "size", "s", "tuiIconButton", "", "tuiItem", "", "tuiToolbarTool", "", "type", "button", 3, "click"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-editor", 0);
    \u0275\u0275elementContainerStart(1, 1);
    \u0275\u0275elementStart(2, "button", 2);
    \u0275\u0275listener("click", function Example_Template_button_click_2_listener() {
      return ctx.toggleHighlight();
    });
    \u0275\u0275text(3, " Toggle highlight ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "tui-accordion", 3)(5, "button", 4);
    \u0275\u0275text(6, "HTML");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "tui-expand");
    \u0275\u0275template(8, Example_ng_container_8_Template, 2, 1, "ng-container", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 4);
    \u0275\u0275text(10, "Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "tui-expand");
    \u0275\u0275template(12, Example_ng_container_12_Template, 3, 1, "ng-container", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools);
    \u0275\u0275advance(4);
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
  TuiButton,
  TuiEditor,
  TuiEditorSocket
], styles: ["\n\n  .marked {\n  padding: 0.3125rem;\n  border-radius: 0.3125rem;\n  margin: 0 0.3125rem;\n  box-shadow: 0 0 0 0.125rem rgba(0, 123, 255, 0.25);\n  line-height: 2.6rem;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [
      ReactiveFormsModule,
      TuiAccordion,
      TuiButton,
      TuiEditor,
      TuiEditorSocket,
      TuiExpand,
      TuiItem
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor({ textAlign: { types: ["heading", "paragraph"] } }, async () => import("./chunk-PQV5LT5X.js").then(({ Highlight }) => Highlight.configure({
        multicolor: true,
        HTMLAttributes: { class: "marked" }
      })))
    ], template: '<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    <ng-container ngProjectAs="tools">\n        <button\n            appearance="icon"\n            iconStart="@tui.droplets"\n            size="s"\n            tuiIconButton\n            tuiItem\n            tuiToolbarTool\n            type="button"\n            (click)="toggleHighlight()"\n        >\n            Toggle highlight\n        </button>\n    </ng-container>\n</tui-editor>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n', styles: ["/* projects/demo/src/app/pages/highlight/text/examples/1/index.less */\n::ng-deep .marked {\n  padding: 0.3125rem;\n  border-radius: 0.3125rem;\n  margin: 0 0.3125rem;\n  box-shadow: 0 0 0 0.125rem rgba(0, 123, 255, 0.25);\n  line-height: 2.6rem;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/highlight/text/examples/1/index.ts", lineNumber: 38 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-T4O3H5AB.js.map
