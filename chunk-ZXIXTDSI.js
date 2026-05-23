import {
  TuiModalService
} from "./chunk-WLFJYPFL.js";
import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-PCBVFNZB.js";
import "./chunk-7GTWMHAC.js";
import "./chunk-CQCVA6IH.js";
import "./chunk-35INNUXK.js";
import "./chunk-HEWXKLLS.js";
import "./chunk-FSBD2B32.js";
import "./chunk-MOZWJJCS.js";
import "./chunk-XK45D6UZ.js";
import "./chunk-Y7ZCXK7T.js";
import "./chunk-DD32KBA7.js";
import "./chunk-EDND4ZRD.js";
import "./chunk-UB6MO7LW.js";
import "./chunk-JQT6NZCN.js";
import "./chunk-VV3D2HHM.js";
import "./chunk-SGBXHZN5.js";
import "./chunk-ZYO2ROQB.js";
import "./chunk-W4U25YU5.js";
import {
  ActivationStart,
  Router
} from "./chunk-TNPUBTXS.js";
import {
  TuiTitle
} from "./chunk-APMVHMIW.js";
import {
  TuiButtonX
} from "./chunk-3CRZRPMF.js";
import {
  PolymorpheusOutlet,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TUI_TRUE_HANDLER,
  TUI_VERSION,
  TuiAnimated,
  TuiAutoFocus,
  TuiButton,
  TuiPortalDirective,
  injectContext,
  tuiAsPortal,
  tuiGetViewportWidth
} from "./chunk-CV6PGG7O.js";
import "./chunk-UOQYRYT2.js";
import "./chunk-YQZG6ATW.js";
import "./chunk-SID5SRJX.js";
import "./chunk-HQC3MWMQ.js";
import "./chunk-QD3ZUMKY.js";
import {
  TuiEditorTool
} from "./chunk-5B5T5J6E.js";
import "./chunk-3MYWO3JS.js";
import {
  tuiCloseWatcher,
  tuiCreateOptions,
  tuiTypedFromEvent,
  tuiZonefull
} from "./chunk-2UOD7KNB.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  WA_WINDOW,
  takeUntilDestroyed,
  tuiContainsOrAfter,
  tuiGetActualTarget,
  tuiInjectElement,
  tuiIsElement
} from "./chunk-6HH4HFWJ.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Directive,
  Injectable,
  InjectionToken,
  Observable,
  Subject,
  ViewEncapsulation,
  exhaustMap,
  filter,
  inject,
  input,
  isObservable,
  map,
  merge,
  of,
  setClassMetadata,
  switchMap,
  take,
  ɵsetClassDebugInfo,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-NS3244ZP.js";
