import {
  tuiAvatarOptionsProvider
} from "./chunk-TO6IF4KK.js";
import {
  TUI_ANIMATIONS_SPEED,
  TUI_BREAKPOINT,
  TUI_OPTIONS,
  TUI_PLATFORM,
  TUI_REDUCED_MOTION,
  TUI_SCROLLBAR_OPTIONS,
  TuiAnimated,
  TuiFontSize,
  TuiPopups,
  TuiScrollControls,
  WA_IS_MOBILE,
  tuiButtonOptionsProvider,
  tuiGetDuration
} from "./chunk-2LK3XWNF.js";
import {
  TUI_VERSION,
  tuiCreateOptions
} from "./chunk-UO32WQJY.js";
import {
  WA_WINDOW,
  takeUntilDestroyed,
  tuiInjectElement,
  tuiPx,
  tuiWithStyles
} from "./chunk-XQBFNBOU.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Directive,
  EMPTY,
  Injectable,
  Observable,
  ViewEncapsulation,
  filter,
  fromEvent,
  inject,
  input,
  map,
  merge,
  setClassMetadata,
  shareReplay,
  signal,
  startWith,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵresolveDocument,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-QZKNXBAU.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-platform.mjs
var _TuiPlatform = class _TuiPlatform {
  constructor() {
    this.tuiPlatform = input(inject(TUI_PLATFORM, {
      skipSelf: true
    }));
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
      \u0275\u0275attribute("data-platform", ctx.tuiPlatform());
    }
  },
  inputs: {
    tuiPlatform: [1, "tuiPlatform"]
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: TUI_PLATFORM,
    useFactory: () => inject(_TuiPlatform).tuiPlatform()
  }])]
});
var TuiPlatform = _TuiPlatform;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPlatform, [{
    type: Directive,
    args: [{
      selector: "[tuiPlatform]",
      providers: [{
        provide: TUI_PLATFORM,
        useFactory: () => inject(TuiPlatform).tuiPlatform()
      }],
      host: {
        "[attr.data-platform]": "tuiPlatform()"
      }
    }]
  }], null, null);
})();

