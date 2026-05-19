import {
  EVENT_MANAGER_PLUGINS,
  EventManagerPlugin,
  Meta,
  REMOVE_STYLES_ON_COMPONENT_DESTROY
} from "./chunk-YQZG6ATW.js";
import {
  tuiCloseWatcher,
  tuiCreateOptions,
  tuiDirectiveBinding,
  tuiExtractI18n,
  tuiIfMap,
  tuiProvide,
  tuiScrollFrom,
  tuiStopPropagation,
  tuiTypedFromEvent,
  tuiUntrackedScheduler,
  tuiZoneOptimized,
  tuiZonefree,
  tuiZonefreeScheduler
} from "./chunk-2UOD7KNB.js";
import {
  WA_ANIMATION_FRAME,
  WA_LOCAL_STORAGE,
  WA_NAVIGATOR,
  WA_USER_AGENT,
  WA_WINDOW,
  coerceArray,
  coerceBooleanProperty,
  outputFromObservable,
  takeUntilDestroyed,
  toObservable,
  toSignal,
  tuiArrayRemove,
  tuiClamp,
  tuiGenerateId,
  tuiGetActualTarget,
  tuiGetDocumentOrShadowRoot,
  tuiGetElementObscures,
  tuiGetElementOffset,
  tuiInjectElement,
  tuiIsElement,
  tuiIsElementEditable,
  tuiIsHTMLElement,
  tuiIsPresent,
  tuiIsString,
  tuiIsTextNode,
  tuiIsTextfield,
  tuiPointToClientRect,
  tuiPx,
  tuiSetSignal,
  tuiWindowSize,
  tuiWithStyles
} from "./chunk-6HH4HFWJ.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  DestroyRef,
  Directive,
  EMPTY,
  ElementRef,
  INJECTOR$1,
  Injectable,
  InjectionToken,
  Injector,
  NgZone,
  Observable,
  Optional,
  PLATFORM_ID,
  Pipe,
  Renderer2,
  RendererFactory2,
  Self,
  SkipSelf,
  Subject,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  combineLatest,
  computed,
  contentChild,
  delay,
  distinctUntilChanged,
  effect,
  endWith,
  filter,
  finalize,
  forwardRef,
  fromEvent,
  ignoreElements,
  inject,
  input,
  isPlatformBrowser,
  map,
  merge,
  model,
  observeOn,
  of,
  provideAppInitializer,
  race,
  reflectComponentType,
  repeat,
  setClassMetadata,
  share,
  signal,
  skip,
  skipWhile,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  throttleTime,
  timer,
  untracked,
  viewChild,
  withLatestFrom,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-NS3244ZP.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// node_modules/@ng-web-apis/platform/fesm2022/ng-web-apis-platform.mjs
var WA_MOBILE_REGEXP = /(?:android|bb\d|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|^(?:1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ \-/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ /])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[23]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8c]))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-)/i;
var WA_SAFARI_REG_EXP = /^((?!chrome|android).)*safari/i;
var WA_IOS_REG_EXP = /ipad|iphone|ipod/i;
function isIos({
  userAgent,
  maxTouchPoints
}) {
  return WA_IOS_REG_EXP.test(userAgent) || WA_SAFARI_REG_EXP.test(userAgent) && maxTouchPoints > 1;
}
var WA_IS_IOS = new InjectionToken(ngDevMode ? "[WA_IS_IOS]" : "", {
  factory: () => isIos(inject(WA_NAVIGATOR))
});
var WA_IS_MOBILE = new InjectionToken(ngDevMode ? "[WA_IS_MOBILE]" : "", {
  factory: () => WA_MOBILE_REGEXP.test(inject(WA_USER_AGENT))
});
var WA_IS_ANDROID = new InjectionToken(ngDevMode ? "[WA_IS_ANDROID]" : "", {
  factory: () => inject(WA_IS_MOBILE) && !inject(WA_IS_IOS)
});
var WA_IS_E2E = new InjectionToken(ngDevMode ? "[WA_IS_E2E]" : "", {
  factory: () => !!inject(WA_WINDOW).Cypress || inject(WA_NAVIGATOR).webdriver
});
var WA_IS_TOUCH = new InjectionToken(ngDevMode ? "[WA_IS_TOUCH]" : "", {
  factory: () => {
    const media = inject(WA_WINDOW).matchMedia("(pointer: coarse)");
    return toSignal(fromEvent(media, "change").pipe(map(() => media.matches)), {
      initialValue: media.matches
    });
  }
});
var WA_IS_WEBKIT = new InjectionToken(ngDevMode ? "[WA_IS_WEBKIT]" : "", {
  factory: () => !!inject(WA_WINDOW)?.webkitConvertPointFromNodeToPage
});
var WA_REDUCED_MOTION = new InjectionToken(ngDevMode ? "[WA_REDUCED_MOTION]" : "", {
  factory: () => {
    const media = inject(WA_WINDOW).matchMedia("(prefers-reduced-motion: reduce)");
    return toSignal(fromEvent(media, "change").pipe(map(() => media.matches)), {
      initialValue: media.matches
    });
  }
});
function isSafari({
  ownerDocument: doc
}) {
  const win = doc?.defaultView;
  const isMacOsSafari = win.safari !== void 0 && win.safari?.pushNotification?.toString() === "[object SafariRemoteNotification]";
  const isIosSafari = !!win.navigator?.vendor?.includes("Apple") && !win.navigator?.userAgent?.includes("CriOS") && !win.navigator?.userAgent?.includes("FxiOS");
  return isMacOsSafari || isIosSafari;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-constants.mjs
var rect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0
};
var EMPTY_FUNCTION = () => {
};
var EMPTY_CLIENT_RECT = __spreadProps(__spreadValues({}, rect), {
  toJSON: () => rect
});
var TUI_FALSE_HANDLER = () => false;
var TUI_TRUE_HANDLER = () => true;
var TUI_STRINGIFY = ({
  $implicit
}) => String($implicit);
function bothEmpty(item1, item2) {
  return Array.isArray(item1) && Array.isArray(item2) && !item1.length && !item2.length;
}
var TUI_DEFAULT_MATCHER = (item, search, stringify = String) => stringify(item).toLowerCase().includes(search.toLowerCase());
var TUI_STRICT_MATCHER = (item, search, stringify = String) => stringify(item).toLowerCase() === search.toLowerCase();
var TUI_DEFAULT_IDENTITY_MATCHER = (item1, item2) => item1 === item2 || bothEmpty(item1, item2);
var svgNodeFilter = {
  acceptNode(node) {
    return "ownerSVGElement" in node ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  }
};
var CHAR_NO_BREAK_SPACE = "\xA0";
var CHAR_MINUS = "\u2212";
var CHAR_ZERO_WIDTH_SPACE = "\u200B";
var TUI_VERSION = "5.7.0";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-transitioned.mjs
var _TuiTransitioned = class _TuiTransitioned {
  constructor() {
    const el = tuiInjectElement();
    afterNextRender(() => requestAnimationFrame(() => el.style.setProperty("transition", "")));
  }
};
_TuiTransitioned.\u0275fac = function TuiTransitioned_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTransitioned)();
};
_TuiTransitioned.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiTransitioned,
  selectors: [["", "tuiTransitioned", ""]],
  hostAttrs: [2, "transition", "none"]
});
var TuiTransitioned = _TuiTransitioned;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTransitioned, [{
    type: Directive,
    args: [{
      selector: "[tuiTransitioned]",
      host: {
        style: "transition: none"
      }
    }]
  }], () => [], null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-appearance.mjs
