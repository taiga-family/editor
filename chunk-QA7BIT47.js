import {
  Meta
} from "./chunk-GJ4XEV4D.js";
import {
  tuiCloseWatcher,
  tuiExtractI18n,
  tuiIfMap,
  tuiScrollFrom,
  tuiTypedFromEvent,
  tuiUntrackedScheduler,
  tuiWatch,
  tuiZoneOptimized,
  tuiZonefree,
  tuiZonefreeScheduler,
  tuiZonefull
} from "./chunk-Z64UTBP3.js";
import {
  AsyncPipe,
  CHAR_EN_DASH,
  CHAR_NO_BREAK_SPACE,
  CHAR_ZERO_WIDTH_SPACE,
  DOCUMENT,
  EMPTY_CLIENT_RECT,
  EMPTY_FUNCTION,
  NgControl,
  NgIf,
  NgModel,
  TUI_ALLOW_SIGNAL_WRITES,
  TUI_FALSE_HANDLER,
  TUI_TRUE_HANDLER,
  WA_ANIMATION_FRAME,
  WA_LOCAL_STORAGE,
  WA_NAVIGATOR,
  WA_PERFORMANCE,
  WA_USER_AGENT,
  WA_WINDOW,
  coerceArray,
  coerceBooleanProperty,
  isPlatformBrowser,
  isPlatformServer,
  svgNodeFilter,
  takeUntilDestroyed,
  toObservable,
  toSignal,
  tuiArrayRemove,
  tuiClamp,
  tuiDirectiveBinding,
  tuiEaseInOutQuad,
  tuiGetActualTarget,
  tuiGetDocumentOrShadowRoot,
  tuiGetElementObscures,
  tuiGetElementOffset,
  tuiInRange,
  tuiInjectElement,
  tuiIsElement,
  tuiIsElementEditable,
  tuiIsHTMLElement,
  tuiIsPresent,
  tuiIsString,
  tuiIsTextNode,
  tuiIsTextfield,
  tuiNormalizeToIntNumber,
  tuiPointToClientRect,
  tuiProvide,
  tuiProvideOptions,
  tuiPure,
  tuiPx,
  tuiWithStyles
} from "./chunk-P325F6NW.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  INJECTOR$1,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCALE_ID,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Pipe,
  Renderer2,
  RuntimeError,
  Self,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  untracked,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-MN3TG6GQ.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  __decorate,
  combineLatest,
  defer,
  delay,
  distinctUntilChanged,
  endWith,
  filter,
  finalize,
  fromEvent,
  identity,
  map,
  merge,
  observeOn,
  of,
  race,
  repeat,
  share,
  shareReplay,
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
  withLatestFrom
} from "./chunk-CJ7OSSQR.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/@ng-web-apis/platform/fesm2022/ng-web-apis-platform.mjs
var WA_SAFARI_REG_EXP = /^((?!chrome|android).)*safari/i;
var WA_IOS_REG_EXP = /ipad|iphone|ipod/i;
function isIos({
  userAgent,
  maxTouchPoints
}) {
  return WA_IOS_REG_EXP.test(userAgent) || WA_SAFARI_REG_EXP.test(userAgent) && maxTouchPoints > 1;
}
var WA_IS_IOS = new InjectionToken("", {
  factory: () => isIos(inject(WA_NAVIGATOR))
});
var firstRegex = (
  // eslint-disable-next-line sonarjs/regex-complexity
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/
);
var secondRegex = (
  // eslint-disable-next-line sonarjs/regex-complexity
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ \-/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ /])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/
);
var WA_IS_MOBILE = new InjectionToken("", {
  factory: () => firstRegex.test(inject(WA_USER_AGENT).toLowerCase()) || secondRegex.test(inject(WA_USER_AGENT).slice(0, 4).toLowerCase())
});
var WA_IS_ANDROID = new InjectionToken("", {
  factory: () => inject(WA_IS_MOBILE) && !inject(WA_IS_IOS)
});
function isApple(navigator) {
  return isIos(navigator) || WA_SAFARI_REG_EXP.test(navigator.userAgent);
}
var WA_IS_TOUCH = new InjectionToken("", {
  factory: () => {
    const media = inject(WA_WINDOW).matchMedia("(pointer: coarse)");
    return toSignal(fromEvent(media, "change").pipe(map(() => media.matches)), {
      initialValue: media.matches
    });
  }
});
var WA_IS_WEBKIT = new InjectionToken("", {
  factory: () => !!inject(WA_WINDOW)?.webkitConvertPointFromNodeToPage
});

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-di.mjs
function tuiCreateOptions(defaults) {
  const token = new InjectionToken(ngDevMode ? "token" : "", {
    factory: () => defaults
  });
  return [token, (options) => tuiProvideOptions(token, options, defaults)];
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-focus.mjs
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
function tuiFocusedIn(node) {
  return toSignal(merge(fromEvent(node, "focus", {
    capture: true
  }).pipe(map(TUI_TRUE_HANDLER)), fromEvent(node, "blur", {
    capture: true
  }).pipe(map(TUI_FALSE_HANDLER))).pipe(observeOn(tuiUntrackedScheduler)), {
    initialValue: false
  });
}
function tuiIsKeyboardFocusable(element) {
  if (element.hasAttribute("disabled") || element.getAttribute("tabIndex") === "-1") {
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
function tuiIsMouseFocusable(element) {
  return !element.hasAttribute("disabled") && (element.getAttribute("tabIndex") === "-1" || tuiIsKeyboardFocusable(element));
}
function tuiGetClosestFocusable({
  initial,
  root,
  previous = false,
  keyboard = true
}) {
  if (!root.ownerDocument) {
    return null;
  }
  const check = keyboard ? tuiIsKeyboardFocusable : tuiIsMouseFocusable;
  const treeWalker = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, svgNodeFilter);
  treeWalker.currentNode = initial;
  do {
    if (tuiIsHTMLElement(treeWalker.currentNode)) {
      initial = treeWalker.currentNode;
    }
    if (tuiIsHTMLElement(initial) && check(initial)) {
      return initial;
    }
  } while (previous ? treeWalker.previousNode() : treeWalker.nextNode());
  return null;
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

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-transitioned.mjs
var _TuiTransitioned = class _TuiTransitioned {
  constructor() {
    const el = tuiInjectElement();
    inject(NgZone).runOutsideAngular(() => {
      setTimeout(() => {
        el.style.transition = "";
      });
    });
  }
};
_TuiTransitioned.\u0275fac = function TuiTransitioned_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTransitioned)();
};
_TuiTransitioned.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiTransitioned,
  selectors: [["", "tuiTransitioned", ""]],
  hostVars: 2,
  hostBindings: function TuiTransitioned_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("transition", "none");
    }
  }
});
var TuiTransitioned = _TuiTransitioned;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTransitioned, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTransitioned]",
      host: {
        "[style.transition]": '"none"'
      }
    }]
  }], function() {
    return [];
  }, null);
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
var _TuiAppearanceStyles = class _TuiAppearanceStyles {
};
_TuiAppearanceStyles.\u0275fac = function TuiAppearanceStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAppearanceStyles)();
};
_TuiAppearanceStyles.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiAppearanceStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-appearance"],
  decls: 0,
  vars: 0,
  template: function TuiAppearanceStyles_Template(rf, ctx) {
  },
  styles: ["[tuiAppearance]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem;transition-property:color,background-color,opacity,box-shadow,border-color,border-radius,filter}[tuiAppearance]:before,[tuiAppearance]:after{transition-duration:inherit;transition-timing-function:ease-in-out}[tuiAppearance]:focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance][data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance][tuiWrapper]:not(._focused):has(:focus-visible){outline-color:var(--tui-border-focus)}[tuiAppearance][tuiWrapper]._focused._focused{outline-color:var(--tui-border-focus)}[tuiAppearance]:disabled:not([data-state]),[tuiAppearance][data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}[tuiAppearance][tuiWrapper]:disabled:not([data-state]),[tuiAppearance][tuiWrapper][data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiAppearanceStyles = _TuiAppearanceStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppearanceStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-appearance"
      },
      styles: ["[tuiAppearance]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem;transition-property:color,background-color,opacity,box-shadow,border-color,border-radius,filter}[tuiAppearance]:before,[tuiAppearance]:after{transition-duration:inherit;transition-timing-function:ease-in-out}[tuiAppearance]:focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance][data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance][tuiWrapper]:not(._focused):has(:focus-visible){outline-color:var(--tui-border-focus)}[tuiAppearance][tuiWrapper]._focused._focused{outline-color:var(--tui-border-focus)}[tuiAppearance]:disabled:not([data-state]),[tuiAppearance][data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}[tuiAppearance][tuiWrapper]:disabled:not([data-state]),[tuiAppearance][tuiWrapper][data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}\n"]
    }]
  }], null, null);
})();
var _TuiAppearance = class _TuiAppearance {
  constructor() {
    this.cdr = inject(ChangeDetectorRef, {
      skipSelf: true
    });
    this.el = tuiInjectElement();
    this.nothing = tuiWithStyles(TuiAppearanceStyles);
    this.modes = computed((mode = this.mode()) => !mode || tuiIsString(mode) ? mode : mode.join(" "));
    this.appearance = signal(inject(TUI_APPEARANCE_OPTIONS).appearance);
    this.state = signal(null);
    this.focus = signal(null);
    this.mode = signal(null);
    this.update = effect(() => {
      this.mode();
      this.state();
      this.focus();
      if (this.el.matches("tui-textfield[multi]")) {
        this.cdr.detectChanges();
      }
    }, TUI_ALLOW_SIGNAL_WRITES);
  }
  set tuiAppearance(appearance) {
    this.appearance.set(appearance);
  }
  set tuiAppearanceState(state) {
    this.state.set(state);
  }
  set tuiAppearanceFocus(focus) {
    this.focus.set(focus);
  }
  set tuiAppearanceMode(mode) {
    this.mode.set(mode);
  }
};
_TuiAppearance.\u0275fac = function TuiAppearance_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAppearance)();
};
_TuiAppearance.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiAppearance,
  selectors: [["", "tuiAppearance", ""]],
  hostAttrs: ["tuiAppearance", ""],
  hostVars: 4,
  hostBindings: function TuiAppearance_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-appearance", ctx.appearance())("data-state", ctx.state())("data-focus", ctx.focus())("data-mode", ctx.modes());
    }
  },
  inputs: {
    tuiAppearance: "tuiAppearance",
    tuiAppearanceState: "tuiAppearanceState",
    tuiAppearanceFocus: "tuiAppearanceFocus",
    tuiAppearanceMode: "tuiAppearanceMode"
  },
  features: [\u0275\u0275HostDirectivesFeature([TuiTransitioned])]
});
var TuiAppearance = _TuiAppearance;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppearance, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAppearance]",
      hostDirectives: [TuiTransitioned],
      host: {
        tuiAppearance: "",
        "[attr.data-appearance]": "appearance()",
        "[attr.data-state]": "state()",
        "[attr.data-focus]": "focus()",
        "[attr.data-mode]": "modes()"
      }
    }]
  }], null, {
    tuiAppearance: [{
      type: Input
    }],
    tuiAppearanceState: [{
      type: Input
    }],
    tuiAppearanceFocus: [{
      type: Input
    }],
    tuiAppearanceMode: [{
      type: Input
    }]
  });
})();
function tuiAppearance(value, options) {
  return tuiDirectiveBinding(TuiAppearance, "appearance", value, options);
}
function tuiAppearanceState(value, options) {
  return tuiDirectiveBinding(TuiAppearance, "state", value, options);
}
function tuiAppearanceFocus(value, options) {
  return tuiDirectiveBinding(TuiAppearance, "focus", value, options);
}
function tuiAppearanceMode(value, options) {
  return tuiDirectiveBinding(TuiAppearance, "mode", value, options);
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
      standalone: true,
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearance: appearance", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceMode"]
      }]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-date-time.mjs
