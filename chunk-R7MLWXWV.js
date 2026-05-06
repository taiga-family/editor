import {
  UploadService,
  fileLoader
} from "./chunk-UYFGBZX3.js";
import {
  TuiEditor,
  TuiToolbar,
  provideTuiEditor
} from "./chunk-ULLNWCHK.js";
import "./chunk-WCJAXZXO.js";
import "./chunk-CD3ZDPWT.js";
import "./chunk-J5UAEM45.js";
import "./chunk-ZB2SK7NT.js";
import "./chunk-KFJ6GJTL.js";
import "./chunk-PJJ4EG5U.js";
import "./chunk-M6TSJ4NT.js";
import "./chunk-LR6MFXG2.js";
import "./chunk-N3XZP6Z7.js";
import "./chunk-6JDH2PV3.js";
import "./chunk-X7NG6AFM.js";
import "./chunk-7QK2CPSE.js";
import "./chunk-WBHAP4JC.js";
import "./chunk-X3PSOWX2.js";
import "./chunk-E3TKWIMT.js";
import "./chunk-HSMAYE7Z.js";
import "./chunk-ARYGUNWN.js";
import "./chunk-3L6ILX4W.js";
import "./chunk-K3KVBV5Y.js";
import "./chunk-BAXR2EDS.js";
import "./chunk-3MA5NXQZ.js";
import "./chunk-IG5NUA4T.js";
import "./chunk-LPOWL4X5.js";
import "./chunk-RURN6JQY.js";
import "./chunk-QOV567V2.js";
import "./chunk-SB5PRQWC.js";
import "./chunk-G3QJNC4B.js";
import "./chunk-7CX5NSUY.js";
import "./chunk-RS2S3DLU.js";
import "./chunk-ZL2NLOVI.js";
import "./chunk-WQSN4Q62.js";
import "./chunk-F47ZTIMH.js";
import "./chunk-H6B6ZN6C.js";
import "./chunk-VCEUECWR.js";
import "./chunk-EHYODUHD.js";
import {
  TuiLoader
} from "./chunk-TO6IF4KK.js";
import "./chunk-2LK3XWNF.js";
import "./chunk-UK3D2IJN.js";
import "./chunk-LTRKP6XS.js";
import "./chunk-AHSN3FX6.js";
import "./chunk-OR7YRS4P.js";
import "./chunk-2X7NNA2Q.js";
import {
  TUI_ATTACH_FILES_LOADER,
  TuiEditorTool
} from "./chunk-WUF6K6RJ.js";
import "./chunk-WLOLI4OQ.js";
import "./chunk-UO32WQJY.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-XQBFNBOU.js";
import {
  AsyncPipe,
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
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
  ɵɵrestoreView
} from "./chunk-QZKNXBAU.js";
import "./chunk-TPMK677Z.js";
import "./chunk-Q6WMBPZ3.js";
import "./chunk-IN2LCJCD.js";
import "./chunk-U65UEYRO.js";
import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/upload-files/examples/2/index.ts
var _c0 = () => [];
var _Example = class _Example {
  constructor() {
    this.editorRef = null;
    this.uploadService = inject(UploadService);
    this.builtInTools = [
      TuiEditorTool.Undo,
      TuiEditorTool.Link,
      TuiEditorTool.Attach
    ];
    this.control = new FormControl("");
  }
  attach(files) {
    files.forEach((file) => this.editorRef?.setFileLink(file));
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([
  provideTuiEditor({ link: { protocols: ["blob"] } }),
  UploadService,
  {
    provide: TUI_ATTACH_FILES_LOADER,
    deps: [UploadService],
    useFactory: fileLoader
  }
])], decls: 5, vars: 8, consts: [["editorComponent", ""], [1, "toolbar", 3, "fileAttached", "editor", "tools"], [3, "loading"], [1, "editor", 3, "focusIn", "formControl", "tools"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tui-toolbar", 1);
    \u0275\u0275listener("fileAttached", function Example_Template_tui_toolbar_fileAttached_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.attach($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "tui-loader", 2);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "tui-editor", 3, 0);
    \u0275\u0275listener("focusIn", function Example_Template_tui_editor_focusIn_3_listener() {
      \u0275\u0275restoreView(_r1);
      const editorComponent_r2 = \u0275\u0275reference(4);
      return \u0275\u0275resetView(ctx.editorRef = editorComponent_r2.editor);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("editor", ctx.editorRef)("tools", ctx.builtInTools);
    \u0275\u0275advance();
    \u0275\u0275property("loading", !!\u0275\u0275pipeBind1(2, 5, ctx.uploadService.loading$));
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx.control)("tools", \u0275\u0275pureFunction0(7, _c0));
  }
}, dependencies: [AsyncPipe, ReactiveFormsModule, NgControlStatus, FormControlDirective, TuiEditor, TuiLoader, TuiToolbar], styles: ["\n\n.toolbar[_ngcontent-%COMP%] {\n  margin-block-end: 0.5rem;\n}\n.editor[_ngcontent-%COMP%]     .tui-editor-socket .ProseMirror {\n  min-block-size: 10rem;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [AsyncPipe, ReactiveFormsModule, TuiEditor, TuiLoader, TuiToolbar], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor({ link: { protocols: ["blob"] } }),
      UploadService,
      {
        provide: TUI_ATTACH_FILES_LOADER,
        deps: [UploadService],
        useFactory: fileLoader
      }
    ], template: '<tui-toolbar\n    class="toolbar"\n    [editor]="editorRef"\n    [tools]="builtInTools"\n    (fileAttached)="attach($event)"\n/>\n\n<tui-loader [loading]="!!(uploadService.loading$ | async)">\n    <tui-editor\n        #editorComponent\n        class="editor"\n        [formControl]="control"\n        [tools]="[]"\n        (focusIn)="editorRef = editorComponent.editor"\n    />\n</tui-loader>\n', styles: ["/* projects/demo/src/app/pages/upload-files/examples/2/index.less */\n.toolbar {\n  margin-block-end: 0.5rem;\n}\n.editor ::ng-deep .tui-editor-socket .ProseMirror {\n  min-block-size: 10rem;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/upload-files/examples/2/index.ts", lineNumber: 33 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-R7MLWXWV.js.map