var TUI_APPEARANCE_DEFAULT_OPTIONS = {
  appearance: ""
};
var TUI_APPEARANCE_OPTIONS = new InjectionToken(ngDevMode ? "TUI_APPEARANCE_OPTIONS" : "", {
  factory: () => TUI_APPEARANCE_DEFAULT_OPTIONS
});
function tuiAppearanceOptionsProvider(token) {
  return tuiProvide(TUI_APPEARANCE_OPTIONS, token);
}
var _Styles = class _Styles {
};
_Styles.\u0275fac = function Styles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Styles)();
};
_Styles.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _Styles,
  selectors: [["ng-component"]],
  exportAs: ["tui-appearance-5.7.0"],
  decls: 0,
  vars: 0,
  template: function Styles_Template(rf, ctx) {
  },
  styles: ['[tuiAppearance]:where(*[data-tui-version="5.7.0"]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem;transition-property:color,background-color,opacity,box-shadow,border-color,border-radius,filter}[tuiAppearance]:where(*[data-tui-version="5.7.0"]):before,[tuiAppearance]:where(*[data-tui-version="5.7.0"]):after{transition-property:none;transition-duration:inherit;transition-timing-function:ease-in-out}[tuiAppearance]:where(*[data-tui-version="5.7.0"]):focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance]:where(*[data-tui-version="5.7.0"])[data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance]:where(*[data-tui-version="5.7.0"]):disabled:not([data-state]),[tuiAppearance]:where(*[data-tui-version="5.7.0"])[data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}[tuiAppearance]:where(*[data-tui-version="5.7.0"]):disabled:not([data-state]):before,[tuiAppearance]:where(*[data-tui-version="5.7.0"])[data-state=disabled]:before,[tuiAppearance]:where(*[data-tui-version="5.7.0"]):disabled:not([data-state]):after,[tuiAppearance]:where(*[data-tui-version="5.7.0"])[data-state=disabled]:after{cursor:initial}\n'],
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
      exportAs: `tui-appearance-${TUI_VERSION}`,
      styles: ['[tuiAppearance]:where(*[data-tui-version="5.7.0"]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem;transition-property:color,background-color,opacity,box-shadow,border-color,border-radius,filter}[tuiAppearance]:where(*[data-tui-version="5.7.0"]):before,[tuiAppearance]:where(*[data-tui-version="5.7.0"]):after{transition-property:none;transition-duration:inherit;transition-timing-function:ease-in-out}[tuiAppearance]:where(*[data-tui-version="5.7.0"]):focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance]:where(*[data-tui-version="5.7.0"])[data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance]:where(*[data-tui-version="5.7.0"]):disabled:not([data-state]),[tuiAppearance]:where(*[data-tui-version="5.7.0"])[data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}[tuiAppearance]:where(*[data-tui-version="5.7.0"]):disabled:not([data-state]):before,[tuiAppearance]:where(*[data-tui-version="5.7.0"])[data-state=disabled]:before,[tuiAppearance]:where(*[data-tui-version="5.7.0"]):disabled:not([data-state]):after,[tuiAppearance]:where(*[data-tui-version="5.7.0"])[data-state=disabled]:after{cursor:initial}\n']
    }]
  }], null, null);
})();
var _TuiAppearance = class _TuiAppearance {
  constructor() {
    this.nothing = tuiWithStyles(Styles);
    this.modes = computed((mode = this.tuiAppearanceMode()) => !mode || tuiIsString(mode) ? mode : mode.join(" "));
    this.tuiAppearance = input(inject(TUI_APPEARANCE_OPTIONS).appearance);
    this.tuiAppearanceState = input(null);
    this.tuiAppearanceFocus = input(null);
    this.tuiAppearanceMode = input(null);
  }
};
_TuiAppearance.\u0275fac = function TuiAppearance_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAppearance)();
};
_TuiAppearance.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiAppearance,
  selectors: [["", "tuiAppearance", ""]],
  hostAttrs: ["data-tui-version", "5.7.0", "tuiAppearance", ""],
  hostVars: 4,
  hostBindings: function TuiAppearance_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-appearance", ctx.tuiAppearance())("data-focus", ctx.tuiAppearanceFocus())("data-mode", ctx.modes())("data-state", ctx.tuiAppearanceState());
    }
  },
  inputs: {
    tuiAppearance: [1, "tuiAppearance"],
    tuiAppearanceState: [1, "tuiAppearanceState"],
    tuiAppearanceFocus: [1, "tuiAppearanceFocus"],
    tuiAppearanceMode: [1, "tuiAppearanceMode"]
  },
  features: [\u0275\u0275HostDirectivesFeature([TuiTransitioned])]
});
var TuiAppearance = _TuiAppearance;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppearance, [{
    type: Directive,
    args: [{
      selector: "[tuiAppearance]",
      hostDirectives: [TuiTransitioned],
      host: {
        "data-tui-version": TUI_VERSION,
        tuiAppearance: "",
        "[attr.data-appearance]": "tuiAppearance()",
        "[attr.data-focus]": "tuiAppearanceFocus()",
        "[attr.data-mode]": "modes()",
        "[attr.data-state]": "tuiAppearanceState()"
      }
    }]
  }], null, null);
})();
function tuiAppearance(value, options = {}) {
  return tuiDirectiveBinding(TuiAppearance, "tuiAppearance", value, options);
}
function tuiAppearanceState(value, options = {}) {
  return tuiDirectiveBinding(TuiAppearance, "tuiAppearanceState", value, options);
}
function tuiAppearanceFocus(value, options = {}) {
  return tuiDirectiveBinding(TuiAppearance, "tuiAppearanceFocus", value, options);
}
function tuiAppearanceMode(value, options = {}) {
  return tuiDirectiveBinding(TuiAppearance, "tuiAppearanceMode", value, options);
}
var _TuiWithAppearance = class _TuiWithAppearance {
};
_TuiWithAppearance.\u0275fac = function TuiWithAppearance_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiWithAppearance)();
};
_TuiWithAppearance.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiWithAppearance,
  features: [\u0275\u0275HostDirectivesFeature([{
    directive: TuiAppearance,
    inputs: ["tuiAppearance", "appearance", "tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus", "tuiAppearanceMode", "tuiAppearanceMode"]
  }])]
});
var TuiWithAppearance = _TuiWithAppearance;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithAppearance, [{
    type: Directive,
    args: [{
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearance: appearance", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceMode"]
      }]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-tokens.mjs
var TUI_REDUCED_MOTION = new InjectionToken(ngDevMode ? "TUI_REDUCED_MOTION" : "", {
  factory: () => inject(DOCUMENT).defaultView?.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
});
var TUI_ANIMATIONS_SPEED = new InjectionToken(ngDevMode ? "TUI_ANIMATIONS_SPEED" : "", {
  factory: () => inject(TUI_REDUCED_MOTION) ? 0 : 1
});
var TUI_ASSETS_PATH = new InjectionToken(ngDevMode ? "TUI_ASSETS_PATH" : "", {
  factory: () => "assets/taiga-ui/icons"
});
var TUI_AUXILIARY = new InjectionToken(ngDevMode ? "TUI_AUXILIARY" : "", {
  factory: () => null
});
function tuiAsAuxiliary(x) {
  return tuiProvide(TUI_AUXILIARY, x);
}
var TUI_MEDIA = new InjectionToken(ngDevMode ? "TUI_MEDIA" : "", {
  factory: () => ({
    mobile: 768,
    desktopSmall: 1280,
    desktopLarge: Infinity
  })
});
var TUI_BREAKPOINT = new InjectionToken(ngDevMode ? "TUI_BREAKPOINT" : "", {
  factory: () => {
    const size = tuiWindowSize(inject(WA_WINDOW));
    const media = inject(TUI_MEDIA);
    const sorted = Object.values(media).sort((a, b) => a - b);
    const invert = Object.keys(media).reduce((ret, key) => __spreadProps(__spreadValues({}, ret), {
      [media[key]]: key
    }), {});
    return computed(() => {
      const {
        width
      } = size();
      const key = sorted.find((size2) => size2 > width);
      const index = key || sorted[sorted.length - 1] || 0;
      return invert[index] ?? "desktopLarge";
    });
  }
});
var COMMON_ICONS = {
  check: "@tui.check",
  close: "@tui.x",
  error: "@tui.circle-alert",
  more: "@tui.chevron-right",
  search: "@tui.search",
  ellipsis: "@tui.ellipsis",
  decrement: "@tui.chevron-left",
  increment: "@tui.chevron-right"
};
var [TUI_COMMON_ICONS, tuiCommonIconsProvider] = tuiCreateOptions(COMMON_ICONS);
var TUI_DARK_MODE_DEFAULT_KEY = "tuiDark";
var TUI_DARK_MODE_KEY = new InjectionToken(ngDevMode ? "TUI_DARK_MODE_KEY" : "", {
  factory: () => TUI_DARK_MODE_DEFAULT_KEY
});
var TUI_DARK_MODE = new InjectionToken(ngDevMode ? "TUI_DARK_MODE" : "", {
  factory: () => {
    let automatic = true;
    const storage = inject(WA_LOCAL_STORAGE);
    const key = inject(TUI_DARK_MODE_KEY);
    const saved = storage?.getItem(key);
    const media = inject(WA_WINDOW).matchMedia("(prefers-color-scheme: dark)");
    const result = signal(Boolean((saved && JSON.parse(saved)) ?? media.matches));
    fromEvent(media, "change").pipe(filter(() => !storage?.getItem(key)), takeUntilDestroyed()).subscribe(() => {
      automatic = true;
      result.set(media.matches);
    });
    untracked(() => {
      effect(() => {
        const value = String(result());
        if (automatic) {
          automatic = false;
        } else {
          storage?.setItem(key, value);
        }
      });
    });
    return Object.assign(result, {
      reset: () => {
        storage?.removeItem(key);
        automatic = true;
        result.set(media.matches);
      }
    });
  }
});
var TUI_DEFAULT_DATE_FORMAT = {
  mode: "dd/mm/yyyy",
  separator: "."
};
var TUI_DATE_FORMAT = new InjectionToken(ngDevMode ? "TUI_DATE_FORMAT" : "", {
  factory: () => signal(TUI_DEFAULT_DATE_FORMAT)
});
var TUI_MONTHS = new InjectionToken(ngDevMode ? "TUI_MONTHS" : "", {
  factory: tuiExtractI18n("months")
});
var TUI_CLOSE_WORD = new InjectionToken(ngDevMode ? "TUI_CLOSE_WORD" : "", {
  factory: tuiExtractI18n("close")
});
var TUI_BACK_WORD = new InjectionToken(ngDevMode ? "TUI_BACK_WORD" : "", {
  factory: tuiExtractI18n("back")
});
var TUI_CLEAR_WORD = new InjectionToken(ngDevMode ? "TUI_CLEAR_WORD" : "", {
  factory: tuiExtractI18n("clear")
});
var TUI_NOTHING_FOUND_MESSAGE = new InjectionToken(ngDevMode ? "TUI_NOTHING_FOUND_MESSAGE" : "", {
  factory: tuiExtractI18n("nothingFoundMessage")
});
var TUI_DEFAULT_ERROR_MESSAGE = new InjectionToken(ngDevMode ? "TUI_DEFAULT_ERROR_MESSAGE" : "", {
  factory: tuiExtractI18n("defaultErrorMessage")
});
var TUI_SPIN_TEXTS = new InjectionToken(ngDevMode ? "TUI_SPIN_TEXTS" : "", {
  factory: tuiExtractI18n("spinTexts")
});
var TUI_SHORT_WEEK_DAYS = new InjectionToken(ngDevMode ? "TUI_SHORT_WEEK_DAYS" : "", {
  factory: tuiExtractI18n("shortWeekDays")
});
var TUI_ICON_START = new InjectionToken(ngDevMode ? "TUI_ICON_START" : "", {
  factory: () => ""
});
var TUI_ICON_END = new InjectionToken(ngDevMode ? "TUI_ICON_END" : "", {
  factory: () => ""
});
var TUI_ICON_REGISTRY = new InjectionToken(ngDevMode ? "TUI_ICON_REGISTRY" : "", {
  factory: () => ({})
});
var TUI_ICON_RESOLVER = new InjectionToken(ngDevMode ? "TUI_ICON_RESOLVER" : "", {
  factory: () => {
    const path = inject(TUI_ASSETS_PATH);
    return (icon) => `${path}/${icon.replace(/@[a-z]+\./i, "").replaceAll(".", "/")}.svg`;
  }
});
function tuiGetIconMode(icon) {
  return icon?.match(/@([^.]*)\./)?.[1] || icon || void 0;
}
function tuiInjectIconResolver() {
  const icons = inject(TUI_ICON_REGISTRY);
  const resolver = inject(TUI_ICON_RESOLVER);
  return (icon) => {
    if (!icon || icon.includes("/")) {
      return icon.replace(/@[a-z]+\./i, "");
    }
    return icon.startsWith("@font.") ? icon.replace("@font.", "") : icons[icon] ?? resolver(icon);
  };
}
var TUI_DEFAULT_NUMBER_FORMAT = {
  precision: Number.NaN,
  decimalSeparator: ".",
  thousandSeparator: CHAR_NO_BREAK_SPACE,
  rounding: "truncate",
  decimalMode: "pad",
  negativePattern: "prefixFirst"
};
var TUI_NUMBER_FORMAT = new InjectionToken(ngDevMode ? "TUI_NUMBER_FORMAT" : "", {
  factory: () => signal(TUI_DEFAULT_NUMBER_FORMAT)
});
var TUI_SELECTION_STREAM = new InjectionToken(ngDevMode ? "TUI_SELECTION_STREAM" : "", {
  factory: () => {
    const doc = inject(DOCUMENT);
    return merge(tuiTypedFromEvent(doc, "selectionchange"), tuiTypedFromEvent(doc, "mouseup"), tuiTypedFromEvent(doc, "mousedown").pipe(switchMap(() => tuiTypedFromEvent(doc, "mousemove").pipe(takeUntil(tuiTypedFromEvent(doc, "mouseup"))))), tuiTypedFromEvent(doc, "keydown"), tuiTypedFromEvent(doc, "keyup")).pipe(share());
  }
});
var TUI_TEXTFIELD_VALUE = new InjectionToken(ngDevMode ? "TUI_TEXTFIELD_VALUE" : "");
var TUI_VALIDATION_ERRORS = new InjectionToken(ngDevMode ? "TUI_VALIDATION_ERRORS" : "", {
  factory: () => ({})
});
var TUI_VIEWPORT = new InjectionToken(ngDevMode ? "TUI_VIEWPORT" : "", {
  factory: () => {
    const win = inject(WA_WINDOW);
    return {
      type: "viewport",
      getClientRect() {
        const {
          height = 0,
          offsetTop = 0
        } = win.visualViewport || {};
        const rect2 = {
          top: 0,
          left: 0,
          right: win.innerWidth,
          bottom: win.innerHeight,
          width: win.innerWidth,
          height: height + offsetTop || win.innerHeight,
          x: 0,
          y: 0
        };
        return __spreadProps(__spreadValues({}, rect2), {
          toJSON: () => JSON.stringify(rect2)
        });
      }
    };
  }
});
function tuiAsViewport(accessor) {
  return tuiProvide(TUI_VIEWPORT, accessor);
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-icons.mjs
var OPT = {
  self: true,
  optional: true
};
var _Styles2 = class _Styles2 {
};
_Styles2.\u0275fac = function Styles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Styles2)();
};
_Styles2.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _Styles2,
  selectors: [["ng-component"]],
  exportAs: ["tui-icons-5.7.0"],
  decls: 0,
  vars: 0,
  template: function Styles_Template(rf, ctx) {
  },
  styles: [':where([tuiIcons][data-tui-version="5.7.0"]){--t-icon-start: none;--t-icon-end: none;--t-zoom: calc(clamp(0px, var(--tui-font-offset) - 10px, 1px)/1px) }:where([tuiIcons][data-tui-version="5.7.0"]):before,:where([tuiIcons][data-tui-version="5.7.0"]):after{content:"";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:var(--tui-icon-size, 1.5rem);flex-shrink:0;box-sizing:content-box;background:currentColor;zoom:calc(100% + 25% * var(--t-zoom));-webkit-mask-image:var(--t-icon-start);mask-image:var(--t-icon-start);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:calc(min(1em,100%) + 10 * var(--tui-stroke-width)) min(1em,100%),100%;mask-size:calc(min(1em,100%) + 10 * var(--tui-stroke-width)) min(1em,100%),100%;mask-clip:padding-box}:where([tuiIcons][data-tui-version="5.7.0"]):after{display:var(--t-icon-end);-webkit-mask-image:var(--t-icon-end);mask-image:var(--t-icon-end)}:where([tuiIcons][data-tui-version="5.7.0"]):where([data-icon-start=img]):before{-webkit-mask-image:none;mask-image:none;background:var(--t-icon-start) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version="5.7.0"]):where([data-icon-end=img]):after{-webkit-mask-image:none;mask-image:none;background:var(--t-icon-end) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version="5.7.0"]):where([data-icon-start=font]):before,:where([tuiIcons][data-tui-version="5.7.0"]):where([data-icon-end=font]):after{display:grid;-webkit-mask-image:none;mask-image:none;background:none;font:1.5em / 1 var(--tui-font-icon, inherit);text-align:center;place-content:center;text-transform:none}:where([tuiIcons][data-tui-version="5.7.0"]):where([data-icon-start=font]):before{content:var(--t-icon-start)}:where([tuiIcons][data-tui-version="5.7.0"]):where([data-icon-end=font]):after{content:var(--t-icon-end)}\n'],
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
      exportAs: `tui-icons-${TUI_VERSION}`,
      styles: [':where([tuiIcons][data-tui-version="5.7.0"]){--t-icon-start: none;--t-icon-end: none;--t-zoom: calc(clamp(0px, var(--tui-font-offset) - 10px, 1px)/1px) }:where([tuiIcons][data-tui-version="5.7.0"]):before,:where([tuiIcons][data-tui-version="5.7.0"]):after{content:"";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:var(--tui-icon-size, 1.5rem);flex-shrink:0;box-sizing:content-box;background:currentColor;zoom:calc(100% + 25% * var(--t-zoom));-webkit-mask-image:var(--t-icon-start);mask-image:var(--t-icon-start);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:calc(min(1em,100%) + 10 * var(--tui-stroke-width)) min(1em,100%),100%;mask-size:calc(min(1em,100%) + 10 * var(--tui-stroke-width)) min(1em,100%),100%;mask-clip:padding-box}:where([tuiIcons][data-tui-version="5.7.0"]):after{display:var(--t-icon-end);-webkit-mask-image:var(--t-icon-end);mask-image:var(--t-icon-end)}:where([tuiIcons][data-tui-version="5.7.0"]):where([data-icon-start=img]):before{-webkit-mask-image:none;mask-image:none;background:var(--t-icon-start) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version="5.7.0"]):where([data-icon-end=img]):after{-webkit-mask-image:none;mask-image:none;background:var(--t-icon-end) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version="5.7.0"]):where([data-icon-start=font]):before,:where([tuiIcons][data-tui-version="5.7.0"]):where([data-icon-end=font]):after{display:grid;-webkit-mask-image:none;mask-image:none;background:none;font:1.5em / 1 var(--tui-font-icon, inherit);text-align:center;place-content:center;text-transform:none}:where([tuiIcons][data-tui-version="5.7.0"]):where([data-icon-start=font]):before{content:var(--t-icon-start)}:where([tuiIcons][data-tui-version="5.7.0"]):where([data-icon-end=font]):after{content:var(--t-icon-end)}\n']
    }]
  }], null, null);
})();
var _TuiIcons = class _TuiIcons {
  constructor() {
    this.resolver = tuiInjectIconResolver();
    this.nothing = tuiWithStyles(Styles2);
    this.start = computed(() => this.resolve(this.iconStart()));
    this.end = computed(() => this.resolve(this.iconEnd()));
    this.startMode = computed(() => tuiGetIconMode(this.iconStart()));
    this.endMode = computed(() => tuiGetIconMode(this.iconEnd()));
    this.iconEnd = input(inject(TUI_ICON_END, OPT));
    this.iconStart = input(inject(TUI_ICON_START, OPT));
  }
  resolve(icon) {
    if (!icon) {
      return null;
    }
    return tuiGetIconMode(icon) === "font" ? `'${this.resolver(icon)}'` : `url(${this.resolver(icon)})`;
  }
};
_TuiIcons.\u0275fac = function TuiIcons_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiIcons)();
};
_TuiIcons.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiIcons,
  hostAttrs: ["data-tui-version", "5.7.0", "tuiIcons", ""],
  hostVars: 6,
  hostBindings: function TuiIcons_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-icon-end", ctx.endMode())("data-icon-start", ctx.startMode());
      \u0275\u0275styleProp("--t-icon-end", ctx.end())("--t-icon-start", ctx.start());
    }
  },
  inputs: {
    iconEnd: [1, "iconEnd"],
    iconStart: [1, "iconStart"]
  }
});
var TuiIcons = _TuiIcons;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcons, [{
    type: Directive,
    args: [{
      host: {
        "data-tui-version": TUI_VERSION,
        tuiIcons: "",
        "[attr.data-icon-end]": "endMode()",
        "[attr.data-icon-start]": "startMode()",
        "[style.--t-icon-end]": "end()",
        "[style.--t-icon-start]": "start()"
      }
    }]
  }], null, null);
})();
function tuiIconStart(value, options) {
  return tuiDirectiveBinding(TuiIcons, "iconStart", value, options);
}
function tuiIconEnd(value, options = {}) {
  return tuiDirectiveBinding(TuiIcons, "iconEnd", value, options);
}
var _TuiWithIcons = class _TuiWithIcons {
};
_TuiWithIcons.\u0275fac = function TuiWithIcons_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiWithIcons)();
};
_TuiWithIcons.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiWithIcons,
  features: [\u0275\u0275HostDirectivesFeature([{
    directive: TuiIcons,
    inputs: ["iconStart", "iconStart", "iconEnd", "iconEnd"]
  }])]
});
var TuiWithIcons = _TuiWithIcons;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithIcons, [{
    type: Directive,
    args: [{
      hostDirectives: [{
        directive: TuiIcons,
        inputs: ["iconStart", "iconEnd"]
      }]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-button.mjs
var TUI_BUTTON_DEFAULT_OPTIONS = {
  appearance: "primary",
  size: "l"
};
var [TUI_BUTTON_OPTIONS, tuiButtonOptionsProvider] = tuiCreateOptions(TUI_BUTTON_DEFAULT_OPTIONS);
var _Styles3 = class _Styles3 {
};
_Styles3.\u0275fac = function Styles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Styles3)();
};
_Styles3.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _Styles3,
  selectors: [["ng-component"]],
  exportAs: ["tui-button-5.7.0"],
  decls: 0,
  vars: 0,
  template: function Styles_Template(rf, ctx) {
  },
  styles: ['[tuiButton]:where(*[data-tui-version="5.7.0"]),[tuiIconButton]:where(*[data-tui-version="5.7.0"]){--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-gap: .25rem;--t-padding: 0 1.25rem;--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));block-size:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;user-select:none;cursor:pointer;font:var(--tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version="5.7.0"])>img,[tuiIconButton]:where(*[data-tui-version="5.7.0"])>img,[tuiButton]:where(*[data-tui-version="5.7.0"])>tui-icon,[tuiIconButton]:where(*[data-tui-version="5.7.0"])>tui-icon,[tuiButton]:where(*[data-tui-version="5.7.0"])>[tuiAvatar],[tuiIconButton]:where(*[data-tui-version="5.7.0"])>[tuiAvatar],[tuiButton]:where(*[data-tui-version="5.7.0"])>tui-badge,[tuiIconButton]:where(*[data-tui-version="5.7.0"])>tui-badge,[tuiButton]:where(*[data-tui-version="5.7.0"])>[tuiBadge],[tuiIconButton]:where(*[data-tui-version="5.7.0"])>[tuiBadge],[tuiButton]:where(*[data-tui-version="5.7.0"])>[tuiRadio],[tuiIconButton]:where(*[data-tui-version="5.7.0"])>[tuiRadio],[tuiButton]:where(*[data-tui-version="5.7.0"])>[tuiSwitch],[tuiIconButton]:where(*[data-tui-version="5.7.0"])>[tuiSwitch],[tuiButton]:where(*[data-tui-version="5.7.0"])>[tuiCheckbox],[tuiIconButton]:where(*[data-tui-version="5.7.0"])>[tuiCheckbox],[tuiButton]:where(*[data-tui-version="5.7.0"])[tuiIcons]:before,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[tuiIcons]:before,[tuiButton]:where(*[data-tui-version="5.7.0"])[tuiIcons]:after,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[tuiIcons]:after{margin:var(--t-margin)}[tuiButton]:where(*[data-tui-version="5.7.0"])>.t-loader,[tuiIconButton]:where(*[data-tui-version="5.7.0"])>.t-loader{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%)}[tuiButton]:where(*[data-tui-version="5.7.0"])>.t-loader .t-text,[tuiIconButton]:where(*[data-tui-version="5.7.0"])>.t-loader .t-text{position:absolute}[tuiButton]:where(*[data-tui-version="5.7.0"])[data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.7.0"])[data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=xs],[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-gap: .125rem;--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-typography-body-s)}[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=xs] tui-icon,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=xs] tui-icon,[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=xs]:before,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=xs]:before,[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=xs]:after,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=xs]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=s],[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-s);--t-gap: .125rem;--t-padding: 0 .625rem;--t-margin: -.125rem;font:var(--tui-typography-body-s)}[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=s] tui-icon,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=s] tui-icon,[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=s][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=s][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=s][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=s][data-icon-end=font]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=m],[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: 0 1rem;--t-margin: -.375rem;font:var(--tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=m][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=m][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=m][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=m][data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version="5.7.0"])._loading,[tuiIconButton]:where(*[data-tui-version="5.7.0"])._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButton]:where(*[data-tui-version="5.7.0"])._loading>*,[tuiIconButton]:where(*[data-tui-version="5.7.0"])._loading>*,[tuiButton]:where(*[data-tui-version="5.7.0"])._loading:before,[tuiIconButton]:where(*[data-tui-version="5.7.0"])._loading:before,[tuiButton]:where(*[data-tui-version="5.7.0"])._loading:after,[tuiIconButton]:where(*[data-tui-version="5.7.0"])._loading:after{opacity:0}[tuiButton]:where(*[data-tui-version="5.7.0"])._loading>.t-loader,[tuiIconButton]:where(*[data-tui-version="5.7.0"])._loading>.t-loader{opacity:1}[tuiButton]:where(*[data-tui-version="5.7.0"])[tuiButtonVertical],[tuiIconButton]:where(*[data-tui-version="5.7.0"])[tuiButtonVertical]{--t-margin: 0rem !important;--t-line-height: 1rem;flex-direction:column;flex-shrink:1;block-size:auto;padding:.75rem;gap:.375rem;min-inline-size:5rem;white-space:pre-line;font:var(--tui-typography-ui-s)}[tuiButton]:where(*[data-tui-version="5.7.0"])[tuiButtonVertical]>*,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[tuiButtonVertical]>*{max-block-size:calc(var(--t-line-height) * 2)}[tuiButton]:where(*[data-tui-version="5.7.0"]):is(a):not([href]),[tuiIconButton]:where(*[data-tui-version="5.7.0"]):is(a):not([href]){opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiIconButton]:where(*[data-tui-version="5.7.0"]){gap:0;inline-size:var(--t-size);min-inline-size:var(--t-size);font-size:0!important;font-variant-ligatures:none!important;padding:0}[tuiIconButton]:where(*[data-tui-version="5.7.0"])[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-icon-start]:after{display:none}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var Styles3 = _Styles3;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles3, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-button-${TUI_VERSION}`,
      styles: ['[tuiButton]:where(*[data-tui-version="5.7.0"]),[tuiIconButton]:where(*[data-tui-version="5.7.0"]){--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-gap: .25rem;--t-padding: 0 1.25rem;--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));block-size:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;user-select:none;cursor:pointer;font:var(--tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version="5.7.0"])>img,[tuiIconButton]:where(*[data-tui-version="5.7.0"])>img,[tuiButton]:where(*[data-tui-version="5.7.0"])>tui-icon,[tuiIconButton]:where(*[data-tui-version="5.7.0"])>tui-icon,[tuiButton]:where(*[data-tui-version="5.7.0"])>[tuiAvatar],[tuiIconButton]:where(*[data-tui-version="5.7.0"])>[tuiAvatar],[tuiButton]:where(*[data-tui-version="5.7.0"])>tui-badge,[tuiIconButton]:where(*[data-tui-version="5.7.0"])>tui-badge,[tuiButton]:where(*[data-tui-version="5.7.0"])>[tuiBadge],[tuiIconButton]:where(*[data-tui-version="5.7.0"])>[tuiBadge],[tuiButton]:where(*[data-tui-version="5.7.0"])>[tuiRadio],[tuiIconButton]:where(*[data-tui-version="5.7.0"])>[tuiRadio],[tuiButton]:where(*[data-tui-version="5.7.0"])>[tuiSwitch],[tuiIconButton]:where(*[data-tui-version="5.7.0"])>[tuiSwitch],[tuiButton]:where(*[data-tui-version="5.7.0"])>[tuiCheckbox],[tuiIconButton]:where(*[data-tui-version="5.7.0"])>[tuiCheckbox],[tuiButton]:where(*[data-tui-version="5.7.0"])[tuiIcons]:before,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[tuiIcons]:before,[tuiButton]:where(*[data-tui-version="5.7.0"])[tuiIcons]:after,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[tuiIcons]:after{margin:var(--t-margin)}[tuiButton]:where(*[data-tui-version="5.7.0"])>.t-loader,[tuiIconButton]:where(*[data-tui-version="5.7.0"])>.t-loader{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%)}[tuiButton]:where(*[data-tui-version="5.7.0"])>.t-loader .t-text,[tuiIconButton]:where(*[data-tui-version="5.7.0"])>.t-loader .t-text{position:absolute}[tuiButton]:where(*[data-tui-version="5.7.0"])[data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.7.0"])[data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=xs],[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-gap: .125rem;--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-typography-body-s)}[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=xs] tui-icon,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=xs] tui-icon,[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=xs]:before,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=xs]:before,[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=xs]:after,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=xs]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=s],[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-s);--t-gap: .125rem;--t-padding: 0 .625rem;--t-margin: -.125rem;font:var(--tui-typography-body-s)}[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=s] tui-icon,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=s] tui-icon,[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=s][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=s][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=s][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=s][data-icon-end=font]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=m],[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: 0 1rem;--t-margin: -.375rem;font:var(--tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=m][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=m][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.7.0"])[data-size=m][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-size=m][data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version="5.7.0"])._loading,[tuiIconButton]:where(*[data-tui-version="5.7.0"])._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButton]:where(*[data-tui-version="5.7.0"])._loading>*,[tuiIconButton]:where(*[data-tui-version="5.7.0"])._loading>*,[tuiButton]:where(*[data-tui-version="5.7.0"])._loading:before,[tuiIconButton]:where(*[data-tui-version="5.7.0"])._loading:before,[tuiButton]:where(*[data-tui-version="5.7.0"])._loading:after,[tuiIconButton]:where(*[data-tui-version="5.7.0"])._loading:after{opacity:0}[tuiButton]:where(*[data-tui-version="5.7.0"])._loading>.t-loader,[tuiIconButton]:where(*[data-tui-version="5.7.0"])._loading>.t-loader{opacity:1}[tuiButton]:where(*[data-tui-version="5.7.0"])[tuiButtonVertical],[tuiIconButton]:where(*[data-tui-version="5.7.0"])[tuiButtonVertical]{--t-margin: 0rem !important;--t-line-height: 1rem;flex-direction:column;flex-shrink:1;block-size:auto;padding:.75rem;gap:.375rem;min-inline-size:5rem;white-space:pre-line;font:var(--tui-typography-ui-s)}[tuiButton]:where(*[data-tui-version="5.7.0"])[tuiButtonVertical]>*,[tuiIconButton]:where(*[data-tui-version="5.7.0"])[tuiButtonVertical]>*{max-block-size:calc(var(--t-line-height) * 2)}[tuiButton]:where(*[data-tui-version="5.7.0"]):is(a):not([href]),[tuiIconButton]:where(*[data-tui-version="5.7.0"]):is(a):not([href]){opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiIconButton]:where(*[data-tui-version="5.7.0"]){gap:0;inline-size:var(--t-size);min-inline-size:var(--t-size);font-size:0!important;font-variant-ligatures:none!important;padding:0}[tuiIconButton]:where(*[data-tui-version="5.7.0"])[tuiIconButton]:where(*[data-tui-version="5.7.0"])[data-icon-start]:after{display:none}\n']
    }]
  }], null, null);
})();
var _TuiButton = class _TuiButton {
  constructor() {
    this.nothing = tuiWithStyles(Styles3);
    this.size = input(inject(TUI_BUTTON_OPTIONS).size);
  }
};
_TuiButton.\u0275fac = function TuiButton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiButton)();
};
_TuiButton.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiButton,
  selectors: [["a", "tuiButton", ""], ["button", "tuiButton", ""], ["a", "tuiIconButton", ""], ["button", "tuiIconButton", ""]],
  hostVars: 1,
  hostBindings: function TuiButton_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.size());
    }
  },
  inputs: {
    size: [1, "size"]
  },
  features: [\u0275\u0275ProvidersFeature([tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)]), \u0275\u0275HostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
});
var TuiButton = _TuiButton;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButton, [{
    type: Directive,
    args: [{
      selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]",
      providers: [tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        "[attr.data-size]": "size()"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/polymorpheus/fesm2022/taiga-ui-polymorpheus.mjs
var POLYMORPHEUS_CONTEXT = new InjectionToken(ngDevMode ? "POLYMORPHEUS_CONTEXT" : "");
function provideContext(useValue) {
  return {
    provide: POLYMORPHEUS_CONTEXT,
    useValue
  };
}
function injectContext(options = {}) {
  return inject(POLYMORPHEUS_CONTEXT, options);
}
var PolymorpheusComponent = class {
  constructor(component, i) {
    this.component = component;
    this.i = i;
  }
  createInjector(injector, useValue) {
    return Injector.create({
      parent: this.i || injector,
      providers: useValue == null ? [] : [provideContext(useValue)]
    });
  }
};
var PolymorpheusContext = class {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
  get polymorpheusOutlet() {
    return this.$implicit;
  }
};
function isPrimitive(value) {
  return Object(value) !== value;
}
var _PolymorpheusTemplate = class _PolymorpheusTemplate {
  constructor(template = inject(TemplateRef, {
    self: true
  }), cdr = inject(ChangeDetectorRef)) {
    this.template = template;
    this.cdr = cdr;
    this.polymorpheus = "";
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  check() {
    this.cdr.markForCheck();
  }
};
_PolymorpheusTemplate.\u0275fac = function PolymorpheusTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PolymorpheusTemplate)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_PolymorpheusTemplate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _PolymorpheusTemplate,
  selectors: [["ng-template", "polymorpheus", ""]],
  inputs: {
    polymorpheus: "polymorpheus"
  },
  exportAs: ["polymorpheus"]
});
var PolymorpheusTemplate = _PolymorpheusTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusTemplate, [{
    type: Directive,
    args: [{
      selector: "ng-template[polymorpheus]",
      inputs: ["polymorpheus"],
      exportAs: "polymorpheus"
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var _PolymorpheusOutlet = class _PolymorpheusOutlet {
  constructor() {
    this.vcr = inject(ViewContainerRef);
    this.i = inject(INJECTOR$1);
    this.t = inject(TemplateRef);
    this.content = "";
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  ngOnChanges({
    content
  }) {
    const context = this.getContext();
    const component = isComponent(this.content);
    this.update();
    this.c?.injector.get(ChangeDetectorRef).markForCheck();
    if (!content) {
      return;
    }
    this.vcr.clear();
    const proxy = new Proxy(ensureContext(context), {
      get: (_, key) => ensureContext(component ? this.context : this.getContext())?.[key]
    });
    if (isComponent(this.content)) {
      this.process(this.content, context == null ? void 0 : proxy);
      this.update();
    } else if ((context instanceof PolymorpheusContext && context.$implicit) != null) {
      this.vcr.createEmbeddedView(this.template, proxy, {
        injector: this.i
      });
    }
  }
  ngDoCheck() {
    if (isDirective(this.content)) {
      this.content.check();
    }
  }
  get template() {
    if (isDirective(this.content)) {
      return this.content.template;
    }
    return this.content instanceof TemplateRef ? this.content : this.t;
  }
  getContext() {
    return isTemplate(this.content) || isComponent(this.content) ? this.context : new PolymorpheusContext(typeof this.content === "function" ? this.content(this.context ?? {}) : this.content);
  }
  process(content, proxy) {
    this.c = this.vcr.createComponent(content.component, {
      injector: content.createInjector(this.i, proxy)
    });
  }
  update() {
    if (typeof this.context !== "object" || !isComponent(this.content)) {
      return;
    }
    const {
      inputs = []
    } = reflectComponentType(this.content.component) || {};
    for (const {
      templateName
    } of inputs) {
      if (templateName in (this.context ?? {})) {
        this.c?.setInput(templateName, this.context?.[templateName]);
      }
    }
  }
};
_PolymorpheusOutlet.\u0275fac = function PolymorpheusOutlet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PolymorpheusOutlet)();
};
_PolymorpheusOutlet.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _PolymorpheusOutlet,
  selectors: [["", "polymorpheusOutlet", ""]],
  inputs: {
    content: [0, "polymorpheusOutlet", "content"],
    context: [0, "polymorpheusOutletContext", "context"]
  },
  features: [\u0275\u0275NgOnChangesFeature]
});
var PolymorpheusOutlet = _PolymorpheusOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusOutlet, [{
    type: Directive,
    args: [{
      selector: "[polymorpheusOutlet]",
      inputs: ["content: polymorpheusOutlet", "context: polymorpheusOutletContext"]
    }]
  }], null, null);
})();
function isDirective(content) {
  return content instanceof PolymorpheusTemplate;
}
function isComponent(content) {
  return content instanceof PolymorpheusComponent;
}
function isTemplate(content) {
  return isDirective(content) || content instanceof TemplateRef;
}
function ensureContext(context) {
  return isPrimitive(context) ? new PolymorpheusContext(context) : context;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-classes.mjs
var TuiAccessor = class {
};
var TuiPositionAccessor = class extends TuiAccessor {
};
var TuiRectAccessor = class extends TuiAccessor {
};
function tuiProvideAccessor(provide, type, fallback) {
  return {
    provide,
    deps: [[new SkipSelf(), new Optional(), provide], fallback],
    useFactory: tuiFallbackAccessor(type)
  };
}
function tuiFallbackAccessor(type) {
  return (accessors, fallback) => accessors?.find?.((accessor) => accessor !== fallback && accessor.type === type) || Object.create(fallback, {
    type: {
      value: type
    }
  });
}
function tuiPositionAccessorFor(type, fallback) {
  return tuiProvideAccessor(TuiPositionAccessor, type, fallback);
}
function tuiRectAccessorFor(type, fallback) {
  return tuiProvideAccessor(TuiRectAccessor, type, fallback);
}
function tuiAsPositionAccessor(accessor) {
  return tuiProvide(TuiPositionAccessor, accessor, true);
}
function tuiAsRectAccessor(accessor) {
  return tuiProvide(TuiRectAccessor, accessor, true);
}
var TuiVehicle = class {
};
function tuiAsVehicle(vehicle) {
  return tuiProvide(TuiVehicle, vehicle, true);
}
var TuiDriver = class extends Observable {
};
function tuiAsDriver(driver) {
  return tuiProvide(TuiDriver, driver, true);
}
var _TuiDriverDirective = class _TuiDriverDirective {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.drivers = coerceArray(inject(TuiDriver, {
      self: true,
      optional: true
    }) || []);
    this.vehicles = coerceArray(inject(TuiVehicle, {
      self: true,
      optional: true
    }) || []);
  }
  ngAfterViewInit() {
    const vehicle = this.vehicles.find(({
      type
    }) => type === this.type);
    merge(...this.drivers.filter(({
      type
    }) => type === this.type)).pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      vehicle?.toggle(value);
    });
  }
};
_TuiDriverDirective.\u0275fac = function TuiDriverDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDriverDirective)();
};
_TuiDriverDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDriverDirective
});
var TuiDriverDirective = _TuiDriverDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDriverDirective, [{
    type: Directive
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-vcr.mjs
var _TuiVCR = class _TuiVCR {
  constructor() {
    this.vcr = inject(ViewContainerRef);
  }
};
_TuiVCR.\u0275fac = function TuiVCR_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiVCR)();
};
_TuiVCR.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiVCR,
  selectors: [["", "tuiVCR", ""]]
});
var TuiVCR = _TuiVCR;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVCR, [{
    type: Directive,
    args: [{
      selector: "[tuiVCR]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-portals.mjs
var _TuiPortal = class _TuiPortal {
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(service) {
    this.service = service;
    this.injector = inject(INJECTOR$1);
  }
  open(content, options = {}) {
    return new Observable(($implicit) => this.add(new PolymorpheusComponent(this.component, Injector.create({
      parent: this.injector,
      providers: [{
        provide: POLYMORPHEUS_CONTEXT,
        useValue: __spreadProps(__spreadValues(__spreadValues({}, this.options), options), {
          content,
          $implicit,
          createdAt: Date.now(),
          id: tuiGenerateId(),
          completeWith: (v) => {
            $implicit.next(v);
            $implicit.complete();
          }
        })
      }]
    }))));
  }
  add(component) {
    const ref = this.service.add(component);
    return () => ref.destroy();
  }
};
_TuiPortal.\u0275fac = function TuiPortal_Factory(__ngFactoryType__) {
  \u0275\u0275invalidFactory();
};
_TuiPortal.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiPortal,
  factory: _TuiPortal.\u0275fac
});
var TuiPortal = _TuiPortal;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortal, [{
    type: Injectable
  }], () => [{
    type: void 0
  }], null);
})();
function tuiAsPortal(portal) {
  return tuiProvide(TuiPortal, portal);
}
var _TuiPortalDirective = class _TuiPortalDirective extends PolymorpheusTemplate {
  constructor() {
    super(...arguments);
    this.service = inject(TuiPortal);
    this.options = input({});
    this.open = input(false);
    this.openChange = outputFromObservable(toObservable(this.open).pipe(tuiIfMap(() => this.service.open(this, this.options()).pipe(ignoreElements(), endWith(false))), share()));
  }
};
_TuiPortalDirective.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiPortalDirective_BaseFactory;
  return function TuiPortalDirective_Factory(__ngFactoryType__) {
    return (\u0275TuiPortalDirective_BaseFactory || (\u0275TuiPortalDirective_BaseFactory = \u0275\u0275getInheritedFactory(_TuiPortalDirective)))(__ngFactoryType__ || _TuiPortalDirective);
  };
})();
_TuiPortalDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiPortalDirective,
  inputs: {
    options: [1, "options"],
    open: [1, "open"]
  },
  outputs: {
    openChange: "openChange"
  },
  features: [\u0275\u0275InheritDefinitionFeature]
});
var TuiPortalDirective = _TuiPortalDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortalDirective, [{
    type: Directive
  }], null, null);
})();
var _TuiPortalService = class _TuiPortalService {
  attach(host) {
    this.host = host;
  }
  add(content, context) {
    if (!this.host) {
      throw new TuiNoHostException();
    }
    return content instanceof PolymorpheusComponent ? this.host.addComponent(content) : this.host.addTemplate(content, context);
  }
};
_TuiPortalService.\u0275fac = function TuiPortalService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPortalService)();
};
_TuiPortalService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiPortalService,
  factory: _TuiPortalService.\u0275fac
});
var TuiPortalService = _TuiPortalService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortalService, [{
    type: Injectable
  }], null, null);
})();
var TuiNoHostException = class extends Error {
  constructor() {
    super(ngDevMode ? "Portals cannot be used without TuiPortals component; perhaps you forgot to wrap your application with tui-root." : "");
  }
};
var _TuiPortals = class _TuiPortals {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.anchor = viewChild.required(TuiVCR);
    inject(TuiPortalService).attach(this);
  }
  addComponent(component) {
    const injector = component.createInjector(this.injector);
    const ref = this.anchor().vcr.createComponent(component.component, {
      injector
    });
    ref.changeDetectorRef.detectChanges();
    return ref;
  }
  addTemplate(templateRef, context) {
    return this.anchor().vcr.createEmbeddedView(templateRef, context);
  }
};
_TuiPortals.\u0275fac = function TuiPortals_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPortals)();
};
_TuiPortals.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiPortals,
  viewQuery: function TuiPortals_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.anchor, TuiVCR, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }
});
var TuiPortals = _TuiPortals;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortals, [{
    type: Directive
  }], () => [], null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-popup.mjs
