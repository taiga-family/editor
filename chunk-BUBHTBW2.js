import {
  TuiError,
  TuiErrorComponent,
  TuiErrorDirective
} from "./chunk-66LP24S4.js";
import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-NNJYG7IE.js";
import "./chunk-6H42RGPU.js";
import "./chunk-YBBQR7OJ.js";
import "./chunk-OMFADM6O.js";
import "./chunk-SRJ6VREM.js";
import "./chunk-CJCOLMBG.js";
import "./chunk-OABTULWK.js";
import "./chunk-WTWKXZU6.js";
import "./chunk-72BPGFKA.js";
import "./chunk-ELTFDOPS.js";
import "./chunk-WRVKIEH3.js";
import {
  TUI_IMAGE_EDITOR_OPTIONS
} from "./chunk-677D3BIO.js";
import "./chunk-RZFANQIX.js";
import "./chunk-WJGHI4OW.js";
import "./chunk-QCWL64LO.js";
import "./chunk-BSPC2OFF.js";
import "./chunk-DYHGQKM2.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-GQKSUSNW.js";
import {
  TuiItem,
  TuiLoader,
  TuiValidationError,
  TuiValidator
} from "./chunk-LZZ4FHRE.js";
import {
  WA_IS_E2E
} from "./chunk-HFC5F3F7.js";
import "./chunk-AUB4GJHI.js";
import "./chunk-GXEQYQRI.js";
import "./chunk-PDU6H2KZ.js";
import "./chunk-RCCORHGG.js";
import "./chunk-VPRZGEPF.js";
import {
  TUI_IMAGE_LOADER,
  TuiEditorTool
} from "./chunk-Y3UWEWIG.js";
import "./chunk-ILGSV6CC.js";
import "./chunk-Y5QZTE4Q.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-26IZDJS5.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Injectable,
  delay,
  finalize,
  from,
  fromEvent,
  inject,
  map,
  setClassMetadata,
  switchMap,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-BVXNDUDG.js";
import "./chunk-5Y77LQWP.js";
import "./chunk-KQS6TKY3.js";
import "./chunk-O23DE4M2.js";
import "./chunk-42BGUG2S.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/images/upload/examples/1/image-loader.ts
function imageLoader(service) {
  return (file) => {
    const fileReader = new FileReader();
    service.loading$.next(true);
    fileReader.readAsDataURL(file);
    return fromEvent(fileReader, "load").pipe(
      delay(2e3),
      // for simulate throttle network
      map(() => String(fileReader.result)),
      switchMap((base64) => service.save(base64)),
      finalize(() => service.loading$.next(false))
    );
  };
}

