import {
  UploadService,
  fileLoader
} from "./chunk-3XYB5D3K.js";
import {
  TuiEditor,
  TuiToolbar,
  provideTuiEditor
} from "./chunk-M24MAHZS.js";
import "./chunk-3XVJMIM3.js";
import "./chunk-FBQNRTPI.js";
import "./chunk-CKXEDIVD.js";
import "./chunk-SMDRVCPH.js";
import "./chunk-RIWP3IDD.js";
import "./chunk-E7AF2JDM.js";
import "./chunk-V3K44WH7.js";
import "./chunk-CLVNSX4V.js";
import "./chunk-LPRARDUT.js";
import "./chunk-W7HY5AXV.js";
import "./chunk-7ZVEQUBF.js";
import "./chunk-RZJNXUCQ.js";
import "./chunk-GSCVANV4.js";
import "./chunk-2V4Q7DK4.js";
import "./chunk-BWYYF7OY.js";
import "./chunk-VKFVYRQZ.js";
import {
  TuiLoader
} from "./chunk-7NVCN4ZH.js";
import "./chunk-42UC7I5S.js";
import "./chunk-HSVQSQDL.js";
import "./chunk-FFQ24UYZ.js";
import "./chunk-C5B5YSKO.js";
import "./chunk-3DZ6ZIOY.js";
import "./chunk-LCKHD4D6.js";
import {
  TUI_ATTACH_FILES_LOADER,
  TuiEditorTool
} from "./chunk-33HKU3CS.js";
import "./chunk-F4EPXCJX.js";
import "./chunk-EVRMGIDW.js";
import {
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-UV3WKPLB.js";
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
} from "./chunk-WPT3CLAO.js";
import "./chunk-HZ2ODKNV.js";
import "./chunk-JUWQPHXY.js";
import "./chunk-YRQX6IXR.js";
import "./chunk-4ZUCQRR7.js";
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
//# sourceMappingURL=chunk-R54BR6YG.js.map
