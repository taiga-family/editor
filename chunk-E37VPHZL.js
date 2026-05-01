import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-TMAIJMJG.js";
import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-7F4Z4OEH.js";
import "./chunk-BTUNPS36.js";
import "./chunk-EP2JXLAZ.js";
import {
  TUI_IMAGE_EDITOR_OPTIONS
} from "./chunk-FQFMIA7P.js";
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
import "./chunk-7Q3SE4QU.js";
import {
  TUI_VALIDATION_ERRORS,
  TuiItem,
  TuiLoader,
  TuiValidator
} from "./chunk-EQTN4WLW.js";
import {
  PolymorpheusOutlet,
  TUI_ANIMATIONS_SPEED,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_IS_E2E,
  TuiAnimated,
  TuiValidationError,
  tuiToAnimationOptions
} from "./chunk-QA7BIT47.js";
import "./chunk-GJ4XEV4D.js";
import "./chunk-AHSN3FX6.js";
import "./chunk-6UFFMEMO.js";
import "./chunk-2X7NNA2Q.js";
import {
  TUI_IMAGE_LOADER,
  TuiEditorTool
} from "./chunk-AJIK2DF5.js";
import "./chunk-RDIT4KNC.js";
import "./chunk-Z64UTBP3.js";
import "./chunk-LBJNUVBM.js";
import {
  AsyncPipe,
  ControlContainer,
  DOCUMENT,
  FormControl,
  FormControlDirective,
  NgControl,
  NgControlStatus,
  NgIf,
  ReactiveFormsModule,
  toSignal,
  tuiIsString,
  tuiPure
} from "./chunk-P325F6NW.js";
import {
  ChangeDetectionStrategy,
  Component,
  INJECTOR$1,
  Injectable,
  Injector,
  Input,
  Pipe,
  inject,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-MN3TG6GQ.js";
import {
  BehaviorSubject,
  Observable,
  __decorate,
  delay,
  finalize,
  from,
  fromEvent,
  map,
  of,
  switchMap
} from "./chunk-CJ7OSSQR.js";
import "./chunk-TPMK677Z.js";
import "./chunk-Q6WMBPZ3.js";
import "./chunk-IN2LCJCD.js";
import "./chunk-G3QJNC4B.js";
import "./chunk-U65UEYRO.js";
import {
  __async
} from "./chunk-4MWRP73S.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-error.mjs
var _c0 = () => ({});
function TuiError_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", text_r1, " ");
  }
}
function TuiError_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, TuiError_div_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("polymorpheusOutlet", ctx_r1.error.message || ctx_r1.default())("polymorpheusOutletContext", ctx_r1.error.context || \u0275\u0275pureFunction0(2, _c0));
  }
}
var _TuiError = class _TuiError {
  constructor() {
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.error = null;
    this.visible = true;
    this.default = toSignal(inject(TUI_DEFAULT_ERROR_MESSAGE));
  }
  set errorSetter(error) {
    this.error = tuiIsString(error) ? new TuiValidationError(error) : error;
  }
};
_TuiError.\u0275fac = function TuiError_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiError)();
};
_TuiError.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiError,
  selectors: [["tui-error"]],
  hostVars: 2,
  hostBindings: function TuiError_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("_error", ctx.error);
    }
  },
  inputs: {
    errorSetter: [0, "error", "errorSetter"]
  },
  decls: 1,
  vars: 1,
  consts: [["automation-id", "tui-error__text", "tuiAnimated", "", "class", "t-message-text", 4, "ngIf"], ["automation-id", "tui-error__text", "tuiAnimated", "", 1, "t-message-text"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
  template: function TuiError_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TuiError_div_0_Template, 2, 3, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.error);
    }
  },
  dependencies: [NgIf, PolymorpheusOutlet, TuiAnimated],
  styles: ['[_nghost-%COMP%]{transition-property:grid-template-rows;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:grid;font:var(--tui-font-text-s);color:var(--tui-text-negative);overflow-wrap:break-word;grid-template-rows:0fr}._error[_nghost-%COMP%]{grid-template-rows:1fr}.t-message-text[_ngcontent-%COMP%]{white-space:pre-line;grid-row:1 / span 2;overflow:hidden}.t-message-text.tui-enter[_ngcontent-%COMP%], .t-message-text.tui-leave[_ngcontent-%COMP%]{animation-name:tuiFade}.t-message-text[_ngcontent-%COMP%]:before{content:"";line-height:1.5rem;vertical-align:bottom}'],
  changeDetection: 0
});
var TuiError = _TuiError;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiError, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-error",
      imports: [NgIf, PolymorpheusOutlet, TuiAnimated],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._error]": "error"
      },
      template: '<div\n    *ngIf="error"\n    automation-id="tui-error__text"\n    tuiAnimated\n    class="t-message-text"\n>\n    <ng-container *polymorpheusOutlet="error.message || default() as text; context: error.context || {}">\n        {{ text }}\n    </ng-container>\n</div>\n',
      styles: [':host{transition-property:grid-template-rows;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:grid;font:var(--tui-font-text-s);color:var(--tui-text-negative);overflow-wrap:break-word;grid-template-rows:0fr}:host._error{grid-template-rows:1fr}.t-message-text{white-space:pre-line;grid-row:1 / span 2;overflow:hidden}.t-message-text.tui-enter,.t-message-text.tui-leave{animation-name:tuiFade}.t-message-text:before{content:"";line-height:1.5rem;vertical-align:bottom}\n']
    }]
  }], null, {
    errorSetter: [{
      type: Input,
      args: ["error"]
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-pipes-field-error.mjs
var EMPTY_RECORD = {};
function unwrapObservable(content, context) {
  return content.pipe(map((error) => new TuiValidationError(error || "", context)));
}
function defaultError(content, context) {
  return of(new TuiValidationError(content || "", context));
}
var _TuiFieldErrorPipe = class _TuiFieldErrorPipe {
  constructor() {
    this.order = [];
    this.parent = inject(NgControl, {
      skipSelf: true,
      optional: true
    });
    this.self = inject(NgControl, {
      self: true,
      optional: true
    });
    this.container = inject(ControlContainer, {
      optional: true
    });
    this.validationErrors = inject(TUI_VALIDATION_ERRORS);
    if (this.self && !this.self.valueAccessor) {
      this.self.valueAccessor = this;
    }
  }
  transform(order) {
    this.order = order;
    return this.computedError;
  }
  registerOnChange() {
  }
  registerOnTouched() {
  }
  setDisabledState() {
  }
  writeValue() {
  }
  get computedError() {
    return this.invalid && this.touched && this.error || of(null);
  }
  get error() {
    const {
      errorId
    } = this;
    if (!errorId) {
      return null;
    }
    const firstError = this.controlErrors[errorId];
    const errorContent = this.validationErrors[errorId];
    return this.getError(firstError, errorContent);
  }
  get invalid() {
    return !!this.control?.invalid;
  }
  get touched() {
    return !!this.control?.touched;
  }
  get control() {
    return this.self?.control || this.parent?.control || this.container?.control;
  }
  get errorId() {
    return this.getErrorId(this.order, this.controlErrors);
  }
  get controlErrors() {
    return this.control?.errors || EMPTY_RECORD;
  }
  getError(context, content) {
    if (context instanceof TuiValidationError) {
      return of(context);
    }
    if (content === void 0 && tuiIsString(context)) {
      return of(new TuiValidationError(context));
    }
    if (content instanceof Observable) {
      return unwrapObservable(content, context);
    }
    if (content instanceof Function) {
      const message = content(context);
      return message instanceof Observable ? unwrapObservable(message, context) : defaultError(message, context);
    }
    return defaultError(content, context);
  }
  getErrorId(order, controlErrors) {
    const id = order?.find((errorId) => controlErrors[errorId]);
    const [fallback] = Object.keys(controlErrors);
    return id || fallback || "";
  }
};
_TuiFieldErrorPipe.\u0275fac = function TuiFieldErrorPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiFieldErrorPipe)();
};
_TuiFieldErrorPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
  name: "tuiFieldError",
  type: _TuiFieldErrorPipe,
  pure: false
});
var TuiFieldErrorPipe = _TuiFieldErrorPipe;
__decorate([tuiPure], TuiFieldErrorPipe.prototype, "getError", null);
__decorate([tuiPure], TuiFieldErrorPipe.prototype, "getErrorId", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFieldErrorPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFieldError",
      pure: false
    }]
  }], function() {
    return [];
  }, {
    getError: [],
    getErrorId: []
  });
})();
var _TuiFieldErrorContentPipe = class _TuiFieldErrorContentPipe {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.localInjector = Injector.create({
      providers: [{
        provide: AsyncPipe
      }, {
        provide: TuiFieldErrorPipe
      }],
      parent: this.injector
    });
    this.asyncPipe = this.localInjector.get(AsyncPipe);
    this.fieldErrorPipe = this.localInjector.get(TuiFieldErrorPipe);
  }
  transform(order) {
    return this.getErrorContent(order);
  }
  ngOnDestroy() {
    this.asyncPipe.ngOnDestroy();
  }
  getErrorContent(order) {
    const error = this.asyncPipe.transform(this.fieldErrorPipe.transform(order));
    if (!error) {
      return "";
    }
    return typeof error.message === "function" ? error.message(error.context) : error.message;
  }
};
_TuiFieldErrorContentPipe.\u0275fac = function TuiFieldErrorContentPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiFieldErrorContentPipe)();
};
_TuiFieldErrorContentPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
  name: "tuiFieldErrorContent",
  type: _TuiFieldErrorContentPipe,
  pure: false
});
var TuiFieldErrorContentPipe = _TuiFieldErrorContentPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFieldErrorContentPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFieldErrorContent",
      pure: false
    }]
  }], null, null);
})();

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
    return new URLSearchParams(formData);
  }
  get isLoading() {
    return this.loading$.getValue();
  }
  save(base64) {
    return from(fetch(`${imgbb.host}/1/upload?key=${imgbb.apiKey}&expiration=${imgbb.expiration}`, {
      method: "POST",
      body: _ImgbbService.createBody(base64),
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    }).then((response) => __async(null, null, function* () {
      return response.json();
    }))).pipe(map((response) => response.data.url));
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
var _c02 = () => [];
function Example_ng_container_10_Template(rf, ctx) {
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
function Example_ng_container_14_Template(rf, ctx) {
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
    this.isE2E = inject(TUI_IS_E2E);
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
])], decls: 15, vars: 17, consts: [[3, "overlay", "showLoader"], [1, "editor", 3, "formControl", "tools", "tuiValidator"], [3, "error", "formControl"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-loader", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275element(2, "tui-editor", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "tui-error", 2);
    \u0275\u0275pipe(4, "tuiFieldError");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementStart(6, "tui-accordion", 3)(7, "button", 4);
    \u0275\u0275text(8, "HTML");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "tui-expand");
    \u0275\u0275template(10, Example_ng_container_10_Template, 2, 1, "ng-container", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 4);
    \u0275\u0275text(12, "Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "tui-expand");
    \u0275\u0275template(14, Example_ng_container_14_Template, 3, 1, "ng-container", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("overlay", true)("showLoader", !!\u0275\u0275pipeBind1(1, 10, ctx.imgbbService.loading$));
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools)("tuiValidator", ctx.validator);
    \u0275\u0275advance();
    \u0275\u0275property("error", \u0275\u0275pipeBind1(5, 14, \u0275\u0275pipeBind1(4, 12, \u0275\u0275pureFunction0(16, _c02))))("formControl", ctx.control);
    \u0275\u0275advance(3);
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
  TuiError,
  TuiFieldErrorPipe,
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
      TuiFieldErrorPipe,
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
    ], template: '<tui-loader\n    [overlay]="true"\n    [showLoader]="!!(imgbbService.loading$ | async)"\n>\n    <tui-editor\n        class="editor"\n        [formControl]="control"\n        [tools]="builtInTools"\n        [tuiValidator]="validator"\n    />\n</tui-loader>\n\n<tui-error\n    [error]="[] | tuiFieldError | async"\n    [formControl]="control"\n/>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/images/upload/examples/1/index.ts", lineNumber: 57 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-E37VPHZL.js.map
