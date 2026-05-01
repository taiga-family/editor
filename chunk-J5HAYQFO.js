import {
  UploadService,
  fileLoader
} from "./chunk-AIIVAIJX.js";
import {
  TuiEditor,
  TuiToolbar,
  provideTuiEditor
} from "./chunk-7F4Z4OEH.js";
import "./chunk-BTUNPS36.js";
import "./chunk-EP2JXLAZ.js";
import "./chunk-FQFMIA7P.js";
import "./chunk-ENNG77OY.js";
import "./chunk-4KQC5VQM.js";
import "./chunk-PJJ4EG5U.js";
import "./chunk-LR6MFXG2.js";
import "./chunk-N3XZP6Z7.js";
import "./chunk-6JDH2PV3.js";
import "./chunk-7QK2CPSE.js";
import "./chunk-WBHAP4JC.js";
import "./chunk-X3PSOWX2.js";
import "./chunk-E3TKWIMT.js";
import "./chunk-HSMAYE7Z.js";
import "./chunk-ARYGUNWN.js";
import "./chunk-3L6ILX4W.js";
import "./chunk-M6TSJ4NT.js";
import "./chunk-BAXR2EDS.js";
import "./chunk-3MA5NXQZ.js";
import "./chunk-IG5NUA4T.js";
import "./chunk-LPOWL4X5.js";
import "./chunk-RURN6JQY.js";
import "./chunk-QOV567V2.js";
import "./chunk-UFW7RGXF.js";
import "./chunk-X7NG6AFM.js";
import "./chunk-KABZ5ZTT.js";
import "./chunk-RR2HWU3Q.js";
import "./chunk-ZL2NLOVI.js";
import "./chunk-WQSN4Q62.js";
import "./chunk-F47ZTIMH.js";
import "./chunk-H6B6ZN6C.js";
import "./chunk-VCEUECWR.js";
import "./chunk-EHYODUHD.js";
import "./chunk-K3KVBV5Y.js";
import {
  TuiLoader
} from "./chunk-EQTN4WLW.js";
import "./chunk-QA7BIT47.js";
import "./chunk-GJ4XEV4D.js";
import "./chunk-AHSN3FX6.js";
import "./chunk-6UFFMEMO.js";
import "./chunk-2X7NNA2Q.js";
import {
  TUI_ATTACH_FILES_LOADER,
  TuiEditorTool
} from "./chunk-AJIK2DF5.js";
import "./chunk-RDIT4KNC.js";
import "./chunk-Z64UTBP3.js";
import "./chunk-LBJNUVBM.js";
import {
  AsyncPipe,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-P325F6NW.js";
import {
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
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-MN3TG6GQ.js";
import "./chunk-CJ7OSSQR.js";
import "./chunk-TPMK677Z.js";
import "./chunk-Q6WMBPZ3.js";
import "./chunk-IN2LCJCD.js";
import "./chunk-G3QJNC4B.js";
import "./chunk-U65UEYRO.js";
import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/upload-files/examples/3/index.ts
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
    this.group = new FormGroup({
      header: new FormControl(""),
      main: new FormControl("")
    });
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
])], decls: 10, vars: 11, consts: [["header", ""], ["main", ""], [3, "formGroup"], [1, "toolbar", 3, "fileAttached", "editor", "tools"], [3, "overlay", "showLoader"], ["formControlName", "header", 1, "editor", 3, "focusIn", "tools"], ["formControlName", "main", 1, "editor", 3, "focusIn", "tools"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 2)(1, "tui-toolbar", 3);
    \u0275\u0275listener("fileAttached", function Example_Template_tui_toolbar_fileAttached_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.attach($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tui-loader", 4);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "tui-editor", 5, 0);
    \u0275\u0275listener("focusIn", function Example_Template_tui_editor_focusIn_4_listener() {
      \u0275\u0275restoreView(_r1);
      const header_r2 = \u0275\u0275reference(5);
      return \u0275\u0275resetView(ctx.editorRef = header_r2.editor);
    });
    \u0275\u0275text(6, " Header ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "tui-editor", 6, 1);
    \u0275\u0275listener("focusIn", function Example_Template_tui_editor_focusIn_7_listener() {
      \u0275\u0275restoreView(_r1);
      const main_r3 = \u0275\u0275reference(8);
      return \u0275\u0275resetView(ctx.editorRef = main_r3.editor);
    });
    \u0275\u0275text(9, " Main ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.group);
    \u0275\u0275advance();
    \u0275\u0275property("editor", ctx.editorRef)("tools", ctx.builtInTools);
    \u0275\u0275advance();
    \u0275\u0275property("overlay", true)("showLoader", !!\u0275\u0275pipeBind1(3, 7, ctx.uploadService.loading$));
    \u0275\u0275advance(2);
    \u0275\u0275property("tools", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("tools", \u0275\u0275pureFunction0(10, _c0));
  }
}, dependencies: [AsyncPipe, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TuiEditor, TuiLoader, TuiToolbar], styles: ["\n\n.toolbar[_ngcontent-%COMP%] {\n  margin-block-end: 0.5rem;\n}\n.editor[_ngcontent-%COMP%]:not(:last-child) {\n  margin-block-end: 1rem;\n}\n.editor[_ngcontent-%COMP%]     .tui-editor-socket .ProseMirror {\n  min-block-size: 8rem;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
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
    ], template: '<form [formGroup]="group">\n    <tui-toolbar\n        class="toolbar"\n        [editor]="editorRef"\n        [tools]="builtInTools"\n        (fileAttached)="attach($event)"\n    />\n\n    <tui-loader\n        [overlay]="true"\n        [showLoader]="!!(uploadService.loading$ | async)"\n    >\n        <tui-editor\n            #header\n            formControlName="header"\n            class="editor"\n            [tools]="[]"\n            (focusIn)="editorRef = header.editor"\n        >\n            Header\n        </tui-editor>\n\n        <tui-editor\n            #main\n            formControlName="main"\n            class="editor"\n            [tools]="[]"\n            (focusIn)="editorRef = main.editor"\n        >\n            Main\n        </tui-editor>\n    </tui-loader>\n</form>\n', styles: ["/* projects/demo/src/app/pages/upload-files/examples/3/index.less */\n.toolbar {\n  margin-block-end: 0.5rem;\n}\n.editor:not(:last-child) {\n  margin-block-end: 1rem;\n}\n.editor ::ng-deep .tui-editor-socket .ProseMirror {\n  min-block-size: 8rem;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/upload-files/examples/3/index.ts", lineNumber: 33 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-J5HAYQFO.js.map
