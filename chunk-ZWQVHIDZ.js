import {
  UploadService,
  fileLoader
} from "./chunk-5DW3J3SB.js";
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
  TuiItem,
  TuiLoader
} from "./chunk-L4I5LKBQ.js";
import {
  WA_IS_E2E
} from "./chunk-DFGPXHHY.js";
import "./chunk-HCLCQICK.js";
import "./chunk-F67AGDSR.js";
import "./chunk-QVEY2JIK.js";
import "./chunk-DEMSUB7H.js";
import "./chunk-MAMGYOWB.js";
import {
  TUI_ATTACH_FILES_LOADER,
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
} from "./chunk-6FE6LACA.js";
import "./chunk-OT66PQDS.js";
import "./chunk-6E3PG6FD.js";
import "./chunk-GAZHX25U.js";
import "./chunk-QAKA6OWS.js";
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
//# sourceMappingURL=chunk-ZWQVHIDZ.js.map
