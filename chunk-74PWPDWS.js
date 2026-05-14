import {
  UploadService,
  fileLoader
} from "./chunk-F5JXMH4P.js";
import {
  TuiEditor,
  TuiToolbar,
  provideTuiEditor
} from "./chunk-5OF5XCWJ.js";
import "./chunk-63UAFU6U.js";
import "./chunk-2ES6PUYZ.js";
import "./chunk-I7X6V4CT.js";
import "./chunk-75FDNOQF.js";
import "./chunk-DSHVBE6A.js";
import "./chunk-IHVGLZ2Q.js";
import "./chunk-NXH7MFHV.js";
import "./chunk-ATATJQXQ.js";
import "./chunk-R53H6MIJ.js";
import "./chunk-IO47ZSZ5.js";
import "./chunk-IY3TMNXS.js";
import "./chunk-RCTC7M4X.js";
import "./chunk-GMAQM436.js";
import "./chunk-CCLNU5WX.js";
import "./chunk-OKCG6U2V.js";
import "./chunk-KTNJ5Y6T.js";
import {
  TuiLoader
} from "./chunk-QZTLTFCW.js";
import "./chunk-FM47Y63S.js";
import "./chunk-R3AGXJOZ.js";
import "./chunk-YQZG6ATW.js";
import "./chunk-PWR5JH2U.js";
import "./chunk-ANOJQ2S3.js";
import "./chunk-IK5IBJNP.js";
import {
  TUI_ATTACH_FILES_LOADER,
  TuiEditorTool
} from "./chunk-AFITYD3E.js";
import "./chunk-YZMZTTW5.js";
import "./chunk-4K4DVCQ3.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-MRTTS2CM.js";
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
} from "./chunk-NS3244ZP.js";
import "./chunk-3YAE2G2V.js";
import "./chunk-G7N6NM5P.js";
import "./chunk-AE53DBVW.js";
import "./chunk-77B4UB4S.js";
import "./chunk-KWSTWQNB.js";

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
//# sourceMappingURL=chunk-74PWPDWS.js.map
