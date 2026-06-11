import {
  UploadService,
  fileLoader
} from "./chunk-5DW3J3SB.js";
import {
  TuiEditor,
  TuiToolbar,
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
  TuiLoader
} from "./chunk-L4I5LKBQ.js";
import "./chunk-DFGPXHHY.js";
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
} from "./chunk-6FE6LACA.js";
import "./chunk-OT66PQDS.js";
import "./chunk-6E3PG6FD.js";
import "./chunk-GAZHX25U.js";
import "./chunk-QAKA6OWS.js";
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
//# sourceMappingURL=chunk-3WELXXO6.js.map
