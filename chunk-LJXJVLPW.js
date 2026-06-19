import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-UDJQGVBX.js";
import "./chunk-EO7LQO3V.js";
import "./chunk-IYZNRN55.js";
import "./chunk-T3OKOD3A.js";
import "./chunk-OGDOLTW3.js";
import "./chunk-O4YFAAW5.js";
import "./chunk-FQYNGWGS.js";
import "./chunk-LXPXPQCS.js";
import "./chunk-INMNDEHV.js";
import "./chunk-J4TAEO4S.js";
import "./chunk-A33AM5OH.js";
import {
  TUI_IMAGE_EDITOR_OPTIONS
} from "./chunk-T5QAZXLT.js";
import "./chunk-CEVSZ4W2.js";
import "./chunk-FSPXCFZT.js";
import "./chunk-C7MBO5OX.js";
import "./chunk-IZQL34JE.js";
import "./chunk-GPYYXLWQ.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-EF4ATJ2Z.js";
import {
  TuiItem,
  TuiLoader,
  TuiValidationError,
  TuiValidator
} from "./chunk-X7GRIVH7.js";
import {
  PolymorpheusComponent,
  PolymorpheusOutlet,
  PolymorpheusTemplate,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_VALIDATION_ERRORS,
  TuiAnimated,
  WA_IS_E2E
} from "./chunk-BILNAO2Z.js";
import "./chunk-M562FPU2.js";
import "./chunk-KD3HJTV7.js";
import "./chunk-HDBDXCXT.js";
import "./chunk-SWVF5MG7.js";
import "./chunk-FWDXC2LG.js";
import {
  TUI_IMAGE_LOADER,
  TuiEditorTool
} from "./chunk-TU7TDGZA.js";
import "./chunk-3PCP22CS.js";
import {
  tuiDirectiveBinding,
  tuiProvide
} from "./chunk-CGIMAQGG.js";
import {
  FormControl,
  FormControlDirective,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  ReactiveFormsModule,
  toSignal,
  tuiGenerateId,
  tuiInjectElement,
  tuiIsString,
  tuiSetSignal
} from "./chunk-4FOPQVVL.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Directive,
  Injectable,
  Pipe,
  TemplateRef,
  computed,
  delay,
  distinctUntilChanged,
  filter,
  finalize,
  from,
  fromEvent,
  inject,
  input,
  isSignal,
  map,
  setClassMetadata,
  startWith,
  switchMap,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵresolveDocument,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-G7TA3DS4.js";