import "./chunk-YANEK5OP.js";
import "./chunk-JTJXQAN7.js";
import "./chunk-PSTGTYGJ.js";
import "./chunk-LXNO5FKD.js";
import "./chunk-KWSTWQNB.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-dialog.mjs
function TuiDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function TuiDialogComponent_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close$.next());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("appearance", ctx_r1.context.appearance.includes("fullscreen") ? "action" : "neutral");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.close(), " ");
  }
}
function TuiDialogComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "hgroup", 3);
    \u0275\u0275element(2, "h2", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("id", ctx_r1.context.id)("innerHTML", ctx_r1.context.label, \u0275\u0275sanitizeHtml);
  }
}
function TuiDialogComponent_ng_container_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer")(1, "button", 6);
    \u0275\u0275listener("click", function TuiDialogComponent_ng_container_2_Conditional_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.context.$implicit.complete());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.context.data || "OK", " ");
  }
}
function TuiDialogComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "header")(2, "hgroup", 3);
    \u0275\u0275element(3, "h2", 4)(4, "p", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, TuiDialogComponent_ng_container_2_Conditional_5_Template, 3, 1, "footer");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("id", ctx_r1.context.id)("innerHTML", ctx_r1.context.label, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", text_r4, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.context.closable || ctx_r1.context.dismissible ? 5 : -1);
  }
}
var TUI_DIALOGS_CLOSE = new InjectionToken(ngDevMode ? "TUI_DIALOGS_CLOSE" : "", {
  factory: () => inject(Router).events.pipe(filter((e) => e instanceof ActivationStart))
});
var _TuiDialogCloseService = class _TuiDialogCloseService extends Observable {
  constructor() {
    super((subscriber) => merge(this.esc$, this.mousedown$, tuiCloseWatcher().pipe(tuiZonefull())).subscribe(subscriber));
    this.win = inject(WA_WINDOW);
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.esc$ = tuiTypedFromEvent(this.doc, "keydown").pipe(filter((event) => {
      const target = tuiGetActualTarget(event);
      return (
        // @ts-ignore
        typeof CloseWatcher === "undefined" && event.key?.toLowerCase() === "escape" && !event.defaultPrevented && (this.el.contains(target) || this.isOutside(target))
      );
    }));
    this.mousedown$ = tuiTypedFromEvent(this.doc, "mousedown").pipe(filter((event) => (
      // Scrollbars
      tuiGetViewportWidth(this.win) - event.clientX > 17 && this.isOutside(tuiGetActualTarget(event))
    )), switchMap(() => tuiTypedFromEvent(this.doc, "mouseup").pipe(take(1), map(tuiGetActualTarget), filter((target) => this.isOutside(target)))));
  }
  isOutside(target) {
    return tuiIsElement(target) && !tuiContainsOrAfter(this.el, target);
  }
};
_TuiDialogCloseService.\u0275fac = function TuiDialogCloseService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDialogCloseService)();
};
_TuiDialogCloseService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiDialogCloseService,
  factory: _TuiDialogCloseService.\u0275fac
});
var TuiDialogCloseService = _TuiDialogCloseService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogCloseService, [{
    type: Injectable
  }], () => [], null);
})();
var REQUIRED_ERROR = new Error("Required dialog was dismissed");
function toObservable(valueOrStream) {
  return isObservable(valueOrStream) ? valueOrStream : of(valueOrStream);
}
var _TuiDialogComponent = class _TuiDialogComponent {
  constructor() {
    this.close$ = new Subject();
    this.close = inject(TUI_CLOSE_WORD);
    this.icons = inject(TUI_COMMON_ICONS);
    this.context = injectContext();
    this.primitive = typeof this.context.content === "function" || Object(this.context.content) !== this.context.content;
    this.sub = merge(this.close$.pipe(switchMap(() => toObservable(this.context.closable))), inject(TuiDialogCloseService).pipe(exhaustMap(() => toObservable(this.context.dismissible).pipe(take(1)))), inject(TUI_DIALOGS_CLOSE).pipe(map(TUI_TRUE_HANDLER))).pipe(filter(Boolean), takeUntilDestroyed()).subscribe(() => {
      if (this.context.required) {
        this.context.$implicit.error(REQUIRED_ERROR);
      } else {
        this.context.$implicit.complete();
      }
    });
  }
};
_TuiDialogComponent.\u0275fac = function TuiDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDialogComponent)();
};
_TuiDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiDialogComponent,
  selectors: [["tui-dialog"]],
  hostAttrs: ["data-tui-version", "5.7.0"],
  hostVars: 6,
  hostBindings: function TuiDialogComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-appearance", ctx.context.appearance)("data-size", ctx.context.size);
      \u0275\u0275classProp("_closable", ctx.context.closable)("tui-backdrop-hidden", ctx.context.appearance.includes("fullscreen"));
    }
  },
  features: [\u0275\u0275ProvidersFeature([TuiDialogCloseService]), \u0275\u0275HostDirectivesFeature([TuiAnimated])],
  decls: 3,
  vars: 4,
  consts: [["tabindex", "0", "tuiButtonX", "", 3, "appearance"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tabindex", "0", "tuiButtonX", "", 3, "click", "appearance"], ["tuiTitle", ""], [3, "id", "innerHTML"], [3, "innerHTML"], ["size", "m", "tuiAutoFocus", "", "tuiButton", "", "type", "button", 3, "click"]],
  template: function TuiDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TuiDialogComponent_Conditional_0_Template, 2, 2, "button", 0)(1, TuiDialogComponent_Conditional_1_Template, 3, 2, "header")(2, TuiDialogComponent_ng_container_2_Template, 6, 4, "ng-container", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.context.closable ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.primitive && ctx.context.label ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("polymorpheusOutlet", ctx.context.content)("polymorpheusOutletContext", ctx.context);
    }
  },
  dependencies: [PolymorpheusOutlet, TuiAutoFocus, TuiButton, TuiButtonX, TuiTitle],
  styles: ['tui-dialog:where(*[data-tui-version="5.7.0"]){position:relative;box-sizing:border-box;overflow-wrap:break-word;font:var(--tui-typography-body-m);background:var(--tui-background-elevation-1);box-shadow:var(--tui-shadow-popup)}tui-dialog:where(*[data-tui-version="5.7.0"]):not([data-appearance~=fullscreen])._closable>header,tui-dialog:where(*[data-tui-version="5.7.0"]):not([data-appearance~=fullscreen])._closable>ng-component>header{padding-inline-end:2.5rem}tui-dialog:where(*[data-tui-version="5.7.0"]):not([data-appearance~=fullscreen])._closable>header p,tui-dialog:where(*[data-tui-version="5.7.0"]):not([data-appearance~=fullscreen])._closable>ng-component>header p{margin-inline-end:-2.5rem}tui-dialog:where(*[data-tui-version="5.7.0"])>header,tui-dialog:where(*[data-tui-version="5.7.0"])>ng-component>header{font:var(--tui-typography-heading-h5)}tui-dialog:where(*[data-tui-version="5.7.0"])>header [tuiTitle],tui-dialog:where(*[data-tui-version="5.7.0"])>ng-component>header [tuiTitle]{font:inherit}tui-dialog:where(*[data-tui-version="5.7.0"])>header p,tui-dialog:where(*[data-tui-version="5.7.0"])>ng-component>header p{margin:.25rem 0 0;font:var(--tui-typography-body-m)}tui-dialog:where(*[data-tui-version="5.7.0"])>header p:empty,tui-dialog:where(*[data-tui-version="5.7.0"])>ng-component>header p:empty{display:none}tui-dialog:where(*[data-tui-version="5.7.0"])>[tuiButtonX]{position:absolute;z-index:1;inset-block-start:1rem;inset-inline-end:1rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga]{max-inline-size:calc(100vw - 5rem);margin:2.5rem;padding:1.75rem;border-radius:1.5rem;--tui-from: translateY(2.5rem)}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga].tui-enter,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga].tui-leave{animation-name:tuiFade,tuiSlide}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]{inline-size:25rem;padding:1.5rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>ng-component>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h5)}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>ng-component>[tuiSlides]>*>header:not(:last-child){margin-block-end:1.25rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>footer,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>ng-component>footer{margin-block-start:1.25rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=m],tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]{inline-size:37.5rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=m]>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=m]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=m]>ng-component>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]>ng-component>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=m]>ng-component>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h4)}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=m]>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=m]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=m]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=m]>ng-component>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]>ng-component>[tuiSlides]>*>header:not(:last-child){margin-block-end:1.5rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]{inline-size:50rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga]>footer,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga]>ng-component>footer{display:flex;justify-content:flex-end;flex-wrap:wrap-reverse;gap:.75rem;margin-block-start:2rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]{display:flex;flex-direction:column;block-size:100%;inline-size:100%;padding:env(safe-area-inset-top) max(calc(50vw - var(--tui-width) / 2),1rem) max(2rem,env(safe-area-inset-bottom));background:var(--tui-background-base);box-shadow:none;--tui-width: 45rem;--tui-from: translateY(2rem)}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size].tui-enter,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size].tui-leave{animation-name:tuiFade,tuiSlide}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]{position:sticky;inset-block-start:env(safe-area-inset-top);block-size:4rem;inline-size:auto;align-self:flex-end;margin-block-end:2rem;border-radius:0!important;font:var(--tui-typography-body-l)!important;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0 / 0 / env(safe-area-inset-top) 100vw 0}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]:before{display:none}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size].tui-app-bar>[tuiButtonX]{display:none}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]:not(._closable):not(.tui-app-bar):before{content:"";block-size:1.5rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>tui-app-bar,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>tui-app-bar{position:sticky;z-index:1;inset-block-start:0;order:-1;border-inline-end:calc(50vw - var(--tui-width) / 2) solid transparent;border-inline-start:calc(50vw - var(--tui-width) / 2) solid transparent;margin:0 calc(var(--tui-width) / 2 - 50vw) 2rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h3);margin-block-end:2rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>footer,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer{display:flex;gap:.5rem .75rem;padding:2rem calc(50vw - var(--tui-width) / 2);margin:0 calc(var(--tui-width) / 2 - 50vw) calc(-2rem - env(safe-area-inset-top))}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>footer:before,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer:before{inset-inline-start:0;inset-inline-end:0}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>footer,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer{flex-direction:row;background:color-mix(in hsl,var(--tui-background-base) 80%,transparent);-webkit-backdrop-filter:blur(2rem);backdrop-filter:blur(2rem)}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>footer:before,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer:before{display:none}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>footer>button,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer>button,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>footer>a,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer>a{inline-size:auto}tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]{padding-block-end:max(1rem,env(safe-area-inset-bottom));--tui-from: translateY(4rem)}tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]{align-self:flex-start;block-size:3.5rem;margin-block-end:1rem}tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>tui-app-bar,tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>tui-app-bar{margin:calc(-1*env(safe-area-inset-top)) -1rem 1rem;padding-block-start:env(safe-area-inset-top);box-sizing:content-box}tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>header,tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>[tuiSlides]>*>header,tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>header,tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>[tuiSlides]>*>header{margin:-.25rem 0 1.5rem}tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>footer,tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer{padding:0 1rem max(1rem,env(safe-area-inset-bottom));margin:1.5rem -1rem calc(-1*max(1rem,env(safe-area-inset-bottom)))}[data-platform=ios] tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX][tuiButtonX]{block-size:2.75rem}\n'],
  encapsulation: 2
});
var TuiDialogComponent = _TuiDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogComponent, [{
    type: Component,
    args: [{
      selector: "tui-dialog",
      imports: [PolymorpheusOutlet, TuiAutoFocus, TuiButton, TuiButtonX, TuiTitle],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiDialogCloseService],
      hostDirectives: [TuiAnimated],
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-appearance]": "context.appearance",
        "[attr.data-size]": "context.size",
        "[class._closable]": "context.closable",
        "[class.tui-backdrop-hidden]": 'context.appearance.includes("fullscreen")'
      },
      template: `@if (context.closable) {
    <button
        tabindex="0"
        tuiButtonX
        [appearance]="context.appearance.includes('fullscreen') ? 'action' : 'neutral'"
        (click)="close$.next()"
    >
        {{ close() }}
    </button>
}

@if (!primitive && context.label) {
    <header>
        <hgroup tuiTitle>
            <h2
                [id]="context.id"
                [innerHTML]="context.label"
            ></h2>
        </hgroup>
    </header>
}

<ng-container *polymorpheusOutlet="context.content as text; context: context">
    <header>
        <hgroup tuiTitle>
            <h2
                [id]="context.id"
                [innerHTML]="context.label"
            ></h2>
            <p [innerHTML]="text"></p>
        </hgroup>
    </header>
    @if (context.closable || context.dismissible) {
        <footer>
            <button
                size="m"
                tuiAutoFocus
                tuiButton
                type="button"
                (click)="context.$implicit.complete()"
            >
                {{ context.data || 'OK' }}
            </button>
        </footer>
    }
</ng-container>
`,
      styles: ['tui-dialog:where(*[data-tui-version="5.7.0"]){position:relative;box-sizing:border-box;overflow-wrap:break-word;font:var(--tui-typography-body-m);background:var(--tui-background-elevation-1);box-shadow:var(--tui-shadow-popup)}tui-dialog:where(*[data-tui-version="5.7.0"]):not([data-appearance~=fullscreen])._closable>header,tui-dialog:where(*[data-tui-version="5.7.0"]):not([data-appearance~=fullscreen])._closable>ng-component>header{padding-inline-end:2.5rem}tui-dialog:where(*[data-tui-version="5.7.0"]):not([data-appearance~=fullscreen])._closable>header p,tui-dialog:where(*[data-tui-version="5.7.0"]):not([data-appearance~=fullscreen])._closable>ng-component>header p{margin-inline-end:-2.5rem}tui-dialog:where(*[data-tui-version="5.7.0"])>header,tui-dialog:where(*[data-tui-version="5.7.0"])>ng-component>header{font:var(--tui-typography-heading-h5)}tui-dialog:where(*[data-tui-version="5.7.0"])>header [tuiTitle],tui-dialog:where(*[data-tui-version="5.7.0"])>ng-component>header [tuiTitle]{font:inherit}tui-dialog:where(*[data-tui-version="5.7.0"])>header p,tui-dialog:where(*[data-tui-version="5.7.0"])>ng-component>header p{margin:.25rem 0 0;font:var(--tui-typography-body-m)}tui-dialog:where(*[data-tui-version="5.7.0"])>header p:empty,tui-dialog:where(*[data-tui-version="5.7.0"])>ng-component>header p:empty{display:none}tui-dialog:where(*[data-tui-version="5.7.0"])>[tuiButtonX]{position:absolute;z-index:1;inset-block-start:1rem;inset-inline-end:1rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga]{max-inline-size:calc(100vw - 5rem);margin:2.5rem;padding:1.75rem;border-radius:1.5rem;--tui-from: translateY(2.5rem)}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga].tui-enter,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga].tui-leave{animation-name:tuiFade,tuiSlide}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]{inline-size:25rem;padding:1.5rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>ng-component>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h5)}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>ng-component>[tuiSlides]>*>header:not(:last-child){margin-block-end:1.25rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>footer,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=s]>ng-component>footer{margin-block-start:1.25rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=m],tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]{inline-size:37.5rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=m]>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=m]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=m]>ng-component>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]>ng-component>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=m]>ng-component>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h4)}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=m]>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=m]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=m]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=m]>ng-component>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]>ng-component>[tuiSlides]>*>header:not(:last-child){margin-block-end:1.5rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga][data-size=l]{inline-size:50rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga]>footer,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=taiga]>ng-component>footer{display:flex;justify-content:flex-end;flex-wrap:wrap-reverse;gap:.75rem;margin-block-start:2rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]{display:flex;flex-direction:column;block-size:100%;inline-size:100%;padding:env(safe-area-inset-top) max(calc(50vw - var(--tui-width) / 2),1rem) max(2rem,env(safe-area-inset-bottom));background:var(--tui-background-base);box-shadow:none;--tui-width: 45rem;--tui-from: translateY(2rem)}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size].tui-enter,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size].tui-leave{animation-name:tuiFade,tuiSlide}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]{position:sticky;inset-block-start:env(safe-area-inset-top);block-size:4rem;inline-size:auto;align-self:flex-end;margin-block-end:2rem;border-radius:0!important;font:var(--tui-typography-body-l)!important;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0 / 0 / env(safe-area-inset-top) 100vw 0}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]:before{display:none}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size].tui-app-bar>[tuiButtonX]{display:none}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]:not(._closable):not(.tui-app-bar):before{content:"";block-size:1.5rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>tui-app-bar,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>tui-app-bar{position:sticky;z-index:1;inset-block-start:0;order:-1;border-inline-end:calc(50vw - var(--tui-width) / 2) solid transparent;border-inline-start:calc(50vw - var(--tui-width) / 2) solid transparent;margin:0 calc(var(--tui-width) / 2 - 50vw) 2rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>header,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h3);margin-block-end:2rem}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>footer,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer{display:flex;gap:.5rem .75rem;padding:2rem calc(50vw - var(--tui-width) / 2);margin:0 calc(var(--tui-width) / 2 - 50vw) calc(-2rem - env(safe-area-inset-top))}tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>footer:before,tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer:before{inset-inline-start:0;inset-inline-end:0}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>footer,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer{flex-direction:row;background:color-mix(in hsl,var(--tui-background-base) 80%,transparent);-webkit-backdrop-filter:blur(2rem);backdrop-filter:blur(2rem)}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>footer:before,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer:before{display:none}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>footer>button,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer>button,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>footer>a,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer>a{inline-size:auto}tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]{padding-block-end:max(1rem,env(safe-area-inset-bottom));--tui-from: translateY(4rem)}tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]{align-self:flex-start;block-size:3.5rem;margin-block-end:1rem}tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>tui-app-bar,tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>tui-app-bar{margin:calc(-1*env(safe-area-inset-top)) -1rem 1rem;padding-block-start:env(safe-area-inset-top);box-sizing:content-box}tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>header,tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>[tuiSlides]>*>header,tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>header,tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>[tuiSlides]>*>header{margin:-.25rem 0 1.5rem}tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>footer,tui-root._mobile tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer{padding:0 1rem max(1rem,env(safe-area-inset-bottom));margin:1.5rem -1rem calc(-1*max(1rem,env(safe-area-inset-bottom)))}[data-platform=ios] tui-dialog:where(*[data-tui-version="5.7.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX][tuiButtonX]{block-size:2.75rem}\n']
    }]
  }], null, null);
})();
var [TUI_DIALOG_OPTIONS, tuiDialogOptionsProvider] = tuiCreateOptions({
  appearance: "taiga",
  size: "m",
  required: false,
  closable: true,
  dismissible: true,
  label: "",
  data: void 0
});
var _TuiDialogService = class _TuiDialogService extends TuiModalService {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_DIALOG_OPTIONS);
    this.content = TuiDialogComponent;
  }
};
_TuiDialogService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiDialogService_BaseFactory;
  return function TuiDialogService_Factory(__ngFactoryType__) {
    return (\u0275TuiDialogService_BaseFactory || (\u0275TuiDialogService_BaseFactory = \u0275\u0275getInheritedFactory(_TuiDialogService)))(__ngFactoryType__ || _TuiDialogService);
  };
})();
_TuiDialogService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiDialogService,
  factory: _TuiDialogService.\u0275fac,
  providedIn: "root"
});
var TuiDialogService = _TuiDialogService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _TuiDialog = class _TuiDialog {
  constructor() {
    this.tuiDialogOptions = input({});
  }
};
_TuiDialog.\u0275fac = function TuiDialog_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDialog)();
};
_TuiDialog.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDialog,
  selectors: [["ng-template", "tuiDialog", ""]],
  inputs: {
    tuiDialogOptions: [1, "tuiDialogOptions"]
  },
  features: [\u0275\u0275ProvidersFeature([tuiAsPortal(TuiDialogService)]), \u0275\u0275HostDirectivesFeature([{
    directive: TuiPortalDirective,
    inputs: ["options", "tuiDialogOptions", "open", "tuiDialog"],
    outputs: ["openChange", "tuiDialogChange"]
  }])]
});
var TuiDialog = _TuiDialog;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialog, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiDialog]",
      providers: [tuiAsPortal(TuiDialogService)],
      hostDirectives: [{
        directive: TuiPortalDirective,
        inputs: ["options: tuiDialogOptions", "open: tuiDialog"],
        outputs: ["openChange: tuiDialogChange"]
      }]
    }]
  }], null, null);
})();

