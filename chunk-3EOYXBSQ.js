import {
  UploadService,
  fileLoader
} from "./chunk-J5COV7YV.js";
import {
  TuiEditor,
  TuiToolbar,
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
  TuiLoader
} from "./chunk-D3YV7ZHS.js";
import "./chunk-NLNCZRCI.js";
import "./chunk-LPBSAZLJ.js";
import "./chunk-DMAZJOQQ.js";
import "./chunk-SID5SRJX.js";
import "./chunk-2SAJKKTH.js";
import "./chunk-QD3ZUMKY.js";
import {
  TUI_ATTACH_FILES_LOADER,
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
} from "./chunk-KFKFA6WT.js";
import "./chunk-YANEK5OP.js";
import "./chunk-JTJXQAN7.js";
import "./chunk-PSTGTYGJ.js";
import "./chunk-LXNO5FKD.js";
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
//# sourceMappingURL=chunk-3EOYXBSQ.js.map
