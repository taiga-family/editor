import {
  TuiPopoverDirective
} from "./chunk-BBPZELMZ.js";
import {
  PolymorpheusOutlet,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TuiActiveZone,
  TuiAnimated,
  TuiAnimatedParent,
  TuiAutoFocus,
  TuiBreakpointService,
  TuiButton,
  TuiPopoverService,
  TuiScrollControls,
  TuiScrollRef,
  injectContext,
  tuiAsPopover,
  tuiGetClosestFocusable,
  tuiGetFocused,
  tuiGetViewportWidth
} from "./chunk-QA7BIT47.js";
import {
  tuiCloseWatcher,
  tuiTypedFromEvent,
  tuiZonefull
} from "./chunk-Z64UTBP3.js";
import {
  AsyncPipe,
  DOCUMENT,
  NgForOf,
  NgIf,
  TUI_TRUE_HANDLER,
  WA_WINDOW,
  takeUntilDestroyed,
  toSignal,
  tuiContainsOrAfter,
  tuiGetActualTarget,
  tuiInjectElement,
  tuiIsElement,
  tuiIsHTMLElement
} from "./chunk-P325F6NW.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Injectable,
  InjectionToken,
  computed,
  inject,
  setClassMetadata,
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
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-MN3TG6GQ.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  exhaustMap,
  filter,
  isObservable,
  map,
  merge,
  of,
  switchMap,
  take
} from "./chunk-CJ7OSSQR.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-focus-trap.mjs
var _TuiFocusTrap = class _TuiFocusTrap {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.activeElement = null;
    this.initialized = false;
    Promise.resolve().then(() => {
      this.initialized = true;
      this.activeElement = tuiGetFocused(this.doc);
      this.el.focus();
    });
  }
  ngOnDestroy() {
    this.initialized = false;
    if (tuiIsHTMLElement(this.activeElement)) {
      this.activeElement.focus();
    }
  }
  onFocusIn(node) {
    const {
      firstElementChild
    } = this.el;
    if (!tuiContainsOrAfter(this.el, node) && firstElementChild) {
      tuiGetClosestFocusable({
        initial: firstElementChild,
        root: this.el
      })?.focus();
    }
  }
};
_TuiFocusTrap.\u0275fac = function TuiFocusTrap_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiFocusTrap)();
};
_TuiFocusTrap.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiFocusTrap,
  selectors: [["", "tuiFocusTrap", ""]],
  hostAttrs: ["tabIndex", "0"],
  hostBindings: function TuiFocusTrap_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("focusin.zoneless", function TuiFocusTrap_focusin_zoneless_HostBindingHandler($event) {
        return ctx.initialized && ctx.onFocusIn($event.target);
      }, false, \u0275\u0275resolveWindow)("pointerdown", function TuiFocusTrap_pointerdown_HostBindingHandler($event) {
        return $event.currentTarget == null ? null : $event.currentTarget.removeAttribute("tabindex");
      });
    }
  }
});
var TuiFocusTrap = _TuiFocusTrap;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusTrap, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiFocusTrap]",
      host: {
        tabIndex: "0",
        "(window:focusin.zoneless)": "initialized && onFocusIn($event.target)",
        // https://bugs.webkit.org/show_bug.cgi?id=303022
        "(pointerdown)": '$event.currentTarget?.removeAttribute("tabindex")'
      }
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-dialog.mjs
function TuiDialogComponent_header_0_ng_container_1_Template(rf, ctx) {
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
function TuiDialogComponent_header_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 6);
    \u0275\u0275template(1, TuiDialogComponent_header_0_ng_container_1_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("polymorpheusOutlet", ctx_r1.header)("polymorpheusOutletContext", ctx_r1.context);
  }
}
function TuiDialogComponent_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 10);
    \u0275\u0275listener("click", function TuiDialogComponent_ng_container_4_div_2_Template_button_click_1_listener() {
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
    \u0275\u0275textInterpolate1(" ", (ctx_r1.context.data == null ? null : ctx_r1.context.data.button) || "OK", " ");
  }
}
function TuiDialogComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275template(2, TuiDialogComponent_ng_container_4_div_2_Template, 3, 1, "div", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", text_r4, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.context.closeable || ctx_r1.context.dismissible);
  }
}
function TuiDialogComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function TuiDialogComponent_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close$.next());
    })("mousedown.prevent.zoneless", function TuiDialogComponent_button_6_Template_button_mousedown_prevent_zoneless_0_listener() {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView(0);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border-radius", 100, "%");
    \u0275\u0275property("appearance", ctx_r1.isMobile() ? "icon" : "neutral")("iconStart", ctx_r1.icons.close)("size", ctx_r1.isMobile() ? "xs" : "s");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 6, ctx_r1.closeWord$), "\n");
  }
}
function TuiDialogs_section_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TuiDialogs_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2);
    \u0275\u0275template(1, TuiDialogs_section_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    \u0275\u0275element(2, "tui-scroll-controls", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275attribute("aria-labelledby", item_r1.id);
    \u0275\u0275advance();
    \u0275\u0275property("polymorpheusOutlet", item_r1.component)("polymorpheusOutletContext", item_r1);
  }
}
var TUI_DIALOGS = new InjectionToken(ngDevMode ? "TUI_DIALOGS" : "", {
  factory: () => new BehaviorSubject([])
});
var TUI_DIALOG_DEFAULT_OPTIONS = {
  appearance: "",
  size: "m",
  required: false,
  closeable: true,
  dismissible: true,
  label: "",
  header: "",
  data: void 0
};
var TUI_DIALOGS_CLOSE = new InjectionToken(ngDevMode ? "TUI_DIALOGS_CLOSE" : "", {
  factory: () => EMPTY
});
var TUI_DIALOG_OPTIONS = new InjectionToken(ngDevMode ? "TUI_DIALOG_OPTIONS" : "", {
  factory: () => TUI_DIALOG_DEFAULT_OPTIONS
});
var SCROLLBAR_PLACEHOLDER = 17;
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
    this.mousedown$ = tuiTypedFromEvent(this.doc, "mousedown").pipe(filter((event) => tuiGetViewportWidth(this.win) - event.clientX > SCROLLBAR_PLACEHOLDER && this.isOutside(tuiGetActualTarget(event))), switchMap(() => tuiTypedFromEvent(this.doc, "mouseup").pipe(take(1), map(tuiGetActualTarget), filter((target) => this.isOutside(target)))));
  }
  isOutside(target) {
    return tuiIsElement(target) && (!tuiContainsOrAfter(this.el, target) || // TODO: Drop 'new' attribute in v5
    target === this.el && !this.el.hasAttribute("new"));
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
  }], function() {
    return [];
  }, null);
})();
var REQUIRED_ERROR = new Error("Required dialog was dismissed");
function toObservable(valueOrStream) {
  return isObservable(valueOrStream) ? valueOrStream : of(valueOrStream);
}
var _TuiDialogComponent = class _TuiDialogComponent {
  constructor() {
    this.close$ = new Subject();
    this.context = injectContext();
    this.closeWord$ = inject(TUI_CLOSE_WORD);
    this.icons = inject(TUI_COMMON_ICONS);
    this.from = computed(() => this.size === "fullscreen" || this.size === "page" || this.isMobile() ? "translateY(100vh)" : "translateY(2.5rem)");
    this.isMobile = toSignal(inject(TuiBreakpointService).pipe(map((breakpoint) => breakpoint === "mobile")));
    merge(this.close$.pipe(switchMap(() => toObservable(this.context.closeable))), inject(TuiDialogCloseService).pipe(exhaustMap(() => toObservable(this.context.dismissible).pipe(take(1)))), inject(TUI_DIALOGS_CLOSE).pipe(map(TUI_TRUE_HANDLER))).pipe(filter(Boolean), takeUntilDestroyed()).subscribe(() => {
      this.close();
    });
  }
  get size() {
    return this.context.size;
  }
  get header() {
    return this.context.header;
  }
  close() {
    if (this.context.required) {
      this.context.$implicit.error(REQUIRED_ERROR);
    } else {
      this.context.$implicit.complete();
    }
  }
};
_TuiDialogComponent.\u0275fac = function TuiDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDialogComponent)();
};
_TuiDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiDialogComponent,
  selectors: [["tui-dialog"]],
  hostVars: 6,
  hostBindings: function TuiDialogComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-appearance", ctx.context.appearance)("data-size", ctx.size);
      \u0275\u0275styleProp("--tui-from", ctx.from());
      \u0275\u0275classProp("_centered", ctx.header);
    }
  },
  features: [\u0275\u0275ProvidersFeature([TuiDialogCloseService]), \u0275\u0275HostDirectivesFeature([TuiAnimated])],
  decls: 7,
  vars: 8,
  consts: [["class", "t-header", 4, "ngIf"], [1, "t-content"], [1, "t-heading", 3, "id", "textContent"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-filler"], ["automation-id", "tui-dialog__close", "tuiIconButton", "", "type", "button", "class", "t-close", 3, "appearance", "iconStart", "size", "border-radius", "click", "mousedown.prevent.zoneless", 4, "ngIf"], [1, "t-header"], [3, "innerHTML"], ["class", "t-buttons", 4, "ngIf"], [1, "t-buttons"], ["size", "m", "tuiAutoFocus", "", "tuiButton", "", "type", "button", 3, "click"], ["automation-id", "tui-dialog__close", "tuiIconButton", "", "type", "button", 1, "t-close", 3, "click", "mousedown.prevent.zoneless", "appearance", "iconStart", "size"]],
  template: function TuiDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TuiDialogComponent_header_0_Template, 2, 2, "header", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275element(2, "h2", 2);
      \u0275\u0275elementStart(3, "section");
      \u0275\u0275template(4, TuiDialogComponent_ng_container_4_Template, 3, 2, "ng-container", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(5, "div", 4);
      \u0275\u0275template(6, TuiDialogComponent_button_6_Template, 3, 8, "button", 5);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.header);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("t-heading_closable", ctx.context.closeable && !ctx.header);
      \u0275\u0275property("id", ctx.context.id)("textContent", ctx.context.label);
      \u0275\u0275advance(2);
      \u0275\u0275property("polymorpheusOutlet", ctx.context.content)("polymorpheusOutletContext", ctx.context);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.context.closeable);
    }
  },
  dependencies: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiAutoFocus, TuiButton],
  styles: ['[_nghost-%COMP%]{position:relative;display:flex;font:var(--tui-font-text-m);flex-direction:column;box-sizing:border-box;margin:auto;border-radius:1.5rem;border:2.5rem solid transparent}.tui-enter[_nghost-%COMP%], .tui-leave[_nghost-%COMP%]{animation-name:tuiFade,tuiSlide}[_nghost-%COMP%]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";border-radius:inherit;pointer-events:none;box-shadow:var(--tui-shadow-popup)}[data-size=auto][_nghost-%COMP%]{inline-size:auto}[data-size=s][_nghost-%COMP%]{inline-size:30rem}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:1.5rem}[data-size=s][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}[data-size=m][_nghost-%COMP%]{inline-size:42.5rem}[data-size=l][_nghost-%COMP%]{inline-size:55rem}[data-size=fullscreen][_nghost-%COMP%], [data-size=page][_nghost-%COMP%]{min-inline-size:100vw;min-block-size:100%;border-radius:0;border:none;background:var(--tui-background-elevation-1);box-shadow:0 4rem var(--tui-background-elevation-1)}[data-size=fullscreen][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], [data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:3rem calc(50vw - 22.5rem)}[data-size=fullscreen][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], [data-size=page][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-3)}._centered[_nghost-%COMP%]{text-align:center}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]{min-inline-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0;border:none;margin:auto 0 0;background:var(--tui-background-elevation-1);padding-block-end:env(safe-area-inset-bottom)}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:1rem}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}[_nghost-%COMP%]   tui-root._mobile[data-size=fullscreen][_nghost-%COMP%], tui-root._mobile   [data-size=fullscreen][_nghost-%COMP%], [_nghost-%COMP%]   tui-root._mobile[data-size=page][_nghost-%COMP%], tui-root._mobile   [data-size=page][_nghost-%COMP%]{padding:env(safe-area-inset-top) 0 env(safe-area-inset-bottom)}[_nghost-%COMP%]   tui-root._mobile[data-size=fullscreen][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%], tui-root._mobile   [data-size=fullscreen][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%], [_nghost-%COMP%]   tui-root._mobile[data-size=page][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%], tui-root._mobile   [data-size=page][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{top:max(1rem,env(safe-area-inset-top))}[data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], tui-root._mobile   [data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0}.t-heading[_ngcontent-%COMP%]{margin:0 0 .5rem;overflow-wrap:break-word;font:var(--tui-font-heading-4)}.t-heading_closable[_ngcontent-%COMP%]{padding-inline-end:2rem}.t-heading[_ngcontent-%COMP%]:empty{display:none}.t-header[_ngcontent-%COMP%]{display:flex;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden}[data-size=fullscreen][_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{flex:1}.t-content[_ngcontent-%COMP%]{border-radius:inherit;padding:1.75rem;background:var(--tui-background-elevation-1)}.t-content[_ngcontent-%COMP%]:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.t-content[_ngcontent-%COMP%] > section[_ngcontent-%COMP%]{border-radius:inherit}.t-filler[_ngcontent-%COMP%]{flex-grow:1}.t-close[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:1rem;right:1rem}@supports (inset-inline-end: 0){.t-close[_ngcontent-%COMP%]{right:unset;inset-inline-end:1rem}}.t-buttons[_ngcontent-%COMP%]{margin-block-start:1.25rem;text-align:end}']
});
var TuiDialogComponent = _TuiDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dialog",
      imports: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiAutoFocus, TuiButton],
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiDialogCloseService],
      hostDirectives: [TuiAnimated],
      host: {
        "[attr.data-appearance]": "context.appearance",
        "[attr.data-size]": "size",
        "[class._centered]": "header",
        "[style.--tui-from]": "from()"
      },
      template: `<header
    *ngIf="header"
    class="t-header"
>
    <ng-container *polymorpheusOutlet="header as text; context: context">
        {{ text }}
    </ng-container>
</header>
<div class="t-content">
    <h2
        class="t-heading"
        [class.t-heading_closable]="context.closeable && !header"
        [id]="context.id"
        [textContent]="context.label"
    ></h2>
    <section>
        <ng-container *polymorpheusOutlet="context.content as text; context: context">
            <div [innerHTML]="text"></div>
            <div
                *ngIf="context.closeable || context.dismissible"
                class="t-buttons"
            >
                <button
                    size="m"
                    tuiAutoFocus
                    tuiButton
                    type="button"
                    (click)="context.$implicit.complete()"
                >
                    {{ context.data?.button || 'OK' }}
                </button>
            </div>
        </ng-container>
    </section>
</div>
<div class="t-filler"></div>

<!-- Close button is insensitive to \`context.closeable === Observable<false>\` by design -->
<button
    *ngIf="context.closeable"
    automation-id="tui-dialog__close"
    tuiIconButton
    type="button"
    class="t-close"
    [appearance]="isMobile() ? 'icon' : 'neutral'"
    [iconStart]="icons.close"
    [size]="isMobile() ? 'xs' : 's'"
    [style.border-radius.%]="100"
    (click)="close$.next()"
    (mousedown.prevent.zoneless)="(0)"
>
    {{ closeWord$ | async }}
</button>
`,
      styles: [':host{position:relative;display:flex;font:var(--tui-font-text-m);flex-direction:column;box-sizing:border-box;margin:auto;border-radius:1.5rem;border:2.5rem solid transparent}:host.tui-enter,:host.tui-leave{animation-name:tuiFade,tuiSlide}:host:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";border-radius:inherit;pointer-events:none;box-shadow:var(--tui-shadow-popup)}:host[data-size=auto]{inline-size:auto}:host[data-size=s]{inline-size:30rem}:host[data-size=s] .t-content{padding:1.5rem}:host[data-size=s] .t-heading{font:var(--tui-font-heading-5)}:host[data-size=m]{inline-size:42.5rem}:host[data-size=l]{inline-size:55rem}:host[data-size=fullscreen],:host[data-size=page]{min-inline-size:100vw;min-block-size:100%;border-radius:0;border:none;background:var(--tui-background-elevation-1);box-shadow:0 4rem var(--tui-background-elevation-1)}:host[data-size=fullscreen] .t-content,:host[data-size=page] .t-content{padding:3rem calc(50vw - 22.5rem)}:host[data-size=fullscreen] .t-heading,:host[data-size=page] .t-heading{font:var(--tui-font-heading-3)}:host._centered{text-align:center}:host :host-context(tui-root._mobile)[data-size]{min-inline-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0;border:none;margin:auto 0 0;background:var(--tui-background-elevation-1);padding-block-end:env(safe-area-inset-bottom)}:host :host-context(tui-root._mobile)[data-size] .t-content{padding:1rem}:host :host-context(tui-root._mobile)[data-size] .t-heading{font:var(--tui-font-heading-5)}:host :host-context(tui-root._mobile)[data-size=fullscreen],:host :host-context(tui-root._mobile)[data-size=page]{padding:env(safe-area-inset-top) 0 env(safe-area-inset-bottom)}:host :host-context(tui-root._mobile)[data-size=fullscreen] .t-close,:host :host-context(tui-root._mobile)[data-size=page] .t-close{top:max(1rem,env(safe-area-inset-top))}:host[data-size=page] .t-content,:host-context(tui-root._mobile) :host[data-size=page] .t-content{padding:0}.t-heading{margin:0 0 .5rem;overflow-wrap:break-word;font:var(--tui-font-heading-4)}.t-heading_closable{padding-inline-end:2rem}.t-heading:empty{display:none}.t-header{display:flex;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden}:host[data-size=fullscreen] :host-context(tui-root._mobile) .t-header{flex:1}.t-content{border-radius:inherit;padding:1.75rem;background:var(--tui-background-elevation-1)}.t-content:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.t-content>section{border-radius:inherit}.t-filler{flex-grow:1}.t-close{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:1rem;right:1rem}@supports (inset-inline-end: 0){.t-close{right:unset;inset-inline-end:1rem}}.t-buttons{margin-block-start:1.25rem;text-align:end}\n']
    }]
  }], function() {
    return [];
  }, null);
})();
var _TuiDialogService = class _TuiDialogService extends TuiPopoverService {
};
_TuiDialogService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiDialogService_BaseFactory;
  return function TuiDialogService_Factory(__ngFactoryType__) {
    return (\u0275TuiDialogService_BaseFactory || (\u0275TuiDialogService_BaseFactory = \u0275\u0275getInheritedFactory(_TuiDialogService)))(__ngFactoryType__ || _TuiDialogService);
  };
})();
_TuiDialogService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiDialogService,
  factory: () => (() => new _TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS)))(),
  providedIn: "root"
});
var TuiDialogService = _TuiDialogService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS))
    }]
  }], null, null);
})();
var _TuiDialog = class _TuiDialog extends TuiPopoverDirective {
};
_TuiDialog.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiDialog_BaseFactory;
  return function TuiDialog_Factory(__ngFactoryType__) {
    return (\u0275TuiDialog_BaseFactory || (\u0275TuiDialog_BaseFactory = \u0275\u0275getInheritedFactory(_TuiDialog)))(__ngFactoryType__ || _TuiDialog);
  };
})();
_TuiDialog.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiDialog,
  selectors: [["ng-template", "tuiDialog", ""]],
  inputs: {
    options: [0, "tuiDialogOptions", "options"],
    open: [0, "tuiDialog", "open"]
  },
  outputs: {
    openChange: "tuiDialogChange"
  },
  features: [\u0275\u0275ProvidersFeature([tuiAsPopover(TuiDialogService)]), \u0275\u0275InheritDefinitionFeature]
});
var TuiDialog = _TuiDialog;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialog, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiDialog]",
      inputs: ["options: tuiDialogOptions", "open: tuiDialog"],
      outputs: ["openChange: tuiDialogChange"],
      providers: [tuiAsPopover(TuiDialogService)]
    }]
  }], null, null);
})();
var _TuiActiveZoneAdapter = class _TuiActiveZoneAdapter {
  constructor() {
    this.current = inject(TuiActiveZone);
    this.parent = findActive(inject(TuiActiveZone, {
      skipSelf: true
    }), tuiGetFocused(inject(DOCUMENT)));
  }
  ngOnInit() {
    this.current.tuiActiveZoneParentSetter = this.parent;
  }
  ngOnDestroy() {
    this.current.tuiActiveZoneParentSetter = null;
  }
};
_TuiActiveZoneAdapter.\u0275fac = function TuiActiveZoneAdapter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiActiveZoneAdapter)();
};
_TuiActiveZoneAdapter.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiActiveZoneAdapter,
  selectors: [["", "tuiActiveZoneAdapter", ""]],
  features: [\u0275\u0275HostDirectivesFeature([TuiActiveZone])]
});
var TuiActiveZoneAdapter = _TuiActiveZoneAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiActiveZoneAdapter, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiActiveZoneAdapter]",
      hostDirectives: [TuiActiveZone]
    }]
  }], null, null);
})();
function findActive(zone, element) {
  if (!element || !zone.contains(element)) {
    return null;
  }
  const active = zone.children.find((child) => child.contains(element));
  return active ? findActive(active, element) : zone;
}
var _TuiDialogs = class _TuiDialogs {
  constructor() {
    this.dialogs = toSignal(inject(TUI_DIALOGS), {
      initialValue: []
    });
  }
};
_TuiDialogs.\u0275fac = function TuiDialogs_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDialogs)();
};
_TuiDialogs.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiDialogs,
  selectors: [["tui-dialogs"]],
  decls: 2,
  vars: 3,
  consts: [[1, "t-overlay"], ["aria-modal", "true", "role", "dialog", "tuiActiveZoneAdapter", "", "tuiAnimatedParent", "", "tuiFocusTrap", "", "tuiScrollRef", "", "class", "t-dialog", 4, "ngFor", "ngForOf"], ["aria-modal", "true", "role", "dialog", "tuiActiveZoneAdapter", "", "tuiAnimatedParent", "", "tuiFocusTrap", "", "tuiScrollRef", "", 1, "t-dialog"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-scrollbars"]],
  template: function TuiDialogs_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
      \u0275\u0275template(1, TuiDialogs_section_1_Template, 3, 3, "section", 1);
    }
    if (rf & 2) {
      \u0275\u0275classProp("t-overlay_visible", ctx.dialogs().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.dialogs());
    }
  },
  dependencies: [NgForOf, PolymorpheusOutlet, TuiActiveZoneAdapter, TuiAnimatedParent, TuiFocusTrap, TuiScrollControls, TuiScrollRef],
  styles: ['[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none;overflow-wrap:break-word;margin-block-start:var(--t-root-top)}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]:has(section){pointer-events:auto;overflow:auto}[_nghost-%COMP%]:has(section:only-of-type     tui-dialog[new][data-appearance~=fullscreen])>.t-overlay, [_nghost-%COMP%]:has(section:only-of-type     tui-notification-middle)>.t-overlay{opacity:0}[_nghost-%COMP%]:before{content:"";display:block;block-size:200%}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{transition-property:filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-dialog[_ngcontent-%COMP%]{position:sticky;overscroll-behavior:none;filter:brightness(.25)}.t-dialog[_ngcontent-%COMP%]:has(tui-dialog[new]){display:grid;place-items:center}.t-dialog[_ngcontent-%COMP%]    >.tui-enter+.t-scrollbars .t-bar_vertical, .t-dialog[_ngcontent-%COMP%]    >.tui-leave+.t-scrollbars .t-bar_vertical{display:none}.t-overlay[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none);opacity:0;transition-timing-function:ease-in}.t-overlay_visible[_ngcontent-%COMP%]{opacity:1;transition-timing-function:ease-out}.t-dialog[_ngcontent-%COMP%]:last-child{pointer-events:auto;filter:none}tui-root:has(tui-dropdown-mobile._sheet)[_nghost-%COMP%]   .t-dialog[_ngcontent-%COMP%]:last-child, tui-root:has(tui-dropdown-mobile._sheet)   [_nghost-%COMP%]   .t-dialog[_ngcontent-%COMP%]:last-child{filter:brightness(.5)}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}.t-scrollbars[_ngcontent-%COMP%]     .t-bar_horizontal, .t-scrollbars[_ngcontent-%COMP%]     .t-bar_vertical .t-thumb[style*="height: 100%"]{display:none}']
});
var TuiDialogs = _TuiDialogs;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogs, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dialogs",
      imports: [NgForOf, PolymorpheusOutlet, TuiActiveZoneAdapter, TuiAnimatedParent, TuiFocusTrap, TuiScrollControls, TuiScrollRef],
      changeDetection: ChangeDetectionStrategy.Default,
      template: '<div\n    class="t-overlay"\n    [class.t-overlay_visible]="dialogs().length"\n></div>\n<!--TODO: Rename to <article> in v5-->\n<section\n    *ngFor="let item of dialogs()"\n    aria-modal="true"\n    role="dialog"\n    tuiActiveZoneAdapter\n    tuiAnimatedParent\n    tuiFocusTrap\n    tuiScrollRef\n    class="t-dialog"\n    [attr.aria-labelledby]="item.id"\n>\n    <ng-container *polymorpheusOutlet="item.component; context: item" />\n    <tui-scroll-controls class="t-scrollbars" />\n</section>\n',
      styles: [':host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none;overflow-wrap:break-word;margin-block-start:var(--t-root-top)}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host:has(section){pointer-events:auto;overflow:auto}:host:has(section:only-of-type ::ng-deep tui-dialog[new][data-appearance~=fullscreen])>.t-overlay,:host:has(section:only-of-type ::ng-deep tui-notification-middle)>.t-overlay{opacity:0}:host:before{content:"";display:block;block-size:200%}.t-overlay,.t-dialog{transition-property:filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay::-webkit-scrollbar,.t-dialog::-webkit-scrollbar,.t-overlay::-webkit-scrollbar-thumb,.t-dialog::-webkit-scrollbar-thumb{display:none}.t-dialog{position:sticky;overscroll-behavior:none;filter:brightness(.25)}.t-dialog:has(tui-dialog[new]){display:grid;place-items:center}.t-dialog ::ng-deep>.tui-enter+.t-scrollbars .t-bar_vertical,.t-dialog ::ng-deep>.tui-leave+.t-scrollbars .t-bar_vertical{display:none}.t-overlay{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none);opacity:0;transition-timing-function:ease-in}.t-overlay_visible{opacity:1;transition-timing-function:ease-out}.t-dialog:last-child{pointer-events:auto;filter:none}:host-context(tui-root:has(tui-dropdown-mobile._sheet)) .t-dialog:last-child{filter:brightness(.5)}.t-scrollbars{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}.t-scrollbars ::ng-deep .t-bar_horizontal,.t-scrollbars ::ng-deep .t-bar_vertical .t-thumb[style*="height: 100%"]{display:none}\n']
    }]
  }], null, null);
})();

export {
  TUI_DIALOGS,
  TuiDialogService,
  TuiDialogs
};
//# sourceMappingURL=chunk-UHHDJT7R.js.map