var MONTHS_IN_YEAR = 12;
var MIN_DAY = 1;
var MIN_MONTH = 0;
var MAX_MONTH = 11;
var MIN_YEAR = 0;
var MAX_YEAR = 9999;
var MAX_DISPLAYED_YEAR = 2099;
var RANGE_SEPARATOR_CHAR = `${CHAR_NO_BREAK_SPACE}${CHAR_EN_DASH}${CHAR_NO_BREAK_SPACE}`;
var MILLISECONDS_IN_SECOND = 1e3;
var SECONDS_IN_MINUTE = 60;
var MINUTES_IN_HOUR = 60;
var HOURS_IN_DAY = 24;
var MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE;
var MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * MINUTES_IN_HOUR;
var MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * HOURS_IN_DAY;
var DATE_FILLER_LENGTH = 10;
var DATE_RANGE_FILLER_LENGTH = 2 * DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length;
var TuiDayOfWeek = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
};
var TuiMonthNumber = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11
};
var TuiYear = class _TuiYear {
  constructor(year) {
    this.year = year;
    ngDevMode && console.assert(_TuiYear.isValidYear(year));
  }
  /**
   * Checks year for validity
   */
  static isValidYear(year) {
    return Number.isInteger(year) && tuiInRange(year, MIN_YEAR, MAX_YEAR + 1);
  }
  /**
   * Check if passed year is a leap year
   */
  static isLeapYear(year) {
    ngDevMode && console.assert(_TuiYear.isValidYear(year));
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
  }
  /**
   * Returns amount of leap years from year 0 to the passed one
   */
  static getAbsoluteLeapYears(year) {
    ngDevMode && console.assert(_TuiYear.isValidYear(year));
    return Math.ceil(year / 400) + (Math.ceil(year / 4) - Math.ceil(year / 100));
  }
  static lengthBetween(from, to) {
    return to.year - from.year;
  }
  /**
   * Normalizes year by clamping it between min and max years
   */
  static normalizeYearPart(year) {
    return tuiNormalizeToIntNumber(year, MIN_YEAR, MAX_YEAR);
  }
  get formattedYear() {
    return String(this.year).padStart(4, "0");
  }
  get isLeapYear() {
    return _TuiYear.isLeapYear(this.year);
  }
  /**
   * Returns amount of leap years from year 0 to current
   */
  get absoluteLeapYears() {
    return _TuiYear.getAbsoluteLeapYears(this.year);
  }
  /**
   * Passed year is after current
   */
  yearBefore({
    year
  }) {
    return this.year < year;
  }
  /**
   * Passed year is the same or after current
   */
  yearSameOrBefore({
    year
  }) {
    return this.year <= year;
  }
  /**
   * Passed year is the same as current
   */
  yearSame({
    year
  }) {
    return this.year === year;
  }
  /**
   * Passed year is either the same of before the current
   */
  yearSameOrAfter({
    year
  }) {
    return this.year >= year;
  }
  /**
   * Passed year is before current
   */
  yearAfter({
    year
  }) {
    return this.year > year;
  }
  /**
   * Immutably offsets year
   */
  append({
    year = 0
  }) {
    ngDevMode && console.assert(Number.isInteger(year));
    const resultYear = this.year + year;
    ngDevMode && console.assert(_TuiYear.isValidYear(resultYear));
    return new _TuiYear(resultYear);
  }
  toString() {
    return this.formattedYear;
  }
  valueOf() {
    return this.year;
  }
  /**
   * Returns the primitive value of the given Date object.
   * Depending on the argument, the method can return either a string or a number.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
   */
  [Symbol.toPrimitive](hint) {
    return Date.prototype[Symbol.toPrimitive].call(this, hint);
  }
  toJSON() {
    return this.formattedYear;
  }
};
var TuiMonth = class _TuiMonth extends TuiYear {
  /**
   * @param year
   * @param month (starting with 0)
   */
  constructor(year, month) {
    super(year);
    this.month = month;
    ngDevMode && console.assert(_TuiMonth.isValidMonth(year, month));
  }
  /**
   * Tests month and year for validity
   */
  static isValidMonth(year, month) {
    return TuiYear.isValidYear(year) && _TuiMonth.isValidMonthPart(month);
  }
  /**
   * Returns number of days in a month
   */
  static getMonthDaysCount(month, isLeapYear) {
    ngDevMode && console.assert(_TuiMonth.isValidMonthPart(month));
    switch (month) {
      case TuiMonthNumber.April:
      case TuiMonthNumber.June:
      case TuiMonthNumber.November:
      case TuiMonthNumber.September:
        return 30;
      case TuiMonthNumber.February:
        return isLeapYear ? 29 : 28;
      default:
        return 31;
    }
  }
  /**
   * Returns current month and year based on local time zone
   * @nosideeffects
   */
  static currentLocal() {
    const nativeDate = /* @__PURE__ */ new Date();
    return new _TuiMonth(nativeDate.getFullYear(), nativeDate.getMonth());
  }
  /**
   * Returns current month and year based on UTC
   */
  static currentUtc() {
    const nativeDate = /* @__PURE__ */ new Date();
    return new _TuiMonth(nativeDate.getUTCFullYear(), nativeDate.getUTCMonth());
  }
  static lengthBetween(from, to) {
    const absoluteFrom = from.month + from.year * 12;
    const absoluteTo = to.month + to.year * 12;
    return absoluteTo - absoluteFrom;
  }
  /**
   * Normalizes number by clamping it between min and max month
   */
  static normalizeMonthPart(month) {
    return tuiNormalizeToIntNumber(month, MIN_MONTH, MAX_MONTH);
  }
  /**
   * Tests month for validity
   */
  static isValidMonthPart(month) {
    return Number.isInteger(month) && tuiInRange(month, MIN_MONTH, MAX_MONTH + 1);
  }
  get formattedMonthPart() {
    return String(this.month + 1).padStart(2, "0");
  }
  /**
   * Returns days in a month
   */
  get daysCount() {
    return _TuiMonth.getMonthDaysCount(this.month, this.isLeapYear);
  }
  /**
   * Passed month and year are after current
   */
  monthBefore(another) {
    return this.yearBefore(another) || this.yearSame(another) && this.month < another.month;
  }
  /**
   * Passed month and year are after or the same as current
   */
  monthSameOrBefore(another) {
    return this.yearBefore(another) || this.yearSame(another) && this.month <= another.month;
  }
  /**
   * Passed month and year are the same as current
   */
  monthSame(another) {
    return this.yearSame(another) && this.month === another.month;
  }
  /**
   * Passed month and year are either before or equal to current
   */
  monthSameOrAfter(another) {
    return this.yearAfter(another) || this.yearSame(another) && this.month >= another.month;
  }
  /**
   * Passed month and year are before current
   */
  monthAfter(another) {
    return this.yearAfter(another) || this.yearSame(another) && this.month > another.month;
  }
  /**
   * Immutably alters current month and year by passed offset
   *
   * @param offset
   * @return new month and year object as a result of offsetting current
   */
  append({
    year = 0,
    month = 0
  }) {
    const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
    return new _TuiMonth(Math.floor(totalMonths / MONTHS_IN_YEAR), totalMonths % MONTHS_IN_YEAR);
  }
  toString() {
    return `${this.formattedMonthPart}.${this.formattedYear}`;
  }
  valueOf() {
    return this.toLocalNativeDate().valueOf();
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedMonthPart}`;
  }
  /**
   * Returns native {@link Date} based on local time zone
   */
  toLocalNativeDate() {
    const date = new Date(this.year, this.month);
    date.setFullYear(this.year);
    return date;
  }
  /**
   * Returns native {@link Date} based on UTC
   */
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month));
  }
};
var TuiDay = class _TuiDay extends TuiMonth {
  /**
   * @param year
   * @param month (starting with 0)
   * @param day
   */
  constructor(year, month, day) {
    super(year, month);
    this.day = day;
    ngDevMode && console.assert(_TuiDay.isValidDay(year, month, day));
  }
  /**
   * Creates {@link TuiDay} from native {@link Date} based on local time zone
   */
  static fromLocalNativeDate(date) {
    return new _TuiDay(date.getFullYear(), date.getMonth(), date.getDate());
  }
  /**
   * Creates {@link TuiDay} from native {@link Date} using UTC
   */
  static fromUtcNativeDate(date) {
    return new _TuiDay(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  }
  /**
   * Check validity of year, month and day
   *
   * @param year
   * @param month
   * @param day
   * @return boolean validity
   */
  static isValidDay(year, month, day) {
    return TuiMonth.isValidMonth(year, month) && Number.isInteger(day) && tuiInRange(day, MIN_DAY, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1);
  }
  /**
   * Current day based on local time zone
   */
  static currentLocal() {
    const nativeDate = /* @__PURE__ */ new Date();
    const year = nativeDate.getFullYear();
    const month = nativeDate.getMonth();
    const day = nativeDate.getDate();
    return new _TuiDay(year, month, day);
  }
  /**
   * Returns current day based on UTC
   */
  static currentUtc() {
    const nativeDate = /* @__PURE__ */ new Date();
    const year = nativeDate.getUTCFullYear();
    const month = nativeDate.getUTCMonth();
    const day = nativeDate.getUTCDate();
    return new _TuiDay(year, month, day);
  }
  /**
   * Calculates {@link TuiDay} normalizing year, month and day. {@link NaN} is turned into minimal value.
   *
   * @param year any year value, including invalid
   * @param month any month value, including invalid (months start with 0)
   * @param day any day value, including invalid
   * @return normalized date
   */
  static normalizeOf(year, month, day) {
    const normalizedYear = TuiYear.normalizeYearPart(year);
    const normalizedMonth = TuiMonth.normalizeMonthPart(month);
    const normalizedDay = _TuiDay.normalizeDayPart(day, normalizedMonth, normalizedYear);
    return new _TuiDay(normalizedYear, normalizedMonth, normalizedDay);
  }
  static lengthBetween(from, to) {
    return Math.round((to.toLocalNativeDate().getTime() - from.toLocalNativeDate().getTime()) / (1e3 * 60 * 60 * 24));
  }
  static parseRawDateString(date, dateMode = "DMY") {
    ngDevMode && console.assert(date.length === DATE_FILLER_LENGTH, "[parseRawDateString]: wrong date string length");
    switch (dateMode) {
      case "MDY":
        return {
          day: parseInt(date.slice(3, 5), 10),
          month: parseInt(date.slice(0, 2), 10) - 1,
          year: parseInt(date.slice(6, 10), 10)
        };
      case "YMD":
        return {
          day: parseInt(date.slice(8, 10), 10),
          month: parseInt(date.slice(5, 7), 10) - 1,
          year: parseInt(date.slice(0, 4), 10)
        };
      case "DMY":
      default:
        return {
          day: parseInt(date.slice(0, 2), 10),
          month: parseInt(date.slice(3, 5), 10) - 1,
          year: parseInt(date.slice(6, 10), 10)
        };
    }
  }
  // TODO: Move month and year related code corresponding classes
  /**
   * Parsing a string with date with normalization
   *
   * @param rawDate date string
   * @param dateMode date format of the date string (DMY | MDY | YMD)
   * @return normalized date
   */
  static normalizeParse(rawDate, dateMode = "DMY") {
    const {
      day,
      month,
      year
    } = this.parseRawDateString(rawDate, dateMode);
    return _TuiDay.normalizeOf(year, month, day);
  }
  /**
   * Parsing a date stringified in a toJSON format
   * @param yearMonthDayString date string in format of YYYY-MM-DD
   * @return date
   * @throws exceptions if any part of the date is invalid
   */
  static jsonParse(yearMonthDayString) {
    const {
      day,
      month,
      year
    } = this.parseRawDateString(yearMonthDayString, "YMD");
    if (!TuiMonth.isValidMonth(year, month) || !Number.isInteger(day) || !tuiInRange(day, MIN_DAY, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1)) {
      throw new TuiInvalidDayException(year, month, day);
    }
    return new _TuiDay(year, month, day);
  }
  static normalizeDayPart(day, month, year) {
    ngDevMode && console.assert(TuiMonth.isValidMonth(year, month));
    const monthDaysCount = TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year));
    return tuiNormalizeToIntNumber(day, 1, monthDaysCount);
  }
  get formattedDayPart() {
    return String(this.day).padStart(2, "0");
  }
  get isWeekend() {
    const dayOfWeek = this.dayOfWeek(false);
    return dayOfWeek === TuiDayOfWeek.Saturday || dayOfWeek === TuiDayOfWeek.Sunday;
  }
  /**
   * Returns day of week
   *
   * @param startFromMonday whether week starts from Monday and not from Sunday
   * @return day of week (from 0 to 6)
   */
  dayOfWeek(startFromMonday = true) {
    const dayOfWeek = startFromMonday ? this.toLocalNativeDate().getDay() - 1 : this.toLocalNativeDate().getDay();
    return dayOfWeek < 0 ? 6 : dayOfWeek;
  }
  /**
   * Passed date is after current
   */
  dayBefore(another) {
    return this.monthBefore(another) || this.monthSame(another) && this.day < another.day;
  }
  /**
   * Passed date is after or equals to current
   */
  daySameOrBefore(another) {
    return this.monthBefore(another) || this.monthSame(another) && this.day <= another.day;
  }
  /**
   * Passed date is the same as current
   */
  daySame(another) {
    return this.monthSame(another) && this.day === another.day;
  }
  /**
   * Passed date is either before or the same as current
   */
  daySameOrAfter(another) {
    return this.monthAfter(another) || this.monthSame(another) && this.day >= another.day;
  }
  /**
   * Passed date is before current
   */
  dayAfter(another) {
    return this.monthAfter(another) || this.monthSame(another) && this.day > another.day;
  }
  /**
   * Clamping date between two limits
   *
   * @param min
   * @param max
   * @return clamped date
   */
  dayLimit(min, max) {
    if (min !== null && this.dayBefore(min)) {
      return min;
    }
    if (max !== null && this.dayAfter(max)) {
      return max;
    }
    return this;
  }
  /**
   * Immutably alters current day by passed offset
   *
   * If resulting month has more days than original one, date is rounded to the maximum day
   * in the resulting month. Offset of days will be calculated based on the resulted year and month
   * to not interfere with parent classes methods
   *
   * @param offset
   * @return new date object as a result of offsetting current
   */
  append({
    year = 0,
    month = 0,
    day = 0
  }) {
    const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
    let years = Math.floor(totalMonths / MONTHS_IN_YEAR);
    let months = totalMonths % MONTHS_IN_YEAR;
    const monthDaysCount = TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
    const currentMonthDaysCount = TuiMonth.getMonthDaysCount(this.month, TuiYear.isLeapYear(years));
    let days = day;
    if (this.day >= monthDaysCount) {
      days += this.day - (currentMonthDaysCount - monthDaysCount);
    } else if (currentMonthDaysCount < monthDaysCount && this.day === currentMonthDaysCount) {
      days += this.day + (monthDaysCount - currentMonthDaysCount);
    } else {
      days += this.day;
    }
    while (days > TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years))) {
      days -= TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
      if (months === TuiMonthNumber.December) {
        years++;
        months = TuiMonthNumber.January;
      } else {
        months++;
      }
    }
    while (days < MIN_DAY) {
      if (months === TuiMonthNumber.January) {
        years--;
        months = TuiMonthNumber.December;
      } else {
        months--;
      }
      days += TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
    }
    return new _TuiDay(years, months, days);
  }
  /**
   * Returns formatted whole date
   */
  getFormattedDay(dateFormat, separator) {
    ngDevMode && console.assert(separator.length === 1, "Separator should consist of only 1 symbol");
    const dd = this.formattedDayPart;
    const mm = this.formattedMonthPart;
    const yyyy = this.formattedYear;
    switch (dateFormat) {
      case "MDY":
        return `${mm}${separator}${dd}${separator}${yyyy}`;
      case "YMD":
        return `${yyyy}${separator}${mm}${separator}${dd}`;
      case "DMY":
      default:
        return `${dd}${separator}${mm}${separator}${yyyy}`;
    }
  }
  toString(dateFormat = "DMY", separator = ".") {
    return this.getFormattedDay(dateFormat, separator);
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedDayPart}`;
  }
  /**
   * Returns native {@link Date} based on local time zone
   */
  toLocalNativeDate() {
    const date = super.toLocalNativeDate();
    date.setDate(this.day);
    return date;
  }
  /**
   * Returns native {@link Date} based on UTC
   */
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month, this.day));
  }
};
var TuiInvalidDayException = class extends Error {
  constructor(year, month, day) {
    super(ngDevMode ? `Invalid day: ${year}-${month}-${day}` : "");
  }
};
var TUI_FIRST_DAY = new TuiDay(MIN_YEAR, MIN_MONTH, MIN_DAY);
var TUI_LAST_DAY = new TuiDay(MAX_YEAR, MAX_MONTH, 31);
var TUI_LAST_DISPLAYED_DAY = new TuiDay(MAX_DISPLAYED_YEAR, MAX_MONTH, 31);

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
var COMMON_ICONS = {
  check: "@tui.check",
  close: "@tui.x",
  error: "@tui.circle-alert",
  more: "@tui.chevron-right",
  search: "@tui.search",
  ellipsis: "@tui.ellipsis"
};
var TUI_COMMON_ICONS = new InjectionToken(ngDevMode ? "TUI_COMMON_ICONS" : "", {
  factory: () => COMMON_ICONS
});
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
  mode: "DMY",
  separator: "."
};
var TUI_DATE_FORMAT = new InjectionToken(ngDevMode ? "TUI_DATE_FORMAT" : "", {
  factory: () => of(TUI_DEFAULT_DATE_FORMAT)
});
var TUI_DAY_TYPE_HANDLER = new InjectionToken(ngDevMode ? "TUI_DAY_TYPE_HANDLER" : "", {
  factory: () => (day) => day.isWeekend ? "weekend" : "weekday"
});
var TUI_FIRST_DAY_OF_WEEK = new InjectionToken(ngDevMode ? "TUI_FIRST_DAY_OF_WEEK" : "", {
  factory: () => TuiDayOfWeek.Monday
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
var ICON_MODE_PREFIXES = {
  font: "@font.",
  image: "@img."
};
var TUI_ICON_RESOLVER = new InjectionToken(ngDevMode ? "TUI_ICON_RESOLVER" : "", {
  factory: () => {
    const path = inject(TUI_ASSETS_PATH);
    return (icon) => `${path}/${icon.replace(/@[a-zA-Z]+\./, "").split(".").join("/")}.svg`;
  }
});
function tuiGetIconMode(icon) {
  if (!icon) {
    return null;
  }
  if (icon.startsWith(ICON_MODE_PREFIXES.image)) {
    return "image";
  }
  return icon.startsWith(ICON_MODE_PREFIXES.font) ? "font" : "svg";
}
function tuiInjectIconResolver() {
  const icons = inject(TUI_ICON_REGISTRY);
  const resolver = inject(TUI_ICON_RESOLVER);
  return (icon) => {
    if (!icon || icon.includes("/")) {
      return icon;
    }
    if (tuiGetIconMode(icon) === "font") {
      return icon.slice(ICON_MODE_PREFIXES.font.length);
    }
    return icons[icon] ?? resolver(icon);
  };
}
var TUI_MEDIA = new InjectionToken(ngDevMode ? "TUI_MEDIA" : "", {
  factory: () => ({
    mobile: 768,
    desktopSmall: 1024,
    desktopLarge: 1280
  })
});
var TUI_DEFAULT_NUMBER_FORMAT = {
  precision: NaN,
  decimalSeparator: ".",
  thousandSeparator: CHAR_NO_BREAK_SPACE,
  rounding: "truncate",
  decimalMode: "pad"
};
var TUI_NUMBER_FORMAT = new InjectionToken(ngDevMode ? "TUI_NUMBER_FORMAT" : "", {
  factory: () => of(TUI_DEFAULT_NUMBER_FORMAT)
});
var TUI_SCROLL_REF = new InjectionToken(ngDevMode ? "TUI_SCROLL_REF" : "", {
  factory: () => new ElementRef(inject(DOCUMENT).documentElement)
});
var TUI_SELECTION_STREAM = new InjectionToken(ngDevMode ? "TUI_SELECTION_STREAM" : "", {
  factory: () => {
    const doc = inject(DOCUMENT);
    return merge(tuiTypedFromEvent(doc, "selectionchange"), tuiTypedFromEvent(doc, "mouseup"), tuiTypedFromEvent(doc, "mousedown").pipe(switchMap(() => tuiTypedFromEvent(doc, "mousemove").pipe(takeUntil(tuiTypedFromEvent(doc, "mouseup"))))), tuiTypedFromEvent(doc, "keydown"), tuiTypedFromEvent(doc, "keyup")).pipe(share());
  }
});
var TUI_SPIN_ICONS = new InjectionToken(ngDevMode ? "TUI_SPIN_ICONS" : "", {
  factory: () => ({
    decrement: "@tui.chevron-left",
    increment: "@tui.chevron-right"
  })
});
var TUI_THEME = new InjectionToken(ngDevMode ? "TUI_THEME" : "", {
  factory: () => "Taiga UI"
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
        const rect = {
          top: 0,
          left: 0,
          right: win.innerWidth,
          bottom: win.innerHeight,
          width: win.innerWidth,
          height: height + offsetTop || win.innerHeight,
          x: 0,
          y: 0
        };
        return __spreadProps(__spreadValues({}, rect), {
          toJSON: () => JSON.stringify(rect)
        });
      }
    };
  }
});
function tuiAsViewport(accessor) {
  return tuiProvide(TUI_VIEWPORT, accessor);
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-icons.mjs
var _TuiIconsStyles = class _TuiIconsStyles {
};
_TuiIconsStyles.\u0275fac = function TuiIconsStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiIconsStyles)();
};
_TuiIconsStyles.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiIconsStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-icons"],
  decls: 0,
  vars: 0,
  template: function TuiIconsStyles_Template(rf, ctx) {
  },
  styles: ['[tuiIcons]{--t-icon-start: none;--t-icon-end: none}[tuiIcons]:before,[tuiIcons]:after{content:"";inline-size:1em;block-size:1em;line-height:1em;font-size:1.5rem;flex-shrink:0;box-sizing:content-box;background:currentColor}[tuiIcons]:before{display:var(--t-icon-start, none);-webkit-mask:var(--t-icon-start) no-repeat center / contain padding-box;mask:var(--t-icon-start) no-repeat center / contain padding-box}[tuiIcons]:after{display:var(--t-icon-end, none);-webkit-mask:var(--t-icon-end) no-repeat center / contain padding-box;mask:var(--t-icon-end) no-repeat center / contain padding-box}[tuiIcons][data-icon-start=image]:before{-webkit-mask:none;mask:none;background:var(--t-icon-start) no-repeat center / contain padding-box}[tuiIcons][data-icon-end=image]:after{-webkit-mask:none;mask:none;background:var(--t-icon-end) no-repeat center / contain padding-box}[tuiIcons][data-icon-start=font]:before,[tuiIcons][data-icon-end=font]:after{display:grid;-webkit-mask:none;mask:none;background:none;font:1.3em/1 var(--tui-font-icon, inherit);text-align:center;place-content:center;text-transform:none}[tuiIcons][data-icon-start=font]:before{content:var(--t-icon-start)}[tuiIcons][data-icon-end=font]:after{content:var(--t-icon-end)}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiIconsStyles = _TuiIconsStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconsStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-icons"
      },
      styles: ['[tuiIcons]{--t-icon-start: none;--t-icon-end: none}[tuiIcons]:before,[tuiIcons]:after{content:"";inline-size:1em;block-size:1em;line-height:1em;font-size:1.5rem;flex-shrink:0;box-sizing:content-box;background:currentColor}[tuiIcons]:before{display:var(--t-icon-start, none);-webkit-mask:var(--t-icon-start) no-repeat center / contain padding-box;mask:var(--t-icon-start) no-repeat center / contain padding-box}[tuiIcons]:after{display:var(--t-icon-end, none);-webkit-mask:var(--t-icon-end) no-repeat center / contain padding-box;mask:var(--t-icon-end) no-repeat center / contain padding-box}[tuiIcons][data-icon-start=image]:before{-webkit-mask:none;mask:none;background:var(--t-icon-start) no-repeat center / contain padding-box}[tuiIcons][data-icon-end=image]:after{-webkit-mask:none;mask:none;background:var(--t-icon-end) no-repeat center / contain padding-box}[tuiIcons][data-icon-start=font]:before,[tuiIcons][data-icon-end=font]:after{display:grid;-webkit-mask:none;mask:none;background:none;font:1.3em/1 var(--tui-font-icon, inherit);text-align:center;place-content:center;text-transform:none}[tuiIcons][data-icon-start=font]:before{content:var(--t-icon-start)}[tuiIcons][data-icon-end=font]:after{content:var(--t-icon-end)}\n']
    }]
  }], null, null);
})();
var _TuiIcons = class _TuiIcons {
  constructor() {
    this.resolver = tuiInjectIconResolver();
    this.nothing = tuiWithStyles(TuiIconsStyles);
    this.startResource = computed(() => this.resolve(this.iconStart()));
    this.endResource = computed(() => this.resolve(this.iconEnd()));
    this.startMode = computed(() => tuiGetIconMode(this.iconStart()?.toString()));
    this.endMode = computed(() => tuiGetIconMode(this.iconEnd()));
    this.iconStart = signal(inject(TUI_ICON_START, {
      self: true,
      optional: true
    }) || "");
    this.iconEnd = signal(inject(TUI_ICON_END, {
      self: true,
      optional: true
    }) || "");
  }
  // TODO(v5): use signal inputs
  set iconStartSetter(x) {
    this.iconStart.set(x);
  }
  // TODO(v5): use signal inputs
  set iconEndSetter(x) {
    this.iconEnd.set(x);
  }
  resolve(icon) {
    if (!icon) {
      return null;
    }
    const iconStr = icon.toString();
    return tuiGetIconMode(iconStr) === "font" ? `'${this.resolver(iconStr)}'` : `url(${this.resolver(iconStr)})`;
  }
};
_TuiIcons.\u0275fac = function TuiIcons_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiIcons)();
};
_TuiIcons.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiIcons,
  hostAttrs: ["tuiIcons", ""],
  hostVars: 6,
  hostBindings: function TuiIcons_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-icon-start", ctx.startMode())("data-icon-end", ctx.endMode());
      \u0275\u0275styleProp("--t-icon-start", ctx.startResource())("--t-icon-end", ctx.endResource());
    }
  },
  inputs: {
    iconStartSetter: [0, "iconStart", "iconStartSetter"],
    iconEndSetter: [0, "iconEnd", "iconEndSetter"]
  }
});
var TuiIcons = _TuiIcons;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcons, [{
    type: Directive,
    args: [{
      standalone: true,
      host: {
        tuiIcons: "",
        "[style.--t-icon-start]": "startResource()",
        "[style.--t-icon-end]": "endResource()",
        "[attr.data-icon-start]": "startMode()",
        "[attr.data-icon-end]": "endMode()"
      }
    }]
  }], null, {
    iconStartSetter: [{
      type: Input,
      args: ["iconStart"]
    }],
    iconEndSetter: [{
      type: Input,
      args: ["iconEnd"]
    }]
  });
})();
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
      standalone: true,
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
var _TuiButtonStyles = class _TuiButtonStyles {
};
_TuiButtonStyles.\u0275fac = function TuiButtonStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiButtonStyles)();
};
_TuiButtonStyles.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiButtonStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-button"],
  decls: 0,
  vars: 0,
  template: function TuiButtonStyles_Template(rf, ctx) {
  },
  styles: ['[tuiButton],[tuiIconButton]{--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-gap: .25rem;--t-padding: 0 1.25rem;--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));block-size:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;user-select:none;cursor:pointer;font:var(--tui-font-text-m);font-weight:700}[tuiButton]>img,[tuiIconButton]>img,[tuiButton]>tui-svg,[tuiIconButton]>tui-svg,[tuiButton]>tui-icon,[tuiIconButton]>tui-icon,[tuiButton]>tui-avatar,[tuiIconButton]>tui-avatar,[tuiButton]>tui-badge,[tuiIconButton]>tui-badge,[tuiButton]>[tuiBadge],[tuiIconButton]>[tuiBadge],[tuiButton]>[tuiRadio],[tuiIconButton]>[tuiRadio],[tuiButton]>[tuiSwitch],[tuiIconButton]>[tuiSwitch],[tuiButton]>[tuiCheckbox],[tuiIconButton]>[tuiCheckbox],[tuiButton][tuiIcons]:before,[tuiIconButton][tuiIcons]:before,[tuiButton][tuiIcons]:after,[tuiIconButton][tuiIcons]:after{margin:var(--t-margin)}[tuiButton]>.t-loader,[tuiIconButton]>.t-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}[tuiButton]>.t-loader .t-text,[tuiIconButton]>.t-loader .t-text{position:absolute}[tuiButton][data-size=xs],[tuiIconButton][data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-gap: .125rem;--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButton][data-size=xs] tui-svg,[tuiIconButton][data-size=xs] tui-svg,[tuiButton][data-size=xs] tui-icon,[tuiIconButton][data-size=xs] tui-icon,[tuiButton][data-size=xs]:before,[tuiIconButton][data-size=xs]:before{font-size:1rem}[tuiButton][data-size=s],[tuiIconButton][data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-s);--t-gap: .125rem;--t-padding: 0 .625rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButton][data-size=s] tui-svg,[tuiIconButton][data-size=s] tui-svg,[tuiButton][data-size=s] tui-icon,[tuiIconButton][data-size=s] tui-icon,[tuiButton][data-size=s]:not([tuiIconButton][data-appearance=icon]):not([tuiIconButton][data-appearance=link]):before,[tuiIconButton][data-size=s]:not([tuiIconButton][data-appearance=icon]):not([tuiIconButton][data-appearance=link]):before{font-size:1rem}[tuiButton][data-size=m],[tuiIconButton][data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: 0 1rem;--t-margin: -.375rem;font:var(--tui-font-text-m);font-weight:700}[tuiButton][data-size=m]:after,[tuiIconButton][data-size=m]:after{margin-inline-end:-.125rem}[tuiButton]._loading,[tuiIconButton]._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButton]._loading>*,[tuiIconButton]._loading>*,[tuiButton]._loading:before,[tuiIconButton]._loading:before,[tuiButton]._loading:after,[tuiIconButton]._loading:after{opacity:0}[tuiButton]._loading>.t-loader,[tuiIconButton]._loading>.t-loader{opacity:1}[tuiButton][tuiIcons]:after,[tuiIconButton][tuiIcons]:after{font-size:1rem}[tuiButton][tuiButtonVertical],[tuiIconButton][tuiButtonVertical]{--t-margin: 0rem !important;--t-line-height: 1rem;flex-direction:column;flex-shrink:1;block-size:auto;padding:.75rem;gap:.375rem;min-inline-size:5rem;white-space:pre-line;font:var(--tui-font-text-ui-s)}[tuiButton][tuiButtonVertical]>*,[tuiIconButton][tuiButtonVertical]>*{max-block-size:calc(var(--t-line-height) * 2)}[tuiIconButton]{gap:0;inline-size:var(--t-size);font-size:0!important;font-variant-ligatures:none!important;padding:0}[tuiIconButton][data-size=l]:after{margin:0}[tuiIconButton][tuiIconButton][style*="--t-icon-start:"]:after{display:none}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiButtonStyles = _TuiButtonStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-button"
      },
      styles: ['[tuiButton],[tuiIconButton]{--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-gap: .25rem;--t-padding: 0 1.25rem;--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));block-size:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;user-select:none;cursor:pointer;font:var(--tui-font-text-m);font-weight:700}[tuiButton]>img,[tuiIconButton]>img,[tuiButton]>tui-svg,[tuiIconButton]>tui-svg,[tuiButton]>tui-icon,[tuiIconButton]>tui-icon,[tuiButton]>tui-avatar,[tuiIconButton]>tui-avatar,[tuiButton]>tui-badge,[tuiIconButton]>tui-badge,[tuiButton]>[tuiBadge],[tuiIconButton]>[tuiBadge],[tuiButton]>[tuiRadio],[tuiIconButton]>[tuiRadio],[tuiButton]>[tuiSwitch],[tuiIconButton]>[tuiSwitch],[tuiButton]>[tuiCheckbox],[tuiIconButton]>[tuiCheckbox],[tuiButton][tuiIcons]:before,[tuiIconButton][tuiIcons]:before,[tuiButton][tuiIcons]:after,[tuiIconButton][tuiIcons]:after{margin:var(--t-margin)}[tuiButton]>.t-loader,[tuiIconButton]>.t-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}[tuiButton]>.t-loader .t-text,[tuiIconButton]>.t-loader .t-text{position:absolute}[tuiButton][data-size=xs],[tuiIconButton][data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-gap: .125rem;--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButton][data-size=xs] tui-svg,[tuiIconButton][data-size=xs] tui-svg,[tuiButton][data-size=xs] tui-icon,[tuiIconButton][data-size=xs] tui-icon,[tuiButton][data-size=xs]:before,[tuiIconButton][data-size=xs]:before{font-size:1rem}[tuiButton][data-size=s],[tuiIconButton][data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-s);--t-gap: .125rem;--t-padding: 0 .625rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButton][data-size=s] tui-svg,[tuiIconButton][data-size=s] tui-svg,[tuiButton][data-size=s] tui-icon,[tuiIconButton][data-size=s] tui-icon,[tuiButton][data-size=s]:not([tuiIconButton][data-appearance=icon]):not([tuiIconButton][data-appearance=link]):before,[tuiIconButton][data-size=s]:not([tuiIconButton][data-appearance=icon]):not([tuiIconButton][data-appearance=link]):before{font-size:1rem}[tuiButton][data-size=m],[tuiIconButton][data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: 0 1rem;--t-margin: -.375rem;font:var(--tui-font-text-m);font-weight:700}[tuiButton][data-size=m]:after,[tuiIconButton][data-size=m]:after{margin-inline-end:-.125rem}[tuiButton]._loading,[tuiIconButton]._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButton]._loading>*,[tuiIconButton]._loading>*,[tuiButton]._loading:before,[tuiIconButton]._loading:before,[tuiButton]._loading:after,[tuiIconButton]._loading:after{opacity:0}[tuiButton]._loading>.t-loader,[tuiIconButton]._loading>.t-loader{opacity:1}[tuiButton][tuiIcons]:after,[tuiIconButton][tuiIcons]:after{font-size:1rem}[tuiButton][tuiButtonVertical],[tuiIconButton][tuiButtonVertical]{--t-margin: 0rem !important;--t-line-height: 1rem;flex-direction:column;flex-shrink:1;block-size:auto;padding:.75rem;gap:.375rem;min-inline-size:5rem;white-space:pre-line;font:var(--tui-font-text-ui-s)}[tuiButton][tuiButtonVertical]>*,[tuiIconButton][tuiButtonVertical]>*{max-block-size:calc(var(--t-line-height) * 2)}[tuiIconButton]{gap:0;inline-size:var(--t-size);font-size:0!important;font-variant-ligatures:none!important;padding:0}[tuiIconButton][data-size=l]:after{margin:0}[tuiIconButton][tuiIconButton][style*="--t-icon-start:"]:after{display:none}\n']
    }]
  }], null, null);
})();
var _TuiButton = class _TuiButton {
  constructor() {
    this.options = inject(TUI_BUTTON_OPTIONS);
    this.nothing = tuiWithStyles(TuiButtonStyles);
    this.size = this.options.size;
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
      \u0275\u0275attribute("data-size", ctx.size);
    }
  },
  inputs: {
    size: "size"
  },
  features: [\u0275\u0275ProvidersFeature([tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)]), \u0275\u0275HostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
});
var TuiButton = _TuiButton;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButton, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]",
      providers: [tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        "[attr.data-size]": "size"
      }
    }]
  }], null, {
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-link.mjs
var TUI_LINK_DEFAULT_OPTIONS = {
  appearance: "action",
  pseudo: false
};
var TUI_LINK_OPTIONS = new InjectionToken(ngDevMode ? "TUI_LINK_OPTIONS" : "", {
  factory: () => TUI_LINK_DEFAULT_OPTIONS
});
function tuiLinkOptionsProvider(options) {
  return tuiProvideOptions(TUI_LINK_OPTIONS, options, TUI_LINK_DEFAULT_OPTIONS);
}
var _TuiLinkStyles = class _TuiLinkStyles {
};
_TuiLinkStyles.\u0275fac = function TuiLinkStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiLinkStyles)();
};
_TuiLinkStyles.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiLinkStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-link"],
  decls: 0,
  vars: 0,
  template: function TuiLinkStyles_Template(rf, ctx) {
  },
  styles: ['[tuiLink]{--tui-text-tertiary: var(--tui-text-secondary);transition-property:color,opacity,-webkit-text-decoration;transition-property:color,text-decoration,opacity;transition-property:color,text-decoration,opacity,-webkit-text-decoration;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;padding:0;background:transparent;border:none;cursor:pointer;font:inherit;color:var(--tui-text-primary);-webkit-text-decoration:none dashed currentColor;text-decoration:none dashed currentColor;text-underline-offset:.2em;text-decoration-thickness:.7px;text-decoration-color:color-mix(in lch,currentColor,transparent)}@media (hover: hover) and (pointer: fine){[tuiLink]:hover{--tui-text-secondary: var(--tui-text-primary)}}[tuiLink]:before{margin-inline-end:.25rem}[tuiLink]:after{margin-inline-start:.25rem}[tuiLink][tuiIcons]:before,[tuiLink][tuiIcons]:after{content:"\\2060";padding:calc(var(--tui-icon-size, 1rem) / 2);vertical-align:super;font-size:0;line-height:0;box-sizing:border-box;transition:none}[tuiLink][tuiChevron]:after{display:inline-block}[tuiLink]:focus-visible:not([data-focus=false]){outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][data-focus=true]{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][tuiWrapper]:not(._focused):has(:focus-visible){outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][tuiWrapper]._focused._focused{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}@media (hover: hover) and (pointer: fine){[tuiLink]:matches(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not(:disabled):not([data-state]){text-decoration-color:currentColor}}@media (hover: hover) and (pointer: fine){[tuiLink]:is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not(:disabled):not([data-state]){text-decoration-color:currentColor}}[tuiLink][data-state=hover]{text-decoration-color:currentColor}@media (hover: hover) and (pointer: fine){[tuiLink][tuiWrapper]:hover:not(._no-hover),[tuiLink][tuiWrapper][data-state=hover]{text-decoration-color:currentColor}}[tuiLink]:matches(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):active:not(:disabled):not([data-state]){text-decoration-color:currentColor}[tuiLink]:is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):active:not(:disabled):not([data-state]){text-decoration-color:currentColor}[tuiLink][data-state=active]{text-decoration-color:currentColor}[tuiLink][tuiWrapper]:active:not(._no-active),[tuiLink][tuiWrapper][data-state=active],[tuiLink][tuiWrapper][data-state=active]:hover{text-decoration-color:currentColor}@media (hover: hover) and (pointer: fine){[tuiLink][data-appearance=""]:hover{opacity:.7}}[tuiLink][data-appearance=""]:active{opacity:.7}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiLinkStyles = _TuiLinkStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLinkStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-link"
      },
      styles: ['[tuiLink]{--tui-text-tertiary: var(--tui-text-secondary);transition-property:color,opacity,-webkit-text-decoration;transition-property:color,text-decoration,opacity;transition-property:color,text-decoration,opacity,-webkit-text-decoration;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;padding:0;background:transparent;border:none;cursor:pointer;font:inherit;color:var(--tui-text-primary);-webkit-text-decoration:none dashed currentColor;text-decoration:none dashed currentColor;text-underline-offset:.2em;text-decoration-thickness:.7px;text-decoration-color:color-mix(in lch,currentColor,transparent)}@media (hover: hover) and (pointer: fine){[tuiLink]:hover{--tui-text-secondary: var(--tui-text-primary)}}[tuiLink]:before{margin-inline-end:.25rem}[tuiLink]:after{margin-inline-start:.25rem}[tuiLink][tuiIcons]:before,[tuiLink][tuiIcons]:after{content:"\\2060";padding:calc(var(--tui-icon-size, 1rem) / 2);vertical-align:super;font-size:0;line-height:0;box-sizing:border-box;transition:none}[tuiLink][tuiChevron]:after{display:inline-block}[tuiLink]:focus-visible:not([data-focus=false]){outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][data-focus=true]{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][tuiWrapper]:not(._focused):has(:focus-visible){outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][tuiWrapper]._focused._focused{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}@media (hover: hover) and (pointer: fine){[tuiLink]:matches(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not(:disabled):not([data-state]){text-decoration-color:currentColor}}@media (hover: hover) and (pointer: fine){[tuiLink]:is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not(:disabled):not([data-state]){text-decoration-color:currentColor}}[tuiLink][data-state=hover]{text-decoration-color:currentColor}@media (hover: hover) and (pointer: fine){[tuiLink][tuiWrapper]:hover:not(._no-hover),[tuiLink][tuiWrapper][data-state=hover]{text-decoration-color:currentColor}}[tuiLink]:matches(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):active:not(:disabled):not([data-state]){text-decoration-color:currentColor}[tuiLink]:is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):active:not(:disabled):not([data-state]){text-decoration-color:currentColor}[tuiLink][data-state=active]{text-decoration-color:currentColor}[tuiLink][tuiWrapper]:active:not(._no-active),[tuiLink][tuiWrapper][data-state=active],[tuiLink][tuiWrapper][data-state=active]:hover{text-decoration-color:currentColor}@media (hover: hover) and (pointer: fine){[tuiLink][data-appearance=""]:hover{opacity:.7}}[tuiLink][data-appearance=""]:active{opacity:.7}\n']
    }]
  }], null, null);
})();
var _TuiLink = class _TuiLink {
  constructor() {
    this.nothing = tuiWithStyles(TuiLinkStyles);
    this.pseudo = inject(TUI_LINK_OPTIONS).pseudo;
  }
};
_TuiLink.\u0275fac = function TuiLink_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiLink)();
};
_TuiLink.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiLink,
  selectors: [["a", "tuiLink", ""], ["button", "tuiLink", ""]],
  hostAttrs: ["tuiLink", ""],
  hostVars: 2,
  hostBindings: function TuiLink_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("text-decoration-line", ctx.pseudo ? "underline" : null);
    }
  },
  inputs: {
    pseudo: "pseudo"
  },
  features: [\u0275\u0275ProvidersFeature([tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)]), \u0275\u0275HostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
});
var TuiLink = _TuiLink;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLink, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "a[tuiLink], button[tuiLink]",
      providers: [tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        tuiLink: "",
        "[style.text-decoration-line]": 'pseudo ? "underline" : null'
      }
    }]
  }], null, {
    pseudo: [{
      type: Input
    }]
  });
})();

