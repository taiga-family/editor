import {
  TuiPopoverDirective
} from "./chunk-JHR5K2RS.js";
import {
  POLYMORPHEUS_CONTEXT,
  PolymorpheusOutlet,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TUI_IS_MOBILE,
  TuiAnimated,
  TuiAnimatedParent,
  TuiButton,
  TuiIcons,
  TuiPopoverService,
  TuiWithAppearance,
  TuiWithIcons,
  injectContext,
  tuiAppearanceOptionsProvider,
  tuiAsPopover,
  tuiButtonOptionsProvider,
  tuiCreateOptions,
  tuiLinkOptionsProvider
} from "./chunk-3VK442GK.js";
import {
  AsyncPipe,
  NgComponentOutlet,
  NgForOf,
  NgIf,
  takeUntilDestroyed,
  toSignal,
  tuiInjectElement,
  tuiIsString,
  tuiWithStyles
} from "./chunk-2QWGY2YZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  INJECTOR$1,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  Pipe,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-SLVEPEAC.js";
import {
  BehaviorSubject,
  EMPTY,
  combineLatest,
  fromEvent,
  identity,
  map,
  of,
  repeat,
  switchMap,
  takeUntil,
  timer
} from "./chunk-CJ7OSSQR.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-title.mjs
var _TuiTitleStyles = class _TuiTitleStyles {
};
_TuiTitleStyles.\u0275fac = function TuiTitleStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTitleStyles)();
};
_TuiTitleStyles.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiTitleStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-title"],
  decls: 0,
  vars: 0,
  template: function TuiTitleStyles_Template(rf, ctx) {
  },
  styles: ["[tuiTitle]{position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-font-text-ui-m)}[tuiTitle][data-size=s]{gap:.125rem;font:var(--tui-font-text-s)}[tuiTitle][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-xs)}[tuiTitle][data-size=m]{gap:.125rem;font:var(--tui-font-heading-5)}[tuiTitle][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle][data-size=l]{gap:.5rem;font:var(--tui-font-heading-3)}[tuiTitle][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle] h1,[tuiTitle] h2,[tuiTitle] h3,[tuiTitle] h4,[tuiTitle] h5,[tuiTitle] h6{margin:0;font:inherit}[tuiSubtitle]{font:var(--tui-font-text-ui-s);margin:0}[tuiButton] [tuiTitle]{margin-inline-end:auto}[tuiButton] [tuiTitle] [tuiSubtitle]{color:var(--tui-text-secondary)}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiTitleStyles = _TuiTitleStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTitleStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-title"
      },
      styles: ["[tuiTitle]{position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-font-text-ui-m)}[tuiTitle][data-size=s]{gap:.125rem;font:var(--tui-font-text-s)}[tuiTitle][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-xs)}[tuiTitle][data-size=m]{gap:.125rem;font:var(--tui-font-heading-5)}[tuiTitle][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle][data-size=l]{gap:.5rem;font:var(--tui-font-heading-3)}[tuiTitle][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle] h1,[tuiTitle] h2,[tuiTitle] h3,[tuiTitle] h4,[tuiTitle] h5,[tuiTitle] h6{margin:0;font:inherit}[tuiSubtitle]{font:var(--tui-font-text-ui-s);margin:0}[tuiButton] [tuiTitle]{margin-inline-end:auto}[tuiButton] [tuiTitle] [tuiSubtitle]{color:var(--tui-text-secondary)}\n"]
    }]
  }], null, null);
})();
var _TuiTitle = class _TuiTitle {
  constructor() {
    this.nothing = tuiWithStyles(TuiTitleStyles);
    this.size = "";
  }
};
_TuiTitle.\u0275fac = function TuiTitle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTitle)();
};
_TuiTitle.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiTitle,
  selectors: [["", "tuiTitle", ""]],
  hostAttrs: ["tuiTitle", ""],
  hostVars: 1,
  hostBindings: function TuiTitle_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.size || null);
    }
  },
  inputs: {
    size: [0, "tuiTitle", "size"]
  }
});
var TuiTitle = _TuiTitle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTitle, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTitle]",
      host: {
        tuiTitle: "",
        "[attr.data-size]": "size || null"
      }
    }]
  }], null, {
    size: [{
      type: Input,
      args: ["tuiTitle"]
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-notification.mjs
var ICONS = {
  info: "@tui.info",
  positive: "@tui.circle-check",
  negative: "@tui.circle-x",
  warning: "@tui.circle-alert",
  neutral: "@tui.info",
  /* TODO @deprecated remove in v5 */
  success: "@tui.circle-check",
  /* TODO @deprecated remove in v5 */
  error: "@tui.circle-x"
};
var TUI_NOTIFICATION_DEFAULT_OPTIONS = {
  appearance: "info",
  icon: (appearance) => ICONS[appearance] ?? "",
  size: "l"
};
var [TUI_NOTIFICATION_OPTIONS, tuiNotificationOptionsProvider] = tuiCreateOptions(TUI_NOTIFICATION_DEFAULT_OPTIONS);
var _TuiNotificationStyles = class _TuiNotificationStyles {
};
_TuiNotificationStyles.\u0275fac = function TuiNotificationStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiNotificationStyles)();
};
_TuiNotificationStyles.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiNotificationStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-notification"],
  decls: 0,
  vars: 0,
  template: function TuiNotificationStyles_Template(rf, ctx) {
  },
  styles: ['tui-notification,[tuiNotification]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;position:relative;display:block;max-block-size:100%;color:var(--tui-text-primary);font:var(--tui-font-text-m);padding:1rem;line-height:1.5rem;border-radius:var(--tui-radius-l);box-sizing:border-box;text-align:start;text-decoration:none;border-inline-start:var(--t-start) solid transparent;border-inline-end:var(--t-end) solid transparent;--t-start: 0;--t-end: 0}tui-notification[style*="--t-icon-start:"],[tuiNotification][style*="--t-icon-start:"]{--t-start: 2rem}tui-notification[style*="--t-icon-end:"],[tuiNotification][style*="--t-icon-end:"]{--t-end: 1.5rem}tui-notification:before,[tuiNotification]:before{position:absolute;left:-1rem;inset-inline-start:-1rem}tui-notification:after,[tuiNotification]:after{position:absolute;top:50%;transform:translateY(-50%);right:-.5rem;font-size:1rem;margin:0;margin-inline-end:-.25rem;margin-inline-start:auto;color:var(--tui-text-tertiary)!important}@supports (inset-inline-end: 0){tui-notification:after,[tuiNotification]:after{right:unset;inset-inline-end:-.5rem}}tui-notification[data-size=s],[tuiNotification][data-size=s]{padding:.375rem .5rem;font:var(--tui-font-text-s);line-height:1.25rem;border-radius:var(--tui-radius-m)}tui-notification[data-size=s][style*="--t-icon-start:"],[tuiNotification][data-size=s][style*="--t-icon-start:"]{--t-start: 1.5rem}tui-notification[data-size=s]:before,[tuiNotification][data-size=s]:before{top:.5rem;left:-1rem;inset-inline-start:-.875rem;font-size:1rem}tui-notification[data-size=s]:after,[tuiNotification][data-size=s]:after{right:-.875rem}@supports (inset-inline-end: 0){tui-notification[data-size=s]:after,[tuiNotification][data-size=s]:after{right:unset;inset-inline-end:-.875rem}}tui-notification[data-size=s] tui-icon,[tuiNotification][data-size=s] tui-icon{font-size:1rem}tui-notification[data-size=s] [tuiTitle],[tuiNotification][data-size=s] [tuiTitle]{font:var(--tui-font-text-s);font-weight:700}tui-notification[data-size=s] [tuiSubtitle],[tuiNotification][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=s] [tuiSubtitle]+*,[tuiNotification][data-size=s] [tuiSubtitle]+*{gap:1rem;margin:.375rem 0 .25rem}tui-notification[data-size=s]>[tuiIconButton],[tuiNotification][data-size=s]>[tuiIconButton]{top:0;right:0}@supports (inset-inline-end: 0){tui-notification[data-size=s]>[tuiIconButton],[tuiNotification][data-size=s]>[tuiIconButton]{right:unset;inset-inline-end:0}}tui-notification[data-size=m],[tuiNotification][data-size=m]{padding:.75rem;font:var(--tui-font-text-s);line-height:1.25rem;border-radius:var(--tui-radius-m)}tui-notification[data-size=m][style*="--t-icon-start:"],[tuiNotification][data-size=m][style*="--t-icon-start:"]{--t-start: 1.625rem}tui-notification[data-size=m]:before,[tuiNotification][data-size=m]:before{left:-.875rem;inset-inline-start:-.875rem;font-size:1.25rem}tui-notification[data-size=m]:after,[tuiNotification][data-size=m]:after{right:-.75rem}@supports (inset-inline-end: 0){tui-notification[data-size=m]:after,[tuiNotification][data-size=m]:after{right:unset;inset-inline-end:-.75rem}}tui-notification[data-size=m] tui-icon,[tuiNotification][data-size=m] tui-icon{font-size:1.25rem}tui-notification[data-size=m] [tuiTitle],[tuiNotification][data-size=m] [tuiTitle]{font:var(--tui-font-text-ui-m);font-weight:700}tui-notification[data-size=m] [tuiSubtitle],[tuiNotification][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=m] [tuiSubtitle]+*,[tuiNotification][data-size=m] [tuiSubtitle]+*{gap:1rem;margin:.625rem 0 .25rem}tui-notification[data-size=m]>[tuiIconButton],[tuiNotification][data-size=m]>[tuiIconButton]{top:.375rem;right:.5rem}@supports (inset-inline-end: 0){tui-notification[data-size=m]>[tuiIconButton],[tuiNotification][data-size=m]>[tuiIconButton]{right:unset;inset-inline-end:.5rem}}tui-notification [tuiTitle],[tuiNotification] [tuiTitle]{gap:.125rem;font:var(--tui-font-text-ui-l);font-weight:700}tui-notification [tuiSubtitle],[tuiNotification] [tuiSubtitle]{font:var(--tui-font-text-m)}tui-notification [tuiSubtitle]+*,[tuiNotification] [tuiSubtitle]+*{display:flex;align-items:center;gap:1.25rem;margin-block-start:.625rem;font:var(--tui-font-text-s)}tui-notification>[tuiIconButton],[tuiNotification]>[tuiIconButton]{position:absolute;top:.75rem;right:.75rem;box-shadow:none!important;background:transparent!important}@supports (inset-inline-end: 0){tui-notification>[tuiIconButton],[tuiNotification]>[tuiIconButton]{right:unset;inset-inline-end:.75rem}}[tuiNotification]{cursor:pointer}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiNotificationStyles = _TuiNotificationStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-notification"
      },
      styles: ['tui-notification,[tuiNotification]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;position:relative;display:block;max-block-size:100%;color:var(--tui-text-primary);font:var(--tui-font-text-m);padding:1rem;line-height:1.5rem;border-radius:var(--tui-radius-l);box-sizing:border-box;text-align:start;text-decoration:none;border-inline-start:var(--t-start) solid transparent;border-inline-end:var(--t-end) solid transparent;--t-start: 0;--t-end: 0}tui-notification[style*="--t-icon-start:"],[tuiNotification][style*="--t-icon-start:"]{--t-start: 2rem}tui-notification[style*="--t-icon-end:"],[tuiNotification][style*="--t-icon-end:"]{--t-end: 1.5rem}tui-notification:before,[tuiNotification]:before{position:absolute;left:-1rem;inset-inline-start:-1rem}tui-notification:after,[tuiNotification]:after{position:absolute;top:50%;transform:translateY(-50%);right:-.5rem;font-size:1rem;margin:0;margin-inline-end:-.25rem;margin-inline-start:auto;color:var(--tui-text-tertiary)!important}@supports (inset-inline-end: 0){tui-notification:after,[tuiNotification]:after{right:unset;inset-inline-end:-.5rem}}tui-notification[data-size=s],[tuiNotification][data-size=s]{padding:.375rem .5rem;font:var(--tui-font-text-s);line-height:1.25rem;border-radius:var(--tui-radius-m)}tui-notification[data-size=s][style*="--t-icon-start:"],[tuiNotification][data-size=s][style*="--t-icon-start:"]{--t-start: 1.5rem}tui-notification[data-size=s]:before,[tuiNotification][data-size=s]:before{top:.5rem;left:-1rem;inset-inline-start:-.875rem;font-size:1rem}tui-notification[data-size=s]:after,[tuiNotification][data-size=s]:after{right:-.875rem}@supports (inset-inline-end: 0){tui-notification[data-size=s]:after,[tuiNotification][data-size=s]:after{right:unset;inset-inline-end:-.875rem}}tui-notification[data-size=s] tui-icon,[tuiNotification][data-size=s] tui-icon{font-size:1rem}tui-notification[data-size=s] [tuiTitle],[tuiNotification][data-size=s] [tuiTitle]{font:var(--tui-font-text-s);font-weight:700}tui-notification[data-size=s] [tuiSubtitle],[tuiNotification][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=s] [tuiSubtitle]+*,[tuiNotification][data-size=s] [tuiSubtitle]+*{gap:1rem;margin:.375rem 0 .25rem}tui-notification[data-size=s]>[tuiIconButton],[tuiNotification][data-size=s]>[tuiIconButton]{top:0;right:0}@supports (inset-inline-end: 0){tui-notification[data-size=s]>[tuiIconButton],[tuiNotification][data-size=s]>[tuiIconButton]{right:unset;inset-inline-end:0}}tui-notification[data-size=m],[tuiNotification][data-size=m]{padding:.75rem;font:var(--tui-font-text-s);line-height:1.25rem;border-radius:var(--tui-radius-m)}tui-notification[data-size=m][style*="--t-icon-start:"],[tuiNotification][data-size=m][style*="--t-icon-start:"]{--t-start: 1.625rem}tui-notification[data-size=m]:before,[tuiNotification][data-size=m]:before{left:-.875rem;inset-inline-start:-.875rem;font-size:1.25rem}tui-notification[data-size=m]:after,[tuiNotification][data-size=m]:after{right:-.75rem}@supports (inset-inline-end: 0){tui-notification[data-size=m]:after,[tuiNotification][data-size=m]:after{right:unset;inset-inline-end:-.75rem}}tui-notification[data-size=m] tui-icon,[tuiNotification][data-size=m] tui-icon{font-size:1.25rem}tui-notification[data-size=m] [tuiTitle],[tuiNotification][data-size=m] [tuiTitle]{font:var(--tui-font-text-ui-m);font-weight:700}tui-notification[data-size=m] [tuiSubtitle],[tuiNotification][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=m] [tuiSubtitle]+*,[tuiNotification][data-size=m] [tuiSubtitle]+*{gap:1rem;margin:.625rem 0 .25rem}tui-notification[data-size=m]>[tuiIconButton],[tuiNotification][data-size=m]>[tuiIconButton]{top:.375rem;right:.5rem}@supports (inset-inline-end: 0){tui-notification[data-size=m]>[tuiIconButton],[tuiNotification][data-size=m]>[tuiIconButton]{right:unset;inset-inline-end:.5rem}}tui-notification [tuiTitle],[tuiNotification] [tuiTitle]{gap:.125rem;font:var(--tui-font-text-ui-l);font-weight:700}tui-notification [tuiSubtitle],[tuiNotification] [tuiSubtitle]{font:var(--tui-font-text-m)}tui-notification [tuiSubtitle]+*,[tuiNotification] [tuiSubtitle]+*{display:flex;align-items:center;gap:1.25rem;margin-block-start:.625rem;font:var(--tui-font-text-s)}tui-notification>[tuiIconButton],[tuiNotification]>[tuiIconButton]{position:absolute;top:.75rem;right:.75rem;box-shadow:none!important;background:transparent!important}@supports (inset-inline-end: 0){tui-notification>[tuiIconButton],[tuiNotification]>[tuiIconButton]{right:unset;inset-inline-end:.75rem}}[tuiNotification]{cursor:pointer}\n']
    }]
  }], null, null);
})();
var _TuiNotification = class _TuiNotification {
  constructor() {
    this.options = inject(TUI_NOTIFICATION_OPTIONS);
    this.nothing = tuiWithStyles(TuiNotificationStyles);
    this.icons = inject(TuiIcons);
    this.appearance = this.options.appearance;
    this.icon = this.options.icon;
    this.size = this.options.size;
  }
  ngOnInit() {
    this.refresh();
  }
  ngOnChanges() {
    this.refresh();
  }
  refresh() {
    this.icons.iconStart.set(tuiIsString(this.icon) ? this.icon : this.icon(this.appearance));
  }
};
_TuiNotification.\u0275fac = function TuiNotification_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiNotification)();
};
_TuiNotification.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiNotification,
  selectors: [["tui-notification"], ["a", "tuiNotification", ""], ["button", "tuiNotification", ""]],
  hostVars: 1,
  hostBindings: function TuiNotification_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.size);
    }
  },
  inputs: {
    appearance: "appearance",
    icon: "icon",
    size: "size"
  },
  features: [\u0275\u0275ProvidersFeature([tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS), tuiLinkOptionsProvider({
    appearance: "",
    pseudo: true
  }), tuiButtonOptionsProvider({
    appearance: "outline-grayscale",
    size: "s"
  })]), \u0275\u0275HostDirectivesFeature([TuiWithIcons, TuiWithAppearance]), \u0275\u0275NgOnChangesFeature]
});
var TuiNotification = _TuiNotification;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotification, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-notification,a[tuiNotification],button[tuiNotification]",
      providers: [tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS), tuiLinkOptionsProvider({
        appearance: "",
        pseudo: true
      }), tuiButtonOptionsProvider({
        appearance: "outline-grayscale",
        size: "s"
      })],
      hostDirectives: [TuiWithIcons, TuiWithAppearance],
      host: {
        "[attr.data-size]": "size"
      }
    }]
  }], null, {
    appearance: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-pipes-mapper.mjs
var _TuiMapperPipe = class _TuiMapperPipe {
  /**
   * Maps object to an arbitrary result through a mapper function
   *
   * @param value an item to transform
   * @param mapper a mapping function
   * @param args arbitrary number of additional arguments
   */
  transform(value, mapper, ...args) {
    return mapper(value, ...args);
  }
};
_TuiMapperPipe.\u0275fac = function TuiMapperPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiMapperPipe)();
};
_TuiMapperPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
  name: "tuiMapper",
  type: _TuiMapperPipe,
  pure: true
});
var TuiMapperPipe = _TuiMapperPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMapperPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiMapper"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-alert.mjs
function TuiAlertComponent_ng_container_3_Template(rf, ctx) {
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
function TuiAlertComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 7);
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    \u0275\u0275property("innerHTML", text_r2, \u0275\u0275sanitizeHtml);
  }
}
function TuiAlertComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function TuiAlertComponent_button_6_Template_button_click_0_listener() {
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
function TuiAlerts_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 3);
    \u0275\u0275pipe(1, "tuiMapper");
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", item_r1.component.component)("ngComponentOutletInjector", \u0275\u0275pipeBind2(1, 2, item_r1, ctx_r1.mapper));
  }
}
function TuiAlerts_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, TuiAlerts_div_0_ng_container_1_Template, 2, 5, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", group_r3);
  }
}
var TUI_ALERT_DEFAULT_OPTIONS = {
  autoClose: 3e3,
  label: "",
  closeable: true,
  data: void 0
};
var TUI_ALERT_OPTIONS = new InjectionToken(ngDevMode ? "TUI_ALERT_OPTIONS" : "", {
  factory: () => __spreadValues(__spreadValues({}, TUI_ALERT_DEFAULT_OPTIONS), inject(TUI_NOTIFICATION_OPTIONS))
});
var TUI_ALERT_POSITION = new InjectionToken(ngDevMode ? "TUI_ALERT_POSITION" : "", {
  factory: () => inject(TUI_IS_MOBILE) ? "1rem 1rem 0 auto" : "2rem 3rem 0 auto"
});
var TUI_ALERTS = new InjectionToken(ngDevMode ? "TUI_ALERTS" : "", {
  factory: () => new BehaviorSubject([])
});
var TUI_ALERTS_GROUPED = new InjectionToken(ngDevMode ? "TUI_ALERTS_GROUPED" : "");
var _TuiAlertComponent = class _TuiAlertComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.icons = inject(TUI_COMMON_ICONS);
    this.close = toSignal(inject(TUI_CLOSE_WORD));
    this.position = inject(TUI_ALERT_POSITION);
    this.item = injectContext();
    this.sub = of(typeof this.item.autoClose === "function" ? this.item.autoClose(this.item.appearance) : this.item.autoClose).pipe(switchMap((autoClose) => autoClose ? timer(autoClose) : EMPTY), takeUntil(fromEvent(this.el, "mouseenter")), repeat({
      delay: () => fromEvent(this.el, "mouseleave")
    }), takeUntilDestroyed()).subscribe(() => this.item.$implicit.complete());
  }
  get from() {
    return this.position.endsWith("auto") ? "translateX(100%)" : "translateX(-100%)";
  }
};
_TuiAlertComponent.\u0275fac = function TuiAlertComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAlertComponent)();
};
_TuiAlertComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiAlertComponent,
  selectors: [["tui-alert"]],
  hostAttrs: ["role", "alert"],
  hostVars: 4,
  hostBindings: function TuiAlertComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("margin", ctx.position)("--tui-from", ctx.from);
    }
  },
  features: [\u0275\u0275HostDirectivesFeature([TuiAnimated])],
  decls: 7,
  vars: 9,
  consts: [[1, "t-wrapper"], ["size", "m", 3, "appearance", "icon"], ["tuiTitle", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiSubtitle", ""], [3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiIconButton", "", "type", "button", 3, "iconStart", "click", 4, "ngIf"], [3, "innerHTML"], ["tuiIconButton", "", "type", "button", 3, "click", "iconStart"]],
  template: function TuiAlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "tui-notification", 1)(2, "span", 2);
      \u0275\u0275template(3, TuiAlertComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
      \u0275\u0275elementStart(4, "span", 4);
      \u0275\u0275template(5, TuiAlertComponent_span_5_Template, 1, 1, "span", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, TuiAlertComponent_button_6_Template, 2, 2, "button", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("t-closeable", ctx.item.closeable);
      \u0275\u0275property("appearance", ctx.item.appearance)("icon", ctx.item.icon);
      \u0275\u0275advance(2);
      \u0275\u0275property("polymorpheusOutlet", ctx.item.label)("polymorpheusOutletContext", ctx.item);
      \u0275\u0275advance(2);
      \u0275\u0275property("polymorpheusOutlet", ctx.item.content)("polymorpheusOutletContext", ctx.item);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.item.closeable);
    }
  },
  dependencies: [NgIf, PolymorpheusOutlet, TuiButton, TuiNotification, TuiTitle],
  styles: ["[_nghost-%COMP%]{display:grid;inline-size:18rem;flex-shrink:0;word-break:break-word}.tui-enter[_nghost-%COMP%], .tui-leave[_nghost-%COMP%]{animation-name:tuiFade,tuiSlide,tuiCollapse}[_nghost-%COMP%]:not(:first-child){margin-block-start:0!important}[_nghost-%COMP%]:not(:last-child){margin-block-end:0!important}.t-wrapper[_ngcontent-%COMP%]{transition-property:margin;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;grid-row:1 / span 2;overflow:hidden;margin-block-end:.75rem;background:var(--tui-background-base);border-radius:var(--tui-radius-m);box-shadow:var(--tui-shadow-medium)}.tui-leave[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{margin:0}.t-closeable[_ngcontent-%COMP%]{padding-inline-end:2.5rem}"],
  changeDetection: 0
});
var TuiAlertComponent = _TuiAlertComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-alert",
      imports: [NgIf, PolymorpheusOutlet, TuiButton, TuiNotification, TuiTitle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [TuiAnimated],
      host: {
        role: "alert",
        "[style.margin]": "position",
        "[style.--tui-from]": "from"
      },
      template: '<div class="t-wrapper">\n    <tui-notification\n        size="m"\n        [appearance]="item.appearance"\n        [class.t-closeable]="item.closeable"\n        [icon]="item.icon"\n    >\n        <span tuiTitle>\n            <ng-container *polymorpheusOutlet="item.label as text; context: item">\n                {{ text }}\n            </ng-container>\n            <span tuiSubtitle>\n                <span\n                    *polymorpheusOutlet="item.content as text; context: item"\n                    [innerHTML]="text"\n                ></span>\n            </span>\n        </span>\n        <button\n            *ngIf="item.closeable"\n            tuiIconButton\n            type="button"\n            [iconStart]="icons.close"\n            (click)="item.$implicit.complete()"\n        >\n            {{ close() }}\n        </button>\n    </tui-notification>\n</div>\n',
      styles: [":host{display:grid;inline-size:18rem;flex-shrink:0;word-break:break-word}:host.tui-enter,:host.tui-leave{animation-name:tuiFade,tuiSlide,tuiCollapse}:host:not(:first-child){margin-block-start:0!important}:host:not(:last-child){margin-block-end:0!important}.t-wrapper{transition-property:margin;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;grid-row:1 / span 2;overflow:hidden;margin-block-end:.75rem;background:var(--tui-background-base);border-radius:var(--tui-radius-m);box-shadow:var(--tui-shadow-medium)}:host.tui-leave .t-wrapper{margin:0}.t-closeable{padding-inline-end:2.5rem}\n"]
    }]
  }], null, null);
})();
var _TuiAlertService = class _TuiAlertService extends TuiPopoverService {
};
_TuiAlertService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiAlertService_BaseFactory;
  return function TuiAlertService_Factory(__ngFactoryType__) {
    return (\u0275TuiAlertService_BaseFactory || (\u0275TuiAlertService_BaseFactory = \u0275\u0275getInheritedFactory(_TuiAlertService)))(__ngFactoryType__ || _TuiAlertService);
  };
})();
_TuiAlertService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiAlertService,
  factory: () => (() => new _TuiAlertService(TUI_ALERTS, TuiAlertComponent, inject(TUI_ALERT_OPTIONS)))(),
  providedIn: "root"
});
var TuiAlertService = _TuiAlertService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new TuiAlertService(TUI_ALERTS, TuiAlertComponent, inject(TUI_ALERT_OPTIONS))
    }]
  }], null, null);
})();
var _TuiAlert = class _TuiAlert extends TuiPopoverDirective {
};
_TuiAlert.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiAlert_BaseFactory;
  return function TuiAlert_Factory(__ngFactoryType__) {
    return (\u0275TuiAlert_BaseFactory || (\u0275TuiAlert_BaseFactory = \u0275\u0275getInheritedFactory(_TuiAlert)))(__ngFactoryType__ || _TuiAlert);
  };
})();
_TuiAlert.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiAlert,
  selectors: [["ng-template", "tuiAlert", ""]],
  inputs: {
    options: [0, "tuiAlertOptions", "options"],
    open: [0, "tuiAlert", "open"]
  },
  outputs: {
    openChange: "tuiAlertChange"
  },
  features: [\u0275\u0275ProvidersFeature([tuiAsPopover(TuiAlertService)]), \u0275\u0275InheritDefinitionFeature]
});
var TuiAlert = _TuiAlert;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlert, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiAlert]",
      inputs: ["options: tuiAlertOptions", "open: tuiAlert"],
      outputs: ["openChange: tuiAlertChange"],
      providers: [tuiAsPopover(TuiAlertService)]
    }]
  }], null, null);
})();
var _TuiAlerts = class _TuiAlerts {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.alerts$ = inject(TUI_ALERTS_GROUPED);
    this.trackBy = identity;
    this.mapper = (useValue) => Injector.create({
      providers: [{
        provide: POLYMORPHEUS_CONTEXT,
        useValue
      }],
      parent: this.injector
    });
  }
};
_TuiAlerts.\u0275fac = function TuiAlerts_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAlerts)();
};
_TuiAlerts.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiAlerts,
  selectors: [["tui-alerts"]],
  features: [\u0275\u0275ProvidersFeature([{
    provide: TUI_ALERTS_GROUPED,
    useFactory: () => combineLatest([of(/* @__PURE__ */ new Map()), inject(TUI_ALERTS)]).pipe(map(([map2, alerts]) => {
      map2.forEach((_, key) => map2.set(key, []));
      alerts.forEach((alert) => {
        const key = alert.component.component;
        const value = map2.get(key) || [];
        map2.set(key, [...value, alert]);
      });
      return Array.from(map2.values());
    }))
  }])],
  decls: 2,
  vars: 4,
  consts: [["tuiAnimatedParent", "", "class", "t-wrapper", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tuiAnimatedParent", "", 1, "t-wrapper"], [3, "ngComponentOutlet", "ngComponentOutletInjector", 4, "ngFor", "ngForOf"], [3, "ngComponentOutlet", "ngComponentOutletInjector"]],
  template: function TuiAlerts_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TuiAlerts_div_0_Template, 2, 1, "div", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(1, 2, ctx.alerts$))("ngForTrackBy", ctx.trackBy);
    }
  },
  dependencies: [AsyncPipe, NgComponentOutlet, NgForOf, TuiAnimatedParent, TuiMapperPipe],
  styles: ["tui-alerts>.t-wrapper{position:fixed;top:0;left:0;inline-size:100%;display:flex;flex-direction:column;pointer-events:none;box-sizing:border-box;block-size:100%;padding:env(safe-area-inset-top) 0 env(safe-area-inset-bottom)}tui-alerts>.t-wrapper>*{pointer-events:auto}\n"],
  encapsulation: 2
});
var TuiAlerts = _TuiAlerts;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlerts, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-alerts",
      imports: [AsyncPipe, NgComponentOutlet, NgForOf, TuiAnimatedParent, TuiMapperPipe],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [{
        provide: TUI_ALERTS_GROUPED,
        useFactory: () => combineLatest([of(/* @__PURE__ */ new Map()), inject(TUI_ALERTS)]).pipe(map(([map2, alerts]) => {
          map2.forEach((_, key) => map2.set(key, []));
          alerts.forEach((alert) => {
            const key = alert.component.component;
            const value = map2.get(key) || [];
            map2.set(key, [...value, alert]);
          });
          return Array.from(map2.values());
        }))
      }],
      template: '<div\n    *ngFor="let group of alerts$ | async; trackBy: trackBy"\n    tuiAnimatedParent\n    class="t-wrapper"\n>\n    <ng-container\n        *ngFor="let item of group"\n        [ngComponentOutlet]="item.component.component"\n        [ngComponentOutletInjector]="item | tuiMapper: mapper"\n    />\n</div>\n',
      styles: ["tui-alerts>.t-wrapper{position:fixed;top:0;left:0;inline-size:100%;display:flex;flex-direction:column;pointer-events:none;box-sizing:border-box;block-size:100%;padding:env(safe-area-inset-top) 0 env(safe-area-inset-bottom)}tui-alerts>.t-wrapper>*{pointer-events:auto}\n"]
    }]
  }], null, null);
})();

export {
  TuiNotification,
  TuiTitle,
  TuiMapperPipe,
  TuiAlertService,
  TuiAlerts
};
//# sourceMappingURL=chunk-WG3DIIIA.js.map