var _c0 = ["*"];
var _TuiPopupService = class _TuiPopupService extends TuiPortalService {
};
_TuiPopupService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiPopupService_BaseFactory;
  return function TuiPopupService_Factory(__ngFactoryType__) {
    return (\u0275TuiPopupService_BaseFactory || (\u0275TuiPopupService_BaseFactory = \u0275\u0275getInheritedFactory(_TuiPopupService)))(__ngFactoryType__ || _TuiPopupService);
  };
})();
_TuiPopupService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiPopupService,
  factory: _TuiPopupService.\u0275fac,
  providedIn: "root"
});
var TuiPopupService = _TuiPopupService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _TuiPopup = class _TuiPopup {
  constructor() {
    this.template = inject(TemplateRef);
    this.service = inject(TuiPopupService);
    this.show = input(false, {
      alias: "tuiPopup"
    });
  }
  ngOnChanges() {
    this.ref?.destroy();
    if (this.show()) {
      this.ref = this.service.add(this.template);
    }
  }
  ngOnDestroy() {
    this.ref?.destroy();
  }
};
_TuiPopup.\u0275fac = function TuiPopup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPopup)();
};
_TuiPopup.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiPopup,
  selectors: [["ng-template", "tuiPopup", ""]],
  inputs: {
    show: [1, "tuiPopup", "show"]
  },
  features: [\u0275\u0275NgOnChangesFeature]
});
var TuiPopup = _TuiPopup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopup, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiPopup]"
    }]
  }], null, null);
})();
var _TuiPopups = class _TuiPopups extends TuiPortals {
};
_TuiPopups.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiPopups_BaseFactory;
  return function TuiPopups_Factory(__ngFactoryType__) {
    return (\u0275TuiPopups_BaseFactory || (\u0275TuiPopups_BaseFactory = \u0275\u0275getInheritedFactory(_TuiPopups)))(__ngFactoryType__ || _TuiPopups);
  };
})();
_TuiPopups.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiPopups,
  selectors: [["tui-popups"]],
  features: [\u0275\u0275ProvidersFeature([tuiProvide(TuiPortalService, TuiPopupService)]), \u0275\u0275InheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [["tuiVCR", ""]],
  template: function TuiPopups_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
      \u0275\u0275elementContainer(1, 0);
    }
  },
  dependencies: [TuiVCR],
  styles: ['[_nghost-%COMP%]{position:fixed;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;display:grid;grid-template-rows:repeat(14,min-content) 1fr;pointer-events:none;overflow:hidden;overflow-wrap:break-word;box-sizing:border-box;padding:env(safe-area-inset-top) env(safe-area-inset-left) env(safe-area-inset-bottom) env(safe-area-inset-right)}[_nghost-%COMP%]    >*{pointer-events:auto}[_nghost-%COMP%]:after{content:"";grid-row:15}']
});
var TuiPopups = _TuiPopups;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopups, [{
    type: Component,
    args: [{
      selector: "tui-popups",
      imports: [TuiVCR],
      template: "<ng-content/><ng-container tuiVCR />",
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [tuiProvide(TuiPortalService, TuiPopupService)],
      styles: [':host{position:fixed;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;display:grid;grid-template-rows:repeat(14,min-content) 1fr;pointer-events:none;overflow:hidden;overflow-wrap:break-word;box-sizing:border-box;padding:env(safe-area-inset-top) env(safe-area-inset-left) env(safe-area-inset-bottom) env(safe-area-inset-right)}:host ::ng-deep>*{pointer-events:auto}:host:after{content:"";grid-row:15}\n']
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-dom.mjs
function tuiCheckFixedPosition(element) {
  return !!element && (isFixed(element) || tuiCheckFixedPosition(element.parentElement));
}
function isFixed(element) {
  return element.ownerDocument.defaultView?.getComputedStyle(element).getPropertyValue("position") === "fixed";
}
function tuiGetViewportWidth({
  document,
  innerWidth
}) {
  return Math.max(document.documentElement.clientWidth || 0, innerWidth || 0);
}
function tuiGetWordRange(currentRange) {
  const range = currentRange.cloneRange();
  const {
    startContainer,
    startOffset,
    endContainer,
    endOffset
  } = range;
  const {
    ownerDocument
  } = startContainer;
  if (!ownerDocument) {
    return range;
  }
  const treeWalker = ownerDocument.createTreeWalker(ownerDocument.body, NodeFilter.SHOW_TEXT, svgNodeFilter);
  treeWalker.currentNode = startContainer;
  do {
    const container = treeWalker.currentNode;
    const textContent = container.textContent || "";
    const content = container === startContainer ? textContent.slice(0, Math.max(0, startOffset + 1)) : textContent;
    const offset = Math.max(content.lastIndexOf(" "), content.lastIndexOf("\n"), content.lastIndexOf(CHAR_NO_BREAK_SPACE), content.lastIndexOf(CHAR_ZERO_WIDTH_SPACE)) + 1;
    range.setStart(container, 0);
    if (offset) {
      range.setStart(container, offset);
      break;
    }
  } while (treeWalker.previousNode());
  treeWalker.currentNode = endContainer;
  do {
    const container = treeWalker.currentNode;
    const textContent = container.textContent || "";
    const content = container === endContainer ? textContent.slice(endOffset + 1) : textContent;
    const offset = [content.indexOf(" "), content.lastIndexOf("\n"), content.indexOf(CHAR_NO_BREAK_SPACE), content.indexOf(CHAR_ZERO_WIDTH_SPACE)].reduce((result, item) => result === -1 || item === -1 ? Math.max(result, item) : Math.min(result, item), -1);
    range.setEnd(container, textContent.length);
    if (offset !== -1) {
      range.setEnd(container, offset + textContent.length - content.length);
      break;
    }
  } while (treeWalker.nextNode());
  return range;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-focus.mjs
function tuiFocusedIn(node) {
  return toSignal(merge(fromEvent(node, "focus", {
    capture: true
  }).pipe(map(TUI_TRUE_HANDLER)), fromEvent(node, "blur", {
    capture: true
  }).pipe(map(TUI_FALSE_HANDLER))).pipe(observeOn(tuiUntrackedScheduler)), {
    initialValue: false
  });
}
function tuiIsFocusable(element) {
  if (element.matches(":disabled") || element.getAttribute("tabIndex") === "-1") {
    return false;
  }
  if (tuiIsHTMLElement(element) && element.isContentEditable || element.getAttribute("tabIndex") === "0") {
    return true;
  }
  switch (element.tagName) {
    case "A":
    case "LINK":
      return element.hasAttribute("href");
    case "AUDIO":
    case "VIDEO":
      return element.hasAttribute("controls");
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    case "INPUT":
      return element.getAttribute("type") !== "hidden";
    default:
      return false;
  }
}
function tuiGetClosestFocusable({
  initial,
  root,
  previous = false
}) {
  if (!root.ownerDocument) {
    return null;
  }
  const treeWalker = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, svgNodeFilter);
  treeWalker.currentNode = initial;
  do {
    if (tuiIsHTMLElement(treeWalker.currentNode)) {
      initial = treeWalker.currentNode;
    }
    if (tuiIsHTMLElement(initial) && tuiIsFocusable(initial)) {
      return initial;
    }
  } while (previous ? treeWalker.previousNode() : treeWalker.nextNode());
  return null;
}
function tuiGetFocused({
  activeElement
}) {
  if (!activeElement?.shadowRoot) {
    return activeElement;
  }
  let element = activeElement.shadowRoot.activeElement;
  while (element?.shadowRoot) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function tuiIsFocused(node) {
  return !!node?.ownerDocument && tuiGetFocused(node.ownerDocument) === node && node.ownerDocument.hasFocus();
}
function tuiIsFocusedIn(node) {
  const focused = node?.ownerDocument && tuiGetFocused(node.ownerDocument);
  return !!focused && node.contains(focused) && node.ownerDocument?.hasFocus();
}
function tuiMoveFocus(currentIndex, elements, step) {
  currentIndex += step;
  while (currentIndex >= 0 && currentIndex < elements.length) {
    elements[currentIndex]?.focus();
    if (tuiIsFocused(elements[currentIndex])) {
      return;
    }
    currentIndex += step;
  }
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-tokens.mjs
var TUI_REMOVED_ELEMENT = new InjectionToken(ngDevMode ? "TUI_REMOVED_ELEMENT" : "", {
  factory: () => {
    const element$ = new Subject();
    const renderer = inject(RendererFactory2).createRenderer(null, null);
    const proto = Object.getPrototypeOf(renderer.delegate ?? renderer);
    const {
      removeChild
    } = proto;
    proto.removeChild = function(...args) {
      element$.next(args[1]);
      removeChild.apply(this, args);
    };
    return element$.pipe(startWith(null), switchMap((element) => timer(0).pipe(map(() => null), startWith(element))), share());
  }
});
function isValidFocusout(target, removedElement = null) {
  return (
    // Not due to switching tabs/going to DevTools
    tuiGetDocumentOrShadowRoot(target).activeElement !== target && // Not due to button/input becoming disabled or under disabled fieldset
    !target.matches(":disabled") && // Not due to element being removed from DOM
    !removedElement?.contains(target) && // Not due to scrollable element became non-scrollable
    (target.getAttribute("tabIndex") === "-1" || tuiIsFocusable(target))
  );
}
function shadowRootActiveElement(root) {
  return merge(tuiTypedFromEvent(root, "focusin").pipe(map(({
    target
  }) => target)), tuiTypedFromEvent(root, "focusout").pipe(filter(({
    target,
    relatedTarget
  }) => !!relatedTarget && isValidFocusout(target)), map(({
    relatedTarget
  }) => relatedTarget)));
}
var TUI_ACTIVE_ELEMENT = new InjectionToken(ngDevMode ? "TUI_ACTIVE_ELEMENT" : "", {
  factory: () => {
    const removedElement$ = inject(TUI_REMOVED_ELEMENT);
    const win = inject(WA_WINDOW);
    const doc = inject(DOCUMENT);
    const zone = inject(NgZone);
    const focusout$ = tuiTypedFromEvent(win, "focusout", {
      capture: true
    });
    const focusin$ = tuiTypedFromEvent(win, "focusin", {
      capture: true
    });
    const blur$ = tuiTypedFromEvent(win, "blur");
    const mousedown$ = tuiTypedFromEvent(win, "mousedown");
    const mouseup$ = tuiTypedFromEvent(win, "mouseup");
    return merge(focusout$.pipe(takeUntil(mousedown$), repeat({
      delay: () => mouseup$
    }), withLatestFrom(removedElement$), filter(([event, removedElement]) => isValidFocusout(tuiGetActualTarget(event), removedElement)), map(([{
      relatedTarget
    }]) => relatedTarget)), blur$.pipe(map(() => doc.activeElement), filter((element) => !!element?.matches("iframe"))), focusin$.pipe(switchMap((event) => {
      const target = tuiGetActualTarget(event);
      const root = tuiGetDocumentOrShadowRoot(target) || doc;
      return root === doc ? of(target) : shadowRootActiveElement(root).pipe(startWith(target));
    })), mousedown$.pipe(switchMap((event) => {
      const actualTargetInCurrentTime = tuiGetActualTarget(event);
      return !doc.activeElement || doc.activeElement === doc.body ? of(actualTargetInCurrentTime) : focusout$.pipe(take(1), map(
        /**
         * Do not use `map(() => tuiGetActualTarget(event))`
         * because we have different result in runtime
         */
        () => actualTargetInCurrentTime
      ), takeUntil(timer(0, tuiZonefreeScheduler(zone))));
    }))).pipe(distinctUntilChanged(), share());
  }
});
var TUI_FALLBACK_VALUE = new InjectionToken(ngDevMode ? "TUI_FALLBACK_VALUE" : "", {
  factory: () => null
});
function tuiFallbackValueProvider(useValue) {
  return {
    provide: TUI_FALLBACK_VALUE,
    useValue
  };
}
var TUI_PLATFORM = new InjectionToken(ngDevMode ? "TUI_PLATFORM" : "", {
  factory: () => {
    if (inject(WA_IS_IOS)) {
      return "ios";
    }
    return inject(WA_IS_ANDROID) ? "android" : "web";
  }
});
var TUI_WINDOW_SIZE = new InjectionToken(ngDevMode ? "TUI_WINDOW_SIZE" : "", {
  factory: () => toObservable(tuiWindowSize(inject(WA_WINDOW)))
});

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-active-zone.mjs
var _TuiActiveZone = class _TuiActiveZone {
  constructor() {
    this.active$ = inject(TUI_ACTIVE_ELEMENT);
    this.tuiActiveZoneParent = null;
    this.parent = inject(_TuiActiveZone, {
      skipSelf: true,
      optional: true
    });
    this.el = inject(ElementRef, {
      optional: true
    })?.nativeElement ?? inject(DOCUMENT).documentElement;
    this.tuiActiveZoneChange = this.active$.pipe(map((element) => !!element && this.contains(element)), startWith(false), distinctUntilChanged(), skip(1), tuiZoneOptimized(), share());
    this.children = [];
    this.parent?.addSubActiveZone(this);
  }
  set tuiActiveZoneParentSetter(zone) {
    this.tuiActiveZoneParent?.removeSubActiveZone(this);
    zone?.addSubActiveZone(this);
    this.tuiActiveZoneParent = zone;
  }
  ngOnDestroy() {
    this.parent?.removeSubActiveZone(this);
    this.tuiActiveZoneParent?.removeSubActiveZone(this);
  }
  contains(node) {
    return this.el.contains(node) || this.children.some((item) => item.contains(node));
  }
  // issue: https://github.com/typescript-eslint/typescript-eslint/issues/11770
  // eslint-disable-next-line @typescript-eslint/no-unused-private-class-members
  addSubActiveZone(activeZone) {
    this.children = [...this.children, activeZone];
  }
  // issue: https://github.com/typescript-eslint/typescript-eslint/issues/11770
  // eslint-disable-next-line @typescript-eslint/no-unused-private-class-members
  removeSubActiveZone(activeZone) {
    this.children = tuiArrayRemove(this.children, this.children.indexOf(activeZone));
  }
};
_TuiActiveZone.\u0275fac = function TuiActiveZone_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiActiveZone)();
};
_TuiActiveZone.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiActiveZone,
  selectors: [["", "tuiActiveZone", "", 5, "ng-container"], ["", "tuiActiveZoneChange", "", 5, "ng-container"], ["", "tuiActiveZoneParent", "", 5, "ng-container"]],
  inputs: {
    tuiActiveZoneParentSetter: [0, "tuiActiveZoneParent", "tuiActiveZoneParentSetter"]
  },
  outputs: {
    tuiActiveZoneChange: "tuiActiveZoneChange"
  },
  exportAs: ["tuiActiveZone"]
});
_TuiActiveZone.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiActiveZone,
  factory: _TuiActiveZone.\u0275fac,
  providedIn: "root"
});
var TuiActiveZone = _TuiActiveZone;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiActiveZone, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }, {
    type: Directive,
    args: [{
      selector: "[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)",
      inputs: ["tuiActiveZoneParentSetter: tuiActiveZoneParent"],
      outputs: ["tuiActiveZoneChange"],
      exportAs: "tuiActiveZone"
    }]
  }], () => [], null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-animated.mjs