// node_modules/@angular/animations/fesm2022/private_export-faY_wCkZ.mjs
var AnimationMetadataType;
(function(AnimationMetadataType2) {
  AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
  AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
  AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
  AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
  AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
  AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
  AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
  AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
  AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
  AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
  AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
  AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
  AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
})(AnimationMetadataType || (AnimationMetadataType = {}));
var AUTO_STYLE = "*";
function trigger(name, definitions) {
  return {
    type: AnimationMetadataType.Trigger,
    name,
    definitions,
    options: {}
  };
}
function animate(timings, styles = null) {
  return {
    type: AnimationMetadataType.Animate,
    styles,
    timings
  };
}
function sequence(steps, options = null) {
  return {
    type: AnimationMetadataType.Sequence,
    steps,
    options
  };
}
function style(tokens) {
  return {
    type: AnimationMetadataType.Style,
    styles: tokens,
    offset: null
  };
}
function transition(stateChangeExpr, steps, options = null) {
  return {
    type: AnimationMetadataType.Transition,
    expr: stateChangeExpr,
    animation: steps,
    options
  };
}
function animateChild(options = null) {
  return {
    type: AnimationMetadataType.AnimateChild,
    options
  };
}
function query(selector, animation, options = null) {
  return {
    type: AnimationMetadataType.Query,
    selector,
    animation,
    options
  };
}
function stagger(timings, animation) {
  return {
    type: AnimationMetadataType.Stagger,
    timings,
    animation
  };
}
var NoopAnimationPlayer = class {
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  _started = false;
  _destroyed = false;
  _finished = false;
  _position = 0;
  parentPlayer = null;
  totalTime;
  constructor(duration = 0, delay2 = 0) {
    this.totalTime = duration + delay2;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  init() {
  }
  play() {
    if (!this.hasStarted()) {
      this._onStart();
      this.triggerMicrotask();
    }
    this._started = true;
  }
  /** @internal */
  triggerMicrotask() {
    queueMicrotask(() => this._onFinish());
  }
  _onStart() {
    this._onStartFns.forEach((fn) => fn());
    this._onStartFns = [];
  }
  pause() {
  }
  restart() {
  }
  finish() {
    this._onFinish();
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      if (!this.hasStarted()) {
        this._onStart();
      }
      this.finish();
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this._started = false;
    this._finished = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  setPosition(position) {
    this._position = this.totalTime ? position * this.totalTime : 1;
  }
  getPosition() {
    return this.totalTime ? this._position / this.totalTime : 1;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var AnimationGroupPlayer = class {
  _onDoneFns = [];
  _onStartFns = [];
  _finished = false;
  _started = false;
  _destroyed = false;
  _onDestroyFns = [];
  parentPlayer = null;
  totalTime = 0;
  players;
  constructor(_players) {
    this.players = _players;
    let doneCount = 0;
    let destroyCount = 0;
    let startCount = 0;
    const total = this.players.length;
    if (total == 0) {
      queueMicrotask(() => this._onFinish());
    } else {
      this.players.forEach((player) => {
        player.onDone(() => {
          if (++doneCount == total) {
            this._onFinish();
          }
        });
        player.onDestroy(() => {
          if (++destroyCount == total) {
            this._onDestroy();
          }
        });
        player.onStart(() => {
          if (++startCount == total) {
            this._onStart();
          }
        });
      });
    }
    this.totalTime = this.players.reduce((time, player) => Math.max(time, player.totalTime), 0);
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this.players.forEach((player) => player.init());
  }
  onStart(fn) {
    this._onStartFns.push(fn);
  }
  _onStart() {
    if (!this.hasStarted()) {
      this._started = true;
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
    }
  }
  onDone(fn) {
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  play() {
    if (!this.parentPlayer) {
      this.init();
    }
    this._onStart();
    this.players.forEach((player) => player.play());
  }
  pause() {
    this.players.forEach((player) => player.pause());
  }
  restart() {
    this.players.forEach((player) => player.restart());
  }
  finish() {
    this._onFinish();
    this.players.forEach((player) => player.finish());
  }
  destroy() {
    this._onDestroy();
  }
  _onDestroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._onFinish();
      this.players.forEach((player) => player.destroy());
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this.players.forEach((player) => player.reset());
    this._destroyed = false;
    this._finished = false;
    this._started = false;
  }
  setPosition(p) {
    const timeAtPosition = p * this.totalTime;
    this.players.forEach((player) => {
      const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
      player.setPosition(position);
    });
  }
  getPosition() {
    const longestPlayer = this.players.reduce((longestSoFar, player) => {
      const newPlayerIsLongest = longestSoFar === null || player.totalTime > longestSoFar.totalTime;
      return newPlayerIsLongest ? player : longestSoFar;
    }, null);
    return longestPlayer != null ? longestPlayer.getPosition() : 0;
  }
  beforeDestroy() {
    this.players.forEach((player) => {
      if (player.beforeDestroy) {
        player.beforeDestroy();
      }
    });
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var \u0275PRE_STYLE = "!";

// node_modules/@angular/animations/fesm2022/util-D9FfmVnv.mjs
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set(["-moz-outline-radius", "-moz-outline-radius-bottomleft", "-moz-outline-radius-bottomright", "-moz-outline-radius-topleft", "-moz-outline-radius-topright", "-ms-grid-columns", "-ms-grid-rows", "-webkit-line-clamp", "-webkit-text-fill-color", "-webkit-text-stroke", "-webkit-text-stroke-color", "accent-color", "all", "backdrop-filter", "background", "background-color", "background-position", "background-size", "block-size", "border", "border-block-end", "border-block-end-color", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-width", "border-color", "border-end-end-radius", "border-end-start-radius", "border-image-outset", "border-image-slice", "border-image-width", "border-inline-end", "border-inline-end-color", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-width", "border-left", "border-left-color", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-width", "border-start-end-radius", "border-start-start-radius", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-width", "border-width", "bottom", "box-shadow", "caret-color", "clip", "clip-path", "color", "column-count", "column-gap", "column-rule", "column-rule-color", "column-rule-width", "column-width", "columns", "filter", "flex", "flex-basis", "flex-grow", "flex-shrink", "font", "font-size", "font-size-adjust", "font-stretch", "font-variation-settings", "font-weight", "gap", "grid-column-gap", "grid-gap", "grid-row-gap", "grid-template-columns", "grid-template-rows", "height", "inline-size", "input-security", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "left", "letter-spacing", "line-clamp", "line-height", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "mask", "mask-border", "mask-position", "mask-size", "max-block-size", "max-height", "max-inline-size", "max-lines", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-width", "padding", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "perspective", "perspective-origin", "right", "rotate", "row-gap", "scale", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-coordinate", "scroll-snap-destination", "scrollbar-color", "shape-image-threshold", "shape-margin", "shape-outside", "tab-size", "text-decoration", "text-decoration-color", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", "text-indent", "text-shadow", "text-underline-offset", "top", "transform", "transform-origin", "translate", "vertical-align", "visibility", "width", "word-spacing", "z-index", "zoom"]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == void 0 ? e.totalTime : totalTime, disabled);
  const data = e["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return {
    element,
    triggerName,
    fromState,
    toState,
    phaseName,
    totalTime,
    disabled: !!disabled
  };
}
function getOrSetDefaultValue(map2, key, defaultValue) {
  let value = map2.get(key);
  if (!value) {
    map2.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number") return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2) return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
function parseTimeExpression(exp, errors, allowNegativeValues) {
  const regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
  let duration;
  let delay2 = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(regex);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return {
        duration: 0,
        delay: 0,
        easing: ""
      };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay2 = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay2 < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return {
    duration,
    delay: delay2,
    easing
  };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1) return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = /* @__PURE__ */ new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function camelCaseToDashCase(input) {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay2) {
  return duration === 0 || delay2 === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i = 1; i < keyframes.length; i++) {
        let kf = keyframes[i];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}

// node_modules/@angular/animations/fesm2022/browser.mjs
var NoopAnimationDriver = class _NoopAnimationDriver {
  /**
   * @returns Whether `prop` is a valid CSS property
   */
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  /**
   *
   * @returns Whether elm1 contains elm2.
   */
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  /**
   * @returns Rhe parent of the given element or `null` if the element is the `document`
   */
  getParentElement(element) {
    return getParentElement(element);
  }
  /**
   * @returns The result of the query selector on the element. The array will contain up to 1 item
   *     if `multi` is  `false`.
   */
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  /**
   * @returns The `defaultValue` or empty string
   */
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  /**
   * @returns An `NoopAnimationPlayer`
   */
  animate(element, keyframes, duration, delay2, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay2);
  }
  static \u0275fac = function NoopAnimationDriver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationDriver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoopAnimationDriver,
    factory: _NoopAnimationDriver.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  /**
   * @deprecated Use the NoopAnimationDriver class.
   */
  static NOOP = new NoopAnimationDriver();
};
var AnimationStyleNormalizer = class {
};
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = /* @__PURE__ */ new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  _driver;
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def) => {
      this._resetContextStyleTimingState(context);
      if (def.type == AnimationMetadataType.State) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n) => {
          stateDef.name = n;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == AnimationMetadataType.Transition) {
        const transition2 = this.visitTransition(def, context);
        queryCount += transition2.queryCount;
        depCount += transition2.depCount;
        transitions.push(transition2);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style2) => {
        if (style2 instanceof Map) {
          style2.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s) => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string") return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map((styles) => {
      const style2 = this._makeStyleAst(styles, context);
      let offsetVal = style2.offset != null ? style2.offset : consumeOffset(style2.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style2.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style2;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  errors;
  queryCount = 0;
  depCount = 0;
  currentTransition = null;
  currentQuery = null;
  currentQuerySelector = null;
  currentAnimateTimings = null;
  currentTime = 0;
  collectedStyles = /* @__PURE__ */ new Map();
  options = null;
  unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  constructor(errors) {
    this.errors = errors;
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string") return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v) => v.charAt(0) == "{" && v.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay2, easing) {
  return {
    duration,
    delay: delay2,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay2, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay: delay2,
    totalTime: duration + delay2,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  _map = /* @__PURE__ */ new Map();
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = /* @__PURE__ */ new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = /* @__PURE__ */ new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay2 = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay2);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay2, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay2 = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay2);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay2 = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay2);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s) => visitDslNode(this, s, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay2 = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay2) {
        innerContext.delayNextStep(delay2);
      }
      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style2 = ast.style;
    if (style2.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style2, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style2, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay2 = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay2 && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay2) {
        innerContext.delayNextStep(delay2);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay2 = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay2 = maxTime - delay2;
        break;
      case "full":
        delay2 = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay2) {
      timeline.delayNextStep(delay2);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  _driver;
  element;
  subInstructions;
  _enterClassName;
  _leaveClassName;
  errors;
  timelines;
  parentContext = null;
  currentTimeline;
  currentAnimateTimings = null;
  previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
  subContextCount = 0;
  options = {};
  currentQueryIndex = 0;
  currentQueryTotal = 0;
  currentStaggerTime = 0;
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options) return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay2) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay2 != null ? delay2 : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay2) {
    if (delay2 > 0) {
      this.currentTimeline.delayNextStep(delay2);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  _driver;
  element;
  startTime;
  _elementTimelineStylesLookup;
  duration = 0;
  easing = null;
  _previousKeyframe = /* @__PURE__ */ new Map();
  _currentKeyframe = /* @__PURE__ */ new Map();
  _keyframes = /* @__PURE__ */ new Map();
  _styleSummary = /* @__PURE__ */ new Map();
  _localTimelineStyles = /* @__PURE__ */ new Map();
  _globalTimelineStyles;
  _pendingStyles = /* @__PURE__ */ new Map();
  _backFill = /* @__PURE__ */ new Map();
  _currentEmptyStepKeyframe = null;
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay2) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay2);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay2;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0) return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  keyframes;
  preStyleProps;
  postStyleProps;
  _stretchStartingKeyframe;
  timings;
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay: delay2,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay2) {
      const newKeyframes = [];
      const totalTime = duration + delay2;
      const startingGap = delay2 / totalTime;
      const newFirstKeyframe = new Map(keyframes[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes.length - 1;
      for (let i = 1; i <= limit; i++) {
        let kf = new Map(keyframes[i]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay2 + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay2 = 0;
      easing = "";
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay2, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  _triggerName;
  ast;
  _stateStyles;
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set([
    // 'easing' is a utility/synthetic prop we use to represent
    // easing functions, it represents a property of the animation
    // which is not animatable but different values can be used
    // in different steps
    "easing"
  ]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  styles;
  defaultParams;
  normalizer;
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  name;
  ast;
  _normalizer;
  transitionFactories = [];
  fallbackTransition;
  states = /* @__PURE__ */ new Map();
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f) => f.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition2 = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition2, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = /* @__PURE__ */ new ElementInstructionMap();
var TimelineAnimationEngine = class {
  bodyNode;
  _driver;
  _normalizer;
  _animations = /* @__PURE__ */ new Map();
  _playersById = /* @__PURE__ */ new Map();
  players = [];
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnRegister(warnings);
        }
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i) => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  namespaceId;
  value;
  options;
  get params() {
    return this.options.params;
  }
  constructor(input, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty("value");
    const value = isObj ? input["value"] : input;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input, {
        value: value2
      } = _a, options = __objRest(_a, [
        "value"
      ]);
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = /* @__PURE__ */ new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  id;
  hostElement;
  _engine;
  players = [];
  _triggers = /* @__PURE__ */ new Map();
  _queue = [];
  _elementListeners = /* @__PURE__ */ new Map();
  _hostClassName;
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger2 = this._triggers.get(name);
    if (!trigger2) {
      throw unregisteredTrigger(name);
    }
    return trigger2;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger2 = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger2.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger2.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition2 = trigger2.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition2) {
      if (!defaultToFallback) return;
      transition2 = trigger2.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition: transition2,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG]) return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state, triggerName) => {
        previousTriggersValues.set(triggerName, state.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName)) return;
        visitedTriggers.add(triggerName);
        const trigger2 = this._triggers.get(triggerName);
        const transition2 = trigger2.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition: transition2,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true)) return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed) return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a, b) => {
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p) => p.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  bodyNode;
  driver;
  _normalizer;
  players = [];
  newHostElements = /* @__PURE__ */ new Map();
  playersByElement = /* @__PURE__ */ new Map();
  playersByQueriedElement = /* @__PURE__ */ new Map();
  statesByElement = /* @__PURE__ */ new Map();
  disabledNodes = /* @__PURE__ */ new Set();
  totalAnimations = 0;
  totalQueuedPlayers = 0;
  _namespaceLookup = {};
  _namespaceList = [];
  _flushFns = [];
  _whenQuietFns = [];
  namespacesByHostElement = /* @__PURE__ */ new Map();
  collectedEnterElements = [];
  collectedLeaveElements = [];
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  /** @internal */
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger2) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger2)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId) return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element)) return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0) return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i2 = 0; i2 < nodesThatAreDisabled.length; i2++) {
        disabledElementsSet.add(nodesThatAreDisabled[i2]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i2 = 0; i2 < this.collectedLeaveElements.length; i2++) {
      const element = this.collectedLeaveElements[i2];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i2 = this._namespaceList.length - 1; i2 >= 0; i2--) {
      const ns = this._namespaceList[i2];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state = triggersWithStates.get(entry.triggerName);
                state.value = previousValue;
                triggersWithStates.set(entry.triggerName, state);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i2 = 0; i2 < allLeaveNodes.length; i2++) {
      const element = allLeaveNodes[i2];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation) continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p) => !p.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued) return;
          if (!isRemovalAnimation && player.triggerName != triggerName) return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId) return false;
        if (triggerName && triggerName != player.triggerName) return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried) return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p) => p.getRealPlayer())).filter((p) => {
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  namespaceId;
  triggerName;
  element;
  _player = new NoopAnimationPlayer();
  _containsRealPlayer = false;
  _queuedCallbacks = /* @__PURE__ */ new Map();
  destroyed = false;
  parentPlayer = null;
  markedForDestroy = false;
  disabled = false;
  queued = true;
  totalTime = 0;
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer) return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p = this._player;
    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  /** @internal */
  triggerCallback(phaseName) {
    const p = this._player;
    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map2, key, value) {
  let currentValues = map2.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map2.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0) return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node) return NULL_NODE;
    let root = localRootMap.get(node);
    if (root) return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length) return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop]) return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry) return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  _driver;
  _normalizer;
  _transitionEngine;
  _timelineEngine;
  _triggerCache = {};
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  constructor(doc, _driver, _normalizer) {
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger2 = this._triggerCache[cacheKey];
    if (!trigger2) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnTriggerBuild(name, warnings);
        }
      }
      trigger2 = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger2;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger2);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  _element;
  _startStyles;
  _endStyles;
  static initialStylesByElement = /* @__PURE__ */ new WeakMap();
  _state = 0;
  _initialStyles;
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  element;
  keyframes;
  options;
  _specialStyles;
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _duration;
  _delay;
  _initialized = false;
  _finished = false;
  _started = false;
  _destroyed = false;
  _finalKeyframe;
  // the following original fns are persistent copies of the _onStartFns and _onDoneFns
  // and are used to reset the fns to their original values upon reset()
  // (since the _onStartFns and _onDoneFns get deleted after they are called)
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  // using non-null assertion because it's re(set) by init();
  domPlayer;
  time = 0;
  parentPlayer = null;
  currentSnapshot = /* @__PURE__ */ new Map();
  constructor(element, keyframes, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._duration = options["duration"];
    this._delay = options["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this._buildPlayer();
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized) return;
    this._initialized = true;
    const keyframes = this.keyframes;
    this.domPlayer = this._triggerWebAnimation(this.element, keyframes, this.options);
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    this.domPlayer.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      this.domPlayer.removeEventListener("finish", onFinish);
    });
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer.pause();
    }
  }
  _convertKeyframesToObject(keyframes) {
    const kfs = [];
    keyframes.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  /** @internal */
  _triggerWebAnimation(element, keyframes, options) {
    return element.animate(this._convertKeyframesToObject(keyframes), options);
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    this._buildPlayer();
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    this.domPlayer.play();
  }
  pause() {
    this.init();
    this.domPlayer.pause();
  }
  finish() {
    this.init();
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    if (this.domPlayer) {
      this.domPlayer.cancel();
    }
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p) {
    if (this.domPlayer === void 0) {
      this.init();
    }
    this.domPlayer.currentTime = p * this.time;
  }
  getPosition() {
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes, duration, delay2, easing, previousPlayers = []) {
    const fill = delay2 == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay: delay2,
      fill
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay2)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  namespaceId;
  delegate;
  engine;
  _onDestroy;
  // We need to explicitly type this property because of an api-extractor bug
  // See https://github.com/microsoft/rushstack/issues/4390
  \u0275type = 0;
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    if (this.parentNode(oldChild)) {
      this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    return this.delegate.listen(target, eventName, callback, options);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  factory;
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback, options) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger2 = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger2, phase];
}
var AnimationRendererFactory = class {
  delegate;
  engine;
  _zone;
  _currentId = 0;
  _microtaskId = 1;
  _animationCallbacksBuffer = [];
  _rendererCache = /* @__PURE__ */ new Map();
  _cdRecurDepth = 0;
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    engine.onRemovalComplete = (element, delegate2) => {
      delegate2?.removeChild(null, element);
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger2) => {
      if (Array.isArray(trigger2)) {
        trigger2.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger2.name, trigger2);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  /** @internal */
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this.engine.flush();
    this.delegate.componentReplaced?.(componentId);
  }
};

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-tokens.mjs
var TUI_REMOVED_ELEMENT = new InjectionToken(ngDevMode ? "TUI_REMOVED_ELEMENT" : "", {
  factory: () => {
    const stub = {
      onRemovalComplete: () => {
      }
    };
    const element$ = new Subject();
    const engine = inject(AnimationEngine, {
      optional: true
    }) || stub;
    const {
      onRemovalComplete = stub.onRemovalComplete
    } = engine;
    engine.onRemovalComplete = (element, context) => {
      element$.next(element);
      onRemovalComplete.call(engine, element, context);
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
    tuiIsMouseFocusable(target)
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
var TUI_BASE_HREF = new InjectionToken(ngDevMode ? "TUI_BASE_HREF" : "", {
  factory: () => inject(DOCUMENT).querySelector("base")?.href ?? ""
});
var TUI_MOBILE_REGEXP = /(?:android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|^(?:1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ \-/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ /])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-)/i;
var TUI_IS_MOBILE = new InjectionToken(ngDevMode ? "TUI_IS_MOBILE" : "", {
  factory: () => TUI_MOBILE_REGEXP.test(inject(WA_USER_AGENT))
});
var TUI_IS_IOS = new InjectionToken(ngDevMode ? "TUI_IS_IOS" : "", {
  factory: () => isIos(inject(WA_NAVIGATOR))
});
var TUI_IS_ANDROID = new InjectionToken(ngDevMode ? "TUI_IS_ANDROID" : "", {
  factory: () => inject(TUI_IS_MOBILE) && !inject(TUI_IS_IOS)
});
var TUI_IS_WEBKIT = new InjectionToken(ngDevMode ? "TUI_IS_WEBKIT" : "", {
  factory: () => !!inject(WA_WINDOW)?.webkitConvertPointFromNodeToPage
});
var TUI_PLATFORM = new InjectionToken(ngDevMode ? "TUI_PLATFORM" : "", {
  factory: () => {
    if (inject(TUI_IS_IOS)) {
      return "ios";
    }
    return inject(TUI_IS_ANDROID) ? "android" : "web";
  }
});
var TUI_IS_TOUCH = new InjectionToken(ngDevMode ? "TUI_IS_TOUCH" : "", {
  factory: () => {
    const media = inject(WA_WINDOW).matchMedia("(pointer: coarse)");
    return toSignal(fromEvent(media, "change").pipe(map(() => media.matches)), {
      initialValue: media.matches
    });
  }
});
var TUI_IS_CYPRESS = new InjectionToken(ngDevMode ? "TUI_IS_CYPRESS" : "", {
  factory: () => !!inject(WA_WINDOW).Cypress
});
var TUI_IS_PLAYWRIGHT = new InjectionToken(ngDevMode ? "TUI_IS_PLAYWRIGHT" : "", {
  factory: TUI_FALSE_HANDLER
});
var TUI_IS_E2E = new InjectionToken(ngDevMode ? "TUI_IS_E2E" : "", {
  factory: () => inject(TUI_IS_CYPRESS) || inject(TUI_IS_PLAYWRIGHT) || inject(WA_NAVIGATOR).webdriver
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
var TUI_RANGE = new InjectionToken(ngDevMode ? "TUI_RANGE" : "", {
  factory: () => isPlatformBrowser(inject(PLATFORM_ID)) ? new Range() : {}
});
var TUI_WINDOW_SIZE = new InjectionToken(ngDevMode ? "TUI_WINDOW_SIZE" : "", {
  factory: () => {
    const w = inject(WA_WINDOW);
    return tuiTypedFromEvent(w, "resize").pipe(startWith(null), map(() => {
      const width = Math.max(w.document.documentElement.clientWidth || 0, w.innerWidth || 0, w.visualViewport?.width || 0);
      const height = Math.max(w.document.documentElement.clientHeight || 0, w.innerHeight || 0, w.visualViewport?.height || 0);
      const rect = {
        width,
        height,
        top: 0,
        left: 0,
        right: width,
        bottom: height,
        x: 0,
        y: 0
      };
      return __spreadProps(__spreadValues({}, rect), {
        toJSON: () => JSON.stringify(rect)
      });
    }), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
});

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-icon.mjs
var _TuiIcon = class _TuiIcon {
  constructor() {
    this.resolver = tuiInjectIconResolver();
    this.src = signal(inject(TUI_ICON_START, {
      self: true,
      optional: true
    }) || inject(TUI_ICON_END, {
      self: true,
      optional: true
    }));
    this.bg = signal(null);
    this.resource = computed(() => this.resolve(this.src()));
    this.mode = computed(() => tuiGetIconMode(this.src()));
    this.bgResource = computed(() => this.resolve(this.bg()));
  }
  set icon(icon) {
    this.src.set(icon);
  }
  set background(background) {
    this.bg.set(background);
  }
  resolve(value) {
    if (!value) {
      return null;
    }
    return tuiGetIconMode(value) === "font" ? `'${this.resolver(value)}'` : `url(${this.resolver(value)})`;
  }
};
_TuiIcon.\u0275fac = function TuiIcon_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiIcon)();
};
_TuiIcon.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiIcon,
  selectors: [["tui-icon"]],
  hostVars: 5,
  hostBindings: function TuiIcon_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-icon", ctx.mode());
      \u0275\u0275styleProp("--t-icon", ctx.resource() || "url()")("--t-icon-bg", ctx.bgResource());
    }
  },
  inputs: {
    icon: "icon",
    background: "background"
  },
  decls: 0,
  vars: 0,
  template: function TuiIcon_Template(rf, ctx) {
  },
  styles: ['tui-icon{position:relative;display:inline-block;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask:var(--t-icon-bg) no-repeat center / contain;mask:var(--t-icon-bg) no-repeat center / contain}@media (hover: hover) and (pointer: fine){tui-icon[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:after,tui-icon[tuiIcons]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block;-webkit-mask:var(--t-icon) no-repeat center / contain;mask:var(--t-icon) no-repeat center / contain;background:currentColor}tui-icon[data-icon=image]:after{-webkit-mask:none;mask:none;background:var(--t-icon) no-repeat center / contain}tui-icon[data-icon=font]:after{content:var(--t-icon);-webkit-mask:none;mask:none;background:none;font:1em/1 var(--tui-font-icon, inherit);text-align:center;text-transform:none}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiIcon = _TuiIcon;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcon, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-icon",
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style.--t-icon]": 'resource() || "url()"',
        "[style.--t-icon-bg]": "bgResource()",
        "[attr.data-icon]": "mode()"
      },
      styles: ['tui-icon{position:relative;display:inline-block;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask:var(--t-icon-bg) no-repeat center / contain;mask:var(--t-icon-bg) no-repeat center / contain}@media (hover: hover) and (pointer: fine){tui-icon[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:after,tui-icon[tuiIcons]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block;-webkit-mask:var(--t-icon) no-repeat center / contain;mask:var(--t-icon) no-repeat center / contain;background:currentColor}tui-icon[data-icon=image]:after{-webkit-mask:none;mask:none;background:var(--t-icon) no-repeat center / contain}tui-icon[data-icon=font]:after{content:var(--t-icon);-webkit-mask:none;mask:none;background:none;font:1em/1 var(--tui-font-icon, inherit);text-align:center;text-transform:none}\n']
    }]
  }], null, {
    icon: [{
      type: Input
    }],
    background: [{
      type: Input
    }]
  });
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
      standalone: true,
      name: "tuiIcon"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-classes.mjs