// node_modules/@ng-web-apis/screen-orientation/fesm2022/ng-web-apis-screen-orientation.mjs
var WaScreenOrientationService = class _WaScreenOrientationService extends Observable {
  win = inject(WA_WINDOW);
  screen = this.win.screen;
  // SSR
  stream$ = (this.screen ? fromEvent(this.screen.orientation, "change").pipe(startWith(null), map(() => (
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
  static \u0275fac = function WaScreenOrientationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaScreenOrientationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _WaScreenOrientationService,
    factory: _WaScreenOrientationService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaScreenOrientationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var WaViewportService = class _WaViewportService extends Observable {
  visualViewport = inject(WA_WINDOW).visualViewport;
  stream$ = this.visualViewport ? merge(fromEvent(this.visualViewport, "resize"), fromEvent(this.visualViewport, "scroll"), fromEvent(this.visualViewport, "scrollend")).pipe(startWith(null), map(() => this.visualViewport), filter(Boolean), shareReplay({
    bufferSize: 1,
    refCount: true
  })) : EMPTY;
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
  }
  static \u0275fac = function WaViewportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaViewportService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _WaViewportService,
    factory: _WaViewportService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaViewportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-visual-viewport.mjs
var _TuiVisualViewport = class _TuiVisualViewport {
  constructor() {
    this.w = inject(WA_WINDOW);
    this.style = tuiInjectElement().style;
    this.minInnerHeight = Infinity;
    this.$ = inject(WaViewportService).pipe(takeUntilDestroyed()).subscribe(({
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
      selector: "[tuiVisualViewport]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-root.mjs
var _c0 = ["*", [["tuiOverContent"]]];
var _c1 = ["*", "tuiOverContent"];
function TuiRoot_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tui-scroll-controls", 1);
  }
}
function TuiRoot_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TuiRoot_Conditional_2_Conditional_0_Template, 1, 0, "tui-scroll-controls", 1);
    \u0275\u0275elementStart(1, "tui-popups");
    \u0275\u0275projection(2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.scrollbars ? 0 : -1);
  }
}
var _TuiRoot = class _TuiRoot {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.child = !!inject(_TuiRoot, {
      optional: true,
      skipSelf: true
    });
    this.reducedMotion = inject(TUI_REDUCED_MOTION);
    this.duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED));
    this.top = signal(this.parent);
    this.breakpoint = inject(TUI_BREAKPOINT);
    this.scrollbars = !inject(WA_IS_MOBILE) && !this.child && inject(TUI_SCROLLBAR_OPTIONS).mode !== "native" && inject(TUI_OPTIONS).scrollbars !== "native";
  }
  get parent() {
    return this.doc.fullscreenElement === this.el || !this.child;
  }
};
_TuiRoot.\u0275fac = function TuiRoot_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiRoot)();
};
_TuiRoot.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiRoot,
  selectors: [["tui-root"]],
  hostAttrs: ["data-tui-version", "5.4.0"],
  hostVars: 6,
  hostBindings: function TuiRoot_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("touchstart.passive.zoneless", function TuiRoot_touchstart_passive_zoneless_HostBindingHandler() {
        return 0;
      })("fullscreenchange", function TuiRoot_fullscreenchange_HostBindingHandler() {
        return ctx.top.set(ctx.parent);
      }, false, \u0275\u0275resolveDocument);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("--tui-duration", ctx.duration, "ms")("--tui-scroll-behavior", ctx.reducedMotion ? "auto" : "smooth");
      \u0275\u0275classProp("_mobile", ctx.breakpoint() === "mobile");
    }
  },
  features: [\u0275\u0275HostDirectivesFeature([TuiPlatform, TuiVisualViewport, TuiFontSize])],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 1,
  consts: [[1, "t-root-content"], [1, "t-root-scrollbar"]],
  template: function TuiRoot_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275projection(1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, TuiRoot_Conditional_2_Template, 3, 1);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.top() ? 2 : -1);
    }
  },
  dependencies: [TuiPopups, TuiScrollControls],
  styles: ['@keyframes tuiPresent{to{content:""}}@keyframes tuiFade{0%{opacity:0}}@keyframes tuiSlide{0%{transform:var(--tui-from, translateY(100%))}}@keyframes tuiScale{0%{transform:scale(var(--tui-scale, 0))}}@keyframes tuiCollapse{0%{grid-template-rows:0fr}to{grid-template-rows:1fr}}.tui-enter,.tui-leave{animation-duration:var(--tui-duration);animation-timing-function:ease-in-out;pointer-events:none}.tui-leave{animation-direction:reverse}\n', ".tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-typography-body-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}tui-root>.t-root-scrollbar{position:fixed;inset:0;z-index:0}.t-root-content{position:relative;inset-block-start:var(--t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}\n"],
  encapsulation: 2
});
var TuiRoot = _TuiRoot;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRoot, [{
    type: Component,
    args: [{
      selector: "tui-root",
      imports: [TuiPopups, TuiScrollControls],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      hostDirectives: [TuiPlatform, TuiVisualViewport, TuiFontSize],
      host: {
        "data-tui-version": TUI_VERSION,
        "[style.--tui-duration.ms]": "duration",
        "[style.--tui-scroll-behavior]": 'reducedMotion ? "auto" : "smooth"',
        "[class._mobile]": 'breakpoint() === "mobile"',
        // Required for the :active state to work in Safari. https://stackoverflow.com/a/33681490
        "(touchstart.passive.zoneless)": "0",
        "(document:fullscreenchange)": "top.set(parent)"
      },
      template: '<div class="t-root-content">\n    <ng-content />\n</div>\n@if (top()) {\n    @if (scrollbars) {\n        <tui-scroll-controls class="t-root-scrollbar" />\n    }\n    <tui-popups>\n        <ng-content select="tuiOverContent" />\n    </tui-popups>\n}\n',
      styles: ['@keyframes tuiPresent{to{content:""}}@keyframes tuiFade{0%{opacity:0}}@keyframes tuiSlide{0%{transform:var(--tui-from, translateY(100%))}}@keyframes tuiScale{0%{transform:scale(var(--tui-scale, 0))}}@keyframes tuiCollapse{0%{grid-template-rows:0fr}to{grid-template-rows:1fr}}.tui-enter,.tui-leave{animation-duration:var(--tui-duration);animation-timing-function:ease-in-out;pointer-events:none}.tui-leave{animation-direction:reverse}\n', ".tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-typography-body-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}tui-root>.t-root-scrollbar{position:fixed;inset:0;z-index:0}.t-root-content{position:relative;inset-block-start:var(--t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-badge-notification.mjs
var _c02 = ["*"];
var TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS = {
  size: "m"
};
var [TUI_BADGE_NOTIFICATION_OPTIONS, tuiBadgeNotificationOptionsProvider] = tuiCreateOptions(TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS);
var _TuiBadgeNotification = class _TuiBadgeNotification {
  constructor() {
    this.size = input(inject(TUI_BADGE_NOTIFICATION_OPTIONS).size);
  }
};
_TuiBadgeNotification.\u0275fac = function TuiBadgeNotification_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiBadgeNotification)();
};
_TuiBadgeNotification.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiBadgeNotification,
  selectors: [["tui-badge-notification"]],
  hostVars: 1,
  hostBindings: function TuiBadgeNotification_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.size());
    }
  },
  inputs: {
    size: [1, "size"]
  },
  features: [\u0275\u0275HostDirectivesFeature([TuiAnimated])],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function TuiBadgeNotification_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{--t-size: 1.5rem;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;color:#fff;border-radius:2rem;white-space:nowrap;overflow:hidden;vertical-align:middle;font:var(--tui-typography-body-s);max-inline-size:100%;padding:0 .25rem;background:#f52222;block-size:var(--t-size);min-inline-size:var(--t-size)}.tui-enter[_nghost-%COMP%]{animation:tuiScale var(--tui-duration) cubic-bezier(.34,1.56,.64,1)}.tui-leave[_nghost-%COMP%]{animation:tuiScale var(--tui-duration) ease-in-out reverse}[data-size=m][_nghost-%COMP%]{--t-size: 1.25rem}[data-size=s][_nghost-%COMP%]{--t-size: 1rem;padding:0 .125rem;font:var(--tui-typography-body-xs)}[data-size=xs][_nghost-%COMP%]{--t-size: .375rem;padding:0;font-size:0}[_nghost-%COMP%]   [tuiIconButton][_nghost-%COMP%], [tuiIconButton]   [_nghost-%COMP%]{position:absolute;inset-inline-end:25%;inset-block-start:25%}"],
  changeDetection: 0
});
var TuiBadgeNotification = _TuiBadgeNotification;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadgeNotification, [{
    type: Component,
    args: [{
      selector: "tui-badge-notification",
      template: "<ng-content />",
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [TuiAnimated],
      host: {
        "[attr.data-size]": "size()"
      },
      styles: [":host{--t-size: 1.5rem;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;color:#fff;border-radius:2rem;white-space:nowrap;overflow:hidden;vertical-align:middle;font:var(--tui-typography-body-s);max-inline-size:100%;padding:0 .25rem;background:#f52222;block-size:var(--t-size);min-inline-size:var(--t-size)}:host.tui-enter{animation:tuiScale var(--tui-duration) cubic-bezier(.34,1.56,.64,1)}:host.tui-leave{animation:tuiScale var(--tui-duration) ease-in-out reverse}:host[data-size=m]{--t-size: 1.25rem}:host[data-size=s]{--t-size: 1rem;padding:0 .125rem;font:var(--tui-typography-body-xs)}:host[data-size=xs]{--t-size: .375rem;padding:0;font-size:0}:host :host-context([tuiIconButton]){position:absolute;inset-inline-end:25%;inset-block-start:25%}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-header.mjs
var [TUI_HEADER_OPTIONS, tuiHeaderOptionsProvider] = tuiCreateOptions({
  size: "h5"
});
var _Styles = class _Styles {
};
_Styles.\u0275fac = function Styles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Styles)();
};
_Styles.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _Styles,
  selectors: [["ng-component"]],
  exportAs: ["tui-header-5.4.0"],
  decls: 0,
  vars: 0,
  template: function Styles_Template(rf, ctx) {
  },
  styles: ['[tuiHeader]:where(*[data-tui-version="5.4.0"]){position:relative;display:flex;align-items:flex-start;box-sizing:content-box;color:var(--tui-text-primary);margin:0;text-align:start;overflow-wrap:break-word}[tuiHeader]:where(*[data-tui-version="5.4.0"]) p{margin:.25rem 0 0;font:var(--tui-typography-body-m)}[tuiHeader]:where(*[data-tui-version="5.4.0"]) p:empty{display:none}[tuiHeader]:where(*[data-tui-version="5.4.0"]) [tuiTitle]{flex-grow:2;margin:0;font:inherit}[tuiHeader]:where(*[data-tui-version="5.4.0"]) [tuiTitle]:empty{display:none}[tuiHeader]:where(*[data-tui-version="5.4.0"]) [tuiAccessories]{display:flex;align-items:center;gap:.75rem;white-space:nowrap}[tuiHeader]:where(*[data-tui-version="5.4.0"]) [tuiAccessories]:has([tuiLink]){align-items:baseline}[tuiHeader]:where(*[data-tui-version="5.4.0"]) [tuiAccessories]:before{content:"\\200b";visibility:hidden}[tuiHeader]:where(*[data-tui-version="5.4.0"]) [tuiSubtitle]{color:var(--tui-text-secondary)}[tuiHeader]:where(*[data-tui-version="5.4.0"]) [tuiCaption]{font:var(--tui-typography-body-s);color:var(--tui-text-secondary);font-weight:500;text-transform:uppercase;margin:0}[tuiHeader]:where(*[data-tui-version="5.4.0"])+[tuiDescription]{margin-block-start:.5rem;color:var(--tui-text-primary);font:var(--tui-typography-body-m)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h1]{font:var(--tui-typography-heading-h1)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h1]+[tuiDescription]{margin-block-start:.75rem}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h2]{font:var(--tui-typography-heading-h2)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h3]{font:var(--tui-typography-heading-h3)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h4]{font:var(--tui-typography-heading-h4)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h5]{font:var(--tui-typography-heading-h5)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h6]{font:var(--tui-typography-heading-h6)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-l]{font:var(--tui-typography-body-l)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-m]{font:var(--tui-typography-ui-l)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-s]{font:var(--tui-typography-ui-m)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-s] [tuiTitle]{gap:.125rem}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-s]+[tuiDescription]{margin-block-start:.125rem}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-m] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-s] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-m] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-s] [tuiLink]{font:var(--tui-typography-body-s)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h1] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h2] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h3] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h1] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h2] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h3] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h1]+[tuiDescription],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h2]+[tuiDescription],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h3]+[tuiDescription]{font:var(--tui-typography-body-l)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h4] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h5] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h6] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-l] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h4] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h5] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h6] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-l] [tuiLink]{font:var(--tui-typography-body-m)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size] [tuiTitle]{font-weight:700}\n'],
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
      exportAs: `tui-header-${TUI_VERSION}`,
      styles: ['[tuiHeader]:where(*[data-tui-version="5.4.0"]){position:relative;display:flex;align-items:flex-start;box-sizing:content-box;color:var(--tui-text-primary);margin:0;text-align:start;overflow-wrap:break-word}[tuiHeader]:where(*[data-tui-version="5.4.0"]) p{margin:.25rem 0 0;font:var(--tui-typography-body-m)}[tuiHeader]:where(*[data-tui-version="5.4.0"]) p:empty{display:none}[tuiHeader]:where(*[data-tui-version="5.4.0"]) [tuiTitle]{flex-grow:2;margin:0;font:inherit}[tuiHeader]:where(*[data-tui-version="5.4.0"]) [tuiTitle]:empty{display:none}[tuiHeader]:where(*[data-tui-version="5.4.0"]) [tuiAccessories]{display:flex;align-items:center;gap:.75rem;white-space:nowrap}[tuiHeader]:where(*[data-tui-version="5.4.0"]) [tuiAccessories]:has([tuiLink]){align-items:baseline}[tuiHeader]:where(*[data-tui-version="5.4.0"]) [tuiAccessories]:before{content:"\\200b";visibility:hidden}[tuiHeader]:where(*[data-tui-version="5.4.0"]) [tuiSubtitle]{color:var(--tui-text-secondary)}[tuiHeader]:where(*[data-tui-version="5.4.0"]) [tuiCaption]{font:var(--tui-typography-body-s);color:var(--tui-text-secondary);font-weight:500;text-transform:uppercase;margin:0}[tuiHeader]:where(*[data-tui-version="5.4.0"])+[tuiDescription]{margin-block-start:.5rem;color:var(--tui-text-primary);font:var(--tui-typography-body-m)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h1]{font:var(--tui-typography-heading-h1)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h1]+[tuiDescription]{margin-block-start:.75rem}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h2]{font:var(--tui-typography-heading-h2)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h3]{font:var(--tui-typography-heading-h3)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h4]{font:var(--tui-typography-heading-h4)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h5]{font:var(--tui-typography-heading-h5)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h6]{font:var(--tui-typography-heading-h6)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-l]{font:var(--tui-typography-body-l)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-m]{font:var(--tui-typography-ui-l)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-s]{font:var(--tui-typography-ui-m)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-s] [tuiTitle]{gap:.125rem}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-s]+[tuiDescription]{margin-block-start:.125rem}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-m] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-s] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-m] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-s] [tuiLink]{font:var(--tui-typography-body-s)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h1] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h2] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h3] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h1] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h2] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h3] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h1]+[tuiDescription],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h2]+[tuiDescription],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h3]+[tuiDescription]{font:var(--tui-typography-body-l)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h4] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h5] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h6] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-l] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h4] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h5] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=h6] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size=body-l] [tuiLink]{font:var(--tui-typography-body-m)}[tuiHeader]:where(*[data-tui-version="5.4.0"])[data-size] [tuiTitle]{font-weight:700}\n']
    }]
  }], null, null);
})();
var _TuiHeader = class _TuiHeader {
  constructor() {
    this.nothing = tuiWithStyles(Styles);
    this.options = inject(TUI_HEADER_OPTIONS);
    this.tuiHeader = input(this.options.size);
  }
};
_TuiHeader.\u0275fac = function TuiHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiHeader)();
};
_TuiHeader.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiHeader,
  selectors: [["", "tuiHeader", ""]],
  hostAttrs: ["tuiHeader", "", "data-tui-version", "5.4.0"],
  hostVars: 1,
  hostBindings: function TuiHeader_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.tuiHeader() || ctx.options.size || "h5");
    }
  },
  inputs: {
    tuiHeader: [1, "tuiHeader"]
  },
  features: [\u0275\u0275ProvidersFeature([tuiAvatarOptionsProvider({
    size: "m"
  }), tuiBadgeNotificationOptionsProvider(() => ({
    size: toBadgeSize(inject(_TuiHeader).tuiHeader())
  })), tuiButtonOptionsProvider(() => ({
    size: toButtonSize(inject(_TuiHeader).tuiHeader())
  }))])]
});
var TuiHeader = _TuiHeader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHeader, [{
    type: Directive,
    args: [{
      selector: "[tuiHeader]",
      providers: [tuiAvatarOptionsProvider({
        size: "m"
      }), tuiBadgeNotificationOptionsProvider(() => ({
        size: toBadgeSize(inject(TuiHeader).tuiHeader())
      })), tuiButtonOptionsProvider(() => ({
        size: toButtonSize(inject(TuiHeader).tuiHeader())
      }))],
      host: {
        tuiHeader: "",
        "data-tui-version": TUI_VERSION,
        "[attr.data-size]": 'tuiHeader() || options.size || "h5"'
      }
    }]
  }], null, null);
})();
function toButtonSize(size) {
  switch (size) {
    case "h1":
      return "l";
    case "h2":
    case "h3":
      return "m";
    case "h4":
      return "s";
    default:
      return "xs";
  }
}
function toBadgeSize(size) {
  switch (size) {
    case "body-l":
    case "body-m":
    case "body-s":
    case "h6":
      return "s";
    default:
      return "m";
  }
}

export {
  TuiRoot,
  tuiBadgeNotificationOptionsProvider,
  TuiHeader
};
//# sourceMappingURL=chunk-RGU5X6JK.js.map
