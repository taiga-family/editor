import {
  TuiTitle
} from "./chunk-CEHQ5QIS.js";
import {
  PolymorpheusOutlet,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TUI_VERSION,
  TuiAnimated,
  TuiButton,
  TuiPopupService,
  TuiPortal,
  TuiPortalDirective,
  TuiWithAppearance,
  TuiWithIcons,
  injectContext,
  tuiAppearanceOptionsProvider,
  tuiAsPortal,
  tuiButtonOptionsProvider,
  tuiIconStart,
  tuiLinkOptionsProvider
} from "./chunk-NLNCZRCI.js";
import {
  tuiCreateOptions
} from "./chunk-EMEGSUC4.js";
import {
  takeUntilDestroyed,
  tuiInjectElement,
  tuiIsString,
  tuiWithStyles
} from "./chunk-5BSJ6YPL.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  EMPTY,
  Injectable,
  InjectionToken,
  ViewEncapsulation,
  computed,
  fromEvent,
  inject,
  input,
  of,
  repeat,
  setClassMetadata,
  switchMap,
  takeUntil,
  timer,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-KFKFA6WT.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-alert.mjs
var _Styles = class _Styles {
};
_Styles.\u0275fac = function Styles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Styles)();
};
_Styles.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _Styles,
  selectors: [["ng-component"]],
  exportAs: ["tui-alert-5.8.0"],
  decls: 0,
  vars: 0,
  template: function Styles_Template(rf, ctx) {
  },
  styles: ['[tuiAlert]:where(*[data-tui-version="5.8.0"]){position:relative;display:grid;grid-column:1;place-self:start start;isolation:isolate;--tui-from: translateX(-100%)}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-inline=end]{justify-self:end;--tui-from: translateX(100%)}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-inline=center]{justify-self:center;--tui-from: translateY(-100%)}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]{align-self:end}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end][data-inline=center]{--tui-from: translateY(100%)}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(1){grid-row:16}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(2){grid-row:17}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(3){grid-row:18}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(4){grid-row:19}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(5){grid-row:20}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(6){grid-row:21}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(7){grid-row:22}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(8){grid-row:23}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(9){grid-row:24}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(10){grid-row:25}[tuiAlert]:where(*[data-tui-version="5.8.0"]).tui-enter,[tuiAlert]:where(*[data-tui-version="5.8.0"]).tui-leave{animation-name:tuiFade,tuiSlide,tuiCollapse}[tuiAlert]:where(*[data-tui-version="5.8.0"]):not(:first-of-type){margin-block-start:0!important}[tuiAlert]:where(*[data-tui-version="5.8.0"]):not(:last-of-type){margin-block-end:0!important}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(1){grid-row:5}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(2){grid-row:6}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(3){grid-row:7}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(4){grid-row:8}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(5){grid-row:9}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(6){grid-row:10}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(7){grid-row:11}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(8){grid-row:12}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(9){grid-row:13}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(10){grid-row:14}[tuiAlert]:where(*[data-tui-version="5.8.0"])>*{grid-row:1 / span 2}[tuiAlert]:where(*[data-tui-version="5.8.0"])>*:before,[tuiAlert]:where(*[data-tui-version="5.8.0"])>*:after{content:"";display:block;block-size:.375rem}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var Styles = _Styles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-alert-${TUI_VERSION}`,
      styles: ['[tuiAlert]:where(*[data-tui-version="5.8.0"]){position:relative;display:grid;grid-column:1;place-self:start start;isolation:isolate;--tui-from: translateX(-100%)}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-inline=end]{justify-self:end;--tui-from: translateX(100%)}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-inline=center]{justify-self:center;--tui-from: translateY(-100%)}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]{align-self:end}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end][data-inline=center]{--tui-from: translateY(100%)}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(1){grid-row:16}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(2){grid-row:17}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(3){grid-row:18}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(4){grid-row:19}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(5){grid-row:20}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(6){grid-row:21}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(7){grid-row:22}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(8){grid-row:23}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(9){grid-row:24}[tuiAlert]:where(*[data-tui-version="5.8.0"])[data-block=end]:nth-of-type(10){grid-row:25}[tuiAlert]:where(*[data-tui-version="5.8.0"]).tui-enter,[tuiAlert]:where(*[data-tui-version="5.8.0"]).tui-leave{animation-name:tuiFade,tuiSlide,tuiCollapse}[tuiAlert]:where(*[data-tui-version="5.8.0"]):not(:first-of-type){margin-block-start:0!important}[tuiAlert]:where(*[data-tui-version="5.8.0"]):not(:last-of-type){margin-block-end:0!important}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(1){grid-row:5}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(2){grid-row:6}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(3){grid-row:7}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(4){grid-row:8}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(5){grid-row:9}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(6){grid-row:10}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(7){grid-row:11}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(8){grid-row:12}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(9){grid-row:13}[tuiAlert]:where(*[data-tui-version="5.8.0"]):nth-of-type(10){grid-row:14}[tuiAlert]:where(*[data-tui-version="5.8.0"])>*{grid-row:1 / span 2}[tuiAlert]:where(*[data-tui-version="5.8.0"])>*:before,[tuiAlert]:where(*[data-tui-version="5.8.0"])>*:after{content:"";display:block;block-size:.375rem}\n']
    }]
  }], null, null);
})();
var _TuiAlertDirective = class _TuiAlertDirective {
  constructor() {
    this.nothing = tuiWithStyles(Styles);
    this.context = injectContext();
  }
};
_TuiAlertDirective.\u0275fac = function TuiAlertDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAlertDirective)();
};
_TuiAlertDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiAlertDirective,
  hostAttrs: ["data-tui-version", "5.8.0", "role", "alert", "tuiAlert", ""],
  hostVars: 2,
  hostBindings: function TuiAlertDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-block", ctx.context.block)("data-inline", ctx.context.inline);
    }
  }
});
var TuiAlertDirective = _TuiAlertDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertDirective, [{
    type: Directive,
    args: [{
      host: {
        "data-tui-version": TUI_VERSION,
        role: "alert",
        tuiAlert: "",
        "[attr.data-block]": "context.block",
        "[attr.data-inline]": "context.inline"
      }
    }]
  }], null, null);
})();
var _TuiAlertService = class _TuiAlertService extends TuiPortal {
  constructor(concurrency) {
    super(inject(TuiPopupService));
    this.current = /* @__PURE__ */ new Map();
    this.queue = /* @__PURE__ */ new Set();
    this.concurrency = Math.min(concurrency, 5);
  }
  add(component) {
    if (this.current.size < this.concurrency) {
      this.current.set(component, this.service.add(component));
    } else {
      this.queue.add(component);
    }
    return () => {
      this.current.get(component)?.destroy();
      this.current.delete(component);
      this.queue.delete(component);
      const [next] = this.queue;
      if (this.current.size < this.concurrency && next) {
        this.current.set(next, this.service.add(next));
        this.queue.delete(next);
      }
    };
  }
};
_TuiAlertService.\u0275fac = function TuiAlertService_Factory(__ngFactoryType__) {
  \u0275\u0275invalidFactory();
};
_TuiAlertService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiAlertService,
  factory: _TuiAlertService.\u0275fac
});
var TuiAlertService = _TuiAlertService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertService, [{
    type: Injectable
  }], () => [{
    type: void 0
  }], null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-notification.mjs