var _c0 = ["viewContainer"];
var TuiValueTransformer = class {
};
function tuiValueTransformerFrom(token) {
  return {
    provide: TuiValueTransformer,
    useFactory: () => inject(token).valueTransformer
  };
}
var TUI_IDENTITY_VALUE_TRANSFORMER = {
  fromControlValue: identity,
  toControlValue: identity
};
var FLAGS = {
  self: true,
  optional: true
};
var _TuiControl = class _TuiControl {
  constructor() {
    this.fallback = inject(TUI_FALLBACK_VALUE, FLAGS);
    this.refresh$ = new Subject();
    this.pseudoInvalid = signal(null);
    this.internal = signal(this.fallback);
    this.control = inject(NgControl, {
      self: true
    });
    this.cdr = inject(ChangeDetectorRef);
    this.transformer = inject(TuiValueTransformer, FLAGS) ?? TUI_IDENTITY_VALUE_TRANSFORMER;
    this.value = computed(() => this.internal() ?? this.fallback);
    this.readOnly = signal(false);
    this.touched = signal(false);
    this.status = signal(void 0);
    this.disabled = computed(() => this.status() === "DISABLED");
    this.interactive = computed(() => !this.disabled() && !this.readOnly());
    this.invalid = computed(() => this.pseudoInvalid() !== null ? !!this.pseudoInvalid() && this.interactive() : this.interactive() && this.touched() && this.status() === "INVALID");
    this.mode = computed(() => (
      // eslint-disable-next-line no-nested-ternary
      this.readOnly() ? "readonly" : this.invalid() ? "invalid" : "valid"
    ));
    this.onTouched = EMPTY_FUNCTION;
    this.onChange = EMPTY_FUNCTION;
    this.control.valueAccessor = this;
    this.refresh$.pipe(delay(0), startWith(null), map(() => this.control.control), filter(Boolean), distinctUntilChanged(), switchMap((c) => merge(c.valueChanges, c.statusChanges, c.events || EMPTY).pipe(startWith(null))), takeUntilDestroyed()).subscribe(() => this.update());
  }
  set readOnlySetter(readOnly) {
    this.readOnly.set(readOnly);
  }
  set invalidSetter(invalid) {
    this.pseudoInvalid.set(invalid);
  }
  registerOnChange(onChange) {
    this.refresh$.next();
    this.onChange = (value) => {
      const internal = untracked(() => this.internal());
      if (value === internal) {
        return;
      }
      onChange(this.transformer.toControlValue(value));
      this.internal.set(value);
      this.update();
    };
  }
  registerOnTouched(onTouched) {
    this.onTouched = () => {
      onTouched();
      this.update();
    };
  }
  setDisabledState() {
    this.update();
  }
  writeValue(value) {
    const safe = this.control instanceof NgModel ? this.control.model : value;
    this.internal.set(this.transformer.fromControlValue(safe));
    this.update();
  }
  update() {
    this.status.set(this.control.control?.status);
    this.touched.set(!!this.control.control?.touched);
    this.cdr.markForCheck();
  }
};
_TuiControl.\u0275fac = function TuiControl_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiControl)();
};
_TuiControl.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiControl,
  inputs: {
    readOnlySetter: [0, "readOnly", "readOnlySetter"],
    invalidSetter: [0, "invalid", "invalidSetter"]
  },
  standalone: false
});
var TuiControl = _TuiControl;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiControl, [{
    type: Directive
  }], function() {
    return [];
  }, {
    readOnlySetter: [{
      type: Input,
      args: ["readOnly"]
    }],
    invalidSetter: [{
      type: Input,
      args: ["invalid"]
    }]
  });
})();
function tuiAsControl(control) {
  return tuiProvide(TuiControl, control);
}
var _TuiPortals = class _TuiPortals {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.nothing = inject(TuiPortalService).attach(this);
  }
  addComponentChild(component) {
    const injector = component.createInjector(this.injector);
    const ref = this.vcr.createComponent(component.component, {
      injector
    });
    ref.changeDetectorRef.detectChanges();
    return ref;
  }
  addTemplateChild(templateRef, context) {
    return this.vcr.createEmbeddedView(templateRef, context);
  }
};
_TuiPortals.\u0275fac = function TuiPortals_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPortals)();
};
_TuiPortals.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiPortals,
  viewQuery: function TuiPortals_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.vcr = _t.first);
    }
  },
  standalone: false
});
var TuiPortals = _TuiPortals;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortals, [{
    type: Directive
  }], null, {
    vcr: [{
      type: ViewChild,
      args: ["viewContainer", {
        read: ViewContainerRef
      }]
    }]
  });
})();
var _TuiPortalService = class _TuiPortalService {
  attach(host) {
    this.host = host;
  }
  add(component) {
    return this.safeHost.addComponentChild(component);
  }
  remove({
    hostView
  }) {
    this.removeTemplate(hostView);
  }
  addTemplate(templateRef, context) {
    return this.safeHost.addTemplateChild(templateRef, context);
  }
  removeTemplate(viewRef) {
    if (!viewRef.destroyed) {
      viewRef.destroy();
    }
  }
  get safeHost() {
    if (!this.host) {
      throw new TuiNoHostException();
    }
    return this.host;
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
function tuiAsPortal(portal) {
  return tuiProvide(TuiPortalService, portal);
}
var TuiNoHostException = class extends Error {
  constructor() {
    super(ngDevMode ? "Portals cannot be used without TuiPortalHostComponent; perhaps you forgot to wrap your application with tui-root." : "");
  }
};
var TuiValidationError = class {
  constructor(message, context = {}) {
    this.message = message;
    this.context = context;
  }
};

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-active-zone.mjs
var _TuiActiveZone = class _TuiActiveZone {
  constructor() {
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.active$ = inject(TUI_ACTIVE_ELEMENT);
    this.zone = inject(NgZone);
    this.el = tuiInjectElement();
    this.tuiActiveZoneParent = null;
    this.directParentActiveZone = inject(_TuiActiveZone, {
      skipSelf: true,
      optional: true
    });
    this.tuiActiveZoneChange = this.active$.pipe(map((element) => !!element && this.contains(element)), startWith(false), distinctUntilChanged(), skip(1), tap((active) => {
      if (!active && typeof this.control?.valueAccessor.onTouched === "function") {
        this.control.valueAccessor.onTouched();
      }
    }), tuiZoneOptimized(this.zone), share());
    this.children = [];
    this.directParentActiveZone?.addSubActiveZone(this);
  }
  set tuiActiveZoneParentSetter(zone) {
    this.setZone(zone);
  }
  ngOnDestroy() {
    this.directParentActiveZone?.removeSubActiveZone(this);
    this.tuiActiveZoneParent?.removeSubActiveZone(this);
  }
  contains(node) {
    return this.el.contains(node) || this.children.some((item) => item.contains(node));
  }
  setZone(zone) {
    this.tuiActiveZoneParent?.removeSubActiveZone(this);
    zone?.addSubActiveZone(this);
    this.tuiActiveZoneParent = zone;
  }
  addSubActiveZone(activeZone) {
    this.children = [...this.children, activeZone];
  }
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
  hostBindings: function TuiActiveZone_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mousedown.zoneless", function TuiActiveZone_mousedown_zoneless_HostBindingHandler() {
        return 0;
      }, false, \u0275\u0275resolveDocument);
    }
  },
  inputs: {
    tuiActiveZoneParentSetter: [0, "tuiActiveZoneParent", "tuiActiveZoneParentSetter"]
  },
  outputs: {
    tuiActiveZoneChange: "tuiActiveZoneChange"
  },
  exportAs: ["tuiActiveZone"]
});
var TuiActiveZone = _TuiActiveZone;
__decorate([tuiPure], TuiActiveZone.prototype, "setZone", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiActiveZone, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)",
      exportAs: "tuiActiveZone",
      host: {
        "(document:mousedown.zoneless)": "(0)"
      }
    }]
  }], function() {
    return [];
  }, {
    tuiActiveZoneChange: [{
      type: Output
    }],
    tuiActiveZoneParentSetter: [{
      type: Input,
      args: ["tuiActiveZoneParent"]
    }],
    setZone: []
  });
})();

