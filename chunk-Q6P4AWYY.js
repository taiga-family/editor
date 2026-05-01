import {
  TuiDialogs
} from "./chunk-UHHDJT7R.js";
import {
  TuiAlerts
} from "./chunk-WBFFCQ2B.js";
import {
  TuiHints
} from "./chunk-EQTN4WLW.js";
import {
  TUI_ANIMATIONS_SPEED,
  TUI_IS_MOBILE,
  TUI_PLATFORM,
  TUI_REDUCED_MOTION,
  TUI_SCROLLBAR_OPTIONS,
  TUI_THEME,
  TuiActiveZone,
  TuiBreakpointService,
  TuiDropdowns,
  TuiFontSize,
  TuiPortalService,
  TuiPortals,
  TuiScrollControls,
  TuiWithAppearance,
  TuiWithIcons,
  tuiAppearanceOptionsProvider,
  tuiAsPortal,
  tuiGetDuration
} from "./chunk-QA7BIT47.js";
import {
  EVENT_MANAGER_PLUGINS
} from "./chunk-GJ4XEV4D.js";
import {
  tuiWatch
} from "./chunk-Z64UTBP3.js";
import {
  DOCUMENT,
  NgIf,
  TUI_VERSION,
  WA_WINDOW,
  WINDOW,
  takeUntilDestroyed,
  toSignal,
  tuiInjectElement,
  tuiProvideOptions,
  tuiPx,
  tuiWithStyles
} from "./chunk-P325F6NW.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Injectable,
  InjectionToken,
  Input,
  RendererFactory2,
  TemplateRef,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresolveDocument,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-MN3TG6GQ.js";
import {
  EMPTY,
  Observable,
  filter,
  fromEvent,
  map,
  merge,
  shareReplay,
  startWith
} from "./chunk-CJ7OSSQR.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-platform.mjs
var _TuiPlatform = class _TuiPlatform {
  constructor() {
    this.tuiPlatform = inject(TUI_PLATFORM, {
      skipSelf: true
    });
  }
};
_TuiPlatform.\u0275fac = function TuiPlatform_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPlatform)();
};
_TuiPlatform.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiPlatform,
  selectors: [["", "tuiPlatform", ""]],
  hostVars: 1,
  hostBindings: function TuiPlatform_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-platform", ctx.tuiPlatform);
    }
  },
  inputs: {
    tuiPlatform: "tuiPlatform"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: TUI_PLATFORM,
    useFactory: () => inject(_TuiPlatform).tuiPlatform
  }])]
});
var TuiPlatform = _TuiPlatform;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPlatform, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiPlatform]",
      providers: [{
        provide: TUI_PLATFORM,
        useFactory: () => inject(TuiPlatform).tuiPlatform
      }],
      host: {
        "[attr.data-platform]": "tuiPlatform"
      }
    }]
  }], null, {
    tuiPlatform: [{
      type: Input
    }]
  });
})();

// node_modules/@ng-web-apis/screen-orientation/fesm2022/ng-web-apis-screen-orientation.mjs
var ScreenOrientationService = class _ScreenOrientationService extends Observable {
  win = inject(WA_WINDOW);
  stream$ = (this.isModern ? fromEvent(this.win.screen.orientation, "change").pipe(startWith(null), map(() => (
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation
     * The type read-only property of the ScreenOrientation interface returns the document's current orientation type,
     * one of "portrait-primary", "portrait-secondary", "landscape-primary", or "landscape-secondary".
     *
     * Browser compatibility:
     * Safari 16.4+, Chrome 38+, Firefox 43+
     */
    this.win.screen.orientation.type
  ))) : fromEvent(this.win, "orientationchange").pipe(startWith(null), map(() => {
    const angle = parseInt(this.win.orientation, 10);
    switch (angle) {
      case -90:
        return "landscape-secondary";
      case 180:
        return "portrait-secondary";
      case 90:
        return "landscape-primary";
      case 0:
      default:
        return "portrait-primary";
    }
  }))).pipe(shareReplay({
    bufferSize: 1,
    refCount: true
  }));
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
  }
  get isModern() {
    return !!this.win?.screen?.orientation;
  }
  static \u0275fac = function ScreenOrientationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScreenOrientationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ScreenOrientationService,
    factory: _ScreenOrientationService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScreenOrientationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var ViewportService = class _ViewportService extends Observable {
  visualViewport = inject(WINDOW).visualViewport;
  stream$ = this.visualViewport ? merge(fromEvent(this.visualViewport, "resize"), fromEvent(this.visualViewport, "scroll"), fromEvent(this.visualViewport, "scrollend")).pipe(startWith(null), map(() => this.visualViewport), filter(Boolean), shareReplay({
    bufferSize: 1,
    refCount: true
  })) : EMPTY;
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
  }
  static \u0275fac = function ViewportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewportService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ViewportService,
    factory: _ViewportService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-visual-viewport.mjs
