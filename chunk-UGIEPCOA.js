import {
  UploadService,
  fileLoader
} from "./chunk-J5COV7YV.js";
import {
  TuiEditor,
  TuiToolbar,
  provideTuiEditor
} from "./chunk-DXVMR4C5.js";
import "./chunk-4UYSEWYM.js";
import "./chunk-ON6CMRJE.js";
import "./chunk-CGQ7SF5X.js";
import "./chunk-K4VHZDJ3.js";
import "./chunk-BMQKW5MW.js";
import "./chunk-AJXXSTGP.js";
import "./chunk-PZFOFBEJ.js";
import "./chunk-AVXWN6PC.js";
import "./chunk-DFL5NIEH.js";
import "./chunk-BMTZ6XJZ.js";
import "./chunk-OQKPKAK5.js";
import "./chunk-4P4YSWKO.js";
import "./chunk-ZRZNAMTC.js";
import "./chunk-ZPZIXJAI.js";
import "./chunk-2RUHTAHV.js";
import "./chunk-3N57KBZI.js";
import {
  TuiLoader
} from "./chunk-JDPEJWFS.js";
import "./chunk-NLNCZRCI.js";
import "./chunk-LPBSAZLJ.js";
import "./chunk-DMAZJOQQ.js";
import "./chunk-QVEY2JIK.js";
import "./chunk-KMEEBF2K.js";
import "./chunk-MAMGYOWB.js";
import {
  TUI_ATTACH_FILES_LOADER,
  TuiEditorTool
} from "./chunk-XDT5UXUV.js";
import "./chunk-HNVQLPMS.js";
import "./chunk-EMEGSUC4.js";
import {
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
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
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-KFKFA6WT.js";
import "./chunk-OT66PQDS.js";
import "./chunk-6E3PG6FD.js";
import "./chunk-GAZHX25U.js";
import "./chunk-QAKA6OWS.js";
import "./chunk-KWSTWQNB.js";

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
])], decls: 10, vars: 11, consts: [["header", ""], ["main", ""], [3, "formGroup"], [1, "toolbar", 3, "fileAttached", "editor", "tools"], [3, "loading", "overlay"], ["formControlName", "header", 1, "editor", 3, "focusIn", "tools"], ["formControlName", "main", 1, "editor", 3, "focusIn", "tools"]], template: function Example_Template(rf, ctx) {
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
    \u0275\u0275property("loading", !!\u0275\u0275pipeBind1(3, 7, ctx.uploadService.loading$))("overlay", true);
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
    ], template: '<form [formGroup]="group">\n    <tui-toolbar\n        class="toolbar"\n        [editor]="editorRef"\n        [tools]="builtInTools"\n        (fileAttached)="attach($event)"\n    />\n\n    <tui-loader\n        [loading]="!!(uploadService.loading$ | async)"\n        [overlay]="true"\n    >\n        <tui-editor\n            #header\n            formControlName="header"\n            class="editor"\n            [tools]="[]"\n            (focusIn)="editorRef = header.editor"\n        >\n            Header\n        </tui-editor>\n\n        <tui-editor\n            #main\n            formControlName="main"\n            class="editor"\n            [tools]="[]"\n            (focusIn)="editorRef = main.editor"\n        >\n            Main\n        </tui-editor>\n    </tui-loader>\n</form>\n', styles: ["/* projects/demo/src/app/pages/upload-files/examples/3/index.less */\n.toolbar {\n  margin-block-end: 0.5rem;\n}\n.editor:not(:last-child) {\n  margin-block-end: 1rem;\n}\n.editor ::ng-deep .tui-editor-socket .ProseMirror {\n  min-block-size: 8rem;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/upload-files/examples/3/index.ts", lineNumber: 33 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-UGIEPCOA.js.map