// node_modules/@ng-web-apis/mutation-observer/fesm2022/ng-web-apis-mutation-observer.mjs
var SafeObserver = typeof MutationObserver !== "undefined" ? MutationObserver : class {
  observe() {
  }
  disconnect() {
  }
  takeRecords() {
    return [];
  }
};
var WA_MUTATION_OBSERVER_INIT = new InjectionToken("[WA_MUTATION_OBSERVER_INIT]");
var MUTATION_OBSERVER_INIT = WA_MUTATION_OBSERVER_INIT;
function provideMutationObserverInit(useValue) {
  return {
    provide: WA_MUTATION_OBSERVER_INIT,
    useValue
  };
}
function booleanAttribute(element, attribute) {
  return element.getAttribute(attribute) !== null || void 0;
}
function mutationObserverInitFactory() {
  const {
    nativeElement
  } = inject(ElementRef);
  const attributeFilter = nativeElement.getAttribute("attributeFilter");
  return {
    attributeFilter: attributeFilter?.split(",").map((attr) => attr.trim()),
    attributeOldValue: booleanAttribute(nativeElement, "attributeOldValue"),
    attributes: booleanAttribute(nativeElement, "attributes"),
    characterData: booleanAttribute(nativeElement, "characterData"),
    characterDataOldValue: booleanAttribute(nativeElement, "characterDataOldValue"),
    childList: booleanAttribute(nativeElement, "childList"),
    subtree: booleanAttribute(nativeElement, "subtree")
  };
}
var WaMutationObserver = class _WaMutationObserver extends SafeObserver {
  nativeElement = inject(ElementRef).nativeElement;
  config = inject(MUTATION_OBSERVER_INIT);
  attributeFilter = "";
  attributeOldValue = "";
  attributes = "";
  characterData = "";
  characterDataOldValue = "";
  childList = "";
  subtree = "";
  waMutationObserver = new EventEmitter();
  constructor() {
    super((records) => {
      this.waMutationObserver.emit(records);
    });
    this.observe(this.nativeElement, this.config);
  }
  ngOnDestroy() {
    this.disconnect();
  }
  static \u0275fac = function WaMutationObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaMutationObserver)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _WaMutationObserver,
    selectors: [["", "waMutationObserver", ""]],
    inputs: {
      attributeFilter: "attributeFilter",
      attributeOldValue: "attributeOldValue",
      attributes: "attributes",
      characterData: "characterData",
      characterDataOldValue: "characterDataOldValue",
      childList: "childList",
      subtree: "subtree"
    },
    outputs: {
      waMutationObserver: "waMutationObserver"
    },
    exportAs: ["MutationObserver"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MUTATION_OBSERVER_INIT,
      useFactory: mutationObserverInitFactory
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaMutationObserver, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waMutationObserver]",
      providers: [{
        provide: MUTATION_OBSERVER_INIT,
        useFactory: mutationObserverInitFactory
      }],
      exportAs: "MutationObserver"
    }]
  }], function() {
    return [];
  }, {
    attributeFilter: [{
      type: Input
    }],
    attributeOldValue: [{
      type: Input
    }],
    attributes: [{
      type: Input
    }],
    characterData: [{
      type: Input
    }],
    characterDataOldValue: [{
      type: Input
    }],
    childList: [{
      type: Input
    }],
    subtree: [{
      type: Input
    }],
    waMutationObserver: [{
      type: Output
    }]
  });
})();
var WaMutationObserverService = class _WaMutationObserverService extends Observable {
  constructor() {
    const nativeElement = inject(ElementRef).nativeElement;
    const config = inject(MUTATION_OBSERVER_INIT);
    super((subscriber) => {
      const observer = new SafeObserver((records) => {
        subscriber.next(records);
      });
      observer.observe(nativeElement, config);
      return () => {
        observer.disconnect();
      };
    });
  }
  static \u0275fac = function WaMutationObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaMutationObserverService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _WaMutationObserverService,
    factory: _WaMutationObserverService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaMutationObserverService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-animated.mjs
var TUI_ENTER = "tui-enter";
var TUI_LEAVE = "tui-leave";
var _TuiAnimated = class _TuiAnimated {
  constructor() {
    this.renderer = inject(ViewContainerRef)._hostLView?.[11];
    this.el = tuiInjectElement();
    afterNextRender(() => this.remove());
    if (!this.renderer || isPlatformServer(inject(PLATFORM_ID))) {
      return;
    }
    const renderer = this.renderer.delegate || this.renderer;
    if (renderer.data[TUI_LEAVE]) {
      renderer.data[TUI_LEAVE].push(this.el);
    } else {
      renderer.data[TUI_LEAVE] = [this.el];
      renderer.removeChild = wrap(renderer);
    }
  }
  ngOnDestroy() {
    const data = this.renderer?.data || {
      [TUI_LEAVE]: []
    };
    setTimeout(() => {
      data[TUI_LEAVE] = data[TUI_LEAVE]?.filter((e) => e !== this.el);
    });
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
      \u0275\u0275listener("animationend.self", function TuiAnimated_animationend_self_HostBindingHandler() {
        return ctx.remove();
      })("animationcancel.self", function TuiAnimated_animationcancel_self_HostBindingHandler() {
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
      standalone: true,
      selector: "[tuiAnimated]",
      host: {
        class: TUI_ENTER,
        "(animationend.self)": "remove()",
        "(animationcancel.self)": "remove()"
      }
    }]
  }], function() {
    return [];
  }, null);
})();
function wrap(renderer) {
  const {
    removeChild
  } = renderer;
  return (parent, el, host) => {
    const remove = () => removeChild.call(renderer, parent, el, host);
    const elements = renderer.data[TUI_LEAVE];
    const element = elements.find((leave) => el.contains(leave));
    if (!element) {
      remove();
      return;
    }
    element.classList.remove(TUI_ENTER);
    const {
      length
    } = element.getAnimations?.() || [];
    element.classList.add(TUI_LEAVE);
    const animations = element.getAnimations?.() ?? [];
    const last = animations[animations.length - 1];
    const finish = () => {
      if (!parent || parent.contains(el)) {
        remove();
      }
    };
    if (animations.length > length && last) {
      last.onfinish = finish;
      last.oncancel = finish;
    } else {
      remove();
    }
  };
}
var _TuiAnimatedParent = class _TuiAnimatedParent {
  constructor() {
    this.el = tuiInjectElement();
    this.renderer = inject(Renderer2);
  }
  handle() {
    this.el.classList.remove(TUI_ENTER);
    this.renderer.data[TUI_LEAVE] = Array.from(this.el.children);
  }
};
_TuiAnimatedParent.\u0275fac = function TuiAnimatedParent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAnimatedParent)();
};
_TuiAnimatedParent.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiAnimatedParent,
  selectors: [["", "tuiAnimatedParent", ""]],
  hostBindings: function TuiAnimatedParent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("waMutationObserver", function TuiAnimatedParent_waMutationObserver_HostBindingHandler() {
        return ctx.handle();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([provideMutationObserverInit({
    childList: true
  })]), \u0275\u0275HostDirectivesFeature([TuiAnimated, {
    directive: WaMutationObserver,
    outputs: ["waMutationObserver", "waMutationObserver"]
  }])]
});
var TuiAnimatedParent = _TuiAnimatedParent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAnimatedParent, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAnimatedParent]",
      providers: [provideMutationObserverInit({
        childList: true
      })],
      hostDirectives: [TuiAnimated, {
        directive: WaMutationObserver,
        outputs: ["waMutationObserver"]
      }],
      host: {
        "(waMutationObserver)": "handle()"
      }
    }]
  }], null, null);
})();

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
  return (accessors, fallback) => accessors?.find?.((accessor) => accessor !== fallback && accessor.type === type) || fallback;
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
    this.drivers = inject(TuiDriver, {
      self: true,
      optional: true
    }) || [];
    this.vehicles = inject(TuiVehicle, {
      self: true,
      optional: true
    });
  }
  ngAfterViewInit() {
    const vehicle = this.vehicles?.find(({
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
  type: _TuiDriverDirective,
  standalone: false
});
var TuiDriverDirective = _TuiDriverDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDriverDirective, [{
    type: Directive
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-scrollbar.mjs
function TuiScrollControls_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TuiScrollControls_ng_template_1_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275listener("mousedown.capture.prevent", function TuiScrollControls_ng_template_1_ng_container_0_div_1_Template_div_mousedown_capture_prevent_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(0);
    });
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bars_r2 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275classProp("t-bar_has-horizontal", bars_r2[1]);
  }
}
function TuiScrollControls_ng_template_1_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("mousedown.capture.prevent", function TuiScrollControls_ng_template_1_ng_container_0_div_2_Template_div_mousedown_capture_prevent_0_listener() {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView(0);
    });
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bars_r2 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275classProp("t-bar_has-vertical", bars_r2[0]);
  }
}
function TuiScrollControls_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TuiScrollControls_ng_template_1_ng_container_0_div_1_Template, 2, 2, "div", 3)(2, TuiScrollControls_ng_template_1_ng_container_0_div_2_Template, 2, 2, "div", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const bars_r2 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bars_r2[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bars_r2[1]);
  }
}
function TuiScrollControls_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TuiScrollControls_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 2);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx_r3.refresh$));
  }
}
var _c02 = ["*"];
function TuiScrollbar_tui_scroll_controls_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tui-scroll-controls", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("t-hover-mode", ctx_r0.options.mode === "hover");
  }
}
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
      const rect = this.el.getBoundingClientRect();
      const vertical = getOffsetVertical(event, rect);
      const horizontal = getOffsetHorizontal(event, rect);
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
  }], function() {
    return [];
  }, null);
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
      if (this.tuiScrollbar === "horizontal") {
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
      if (this.tuiScrollbar === "vertical") {
        this.style.top = thumb;
        this.style.height = view;
      } else {
        this.style.left = thumb;
        this.style.insetInlineStart = thumb;
        this.style.width = view;
      }
    });
    this.tuiScrollbar = "vertical";
  }
  getScrolled(dimension) {
    return this.tuiScrollbar === "vertical" ? dimension.scrollTop / (dimension.scrollHeight - dimension.clientHeight) : dimension.scrollLeft / (dimension.scrollWidth - dimension.clientWidth);
  }
  getCompensation(dimension) {
    if (dimension.clientHeight * dimension.clientHeight / dimension.scrollHeight > MIN_WIDTH && this.tuiScrollbar === "vertical" || dimension.clientWidth * dimension.clientWidth / dimension.scrollWidth > MIN_WIDTH && this.tuiScrollbar === "horizontal") {
      return 0;
    }
    return this.tuiScrollbar === "vertical" ? MIN_WIDTH / dimension.clientHeight : MIN_WIDTH / dimension.clientWidth;
  }
  getThumb(dimension) {
    const compensation = this.getCompensation(dimension) || this.getView(dimension);
    return Math.abs(this.getScrolled(dimension) * (1 - compensation));
  }
  getView(dimension) {
    return this.tuiScrollbar === "vertical" ? Math.ceil(dimension.clientHeight / dimension.scrollHeight * 100) / 100 : Math.ceil(dimension.clientWidth / dimension.scrollWidth * 100) / 100;
  }
};
_TuiScrollbarDirective.\u0275fac = function TuiScrollbarDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiScrollbarDirective)();
};
_TuiScrollbarDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiScrollbarDirective,
  selectors: [["", "tuiScrollbar", ""]],
  inputs: {
    tuiScrollbar: "tuiScrollbar"
  },
  features: [\u0275\u0275ProvidersFeature([TuiScrollbarService])]
});
var TuiScrollbarDirective = _TuiScrollbarDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiScrollbar]",
      providers: [TuiScrollbarService]
    }]
  }], null, {
    tuiScrollbar: [{
      type: Input
    }]
  });
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
  decls: 3,
  vars: 2,
  consts: [["custom", ""], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["tuiAnimated", "", "class", "t-bar t-bar_vertical", 3, "t-bar_has-horizontal", "mousedown.capture.prevent", 4, "ngIf"], ["tuiAnimated", "", "class", "t-bar t-bar_horizontal", 3, "t-bar_has-vertical", "mousedown.capture.prevent", 4, "ngIf"], ["tuiAnimated", "", 1, "t-bar", "t-bar_vertical", 3, "mousedown.capture.prevent"], ["tuiScrollbar", "vertical", 1, "t-thumb"], ["tuiAnimated", "", 1, "t-bar", "t-bar_horizontal", 3, "mousedown.capture.prevent"], ["tuiScrollbar", "horizontal", 1, "t-thumb"]],
  template: function TuiScrollControls_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TuiScrollControls_ng_container_0_Template, 1, 0, "ng-container", 1)(1, TuiScrollControls_ng_template_1_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const custom_r5 = \u0275\u0275reference(2);
      \u0275\u0275property("ngIf", ctx.nativeScrollbar)("ngIfElse", custom_r5);
    }
  },
  dependencies: [AsyncPipe, NgIf, TuiAnimated, TuiScrollbarDirective],
  styles: ["[_nghost-%COMP%]{position:sticky;top:0;left:0;z-index:1;inset-inline-start:0;min-inline-size:calc(100% - 1px);min-block-size:calc(100% - 1px);max-inline-size:calc(100% - 1px);max-block-size:calc(100% - 1px);margin-inline-end:calc(-100% + 1px);pointer-events:none;overflow:hidden;color:var(--tui-text-primary)}.t-bar[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;pointer-events:auto}.t-bar.tui-enter[_ngcontent-%COMP%], .t-bar.tui-leave[_ngcontent-%COMP%]{animation-name:tuiFade}.t-bar_vertical[_ngcontent-%COMP%]{top:0;inline-size:.875rem}@supports (inset-inline-end: 0){.t-bar_vertical[_ngcontent-%COMP%]{right:unset;inset-inline-end:0}}.t-bar_horizontal[_ngcontent-%COMP%]{left:0;inset-inline-start:0;block-size:.875rem}.t-bar_has-horizontal[_ngcontent-%COMP%]{bottom:.5rem}.t-bar_has-vertical[_ngcontent-%COMP%]{right:.5rem}.t-thumb[_ngcontent-%COMP%]{transition-property:all;transition-duration:.15s;transition-timing-function:ease-in-out;position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition-property:width,height,opacity;opacity:.2}.t-thumb[_ngcontent-%COMP%]:hover{opacity:.24}.t-thumb[_ngcontent-%COMP%]:active{opacity:.48}.t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{right:0;inset-inline-end:0;inline-size:.75rem;min-block-size:1.25rem}.t-bar_vertical[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{inline-size:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{bottom:0;block-size:.75rem;min-inline-size:1.25rem}.t-bar_horizontal[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{block-size:.875rem}"],
  changeDetection: 0
});
var TuiScrollControls = _TuiScrollControls;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollControls, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-scroll-controls",
      imports: [AsyncPipe, NgIf, TuiAnimated, TuiScrollbarDirective],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-container *ngIf="nativeScrollbar; else custom" />\n<ng-template #custom>\n    <ng-container *ngIf="refresh$ | async as bars">\n        <div\n            *ngIf="bars[0]"\n            tuiAnimated\n            class="t-bar t-bar_vertical"\n            [class.t-bar_has-horizontal]="bars[1]"\n            (mousedown.capture.prevent)="(0)"\n        >\n            <div\n                tuiScrollbar="vertical"\n                class="t-thumb"\n            ></div>\n        </div>\n        <div\n            *ngIf="bars[1]"\n            tuiAnimated\n            class="t-bar t-bar_horizontal"\n            [class.t-bar_has-vertical]="bars[0]"\n            (mousedown.capture.prevent)="(0)"\n        >\n            <div\n                tuiScrollbar="horizontal"\n                class="t-thumb"\n            ></div>\n        </div>\n    </ng-container>\n</ng-template>\n',
      styles: [":host{position:sticky;top:0;left:0;z-index:1;inset-inline-start:0;min-inline-size:calc(100% - 1px);min-block-size:calc(100% - 1px);max-inline-size:calc(100% - 1px);max-block-size:calc(100% - 1px);margin-inline-end:calc(-100% + 1px);pointer-events:none;overflow:hidden;color:var(--tui-text-primary)}.t-bar{position:absolute;right:0;bottom:0;pointer-events:auto}.t-bar.tui-enter,.t-bar.tui-leave{animation-name:tuiFade}.t-bar_vertical{top:0;inline-size:.875rem}@supports (inset-inline-end: 0){.t-bar_vertical{right:unset;inset-inline-end:0}}.t-bar_horizontal{left:0;inset-inline-start:0;block-size:.875rem}.t-bar_has-horizontal{bottom:.5rem}.t-bar_has-vertical{right:.5rem}.t-thumb{transition-property:all;transition-duration:.15s;transition-timing-function:ease-in-out;position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition-property:width,height,opacity;opacity:.2}.t-thumb:hover{opacity:.24}.t-thumb:active{opacity:.48}.t-bar_vertical .t-thumb{right:0;inset-inline-end:0;inline-size:.75rem;min-block-size:1.25rem}.t-bar_vertical:hover .t-thumb,.t-bar_vertical .t-thumb:active{inline-size:.875rem}.t-bar_horizontal .t-thumb{bottom:0;block-size:.75rem;min-inline-size:1.25rem}.t-bar_horizontal:hover .t-thumb,.t-bar_horizontal .t-thumb:active{block-size:.875rem}\n"]
    }]
  }], null, null);
})();
var TUI_SCROLL_INTO_VIEW = "tui-scroll-into-view";
var TUI_SCROLLABLE = "tui-scrollable";
var _TuiScrollbar = class _TuiScrollbar {
  constructor() {
    this.el = tuiInjectElement();
    this.options = inject(TUI_SCROLLBAR_OPTIONS);
    this.isIOS = inject(TUI_IS_IOS);
    this.browserScrollRef = new ElementRef(this.el);
    this.hidden = this.options.mode === "hidden";
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
      \u0275\u0275classProp("_native-hidden", ctx.options.mode !== "native" && (!ctx.isIOS || ctx.hidden));
    }
  },
  inputs: {
    hidden: "hidden"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: TUI_SCROLL_REF,
    useFactory: () => inject(_TuiScrollbar).browserScrollRef
  }])],
  ngContentSelectors: _c02,
  decls: 3,
  vars: 3,
  consts: [["class", "t-bars", 3, "t-hover-mode", 4, "ngIf"], [1, "t-content"], [1, "t-bars"]],
  template: function TuiScrollbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, TuiScrollbar_tui_scroll_controls_0_Template, 1, 2, "tui-scroll-controls", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.hidden && !ctx.isIOS && ctx.options.mode !== "native");
      \u0275\u0275advance();
      \u0275\u0275classProp("t-content_delegated", ctx.delegated);
    }
  },
  dependencies: [NgIf, TuiScrollControls],
  styles: ["[_nghost-%COMP%]{position:relative;display:flex;max-block-size:100%;isolation:isolate;overflow:auto}._native-hidden[_nghost-%COMP%]{scrollbar-width:none;-ms-overflow-style:none}._native-hidden[_nghost-%COMP%]::-webkit-scrollbar, ._native-hidden[_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]   .t-hover-mode[_ngcontent-%COMP%]:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}[_nghost-%COMP%]:hover > .t-hover-mode[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:1}.t-content[_ngcontent-%COMP%]{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:-webkit-max-content;block-size:max-content}.t-content_delegated[_ngcontent-%COMP%]{block-size:100%}.t-bars[_ngcontent-%COMP%]{color:var(--tui-text-primary)}"],
  changeDetection: 0
});
var TuiScrollbar = _TuiScrollbar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-scrollbar",
      imports: [NgIf, TuiScrollControls],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: TUI_SCROLL_REF,
        useFactory: () => inject(TuiScrollbar).browserScrollRef
      }],
      host: {
        "[class._native-hidden]": 'options.mode !== "native" && (!isIOS || hidden)',
        [`(${TUI_SCROLLABLE}.stop)`]: "scrollRef = $event.detail",
        [`(${TUI_SCROLL_INTO_VIEW}.stop)`]: "scrollIntoView($event.detail)"
      },
      template: `<tui-scroll-controls
    *ngIf="!hidden && !isIOS && options.mode !== 'native'"
    class="t-bars"
    [class.t-hover-mode]="options.mode === 'hover'"
/>
<div
    class="t-content"
    [class.t-content_delegated]="delegated"
>
    <ng-content />
</div>
`,
      styles: [":host{position:relative;display:flex;max-block-size:100%;isolation:isolate;overflow:auto}:host._native-hidden{scrollbar-width:none;-ms-overflow-style:none}:host._native-hidden::-webkit-scrollbar,:host._native-hidden::-webkit-scrollbar-thumb{display:none}:host .t-hover-mode:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}:host:hover>.t-hover-mode{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:1}.t-content{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:-webkit-max-content;block-size:max-content}.t-content_delegated{block-size:100%}.t-bars{color:var(--tui-text-primary)}\n"]
    }]
  }], null, {
    hidden: [{
      type: Input
    }]
  });
})();
var _TuiScrollIntoView = class _TuiScrollIntoView {
  constructor() {
    this.el = tuiInjectElement();
    this.destroyRef = inject(DestroyRef);
  }
  set tuiScrollIntoView(scroll) {
    if (!scroll) {
      return;
    }
    timer(0).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.el.dispatchEvent(new CustomEvent(TUI_SCROLL_INTO_VIEW, {
        bubbles: true,
        detail: this.el
      }));
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
    tuiScrollIntoView: "tuiScrollIntoView"
  }
});
var TuiScrollIntoView = _TuiScrollIntoView;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollIntoView, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiScrollIntoView]"
    }]
  }], null, {
    tuiScrollIntoView: [{
      type: Input
    }]
  });
})();
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
      standalone: true,
      selector: "[tuiScrollRef]",
      providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)]
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
      standalone: true,
      selector: "[tuiScrollable]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-services.mjs
