import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-CBPMAXEE.js";
import "./chunk-APPRQDZ6.js";
import "./chunk-NY3P6LCX.js";
import "./chunk-ATRNTCHB.js";
import "./chunk-OUJFEBT7.js";
import "./chunk-IQ2YIPVE.js";
import "./chunk-IHVGLZ2Q.js";
import "./chunk-UZUTAX7N.js";
import "./chunk-4JJP4NFY.js";
import "./chunk-2ES6PUYZ.js";
import "./chunk-I7X6V4CT.js";
import "./chunk-75FDNOQF.js";
import "./chunk-DSHVBE6A.js";
import "./chunk-R44URWSU.js";
import "./chunk-4MAQMUPR.js";
import "./chunk-EDVSY6FW.js";
import "./chunk-4QU75GUP.js";
import "./chunk-IYMKP2BP.js";
import "./chunk-NEXVMHMK.js";
import "./chunk-HRD5QY3D.js";
import "./chunk-2RONQDX7.js";
import "./chunk-GMAQM436.js";
import "./chunk-Z4GBAGI2.js";
import "./chunk-I4XUZ4DJ.js";
import "./chunk-KTNJ5Y6T.js";
import "./chunk-3YAE2G2V.js";
import "./chunk-R53H6MIJ.js";
import "./chunk-25DFAGTP.js";
import "./chunk-L66R7ELK.js";
import "./chunk-Y4YR6BCP.js";
import "./chunk-QOAY4QUD.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-U2A4WWTO.js";
import {
  TuiItem
} from "./chunk-FKOUSXA3.js";
import {
  TuiButton,
  WA_IS_E2E
} from "./chunk-6XV2X7BK.js";
import "./chunk-R3NXKXZ4.js";
import "./chunk-ZBWOCD7G.js";
import "./chunk-PWR5JH2U.js";
import "./chunk-6Y7W3GAR.js";
import "./chunk-IK5IBJNP.js";
import {
  TuiEditorTool
} from "./chunk-PZFEFT3A.js";
import "./chunk-PU5DVQVI.js";
import "./chunk-5KWHOROR.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-7VRO2DFS.js";
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
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
} from "./chunk-WNG4JUA7.js";
import "./chunk-G7N6NM5P.js";
import "./chunk-AE53DBVW.js";
import "./chunk-NXH7MFHV.js";
import "./chunk-77B4UB4S.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/custom-tool/span/examples/1/index.ts
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
        <p>
            Here is some text with a
            <span class="comment-highlight comment-highlight--active" data-thread-id="635">
                span thread
            </span>
        </p>
    `);
  }
  paint() {
    const id = Math.floor(Math.random() * 100) + 1;
    const tiptap = this.wysiwyg().editor?.getOriginTiptapEditor();
    tiptap?.chain().focus().setMark("threadSpan", {
      class: "comment-highlight",
      "data-thread-id": id
    }).run();
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
  provideTuiEditor(async () => import("./chunk-FWXLVZD6.js").then(({ ThreadSpan }) => ThreadSpan))
])], decls: 13, vars: 5, consts: [[3, "formControl", "tools"], ["ngProjectAs", "tools", 5, ["tools"]], ["appearance", "icon", "iconStart", "@tui.paintbrush-vertical", "size", "s", "tuiIconButton", "", "tuiToolbarTool", "", "type", "button", 3, "click"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-editor", 0);
    \u0275\u0275elementContainerStart(1, 1);
    \u0275\u0275elementStart(2, "button", 2);
    \u0275\u0275listener("click", function Example_Template_button_click_2_listener() {
      return ctx.paint();
    });
    \u0275\u0275text(3, " Select ");
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
], styles: ["/* projects/demo/src/app/pages/custom-tool/span/examples/1/index.less */\n.comment-highlight {\n  background-color: #ff0;\n}\n/*# sourceMappingURL=index.css.map */\n"], encapsulation: 2, changeDetection: 0 });
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
    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor(async () => import("./chunk-FWXLVZD6.js").then(({ ThreadSpan }) => ThreadSpan))
    ], template: '<tui-editor\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    <ng-container ngProjectAs="tools">\n        <button\n            appearance="icon"\n            iconStart="@tui.paintbrush-vertical"\n            size="s"\n            tuiIconButton\n            tuiToolbarTool\n            type="button"\n            (click)="paint()"\n        >\n            Select\n        </button>\n    </ng-container>\n</tui-editor>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n', styles: ["/* projects/demo/src/app/pages/custom-tool/span/examples/1/index.less */\n.comment-highlight {\n  background-color: #ff0;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/custom-tool/span/examples/1/index.ts", lineNumber: 40 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-GEZUL6LL.js.map