var TUI_ENTER = "tui-enter";
var TUI_LEAVE = "tui-leave";
var TUI_LEAVE_KEY = `${TUI_LEAVE}_${TUI_VERSION.split(".")[0]}`;
var _TuiAnimated = class _TuiAnimated {
  constructor() {
    this.renderer = inject(ViewContainerRef)._hostLView?.[11];
    this.el = tuiInjectElement();
    afterNextRender(() => this.remove());
    if (this.renderer && isPlatformBrowser(inject(PLATFORM_ID))) {
      wrap(this.renderer.delegate || this.renderer);
    }
  }
  remove() {
    if (this.el.isConnected && !this.el.getAnimations?.().length) {
      this.el.classList.remove(TUI_ENTER);
    }
  }
};
_TuiAnimated.\u0275fac = function TuiAnimated_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAnimated)();
};
_TuiAnimated.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiAnimated,
  selectors: [["", "tuiAnimated", ""]],
  hostAttrs: [1, "tui-enter"],
  hostBindings: function TuiAnimated_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("animationcancel.self", function TuiAnimated_animationcancel_self_HostBindingHandler() {
        return ctx.remove();
      })("animationend.self", function TuiAnimated_animationend_self_HostBindingHandler() {
        return ctx.remove();
      });
    }
  }
});
var TuiAnimated = _TuiAnimated;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAnimated, [{
    type: Directive,
    args: [{
      selector: "[tuiAnimated]",
      host: {
        class: TUI_ENTER,
        "(animationcancel.self)": "remove()",
        "(animationend.self)": "remove()"
      }
    }]
  }], () => [], null);
})();
function wrap(renderer) {
  if (renderer.data[TUI_LEAVE_KEY]) {
    return;
  }
  const {
    removeChild
  } = renderer;
  renderer.data[TUI_LEAVE_KEY] = true;
  renderer.removeChild = (parent, el, host) => {
    if (!tuiIsElement(el)) {
      removeChild.call(renderer, parent, el, host);
      return;
    }
    el.classList.remove(TUI_ENTER);
    const {
      length
    } = el.getAnimations?.() || [];
    el.classList.add(TUI_LEAVE);
    const animations = el.getAnimations?.() ?? [];
    const last = animations[animations.length - 1];
    const finish = () => {
      if (!parent || parent.contains(el)) {
        removeChild.call(renderer, parent, el, host);
      }
    };
    if (animations.length > length && last) {
      last.onfinish = finish;
      last.oncancel = finish;
    } else {
      finish();
    }
  };
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-scrollbar.mjs
function TuiScrollControls_Conditional_0_Template(rf, ctx) {
}
function TuiScrollControls_Conditional_1_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("mousedown.capture.prevent", function TuiScrollControls_Conditional_1_Conditional_0_Conditional_0_Template_div_mousedown_capture_prevent_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(0);
    });
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bars_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("t-bar_has-horizontal", bars_r2[1]);
  }
}
function TuiScrollControls_Conditional_1_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275listener("mousedown.capture.prevent", function TuiScrollControls_Conditional_1_Conditional_0_Conditional_1_Template_div_mousedown_capture_prevent_0_listener() {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView(0);
    });
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bars_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("t-bar_has-vertical", bars_r2[0]);
  }
}
function TuiScrollControls_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TuiScrollControls_Conditional_1_Conditional_0_Conditional_0_Template, 2, 2, "div", 0)(1, TuiScrollControls_Conditional_1_Conditional_0_Conditional_1_Template, 2, 2, "div", 1);
  }
  if (rf & 2) {
    const bars_r2 = ctx;
    \u0275\u0275conditional(bars_r2[0] ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(bars_r2[1] ? 1 : -1);
  }
}
function TuiScrollControls_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TuiScrollControls_Conditional_1_Conditional_0_Template, 2, 2);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r3.refresh$)) ? 0 : -1, tmp_1_0);
  }
}
var _c02 = ["*"];
function TuiScrollbar_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tui-scroll-controls", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("t-hover-mode", ctx_r0.options.mode === "hover");
  }
}
var TUI_SCROLL_REF = new InjectionToken(ngDevMode ? "TUI_SCROLL_REF" : "", {
  factory: () => new ElementRef(inject(DOCUMENT).documentElement)
});
var _TuiScrollRef = class _TuiScrollRef {
};
_TuiScrollRef.\u0275fac = function TuiScrollRef_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiScrollRef)();
};
_TuiScrollRef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiScrollRef,
  selectors: [["", "tuiScrollRef", ""]],
  features: [\u0275\u0275ProvidersFeature([tuiProvide(TUI_SCROLL_REF, ElementRef)])]
});
var TuiScrollRef = _TuiScrollRef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollRef, [{
    type: Directive,
    args: [{
      selector: "[tuiScrollRef]",
      providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)]
    }]
  }], null, null);
})();
var _TuiScrollbarService = class _TuiScrollbarService extends Observable {
  constructor() {
    super((subscriber) => this.scroll$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.element = inject(TUI_SCROLL_REF).nativeElement;
    this.scroll$ = merge(tuiTypedFromEvent(this.el.parentElement, "mousedown").pipe(filter(({
      target
    }) => target !== this.el), map((event) => this.getScrolled(event, 0.5, 0.5))), tuiTypedFromEvent(this.el, "mousedown").pipe(tuiZonefree(), switchMap((event) => {
      const {
        ownerDocument
      } = this.el;
      const rect2 = this.el.getBoundingClientRect();
      const vertical = getOffsetVertical(event, rect2);
      const horizontal = getOffsetHorizontal(event, rect2);
      return tuiTypedFromEvent(ownerDocument, "mousemove").pipe(map((event2) => this.getScrolled(event2, vertical, horizontal)), takeUntil(tuiTypedFromEvent(ownerDocument, "mouseup")));
    })));
  }
  getScrolled({
    clientY,
    clientX
  }, offsetY, offsetX) {
    const {
      offsetHeight,
      offsetWidth
    } = this.el;
    const {
      top,
      left,
      right,
      width,
      height
    } = this.el.parentElement.getBoundingClientRect();
    const rtl = this.el.matches('[dir="rtl"] :scope');
    const inline = rtl ? right : left;
    const multiplier = rtl ? -1 : 1;
    const maxTop = this.element.scrollHeight - height;
    const maxLeft = this.element.scrollWidth - width;
    const scrolledTop = (clientY - top - offsetHeight * offsetY) / (height - offsetHeight);
    const scrolledLeft = (clientX - inline - offsetWidth * offsetX * multiplier) / (width - offsetWidth);
    return [maxTop * scrolledTop, maxLeft * scrolledLeft];
  }
};
_TuiScrollbarService.\u0275fac = function TuiScrollbarService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiScrollbarService)();
};
_TuiScrollbarService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiScrollbarService,
  factory: _TuiScrollbarService.\u0275fac
});
var TuiScrollbarService = _TuiScrollbarService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarService, [{
    type: Injectable
  }], () => [], null);
})();
function getOffsetVertical({
  clientY
}, {
  top,
  height
}) {
  return (clientY - top) / height;
}
function getOffsetHorizontal({
  clientX
}, {
  left,
  width
}) {
  return (clientX - left) / width;
}
var MIN_WIDTH = 24;
var _TuiScrollbarDirective = class _TuiScrollbarDirective {
  constructor() {
    this.el = inject(TUI_SCROLL_REF).nativeElement;
    this.style = tuiInjectElement().style;
    this.scrollSub = inject(TuiScrollbarService).pipe(takeUntilDestroyed()).subscribe(([top, left]) => {
      this.el.style.scrollBehavior = "auto";
      if (this.tuiScrollbar() === "horizontal") {
        this.el.scrollLeft = left;
      } else {
        this.el.scrollTop = top;
      }
      this.el.style.scrollBehavior = "";
    });
    this.styleSub = merge(inject(WA_ANIMATION_FRAME).pipe(throttleTime(100, tuiZonefreeScheduler())), tuiScrollFrom(this.el)).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      const dimension = {
        scrollTop: this.el.scrollTop,
        scrollHeight: this.el.scrollHeight,
        clientHeight: this.el.clientHeight,
        scrollLeft: this.el.scrollLeft,
        scrollWidth: this.el.scrollWidth,
        clientWidth: this.el.clientWidth
      };
      const thumb = `${this.getThumb(dimension) * 100}%`;
      const view = `${this.getView(dimension) * 100}%`;
      if (this.tuiScrollbar() === "vertical") {
        this.style.top = thumb;
        this.style.height = view;
      } else {
        this.style.left = thumb;
        this.style.insetInlineStart = thumb;
        this.style.width = view;
      }
    });
    this.tuiScrollbar = input("vertical");
  }
  getScrolled(dimension) {
    return this.tuiScrollbar() === "vertical" ? dimension.scrollTop / (dimension.scrollHeight - dimension.clientHeight) : dimension.scrollLeft / (dimension.scrollWidth - dimension.clientWidth);
  }
  getCompensation(dimension) {
    if (dimension.clientHeight * dimension.clientHeight / dimension.scrollHeight > MIN_WIDTH && this.tuiScrollbar() === "vertical" || dimension.clientWidth * dimension.clientWidth / dimension.scrollWidth > MIN_WIDTH && this.tuiScrollbar() === "horizontal") {
      return 0;
    }
    return this.tuiScrollbar() === "vertical" ? MIN_WIDTH / dimension.clientHeight : MIN_WIDTH / dimension.clientWidth;
  }
  getThumb(dimension) {
    const compensation = this.getCompensation(dimension) || this.getView(dimension);
    return Math.abs(this.getScrolled(dimension) * (1 - compensation));
  }
  getView(dimension) {
    return this.tuiScrollbar() === "vertical" ? Math.ceil(dimension.clientHeight / dimension.scrollHeight * 100) / 100 : Math.ceil(dimension.clientWidth / dimension.scrollWidth * 100) / 100;
  }
};
_TuiScrollbarDirective.\u0275fac = function TuiScrollbarDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiScrollbarDirective)();
};
_TuiScrollbarDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiScrollbarDirective,
  selectors: [["", "tuiScrollbar", ""]],
  inputs: {
    tuiScrollbar: [1, "tuiScrollbar"]
  },
  features: [\u0275\u0275ProvidersFeature([TuiScrollbarService])]
});
var TuiScrollbarDirective = _TuiScrollbarDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiScrollbar]",
      providers: [TuiScrollbarService]
    }]
  }], null, null);
})();
var TUI_DEFAULT_SCROLLBAR_OPTIONS = {
  mode: "always"
};
var [TUI_SCROLLBAR_OPTIONS, tuiScrollbarOptionsProvider] = tuiCreateOptions(TUI_DEFAULT_SCROLLBAR_OPTIONS);
var _TuiScrollControls = class _TuiScrollControls {
  constructor() {
    this.scrollRef = inject(TUI_SCROLL_REF).nativeElement;
    this.nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === "native";
    this.refresh$ = inject(WA_ANIMATION_FRAME).pipe(throttleTime(300, tuiZonefreeScheduler()), map(() => this.scrollbars), startWith([false, false]), distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]), tuiZoneOptimized());
  }
  get scrollbars() {
    const {
      clientHeight,
      scrollHeight,
      clientWidth,
      scrollWidth
    } = this.scrollRef;
    return [Math.ceil(clientHeight / scrollHeight * 100) < 100, Math.ceil(clientWidth / scrollWidth * 100) < 100];
  }
};
_TuiScrollControls.\u0275fac = function TuiScrollControls_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiScrollControls)();
};
_TuiScrollControls.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiScrollControls,
  selectors: [["tui-scroll-controls"]],
  decls: 2,
  vars: 1,
  consts: [["tuiAnimated", "", 1, "t-bar", "t-bar_vertical", 3, "t-bar_has-horizontal"], ["tuiAnimated", "", 1, "t-bar", "t-bar_horizontal", 3, "t-bar_has-vertical"], ["tuiAnimated", "", 1, "t-bar", "t-bar_vertical", 3, "mousedown.capture.prevent"], ["tuiScrollbar", "vertical", 1, "t-thumb"], ["tuiAnimated", "", 1, "t-bar", "t-bar_horizontal", 3, "mousedown.capture.prevent"], ["tuiScrollbar", "horizontal", 1, "t-thumb"]],
  template: function TuiScrollControls_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TuiScrollControls_Conditional_0_Template, 0, 0)(1, TuiScrollControls_Conditional_1_Template, 2, 3);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.nativeScrollbar ? 0 : 1);
    }
  },
  dependencies: [AsyncPipe, TuiAnimated, TuiScrollbarDirective],
  styles: ["[_nghost-%COMP%]{position:sticky;z-index:1;inset-block-start:0;inset-inline-start:0;min-inline-size:calc(100% - 1px);min-block-size:calc(100% - 1px);max-inline-size:calc(100% - 1px);max-block-size:calc(100% - 1px);margin-inline-end:calc(-100% + 1px);pointer-events:none;overflow:hidden;color:var(--tui-text-primary)}  [tuiScrollable]{scrollbar-width:none;-ms-overflow-style:none}  [tuiScrollable]::-webkit-scrollbar,   [tuiScrollable]::-webkit-scrollbar-thumb{display:none}.t-bar[_ngcontent-%COMP%]{position:absolute;inset-inline-end:0;pointer-events:auto}.t-bar.tui-enter[_ngcontent-%COMP%], .t-bar.tui-leave[_ngcontent-%COMP%]{animation-name:tuiFade}.t-bar_vertical[_ngcontent-%COMP%]{inset-block:.25rem;inline-size:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]{inset-block-end:0;inset-inline-start:0;block-size:.875rem}.t-bar_has-horizontal[_ngcontent-%COMP%]{inset-block-end:.5rem}.t-bar_has-vertical[_ngcontent-%COMP%]{inset-inline-end:.5rem}.t-thumb[_ngcontent-%COMP%]{transition-property:all;transition-duration:.15s;transition-timing-function:ease-in-out;position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition-property:width,height,opacity;opacity:.2}.t-thumb[_ngcontent-%COMP%]:hover{opacity:.24}.t-thumb[_ngcontent-%COMP%]:active{opacity:.48}.t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{inset-inline-end:0;inline-size:.75rem;min-block-size:1.25rem}.t-bar_vertical[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{inline-size:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{inset-block-end:0;block-size:.75rem;min-inline-size:1.25rem}.t-bar_horizontal[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{block-size:.875rem}"],
  changeDetection: 0
});
var TuiScrollControls = _TuiScrollControls;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollControls, [{
    type: Component,
    args: [{
      selector: "tui-scroll-controls",
      imports: [AsyncPipe, TuiAnimated, TuiScrollbarDirective],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '@if (nativeScrollbar) {\n} @else {\n    @if (refresh$ | async; as bars) {\n        @if (bars[0]) {\n            <div\n                tuiAnimated\n                class="t-bar t-bar_vertical"\n                [class.t-bar_has-horizontal]="bars[1]"\n                (mousedown.capture.prevent)="(0)"\n            >\n                <div\n                    tuiScrollbar="vertical"\n                    class="t-thumb"\n                ></div>\n            </div>\n        }\n        @if (bars[1]) {\n            <div\n                tuiAnimated\n                class="t-bar t-bar_horizontal"\n                [class.t-bar_has-vertical]="bars[0]"\n                (mousedown.capture.prevent)="(0)"\n            >\n                <div\n                    tuiScrollbar="horizontal"\n                    class="t-thumb"\n                ></div>\n            </div>\n        }\n    }\n}\n',
      styles: [":host{position:sticky;z-index:1;inset-block-start:0;inset-inline-start:0;min-inline-size:calc(100% - 1px);min-block-size:calc(100% - 1px);max-inline-size:calc(100% - 1px);max-block-size:calc(100% - 1px);margin-inline-end:calc(-100% + 1px);pointer-events:none;overflow:hidden;color:var(--tui-text-primary)}::ng-deep [tuiScrollable]{scrollbar-width:none;-ms-overflow-style:none}::ng-deep [tuiScrollable]::-webkit-scrollbar,::ng-deep [tuiScrollable]::-webkit-scrollbar-thumb{display:none}.t-bar{position:absolute;inset-inline-end:0;pointer-events:auto}.t-bar.tui-enter,.t-bar.tui-leave{animation-name:tuiFade}.t-bar_vertical{inset-block:.25rem;inline-size:.875rem}.t-bar_horizontal{inset-block-end:0;inset-inline-start:0;block-size:.875rem}.t-bar_has-horizontal{inset-block-end:.5rem}.t-bar_has-vertical{inset-inline-end:.5rem}.t-thumb{transition-property:all;transition-duration:.15s;transition-timing-function:ease-in-out;position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition-property:width,height,opacity;opacity:.2}.t-thumb:hover{opacity:.24}.t-thumb:active{opacity:.48}.t-bar_vertical .t-thumb{inset-inline-end:0;inline-size:.75rem;min-block-size:1.25rem}.t-bar_vertical:hover .t-thumb,.t-bar_vertical .t-thumb:active{inline-size:.875rem}.t-bar_horizontal .t-thumb{inset-block-end:0;block-size:.75rem;min-inline-size:1.25rem}.t-bar_horizontal:hover .t-thumb,.t-bar_horizontal .t-thumb:active{block-size:.875rem}\n"]
    }]
  }], null, null);
})();
var TUI_SCROLL_INTO_VIEW = "tui-scroll-into-view";
var TUI_SCROLLABLE = "tui-scrollable";
var _TuiScrollbar = class _TuiScrollbar {
  constructor() {
    this.el = tuiInjectElement();
    this.options = inject(TUI_SCROLLBAR_OPTIONS);
    this.isIOS = inject(WA_IS_IOS);
    this.browserScrollRef = new ElementRef(this.el);
  }
  get delegated() {
    return this.scrollRef !== this.el || this.options.mode === "native";
  }
  get scrollRef() {
    return this.browserScrollRef.nativeElement;
  }
  set scrollRef(element) {
    this.browserScrollRef.nativeElement = element;
  }
  scrollIntoView(detail) {
    if (this.delegated) {
      return;
    }
    const {
      offsetHeight,
      offsetWidth
    } = detail;
    const {
      offsetTop,
      offsetLeft
    } = tuiGetElementOffset(this.scrollRef, detail);
    const scrollTop = offsetTop + offsetHeight / 2 - this.scrollRef.clientHeight / 2;
    const scrollLeft = offsetLeft + offsetWidth / 2 - this.scrollRef.clientWidth / 2;
    this.scrollRef.scrollTo?.(scrollLeft, scrollTop);
  }
};
_TuiScrollbar.\u0275fac = function TuiScrollbar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiScrollbar)();
};
_TuiScrollbar.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiScrollbar,
  selectors: [["tui-scrollbar"]],
  hostVars: 2,
  hostBindings: function TuiScrollbar_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("tui-scrollable.stop", function TuiScrollbar_tui_scrollable_stop_HostBindingHandler($event) {
        return ctx.scrollRef = $event.detail;
      })("tui-scroll-into-view.stop", function TuiScrollbar_tui_scroll_into_view_stop_HostBindingHandler($event) {
        return ctx.scrollIntoView($event.detail);
      });
    }
    if (rf & 2) {
      \u0275\u0275classProp("_native-hidden", ctx.options.mode !== "native" && (!ctx.isIOS || ctx.options.mode === "hidden"));
    }
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: TUI_SCROLL_REF,
    useFactory: () => inject(_TuiScrollbar).browserScrollRef
  }])],
  ngContentSelectors: _c02,
  decls: 3,
  vars: 3,
  consts: [[1, "t-bars", 3, "t-hover-mode"], [1, "t-content"], [1, "t-bars"]],
  template: function TuiScrollbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, TuiScrollbar_Conditional_0_Template, 1, 2, "tui-scroll-controls", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.isIOS && ctx.options.mode !== "native" && ctx.options.mode !== "hidden" ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("t-content_delegated", ctx.delegated);
    }
  },
  dependencies: [TuiScrollControls],
  styles: ["[_nghost-%COMP%]{position:relative;display:flex;max-block-size:100%;isolation:isolate;overflow:auto}._native-hidden[_nghost-%COMP%]{scrollbar-width:none;-ms-overflow-style:none}._native-hidden[_nghost-%COMP%]::-webkit-scrollbar, ._native-hidden[_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]   .t-hover-mode[_ngcontent-%COMP%]:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}[_nghost-%COMP%]:hover > .t-hover-mode[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:1}.t-content[_ngcontent-%COMP%]{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:max-content}.t-content_delegated[_ngcontent-%COMP%]{block-size:100%}.t-bars[_ngcontent-%COMP%]{color:var(--tui-text-primary)}"],
  changeDetection: 0
});
var TuiScrollbar = _TuiScrollbar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbar, [{
    type: Component,
    args: [{
      selector: "tui-scrollbar",
      imports: [TuiScrollControls],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: TUI_SCROLL_REF,
        useFactory: () => inject(TuiScrollbar).browserScrollRef
      }],
      host: {
        "[class._native-hidden]": 'options.mode !== "native" && (!isIOS || options.mode === "hidden")',
        [`(${TUI_SCROLLABLE}.stop)`]: "scrollRef = $event.detail",
        [`(${TUI_SCROLL_INTO_VIEW}.stop)`]: "scrollIntoView($event.detail)"
      },
      template: `@if (!isIOS && options.mode !== 'native' && options.mode !== 'hidden') {
    <tui-scroll-controls
        class="t-bars"
        [class.t-hover-mode]="options.mode === 'hover'"
    />
}
<div
    class="t-content"
    [class.t-content_delegated]="delegated"
>
    <ng-content />
</div>
`,
      styles: [":host{position:relative;display:flex;max-block-size:100%;isolation:isolate;overflow:auto}:host._native-hidden{scrollbar-width:none;-ms-overflow-style:none}:host._native-hidden::-webkit-scrollbar,:host._native-hidden::-webkit-scrollbar-thumb{display:none}:host .t-hover-mode:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}:host:hover>.t-hover-mode{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:1}.t-content{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:max-content}.t-content_delegated{block-size:100%}.t-bars{color:var(--tui-text-primary)}\n"]
    }]
  }], null, null);
})();
var _TuiScrollIntoView = class _TuiScrollIntoView {
  constructor() {
    this.el = tuiInjectElement();
    this.destroyRef = inject(DestroyRef);
    this.tuiScrollIntoView = input();
    this.dispatchEvent = effect(() => {
      const scroll = this.tuiScrollIntoView();
      if (!scroll) {
        return;
      }
      timer(0).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.el.dispatchEvent(new CustomEvent(TUI_SCROLL_INTO_VIEW, {
          bubbles: true,
          detail: this.el
        }));
      });
    });
  }
};
_TuiScrollIntoView.\u0275fac = function TuiScrollIntoView_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiScrollIntoView)();
};
_TuiScrollIntoView.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiScrollIntoView,
  selectors: [["", "tuiScrollIntoView", ""]],
  inputs: {
    tuiScrollIntoView: [1, "tuiScrollIntoView"]
  }
});
var TuiScrollIntoView = _TuiScrollIntoView;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollIntoView, [{
    type: Directive,
    args: [{
      selector: "[tuiScrollIntoView]"
    }]
  }], null, null);
})();
var _TuiScrollable = class _TuiScrollable {
  constructor() {
    this.el = tuiInjectElement();
  }
  ngOnInit() {
    this.el.dispatchEvent(new CustomEvent(TUI_SCROLLABLE, {
      bubbles: true,
      detail: this.el
    }));
  }
};
_TuiScrollable.\u0275fac = function TuiScrollable_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiScrollable)();
};
_TuiScrollable.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiScrollable,
  selectors: [["", "tuiScrollable", ""]]
});
var TuiScrollable = _TuiScrollable;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollable, [{
    type: Directive,
    args: [{
      selector: "[tuiScrollable]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-services.mjs
var _TuiPositionService = class _TuiPositionService extends Observable {
  constructor() {
    const animationFrame$ = inject(WA_ANIMATION_FRAME);
    const zone = inject(NgZone);
    super((subscriber) => animationFrame$.pipe(startWith(null), map(() => this.accessor.getPosition(this.el.getBoundingClientRect())), tuiZonefree(zone), finalize(() => this.accessor.getPosition(EMPTY_CLIENT_RECT))).subscribe(subscriber));
    this.el = tuiInjectElement();
    this.accessor = inject(TuiPositionAccessor);
  }
};
_TuiPositionService.\u0275fac = function TuiPositionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPositionService)();
};
_TuiPositionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiPositionService,
  factory: _TuiPositionService.\u0275fac
});
var TuiPositionService = _TuiPositionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPositionService, [{
    type: Injectable
  }], () => [], null);
})();
var _TuiVisualViewportService = class _TuiVisualViewportService {
  constructor() {
    this.isWebkit = inject(WA_IS_WEBKIT);
    this.win = inject(WA_WINDOW);
  }
  // https://bugs.webkit.org/show_bug.cgi?id=207089
  correct(point) {
    return this.isWebkit ? [point[0] + (this.win.visualViewport?.offsetLeft ?? 0), point[1] + (this.win.visualViewport?.offsetTop ?? 0)] : point;
  }
};
_TuiVisualViewportService.\u0275fac = function TuiVisualViewportService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiVisualViewportService)();
};
_TuiVisualViewportService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiVisualViewportService,
  factory: _TuiVisualViewportService.\u0275fac,
  providedIn: "root"
});
var TuiVisualViewportService = _TuiVisualViewportService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVisualViewportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/font-watcher/index.esm.js
var IFRAME = {
  position: "fixed",
  visibility: "hidden",
  pointerEvents: "none"
};
var BODY = {
  height: "fit-content",
  lineHeight: "1em",
  fontSize: "calc(env(preferred-text-scale) * 1em)"
};
function tuiFontSizeWatcher(callback, iframe = globalThis.document.createElement("iframe")) {
  const resize = () => {
    const {
      innerWidth = 0,
      outerWidth = 0,
      devicePixelRatio = 0
    } = iframe.ownerDocument.defaultView || {};
    iframe.width = `${innerWidth === outerWidth ? innerWidth : innerWidth / devicePixelRatio}`;
  };
  iframe.ownerDocument.body.append(iframe);
  iframe.ownerDocument.defaultView?.addEventListener("resize", resize);
  const doc = iframe.contentDocument;
  const observer = new ResizeObserver(() => callback(doc?.body.offsetHeight || 0));
  Object.assign(iframe.style, IFRAME);
  Object.assign(doc?.body.style || {}, BODY);
  doc?.head.insertAdjacentHTML("beforeend", '<meta name="text-scale" content="scale">');
  doc?.documentElement.style.setProperty("font", "-apple-system-body");
  doc?.body.insertAdjacentText("beforeend", ".".repeat(1e3));
  observer.observe(doc?.body || iframe);
  resize();
  return () => {
    observer.disconnect();
    iframe.ownerDocument.defaultView?.removeEventListener("resize", resize);
    iframe.remove();
  };
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-font-size.mjs
var TUI_FONT_SIZE_HANDLER = new InjectionToken(ngDevMode ? "TUI_FONT_SIZE_HANDLER" : "");
var _TuiFontSize = class _TuiFontSize {
  constructor() {
    this.handler = inject(TUI_FONT_SIZE_HANDLER, {
      optional: true
    });
    this.enabled = !inject(_TuiFontSize, {
      optional: true,
      skipSelf: true
    }) && isPlatformBrowser(inject(PLATFORM_ID)) && typeof ResizeObserver !== "undefined";
    this.nothing = inject(DestroyRef).onDestroy(this.enabled && this.handler ? tuiFontSizeWatcher(this.handler, inject(DOCUMENT).createElement("iframe")) : EMPTY_FUNCTION);
  }
};
_TuiFontSize.\u0275fac = function TuiFontSize_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiFontSize)();
};
_TuiFontSize.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiFontSize
});
var TuiFontSize = _TuiFontSize;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFontSize, [{
    type: Directive
  }], null, null);
})();