var _TuiBreakpointService = class _TuiBreakpointService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.media = inject(TUI_MEDIA);
    this.sorted = Object.values(this.media).sort((a, b) => a - b);
    this.invert = Object.keys(this.media).reduce((ret, key) => __spreadProps(__spreadValues({}, ret), {
      [this.media[key]]: key
    }), {});
    this.stream$ = inject(TUI_WINDOW_SIZE).pipe(map(({
      width
    }) => this.sorted.find((size) => size > width)), map((key) => this.invert[key || this.sorted[this.sorted.length - 1] || 0] ?? null), distinctUntilChanged(), tuiZoneOptimized(), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
};
_TuiBreakpointService.\u0275fac = function TuiBreakpointService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiBreakpointService)();
};
_TuiBreakpointService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiBreakpointService,
  factory: _TuiBreakpointService.\u0275fac,
  providedIn: "root"
});
var TuiBreakpointService = _TuiBreakpointService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBreakpointService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var _TuiDarkThemeService = class _TuiDarkThemeService extends Observable {
  constructor() {
    const media = inject(WA_WINDOW).matchMedia("(prefers-color-scheme: dark)");
    const media$ = fromEvent(media, "change").pipe(startWith(null), map(() => media.matches), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
    super((subscriber) => media$.subscribe(subscriber));
  }
};
_TuiDarkThemeService.\u0275fac = function TuiDarkThemeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDarkThemeService)();
};
_TuiDarkThemeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiDarkThemeService,
  factory: _TuiDarkThemeService.\u0275fac,
  providedIn: "root"
});
var TuiDarkThemeService = _TuiDarkThemeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDarkThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var _TuiFormatDateService = class _TuiFormatDateService {
  constructor() {
    this.locale = inject(LOCALE_ID);
  }
  format(timestamp) {
    return of(new Date(timestamp).toLocaleTimeString(this.locale, {
      hour: "numeric",
      minute: "2-digit"
    }));
  }
};
_TuiFormatDateService.\u0275fac = function TuiFormatDateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiFormatDateService)();
};
_TuiFormatDateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiFormatDateService,
  factory: _TuiFormatDateService.\u0275fac,
  providedIn: "root"
});
var TuiFormatDateService = _TuiFormatDateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatDateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _TuiPositionService = class _TuiPositionService extends Observable {
  constructor() {
    const animationFrame$ = inject(WA_ANIMATION_FRAME);
    const zone = inject(NgZone);
    super((subscriber) => animationFrame$.pipe(startWith(null), map(() => this.accessor.getPosition(this.el.getBoundingClientRect(), this.el)), tuiZonefree(zone), finalize(() => this.accessor.getPosition(EMPTY_CLIENT_RECT))).subscribe(subscriber));
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
  }], function() {
    return [];
  }, null);
})();
var _TuiVisualViewportService = class _TuiVisualViewportService {
  constructor() {
    this.isWebkit = inject(TUI_IS_WEBKIT);
    this.win = inject(WA_WINDOW);
  }
  // https://bugs.webkit.org/show_bug.cgi?id=207089
  correct(point) {
    return this.isWebkit ? [point[0] + (this.win.visualViewport?.offsetTop ?? 0), point[1] + (this.win.visualViewport?.offsetLeft ?? 0)] : point;
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

// node_modules/@taiga-ui/polymorpheus/fesm2022/taiga-ui-polymorpheus.mjs
var POLYMORPHEUS_CONTEXT = new InjectionToken("");
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
      providers: [{
        provide: POLYMORPHEUS_CONTEXT,
        useValue
      }]
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
      standalone: true,
      selector: "ng-template[polymorpheus]",
      inputs: ["polymorpheus"],
      exportAs: "polymorpheus"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
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
    this.c?.injector.get(ChangeDetectorRef).markForCheck();
    if (!content) {
      return;
    }
    this.vcr.clear();
    const proxy = context && new Proxy(ensureContext(context), {
      get: (_, key) => ensureContext(this.getContext())?.[key]
    });
    if (isComponent(this.content)) {
      this.process(this.content, proxy);
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
    if (isTemplate(this.content) || isComponent(this.content)) {
      return this.context;
    }
    return new PolymorpheusContext(typeof this.content === "function" ? this.content(this.context ?? {}) : this.content);
  }
  process(content, proxy) {
    const injector = content.createInjector(this.i, proxy);
    this.c = this.vcr.createComponent(content.component, {
      injector
    });
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
      standalone: true,
      selector: "[polymorpheusOutlet]"
    }]
  }], null, {
    content: [{
      type: Input,
      args: ["polymorpheusOutlet"]
    }],
    context: [{
      type: Input,
      args: ["polymorpheusOutletContext"]
    }]
  });
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
  if (context && isPrimitive(context)) {
    return new PolymorpheusContext(context);
  }
  return context;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-dom.mjs