// projects/demo/src/app/pages/images/upload/examples/1/imgbb.service.ts
var imgbb = {
  host: "https://api.imgbb.com",
  apiKey: "3c1615980dcf693b282c4b0fb608b28a",
  expiration: 300
  // 5min lifetime
};
var _ImgbbService = class _ImgbbService {
  constructor() {
    this.loading$ = new BehaviorSubject(false);
  }
  static createBody(base64) {
    const formData = new FormData();
    formData.append("image", base64.split(",").pop() ?? "");
    return new URLSearchParams(Array.from(formData.entries()));
  }
  get isLoading() {
    return this.loading$.getValue();
  }
  save(base64) {
    return from(fetch(`${imgbb.host}/1/upload?key=${imgbb.apiKey}&expiration=${imgbb.expiration}`, {
      method: "POST",
      body: _ImgbbService.createBody(base64),
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    }).then(async (response) => response.json())).pipe(map((response) => response.data.url));
  }
};
_ImgbbService.\u0275fac = function ImgbbService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ImgbbService)();
};
_ImgbbService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ImgbbService, factory: _ImgbbService.\u0275fac, providedIn: "root" });
var ImgbbService = _ImgbbService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImgbbService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// projects/demo/src/app/pages/images/upload/examples/1/index.ts
function Example_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "tui-editor-socket", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("content", ctx_r0.control.value);
  }
}
function Example_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 7);
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
    this.editor = viewChild(TuiEditor);
    this.doc = inject(DOCUMENT);
    this.imgbbService = inject(ImgbbService);
    this.builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];
    this.isE2E = inject(WA_IS_E2E);
    this.control = new FormControl("");
    this.validator = ({ value }) => this.editor()?.focused() || this.imgbbService.isLoading || !this.doc.hasFocus() || // possible that file dialog is open
    value.length ? null : { empty: new TuiValidationError("ERROR: content must not be empty") };
    this.control.patchValue(`
                <img src="assets/images/lumberjack.png" width="300" />
                <p>Try to drag right border of image!</p>
                <p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.</p>
                <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwIDUwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjxzdHlsZT4uYXtmaWxsOiNkZDAwMzF9LmJ7ZmlsbDojYzMwMDJmfS5je2ZpbGw6I2ZmZn08L3N0eWxlPjxwYXRoIGNsYXNzPSJhIiBkPSJtNDMuNiAxMi42bC0yLjggMjQuNy0xNS44IDguNy0xNS44LTguNy0yLjgtMjQuNyAxOC42LTYuNnoiLz48cGF0aCBjbGFzcz0iYiIgZD0ibTI1IDZsMTguNiA2LjYtMi44IDI0LjctMTUuOCA4Ljd2LTE1LjMtMjAuMy00LjR6Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGFzcz0iYyIgZD0ibTM2LjYgMzYuNWgtNC4zbC0yLjQtNS44aC05LjlsLTIuMyA1LjhoLTQuM2wxMS42LTI2LjF6bS0xMS42LTE3LjZsLTMuNCA4LjJoNi44eiIvPjwvc3ZnPg==" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <img src="assets/images/lumberjack.png" width="300" style="float: right" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <img src="assets/images/lumberjack.png" width="300" style="float: left" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <img src="assets/images/lumberjack.png" width="300" style="display: flex; justify-content: center; margin-left: auto; margin-right: auto;" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            `);
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], viewQuery: function Example_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.editor, TuiEditor, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275ProvidersFeature([
  provideTuiEditor({ image: true }),
  {
    provide: TUI_IMAGE_EDITOR_OPTIONS,
    useValue: {
      minWidth: 100,
      maxWidth: 400
    }
  },
  {
    provide: TUI_IMAGE_LOADER,
    useFactory: imageLoader,
    deps: [ImgbbService]
  }
])], decls: 13, vars: 11, consts: [[3, "loading", "overlay"], [1, "editor", 3, "formControl", "tools", "tuiValidator"], [3, "formControl"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-loader", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275element(2, "tui-editor", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "tui-error", 2);
    \u0275\u0275elementStart(4, "tui-accordion", 3)(5, "button", 4);
    \u0275\u0275text(6, "HTML");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "tui-expand");
    \u0275\u0275template(8, Example_ng_container_8_Template, 2, 1, "ng-container", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 4);
    \u0275\u0275text(10, "Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "tui-expand");
    \u0275\u0275template(12, Example_ng_container_12_Template, 3, 1, "ng-container", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("loading", !!\u0275\u0275pipeBind1(1, 9, ctx.imgbbService.loading$))("overlay", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools)("tuiValidator", ctx.validator);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx.control);
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
  TuiErrorComponent,
  TuiErrorDirective,
  TuiLoader,
  TuiValidator
], encapsulation: 2, changeDetection: 0 });
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
      TuiError,
      TuiExpand,
      TuiItem,
      TuiLoader,
      TuiValidator
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor({ image: true }),
      {
        provide: TUI_IMAGE_EDITOR_OPTIONS,
        useValue: {
          minWidth: 100,
          maxWidth: 400
        }
      },
      {
        provide: TUI_IMAGE_LOADER,
        useFactory: imageLoader,
        deps: [ImgbbService]
      }
    ], template: '<tui-loader\n    [loading]="!!(imgbbService.loading$ | async)"\n    [overlay]="true"\n>\n    <tui-editor\n        class="editor"\n        [formControl]="control"\n        [tools]="builtInTools"\n        [tuiValidator]="validator"\n    />\n</tui-loader>\n\n<tui-error [formControl]="control" />\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/images/upload/examples/1/index.ts", lineNumber: 56 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-BUBHTBW2.js.map
