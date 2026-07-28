import {
  UploadService,
  fileLoader
} from "./chunk-3XYB5D3K.js";
import {
  TuiEditor,
  TuiToolbar,
  provideTuiEditor
} from "./chunk-Z4SGEKMW.js";
import "./chunk-FKXXQG6K.js";
import "./chunk-IYZNRN55.js";
import "./chunk-T3OKOD3A.js";
import "./chunk-OGDOLTW3.js";
import "./chunk-O4YFAAW5.js";
import "./chunk-FQYNGWGS.js";
import "./chunk-LXPXPQCS.js";
import "./chunk-X6U5273W.js";
import "./chunk-J4TAEO4S.js";
import "./chunk-CQBT7I7P.js";
import "./chunk-VYTUEVFY.js";
import "./chunk-EOH3NMDT.js";
import "./chunk-FSPXCFZT.js";
import "./chunk-4BZJ2B2Q.js";
import "./chunk-YNN3JM4E.js";
import "./chunk-GPYYXLWQ.js";
import {
  TuiLoader
} from "./chunk-3JPI6LSU.js";
import "./chunk-K5V67KBE.js";
import "./chunk-HSVQSQDL.js";
import "./chunk-FFQ24UYZ.js";
import "./chunk-HDBDXCXT.js";
import "./chunk-46JQFCTS.js";
import "./chunk-FWDXC2LG.js";
import {
  TUI_ATTACH_FILES_LOADER,
  TuiEditorTool
} from "./chunk-XKGXV3KO.js";
import "./chunk-HBCP6ROE.js";
import "./chunk-OKNTYFGP.js";
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
} from "./chunk-WPT3CLAO.js";
import "./chunk-4HJQMCHN.js";
import "./chunk-VV7RTGQI.js";
import "./chunk-I33OXPP7.js";
import "./chunk-Q52BLV3K.js";
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
//# sourceMappingURL=chunk-IDDS7GIM.js.map