var _TuiVisualViewport = class _TuiVisualViewport {
  constructor() {
    this.w = inject(WA_WINDOW);
    this.style = tuiInjectElement().style;
    this.minInnerHeight = Infinity;
    this.$ = inject(ViewportService).pipe(takeUntilDestroyed()).subscribe(({
      offsetLeft,
      offsetTop,
      height,
      width,
      scale
    }) => {
      this.minInnerHeight = Math.min(this.minInnerHeight, this.w.innerHeight);
      this.style.setProperty("--tui-viewport-x", tuiPx(offsetLeft));
      this.style.setProperty("--tui-viewport-y", tuiPx(offsetTop));
      this.style.setProperty("--tui-viewport-height", tuiPx(height));
      this.style.setProperty("--tui-viewport-width", tuiPx(width));
      this.style.setProperty("--tui-viewport-scale", String(scale));
      this.style.setProperty("--tui-viewport-vh", tuiPx(this.w.innerHeight / 100));
      this.style.setProperty("--tui-viewport-vw", tuiPx(this.w.innerWidth / 100));
      this.style.setProperty("--tui-viewport-svh", tuiPx(this.minInnerHeight / 100));
    });
  }
};
_TuiVisualViewport.\u0275fac = function TuiVisualViewport_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiVisualViewport)();
};
_TuiVisualViewport.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiVisualViewport,
  selectors: [["", "tuiVisualViewport", ""]]
});
var TuiVisualViewport = _TuiVisualViewport;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVisualViewport, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiVisualViewport]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-popup.mjs
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
  }
  set tuiPopup(show) {
    this.viewRef?.destroy();
    if (show) {
      this.viewRef = this.service.addTemplate(this.template);
    }
  }
  ngOnDestroy() {
    this.viewRef?.destroy();
  }
};
_TuiPopup.\u0275fac = function TuiPopup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPopup)();
};
_TuiPopup.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiPopup,
  selectors: [["ng-template", "tuiPopup", ""]],
  inputs: {
    tuiPopup: "tuiPopup"
  }
});
var TuiPopup = _TuiPopup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopup, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiPopup]"
    }]
  }], null, {
    tuiPopup: [{
      type: Input
    }]
  });
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
  features: [\u0275\u0275ProvidersFeature([tuiAsPortal(TuiPopupService)]), \u0275\u0275InheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["viewContainer", ""]],
  template: function TuiPopups_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainer(0, null, 0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var TuiPopups = _TuiPopups;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopups, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-popups",
      template: "<ng-container #viewContainer />",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsPortal(TuiPopupService)]
    }]
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
var isIos = ({
  userAgent,
  maxTouchPoints
}) => /ipad|iphone|ipod/i.test(userAgent) || /^((?!chrome|android).)*safari/i.test(userAgent) && maxTouchPoints > 1;
var TAP_DELAY = 700;
var SAFE_NAVIGATOR = typeof navigator === "undefined" ? null : navigator;
var MOVE_THRESHOLD = 15;
var LongtapEventPlugin = class {
  constructor() {
    this.isIOS = !!SAFE_NAVIGATOR && isIos(SAFE_NAVIGATOR);
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
var TimedEventPlugin = class {
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
var AbstractEventPlugin = class {
  supports(event) {
    return event.includes(this.modifier);
  }
  unwrap(event) {
    return event.split(".").filter((v) => !this.modifier.includes(v)).join(".");
  }
};
var GLOBAL_HANDLER = new InjectionToken(ngDevMode ? "[GLOBAL_HANDLER]: Global event target handler" : "", {
  factory: () => {
    const document = inject(DOCUMENT);
    return (name) => name === "body" ? document.body : document.defaultView[name] || document.createElement("div");
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
var _SilentEventPlugin = class _SilentEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".silent";
  }
  addEventListener(element, event, handler) {
    _SilentEventPlugin.ngZone = this.manager.getZone();
    return _SilentEventPlugin.ngZone.runOutsideAngular(() => this.manager.addEventListener(element, this.unwrap(event), handler));
  }
};
_SilentEventPlugin.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SilentEventPlugin_BaseFactory;
  return function SilentEventPlugin_Factory(__ngFactoryType__) {
    return (\u0275SilentEventPlugin_BaseFactory || (\u0275SilentEventPlugin_BaseFactory = \u0275\u0275getInheritedFactory(_SilentEventPlugin)))(__ngFactoryType__ || _SilentEventPlugin);
  };
})();
_SilentEventPlugin.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SilentEventPlugin,
  factory: _SilentEventPlugin.\u0275fac
});
var SilentEventPlugin = _SilentEventPlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SilentEventPlugin, [{
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
var _ZonelessPlugin = class _ZonelessPlugin extends SilentEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".zoneless";
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
var PLUGINS = [SilentEventPlugin, ZonelessPlugin, SelfEventPlugin, GlobalEventPlugin, OptionsEventPlugin, PreventEventPlugin, ResizePlugin, StopEventPlugin, LongtapEventPlugin, DebounceEventPlugin, ThrottleEventPlugin];
var NG_EVENT_PLUGINS = PLUGINS.map((useClass) => ({
  provide: EVENT_MANAGER_PLUGINS,
  multi: true,
  useClass
}));
function provideEventPlugins() {
  return NG_EVENT_PLUGINS;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-root.mjs
var _c0 = ["*", [["tuiOverContent"]], [["tuiOverDialogs"]], [["tuiOverAlerts"]], [["tuiOverDropdowns"]], [["tuiOverHints"]]];
var _c1 = ["*", "tuiOverContent", "tuiOverDialogs", "tuiOverAlerts", "tuiOverDropdowns", "tuiOverHints"];
function TuiRoot_ng_container_2_tui_scroll_controls_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tui-scroll-controls", 3);
  }
}
function TuiRoot_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TuiRoot_ng_container_2_tui_scroll_controls_1_Template, 1, 0, "tui-scroll-controls", 2);
    \u0275\u0275element(2, "tui-popups");
    \u0275\u0275projection(3, 1);
    \u0275\u0275element(4, "tui-dialogs");
    \u0275\u0275projection(5, 2);
    \u0275\u0275element(6, "tui-alerts");
    \u0275\u0275projection(7, 3);
    \u0275\u0275element(8, "tui-dropdowns");
    \u0275\u0275projection(9, 4);
    \u0275\u0275element(10, "tui-hints");
    \u0275\u0275projection(11, 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.scrollbars);
  }
}
var _TuiRoot = class _TuiRoot {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.reducedMotion = inject(TUI_REDUCED_MOTION);
    this.duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED));
    this.isChildRoot = !!inject(_TuiRoot, {
      optional: true,
      skipSelf: true
    });
    this.top = signal(!this.isChildRoot);
    this.isMobileRes = toSignal(inject(TuiBreakpointService).pipe(map((breakpoint) => breakpoint === "mobile"), tuiWatch()), {
      initialValue: false
    });
    this.nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === "native";
    this.scrollbars = !this.nativeScrollbar && !inject(TUI_IS_MOBILE) && !this.isChildRoot;
    const factory = inject(RendererFactory2);
    factory.removeStylesOnCompDestroy = false;
    if (factory.delegate) {
      factory.delegate.removeStylesOnCompDestroy = false;
    }
    if (!this.top()) {
      return;
    }
    this.doc.documentElement.setAttribute("data-tui-theme", inject(TUI_THEME).toLowerCase());
    if (!this.nativeScrollbar) {
      this.doc.defaultView?.document.documentElement.classList.add("tui-zero-scrollbar");
    }
    ngDevMode && console.assert(!!inject(EVENT_MANAGER_PLUGINS).find((plugin) => plugin instanceof PreventEventPlugin), "NG_EVENT_PLUGINS is missing from global providers");
  }
  get isTopLayer() {
    return this.doc.fullscreenElement?.matches("tui-root") ? this.doc.fullscreenElement === this.el : !this.isChildRoot;
  }
};
_TuiRoot.\u0275fac = function TuiRoot_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiRoot)();
};
_TuiRoot.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiRoot,
  selectors: [["tui-root"]],
  hostAttrs: ["data-tui-version", "4.81.0"],
  hostVars: 6,
  hostBindings: function TuiRoot_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("touchstart.passive.zoneless", function TuiRoot_touchstart_passive_zoneless_HostBindingHandler() {
        return 0;
      })("fullscreenchange", function TuiRoot_fullscreenchange_HostBindingHandler() {
        return ctx.top.set(ctx.isTopLayer);
      }, false, \u0275\u0275resolveDocument);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("--tui-duration", ctx.duration, "ms")("--tui-scroll-behavior", ctx.reducedMotion ? "auto" : "smooth");
      \u0275\u0275classProp("_mobile", ctx.isMobileRes());
    }
  },
  features: [\u0275\u0275HostDirectivesFeature([TuiPlatform, TuiVisualViewport, TuiFontSize, TuiActiveZone])],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 1,
  consts: [[1, "t-root-content"], [4, "ngIf"], ["class", "t-root-scrollbar", 4, "ngIf"], [1, "t-root-scrollbar"]],
  template: function TuiRoot_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275projection(1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, TuiRoot_ng_container_2_Template, 12, 1, "ng-container", 1);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.top());
    }
  },
  dependencies: [NgIf, TuiAlerts, TuiDialogs, TuiDropdowns, TuiHints, TuiPopups, TuiScrollControls],
  styles: ['@keyframes tuiSkeletonVibe{to{opacity:.5}}@keyframes tuiPresent{to{content:""}}@keyframes tuiFade{0%{opacity:0}}@keyframes tuiSlide{0%{transform:var(--tui-from, translateY(100%))}}@keyframes tuiScale{0%{transform:scale(var(--tui-scale, 0))}}@keyframes tuiCollapse{0%{grid-template-rows:0fr}to{grid-template-rows:1fr}}.tui-enter,.tui-leave{animation-duration:var(--tui-duration);animation-timing-function:ease-in-out;pointer-events:none}.tui-leave{animation-direction:reverse}\n', ".tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-font-text-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}:root{--tui-inline-start: left;--tui-inline-end: right;--tui-inline: 1}[dir=rtl]{--tui-inline-start: right;--tui-inline-end: left;--tui-inline: -1}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;z-index:0;display:none;margin:0}[data-tui-theme] tui-root>.t-root-scrollbar{display:block}.t-root-content{position:relative;top:var(--t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}\n"],
  encapsulation: 2
});
var TuiRoot = _TuiRoot;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRoot, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-root",
      imports: [NgIf, TuiAlerts, TuiDialogs, TuiDropdowns, TuiHints, TuiPopups, TuiScrollControls],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      hostDirectives: [TuiPlatform, TuiVisualViewport, TuiFontSize, TuiActiveZone],
      host: {
        "data-tui-version": TUI_VERSION,
        "[style.--tui-duration.ms]": "duration",
        "[style.--tui-scroll-behavior]": 'reducedMotion ? "auto" : "smooth"',
        "[class._mobile]": "isMobileRes()",
        // Required for the :active state to work in Safari. https://stackoverflow.com/a/33681490
        "(touchstart.passive.zoneless)": "0",
        "(document:fullscreenchange)": "top.set(isTopLayer)"
      },
      template: '<div class="t-root-content">\n    <ng-content />\n</div>\n<ng-container *ngIf="top()">\n    <tui-scroll-controls\n        *ngIf="scrollbars"\n        class="t-root-scrollbar"\n    />\n    <tui-popups />\n    <ng-content select="tuiOverContent" />\n    <tui-dialogs />\n    <ng-content select="tuiOverDialogs" />\n    <tui-alerts />\n    <ng-content select="tuiOverAlerts" />\n    <tui-dropdowns />\n    <ng-content select="tuiOverDropdowns" />\n    <tui-hints />\n    <ng-content select="tuiOverHints" />\n</ng-container>\n',
      styles: ['@keyframes tuiSkeletonVibe{to{opacity:.5}}@keyframes tuiPresent{to{content:""}}@keyframes tuiFade{0%{opacity:0}}@keyframes tuiSlide{0%{transform:var(--tui-from, translateY(100%))}}@keyframes tuiScale{0%{transform:scale(var(--tui-scale, 0))}}@keyframes tuiCollapse{0%{grid-template-rows:0fr}to{grid-template-rows:1fr}}.tui-enter,.tui-leave{animation-duration:var(--tui-duration);animation-timing-function:ease-in-out;pointer-events:none}.tui-leave{animation-direction:reverse}\n', ".tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-font-text-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}:root{--tui-inline-start: left;--tui-inline-end: right;--tui-inline: 1}[dir=rtl]{--tui-inline-start: right;--tui-inline-end: left;--tui-inline: -1}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;z-index:0;display:none;margin:0}[data-tui-theme] tui-root>.t-root-scrollbar{display:block}.t-root-content{position:relative;top:var(--t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}\n"]
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-badge.mjs
var TUI_BADGE_DEFAULT_OPTIONS = {
  appearance: "",
  size: "l"
};
var TUI_BADGE_OPTIONS = new InjectionToken(ngDevMode ? "TUI_BADGE_OPTIONS" : "", {
  factory: () => TUI_BADGE_DEFAULT_OPTIONS
});
function tuiBadgeOptionsProvider(options) {
  return tuiProvideOptions(TUI_BADGE_OPTIONS, options, TUI_BADGE_DEFAULT_OPTIONS);
}
var _TuiBadgeStyles = class _TuiBadgeStyles {
};
_TuiBadgeStyles.\u0275fac = function TuiBadgeStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiBadgeStyles)();
};
_TuiBadgeStyles.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiBadgeStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-badge"],
  decls: 0,
  vars: 0,
  template: function TuiBadgeStyles_Template(rf, ctx) {
  },
  styles: ["tui-badge,[tuiBadge]{--t-icon-size: 1rem;--t-padding: 0 .5rem;--t-size: var(--tui-height-xs);--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));border-radius:6rem;justify-content:center;background:#959595;color:var(--tui-background-base);padding:var(--t-padding);block-size:var(--t-size);min-inline-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-s)}tui-badge>img,[tuiBadge]>img,tui-badge>tui-svg,[tuiBadge]>tui-svg,tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge>tui-avatar,[tuiBadge]>tui-avatar,tui-badge>tui-badge,[tuiBadge]>tui-badge,tui-badge>[tuiBadge],[tuiBadge]>[tuiBadge],tui-badge>[tuiRadio],[tuiBadge]>[tuiRadio],tui-badge>[tuiSwitch],[tuiBadge]>[tuiSwitch],tui-badge>[tuiCheckbox],[tuiBadge]>[tuiCheckbox],tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{margin:var(--t-margin)}tui-badge[tuiStatus]:before,[tuiBadge][tuiStatus]:before{inline-size:.375rem;block-size:.375rem;margin:0}tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-badge[data-appearance=error],[tuiBadge][data-appearance=error],tui-badge[data-appearance=negative],[tuiBadge][data-appearance=negative]{--t-status: var(--tui-status-negative)}tui-badge[data-appearance=success],[tuiBadge][data-appearance=success],tui-badge[data-appearance=positive],[tuiBadge][data-appearance=positive]{--t-status: var(--tui-status-positive)}tui-badge[data-appearance=warning],[tuiBadge][data-appearance=warning]{--t-status: var(--tui-status-warning)}tui-badge[data-appearance=info],[tuiBadge][data-appearance=info]{--t-status: var(--tui-status-info)}tui-badge[data-appearance=neutral],[tuiBadge][data-appearance=neutral]{--t-status: var(--tui-status-neutral)}tui-badge[data-size=s],[tuiBadge][data-size=s]{--t-padding: 0 .3125rem;--t-size: 1rem;--t-icon-size: .625rem;--t-margin: -.125rem;font:var(--tui-font-text-xs)}tui-badge[data-size=s][tuiStatus]:before,[tuiBadge][data-size=s][tuiStatus]:before{inline-size:.25rem;block-size:.25rem;margin-inline-end:-.125rem}tui-badge[data-size=m],[tuiBadge][data-size=m]{--t-padding: 0 .375rem;--t-size: 1.25rem;--t-icon-size: .75rem;--t-margin: -.125rem}tui-badge[data-size=xl],[tuiBadge][data-size=xl]{--t-margin: -.25rem;--t-padding: 0 .75rem;--t-size: var(--tui-height-s);font:var(--tui-font-text-m)}tui-badge[data-size=xl][tuiStatus]:before,[tuiBadge][data-size=xl][tuiStatus]:before{inline-size:.5rem;block-size:.5rem;margin-inline-end:-.125rem}tui-badge[tuiAppearance][data-appearance=error],[tuiBadge][tuiAppearance][data-appearance=error],tui-badge[tuiAppearance][data-appearance=success],[tuiBadge][tuiAppearance][data-appearance=success],tui-badge[tuiAppearance][data-appearance=negative],[tuiBadge][tuiAppearance][data-appearance=negative],tui-badge[tuiAppearance][data-appearance=positive],[tuiBadge][tuiAppearance][data-appearance=positive],tui-badge[tuiAppearance][data-appearance=warning],[tuiBadge][tuiAppearance][data-appearance=warning],tui-badge[tuiAppearance][data-appearance=info],[tuiBadge][tuiAppearance][data-appearance=info],tui-badge[tuiAppearance][data-appearance=neutral],[tuiBadge][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}img[tuiBadge]{padding:0;inline-size:var(--t-size)}tui-icon[tuiBadge]{--t-margin: 0 !important;-webkit-mask:none;mask:none;block-size:var(--t-size);inline-size:var(--t-size)}tui-icon[tuiBadge][data-size=s]:after{-webkit-mask-size:.625rem;mask-size:.625rem}tui-icon[tuiBadge][data-size=m]:after{-webkit-mask-size:.75rem;mask-size:.75rem}tui-icon[tuiBadge][data-size=l]:after,tui-icon[tuiBadge][data-size=xl]:after{-webkit-mask-size:1rem;mask-size:1rem}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiBadgeStyles = _TuiBadgeStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadgeStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-badge"
      },
      styles: ["tui-badge,[tuiBadge]{--t-icon-size: 1rem;--t-padding: 0 .5rem;--t-size: var(--tui-height-xs);--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));border-radius:6rem;justify-content:center;background:#959595;color:var(--tui-background-base);padding:var(--t-padding);block-size:var(--t-size);min-inline-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-s)}tui-badge>img,[tuiBadge]>img,tui-badge>tui-svg,[tuiBadge]>tui-svg,tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge>tui-avatar,[tuiBadge]>tui-avatar,tui-badge>tui-badge,[tuiBadge]>tui-badge,tui-badge>[tuiBadge],[tuiBadge]>[tuiBadge],tui-badge>[tuiRadio],[tuiBadge]>[tuiRadio],tui-badge>[tuiSwitch],[tuiBadge]>[tuiSwitch],tui-badge>[tuiCheckbox],[tuiBadge]>[tuiCheckbox],tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{margin:var(--t-margin)}tui-badge[tuiStatus]:before,[tuiBadge][tuiStatus]:before{inline-size:.375rem;block-size:.375rem;margin:0}tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-badge[data-appearance=error],[tuiBadge][data-appearance=error],tui-badge[data-appearance=negative],[tuiBadge][data-appearance=negative]{--t-status: var(--tui-status-negative)}tui-badge[data-appearance=success],[tuiBadge][data-appearance=success],tui-badge[data-appearance=positive],[tuiBadge][data-appearance=positive]{--t-status: var(--tui-status-positive)}tui-badge[data-appearance=warning],[tuiBadge][data-appearance=warning]{--t-status: var(--tui-status-warning)}tui-badge[data-appearance=info],[tuiBadge][data-appearance=info]{--t-status: var(--tui-status-info)}tui-badge[data-appearance=neutral],[tuiBadge][data-appearance=neutral]{--t-status: var(--tui-status-neutral)}tui-badge[data-size=s],[tuiBadge][data-size=s]{--t-padding: 0 .3125rem;--t-size: 1rem;--t-icon-size: .625rem;--t-margin: -.125rem;font:var(--tui-font-text-xs)}tui-badge[data-size=s][tuiStatus]:before,[tuiBadge][data-size=s][tuiStatus]:before{inline-size:.25rem;block-size:.25rem;margin-inline-end:-.125rem}tui-badge[data-size=m],[tuiBadge][data-size=m]{--t-padding: 0 .375rem;--t-size: 1.25rem;--t-icon-size: .75rem;--t-margin: -.125rem}tui-badge[data-size=xl],[tuiBadge][data-size=xl]{--t-margin: -.25rem;--t-padding: 0 .75rem;--t-size: var(--tui-height-s);font:var(--tui-font-text-m)}tui-badge[data-size=xl][tuiStatus]:before,[tuiBadge][data-size=xl][tuiStatus]:before{inline-size:.5rem;block-size:.5rem;margin-inline-end:-.125rem}tui-badge[tuiAppearance][data-appearance=error],[tuiBadge][tuiAppearance][data-appearance=error],tui-badge[tuiAppearance][data-appearance=success],[tuiBadge][tuiAppearance][data-appearance=success],tui-badge[tuiAppearance][data-appearance=negative],[tuiBadge][tuiAppearance][data-appearance=negative],tui-badge[tuiAppearance][data-appearance=positive],[tuiBadge][tuiAppearance][data-appearance=positive],tui-badge[tuiAppearance][data-appearance=warning],[tuiBadge][tuiAppearance][data-appearance=warning],tui-badge[tuiAppearance][data-appearance=info],[tuiBadge][tuiAppearance][data-appearance=info],tui-badge[tuiAppearance][data-appearance=neutral],[tuiBadge][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}img[tuiBadge]{padding:0;inline-size:var(--t-size)}tui-icon[tuiBadge]{--t-margin: 0 !important;-webkit-mask:none;mask:none;block-size:var(--t-size);inline-size:var(--t-size)}tui-icon[tuiBadge][data-size=s]:after{-webkit-mask-size:.625rem;mask-size:.625rem}tui-icon[tuiBadge][data-size=m]:after{-webkit-mask-size:.75rem;mask-size:.75rem}tui-icon[tuiBadge][data-size=l]:after,tui-icon[tuiBadge][data-size=xl]:after{-webkit-mask-size:1rem;mask-size:1rem}\n"]
    }]
  }], null, null);
})();
var _TuiBadge = class _TuiBadge {
  constructor() {
    this.nothing = tuiWithStyles(TuiBadgeStyles);
    this.size = inject(TUI_BADGE_OPTIONS).size;
  }
};
_TuiBadge.\u0275fac = function TuiBadge_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiBadge)();
};
_TuiBadge.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiBadge,
  selectors: [["tui-badge"], ["", "tuiBadge", ""]],
  hostVars: 1,
  hostBindings: function TuiBadge_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.size);
    }
  },
  inputs: {
    size: "size"
  },
  features: [\u0275\u0275ProvidersFeature([tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)]), \u0275\u0275HostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
});
var TuiBadge = _TuiBadge;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadge, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-badge,[tuiBadge]",
      providers: [tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)],
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

export {
  TuiPopupService,
  tuiBadgeOptionsProvider,
  TuiBadge,
  provideEventPlugins,
  TuiRoot
};
//# sourceMappingURL=chunk-Q6P4AWYY.js.map