function tuiCheckFixedPosition(element) {
  return !!element && (isFixed(element) || tuiCheckFixedPosition(element.parentElement));
}
function isFixed(element) {
  return element.ownerDocument.defaultView?.getComputedStyle(element).getPropertyValue("position") === "fixed";
}
function tuiGetViewportWidth({
  document: document2,
  innerWidth
}) {
  return Math.max(document2.documentElement.clientWidth || 0, innerWidth || 0);
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
    } = iframe.ownerDocument?.defaultView || {};
    iframe.width = `${innerWidth === outerWidth ? innerWidth : innerWidth / devicePixelRatio}`;
  };
  iframe.ownerDocument?.body.append(iframe);
  iframe.ownerDocument?.defaultView?.addEventListener("resize", resize);
  const doc = iframe.contentDocument;
  const observer = new ResizeObserver(() => callback(doc?.body.offsetHeight || 0));
  Object.assign(iframe.style, IFRAME);
  Object.assign(doc?.body.style || {}, BODY);
  doc?.documentElement.style.setProperty("font", "-apple-system-body");
  doc?.body.insertAdjacentText("beforeend", ".".repeat(1e3));
  observer.observe(doc?.body || iframe);
  resize();
  return () => {
    observer.disconnect();
    iframe.ownerDocument?.defaultView?.removeEventListener("resize", resize);
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
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-miscellaneous.mjs
var TUI_FONT_OFFSET = new InjectionToken(ngDevMode ? "TUI_FONT_OFFSET" : "", {
  factory: () => signal(0)
});
var KEYS = ["Spacebar", "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Left", "Right", "End", "Home"];
function tuiIsEditingKey(key = "") {
  return key.length === 1 || KEYS.includes(key);
}
function tuiIsObscured(el, exceptSelector = "tui-hints") {
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
var SIZES = {
  xxs: 0,
  xs: 1,
  s: 2,
  m: 3,
  l: 4,
  xl: 5,
  xxl: 6
};
function tuiSizeBigger(size, biggerThanSize = "s") {
  return SIZES[size] > SIZES[biggerThanSize];
}
var TUI_ANIMATIONS_DEFAULT_DURATION = 300;
function tuiToAnimationOptions(speed = inject(TUI_ANIMATIONS_SPEED), easing) {
  return {
    value: "",
    params: {
      duration: tuiGetDuration(speed),
      easing
    }
  };
}
function tuiGetDuration(speed) {
  return speed && TUI_ANIMATIONS_DEFAULT_DURATION / speed;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-services.mjs
var _TuiIdService = class _TuiIdService {
  generate() {
    return `tui_${_TuiIdService.autoId++}${Date.now().toString(36)}`;
  }
};
_TuiIdService.autoId = 0;
_TuiIdService.\u0275fac = function TuiIdService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiIdService)();
};
_TuiIdService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiIdService,
  factory: _TuiIdService.\u0275fac,
  providedIn: "root"
});
var TuiIdService = _TuiIdService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIdService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function tuiInjectId() {
  return inject(TuiIdService).generate();
}
var _TuiPopoverService = class _TuiPopoverService {
  constructor(items, component, options = {}) {
    this.options = options;
    this.id = inject(TuiIdService);
    this.component = new PolymorpheusComponent(component, inject(INJECTOR$1));
    this.items$ = inject(items);
  }
  open(content, options = {}) {
    return new Observable((observer) => {
      const item = __spreadProps(__spreadValues(__spreadValues({}, this.options), options), {
        content,
        $implicit: observer,
        component: this.component,
        createdAt: Date.now(),
        id: this.id.generate(),
        completeWith: (result) => {
          observer.next(result);
          observer.complete();
        }
      });
      this.items$.next([...this.items$.value, item]);
      return () => {
        this.items$.next(this.items$.value.filter((value) => value !== item));
      };
    });
  }
};
_TuiPopoverService.\u0275fac = function TuiPopoverService_Factory(__ngFactoryType__) {
  \u0275\u0275invalidFactory();
};
_TuiPopoverService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiPopoverService,
  factory: _TuiPopoverService.\u0275fac
});
var TuiPopoverService = _TuiPopoverService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopoverService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0
    }, {
      type: void 0
    }, {
      type: void 0
    }];
  }, null);
})();
function tuiAsPopover(popover) {
  return tuiProvide(TuiPopoverService, popover);
}
var SCROLL_TIME = 300;
function getX(elementOrWindow) {
  return "scrollX" in elementOrWindow ? elementOrWindow.scrollX : elementOrWindow.scrollLeft;
}
function getY(elementOrWindow) {
  return "scrollY" in elementOrWindow ? elementOrWindow.scrollY : elementOrWindow.scrollTop;
}
var _TuiScrollService = class _TuiScrollService {
  constructor() {
    this.performanceRef = inject(WA_PERFORMANCE);
    this.animationFrame$ = inject(WA_ANIMATION_FRAME);
    this.zone = inject(NgZone);
  }
  scroll$(elementOrWindow, scrollTop, scrollLeft = getX(elementOrWindow), duration = SCROLL_TIME) {
    ngDevMode && console.assert(duration >= 0, "duration cannot be negative");
    ngDevMode && console.assert(scrollTop >= 0, "scrollTop cannot be negative");
    ngDevMode && console.assert(scrollLeft >= 0, "scrollLeft cannot be negative");
    const initialTop = getY(elementOrWindow);
    const initialLeft = getX(elementOrWindow);
    const deltaTop = scrollTop - initialTop;
    const deltaLeft = scrollLeft - initialLeft;
    const observable = !duration ? of([scrollTop, scrollLeft]) : defer(() => of(this.performanceRef.now())).pipe(switchMap((start) => this.animationFrame$.pipe(map((now) => now - start))), map((elapsed) => tuiEaseInOutQuad(tuiClamp(elapsed / duration, 0, 1))), map((percent) => [initialTop + deltaTop * percent, initialLeft + deltaLeft * percent]), takeUntil(timer(duration, tuiZonefreeScheduler(this.zone))), endWith([scrollTop, scrollLeft]));
    return observable.pipe(tap(([scrollTop2, scrollLeft2]) => {
      elementOrWindow.scrollTo?.(scrollLeft2, scrollTop2);
    }));
  }
};
_TuiScrollService.\u0275fac = function TuiScrollService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiScrollService)();
};
_TuiScrollService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiScrollService,
  factory: _TuiScrollService.\u0275fac,
  providedIn: "root"
});
var TuiScrollService = _TuiScrollService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TUI_THEME_COLOR = new InjectionToken(ngDevMode ? "TUI_THEME_COLOR" : "", {
  factory: () => inject(Meta).getTag('name="theme-color"')?.content ?? ""
});
var _TuiThemeColorService = class _TuiThemeColorService {
  constructor() {
    this.current = inject(TUI_THEME_COLOR);
    this.doc = inject(DOCUMENT);
    this.meta = inject(Meta);
    this.color = this.current;
  }
  get color() {
    return this.current;
  }
  set color(content) {
    this.current = content;
    this.meta.updateTag({
      name: "theme-color",
      content
    });
    this.doc.documentElement.style.setProperty("--tui-theme-color", content);
  }
};
_TuiThemeColorService.\u0275fac = function TuiThemeColorService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiThemeColorService)();
};
_TuiThemeColorService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiThemeColorService,
  factory: _TuiThemeColorService.\u0275fac,
  providedIn: "root"
});
var TuiThemeColorService = _TuiThemeColorService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiThemeColorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();

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
  }], function() {
    return [];
  }, null);
})();
var _TuiObscured = class _TuiObscured {
  constructor() {
    this.activeZone = inject(TuiActiveZone, {
      optional: true
    });
    this.enabled$ = new BehaviorSubject(false);
    this.obscured$ = inject(TuiObscuredService, {
      self: true
    }).pipe(
      // TODO: Refactor so that dropdowns and dialogs work properly without hacks
      map((by) => !!by?.every((el) => el.closest("tui-dialogs") || !this.activeZone?.contains(el)))
    );
    this.tuiObscured = this.enabled$.pipe(tuiIfMap(() => this.obscured$));
  }
  set tuiObscuredEnabled(enabled) {
    this.enabled$.next(enabled);
  }
};
_TuiObscured.\u0275fac = function TuiObscured_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiObscured)();
};
_TuiObscured.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiObscured,
  selectors: [["", "tuiObscured", ""]],
  inputs: {
    tuiObscuredEnabled: "tuiObscuredEnabled"
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
      standalone: true,
      selector: "[tuiObscured]",
      providers: [TuiObscuredService]
    }]
  }], null, {
    tuiObscured: [{
      type: Output
    }],
    tuiObscuredEnabled: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-dropdown.mjs
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
  }], function() {
    return [];
  }, null);
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
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();
var TUI_DROPDOWN_COMPONENT = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_COMPONENT" : "", {
  factory: () => TuiDropdownComponent
});
var TUI_DROPDOWN_CONTEXT = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_CONTEXT" : "");
var TUI_DROPDOWN_HOST = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_HOST" : "");
var _TuiDropdownService = class _TuiDropdownService extends TuiPortalService {
};
_TuiDropdownService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiDropdownService_BaseFactory;
  return function TuiDropdownService_Factory(__ngFactoryType__) {
    return (\u0275TuiDropdownService_BaseFactory || (\u0275TuiDropdownService_BaseFactory = \u0275\u0275getInheritedFactory(_TuiDropdownService)))(__ngFactoryType__ || _TuiDropdownService);
  };
})();
_TuiDropdownService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiDropdownService,
  factory: _TuiDropdownService.\u0275fac,
  providedIn: "root"
});
var TuiDropdownService = _TuiDropdownService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TUI_DROPDOWN_DEFAULT_OPTIONS = {
  align: "left",
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
      standalone: true,
      selector: "[tuiDropdownAlign], [tuiDropdownAppearance], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight], [tuiDropdownMaxHeight], [tuiDropdownOffset]",
      providers: [tuiProvide(TUI_DROPDOWN_OPTIONS, TuiDropdownOptionsDirective)]
    }]
  }], null, {
    align: [{
      type: Input,
      args: ["tuiDropdownAlign"]
    }],
    appearance: [{
      type: Input,
      args: ["tuiDropdownAppearance"]
    }],
    direction: [{
      type: Input,
      args: ["tuiDropdownDirection"]
    }],
    limitWidth: [{
      type: Input,
      args: ["tuiDropdownLimitWidth"]
    }],
    minHeight: [{
      type: Input,
      args: ["tuiDropdownMinHeight"]
    }],
    maxHeight: [{
      type: Input,
      args: ["tuiDropdownMaxHeight"]
    }],
    offset: [{
      type: Input,
      args: ["tuiDropdownOffset"]
    }]
  });
})();
var _TuiDropdownPosition = class _TuiDropdownPosition extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.el = tuiInjectElement();
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.viewport = inject(TUI_VIEWPORT);
    this.directionChange = new EventEmitter();
    this.type = "dropdown";
    this.accessor = tuiFallbackAccessor("dropdown")(inject(TuiRectAccessor), inject(TuiDropdownDirective, {
      optional: true
    }));
  }
  emitDirection(direction) {
    this.directionChange.emit(direction);
  }
  getPosition({
    width,
    height
  }) {
    if (!width && !height) {
      this.previous = void 0;
    }
    const hostRect = this.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
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
      this.emitDirection(previous);
      return [position[previous], position[align]];
    }
    this.previous = better;
    this.emitDirection(better);
    return [position[better], position[align]];
  }
  getAlign(align) {
    const rtl = this.el.matches('[dir="rtl"] :scope');
    if (rtl && align === "left") {
      return "right";
    }
    return rtl && align === "right" ? "left" : align;
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
    directionChange: "tuiDropdownDirectionChange"
  },
  features: [\u0275\u0275InheritDefinitionFeature]
});
var TuiDropdownPosition = _TuiDropdownPosition;
__decorate([tuiPure], TuiDropdownPosition.prototype, "emitDirection", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPosition, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    directionChange: [{
      type: Output,
      args: ["tuiDropdownDirectionChange"]
    }],
    emitDirection: []
  });
})();
var _TuiDropdownA11y = class _TuiDropdownA11y {
  constructor() {
    this.id = inject(TuiIdService).generate();
    this.host = inject(TUI_DROPDOWN_HOST);
    this.dropdown = inject(TuiDropdownDirective);
    this.sync = effect(() => {
      const content = this.dropdown._content();
      const dropdown = this.dropdown.ref();
      const host = this.host.nativeElement;
      host.setAttribute("aria-expanded", String(!!dropdown));
      host.setAttribute("aria-controls", this.id);
      host.setAttribute("aria-haspopup", this._tuiDropdownRole());
      if (host.matches("input")) {
        if (content) {
          host.setAttribute("role", "combobox");
        } else {
          host.removeAttribute("role");
        }
      }
      dropdown?.location.nativeElement.setAttribute("role", this._tuiDropdownRole());
      dropdown?.location.nativeElement.setAttribute("id", this.id);
      if (content) {
        return;
      }
      host.removeAttribute("aria-expanded");
      host.removeAttribute("aria-controls");
      host.removeAttribute("aria-haspopup");
    });
    this._tuiDropdownRole = signal("listbox");
  }
  set tuiDropdownRole(role) {
    this._tuiDropdownRole.set(role);
  }
};
_TuiDropdownA11y.\u0275fac = function TuiDropdownA11y_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownA11y)();
};
_TuiDropdownA11y.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownA11y,
  selectors: [["", "tuiDropdownA11y", ""]],
  inputs: {
    tuiDropdownRole: "tuiDropdownRole"
  }
});
var TuiDropdownA11y = _TuiDropdownA11y;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownA11y, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownA11y]"
    }]
  }], null, {
    tuiDropdownRole: [{
      type: Input
    }]
  });
})();
var _TuiDropdownDirective = class _TuiDropdownDirective {
  constructor() {
    this.refresh$ = new Subject();
    this.service = inject(TuiDropdownService);
    this.cdr = inject(ChangeDetectorRef);
    this.drivers = coerceArray(inject(TuiDropdownDriver, {
      self: true,
      optional: true
    }));
    this.sub = this.refresh$.pipe(throttleTime(0, tuiZonefreeScheduler()), takeUntilDestroyed()).subscribe(() => {
      this.ref()?.changeDetectorRef.detectChanges();
      this.ref()?.changeDetectorRef.markForCheck();
    });
    this.el = tuiInjectElement();
    this.type = "dropdown";
    this.component = new PolymorpheusComponent(inject(TUI_DROPDOWN_COMPONENT), inject(INJECTOR$1));
    this.ref = signal(null);
    this._content = signal(null);
  }
  set tuiDropdown(content) {
    this._content.set(content instanceof TemplateRef ? new PolymorpheusTemplate(content, this.cdr) : content);
    if (!this._content()) {
      this.toggle(false);
    }
  }
  get position() {
    return tuiCheckFixedPosition(this.el) ? "fixed" : "absolute";
  }
  // TODO(v5): delete
  get content() {
    return this._content();
  }
  // TODO(v5): delete
  set content(x) {
    this._content.set(x);
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
    if (show && this._content() && !ref) {
      this.ref.set(this.service.add(this.component));
    } else if (!show && ref) {
      this.ref.set(null);
      this.service.remove(ref);
    }
    this.drivers.forEach((driver) => driver?.next(show));
    this.cdr.markForCheck();
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
    tuiDropdown: "tuiDropdown"
  },
  exportAs: ["tuiDropdown"],
  features: [\u0275\u0275ProvidersFeature([tuiAsRectAccessor(_TuiDropdownDirective), tuiAsVehicle(_TuiDropdownDirective), tuiProvide(TUI_DROPDOWN_HOST, ElementRef)]), \u0275\u0275HostDirectivesFeature([TuiDropdownDriverDirective, {
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
      standalone: true,
      selector: "[tuiDropdown]:not(ng-container):not(ng-template)",
      providers: [tuiAsRectAccessor(TuiDropdownDirective), tuiAsVehicle(TuiDropdownDirective), tuiProvide(TUI_DROPDOWN_HOST, ElementRef)],
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
  }], null, {
    tuiDropdown: [{
      type: Input
    }]
  });
})();
var MAX_WIDTH_GAP = 16;
var _TuiDropdownComponent = class _TuiDropdownComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.accessor = inject(TuiRectAccessor);
    this.viewport = inject(TUI_VIEWPORT);
    this.vvs = inject(TuiVisualViewportService);
    this.styles$ = inject(TuiPositionService).pipe(takeWhile(() => this.directive.el.isConnected && !!this.directive.el.getBoundingClientRect().height), map((v) => this.position === "fixed" ? this.vvs.correct(v) : v), map(([top, left]) => this.getStyles(left, top)), takeUntilDestroyed());
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
    const rect = this.accessor.getClientRect();
    const viewport = this.viewport.getClientRect();
    const zoom = this.directive.el?.currentCSSZoom || 1;
    const above = rect.top - viewport.top - 2 * offset;
    const below = viewport.top + viewport.height - y - offset;
    const available = y > rect.bottom ? below : above;
    const height = this.el.getBoundingClientRect().right <= rect.left || x >= rect.right ? maxHeight : tuiClamp(available, minHeight, maxHeight);
    y -= top;
    x -= left;
    return {
      position: this.position,
      top: tuiPx(Math.round(Math.max(y, offset - top) / zoom)),
      left: tuiPx(Math.round(x / zoom)),
      maxHeight: tuiPx(Math.round(height / zoom)),
      width: limitWidth === "fixed" ? tuiPx(Math.round(rect.width / zoom)) : "",
      minWidth: limitWidth === "min" ? tuiPx(Math.round(rect.width / zoom)) : "",
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
  features: [\u0275\u0275ProvidersFeature([TuiPositionService, tuiPositionAccessorFor("dropdown", TuiDropdownPosition), tuiRectAccessorFor("dropdown", TuiDropdownDirective)]), \u0275\u0275HostDirectivesFeature([TuiActiveZone, TuiAnimated])],
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
      \u0275\u0275property("polymorpheusOutlet", ctx.directive._content())("polymorpheusOutletContext", \u0275\u0275pureFunction1(2, _c03, ctx.close));
    }
  },
  dependencies: [PolymorpheusOutlet, TuiScrollbar],
  styles: ["[_nghost-%COMP%]{position:absolute;display:flex;box-shadow:var(--tui-shadow-medium);color:var(--tui-text-primary);background:var(--tui-background-elevation-3);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-border-normal);box-sizing:border-box;isolation:isolate;pointer-events:auto;--tui-from: translateY(-1rem)}.tui-enter[_nghost-%COMP%], .tui-leave[_nghost-%COMP%]{animation-name:tuiFade,tuiSlide}[_nghost-%COMP%]:not([style*=top]){visibility:hidden}.t-scroll[_ngcontent-%COMP%]{flex-grow:1;max-inline-size:100%;inline-size:-webkit-max-content;inline-size:max-content;overscroll-behavior:none}.t-primitive[_ngcontent-%COMP%]{padding:1rem}"]
});
var TuiDropdownComponent = _TuiDropdownComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dropdown",
      imports: [PolymorpheusOutlet, TuiScrollbar],
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiPositionService, tuiPositionAccessorFor("dropdown", TuiDropdownPosition), tuiRectAccessorFor("dropdown", TuiDropdownDirective)],
      hostDirectives: [TuiActiveZone, TuiAnimated],
      host: {
        "[attr.data-appearance]": "options.appearance",
        "[attr.tuiTheme]": "theme()"
      },
      template: '<tui-scrollbar class="t-scroll">\n    <div\n        *polymorpheusOutlet="directive._content() as text; context: {$implicit: close}"\n        class="t-primitive"\n    >\n        {{ text }}\n    </div>\n</tui-scrollbar>\n',
      styles: [":host{position:absolute;display:flex;box-shadow:var(--tui-shadow-medium);color:var(--tui-text-primary);background:var(--tui-background-elevation-3);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-border-normal);box-sizing:border-box;isolation:isolate;pointer-events:auto;--tui-from: translateY(-1rem)}:host.tui-enter,:host.tui-leave{animation-name:tuiFade,tuiSlide}:host:not([style*=top]){visibility:hidden}.t-scroll{flex-grow:1;max-inline-size:100%;inline-size:-webkit-max-content;inline-size:max-content;overscroll-behavior:none}.t-primitive{padding:1rem}\n"]
    }]
  }], null, null);
})();
var _TuiDropdownContext = class _TuiDropdownContext extends TuiRectAccessor {
  constructor() {
    super(...arguments);
    this.zone = inject(NgZone);
    this.isTouch = inject(TUI_IS_TOUCH);
    this.currentRect = EMPTY_CLIENT_RECT;
    this.userSelect = computed(() => this.isTouch() ? "none" : null);
    this.activeZone = inject(TuiActiveZone);
    this.driver = inject(TuiDropdownDriver);
    this.doc = inject(DOCUMENT);
    this.sub = merge(tuiTypedFromEvent(this.doc, "pointerdown"), tuiTypedFromEvent(this.doc, "contextmenu", {
      capture: true
    })).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe((event) => this.closeDropdown(event));
    this.type = "dropdown";
  }
  getClientRect() {
    return this.currentRect;
  }
  closeDropdown(event) {
    if (!event || this.driver.value && !this.activeZone.contains(tuiGetActualTarget(event))) {
      this.zone.run(() => {
        this.driver.next(false);
        this.currentRect = EMPTY_CLIENT_RECT;
      });
    }
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
      \u0275\u0275listener("keydown.esc", function TuiDropdownContext_keydown_esc_HostBindingHandler() {
        return ctx.closeDropdown();
      }, false, \u0275\u0275resolveDocument)("longtap", function TuiDropdownContext_longtap_HostBindingHandler($event) {
        return ctx.onContextMenu($event.detail.clientX, $event.detail.clientY);
      });
    }
    if (rf & 2) {
      \u0275\u0275styleProp("user-select", ctx.userSelect())("-webkit-user-select", ctx.userSelect())("-webkit-touch-callout", ctx.userSelect());
    }
  },
  features: [\u0275\u0275ProvidersFeature([TuiActiveZone, TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiAsRectAccessor(_TuiDropdownContext)]), \u0275\u0275InheritDefinitionFeature]
});
var TuiDropdownContext = _TuiDropdownContext;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownContext, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownContext]",
      providers: [TuiActiveZone, TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiAsRectAccessor(TuiDropdownContext)],
      host: {
        "[style.user-select]": "userSelect()",
        "[style.-webkit-user-select]": "userSelect()",
        "[style.-webkit-touch-callout]": "userSelect()",
        "(document:keydown.esc)": "closeDropdown()",
        "(longtap)": "onContextMenu($event.detail.clientX, $event.detail.clientY)"
      }
    }]
  }], null, null);
})();
var TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS = {
  showDelay: 200,
  hideDelay: 500
};
var TUI_DROPDOWN_HOVER_OPTIONS = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_HOVER_OPTIONS" : "", {
  factory: () => TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS
});
var _TuiDropdownOpen = class _TuiDropdownOpen {
  constructor() {
    this.directive = inject(TuiDropdownDirective);
    this.el = tuiInjectElement();
    this.obscured = inject(TuiObscured);
    this.activeZone = inject(TuiActiveZone);
    this.zone = inject(NgZone);
    this.dropdown = computed(() => this.directive.ref()?.location.nativeElement);
    this.tuiDropdownEnabled = true;
    this.tuiDropdownOpen = false;
    this.tuiDropdownOpenChange = new EventEmitter();
    this.driver = inject(TuiDropdownDriver);
    this.sub = this.driver.pipe(tuiIfMap(() => merge(tuiCloseWatcher(), this.obscured.tuiObscured.pipe(filter(Boolean)), this.activeZone.tuiActiveZoneChange.pipe(filter((a) => !a)), fromEvent(this.el, "focusin").pipe(filter((event) => !this.nativeElement.contains(tuiGetActualTarget(event)) || !this.directive.ref())))), tuiZonefull(), tuiWatch(), takeUntilDestroyed()).subscribe(() => this.toggle(false));
    this.sync = this.driver.pipe(takeUntilDestroyed()).subscribe((open) => {
      if (open !== this.tuiDropdownOpen) {
        this.update(open);
      }
    });
  }
  get nativeElement() {
    const initial = this.dropdownHost?.nativeElement || this.el;
    const focusable = tuiIsKeyboardFocusable(initial) ? initial : tuiGetClosestFocusable({
      initial,
      root: this.el
    });
    return this.dropdownHost?.nativeElement || focusable || this.el;
  }
  ngOnChanges() {
    this.drive(!!this.tuiDropdownOpen);
    this.tuiDropdownOpenChange.emit(!!this.tuiDropdownOpen);
  }
  toggle(open) {
    if (this.focused && !open) {
      this.nativeElement.focus({
        preventScroll: true
      });
    }
    this.update(open);
  }
  onEsc(event) {
    if (
      // @ts-ignore
      typeof CloseWatcher === "undefined" && // ?. for autofill events
      event.key?.toLowerCase() === "escape" && this.tuiDropdownEnabled && !!this.tuiDropdownOpen && !this.dropdown()?.nextElementSibling
    ) {
      this.zone.run(() => {
        event.preventDefault();
        this.toggle(false);
      });
    }
  }
  onClick(target) {
    if (!this.editable && this.nativeElement.contains(target)) {
      this.update(!this.tuiDropdownOpen);
    }
  }
  onArrow(event, up) {
    if (!tuiIsElement(event.target) || !this.nativeElement.contains(event.target) || !this.tuiDropdownEnabled || !this.directive._content()) {
      return;
    }
    event.preventDefault();
    this.focusDropdown(up);
  }
  onKeydown(event) {
    const target = tuiGetActualTarget(event);
    if (!event.defaultPrevented && tuiIsEditingKey(event.key) && this.editable && this.focused && tuiIsHTMLElement(target) && !tuiIsElementEditable(target)) {
      this.nativeElement.focus({
        preventScroll: true
      });
    }
  }
  get editable() {
    return tuiIsElementEditable(this.nativeElement);
  }
  get focused() {
    return tuiIsFocusedIn(this.nativeElement) || tuiIsFocusedIn(this.dropdown());
  }
  update(open) {
    if (open && !this.tuiDropdownEnabled) {
      return this.drive();
    }
    this.tuiDropdownOpen = open;
    this.tuiDropdownOpenChange.emit(open);
    this.drive();
  }
  drive(open = !!this.tuiDropdownOpen && this.tuiDropdownEnabled) {
    this.obscured.tuiObscuredEnabled = open;
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
  selectors: [["", "tuiDropdown", "", "tuiDropdownOpen", ""], ["", "tuiDropdown", "", "tuiDropdownOpenChange", ""]],
  contentQueries: function TuiDropdownOpen_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, _c1, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dropdownHost = _t.first);
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
      })("keydown.zoneless.capture", function TuiDropdownOpen_keydown_zoneless_capture_HostBindingHandler($event) {
        return ctx.onEsc($event);
      }, false, \u0275\u0275resolveDocument)("keydown.zoneless", function TuiDropdownOpen_keydown_zoneless_HostBindingHandler($event) {
        return ctx.onKeydown($event);
      }, false, \u0275\u0275resolveDocument)("tuiActiveZoneChange", function TuiDropdownOpen_tuiActiveZoneChange_HostBindingHandler() {
        return 0;
      });
    }
  },
  inputs: {
    tuiDropdownEnabled: "tuiDropdownEnabled",
    tuiDropdownOpen: "tuiDropdownOpen"
  },
  outputs: {
    tuiDropdownOpenChange: "tuiDropdownOpenChange"
  },
  features: [\u0275\u0275ProvidersFeature([TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiProvide(TUI_DROPDOWN_HOST, _TuiDropdownOpen)]), \u0275\u0275HostDirectivesFeature([TuiObscured, {
    directive: TuiActiveZone,
    inputs: ["tuiActiveZoneParent", "tuiActiveZoneParent"],
    outputs: ["tuiActiveZoneChange", "tuiActiveZoneChange"]
  }]), \u0275\u0275NgOnChangesFeature]
});
var TuiDropdownOpen = _TuiDropdownOpen;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOpen, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdown][tuiDropdownOpen],[tuiDropdown][tuiDropdownOpenChange]",
      providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiProvide(TUI_DROPDOWN_HOST, TuiDropdownOpen)],
      hostDirectives: [TuiObscured, {
        directive: TuiActiveZone,
        inputs: ["tuiActiveZoneParent"],
        outputs: ["tuiActiveZoneChange"]
      }],
      host: {
        "(click)": "onClick($event.target)",
        "(keydown.arrowDown)": "onArrow($event, false)",
        "(keydown.arrowUp)": "onArrow($event, true)",
        "(document:keydown.zoneless.capture)": "onEsc($event)",
        "(document:keydown.zoneless)": "onKeydown($event)",
        // TODO: Necessary because startWith(false) + distinctUntilChanged() in TuiActiveZone, think of better solution
        "(tuiActiveZoneChange)": "0"
      }
    }]
  }], null, {
    dropdownHost: [{
      type: ContentChild,
      args: ["tuiDropdownHost", {
        descendants: true,
        read: ElementRef
      }]
    }],
    tuiDropdownEnabled: [{
      type: Input
    }],
    tuiDropdownOpen: [{
      type: Input
    }],
    tuiDropdownOpenChange: [{
      type: Output
    }]
  });
})();
var _TuiDropdownHover = class _TuiDropdownHover extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.doc = inject(DOCUMENT);
    this.options = inject(TUI_DROPDOWN_HOVER_OPTIONS);
    this.activeZone = inject(TuiActiveZone);
    this.open = inject(TuiDropdownOpen, {
      optional: true
    });
    this.dropdownExternalRemoval$ = toObservable(inject(TuiDropdownDirective).ref).pipe(filter((x) => !x && this.hovered));
    this.stream$ = merge(this.dropdownExternalRemoval$.pipe(switchMap(() => tuiTypedFromEvent(this.doc, "pointerdown").pipe(map(tuiGetActualTarget), delay(this.hideDelay), startWith(null), takeUntil(fromEvent(this.doc, "mouseover"))))), tuiTypedFromEvent(this.doc, "mouseover").pipe(map(tuiGetActualTarget)), tuiTypedFromEvent(this.doc, "mouseout").pipe(map((e) => e.relatedTarget))).pipe(map((element) => tuiIsElement(element) && this.isHovered(element)), distinctUntilChanged(), switchMap((visible) => of(visible).pipe(delay(visible ? this.showDelay : this.hideDelay), takeUntil(this.open ? fromEvent(this.el, "pointerdown") : EMPTY))), tuiZoneOptimized(), tap((hovered) => {
      this.hovered = hovered;
      this.open?.toggle(hovered);
    }), share());
    this.showDelay = this.options.showDelay;
    this.hideDelay = this.options.hideDelay;
    this.hovered = false;
    this.type = "dropdown";
  }
  onClick(event) {
    if (this.hovered && this.open) {
      event.preventDefault();
    }
  }
  isHovered(element) {
    const host = this.dropdownHost?.nativeElement || this.el;
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
      \u0275\u0275contentQuery(dirIndex, _c1, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dropdownHost = _t.first);
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
    showDelay: [0, "tuiDropdownShowDelay", "showDelay"],
    hideDelay: [0, "tuiDropdownHideDelay", "hideDelay"]
  },
  features: [\u0275\u0275ProvidersFeature([TuiActiveZone, tuiAsDriver(_TuiDropdownHover)]), \u0275\u0275InheritDefinitionFeature]
});
var TuiDropdownHover = _TuiDropdownHover;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownHover, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownHover]",
      providers: [TuiActiveZone, tuiAsDriver(TuiDropdownHover)],
      host: {
        "(click.capture)": "onClick($event)"
      }
    }]
  }], function() {
    return [];
  }, {
    dropdownHost: [{
      type: ContentChild,
      args: ["tuiDropdownHost", {
        descendants: true,
        read: ElementRef
      }]
    }],
    showDelay: [{
      type: Input,
      args: ["tuiDropdownShowDelay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["tuiDropdownHideDelay"]
    }]
  });
})();
var _TuiDropdownManual = class _TuiDropdownManual {
  constructor() {
    this.driver = inject(TuiDropdownDriver);
    this.tuiDropdownManual = false;
  }
  ngOnChanges() {
    this.driver.next(!!this.tuiDropdownManual);
  }
};
_TuiDropdownManual.\u0275fac = function TuiDropdownManual_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownManual)();
};
_TuiDropdownManual.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownManual,
  selectors: [["", "tuiDropdownManual", ""]],
  inputs: {
    tuiDropdownManual: "tuiDropdownManual"
  },
  features: [\u0275\u0275ProvidersFeature([TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]), \u0275\u0275NgOnChangesFeature]
});
var TuiDropdownManual = _TuiDropdownManual;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownManual, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownManual]",
      providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]
    }]
  }], null, {
    tuiDropdownManual: [{
      type: Input
    }]
  });
})();
var _TuiDropdownOpenLegacy = class _TuiDropdownOpenLegacy {
  constructor() {
    this.openStateSub = new Subject();
    this.tuiDropdownOpenChange = this.openStateSub.pipe(distinctUntilChanged());
  }
  set tuiDropdownOpen(open) {
    this.emitOpenChange(open);
  }
  emitOpenChange(open) {
    this.openStateSub.next(open);
  }
};
_TuiDropdownOpenLegacy.\u0275fac = function TuiDropdownOpenLegacy_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownOpenLegacy)();
};
_TuiDropdownOpenLegacy.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownOpenLegacy,
  selectors: [["", "tuiDropdownOpen", "", 3, "tuiDropdown", ""], ["", "tuiDropdownOpenChange", "", 3, "tuiDropdown", ""]],
  inputs: {
    tuiDropdownOpen: "tuiDropdownOpen"
  },
  outputs: {
    tuiDropdownOpenChange: "tuiDropdownOpenChange"
  }
});
var TuiDropdownOpenLegacy = _TuiDropdownOpenLegacy;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOpenLegacy, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownOpen]:not([tuiDropdown]),[tuiDropdownOpenChange]:not([tuiDropdown])"
    }]
  }], null, {
    tuiDropdownOpenChange: [{
      type: Output
    }],
    tuiDropdownOpen: [{
      type: Input
    }]
  });
})();
var _TuiDropdownPortal = class _TuiDropdownPortal {
  constructor() {
    this.template = inject(TemplateRef);
    this.service = inject(TuiDropdownService);
  }
  set tuiDropdown(show) {
    this.viewRef?.destroy();
    if (show) {
      this.viewRef = this.service.addTemplate(this.template);
    }
  }
  ngOnDestroy() {
    this.viewRef?.destroy();
  }
};
_TuiDropdownPortal.\u0275fac = function TuiDropdownPortal_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownPortal)();
};
_TuiDropdownPortal.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDropdownPortal,
  selectors: [["ng-template", "tuiDropdown", ""]],
  inputs: {
    tuiDropdown: "tuiDropdown"
  }
});
var TuiDropdownPortal = _TuiDropdownPortal;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPortal, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiDropdown]"
    }]
  }], null, {
    tuiDropdown: [{
      type: Input
    }]
  });
})();
var _TuiDropdownPositionSided = class _TuiDropdownPositionSided extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.viewport = inject(TUI_VIEWPORT);
    this.vertical = inject(TuiDropdownPosition);
    this.previous = this.options.direction || "bottom";
    this.tuiDropdownSided = "";
    this.tuiDropdownSidedOffset = 4;
    this.type = "dropdown";
  }
  getPosition(rect) {
    if (this.tuiDropdownSided === false) {
      return this.vertical.getPosition(rect);
    }
    const {
      height,
      width
    } = rect;
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
      top: hostRect.bottom - height + this.tuiDropdownSidedOffset + 1,
      left: hostRect.left - width - offset,
      right: hostRect.right + offset,
      bottom: hostRect.top - this.tuiDropdownSidedOffset - 1
      // 1 for border
    };
    const better = available.top > available.bottom ? "top" : "bottom";
    const maxLeft = available.left > available.right ? position.left : position.right;
    const left = available[align] > width ? position[align] : maxLeft;
    if (available[this.previous] > height && direction || this.previous === better) {
      this.vertical.emitDirection(this.previous);
      return [position[this.previous], left];
    }
    this.previous = better;
    this.vertical.emitDirection(better);
    return [position[better], left];
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
    tuiDropdownSided: "tuiDropdownSided",
    tuiDropdownSidedOffset: "tuiDropdownSidedOffset"
  },
  features: [\u0275\u0275ProvidersFeature([TuiDropdownPosition, tuiAsPositionAccessor(_TuiDropdownPositionSided)]), \u0275\u0275InheritDefinitionFeature]
});
var TuiDropdownPositionSided = _TuiDropdownPositionSided;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPositionSided, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownSided]",
      providers: [TuiDropdownPosition, tuiAsPositionAccessor(TuiDropdownPositionSided)]
    }]
  }], null, {
    tuiDropdownSided: [{
      type: Input
    }],
    tuiDropdownSidedOffset: [{
      type: Input
    }]
  });
})();
var _TuiDropdownSelection = class _TuiDropdownSelection extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.doc = inject(DOCUMENT);
    this.vcr = inject(ViewContainerRef);
    this.dropdown = inject(TuiDropdownDirective);
    this.el = tuiInjectElement();
    this.handler$ = new BehaviorSubject(TUI_TRUE_HANDLER);
    this.stream$ = combineLatest([this.handler$, inject(TUI_SELECTION_STREAM).pipe(map(() => this.getRange()), filter((range) => this.isValid(range)), distinctUntilChanged((x, y) => x.startOffset === y.startOffset && x.endOffset === y.endOffset && x.commonAncestorContainer === y.commonAncestorContainer)), merge(fromEvent(this.el, "scroll", {
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
    this.range = inject(TUI_RANGE);
    this.position = "selection";
    this.type = "dropdown";
  }
  set tuiDropdownSelection(visible) {
    if (!tuiIsString(visible)) {
      this.handler$.next(visible);
    }
  }
  getClientRect() {
    switch (this.position) {
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
    ghost.textContent = CHAR_ZERO_WIDTH_SPACE + value + CHAR_NO_BREAK_SPACE;
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
    const fontSize = parseFloat(styles.fontSize) || 16;
    const lineHeight = parseFloat(styles.lineHeight) || fontSize * 1.2;
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
    position: [0, "tuiDropdownSelectionPosition", "position"],
    tuiDropdownSelection: "tuiDropdownSelection"
  },
  features: [\u0275\u0275ProvidersFeature([tuiAsDriver(_TuiDropdownSelection), tuiAsRectAccessor(_TuiDropdownSelection)]), \u0275\u0275InheritDefinitionFeature]
});
var TuiDropdownSelection = _TuiDropdownSelection;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownSelection, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownSelection]",
      providers: [tuiAsDriver(TuiDropdownSelection), tuiAsRectAccessor(TuiDropdownSelection)]
    }]
  }], function() {
    return [];
  }, {
    position: [{
      type: Input,
      args: ["tuiDropdownSelectionPosition"]
    }],
    tuiDropdownSelection: [{
      type: Input
    }]
  });
})();
var TuiDropdown = [TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection, TuiDropdownA11y];
function tuiDropdown(value) {
  return tuiDirectiveBinding(TuiDropdownDirective, "tuiDropdown", value, {});
}
function tuiDropdownEnabled(value) {
  return tuiDirectiveBinding(TuiDropdownOpen, "tuiDropdownEnabled", value, {});
}
function tuiDropdownOpen() {
  const open = tuiDirectiveBinding(TuiDropdownOpen, "tuiDropdownOpen", false, {});
  inject(TuiDropdownOpen).tuiDropdownOpenChange.pipe(takeUntilDestroyed()).subscribe((value) => open.set(value));
  return open;
}
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
      standalone: true,
      providers: [tuiDropdownOptionsProvider({})]
    }]
  }], function() {
    return [];
  }, null);
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
    type: Directive,
    args: [{
      standalone: true
    }]
  }], function() {
    return [];
  }, null);
})();
var _TuiDropdowns = class _TuiDropdowns extends TuiPortals {
};
_TuiDropdowns.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiDropdowns_BaseFactory;
  return function TuiDropdowns_Factory(__ngFactoryType__) {
    return (\u0275TuiDropdowns_BaseFactory || (\u0275TuiDropdowns_BaseFactory = \u0275\u0275getInheritedFactory(_TuiDropdowns)))(__ngFactoryType__ || _TuiDropdowns);
  };
})();
_TuiDropdowns.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiDropdowns,
  selectors: [["tui-dropdowns"]],
  hostAttrs: [2, "position", "absolute", "width", "100%", "top", "0"],
  features: [\u0275\u0275ProvidersFeature([tuiAsPortal(TuiDropdownService)]), \u0275\u0275InheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["viewContainer", ""]],
  template: function TuiDropdowns_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainer(0, null, 0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var TuiDropdowns = _TuiDropdowns;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdowns, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dropdowns",
      template: "<ng-container #viewContainer />",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsPortal(TuiDropdownService)],
      host: {
        style: "position: absolute; width: 100%; top: 0"
      }
    }]
  }], null, null);
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
      standalone: true,
      hostDirectives: [{
        directive: TuiDropdownOpen,
        inputs: ["tuiDropdownOpen: open", "tuiDropdownEnabled"],
        outputs: ["tuiDropdownOpenChange: openChange"]
      }]
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
    const el = this.el.nativeElement.tagName.includes("-") ? this.el.nativeElement.querySelector(this.options.query) : this.el.nativeElement;
    return el || this.el.nativeElement;
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
    const rect = this.element.getBoundingClientRect();
    this.patchFakeInputFromFocusableElement(fakeInput);
    fakeInput.style.height = tuiPx(rect.height);
    fakeInput.style.width = tuiPx(rect.width / 2);
    fakeInput.style.position = "fixed";
    fakeInput.style.zIndex = "-99999999";
    fakeInput.style.caretColor = "transparent";
    fakeInput.style.border = "none";
    fakeInput.style.outline = "none";
    fakeInput.style.color = "transparent";
    fakeInput.style.background = "transparent";
    fakeInput.style.cursor = "none";
    fakeInput.style.fontSize = tuiPx(16);
    fakeInput.style.top = tuiPx(rect.top);
    fakeInput.style.left = tuiPx(rect.left);
    return fakeInput;
  }
  getDurationTimeBeforeFocus() {
    return parseFloat(this.win.getComputedStyle(this.element).getPropertyValue("--tui-duration")) || 0;
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
  delay: NaN,
  query: "input, textarea, select, [contenteditable]",
  preventScroll: false
});
var TUI_AUTOFOCUS_HANDLER = new InjectionToken(ngDevMode ? "TUI_AUTOFOCUS_HANDLER" : "");
var TUI_AUTOFOCUS_PROVIDERS = [{
  provide: TUI_AUTOFOCUS_HANDLER,
  deps: [ElementRef, WA_ANIMATION_FRAME, Renderer2, NgZone, WA_WINDOW, TUI_IS_IOS, TUI_AUTOFOCUS_OPTIONS],
  // eslint-disable-next-line @typescript-eslint/max-params,max-params
  useFactory: (el, animationFrame$, renderer, zone, win, isIos2, options) => isIos2 ? new TuiIosAutofocusHandler(el, renderer, zone, win, options) : new TuiDefaultAutofocusHandler(el, animationFrame$, zone, options)
}];
var _TuiAutoFocus = class _TuiAutoFocus {
  constructor() {
    this.handler = inject(TUI_AUTOFOCUS_HANDLER);
    this.options = inject(TUI_AUTOFOCUS_OPTIONS);
    this.destroyRef = inject(DestroyRef);
  }
  ngAfterViewInit() {
    if (this.autoFocus) {
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
    autoFocus: [2, "tuiAutoFocus", "autoFocus", coerceBooleanProperty]
  },
  features: [\u0275\u0275ProvidersFeature(TUI_AUTOFOCUS_PROVIDERS)]
});
var TuiAutoFocus = _TuiAutoFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutoFocus, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAutoFocus]",
      providers: TUI_AUTOFOCUS_PROVIDERS
    }]
  }], null, {
    autoFocus: [{
      type: Input,
      args: [{
        alias: "tuiAutoFocus",
        transform: coerceBooleanProperty
      }]
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-let.mjs
var TuiLetContext = class {
  constructor(internalDirectiveInstance) {
    this.internalDirectiveInstance = internalDirectiveInstance;
  }
  get $implicit() {
    return this.internalDirectiveInstance.tuiLet;
  }
  get tuiLet() {
    return this.internalDirectiveInstance.tuiLet;
  }
};
var _TuiLet = class _TuiLet {
  constructor() {
    inject(ViewContainerRef).createEmbeddedView(inject(TemplateRef), new TuiLetContext(this));
  }
  /**
   * Asserts the correct type of the context for the template that `TuiLet` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `TuiLet` structural directive renders its template with a specific context type.
   */
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
};
_TuiLet.\u0275fac = function TuiLet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiLet)();
};
_TuiLet.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiLet,
  selectors: [["", "tuiLet", ""]],
  inputs: {
    tuiLet: "tuiLet"
  }
});
var TuiLet = _TuiLet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLet, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiLet]"
    }]
  }], function() {
    return [];
  }, {
    tuiLet: [{
      type: Input
    }]
  });
})();