// node_modules/@taiga-ui/event-plugins/fesm2022/taiga-ui-event-plugins.mjs
var LongtapEvent = class extends CustomEvent {
  constructor(type, _a) {
    var _b = _a, {
      clientX,
      clientY
    } = _b, eventInitDict = __objRest(_b, [
      "clientX",
      "clientY"
    ]);
    super(type, __spreadProps(__spreadValues({}, eventInitDict), {
      detail: {
        clientX,
        clientY
      }
    }));
  }
};
var isIos2 = ({
  userAgent,
  maxTouchPoints
}) => /ipad|iphone|ipod/i.test(userAgent) || /^((?!chrome|android).)*safari/i.test(userAgent) && maxTouchPoints > 1;
var TAP_DELAY = 700;
var SAFE_NAVIGATOR = typeof navigator === "undefined" ? null : navigator;
var MOVE_THRESHOLD = 15;
var LongtapEventPlugin = class extends EventManagerPlugin {
  constructor() {
    super(...arguments);
    this.isIOS = !!SAFE_NAVIGATOR && isIos2(SAFE_NAVIGATOR);
  }
  addEventListener(element, _event, handler) {
    const removeLongtapEventPolyfill = this.isIOS ? this.listenTouchEvents(element) : this.listenContextmenuEvent(element);
    element.addEventListener("longtap", handler);
    return () => {
      removeLongtapEventPolyfill();
      element.removeEventListener("longtap", handler);
    };
  }
  supports(event) {
    return event === "longtap";
  }
  listenContextmenuEvent(element) {
    return this.manager.addEventListener(element, "contextmenu.prevent.stop", ({
      clientX,
      clientY
    }) => {
      this.dispatchLongtapEvent(element, clientX, clientY);
    });
  }
  listenTouchEvents(element) {
    let longTapTimeout = null;
    let touchStartCoords = null;
    const reset = () => {
      clearTimeout(longTapTimeout);
      touchStartCoords = null;
      longTapTimeout = null;
    };
    const removeTouchstartListener = this.manager.addEventListener(element, "touchstart.zoneless.passive", ({
      touches
    }) => {
      const touch = touches[0];
      if (!touch) {
        return;
      }
      const {
        clientX,
        clientY
      } = touch;
      touchStartCoords = {
        clientX,
        clientY
      };
      longTapTimeout = setTimeout(() => {
        this.dispatchLongtapEvent(element, clientX, clientY);
        reset();
      }, TAP_DELAY);
    });
    const removeTouchmoveListener = this.manager.addEventListener(element, "touchmove.zoneless.passive", ({
      touches
    }) => {
      const touch = touches[0];
      if (!touch || !touchStartCoords) {
        return;
      }
      const {
        clientX,
        clientY
      } = touch;
      if (Math.hypot(clientX - touchStartCoords.clientX, clientY - touchStartCoords.clientY) <= MOVE_THRESHOLD) {
        return;
      }
      reset();
    });
    const removeTouchcancelListener = this.manager.addEventListener(element, "touchcancel.zoneless.passive", reset);
    const removeTouchendListener = this.manager.addEventListener(element, "touchend.zoneless.passive", reset);
    return () => {
      removeTouchstartListener();
      removeTouchmoveListener();
      removeTouchcancelListener();
      removeTouchendListener();
    };
  }
  dispatchLongtapEvent(element, clientX, clientY) {
    element.dispatchEvent(new LongtapEvent("longtap", {
      clientX,
      clientY,
      bubbles: false,
      cancelable: false,
      composed: false
    }));
  }
};
var TimedEventPlugin = class extends EventManagerPlugin {
  supports(event) {
    return this.regExp.test(event);
  }
  getDelay(event) {
    const match = this.regExp.exec(event);
    if (!match?.groups) {
      throw new Error(`Invalid event: ${event}`);
    }
    const {
      time,
      units
    } = match.groups;
    switch (units) {
      case "ms":
        return Number(time);
      case "s":
        return Number(time) * 1e3;
      default:
        throw new Error(`Invalid event: ${event}`);
    }
  }
  unwrap(event) {
    return event.replace(this.regExp, "");
  }
};
var DebounceEventPlugin = class extends TimedEventPlugin {
  constructor() {
    super(...arguments);
    this.regExp = /\.debounce~(?<time>\d+)(?<units>ms|s)/;
  }
  addEventListener(element, eventName, handler) {
    let timeout;
    const unsubscribe = this.manager.addEventListener(element, this.unwrap(eventName), (event) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        handler(event);
      }, this.getDelay(eventName));
    });
    return () => {
      clearTimeout(timeout);
      unsubscribe();
    };
  }
};
var _AbstractEventPlugin = class _AbstractEventPlugin extends EventManagerPlugin {
  constructor() {
    super(inject(DOCUMENT));
  }
  supports(event) {
    return event.includes(this.modifier);
  }
  unwrap(event) {
    return event.split(".").filter((v) => !this.modifier.includes(v)).join(".");
  }
};
_AbstractEventPlugin.\u0275fac = function AbstractEventPlugin_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbstractEventPlugin)();
};
_AbstractEventPlugin.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AbstractEventPlugin,
  factory: _AbstractEventPlugin.\u0275fac
});
var AbstractEventPlugin = _AbstractEventPlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractEventPlugin, [{
    type: Injectable
  }], () => [], null);
})();
var GLOBAL_HANDLER = new InjectionToken(ngDevMode ? "[GLOBAL_HANDLER]: Global event target handler" : "", {
  factory: () => {
    const document = inject(DOCUMENT);
    return (name) => name.split(".").reduce((obj, prop) => obj?.[prop], document.defaultView);
  }
});
var _GlobalEventPlugin = class _GlobalEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.handler = inject(GLOBAL_HANDLER);
    this.modifier = ">";
  }
  addEventListener(_, event, handler) {
    return this.manager.addEventListener(this.handler(event.split(">")[0]), event.split(">")?.[1] ?? "", handler);
  }
};
_GlobalEventPlugin.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275GlobalEventPlugin_BaseFactory;
  return function GlobalEventPlugin_Factory(__ngFactoryType__) {
    return (\u0275GlobalEventPlugin_BaseFactory || (\u0275GlobalEventPlugin_BaseFactory = \u0275\u0275getInheritedFactory(_GlobalEventPlugin)))(__ngFactoryType__ || _GlobalEventPlugin);
  };
})();
_GlobalEventPlugin.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _GlobalEventPlugin,
  factory: _GlobalEventPlugin.\u0275fac
});
var GlobalEventPlugin = _GlobalEventPlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var _OptionsEventPlugin = class _OptionsEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = "capture.once.passive";
  }
  supports(event) {
    return event.includes(".") && !this.unwrap(event).includes(".");
  }
  addEventListener(element, event, handler) {
    const unwrap = this.unwrap(event);
    const capture = event.includes(".capture");
    element.addEventListener(unwrap, handler, {
      capture,
      once: event.includes(".once"),
      passive: event.includes(".passive")
    });
    return () => element.removeEventListener(unwrap, handler, {
      capture
    });
  }
};
_OptionsEventPlugin.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275OptionsEventPlugin_BaseFactory;
  return function OptionsEventPlugin_Factory(__ngFactoryType__) {
    return (\u0275OptionsEventPlugin_BaseFactory || (\u0275OptionsEventPlugin_BaseFactory = \u0275\u0275getInheritedFactory(_OptionsEventPlugin)))(__ngFactoryType__ || _OptionsEventPlugin);
  };
})();
_OptionsEventPlugin.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OptionsEventPlugin,
  factory: _OptionsEventPlugin.\u0275fac
});
var OptionsEventPlugin = _OptionsEventPlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OptionsEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var _PreventEventPlugin = class _PreventEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".prevent";
  }
  addEventListener(element, event, handler) {
    return this.manager.addEventListener(element, this.unwrap(event), (event2) => {
      event2.preventDefault();
      handler(event2);
    });
  }
};
_PreventEventPlugin.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275PreventEventPlugin_BaseFactory;
  return function PreventEventPlugin_Factory(__ngFactoryType__) {
    return (\u0275PreventEventPlugin_BaseFactory || (\u0275PreventEventPlugin_BaseFactory = \u0275\u0275getInheritedFactory(_PreventEventPlugin)))(__ngFactoryType__ || _PreventEventPlugin);
  };
})();
_PreventEventPlugin.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _PreventEventPlugin,
  factory: _PreventEventPlugin.\u0275fac
});
var PreventEventPlugin = _PreventEventPlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreventEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var _ResizePlugin = class _ResizePlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = "resize";
  }
  supports(event) {
    return event === "resize";
  }
  addEventListener(element, event, handler) {
    if (typeof ResizeObserver === "undefined" || !(element instanceof Element)) {
      element.addEventListener(event, handler);
      return () => element.removeEventListener(event, handler);
    }
    const observer = new ResizeObserver(handler);
    observer.observe(element);
    return () => observer.disconnect();
  }
};
_ResizePlugin.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ResizePlugin_BaseFactory;
  return function ResizePlugin_Factory(__ngFactoryType__) {
    return (\u0275ResizePlugin_BaseFactory || (\u0275ResizePlugin_BaseFactory = \u0275\u0275getInheritedFactory(_ResizePlugin)))(__ngFactoryType__ || _ResizePlugin);
  };
})();
_ResizePlugin.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ResizePlugin,
  factory: _ResizePlugin.\u0275fac
});
var ResizePlugin = _ResizePlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizePlugin, [{
    type: Injectable
  }], null, null);
})();
var _SelfEventPlugin = class _SelfEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".self";
  }
  addEventListener(element, event, handler) {
    return this.manager.addEventListener(element, this.unwrap(event), (event2) => {
      if (event2.target === event2.currentTarget) {
        handler(event2);
      }
    });
  }
};
_SelfEventPlugin.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SelfEventPlugin_BaseFactory;
  return function SelfEventPlugin_Factory(__ngFactoryType__) {
    return (\u0275SelfEventPlugin_BaseFactory || (\u0275SelfEventPlugin_BaseFactory = \u0275\u0275getInheritedFactory(_SelfEventPlugin)))(__ngFactoryType__ || _SelfEventPlugin);
  };
})();
_SelfEventPlugin.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SelfEventPlugin,
  factory: _SelfEventPlugin.\u0275fac
});
var SelfEventPlugin = _SelfEventPlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelfEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var _StopEventPlugin = class _StopEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".stop";
  }
  addEventListener(element, event, handler) {
    return this.manager.addEventListener(element, this.unwrap(event), (event2) => {
      event2.stopPropagation();
      handler(event2);
    });
  }
};
_StopEventPlugin.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275StopEventPlugin_BaseFactory;
  return function StopEventPlugin_Factory(__ngFactoryType__) {
    return (\u0275StopEventPlugin_BaseFactory || (\u0275StopEventPlugin_BaseFactory = \u0275\u0275getInheritedFactory(_StopEventPlugin)))(__ngFactoryType__ || _StopEventPlugin);
  };
})();
_StopEventPlugin.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _StopEventPlugin,
  factory: _StopEventPlugin.\u0275fac
});
var StopEventPlugin = _StopEventPlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StopEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var ThrottleEventPlugin = class extends TimedEventPlugin {
  constructor() {
    super(...arguments);
    this.regExp = /\.throttle~(?<time>\d+)(?<units>ms|s)/;
  }
  addEventListener(element, eventName, handler) {
    let timeout;
    const unsubscribe = this.manager.addEventListener(element, this.unwrap(eventName), (event) => {
      if (timeout !== void 0) {
        return;
      }
      handler(event);
      timeout = setTimeout(() => {
        timeout = void 0;
      }, this.getDelay(eventName));
    });
    return () => {
      clearTimeout(timeout);
      unsubscribe();
    };
  }
};
var _ZonelessPlugin = class _ZonelessPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".zoneless";
  }
  addEventListener(element, event, handler) {
    _ZonelessPlugin.ngZone = this.manager.getZone();
    return _ZonelessPlugin.ngZone?.runOutsideAngular(() => this.manager.addEventListener(element, this.unwrap(event), handler));
  }
};
_ZonelessPlugin.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ZonelessPlugin_BaseFactory;
  return function ZonelessPlugin_Factory(__ngFactoryType__) {
    return (\u0275ZonelessPlugin_BaseFactory || (\u0275ZonelessPlugin_BaseFactory = \u0275\u0275getInheritedFactory(_ZonelessPlugin)))(__ngFactoryType__ || _ZonelessPlugin);
  };
})();
_ZonelessPlugin.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ZonelessPlugin,
  factory: _ZonelessPlugin.\u0275fac
});
var ZonelessPlugin = _ZonelessPlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZonelessPlugin, [{
    type: Injectable
  }], null, null);
})();
var PLUGINS = [ZonelessPlugin, SelfEventPlugin, GlobalEventPlugin, OptionsEventPlugin, PreventEventPlugin, ResizePlugin, StopEventPlugin, LongtapEventPlugin, DebounceEventPlugin, ThrottleEventPlugin];
var NG_EVENT_PLUGINS = PLUGINS.map((useClass) => ({
  provide: EVENT_MANAGER_PLUGINS,
  multi: true,
  useClass
}));
function provideEventPlugins() {
  return NG_EVENT_PLUGINS;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-miscellaneous.mjs
var TUI_FONT_OFFSET = new InjectionToken(ngDevMode ? "TUI_FONT_OFFSET" : "", {
  factory: () => signal(0)
});
function tuiEnableFontScaling() {
  return {
    provide: TUI_FONT_SIZE_HANDLER,
    useFactory: () => {
      const offset = inject(TUI_FONT_OFFSET);
      const {
        documentElement
      } = inject(DOCUMENT);
      return (size) => {
        const current = tuiClamp(size, 17, 28) - 17;
        offset.set(current);
        return documentElement.style.setProperty("--tui-font-offset", tuiPx(current));
      };
    }
  };
}
var TUI_ANIMATIONS_DEFAULT_DURATION = 300;
function tuiGetDuration(speed) {
  return speed && TUI_ANIMATIONS_DEFAULT_DURATION / speed;
}
var KEYS = ["Spacebar", "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Left", "Right", "End", "Home"];
function tuiIsEditingKey(key = "") {
  return key.length === 1 || KEYS.includes(key);
}
function tuiIsObscured(el, exceptSelector = "tui-popups") {
  return !!tuiGetElementObscures(el)?.some((el2) => !el2.closest(exceptSelector));
}
function tuiOverrideOptions(override, fallback) {
  return (directive, options) => {
    const result = directive || __spreadValues({}, options || fallback);
    Object.keys(override).forEach((key) => {
      result[key] = override[key];
    });
    return result;
  };
}
var DEFAULT = {
  apis: "stable",
  fontScaling: true,
  scrollbars: "custom"
};
var TUI_OPTIONS = new InjectionToken(ngDevMode ? "TUI_OPTIONS" : "");
function provideTaiga(config = {}) {
  const options = __spreadValues(__spreadValues({}, DEFAULT), config);
  const providers = [{
    provide: REMOVE_STYLES_ON_COMPONENT_DESTROY,
    useValue: false
  }, {
    provide: TUI_OPTIONS,
    useValue: options
  }, provideEventPlugins(), provideAppInitializer(() => {
    const doc = inject(DOCUMENT);
    const meta = inject(Meta);
    const mode = inject(TUI_DARK_MODE);
    if (options.scrollbars === "custom") {
      doc.documentElement.classList.add("tui-zero-scrollbar");
    }
    if (tuiIsPresent(options.mode)) {
      mode.set(options.mode === "dark");
    }
    if (options.fontScaling && !meta.getTag('name="text-scale"')) {
      meta.addTag({
        name: "text-scale",
        content: "scale"
      });
    }
    effect(() => {
      if (mode()) {
        doc.body.setAttribute("tuiTheme", "dark");
      } else {
        doc.body.removeAttribute("tuiTheme");
      }
    });
  })];
  if (options.fontScaling) {
    providers.push(tuiEnableFontScaling());
  }
  return providers;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-obscured.mjs
var _TuiObscuredService = class _TuiObscuredService extends Observable {
  constructor() {
    super((subscriber) => this.obscured$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.obscured$ = inject(WA_ANIMATION_FRAME).pipe(throttleTime(100, tuiZonefreeScheduler()), map(() => tuiGetElementObscures(this.el)), startWith(null), distinctUntilChanged(), tuiZoneOptimized());
  }
};
_TuiObscuredService.\u0275fac = function TuiObscuredService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiObscuredService)();
};
_TuiObscuredService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiObscuredService,
  factory: _TuiObscuredService.\u0275fac
});
var TuiObscuredService = _TuiObscuredService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscuredService, [{
    type: Injectable
  }], () => [], null);
})();
var _TuiObscured = class _TuiObscured {
  constructor() {
    this.activeZone = inject(TuiActiveZone, {
      optional: true
    });
    this.obscured$ = inject(TuiObscuredService, {
      self: true
    }).pipe(map((by) => !!by?.every((el) => !this.activeZone?.contains(el))));
    this.tuiObscuredEnabled = input();
    this.tuiObscured$ = toObservable(this.tuiObscuredEnabled).pipe(tuiIfMap(() => this.obscured$));
    this.tuiObscured = outputFromObservable(this.tuiObscured$);
  }
};
_TuiObscured.\u0275fac = function TuiObscured_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiObscured)();
};
_TuiObscured.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiObscured,
  selectors: [["", "tuiObscured", ""]],
  inputs: {
    tuiObscuredEnabled: [1, "tuiObscuredEnabled"]
  },
  outputs: {
    tuiObscured: "tuiObscured"
  },
  features: [\u0275\u0275ProvidersFeature([TuiObscuredService])]
});
var TuiObscured = _TuiObscured;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscured, [{
    type: Directive,
    args: [{
      selector: "[tuiObscured]",
      providers: [TuiObscuredService]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-dropdown.mjs
var _c03 = (a0) => ({
  $implicit: a0
});
function TuiDropdownComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", text_r1, " ");
  }
}
var _c1 = ["tuiDropdownHost"];
var _TuiDropdownDriver = class _TuiDropdownDriver extends BehaviorSubject {
  constructor() {
    super(false);
    this.type = "dropdown";
  }
};
_TuiDropdownDriver.\u0275fac = function TuiDropdownDriver_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownDriver)();
};
_TuiDropdownDriver.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiDropdownDriver,
  factory: _TuiDropdownDriver.\u0275fac
});
var TuiDropdownDriver = _TuiDropdownDriver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDriver, [{
    type: Injectable
  }], () => [], null);
})();
var _TuiDropdownDriverDirective = class _TuiDropdownDriverDirective extends TuiDriverDirective {
  constructor() {
    super(...arguments);
    this.type = "dropdown";
  }
};
_TuiDropdownDriverDirective.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiDropdownDriverDirective_BaseFactory;
  return function TuiDropdownDriverDirective_Factory(__ngFactoryType__) {
    return (\u0275TuiDropdownDriverDirective_BaseFactory || (\u0275TuiDropdownDriverDirective_BaseFactory = \u0275\u0275getInheritedFactory(_TuiDropdownDriverDirective)))(__ngFactoryType__ || _TuiDropdownDriverDirective);
  };
})();
_TuiDropdownDriverDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownDriverDirective,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var TuiDropdownDriverDirective = _TuiDropdownDriverDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDriverDirective, [{
    type: Directive
  }], null, null);
})();
var TUI_DROPDOWN_DEFAULT_OPTIONS = {
  align: "start",
  direction: null,
  limitWidth: "auto",
  maxHeight: 400,
  minHeight: 80,
  offset: 4,
  appearance: ""
};
var TUI_DROPDOWN_OPTIONS = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_OPTIONS" : "", {
  factory: () => TUI_DROPDOWN_DEFAULT_OPTIONS
});
var tuiDropdownOptionsProvider = (override) => ({
  provide: TUI_DROPDOWN_OPTIONS,
  deps: [[new Optional(), new Self(), TuiDropdownOptionsDirective], [new Optional(), new SkipSelf(), TUI_DROPDOWN_OPTIONS]],
  useFactory: tuiOverrideOptions(override, TUI_DROPDOWN_DEFAULT_OPTIONS)
});
var _TuiDropdownOptionsDirective = class _TuiDropdownOptionsDirective {
  constructor() {
    this.options = inject(TUI_DROPDOWN_OPTIONS, {
      skipSelf: true
    });
    this.align = this.options.align;
    this.appearance = this.options.appearance;
    this.direction = this.options.direction;
    this.limitWidth = this.options.limitWidth;
    this.minHeight = this.options.minHeight;
    this.maxHeight = this.options.maxHeight;
    this.offset = this.options.offset;
  }
};
_TuiDropdownOptionsDirective.\u0275fac = function TuiDropdownOptionsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownOptionsDirective)();
};
_TuiDropdownOptionsDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownOptionsDirective,
  selectors: [["", "tuiDropdownAlign", ""], ["", "tuiDropdownAppearance", ""], ["", "tuiDropdownDirection", ""], ["", "tuiDropdownLimitWidth", ""], ["", "tuiDropdownMinHeight", ""], ["", "tuiDropdownMaxHeight", ""], ["", "tuiDropdownOffset", ""]],
  inputs: {
    align: [0, "tuiDropdownAlign", "align"],
    appearance: [0, "tuiDropdownAppearance", "appearance"],
    direction: [0, "tuiDropdownDirection", "direction"],
    limitWidth: [0, "tuiDropdownLimitWidth", "limitWidth"],
    minHeight: [0, "tuiDropdownMinHeight", "minHeight"],
    maxHeight: [0, "tuiDropdownMaxHeight", "maxHeight"],
    offset: [0, "tuiDropdownOffset", "offset"]
  },
  features: [\u0275\u0275ProvidersFeature([tuiProvide(TUI_DROPDOWN_OPTIONS, _TuiDropdownOptionsDirective)])]
});
var TuiDropdownOptionsDirective = _TuiDropdownOptionsDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOptionsDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownAlign], [tuiDropdownAppearance], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight], [tuiDropdownMaxHeight], [tuiDropdownOffset]",
      inputs: ["align: tuiDropdownAlign", "appearance: tuiDropdownAppearance", "direction: tuiDropdownDirection", "limitWidth: tuiDropdownLimitWidth", "minHeight: tuiDropdownMinHeight", "maxHeight: tuiDropdownMaxHeight", "offset: tuiDropdownOffset"],
      providers: [tuiProvide(TUI_DROPDOWN_OPTIONS, TuiDropdownOptionsDirective)]
    }]
  }], null, null);
})();
var _TuiDropdownPosition = class _TuiDropdownPosition extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.el = tuiInjectElement();
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.viewport = inject(TUI_VIEWPORT);
    this.direction = new Subject();
    this.type = "dropdown";
    this.accessor = tuiFallbackAccessor("dropdown")(inject(TuiRectAccessor, {
      optional: true
    }), {
      getClientRect: () => this.el.getBoundingClientRect()
    });
    this.tuiDropdownDirectionChange = outputFromObservable(this.direction.pipe(distinctUntilChanged()));
  }
  getPosition({
    width,
    height
  }) {
    if (!width && !height) {
      this.previous = void 0;
    }
    const hostRect = this.accessor.getClientRect();
    const viewportRect = this.viewport.getClientRect();
    const {
      minHeight,
      direction,
      offset,
      limitWidth
    } = this.options;
    const align = this.getAlign(this.options.align);
    const viewport = {
      top: viewportRect.top - offset,
      bottom: viewportRect.bottom + offset,
      right: viewportRect.right - offset,
      left: viewportRect.left + offset
    };
    const previous = this.previous || direction || "bottom";
    const available = {
      top: hostRect.top - 2 * offset - viewport.top,
      bottom: viewport.bottom - hostRect.bottom - 2 * offset
    };
    const rectWidth = limitWidth === "fixed" ? hostRect.width : width;
    const right = Math.max(hostRect.right - rectWidth, offset);
    const left = hostRect.left + width < viewport.right ? hostRect.left : right;
    const position = {
      top: hostRect.top - offset - height,
      bottom: hostRect.bottom + offset,
      right: Math.max(viewport.left, right),
      center: hostRect.left + hostRect.width / 2 + width / 2 < viewport.right ? hostRect.left + hostRect.width / 2 - width / 2 : right,
      left: Math.max(viewport.left, left)
    };
    const better = available.top > available.bottom ? "top" : "bottom";
    if (available[previous] > minHeight && direction || available[previous] > height) {
      this.direction.next(previous);
      return [position[align], position[previous]];
    }
    this.previous = better;
    this.direction.next(better);
    return [position[align], position[better]];
  }
  getAlign(align) {
    const rtl = this.el.matches('[dir="rtl"] :scope');
    if (rtl && align === "start") {
      return "right";
    }
    if (rtl && align === "end") {
      return "left";
    }
    if (align === "center") {
      return "center";
    }
    return align === "end" ? "right" : "left";
  }
};
_TuiDropdownPosition.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiDropdownPosition_BaseFactory;
  return function TuiDropdownPosition_Factory(__ngFactoryType__) {
    return (\u0275TuiDropdownPosition_BaseFactory || (\u0275TuiDropdownPosition_BaseFactory = \u0275\u0275getInheritedFactory(_TuiDropdownPosition)))(__ngFactoryType__ || _TuiDropdownPosition);
  };
})();
_TuiDropdownPosition.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownPosition,
  outputs: {
    tuiDropdownDirectionChange: "tuiDropdownDirectionChange"
  },
  features: [\u0275\u0275InheritDefinitionFeature]
});
var TuiDropdownPosition = _TuiDropdownPosition;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPosition, [{
    type: Directive
  }], null, null);
})();
var MAX_WIDTH_GAP = 16;
var _TuiDropdownComponent = class _TuiDropdownComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.accessor = inject(TuiRectAccessor);
    this.viewport = inject(TUI_VIEWPORT);
    this.vvs = inject(TuiVisualViewportService);
    this.styles$ = inject(TuiPositionService).pipe(takeWhile(() => this.directive.el.isConnected && !!this.directive.el.getBoundingClientRect().height), map((v) => this.position === "fixed" ? this.vvs.correct(v) : v), map((point) => this.getStyles(...point)), takeUntilDestroyed());
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.directive = inject(TuiDropdownDirective);
    this.context = inject(TUI_DROPDOWN_CONTEXT, {
      optional: true
    });
    this.darkMode = inject(TUI_DARK_MODE);
    this.position = this.directive.position;
    this.theme = computed((_ = this.darkMode()) => this.directive.el.closest("[tuiTheme]")?.getAttribute("tuiTheme"));
    this.close = () => this.directive.toggle(false);
  }
  ngAfterViewInit() {
    this.styles$.subscribe({
      next: (styles) => Object.assign(this.el.style, styles),
      complete: () => this.close?.()
    });
  }
  getStyles(x, y) {
    const {
      maxHeight,
      minHeight,
      offset,
      limitWidth
    } = this.options;
    const parent = this.el.offsetParent?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
    const {
      left = 0,
      top = 0
    } = this.position === "fixed" ? {} : parent;
    const rect2 = this.accessor.getClientRect();
    const viewport = this.viewport.getClientRect();
    const zoom = this.directive.el.currentCSSZoom || 1;
    const above = rect2.top - viewport.top - 2 * offset;
    const below = viewport.top + viewport.height - y - offset;
    const available = y > rect2.bottom ? below : above;
    const height = this.el.getBoundingClientRect().right <= rect2.left || x >= rect2.right ? maxHeight : tuiClamp(available, minHeight, maxHeight);
    y -= top;
    x -= left;
    return {
      position: this.position,
      top: tuiPx(Math.round(Math.max(y, offset - top) / zoom)),
      left: tuiPx(Math.round(x / zoom)),
      maxHeight: tuiPx(Math.round(height / zoom)),
      width: limitWidth === "fixed" ? tuiPx(Math.round(rect2.width / zoom)) : "",
      minWidth: limitWidth === "min" ? tuiPx(Math.round(rect2.width / zoom)) : "",
      maxWidth: tuiPx(Math.round(viewport.width / zoom) - MAX_WIDTH_GAP)
    };
  }
};
_TuiDropdownComponent.\u0275fac = function TuiDropdownComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownComponent)();
};
_TuiDropdownComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiDropdownComponent,
  selectors: [["tui-dropdown"]],
  hostVars: 2,
  hostBindings: function TuiDropdownComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-appearance", ctx.options.appearance)("tuiTheme", ctx.theme());
    }
  },
  features: [\u0275\u0275ProvidersFeature([TuiPositionService, tuiPositionAccessorFor("dropdown", TuiDropdownPosition), tuiRectAccessorFor("dropdown", forwardRef(() => TuiDropdownDirective))]), \u0275\u0275HostDirectivesFeature([TuiActiveZone, TuiAnimated])],
  decls: 2,
  vars: 4,
  consts: [[1, "t-scroll"], ["class", "t-primitive", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-primitive"]],
  template: function TuiDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "tui-scrollbar", 0);
      \u0275\u0275template(1, TuiDropdownComponent_div_1_Template, 2, 1, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("polymorpheusOutlet", ctx.directive.content())("polymorpheusOutletContext", \u0275\u0275pureFunction1(2, _c03, ctx.close));
    }
  },
  dependencies: [PolymorpheusOutlet, TuiScrollbar],
  styles: ["[_nghost-%COMP%]{position:absolute;display:flex;box-shadow:var(--tui-shadow-medium);color:var(--tui-text-primary);background:var(--tui-background-elevation-3);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-border-normal);box-sizing:border-box;isolation:isolate;pointer-events:auto;--tui-from: translateY(-1rem)}[_nghost-%COMP%]:has(tui-data-list[data-size=l]){border-radius:var(--tui-radius-l)}.tui-enter[_nghost-%COMP%], .tui-leave[_nghost-%COMP%]{animation-name:tuiFade,tuiSlide}[_nghost-%COMP%]:not([style*=top]){visibility:hidden}.t-scroll[_ngcontent-%COMP%]{flex-grow:1;max-inline-size:calc(100% + 2px);inline-size:max-content;overscroll-behavior:none;margin:-1px}.t-primitive[_ngcontent-%COMP%]{padding:1rem}"]
});
var TuiDropdownComponent = _TuiDropdownComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownComponent, [{
    type: Component,
    args: [{
      selector: "tui-dropdown",
      imports: [PolymorpheusOutlet, TuiScrollbar],
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiPositionService, tuiPositionAccessorFor("dropdown", TuiDropdownPosition), tuiRectAccessorFor("dropdown", forwardRef(() => TuiDropdownDirective))],
      hostDirectives: [TuiActiveZone, TuiAnimated],
      host: {
        "[attr.data-appearance]": "options.appearance",
        "[attr.tuiTheme]": "theme()"
      },
      template: '<tui-scrollbar class="t-scroll">\n    <div\n        *polymorpheusOutlet="directive.content() as text; context: {$implicit: close}"\n        class="t-primitive"\n    >\n        {{ text }}\n    </div>\n</tui-scrollbar>\n',
      styles: [":host{position:absolute;display:flex;box-shadow:var(--tui-shadow-medium);color:var(--tui-text-primary);background:var(--tui-background-elevation-3);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-border-normal);box-sizing:border-box;isolation:isolate;pointer-events:auto;--tui-from: translateY(-1rem)}:host:has(tui-data-list[data-size=l]){border-radius:var(--tui-radius-l)}:host.tui-enter,:host.tui-leave{animation-name:tuiFade,tuiSlide}:host:not([style*=top]){visibility:hidden}.t-scroll{flex-grow:1;max-inline-size:calc(100% + 2px);inline-size:max-content;overscroll-behavior:none;margin:-1px}.t-primitive{padding:1rem}\n"]
    }]
  }], null, null);
})();
var TUI_DROPDOWN_COMPONENT = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_COMPONENT" : "", {
  factory: () => TuiDropdownComponent
});
var TUI_DROPDOWN_CONTEXT = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_CONTEXT" : "");
var TUI_DROPDOWN_HOST = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_HOST" : "");
var _TuiDropdownA11y = class _TuiDropdownA11y {
  constructor() {
    this.id = tuiGenerateId();
    this.host = inject(TUI_DROPDOWN_HOST);
    this.dropdown = inject(TuiDropdownDirective);
    this.tuiDropdownRole = input("listbox");
    this.sync = effect(() => {
      const content = this.dropdown.content();
      const dropdown = this.dropdown.ref();
      const host = this.host.nativeElement;
      host.setAttribute("aria-expanded", String(!!dropdown));
      host.setAttribute("aria-controls", this.id);
      host.setAttribute("aria-haspopup", untracked(this.tuiDropdownRole));
      dropdown?.location.nativeElement.setAttribute("id", this.id);
      dropdown?.location.nativeElement.setAttribute("role", this.tuiDropdownRole());
      if (content) {
        return;
      }
      host.removeAttribute("aria-expanded");
      host.removeAttribute("aria-controls");
      host.removeAttribute("aria-haspopup");
    });
  }
};
_TuiDropdownA11y.\u0275fac = function TuiDropdownA11y_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownA11y)();
};
_TuiDropdownA11y.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownA11y,
  selectors: [["", "tuiDropdownA11y", ""]],
  inputs: {
    tuiDropdownRole: [1, "tuiDropdownRole"]
  }
});
var TuiDropdownA11y = _TuiDropdownA11y;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownA11y, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownA11y]"
    }]
  }], null, null);
})();
var _TuiDropdownDirective = class _TuiDropdownDirective {
  constructor() {
    this.refresh$ = new Subject();
    this.service = inject(TuiPopupService);
    this.cdr = inject(ChangeDetectorRef);
    this.drivers = coerceArray(inject(TuiDropdownDriver, {
      self: true,
      optional: true
    }));
    this.sub = this.refresh$.pipe(throttleTime(0, tuiZonefreeScheduler()), takeUntilDestroyed()).subscribe(() => {
      this.ref()?.changeDetectorRef.detectChanges();
      this.ref()?.changeDetectorRef.markForCheck();
    });
    this.autoClose = effect(() => {
      if (!this.content()) {
        this.toggle(false);
      }
    });
    this.ref = signal(null);
    this.el = tuiInjectElement();
    this.type = "dropdown";
    this.component = new PolymorpheusComponent(inject(TUI_DROPDOWN_COMPONENT), inject(INJECTOR$1));
    this.content = input(null, {
      alias: "tuiDropdown",
      transform: (content) => content instanceof TemplateRef ? new PolymorpheusTemplate(content, this.cdr) : content
    });
  }
  get position() {
    return tuiCheckFixedPosition(this.el) ? "fixed" : "absolute";
  }
  ngAfterViewChecked() {
    if (this.ref()) {
      this.refresh$.next();
    }
  }
  ngOnDestroy() {
    this.toggle(false);
  }
  getClientRect() {
    return this.el.getBoundingClientRect();
  }
  toggle(show) {
    const ref = this.ref();
    if (show && this.content() && !ref) {
      this.ref.set(this.service.add(this.component));
    } else if (!show && ref) {
      this.ref.set(null);
      ref.destroy();
    }
    this.drivers.forEach((driver) => driver?.next(show));
  }
};
_TuiDropdownDirective.\u0275fac = function TuiDropdownDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownDirective)();
};
_TuiDropdownDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownDirective,
  selectors: [["", "tuiDropdown", "", 5, "ng-container", 5, "ng-template"]],
  hostVars: 2,
  hostBindings: function TuiDropdownDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("tui-dropdown-open", ctx.ref());
    }
  },
  inputs: {
    content: [1, "tuiDropdown", "content"]
  },
  exportAs: ["tuiDropdown"],
  features: [\u0275\u0275ProvidersFeature([tuiAsVehicle(_TuiDropdownDirective), tuiProvide(TUI_DROPDOWN_HOST, ElementRef)]), \u0275\u0275HostDirectivesFeature([TuiDropdownDriverDirective, {
    directive: TuiDropdownA11y,
    inputs: ["tuiDropdownRole", "tuiDropdownRole"]
  }, {
    directive: TuiDropdownPosition,
    outputs: ["tuiDropdownDirectionChange", "tuiDropdownDirectionChange"]
  }])]
});
var TuiDropdownDirective = _TuiDropdownDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdown]:not(ng-container):not(ng-template)",
      providers: [tuiAsVehicle(TuiDropdownDirective), tuiProvide(TUI_DROPDOWN_HOST, ElementRef)],
      exportAs: "tuiDropdown",
      hostDirectives: [TuiDropdownDriverDirective, {
        directive: TuiDropdownA11y,
        inputs: ["tuiDropdownRole"]
      }, {
        directive: TuiDropdownPosition,
        outputs: ["tuiDropdownDirectionChange"]
      }],
      host: {
        "[class.tui-dropdown-open]": "ref()"
      }
    }]
  }], null, null);
})();
var _TuiDropdownClose = class _TuiDropdownClose {
  constructor() {
    this.el = tuiInjectElement();
    this.ref = inject(TuiDropdownDirective).ref;
    this.open = inject(TuiDropdownOpen);
    this.obscured = inject(TuiObscured);
    this.activeZone = inject(TuiActiveZone);
    this.tuiDropdownClose = outputFromObservable(merge(
      inject(TuiDropdownDriver).pipe(tuiIfMap(() => merge(tuiCloseWatcher(), this.obscured.tuiObscured$.pipe(filter(Boolean)), this.activeZone.tuiActiveZoneChange.pipe(filter((a) => !a)), tuiTypedFromEvent(this.el, "focusin").pipe(filter((event) => !this.open.nativeElement.contains(tuiGetActualTarget(event)) || !this.ref()))))),
      // @ts-ignore
      typeof CloseWatcher === "undefined" ? tuiTypedFromEvent(inject(DOCUMENT), "keydown", {
        capture: true
      }).pipe(filter(({
        key
      }) => key === "Escape" && this.open.open() && !this.ref()?.location.nativeElement?.nextElementSibling), tuiStopPropagation()) : EMPTY
    ));
  }
};
_TuiDropdownClose.\u0275fac = function TuiDropdownClose_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownClose)();
};
_TuiDropdownClose.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownClose,
  outputs: {
    tuiDropdownClose: "tuiDropdownClose"
  }
});
var TuiDropdownClose = _TuiDropdownClose;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownClose, [{
    type: Directive
  }], null, null);
})();
var _TuiDropdownOpen = class _TuiDropdownOpen {
  constructor() {
    this.dropdownHost = contentChild("tuiDropdownHost", {
      descendants: true,
      read: ElementRef
    });
    this.directive = inject(TuiDropdownDirective);
    this.el = tuiInjectElement();
    this.obscured = inject(TuiObscured);
    this.driver = inject(TuiDropdownDriver);
    this.dropdown = computed(() => this.directive.ref()?.location.nativeElement);
    this.enabled = input(true, {
      alias: "tuiDropdownEnabled"
    });
    this.open = model(false, {
      alias: "tuiDropdownOpen"
    });
    this.driveEffect = effect(() => this.drive(this.open()));
    this.syncSub = this.driver.pipe(filter((open) => open !== this.open()), takeUntilDestroyed()).subscribe((open) => this.update(open));
    this.keydownSub = tuiTypedFromEvent(inject(DOCUMENT), "keydown").pipe(takeUntilDestroyed()).subscribe((event) => this.onKeydown(event));
  }
  get nativeElement() {
    const initial = this.dropdownHost()?.nativeElement || this.el;
    const focusable = tuiIsFocusable(initial) ? initial : tuiGetClosestFocusable({
      initial,
      root: this.el
    });
    return this.dropdownHost()?.nativeElement || focusable || this.el;
  }
  toggle(open) {
    if (this.focused && !open) {
      this.nativeElement.focus({
        preventScroll: true
      });
    }
    this.update(open);
  }
  onClick(target) {
    if (!this.editable && this.nativeElement.contains(target)) {
      this.update(!this.open());
    }
  }
  onArrow(event, up) {
    if (!tuiIsElement(event.target) || !this.nativeElement.contains(event.target) || !this.enabled() || !this.directive.content()) {
      return;
    }
    event.preventDefault();
    this.focusDropdown(up);
  }
  get editable() {
    return tuiIsElementEditable(this.nativeElement);
  }
  get focused() {
    return tuiIsFocusedIn(this.nativeElement) || tuiIsFocusedIn(this.dropdown());
  }
  onKeydown(event) {
    const target = tuiGetActualTarget(event);
    if (!event.defaultPrevented && tuiIsEditingKey(event.key) && this.editable && this.focused && tuiIsHTMLElement(target) && !tuiIsElementEditable(target)) {
      this.nativeElement.focus({
        preventScroll: true
      });
    }
  }
  update(open) {
    if (open && !this.enabled()) {
      return this.drive();
    }
    this.open.set(open);
    this.drive();
  }
  drive(open = this.open() && this.enabled()) {
    tuiSetSignal(this.obscured.tuiObscuredEnabled, open);
    this.driver.next(open);
  }
  focusDropdown(previous) {
    const root = this.dropdown();
    if (!root) {
      this.update(true);
      return;
    }
    const doc = this.el.ownerDocument;
    const child = root.appendChild(doc.createElement("div"));
    const initial = previous ? child : root;
    const focusable = tuiGetClosestFocusable({
      initial,
      previous,
      root
    });
    child.remove();
    focusable?.focus();
  }
};
_TuiDropdownOpen.\u0275fac = function TuiDropdownOpen_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownOpen)();
};
_TuiDropdownOpen.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownOpen,
  selectors: [["", "tuiDropdown", "", "tuiDropdownAuto", ""], ["", "tuiDropdown", "", "tuiDropdownOpen", ""], ["", "tuiDropdown", "", "tuiDropdownOpenChange", ""]],
  contentQueries: function TuiDropdownOpen_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.dropdownHost, _c1, 5, ElementRef);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  },
  hostBindings: function TuiDropdownOpen_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function TuiDropdownOpen_click_HostBindingHandler($event) {
        return ctx.onClick($event.target);
      })("keydown.arrowDown", function TuiDropdownOpen_keydown_arrowDown_HostBindingHandler($event) {
        return ctx.onArrow($event, false);
      })("keydown.arrowUp", function TuiDropdownOpen_keydown_arrowUp_HostBindingHandler($event) {
        return ctx.onArrow($event, true);
      })("tuiActiveZoneChange", function TuiDropdownOpen_tuiActiveZoneChange_HostBindingHandler() {
        return 0;
      })("tuiDropdownClose", function TuiDropdownOpen_tuiDropdownClose_HostBindingHandler() {
        return ctx.toggle(false);
      });
    }
  },
  inputs: {
    enabled: [1, "tuiDropdownEnabled", "enabled"],
    open: [1, "tuiDropdownOpen", "open"]
  },
  outputs: {
    open: "tuiDropdownOpenChange"
  },
  features: [\u0275\u0275ProvidersFeature([TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiProvide(TUI_DROPDOWN_HOST, _TuiDropdownOpen)]), \u0275\u0275HostDirectivesFeature([TuiObscured, {
    directive: TuiDropdownClose,
    outputs: ["tuiDropdownClose", "tuiDropdownClose"]
  }, {
    directive: TuiActiveZone,
    inputs: ["tuiActiveZoneParent", "tuiActiveZoneParent"],
    outputs: ["tuiActiveZoneChange", "tuiActiveZoneChange"]
  }])]
});
var TuiDropdownOpen = _TuiDropdownOpen;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOpen, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdown][tuiDropdownAuto],[tuiDropdown][tuiDropdownOpen],[tuiDropdown][tuiDropdownOpenChange]",
      providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiProvide(TUI_DROPDOWN_HOST, TuiDropdownOpen)],
      hostDirectives: [TuiObscured, {
        directive: TuiDropdownClose,
        outputs: ["tuiDropdownClose"]
      }, {
        directive: TuiActiveZone,
        inputs: ["tuiActiveZoneParent"],
        outputs: ["tuiActiveZoneChange"]
      }],
      host: {
        "(click)": "onClick($event.target)",
        "(keydown.arrowDown)": "onArrow($event, false)",
        "(keydown.arrowUp)": "onArrow($event, true)",
        // TODO: Necessary because startWith(false) + distinctUntilChanged() in TuiActiveZone, think of better solution
        "(tuiActiveZoneChange)": "0",
        "(tuiDropdownClose)": "toggle(false)"
      }
    }]
  }], null, null);
})();
function tuiDropdown(value) {
  return tuiDirectiveBinding(TuiDropdownDirective, "content", value, {});
}
function tuiDropdownEnabled(value) {
  return tuiDirectiveBinding(TuiDropdownOpen, "enabled", value, {});
}
var _TuiDropdownContent = class _TuiDropdownContent {
  constructor() {
    this.directive = inject(TuiDropdownDirective);
    tuiSetSignal(this.directive.content, inject(TemplateRef));
    if (isPlatformBrowser(inject(PLATFORM_ID)) && this.directive.el.matches(":focus-within")) {
      this.directive.toggle(true);
    }
  }
  ngOnDestroy() {
    tuiSetSignal(this.directive.content, null);
  }
};
_TuiDropdownContent.\u0275fac = function TuiDropdownContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownContent)();
};
_TuiDropdownContent.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownContent,
  selectors: [["ng-template", "tuiDropdown", ""]]
});
var TuiDropdownContent = _TuiDropdownContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiDropdown]"
    }]
  }], () => [], null);
})();
var _TuiDropdownContext = class _TuiDropdownContext extends TuiRectAccessor {
  constructor() {
    super(...arguments);
    this.isTouch = inject(WA_IS_TOUCH);
    this.currentRect = EMPTY_CLIENT_RECT;
    this.userSelect = computed(() => this.isTouch() ? "none" : null);
    this.activeZone = inject(TuiActiveZone);
    this.driver = inject(TuiDropdownDriver);
    this.doc = inject(DOCUMENT);
    this.sub = merge(tuiTypedFromEvent(this.doc, "pointerdown"), tuiTypedFromEvent(this.doc, "keydown").pipe(filter(({
      key
    }) => key === "Escape")), tuiTypedFromEvent(this.doc, "contextmenu", {
      capture: true
    })).pipe(filter((event) => this.driver.value && !this.activeZone.contains(tuiGetActualTarget(event))), tuiZoneOptimized(), takeUntilDestroyed()).subscribe(() => {
      this.driver.next(false);
      this.currentRect = EMPTY_CLIENT_RECT;
    });
    this.type = "dropdown";
  }
  getClientRect() {
    return this.currentRect;
  }
  onContextMenu(x, y) {
    this.currentRect = tuiPointToClientRect(x, y);
    this.driver.next(true);
  }
};
_TuiDropdownContext.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiDropdownContext_BaseFactory;
  return function TuiDropdownContext_Factory(__ngFactoryType__) {
    return (\u0275TuiDropdownContext_BaseFactory || (\u0275TuiDropdownContext_BaseFactory = \u0275\u0275getInheritedFactory(_TuiDropdownContext)))(__ngFactoryType__ || _TuiDropdownContext);
  };
})();
_TuiDropdownContext.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownContext,
  selectors: [["", "tuiDropdownContext", ""]],
  hostVars: 6,
  hostBindings: function TuiDropdownContext_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("longtap", function TuiDropdownContext_longtap_HostBindingHandler($event) {
        return ctx.onContextMenu($event.detail.clientX, $event.detail.clientY);
      });
    }
    if (rf & 2) {
      \u0275\u0275styleProp("-webkit-touch-callout", ctx.userSelect())("-webkit-user-select", ctx.userSelect())("user-select", ctx.userSelect());
    }
  },
  features: [\u0275\u0275ProvidersFeature([TuiActiveZone, TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiAsRectAccessor(_TuiDropdownContext)]), \u0275\u0275InheritDefinitionFeature]
});
var TuiDropdownContext = _TuiDropdownContext;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownContext, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownContext]",
      providers: [TuiActiveZone, TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiAsRectAccessor(TuiDropdownContext)],
      host: {
        "[style.-webkit-touch-callout]": "userSelect()",
        "[style.-webkit-user-select]": "userSelect()",
        "[style.user-select]": "userSelect()",
        "(longtap)": "onContextMenu($event.detail.clientX, $event.detail.clientY)"
      }
    }]
  }], null, null);
})();
var TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS = {
  showDelay: 200,
  hideDelay: 500
};
var [TUI_DROPDOWN_HOVER_OPTIONS, tuiDropdownHoverOptionsProvider] = tuiCreateOptions(TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS);
var _TuiDropdownHover = class _TuiDropdownHover extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.dropdownHost = contentChild("tuiDropdownHost", {
      descendants: true,
      read: ElementRef
    });
    this.el = tuiInjectElement();
    this.doc = inject(DOCUMENT);
    this.options = inject(TUI_DROPDOWN_HOVER_OPTIONS);
    this.activeZone = inject(TuiActiveZone);
    this.open = inject(TuiDropdownOpen, {
      optional: true
    });
    this.stream$ = merge(
      /**
       * Dropdown can be removed not only via click/touch –
       * swipe on mobile devices removes dropdown sheet without triggering new mouseover / mouseout events.
       */
      toObservable(inject(TuiDropdownDirective).ref).pipe(filter((x) => !x && this.hovered()), switchMap(() => tuiTypedFromEvent(this.doc, "pointerdown").pipe(map(tuiGetActualTarget), delay(this.tuiDropdownHideDelay()), startWith(null), takeUntil(fromEvent(this.doc, "mouseover"))))),
      tuiTypedFromEvent(this.doc, "mouseover").pipe(map(tuiGetActualTarget)),
      tuiTypedFromEvent(this.doc, "mouseout").pipe(map((e) => e.relatedTarget))
    ).pipe(map((element) => tuiIsElement(element) && this.isHovered(element)), distinctUntilChanged(), switchMap((v) => of(v).pipe(delay(v ? this.tuiDropdownShowDelay() : this.tuiDropdownHideDelay()), takeUntil(this.open ? fromEvent(this.el, "pointerdown") : EMPTY))), tuiZoneOptimized(), tap((hovered) => {
      this.hovered.set(hovered);
      this.open?.toggle(hovered);
    }), share());
    this.hovered = signal(false);
    this.tuiDropdownShowDelay = input(this.options.showDelay);
    this.tuiDropdownHideDelay = input(this.options.hideDelay);
    this.type = "dropdown";
  }
  onClick(event) {
    if (this.hovered() && this.open) {
      event.preventDefault();
    }
  }
  isHovered(element) {
    const host = this.dropdownHost()?.nativeElement || this.el;
    const hovered = host.contains(element);
    const child = !this.el.contains(element) && this.activeZone.contains(element);
    return hovered || child;
  }
};
_TuiDropdownHover.\u0275fac = function TuiDropdownHover_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownHover)();
};
_TuiDropdownHover.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownHover,
  selectors: [["", "tuiDropdownHover", ""]],
  contentQueries: function TuiDropdownHover_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.dropdownHost, _c1, 5, ElementRef);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  },
  hostBindings: function TuiDropdownHover_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click.capture", function TuiDropdownHover_click_capture_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  },
  inputs: {
    tuiDropdownShowDelay: [1, "tuiDropdownShowDelay"],
    tuiDropdownHideDelay: [1, "tuiDropdownHideDelay"]
  },
  features: [\u0275\u0275ProvidersFeature([TuiActiveZone, tuiAsDriver(_TuiDropdownHover)]), \u0275\u0275InheritDefinitionFeature]
});
var TuiDropdownHover = _TuiDropdownHover;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownHover, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownHover]",
      providers: [TuiActiveZone, tuiAsDriver(TuiDropdownHover)],
      host: {
        "(click.capture)": "onClick($event)"
      }
    }]
  }], () => [], null);
})();
var _TuiDropdownFixed = class _TuiDropdownFixed {
  constructor() {
    const override = tuiOverrideOptions({
      limitWidth: "fixed"
    }, TUI_DROPDOWN_DEFAULT_OPTIONS);
    override(inject(TUI_DROPDOWN_OPTIONS, {
      self: true,
      optional: true
    }), null);
  }
};
_TuiDropdownFixed.\u0275fac = function TuiDropdownFixed_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownFixed)();
};
_TuiDropdownFixed.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownFixed,
  features: [\u0275\u0275ProvidersFeature([tuiDropdownOptionsProvider({})])]
});
var TuiDropdownFixed = _TuiDropdownFixed;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownFixed, [{
    type: Directive,
    args: [{
      providers: [tuiDropdownOptionsProvider({})]
    }]
  }], () => [], null);
})();
var _TuiDropdownAuto = class _TuiDropdownAuto {
  constructor() {
    inject(TUI_DROPDOWN_OPTIONS).limitWidth = "auto";
  }
};
_TuiDropdownAuto.\u0275fac = function TuiDropdownAuto_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownAuto)();
};
_TuiDropdownAuto.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownAuto
});
var TuiDropdownAuto = _TuiDropdownAuto;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownAuto, [{
    type: Directive
  }], () => [], null);
})();
var _TuiDropdownManual = class _TuiDropdownManual {
  constructor() {
    this.driver = inject(TuiDropdownDriver);
    this.tuiDropdownManual = input(false);
  }
  ngOnChanges() {
    this.driver.next(!!this.tuiDropdownManual());
  }
};
_TuiDropdownManual.\u0275fac = function TuiDropdownManual_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownManual)();
};
_TuiDropdownManual.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownManual,
  selectors: [["", "tuiDropdownManual", ""]],
  inputs: {
    tuiDropdownManual: [1, "tuiDropdownManual"]
  },
  features: [\u0275\u0275ProvidersFeature([TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]), \u0275\u0275NgOnChangesFeature]
});
var TuiDropdownManual = _TuiDropdownManual;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownManual, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownManual]",
      providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]
    }]
  }], null, null);
})();
var _TuiDropdownPositionSided = class _TuiDropdownPositionSided extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.viewport = inject(TUI_VIEWPORT);
    this.vertical = inject(TuiDropdownPosition);
    this.previous = this.options.direction || "bottom";
    this.tuiDropdownSided = input("");
    this.tuiDropdownSidedOffset = input(4);
    this.type = "dropdown";
  }
  getPosition(rect2) {
    if (this.tuiDropdownSided() === false) {
      return this.vertical.getPosition(rect2);
    }
    const {
      height,
      width
    } = rect2;
    const hostRect = this.vertical.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
    const viewport = this.viewport.getClientRect();
    const {
      direction,
      offset
    } = this.options;
    const adjusted = this.vertical.getAlign(this.options.align);
    const align = adjusted === "center" ? "left" : adjusted;
    const available = {
      top: hostRect.bottom - viewport.top,
      left: hostRect.left - offset - viewport.left,
      right: viewport.right - hostRect.right - offset,
      bottom: viewport.bottom - hostRect.top
    };
    const position = {
      top: hostRect.bottom - height + this.tuiDropdownSidedOffset() + 1,
      // 1 for border
      left: hostRect.left - width - offset,
      right: hostRect.right + offset,
      bottom: hostRect.top - this.tuiDropdownSidedOffset() - 1
      // 1 for border
    };
    const better = available.top > available.bottom ? "top" : "bottom";
    const maxLeft = available.left > available.right ? position.left : position.right;
    const left = available[align] > width ? position[align] : maxLeft;
    if (available[this.previous] > height && direction || this.previous === better) {
      this.vertical.direction.next(this.previous);
      return [left, position[this.previous]];
    }
    this.previous = better;
    this.vertical.direction.next(better);
    return [left, position[better]];
  }
};
_TuiDropdownPositionSided.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiDropdownPositionSided_BaseFactory;
  return function TuiDropdownPositionSided_Factory(__ngFactoryType__) {
    return (\u0275TuiDropdownPositionSided_BaseFactory || (\u0275TuiDropdownPositionSided_BaseFactory = \u0275\u0275getInheritedFactory(_TuiDropdownPositionSided)))(__ngFactoryType__ || _TuiDropdownPositionSided);
  };
})();
_TuiDropdownPositionSided.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownPositionSided,
  selectors: [["", "tuiDropdownSided", ""]],
  inputs: {
    tuiDropdownSided: [1, "tuiDropdownSided"],
    tuiDropdownSidedOffset: [1, "tuiDropdownSidedOffset"]
  },
  features: [\u0275\u0275ProvidersFeature([TuiDropdownPosition, tuiAsPositionAccessor(_TuiDropdownPositionSided)]), \u0275\u0275InheritDefinitionFeature]
});
var TuiDropdownPositionSided = _TuiDropdownPositionSided;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPositionSided, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownSided]",
      providers: [TuiDropdownPosition, tuiAsPositionAccessor(TuiDropdownPositionSided)]
    }]
  }], null, null);
})();
var _TuiDropdownSelection = class _TuiDropdownSelection extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.doc = inject(DOCUMENT);
    this.vcr = inject(ViewContainerRef);
    this.dropdown = inject(TuiDropdownDirective);
    this.el = tuiInjectElement();
    this.handler = computed((visible = this.tuiDropdownSelection()) => tuiIsString(visible) ? TUI_TRUE_HANDLER : visible);
    this.stream$ = combineLatest([toObservable(this.handler), inject(TUI_SELECTION_STREAM).pipe(map(() => this.getRange()), filter((range) => this.isValid(range)), distinctUntilChanged((x, y) => x.startOffset === y.startOffset && x.endOffset === y.endOffset && x.commonAncestorContainer === y.commonAncestorContainer)), merge(fromEvent(this.el, "scroll", {
      passive: true,
      capture: true
    })).pipe(throttleTime(16, void 0, {
      leading: false,
      trailing: true
    }), startWith(0))]).pipe(tap(([, range]) => {
      this.range = this.el.contains(range.commonAncestorContainer) && tuiIsTextNode(range.commonAncestorContainer) ? range : this.range;
    }), map(([handler, range]) => {
      const contained = this.el.contains(range.commonAncestorContainer);
      const valid = contained && handler(this.range);
      const visible = valid || this.inDropdown(range);
      const active = tuiGetFocused(this.doc);
      const textfield = active && tuiIsTextfield(active) && this.el.contains(active);
      return visible && textfield ? this.isCaretVisible(this.range) : visible;
    }));
    this.range = isPlatformBrowser(inject(PLATFORM_ID)) ? new Range() : {};
    this.type = "dropdown";
    this.tuiDropdownSelection = input("");
    this.tuiDropdownSelectionPosition = input("selection");
  }
  getClientRect() {
    switch (this.tuiDropdownSelectionPosition()) {
      case "tag": {
        const {
          commonAncestorContainer
        } = this.range;
        const element = tuiIsElement(commonAncestorContainer) ? commonAncestorContainer : commonAncestorContainer.parentNode;
        return element && tuiIsElement(element) ? element.getBoundingClientRect() : EMPTY_CLIENT_RECT;
      }
      case "word":
        return tuiGetWordRange(this.range).getBoundingClientRect();
      default:
        return this.range.getBoundingClientRect();
    }
  }
  ngOnDestroy() {
    if (this.ghost) {
      this.ghostHost.removeChild(this.ghost);
    }
  }
  get ghostHost() {
    return this.el.querySelector("tui-textfield .t-ghost") || this.el;
  }
  getRange() {
    const active = tuiGetFocused(this.doc);
    const selection = this.doc.getSelection();
    const range = active && tuiIsTextfield(active) && this.el.contains(active) ? this.veryVerySadInputFix(active) : selection?.rangeCount && selection.getRangeAt(0) || this.range;
    return range.cloneRange();
  }
  /**
   * Check if given range is at least partially inside dropdown
   */
  inDropdown(range) {
    const {
      startContainer,
      endContainer
    } = range;
    const inDropdown = this.boxContains(range.commonAncestorContainer);
    const hostToDropdown = this.boxContains(endContainer) && this.el.contains(startContainer);
    const dropdownToHost = this.boxContains(startContainer) && this.el.contains(endContainer);
    return inDropdown || hostToDropdown || dropdownToHost;
  }
  /**
   * Check if Node is inside dropdown
   */
  boxContains(node) {
    return !!this.dropdown.ref()?.location.nativeElement.contains(node);
  }
  /**
   * Check if range is not inside tui-textfield's DOM elements
   */
  isValid(range) {
    return !this.el.contains(range.commonAncestorContainer) || !this.el.closest("tui-textfield") || range.intersectsNode(this.ghost || this.el);
  }
  veryVerySadInputFix(element) {
    const {
      ghost = this.initGhost(this.ghostHost)
    } = this;
    const {
      top,
      left,
      width,
      height
    } = this.ghostHost.getBoundingClientRect();
    const {
      selectionStart,
      selectionEnd,
      value
    } = element;
    const range = this.doc.createRange();
    const hostRect = this.ghostHost.getBoundingClientRect();
    ghost.style.top = tuiPx(top - hostRect.top);
    ghost.style.left = tuiPx(left - hostRect.left);
    ghost.style.width = tuiPx(width);
    ghost.style.height = tuiPx(height);
    ghost.textContent = `${CHAR_ZERO_WIDTH_SPACE}${value}${CHAR_NO_BREAK_SPACE}`;
    range.setStart(ghost.firstChild, selectionStart || 0);
    range.setEnd(ghost.firstChild, selectionEnd || 0);
    return range;
  }
  /**
   * Create an invisible DIV styled exactly like input/textarea element inside directive
   */
  initGhost(element) {
    const ghost = this.doc.createElement("div");
    const {
      font,
      letterSpacing,
      textTransform,
      padding,
      borderTop
    } = getComputedStyle(element);
    ghost.style.position = "absolute";
    ghost.style.pointerEvents = "none";
    ghost.style.opacity = "0";
    ghost.style.whiteSpace = "pre-wrap";
    ghost.style.boxSizing = "border-box";
    ghost.style.borderTop = borderTop;
    ghost.style.font = font;
    ghost.style.letterSpacing = letterSpacing;
    ghost.style.textTransform = textTransform;
    ghost.style.padding = padding;
    this.ghostHost.appendChild(ghost);
    this.ghost = ghost;
    return ghost;
  }
  isCaretVisible(range) {
    const caret = range.getBoundingClientRect();
    const host = this.ghostHost.getBoundingClientRect();
    const styles = getComputedStyle(this.ghostHost);
    const fontSize = Number.parseFloat(styles.fontSize) || 16;
    const lineHeight = Number.parseFloat(styles.lineHeight) || fontSize * 1.2;
    const visibleTop = Math.max(caret.top, host.top);
    const visibleBottom = Math.min(caret.bottom, host.bottom);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
    const threshold = lineHeight * 0.5;
    return visibleHeight >= threshold;
  }
};
_TuiDropdownSelection.\u0275fac = function TuiDropdownSelection_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownSelection)();
};
_TuiDropdownSelection.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownSelection,
  selectors: [["", "tuiDropdownSelection", ""]],
  inputs: {
    tuiDropdownSelection: [1, "tuiDropdownSelection"],
    tuiDropdownSelectionPosition: [1, "tuiDropdownSelectionPosition"]
  },
  features: [\u0275\u0275ProvidersFeature([tuiAsDriver(_TuiDropdownSelection), tuiAsRectAccessor(_TuiDropdownSelection)]), \u0275\u0275InheritDefinitionFeature]
});
var TuiDropdownSelection = _TuiDropdownSelection;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownSelection, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownSelection]",
      providers: [tuiAsDriver(TuiDropdownSelection), tuiAsRectAccessor(TuiDropdownSelection)]
    }]
  }], () => [], null);
})();
var _TuiWithDropdownOpen = class _TuiWithDropdownOpen {
};
_TuiWithDropdownOpen.\u0275fac = function TuiWithDropdownOpen_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiWithDropdownOpen)();
};
_TuiWithDropdownOpen.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiWithDropdownOpen,
  features: [\u0275\u0275HostDirectivesFeature([{
    directive: TuiDropdownOpen,
    inputs: ["tuiDropdownOpen", "open", "tuiDropdownEnabled", "tuiDropdownEnabled"],
    outputs: ["tuiDropdownOpenChange", "openChange"]
  }])]
});
var TuiWithDropdownOpen = _TuiWithDropdownOpen;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithDropdownOpen, [{
    type: Directive,
    args: [{
      hostDirectives: [{
        directive: TuiDropdownOpen,
        inputs: ["tuiDropdownOpen: open", "tuiDropdownEnabled"],
        outputs: ["tuiDropdownOpenChange: openChange"]
      }]
    }]
  }], null, null);
})();
var TuiDropdown = [TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownA11y, TuiDropdownOpen, TuiDropdownManual, TuiDropdownHover, TuiDropdownContent, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection];

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-link.mjs
var [TUI_LINK_OPTIONS, tuiLinkOptionsProvider] = tuiCreateOptions({
  appearance: "action"
});
var _Styles4 = class _Styles4 {
};
_Styles4.\u0275fac = function Styles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Styles4)();
};
_Styles4.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _Styles4,
  selectors: [["ng-component"]],
  exportAs: ["tui-link-5.7.0"],
  decls: 0,
  vars: 0,
  template: function Styles_Template(rf, ctx) {
  },
  styles: ['[tuiLink]:where(*[data-tui-version="5.7.0"]){transition-property:color,text-decoration,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;padding:0;background:transparent;border:none;cursor:pointer;font:inherit;color:inherit;border-radius:.125rem;outline-width:1px;outline-offset:-1px;text-underline-offset:.2em;text-decoration:none dashed currentColor 1px;text-decoration-color:color-mix(in lch,currentColor,transparent)}[tuiLink]:where(*[data-tui-version="5.7.0"]):before{margin-inline-end:.25rem}[tuiLink]:where(*[data-tui-version="5.7.0"]):after{margin-inline-start:.25rem}[tuiLink]:where(*[data-tui-version="5.7.0"])[tuiIcons]:before,[tuiLink]:where(*[data-tui-version="5.7.0"])[tuiIcons]:after{content:"\\2060";padding:calc(var(--tui-icon-size, 1rem) / 2);vertical-align:super;font-size:0;line-height:0;box-sizing:border-box;-webkit-mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;transition:none}[tuiLink]:where(*[data-tui-version="5.7.0"])[tuiChevron]:after{display:inline-block;vertical-align:initial}@media(hover:hover)and (pointer:fine){[tuiLink]:where(*[data-tui-version="5.7.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){text-decoration-color:currentColor}}[tuiLink]:where(*[data-tui-version="5.7.0"])[data-state=hover]{text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version="5.7.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):active:not([data-state]){text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version="5.7.0"])[data-state=active]{text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version="5.7.0"])[data-appearance=""]{text-decoration-line:underline;text-decoration-style:solid}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var Styles4 = _Styles4;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles4, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-link-${TUI_VERSION}`,
      styles: ['[tuiLink]:where(*[data-tui-version="5.7.0"]){transition-property:color,text-decoration,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;padding:0;background:transparent;border:none;cursor:pointer;font:inherit;color:inherit;border-radius:.125rem;outline-width:1px;outline-offset:-1px;text-underline-offset:.2em;text-decoration:none dashed currentColor 1px;text-decoration-color:color-mix(in lch,currentColor,transparent)}[tuiLink]:where(*[data-tui-version="5.7.0"]):before{margin-inline-end:.25rem}[tuiLink]:where(*[data-tui-version="5.7.0"]):after{margin-inline-start:.25rem}[tuiLink]:where(*[data-tui-version="5.7.0"])[tuiIcons]:before,[tuiLink]:where(*[data-tui-version="5.7.0"])[tuiIcons]:after{content:"\\2060";padding:calc(var(--tui-icon-size, 1rem) / 2);vertical-align:super;font-size:0;line-height:0;box-sizing:border-box;-webkit-mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;transition:none}[tuiLink]:where(*[data-tui-version="5.7.0"])[tuiChevron]:after{display:inline-block;vertical-align:initial}@media(hover:hover)and (pointer:fine){[tuiLink]:where(*[data-tui-version="5.7.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){text-decoration-color:currentColor}}[tuiLink]:where(*[data-tui-version="5.7.0"])[data-state=hover]{text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version="5.7.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):active:not([data-state]){text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version="5.7.0"])[data-state=active]{text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version="5.7.0"])[data-appearance=""]{text-decoration-line:underline;text-decoration-style:solid}\n']
    }]
  }], null, null);
})();
var _TuiLink = class _TuiLink {
  constructor() {
    this.nothing = tuiWithStyles(Styles4);
  }
};
_TuiLink.\u0275fac = function TuiLink_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiLink)();
};
_TuiLink.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiLink,
  selectors: [["a", "tuiLink", ""], ["button", "tuiLink", ""]],
  hostAttrs: ["tuiLink", ""],
  features: [\u0275\u0275ProvidersFeature([tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)]), \u0275\u0275HostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
});
var TuiLink = _TuiLink;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLink, [{
    type: Directive,
    args: [{
      selector: "a[tuiLink], button[tuiLink]",
      providers: [tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        tuiLink: ""
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-icon.mjs
var _TuiIcon = class _TuiIcon {
  constructor() {
    this.icons = inject(TuiIcons);
    this.mask = computed(() => this.icons.resolve(this.background()));
    this.background = input("");
  }
};
_TuiIcon.\u0275fac = function TuiIcon_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiIcon)();
};
_TuiIcon.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiIcon,
  selectors: [["tui-icon", 3, "tuiBadge", ""]],
  hostVars: 2,
  hostBindings: function TuiIcon_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("--t-icon-bg", ctx.mask());
    }
  },
  inputs: {
    background: [1, "background"]
  },
  features: [\u0275\u0275HostDirectivesFeature([{
    directive: TuiIcons,
    inputs: ["iconStart", "icon", "iconEnd", "badge"]
  }])],
  decls: 0,
  vars: 0,
  template: function TuiIcon_Template(rf, ctx) {
  },
  styles: ['tui-icon:where(*[data-tui-version="5.7.0"]){--tui-icon-size: 1em;position:relative;display:inline-flex;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask-image:var(--t-icon-bg);mask-image:var(--t-icon-bg);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;zoom:calc(100%*clamp(0px,var(--tui-font-offset) - 10px,1px)/.8px)}@media(hover:hover)and (pointer:fine){tui-icon:where(*[data-tui-version="5.7.0"])[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:where(*[data-tui-version="5.7.0"])[tuiIcons]:before,tui-icon:where(*[data-tui-version="5.7.0"])[tuiIcons]:after{zoom:1}tui-icon:where(*[data-tui-version="5.7.0"])[data-icon-end]:before{-webkit-mask-image:var(--t-icon-start),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:var(--t-icon-start),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);-webkit-mask-composite:source-in;mask-composite:intersect}tui-icon:where(*[data-tui-version="5.7.0"])[data-icon-end][data-icon-start=img]:before,tui-icon:where(*[data-tui-version="5.7.0"])[data-icon-end][data-icon-start=font]:before{-webkit-mask-image:radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em)}tui-icon:where(*[data-tui-version="5.7.0"])[data-icon-end]:after{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%}tui-icon:where(*[data-tui-version="5.7.0"])[data-icon-start]:before{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%}tui-icon:where(*[data-tui-version="5.7.0"])[data-icon-start]:after{transform:translate(36%,36%);--tui-icon-size: .5715em}tui-icon:where(*[data-tui-version="5.7.0"])[data-icon-start=font]:before,tui-icon:where(*[data-tui-version="5.7.0"])[data-icon-end=font]:after{zoom:.667}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiIcon = _TuiIcon;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcon, [{
    type: Component,
    args: [{
      selector: "tui-icon:not([tuiBadge])",
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: TuiIcons,
        inputs: ["iconStart: icon", "iconEnd: badge"]
      }],
      host: {
        "[style.--t-icon-bg]": "mask()"
      },
      styles: ['tui-icon:where(*[data-tui-version="5.7.0"]){--tui-icon-size: 1em;position:relative;display:inline-flex;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask-image:var(--t-icon-bg);mask-image:var(--t-icon-bg);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;zoom:calc(100%*clamp(0px,var(--tui-font-offset) - 10px,1px)/.8px)}@media(hover:hover)and (pointer:fine){tui-icon:where(*[data-tui-version="5.7.0"])[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:where(*[data-tui-version="5.7.0"])[tuiIcons]:before,tui-icon:where(*[data-tui-version="5.7.0"])[tuiIcons]:after{zoom:1}tui-icon:where(*[data-tui-version="5.7.0"])[data-icon-end]:before{-webkit-mask-image:var(--t-icon-start),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:var(--t-icon-start),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);-webkit-mask-composite:source-in;mask-composite:intersect}tui-icon:where(*[data-tui-version="5.7.0"])[data-icon-end][data-icon-start=img]:before,tui-icon:where(*[data-tui-version="5.7.0"])[data-icon-end][data-icon-start=font]:before{-webkit-mask-image:radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em)}tui-icon:where(*[data-tui-version="5.7.0"])[data-icon-end]:after{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%}tui-icon:where(*[data-tui-version="5.7.0"])[data-icon-start]:before{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%}tui-icon:where(*[data-tui-version="5.7.0"])[data-icon-start]:after{transform:translate(36%,36%);--tui-icon-size: .5715em}tui-icon:where(*[data-tui-version="5.7.0"])[data-icon-start=font]:before,tui-icon:where(*[data-tui-version="5.7.0"])[data-icon-end=font]:after{zoom:.667}\n']
    }]
  }], null, null);
})();
var _TuiIconPipe = class _TuiIconPipe {
  constructor() {
    this.transform = tuiInjectIconResolver();
  }
};
_TuiIconPipe.\u0275fac = function TuiIconPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiIconPipe)();
};
_TuiIconPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
  name: "tuiIcon",
  type: _TuiIconPipe,
  pure: true
});
var TuiIconPipe = _TuiIconPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconPipe, [{
    type: Pipe,
    args: [{
      name: "tuiIcon"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-auto-focus.mjs
var AbstractTuiAutofocusHandler = class {
  constructor(el, options) {
    this.el = el;
    this.options = options;
  }
  get element() {
    return this.el.nativeElement.querySelector(this.options.query) ?? this.el.nativeElement;
  }
  get isTextFieldElement() {
    return this.element.matches(this.options.query);
  }
};
var TIMEOUT = 1e3;
var NG_ANIMATION_SELECTOR = ".ng-animating";
var TuiDefaultAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(el, animationFrame$, zone, options) {
    super(el, options);
    this.animationFrame$ = animationFrame$;
    this.zone = zone;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      race(timer(this.options.delay || TIMEOUT), this.animationFrame$.pipe(throttleTime(100, tuiZonefreeScheduler(this.zone)), map(() => this.element.closest(NG_ANIMATION_SELECTOR)), skipWhile(Boolean), take(1))).subscribe(() => this.element.focus({
        preventScroll: this.options.preventScroll
      }));
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
};
var TEXTFIELD_ATTRS = ["type", "inputMode", "autocomplete", "accept", "min", "max", "step", "pattern", "size", "maxlength"];
var TuiIosAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(el, renderer, zone, win, options) {
    super(el, options);
    this.renderer = renderer;
    this.zone = zone;
    this.win = win;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      this.zone.runOutsideAngular(() => this.iosWebkitAutofocus());
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
  iosWebkitAutofocus() {
    const fakeInput = this.makeFakeInput();
    const duration = this.getDurationTimeBeforeFocus();
    let fakeFocusTimeoutId = 0;
    let elementFocusTimeoutId = 0;
    const blurHandler = () => fakeInput.focus({
      preventScroll: true
    });
    const focusHandler = () => {
      clearTimeout(fakeFocusTimeoutId);
      fakeFocusTimeoutId = this.win.setTimeout(() => {
        clearTimeout(elementFocusTimeoutId);
        fakeInput.removeEventListener("blur", blurHandler);
        fakeInput.removeEventListener("focus", focusHandler);
        elementFocusTimeoutId = this.win.setTimeout(() => {
          this.element.focus({
            preventScroll: this.options.preventScroll
          });
          fakeInput.remove();
        }, duration);
      });
    };
    fakeInput.addEventListener("blur", blurHandler, {
      once: true
    });
    fakeInput.addEventListener("focus", focusHandler);
    if (this.insideDialog()) {
      this.win.document.body.appendChild(fakeInput);
    } else {
      this.element.parentElement?.appendChild(fakeInput);
    }
    fakeInput.focus({
      preventScroll: true
    });
  }
  /**
   * @note:
   * emulate textfield position in layout with cursor
   * before focus to real textfield element
   *
   * required note:
   * [fakeInput.readOnly = true] ~
   * don't use {readOnly: true} value, it's doesn't work for emulate autofill
   *
   * [fakeInput.style.opacity = 0] ~
   * don't use {opacity: 0}, sometimes it's doesn't work for emulate real input
   *
   * [fakeInput.style.fontSize = 16px] ~
   * disable possible auto zoom
   *
   * [fakeInput.style.top/left] ~
   * emulate position cursor before focus to real textfield element
   */
  makeFakeInput() {
    const fakeInput = this.renderer.createElement("input");
    const rect2 = this.element.getBoundingClientRect();
    this.patchFakeInputFromFocusableElement(fakeInput);
    fakeInput.style.height = tuiPx(rect2.height);
    fakeInput.style.width = tuiPx(rect2.width / 2);
    fakeInput.style.position = "fixed";
    fakeInput.style.zIndex = "-99999999";
    fakeInput.style.caretColor = "transparent";
    fakeInput.style.border = "none";
    fakeInput.style.outline = "none";
    fakeInput.style.color = "transparent";
    fakeInput.style.background = "transparent";
    fakeInput.style.cursor = "none";
    fakeInput.style.fontSize = tuiPx(16);
    fakeInput.style.top = tuiPx(rect2.top);
    fakeInput.style.left = tuiPx(rect2.left);
    return fakeInput;
  }
  getDurationTimeBeforeFocus() {
    return Number.parseFloat(this.win.getComputedStyle(this.element).getPropertyValue("--tui-duration")) || 0;
  }
  /**
   * @note:
   * unfortunately, in older versions of iOS
   * there is a bug that the fake input cursor
   * will move along with the dialog animation
   * and then that dialog will be shaking
   */
  insideDialog() {
    return !!this.element.closest("tui-dialog");
  }
  /**
   * @note:
   * inherit basic attributes values from real input
   * for help iOS detect what do you want see on keyboard,
   * for example [inputMode=numeric, autocomplete=cc-number]
   */
  patchFakeInputFromFocusableElement(fakeInput) {
    TEXTFIELD_ATTRS.forEach((attr) => {
      const value = this.element.getAttribute(attr);
      if (tuiIsPresent(value)) {
        fakeInput.setAttribute(attr, value);
      }
    });
  }
};
var [TUI_AUTOFOCUS_OPTIONS, tuiAutoFocusOptionsProvider] = tuiCreateOptions({
  delay: Number.NaN,
  // NaN = no delay/sync
  query: "input, textarea, select, [contenteditable]",
  preventScroll: false
});
var TUI_AUTOFOCUS_HANDLER = new InjectionToken(ngDevMode ? "TUI_AUTOFOCUS_HANDLER" : "");
var TUI_AUTOFOCUS_PROVIDERS = [{
  provide: TUI_AUTOFOCUS_HANDLER,
  deps: [ElementRef, WA_ANIMATION_FRAME, Renderer2, NgZone, WA_WINDOW, WA_IS_IOS, TUI_AUTOFOCUS_OPTIONS],
  // eslint-disable-next-line @typescript-eslint/max-params,max-params
  useFactory: (el, animationFrame$, renderer, zone, win, isIos3, options) => isIos3 ? new TuiIosAutofocusHandler(el, renderer, zone, win, options) : new TuiDefaultAutofocusHandler(el, animationFrame$, zone, options)
}];
var _TuiAutoFocus = class _TuiAutoFocus {
  constructor() {
    this.handler = inject(TUI_AUTOFOCUS_HANDLER);
    this.options = inject(TUI_AUTOFOCUS_OPTIONS);
    this.destroyRef = inject(DestroyRef);
    this.autoFocus = input(void 0, {
      alias: "tuiAutoFocus",
      transform: coerceBooleanProperty
    });
  }
  ngAfterViewInit() {
    if (this.autoFocus()) {
      this.focus();
    }
  }
  focus() {
    if (Number.isNaN(this.options.delay)) {
      void Promise.resolve().then(() => this.handler.setFocus());
    } else {
      timer(this.options.delay).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.handler.setFocus());
    }
  }
};
_TuiAutoFocus.\u0275fac = function TuiAutoFocus_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAutoFocus)();
};
_TuiAutoFocus.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiAutoFocus,
  selectors: [["", "tuiAutoFocus", ""]],
  inputs: {
    autoFocus: [1, "tuiAutoFocus", "autoFocus"]
  },
  features: [\u0275\u0275ProvidersFeature(TUI_AUTOFOCUS_PROVIDERS)]
});
var TuiAutoFocus = _TuiAutoFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutoFocus, [{
    type: Directive,
    args: [{
      selector: "[tuiAutoFocus]",
      providers: TUI_AUTOFOCUS_PROVIDERS
    }]
  }], null, null);
})();