function TuiNotificationComponent_ng_container_3_Template(rf, ctx) {
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
function TuiNotificationComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 7);
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    \u0275\u0275property("innerHTML", text_r2, \u0275\u0275sanitizeHtml);
  }
}
function TuiNotificationComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function TuiNotificationComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.item.$implicit.complete());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("iconStart", ctx_r3.icons.close);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.close(), " ");
  }
}
var ICONS = {
  info: "@tui.info",
  positive: "@tui.circle-check",
  negative: "@tui.circle-x",
  warning: "@tui.circle-alert",
  neutral: "@tui.info"
};
var TUI_NOTIFICATION_DEFAULT_OPTIONS = {
  appearance: "info",
  icon: (appearance) => ICONS[appearance] ?? "",
  size: "l",
  data: void 0,
  autoClose: 3e3,
  label: "",
  closable: true,
  block: "start",
  inline: "end"
};
var [TUI_NOTIFICATION_OPTIONS, tuiNotificationOptionsProvider] = tuiCreateOptions(TUI_NOTIFICATION_DEFAULT_OPTIONS);
var TUI_NOTIFICATION_CONCURRENCY = new InjectionToken(ngDevMode ? "TUI_NOTIFICATION_CONCURRENCY" : "", {
  factory: () => 5
});
var _Styles2 = class _Styles2 {
};
_Styles2.\u0275fac = function Styles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Styles2)();
};
_Styles2.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _Styles2,
  selectors: [["ng-component"]],
  exportAs: ["tui-notification-5.8.0"],
  decls: 0,
  vars: 0,
  template: function Styles_Template(rf, ctx) {
  },
  styles: ['[tuiNotification]:where(*[data-tui-version="5.8.0"]){-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;position:relative;display:flow-root;max-block-size:100%;color:var(--tui-text-primary);padding:var(--t-offset) var(--tui-padding-l);font:var(--tui-typography-body-m);border-radius:var(--tui-radius-l);box-sizing:border-box;text-align:start;text-decoration:none;border-inline-start:var(--t-start) solid transparent;border-inline-end:var(--t-end) solid transparent;--t-offset: calc((var(--t-height) - var(--tui-lh)) / 2);--t-height: var(--tui-height-l);--t-start: 0;--t-end: 0}[tuiNotification]:where(*[data-tui-version="5.8.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-icon-start]{--t-start: 2rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-icon-end]{--t-end: 1.5rem}[tuiNotification]:where(*[data-tui-version="5.8.0"]):before{position:absolute;inset-inline-start:-1rem;inset-block-start:calc(var(--t-offset) + var(--tui-lh));transform:translateY(-100%)}[tuiNotification]:where(*[data-tui-version="5.8.0"]):after{position:absolute;top:50%;transform:translateY(-50%);inset-inline-end:-.5rem;font-size:1rem;margin:0;margin-inline-end:-.25rem;margin-inline-start:auto;color:var(--tui-text-tertiary)!important}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=s]{padding:var(--t-offset) .5rem;font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m);--t-height: var(--tui-height-s)}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=s][data-icon-start]{--t-start: 1.5rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=s]:before{inset-inline-start:-1rem;font-size:1rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=s]:after{inset-inline-end:-.875rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=s] tui-icon{font-size:1rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=s] [tuiTitle]{font:var(--tui-typography-body-s);font-weight:700}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=s] [tuiSubtitle]+*{gap:1rem;margin:.375rem 0 .25rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=s]>[tuiIconButton]{inset-block-start:0;inset-inline-end:0}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=m]{padding:var(--t-offset) var(--tui-padding-m);font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m);--t-height: var(--tui-height-m)}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=m][data-icon-start]{--t-start: 1.625rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=m]:before{inset-inline-start:-.875rem;font-size:1.25rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=m]:after{inset-inline-end:-.75rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=m] tui-icon{font-size:1.25rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=m] [tuiTitle]{font:var(--tui-typography-ui-m);font-weight:700}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=m] [tuiSubtitle]+*{gap:1rem;margin:.625rem 0 .25rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=m]>[tuiIconButton]{inset-block-start:.375rem;inset-inline-end:.5rem}[tuiNotification]:where(*[data-tui-version="5.8.0"]) [tuiTitle]{gap:.125rem;font:var(--tui-typography-ui-l);font-weight:700}[tuiNotification]:where(*[data-tui-version="5.8.0"]) [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiNotification]:where(*[data-tui-version="5.8.0"]) [tuiSubtitle]+*{display:flex;align-items:center;gap:1.25rem;margin-block-start:.625rem;font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version="5.8.0"])>[tuiIconButton]{position:absolute;inset-block-start:.75rem;inset-inline-end:.75rem;box-shadow:none!important;background:transparent!important}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var Styles2 = _Styles2;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles2, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-notification-${TUI_VERSION}`,
      styles: ['[tuiNotification]:where(*[data-tui-version="5.8.0"]){-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;position:relative;display:flow-root;max-block-size:100%;color:var(--tui-text-primary);padding:var(--t-offset) var(--tui-padding-l);font:var(--tui-typography-body-m);border-radius:var(--tui-radius-l);box-sizing:border-box;text-align:start;text-decoration:none;border-inline-start:var(--t-start) solid transparent;border-inline-end:var(--t-end) solid transparent;--t-offset: calc((var(--t-height) - var(--tui-lh)) / 2);--t-height: var(--tui-height-l);--t-start: 0;--t-end: 0}[tuiNotification]:where(*[data-tui-version="5.8.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-icon-start]{--t-start: 2rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-icon-end]{--t-end: 1.5rem}[tuiNotification]:where(*[data-tui-version="5.8.0"]):before{position:absolute;inset-inline-start:-1rem;inset-block-start:calc(var(--t-offset) + var(--tui-lh));transform:translateY(-100%)}[tuiNotification]:where(*[data-tui-version="5.8.0"]):after{position:absolute;top:50%;transform:translateY(-50%);inset-inline-end:-.5rem;font-size:1rem;margin:0;margin-inline-end:-.25rem;margin-inline-start:auto;color:var(--tui-text-tertiary)!important}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=s]{padding:var(--t-offset) .5rem;font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m);--t-height: var(--tui-height-s)}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=s][data-icon-start]{--t-start: 1.5rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=s]:before{inset-inline-start:-1rem;font-size:1rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=s]:after{inset-inline-end:-.875rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=s] tui-icon{font-size:1rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=s] [tuiTitle]{font:var(--tui-typography-body-s);font-weight:700}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=s] [tuiSubtitle]+*{gap:1rem;margin:.375rem 0 .25rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=s]>[tuiIconButton]{inset-block-start:0;inset-inline-end:0}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=m]{padding:var(--t-offset) var(--tui-padding-m);font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m);--t-height: var(--tui-height-m)}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=m][data-icon-start]{--t-start: 1.625rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=m]:before{inset-inline-start:-.875rem;font-size:1.25rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=m]:after{inset-inline-end:-.75rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=m] tui-icon{font-size:1.25rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=m] [tuiTitle]{font:var(--tui-typography-ui-m);font-weight:700}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=m] [tuiSubtitle]+*{gap:1rem;margin:.625rem 0 .25rem}[tuiNotification]:where(*[data-tui-version="5.8.0"])[data-size=m]>[tuiIconButton]{inset-block-start:.375rem;inset-inline-end:.5rem}[tuiNotification]:where(*[data-tui-version="5.8.0"]) [tuiTitle]{gap:.125rem;font:var(--tui-typography-ui-l);font-weight:700}[tuiNotification]:where(*[data-tui-version="5.8.0"]) [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiNotification]:where(*[data-tui-version="5.8.0"]) [tuiSubtitle]+*{display:flex;align-items:center;gap:1.25rem;margin-block-start:.625rem;font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version="5.8.0"])>[tuiIconButton]{position:absolute;inset-block-start:.75rem;inset-inline-end:.75rem;box-shadow:none!important;background:transparent!important}\n']
    }]
  }], null, null);
})();
var _TuiNotificationDirective = class _TuiNotificationDirective {
  constructor() {
    this.options = inject(TUI_NOTIFICATION_OPTIONS);
    this.nothing = tuiWithStyles(Styles2);
    this.icons = tuiIconStart(computed((icon = this.icon()) => tuiIsString(icon) ? icon : icon(this.appearance())));
    this.appearance = input(this.options.appearance);
    this.size = input(this.options.size);
    this.icon = input(this.options.icon);
  }
};
_TuiNotificationDirective.\u0275fac = function TuiNotificationDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiNotificationDirective)();
};
_TuiNotificationDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiNotificationDirective,
  selectors: [["", "tuiNotification", "", 5, "ng-template"]],
  hostVars: 1,
  hostBindings: function TuiNotificationDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.size());
    }
  },
  inputs: {
    appearance: [1, "appearance"],
    size: [1, "size"],
    icon: [1, "icon"]
  },
  features: [\u0275\u0275ProvidersFeature([tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS), tuiLinkOptionsProvider({
    appearance: ""
  }), tuiButtonOptionsProvider({
    appearance: "outline-grayscale",
    size: "s"
  })]), \u0275\u0275HostDirectivesFeature([TuiWithIcons, TuiWithAppearance])]
});
var TuiNotificationDirective = _TuiNotificationDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiNotification]:not(ng-template)",
      providers: [tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS), tuiLinkOptionsProvider({
        appearance: ""
      }), tuiButtonOptionsProvider({
        appearance: "outline-grayscale",
        size: "s"
      })],
      hostDirectives: [TuiWithIcons, TuiWithAppearance],
      host: {
        "[attr.data-size]": "size()"
      }
    }]
  }], null, null);
})();
var _TuiNotificationComponent = class _TuiNotificationComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.icons = inject(TUI_COMMON_ICONS);
    this.close = inject(TUI_CLOSE_WORD);
    this.item = injectContext();
    this.sub = of(typeof this.item.autoClose === "function" ? this.item.autoClose(this.item.appearance) : this.item.autoClose).pipe(switchMap((autoClose) => autoClose ? timer(autoClose) : EMPTY), takeUntil(fromEvent(this.el, "mouseenter")), repeat({
      delay: () => fromEvent(this.el, "mouseleave")
    }), takeUntilDestroyed()).subscribe(() => this.item.$implicit.complete());
  }
};
_TuiNotificationComponent.\u0275fac = function TuiNotificationComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiNotificationComponent)();
};
_TuiNotificationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiNotificationComponent,
  selectors: [["tui-notification-alert"]],
  hostAttrs: ["role", "alert"],
  features: [\u0275\u0275HostDirectivesFeature([TuiAnimated, TuiAlertDirective])],
  decls: 7,
  vars: 9,
  consts: [[1, "t-wrapper"], ["size", "m", "tuiNotification", "", 3, "appearance", "icon"], ["tuiTitle", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiSubtitle", ""], [3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiIconButton", "", "type", "button", 3, "iconStart"], [3, "innerHTML"], ["tuiIconButton", "", "type", "button", 3, "click", "iconStart"]],
  template: function TuiNotificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275template(3, TuiNotificationComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
      \u0275\u0275elementStart(4, "span", 4);
      \u0275\u0275template(5, TuiNotificationComponent_span_5_Template, 1, 1, "span", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, TuiNotificationComponent_Conditional_6_Template, 2, 2, "button", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("t-closable", ctx.item.closable);
      \u0275\u0275property("appearance", ctx.item.appearance)("icon", ctx.item.icon);
      \u0275\u0275advance(2);
      \u0275\u0275property("polymorpheusOutlet", ctx.item.label)("polymorpheusOutletContext", ctx.item);
      \u0275\u0275advance(2);
      \u0275\u0275property("polymorpheusOutlet", ctx.item.content)("polymorpheusOutletContext", ctx.item);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item.closable ? 6 : -1);
    }
  },
  dependencies: [PolymorpheusOutlet, TuiButton, TuiNotificationDirective, TuiTitle],
  styles: ["[_nghost-%COMP%]{inline-size:18rem;margin:1.625rem 3rem;word-break:break-word;transform:translateZ(0);filter:drop-shadow(0 .375rem 1rem rgba(0,0,0,.12))}[_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%], tui-root._mobile   [_nghost-%COMP%]{margin:.625rem 1rem}.t-wrapper[_ngcontent-%COMP%]{background:var(--tui-background-base);clip-path:inset(.375rem 0 round var(--tui-radius-m))}.t-closable[data-size][_ngcontent-%COMP%]{padding-inline-end:2.5rem}"],
  changeDetection: 0
});
var TuiNotificationComponent = _TuiNotificationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationComponent, [{
    type: Component,
    args: [{
      selector: "tui-notification-alert",
      imports: [PolymorpheusOutlet, TuiButton, TuiNotificationDirective, TuiTitle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [TuiAnimated, TuiAlertDirective],
      host: {
        role: "alert"
      },
      template: '<div class="t-wrapper">\n    <div\n        size="m"\n        tuiNotification\n        [appearance]="item.appearance"\n        [class.t-closable]="item.closable"\n        [icon]="item.icon"\n    >\n        <span tuiTitle>\n            <ng-container *polymorpheusOutlet="item.label as text; context: item">\n                {{ text }}\n            </ng-container>\n            <span tuiSubtitle>\n                <span\n                    *polymorpheusOutlet="item.content as text; context: item"\n                    [innerHTML]="text"\n                ></span>\n            </span>\n        </span>\n        @if (item.closable) {\n            <button\n                tuiIconButton\n                type="button"\n                [iconStart]="icons.close"\n                (click)="item.$implicit.complete()"\n            >\n                {{ close() }}\n            </button>\n        }\n    </div>\n</div>\n',
      styles: [":host{inline-size:18rem;margin:1.625rem 3rem;word-break:break-word;transform:translateZ(0);filter:drop-shadow(0 .375rem 1rem rgba(0,0,0,.12))}:host :host-context(tui-root._mobile){margin:.625rem 1rem}.t-wrapper{background:var(--tui-background-base);clip-path:inset(.375rem 0 round var(--tui-radius-m))}.t-closable[data-size]{padding-inline-end:2.5rem}\n"]
    }]
  }], null, null);
})();
var _TuiNotificationService = class _TuiNotificationService extends TuiAlertService {
  constructor() {
    super(inject(TUI_NOTIFICATION_CONCURRENCY));
    this.options = inject(TUI_NOTIFICATION_OPTIONS);
    this.component = TuiNotificationComponent;
  }
};
_TuiNotificationService.\u0275fac = function TuiNotificationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiNotificationService)();
};
_TuiNotificationService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiNotificationService,
  factory: _TuiNotificationService.\u0275fac,
  providedIn: "root"
});
var TuiNotificationService = _TuiNotificationService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _TuiNotificationTemplate = class _TuiNotificationTemplate {
  constructor() {
    this.tuiNotificationOptions = input({});
  }
};
_TuiNotificationTemplate.\u0275fac = function TuiNotificationTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiNotificationTemplate)();
};
_TuiNotificationTemplate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiNotificationTemplate,
  selectors: [["ng-template", "tuiNotification", ""]],
  inputs: {
    tuiNotificationOptions: [1, "tuiNotificationOptions"]
  },
  features: [\u0275\u0275ProvidersFeature([tuiAsPortal(TuiNotificationService)]), \u0275\u0275HostDirectivesFeature([{
    directive: TuiPortalDirective,
    inputs: ["options", "tuiNotificationOptions", "open", "tuiNotification"],
    outputs: ["openChange", "tuiNotificationChange"]
  }])]
});
var TuiNotificationTemplate = _TuiNotificationTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationTemplate, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiNotification]",
      providers: [tuiAsPortal(TuiNotificationService)],
      hostDirectives: [{
        directive: TuiPortalDirective,
        inputs: ["options: tuiNotificationOptions", "open: tuiNotification"],
        outputs: ["openChange: tuiNotificationChange"]
      }]
    }]
  }], null, null);
})();

export {
  TUI_NOTIFICATION_OPTIONS,
  TuiNotificationService
};
//# sourceMappingURL=chunk-YGOCUPM6.js.map