export {
  WA_MUTATION_OBSERVER_INIT,
  WaMutationObserver,
  WaMutationObserverService,
  TuiAnimated,
  TuiAnimatedParent,
  isApple,
  tuiCreateOptions,
  tuiGetFocused,
  tuiFocusedIn,
  tuiIsMouseFocusable,
  tuiGetClosestFocusable,
  tuiIsFocused,
  tuiIsFocusedIn,
  tuiMoveFocus,
  TuiTransitioned,
  TUI_APPEARANCE_OPTIONS,
  tuiAppearanceOptionsProvider,
  TuiAppearance,
  tuiAppearance,
  tuiAppearanceState,
  tuiAppearanceFocus,
  tuiAppearanceMode,
  TuiWithAppearance,
  TUI_FIRST_DAY,
  TUI_LAST_DAY,
  TUI_REDUCED_MOTION,
  TUI_ANIMATIONS_SPEED,
  TUI_ASSETS_PATH,
  TUI_AUXILIARY,
  tuiAsAuxiliary,
  TUI_COMMON_ICONS,
  TUI_DARK_MODE,
  TUI_MONTHS,
  TUI_CLOSE_WORD,
  TUI_CLEAR_WORD,
  TUI_NOTHING_FOUND_MESSAGE,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_ICON_START,
  TUI_ICON_END,
  tuiInjectIconResolver,
  TUI_DEFAULT_NUMBER_FORMAT,
  TUI_NUMBER_FORMAT,
  TUI_SCROLL_REF,
  TUI_SELECTION_STREAM,
  TUI_THEME,
  TUI_VIEWPORT,
  tuiAsViewport,
  TuiIcons,
  TuiWithIcons,
  tuiButtonOptionsProvider,
  TuiButton,
  tuiLinkOptionsProvider,
  TuiLink,
  POLYMORPHEUS_CONTEXT,
  injectContext,
  PolymorpheusComponent,
  PolymorpheusTemplate,
  PolymorpheusOutlet,
  trigger,
  animate,
  sequence,
  style,
  transition,
  animateChild,
  query,
  stagger,
  NoopAnimationDriver,
  AnimationDriver,
  AnimationStyleNormalizer,
  WebAnimationsStyleNormalizer,
  AnimationEngine,
  WebAnimationsDriver,
  AnimationRendererFactory,
  TUI_BASE_HREF,
  TUI_IS_MOBILE,
  TUI_IS_IOS,
  TUI_IS_ANDROID,
  TUI_PLATFORM,
  TUI_IS_PLAYWRIGHT,
  TUI_IS_E2E,
  tuiFallbackValueProvider,
  TUI_RANGE,
  TuiIdService,
  tuiInjectId,
  TuiPopoverService,
  tuiAsPopover,
  TuiIcon,
  TuiActiveZone,
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
  TUI_SCROLLBAR_OPTIONS,
  tuiScrollbarOptionsProvider,
  TuiScrollControls,
  TuiScrollbar,
  TuiScrollIntoView,
  TuiScrollRef,
  TuiBreakpointService,
  TuiPositionService,
  TuiVisualViewportService,
  tuiGetViewportWidth,
  tuiGetWordRange,
  TuiFontSize,
  tuiIsObscured,
  tuiOverrideOptions,
  tuiSizeBigger,
  TUI_ANIMATIONS_DEFAULT_DURATION,
  tuiToAnimationOptions,
  tuiGetDuration,
  TuiValueTransformer,
  tuiValueTransformerFrom,
  TUI_IDENTITY_VALUE_TRANSFORMER,
  TuiControl,
  tuiAsControl,
  TuiPortals,
  TuiPortalService,
  tuiAsPortal,
  TuiValidationError,
  TuiDropdownDriverDirective,
  TuiDropdownService,
  tuiDropdownOptionsProvider,
  TuiDropdownOptionsDirective,
  TuiDropdownPosition,
  TuiDropdownA11y,
  TuiDropdownDirective,
  TuiDropdownComponent,
  TuiDropdownContext,
  TuiDropdownOpen,
  TuiDropdownHover,
  TuiDropdownManual,
  TuiDropdownOpenLegacy,
  TuiDropdownPortal,
  TuiDropdownPositionSided,
  TuiDropdownSelection,
  TuiDropdown,
  tuiDropdown,
  tuiDropdownEnabled,
  tuiDropdownOpen,
  TuiDropdownFixed,
  TuiDropdowns,
  TuiWithDropdownOpen,
  TuiLet,
  tuiAutoFocusOptionsProvider,
  TuiAutoFocus
};
/*! Bundled license information:

@angular/animations/fesm2022/private_export-faY_wCkZ.mjs:
@angular/animations/fesm2022/util-D9FfmVnv.mjs:
@angular/animations/fesm2022/browser.mjs:
  (**
   * @license Angular v19.2.21
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-QA7BIT47.js.map