import "./chunk-4HJQMCHN.js";
import "./chunk-VV7RTGQI.js";
import "./chunk-I33OXPP7.js";
import "./chunk-Q52BLV3K.js";
import "./chunk-KWSTWQNB.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-error.mjs
var _c0 = () => ({});
function TuiErrorComponent_Conditional_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 2);
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    \u0275\u0275property("innerHTML", text_r1, \u0275\u0275sanitizeHtml);
  }
}
function TuiErrorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 0);
    \u0275\u0275template(1, TuiErrorComponent_Conditional_0_span_1_Template, 1, 1, "span", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("polymorpheusOutlet", error_r2.message || ctx_r2.default())("polymorpheusOutletContext", error_r2.context || \u0275\u0275pureFunction0(2, _c0));
  }
}
var _TuiErrorComponent = class _TuiErrorComponent {
  constructor() {
    this.default = inject(TUI_DEFAULT_ERROR_MESSAGE);
    this.content = computed((error = this.error()) => tuiIsString(error) ? new TuiValidationError(error) : error);
    this.error = input(null);
  }
};
_TuiErrorComponent.\u0275fac = function TuiErrorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiErrorComponent)();
};
_TuiErrorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiErrorComponent,
  selectors: [["tui-error"]],
  hostVars: 2,
  hostBindings: function TuiErrorComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("_error", ctx.content());
    }
  },
  inputs: {
    error: [1, "error"]
  },
  decls: 1,
  vars: 1,
  consts: [["tuiAnimated", "", 1, "t-message-text"], [3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "innerHTML"]],
  template: function TuiErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TuiErrorComponent_Conditional_0_Template, 2, 3, "span", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.content()) ? 0 : -1, tmp_0_0);
    }
  },
  dependencies: [PolymorpheusOutlet, TuiAnimated],
  styles: ['[_nghost-%COMP%]{transition-property:grid-template-rows;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:grid;font:var(--tui-typography-body-s);color:var(--tui-text-negative);overflow-wrap:break-word;grid-template-rows:0fr}._error[_nghost-%COMP%]{grid-template-rows:1fr}.t-message-text[_ngcontent-%COMP%]{white-space:pre-line;grid-area:1 / 1 / span 2;overflow:hidden}.t-message-text.tui-enter[_ngcontent-%COMP%], .t-message-text.tui-leave[_ngcontent-%COMP%]{animation-name:tuiFade}.t-message-text[_ngcontent-%COMP%]:before{content:"";line-height:calc(24 / 14);vertical-align:bottom}'],
  changeDetection: 0
});
var TuiErrorComponent = _TuiErrorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiErrorComponent, [{
    type: Component,
    args: [{
      selector: "tui-error",
      imports: [PolymorpheusOutlet, TuiAnimated],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._error]": "content()"
      },
      template: '@if (content(); as error) {\n    <span\n        tuiAnimated\n        class="t-message-text"\n    >\n        <span\n            *polymorpheusOutlet="error.message || default() as text; context: error.context || {}"\n            [innerHTML]="text"\n        ></span>\n    </span>\n}\n',
      styles: [':host{transition-property:grid-template-rows;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:grid;font:var(--tui-typography-body-s);color:var(--tui-text-negative);overflow-wrap:break-word;grid-template-rows:0fr}:host._error{grid-template-rows:1fr}.t-message-text{white-space:pre-line;grid-area:1 / 1 / span 2;overflow:hidden}.t-message-text.tui-enter,.t-message-text.tui-leave{animation-name:tuiFade}.t-message-text:before{content:"";line-height:calc(24 / 14);vertical-align:bottom}\n']
    }]
  }], null, null);
})();
var _TuiErrorDirective = class _TuiErrorDirective {
  constructor() {
    this.el = tuiInjectElement();
    this.autoId = tuiGenerateId();
    this.content = inject(TUI_VALIDATION_ERRORS);
    this.control = new BehaviorSubject(null);
    this.errors = toSignal(this.control.pipe(filter(Boolean), distinctUntilChanged(), switchMap((control) => control.events.pipe(startWith(null), map(() => !control.disabled && control.touched && control.errors)))));
    this.key = computed((errors = this.errors() || {}) => this.order().find((id) => errors[id]) || Object.keys(errors)[0] || "");
    this.order = input([]);
    this.error = tuiDirectiveBinding(TuiErrorComponent, "error", computed((errors = this.errors() || null) => errors && this.getError(errors[this.key()], this.content[this.key()])), {
      self: true,
      optional: true
    });
  }
  get id() {
    return this.el.id || this.autoId;
  }
  registerOnChange() {
  }
  registerOnTouched() {
  }
  writeValue() {
  }
  validate(control) {
    this.control.next(control);
    return null;
  }
  onValidator(validator) {
    if (this.control.value && validator.control === this.control.value) {
      validator.id = this.id;
    }
  }
  getError(context, content) {
    context = isSignal(context) ? context() : context;
    if (context instanceof TuiValidationError) {
      return context;
    }
    if (content === void 0 && isContent(context)) {
      return getError(context);
    }
    if (isSignal(content)) {
      return getError(content(), context);
    }
    if (content instanceof Function) {
      const message = content(context);
      return getError(isSignal(message) ? message() : message, context);
    }
    return getError(content, context);
  }
};
_TuiErrorDirective.\u0275fac = function TuiErrorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiErrorDirective)();
};
_TuiErrorDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiErrorDirective,
  selectors: [["tui-error", "ngModel", ""], ["tui-error", "formControlName", ""], ["tui-error", "formControl", ""], ["tui-error", "formGroup", ""], ["tui-error", "formGroupName", ""], ["tui-error", "formArrayName", ""], ["tui-error", "formArray", ""]],
  hostAttrs: ["aria-live", "polite"],
  hostVars: 1,
  hostBindings: function TuiErrorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("tui-validator.zoneless", function TuiErrorDirective_tui_validator_zoneless_HostBindingHandler($event) {
        return ctx.onValidator($event.detail);
      }, false, \u0275\u0275resolveDocument);
    }
    if (rf & 2) {
      \u0275\u0275hostProperty("id", ctx.id);
    }
  },
  inputs: {
    order: [1, "order"]
  },
  features: [\u0275\u0275ProvidersFeature([tuiProvide(NG_VALUE_ACCESSOR, _TuiErrorDirective, true), tuiProvide(NG_VALIDATORS, _TuiErrorDirective, true)])]
});
var TuiErrorDirective = _TuiErrorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiErrorDirective, [{
    type: Directive,
    args: [{
      selector: "tui-error[ngModel], tui-error[formControlName], tui-error[formControl], tui-error[formGroup], tui-error[formGroupName], tui-error[formArrayName], tui-error[formArray]",
      providers: [tuiProvide(NG_VALUE_ACCESSOR, TuiErrorDirective, true), tuiProvide(NG_VALIDATORS, TuiErrorDirective, true)],
      host: {
        "aria-live": "polite",
        "[id]": "id",
        "(document:tui-validator.zoneless)": "onValidator($event.detail)"
      }
    }]
  }], null, null);
})();
function getError(content = "", context) {
  return new TuiValidationError(content, context);
}
function isContent(value) {
  return tuiIsString(value) || value instanceof TemplateRef || value instanceof PolymorpheusTemplate || value instanceof PolymorpheusComponent;
}
var _TuiErrorPipe = class _TuiErrorPipe {
  constructor() {
    this.control = inject(NgControl);
    this.directive = new TuiErrorDirective();
  }
  transform(order) {
    untracked(() => {
      this.directive.validate(this.control.control);
      tuiSetSignal(this.directive.order, order);
    });
    const error = this.directive.error();
    if (!error) {
      return "";
    }
    return typeof error.message === "function" ? error.message(error.context) : error.message;
  }
};
_TuiErrorPipe.\u0275fac = function TuiErrorPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiErrorPipe)();
};
_TuiErrorPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
  name: "tuiError",
  type: _TuiErrorPipe,
  pure: false
});
var TuiErrorPipe = _TuiErrorPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiErrorPipe, [{
    type: Pipe,
    args: [{
      name: "tuiError",
      pure: false
    }]
  }], null, null);
})();
var TuiError = [TuiErrorComponent, TuiErrorDirective, TuiErrorPipe];

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
//# sourceMappingURL=chunk-LJXJVLPW.js.map
