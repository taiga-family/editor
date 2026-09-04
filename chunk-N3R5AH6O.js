import {
  UploadService,
  fileLoader
} from "./chunk-3XYB5D3K.js";
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
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-K2DO5ILG.js";
import {
  TuiItem,
  TuiLoader
} from "./chunk-7NVCN4ZH.js";
import {
  WA_IS_E2E
} from "./chunk-42UC7I5S.js";
import "./chunk-HSVQSQDL.js";
import "./chunk-FFQ24UYZ.js";
import "./chunk-TGZGAZ7H.js";
import "./chunk-OBQL3SNH.js";
import "./chunk-OY4TWC3R.js";
import {
  TUI_ATTACH_FILES_LOADER,
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
  AsyncPipe,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-WPT3CLAO.js";
import "./chunk-KLHKKEFX.js";
import "./chunk-CL4AI4RS.js";
import "./chunk-GMZOB5RC.js";
import "./chunk-RDCPDP3O.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/upload-files/examples/1/index.ts
function Example_ng_container_7_Template(rf, ctx) {
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
function Example_ng_container_11_Template(rf, ctx) {
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
    this.wysiwyg = viewChild.required(TuiEditor);
    this.uploadService = inject(UploadService);
    this.isE2E = inject(WA_IS_E2E);
    this.builtInTools = [
      TuiEditorTool.Undo,
      TuiEditorTool.Link,
      TuiEditorTool.Attach
    ];
    this.control = new FormControl("");
  }
  attach(files) {
    files.forEach((file) => this.wysiwyg().editor?.setFileLink(file));
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
  provideTuiEditor({ link: { protocols: ["blob"] } }),
  UploadService,
  {
    provide: TUI_ATTACH_FILES_LOADER,
    deps: [UploadService],
    useFactory: fileLoader
  }
])], decls: 12, vars: 8, consts: [[3, "loading"], [1, "editor", 3, "fileAttached", "formControl", "tools"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-loader", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementStart(2, "tui-editor", 1);
    \u0275\u0275listener("fileAttached", function Example_Template_tui_editor_fileAttached_2_listener($event) {
      return ctx.attach($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "tui-accordion", 2)(4, "button", 3);
    \u0275\u0275text(5, "HTML");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "tui-expand");
    \u0275\u0275template(7, Example_ng_container_7_Template, 2, 1, "ng-container", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 3);
    \u0275\u0275text(9, "Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "tui-expand");
    \u0275\u0275template(11, Example_ng_container_11_Template, 3, 1, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("loading", !!\u0275\u0275pipeBind1(1, 6, ctx.uploadService.loading$));
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools);
    \u0275\u0275advance();
    \u0275\u0275property("closeOthers", false);
    \u0275\u0275advance();
    \u0275\u0275property("tuiAccordion", ctx.isE2E);
    \u0275\u0275advance(4);
    \u0275\u0275property("tuiAccordion", ctx.isE2E);
  }
}, dependencies: [
  AsyncPipe,
  ReactiveFormsModule,
  NgControlStatus,
  FormControlDirective,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand,
  TuiItem,
  TuiEditor,
  TuiEditorSocket,
  TuiLoader
], styles: ["\n\n.editor[_ngcontent-%COMP%]     .tui-editor-socket .ProseMirror {\n  min-block-size: 10rem;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [
      AsyncPipe,
      ReactiveFormsModule,
      TuiAccordion,
      TuiEditor,
      TuiEditorSocket,
      TuiExpand,
      TuiItem,
      TuiLoader
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor({ link: { protocols: ["blob"] } }),
      UploadService,
      {
        provide: TUI_ATTACH_FILES_LOADER,
        deps: [UploadService],
        useFactory: fileLoader
      }
    ], template: '<tui-loader [loading]="!!(uploadService.loading$ | async)">\n    <tui-editor\n        class="editor"\n        [formControl]="control"\n        [tools]="builtInTools"\n        (fileAttached)="attach($event)"\n    />\n</tui-loader>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n', styles: ["/* projects/demo/src/app/pages/upload-files/examples/1/index.less */\n.editor ::ng-deep .tui-editor-socket .ProseMirror {\n  min-block-size: 10rem;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/upload-files/examples/1/index.ts", lineNumber: 44 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-N3R5AH6O.js.map
