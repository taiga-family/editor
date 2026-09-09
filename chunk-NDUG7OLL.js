import {
  TuiEditor,
  TuiEditorSocket,
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
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-K2DO5ILG.js";
import {
  TuiItem
} from "./chunk-7NVCN4ZH.js";
import {
  WA_IS_E2E
} from "./chunk-42UC7I5S.js";
import "./chunk-HSVQSQDL.js";
import "./chunk-FFQ24UYZ.js";
import "./chunk-PDU6H2KZ.js";
import "./chunk-VLIOI2SV.js";
import "./chunk-VPRZGEPF.js";
import {
  provideTuiEditorOptions
} from "./chunk-C7Z7VG7M.js";
import "./chunk-L6H6ZKD6.js";
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
  DOCUMENT,
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
import "./chunk-5Y77LQWP.js";
import "./chunk-KQS6TKY3.js";
import "./chunk-O23DE4M2.js";
import "./chunk-42BGUG2S.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/clipboard-paste/examples/1/index.ts
function Example_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "tui-editor-socket", 5);
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
    \u0275\u0275elementStart(1, "span", 6);
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
    this.isE2E = inject(WA_IS_E2E);
    this.control = new FormControl("");
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([
  provideTuiEditor(),
  provideTuiEditorOptions(() => {
    const doc = inject(DOCUMENT);
    return {
      editorProps: {
        transformPastedHTML(html) {
          const div = doc.createElement("div");
          div.innerHTML = html;
          div.querySelectorAll("[style]").forEach((el) => el.removeAttribute("style"));
          return div.innerHTML;
        }
      }
    };
  })
])], decls: 13, vars: 4, consts: [[2, "background-color", "var(--tui-background-accent-2-hover)", "color", "var(--tui-background-base)"], [1, "editor", 3, "formControl"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1, " Select and copy me, and then paste into the editor.\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tui-editor", 1);
    \u0275\u0275text(3, " Placeholder\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "tui-accordion", 2)(5, "button", 3);
    \u0275\u0275text(6, "HTML");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "tui-expand");
    \u0275\u0275template(8, Example_ng_container_8_Template, 2, 1, "ng-container", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 3);
    \u0275\u0275text(10, "Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "tui-expand");
    \u0275\u0275template(12, Example_ng_container_12_Template, 3, 1, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx.control);
    \u0275\u0275advance(2);
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
], encapsulation: 2, changeDetection: 0 });
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
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor(),
      provideTuiEditorOptions(() => {
        const doc = inject(DOCUMENT);
        return {
          editorProps: {
            transformPastedHTML(html) {
              const div = doc.createElement("div");
              div.innerHTML = html;
              div.querySelectorAll("[style]").forEach((el) => el.removeAttribute("style"));
              return div.innerHTML;
            }
          }
        };
      })
    ], template: '<p style="background-color: var(--tui-background-accent-2-hover); color: var(--tui-background-base)">\n    Select and copy me, and then paste into the editor.\n</p>\n\n<tui-editor\n    class="editor"\n    [formControl]="control"\n>\n    Placeholder\n</tui-editor>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/clipboard-paste/examples/1/index.ts", lineNumber: 48 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-NDUG7OLL.js.map
