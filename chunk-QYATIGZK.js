import {
  TuiEditor,
  TuiEditorSocket,
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
import {
  TUI_IMAGE_EDITOR_OPTIONS
} from "./chunk-677D3BIO.js";
import "./chunk-RZFANQIX.js";
import "./chunk-WJGHI4OW.js";
import "./chunk-QCWL64LO.js";
import "./chunk-BSPC2OFF.js";
import "./chunk-DYHGQKM2.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-GQKSUSNW.js";
import {
  TuiItem
} from "./chunk-LZZ4FHRE.js";
import {
  WA_IS_E2E
} from "./chunk-HFC5F3F7.js";
import "./chunk-AUB4GJHI.js";
import {
  HttpClient,
  HttpClientModule
} from "./chunk-GXEQYQRI.js";
import "./chunk-PDU6H2KZ.js";
import "./chunk-RCCORHGG.js";
import "./chunk-VPRZGEPF.js";
import {
  TUI_IMAGE_LOADER,
  TuiEditorTool
} from "./chunk-Y3UWEWIG.js";
import "./chunk-ILGSV6CC.js";
import "./chunk-Y5QZTE4Q.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  takeUntilDestroyed
} from "./chunk-26IZDJS5.js";
import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  inject,
  isPlatformServer,
  setClassMetadata,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
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
} from "./chunk-BVXNDUDG.js";
import "./chunk-5Y77LQWP.js";
import "./chunk-KQS6TKY3.js";
import "./chunk-O23DE4M2.js";
import "./chunk-42BGUG2S.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/images/resizable/examples/1/index.ts
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
function Example_ng_container_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Too heavy html code ");
  }
}
function Example_ng_container_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.control.value);
  }
}
function Example_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Example_ng_container_9_Conditional_1_Template, 1, 0)(2, Example_ng_container_9_Conditional_2_Template, 2, 1, "span", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isE2E ? 1 : 2);
  }
}
var _Example = class _Example {
  constructor() {
    this.http = inject(HttpClient);
    this.imageLoader = inject(TUI_IMAGE_LOADER);
    this.platformId = inject(PLATFORM_ID);
    this.isE2E = inject(WA_IS_E2E);
    this.builtInTools = [
      TuiEditorTool.Undo,
      TuiEditorTool.Img,
      TuiEditorTool.Link
    ];
    this.control = new FormControl("");
    if (isPlatformServer(this.platformId)) {
      return;
    }
    this.http.get("assets/images/lumberjack.png", { responseType: "blob" }).pipe(switchMap((file) => this.imageLoader(file)), takeUntilDestroyed()).subscribe((src) => {
      this.control.patchValue(`
                    <img src="${src}" width="300" alt="" />
                    <p>Try to drag right border of image!</p>
                    <p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.
                `);
    });
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([
  provideTuiEditor({ image: true }),
  {
    provide: TUI_IMAGE_EDITOR_OPTIONS,
    useValue: {
      minWidth: 20,
      maxWidth: 800
    }
  }
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
  HttpClientModule,
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
      HttpClientModule,
      ReactiveFormsModule,
      TuiAccordion,
      TuiEditor,
      TuiEditorSocket,
      TuiExpand,
      TuiItem
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor({ image: true }),
      {
        provide: TUI_IMAGE_EDITOR_OPTIONS,
        useValue: {
          minWidth: 20,
          maxWidth: 800
        }
      }
    ], template: '<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n/>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            @if (isE2E) {\n                Too heavy html code\n            } @else {\n                <span class="code">{{ control.value }}</span>\n            }\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/images/resizable/examples/1/index.ts", lineNumber: 43 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-QYATIGZK.js.map
