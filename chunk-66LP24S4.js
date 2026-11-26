import {
  TuiId,
  TuiValidationError
} from "./chunk-LZZ4FHRE.js";
import {
  PolymorpheusComponent,
  PolymorpheusOutlet,
  PolymorpheusTemplate,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_VALIDATION_ERRORS,
  TuiAnimated
} from "./chunk-HFC5F3F7.js";
import {
  tuiDirectiveBinding,
  tuiProvide
} from "./chunk-Y5QZTE4Q.js";
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  toSignal,
  tuiInjectElement,
  tuiIsString,
  tuiSetSignal
} from "./chunk-26IZDJS5.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  Directive,
  Pipe,
  TemplateRef,
  computed,
  distinctUntilChanged,
  filter,
  inject,
  input,
  isSignal,
  map,
  setClassMetadata,
  startWith,
  switchMap,
  untracked,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresolveDocument,
  ɵɵsanitizeHtml,
  ɵɵtemplate
} from "./chunk-BVXNDUDG.js";

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
  styles: ['[_nghost-%COMP%]{transition-property:grid-template-rows;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);display:grid;font:var(--tui-typography-body-s);color:var(--tui-text-negative);overflow-wrap:break-word;grid-template-rows:0fr}._error[_nghost-%COMP%]{grid-template-rows:1fr;transition-duration:var(--tui-duration)}.t-message-text[_ngcontent-%COMP%]{white-space:pre-line;grid-area:1 / 1 / span 2}.t-message-text.tui-enter[_ngcontent-%COMP%]{animation-name:tuiFade}.t-message-text.tui-leave[_ngcontent-%COMP%]{animation-name:tuiFade;animation-duration:calc(var(--tui-duration) / 2)}.t-message-text[_ngcontent-%COMP%]:before{content:"";line-height:calc(24 / 14);vertical-align:bottom}'],
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
      styles: [':host{transition-property:grid-template-rows;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);display:grid;font:var(--tui-typography-body-s);color:var(--tui-text-negative);overflow-wrap:break-word;grid-template-rows:0fr}:host._error{grid-template-rows:1fr;transition-duration:var(--tui-duration)}.t-message-text{white-space:pre-line;grid-area:1 / 1 / span 2}.t-message-text.tui-enter{animation-name:tuiFade}.t-message-text.tui-leave{animation-name:tuiFade;animation-duration:calc(var(--tui-duration) / 2)}.t-message-text:before{content:"";line-height:calc(24 / 14);vertical-align:bottom}\n']
    }]
  }], null, null);
})();
var _TuiErrorDirective = class _TuiErrorDirective {
  constructor() {
    this.el = tuiInjectElement();
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
      validator.id = this.el.id;
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
  hostBindings: function TuiErrorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("tui-validator.zoneless", function TuiErrorDirective_tui_validator_zoneless_HostBindingHandler($event) {
        return ctx.onValidator($event.detail);
      }, false, \u0275\u0275resolveDocument);
    }
  },
  inputs: {
    order: [1, "order"]
  },
  features: [\u0275\u0275ProvidersFeature([tuiProvide(NG_VALUE_ACCESSOR, _TuiErrorDirective, true), tuiProvide(NG_VALIDATORS, _TuiErrorDirective, true)]), \u0275\u0275HostDirectivesFeature([TuiId])]
});
var TuiErrorDirective = _TuiErrorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiErrorDirective, [{
    type: Directive,
    args: [{
      selector: "tui-error[ngModel], tui-error[formControlName], tui-error[formControl], tui-error[formGroup], tui-error[formGroupName], tui-error[formArrayName], tui-error[formArray]",
      providers: [tuiProvide(NG_VALUE_ACCESSOR, TuiErrorDirective, true), tuiProvide(NG_VALIDATORS, TuiErrorDirective, true)],
      hostDirectives: [TuiId],
      host: {
        "aria-live": "polite",
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

export {
  TuiErrorComponent,
  TuiErrorDirective,
  TuiError
};
//# sourceMappingURL=chunk-66LP24S4.js.map