export {
  WA_IS_IOS,
  WA_IS_MOBILE,
  WA_IS_ANDROID,
  WA_IS_E2E,
  isSafari,
  EMPTY_FUNCTION,
  EMPTY_CLIENT_RECT,
  TUI_FALSE_HANDLER,
  TUI_TRUE_HANDLER,
  TUI_STRINGIFY,
  TUI_DEFAULT_MATCHER,
  TUI_STRICT_MATCHER,
  TUI_DEFAULT_IDENTITY_MATCHER,
  CHAR_MINUS,
  TUI_VERSION,
  tuiFocusedIn,
  tuiGetClosestFocusable,
  tuiGetFocused,
  tuiIsFocused,
  tuiIsFocusedIn,
  tuiMoveFocus,
  TUI_FALLBACK_VALUE,
  tuiFallbackValueProvider,
  TUI_PLATFORM,
  TuiActiveZone,
  TUI_LEAVE,
  TuiAnimated,
  TuiPositionAccessor,
  TuiRectAccessor,
  tuiFallbackAccessor,
  tuiPositionAccessorFor,
  tuiRectAccessorFor,
  tuiAsRectAccessor,
  tuiAsVehicle,
  TuiDriver,
  tuiAsDriver,
  TuiDriverDirective,
  TUI_APPEARANCE_OPTIONS,
  tuiAppearanceOptionsProvider,
  TuiAppearance,
  tuiAppearance,
  tuiAppearanceState,
  tuiAppearanceFocus,
  tuiAppearanceMode,
  TuiWithAppearance,
  TUI_REDUCED_MOTION,
  TUI_ANIMATIONS_SPEED,
  TUI_AUXILIARY,
  tuiAsAuxiliary,
  TUI_BREAKPOINT,
  TUI_COMMON_ICONS,
  TUI_DARK_MODE,
  TUI_CLOSE_WORD,
  TUI_CLEAR_WORD,
  TUI_NOTHING_FOUND_MESSAGE,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_ICON_START,
  TUI_ICON_END,
  TUI_NUMBER_FORMAT,
  TUI_SELECTION_STREAM,
  TUI_TEXTFIELD_VALUE,
  TUI_VALIDATION_ERRORS,
  TUI_VIEWPORT,
  tuiAsViewport,
  TuiIcons,
  tuiIconStart,
  tuiIconEnd,
  TuiWithIcons,
  TUI_BUTTON_OPTIONS,
  tuiButtonOptionsProvider,
  TuiButton,
  TuiPositionService,
  TuiVisualViewportService,
  TuiFontSize,
  TUI_ANIMATIONS_DEFAULT_DURATION,
  tuiGetDuration,
  tuiIsObscured,
  tuiOverrideOptions,
  TUI_OPTIONS,
  provideTaiga,
  injectContext,
  PolymorpheusComponent,
  PolymorpheusTemplate,
  PolymorpheusOutlet,
  TuiVCR,
  TuiPortal,
  tuiAsPortal,
  TuiPortalDirective,
  TuiPortalService,
  TuiPortals,
  TuiPopupService,
  TuiPopup,
  TuiPopups,
  tuiGetViewportWidth,
  tuiGetWordRange,
  TUI_SCROLL_REF,
  TuiScrollRef,
  TUI_SCROLLBAR_OPTIONS,
  tuiScrollbarOptionsProvider,
  TuiScrollControls,
  TuiScrollbar,
  TuiScrollIntoView,
  tuiDropdownOptionsProvider,
  TuiDropdownOptionsDirective,
  TuiDropdownDirective,
  TuiDropdownOpen,
  tuiDropdown,
  tuiDropdownEnabled,
  TuiDropdownContent,
  TuiDropdownFixed,
  TuiDropdownManual,
  TuiWithDropdownOpen,
  TuiDropdown,
  tuiLinkOptionsProvider,
  TuiLink,
  TuiIcon,
  tuiAutoFocusOptionsProvider,
  TuiAutoFocus
};
//# sourceMappingURL=chunk-CV6PGG7O.js.map