// projects/demo/src/app/pages/toolbar/bottom/examples/1/index.ts
var _Example = class _Example {
  constructor() {
    this.dialog = inject(TuiDialogService);
    this.builtInTools = [
      TuiEditorTool.Undo,
      TuiEditorTool.Link,
      TuiEditorTool.Img
    ];
    this.control = new FormControl("");
  }
  send() {
    this.dialog.open(this.control.value).subscribe();
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([provideTuiEditor()])], decls: 5, vars: 2, consts: [[1, "editor", 3, "formControl", "tools"], ["ngProjectAs", "tools", 5, ["tools"]], ["appearance", "secondary", "size", "s", "tuiButton", "", "type", "button", 3, "click"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-editor", 0);
    \u0275\u0275text(1, " Write message... ");
    \u0275\u0275elementContainerStart(2, 1);
    \u0275\u0275elementStart(3, "button", 2);
    \u0275\u0275listener("click", function Example_Template_button_click_3_listener() {
      return ctx.send();
    });
    \u0275\u0275text(4, " Send ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools);
  }
}, dependencies: [ReactiveFormsModule, NgControlStatus, FormControlDirective, TuiButton, TuiEditor], styles: ["\n\n.editor[_ngcontent-%COMP%] {\n  min-block-size: 12.5rem;\n  max-block-size: 12.5rem;\n}\n.editor[_ngcontent-%COMP%]     tui-toolbar {\n  position: absolute;\n  z-index: 1;\n  inset-inline-start: 0;\n  inset-block-end: 0;\n  inline-size: 100%;\n}\n.editor[_ngcontent-%COMP%]     tui-toolbar [tuiToolbar] {\n  box-shadow: 0 -0.0625rem 0.0625rem var(--tui-background-neutral-1-hover);\n}\n.editor[_ngcontent-%COMP%]     tui-scrollbar {\n  margin-block-end: 2.875rem;\n  padding: 0;\n}\n.editor[_ngcontent-%COMP%]     .t-placeholder {\n  margin-block-start: 1.625rem;\n}\n.editor[_ngcontent-%COMP%]     [tuiToolbarBlock]:last-child {\n  margin-inline-start: auto;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [ReactiveFormsModule, TuiButton, TuiEditor], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideTuiEditor()], template: '<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    Write message...\n\n    <ng-container ngProjectAs="tools">\n        <button\n            appearance="secondary"\n            size="s"\n            tuiButton\n            type="button"\n            (click)="send()"\n        >\n            Send\n        </button>\n    </ng-container>\n</tui-editor>\n', styles: ["/* projects/demo/src/app/pages/toolbar/bottom/examples/1/index.less */\n.editor {\n  min-block-size: 12.5rem;\n  max-block-size: 12.5rem;\n}\n.editor ::ng-deep tui-toolbar {\n  position: absolute;\n  z-index: 1;\n  inset-inline-start: 0;\n  inset-block-end: 0;\n  inline-size: 100%;\n}\n.editor ::ng-deep tui-toolbar [tuiToolbar] {\n  box-shadow: 0 -0.0625rem 0.0625rem var(--tui-background-neutral-1-hover);\n}\n.editor ::ng-deep tui-scrollbar {\n  margin-block-end: 2.875rem;\n  padding: 0;\n}\n.editor ::ng-deep .t-placeholder {\n  margin-block-start: 1.625rem;\n}\n.editor ::ng-deep [tuiToolbarBlock]:last-child {\n  margin-inline-start: auto;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/toolbar/bottom/examples/1/index.ts", lineNumber: 13 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-ZXIXTDSI.js.map
