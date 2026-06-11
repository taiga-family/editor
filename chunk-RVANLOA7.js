import {
  PolymorpheusComponent,
  PolymorpheusOutlet,
  TUI_LEAVE,
  TUI_VERSION,
  TuiActiveZone,
  TuiPopupService,
  TuiPortal,
  TuiScrollControls,
  TuiScrollRef,
  injectContext,
  tuiGetClosestFocusable,
  tuiGetFocused
} from "./chunk-DFGPXHHY.js";
import {
  tuiContainsOrAfter,
  tuiInjectElement,
  tuiIsHTMLElement
} from "./chunk-YZQ2AVZQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Directive,
  Injectable,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵresolveWindow,
  ɵɵtemplate
} from "./chunk-6FE6LACA.js";

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
      \u0275\u0275listener("pointerdown", function TuiFocusTrap_pointerdown_HostBindingHandler($event) {
        return $event.currentTarget == null ? null : $event.currentTarget.removeAttribute("tabindex");
      })("focusin.zoneless", function TuiFocusTrap_focusin_zoneless_HostBindingHandler($event) {
        return ctx.initialized && ctx.onFocusIn($event.target);
      }, false, \u0275\u0275resolveWindow);
    }
  }
});
var TuiFocusTrap = _TuiFocusTrap;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusTrap, [{
    type: Directive,
    args: [{
      selector: "[tuiFocusTrap]",
      host: {
        tabIndex: "0",
        "(pointerdown)": '$event.currentTarget?.removeAttribute("tabindex")',
        "(window:focusin.zoneless)": "initialized && onFocusIn($event.target)"
      }
    }]
  }], () => [], null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-modal.mjs
function TuiModalComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var _TuiModalComponent = class _TuiModalComponent {
  constructor() {
    this.current = inject(TuiActiveZone);
    this.parent = findActive(inject(TuiActiveZone, {
      skipSelf: true
    }), tuiGetFocused(inject(DOCUMENT)));
    this.context = injectContext();
    this.component = signal(null);
  }
  ngOnInit() {
    this.current.tuiActiveZoneParentSetter = this.parent;
  }
  ngOnDestroy() {
    this.current.tuiActiveZoneParentSetter = null;
  }
};
_TuiModalComponent.\u0275fac = function TuiModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiModalComponent)();
};
_TuiModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiModalComponent,
  selectors: [["tui-modal"]],
  hostAttrs: ["aria-modal", "true", "data-tui-version", "5.10.0", "role", "dialog", 1, "tui-enter"],
  hostVars: 1,
  hostBindings: function TuiModalComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("animationend.self", function TuiModalComponent_animationend_self_HostBindingHandler($event) {
        return $event.target.classList.remove("tui-enter");
      });
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-labelledby", ctx.context.id);
    }
  },
  features: [\u0275\u0275HostDirectivesFeature([TuiActiveZone, TuiFocusTrap])],
  decls: 3,
  vars: 2,
  consts: [["tuiScrollRef", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-scrollbars"]],
  template: function TuiModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, TuiModalComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
      \u0275\u0275element(2, "tui-scroll-controls", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("polymorpheusOutlet", ctx.component())("polymorpheusOutletContext", ctx.context);
    }
  },
  dependencies: [PolymorpheusOutlet, TuiScrollControls, TuiScrollRef],
  styles: ['@keyframes tuiModalBackdrop{0%{-webkit-backdrop-filter:none;backdrop-filter:none}to{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}}@keyframes tuiDummy{to{color:currentColor}}tui-modal:where(*[data-tui-version="5.10.0"]){scrollbar-width:none;-ms-overflow-style:none;position:fixed;inset:0;outline:none;overflow:auto;overscroll-behavior:none;transform:translateY(var(--t-root-top))}tui-modal:where(*[data-tui-version="5.10.0"])::-webkit-scrollbar,tui-modal:where(*[data-tui-version="5.10.0"])::-webkit-scrollbar-thumb{display:none}tui-modal:where(*[data-tui-version="5.10.0"]):not(:last-of-type){interactivity:inert}@supports not (selector(:has(*))) or not (selector(:nth-child(1 of *))){tui-modal:where(*[data-tui-version="5.10.0"]):last-of-type:not(.tui-leave):before{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}tui-modal:where(*[data-tui-version="5.10.0"]):last-of-type.tui-enter,tui-modal:where(*[data-tui-version="5.10.0"]):last-of-type.tui-leave{animation-name:tuiDummy}tui-modal:where(*[data-tui-version="5.10.0"]):last-of-type.tui-enter:before,tui-modal:where(*[data-tui-version="5.10.0"]):last-of-type.tui-leave:before{animation-name:tuiModalBackdrop}}@supports (selector(:has(*))){tui-modal:where(*[data-tui-version="5.10.0"]):nth-last-child(1 of tui-modal:not(.tui-leave):not(:has(.tui-backdrop-hidden))):before{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}tui-modal:where(*[data-tui-version="5.10.0"]):nth-last-child(1 of tui-modal:not(:has(.tui-backdrop-hidden))):is(.tui-enter,.tui-leave){animation-name:tuiDummy}tui-modal:where(*[data-tui-version="5.10.0"]):nth-last-child(1 of tui-modal:not(:has(.tui-backdrop-hidden))):is(.tui-enter,.tui-leave):before{animation-name:tuiModalBackdrop}}tui-modal:where(*[data-tui-version="5.10.0"]):before{transition-property:backdrop-filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:sticky;inset:0;display:block;block-size:200%;transition-timing-function:linear;animation-duration:var(--tui-duration);animation-timing-function:cubic-bezier(.14,.52,.35,.84);perspective:10rem}tui-modal:where(*[data-tui-version="5.10.0"]).tui-leave:before{animation-direction:reverse}tui-modal:where(*[data-tui-version="5.10.0"])>[tuiScrollRef]{scrollbar-width:none;-ms-overflow-style:none;position:sticky;inset:0;display:grid;place-items:center;block-size:100%;overflow:auto;overscroll-behavior:none}tui-modal:where(*[data-tui-version="5.10.0"])>[tuiScrollRef]::-webkit-scrollbar,tui-modal:where(*[data-tui-version="5.10.0"])>[tuiScrollRef]::-webkit-scrollbar-thumb{display:none}tui-modal:where(*[data-tui-version="5.10.0"])>[tuiScrollRef]>.t-scrollbars{position:fixed;inset:0;margin:0;color:#747474}tui-modal:where(*[data-tui-version="5.10.0"])>[tuiScrollRef]>.t-scrollbars .t-bar_horizontal,tui-modal:where(*[data-tui-version="5.10.0"])>[tuiScrollRef]>.t-scrollbars .t-bar_vertical .t-thumb[style*="height: 100%"]{display:none}tui-modal:where(*[data-tui-version="5.10.0"])>[tuiScrollRef]>.tui-enter+.t-scrollbars .t-bar_vertical,tui-modal:where(*[data-tui-version="5.10.0"])>[tuiScrollRef]>.tui-leave+.t-scrollbars .t-bar_vertical{display:none}\n'],
  encapsulation: 2
});
var TuiModalComponent = _TuiModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiModalComponent, [{
    type: Component,
    args: [{
      selector: "tui-modal",
      imports: [PolymorpheusOutlet, TuiScrollControls, TuiScrollRef],
      template: `
        <div tuiScrollRef>
            <ng-container *polymorpheusOutlet="component(); context: context" />
            <tui-scroll-controls class="t-scrollbars" />
        </div>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      hostDirectives: [TuiActiveZone, TuiFocusTrap],
      host: {
        "aria-modal": "true",
        "data-tui-version": TUI_VERSION,
        role: "dialog",
        class: "tui-enter",
        "[attr.aria-labelledby]": "context.id",
        "(animationend.self)": '$event.target.classList.remove("tui-enter")'
      },
      styles: ['@keyframes tuiModalBackdrop{0%{-webkit-backdrop-filter:none;backdrop-filter:none}to{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}}@keyframes tuiDummy{to{color:currentColor}}tui-modal:where(*[data-tui-version="5.10.0"]){scrollbar-width:none;-ms-overflow-style:none;position:fixed;inset:0;outline:none;overflow:auto;overscroll-behavior:none;transform:translateY(var(--t-root-top))}tui-modal:where(*[data-tui-version="5.10.0"])::-webkit-scrollbar,tui-modal:where(*[data-tui-version="5.10.0"])::-webkit-scrollbar-thumb{display:none}tui-modal:where(*[data-tui-version="5.10.0"]):not(:last-of-type){interactivity:inert}@supports not (selector(:has(*))) or not (selector(:nth-child(1 of *))){tui-modal:where(*[data-tui-version="5.10.0"]):last-of-type:not(.tui-leave):before{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}tui-modal:where(*[data-tui-version="5.10.0"]):last-of-type.tui-enter,tui-modal:where(*[data-tui-version="5.10.0"]):last-of-type.tui-leave{animation-name:tuiDummy}tui-modal:where(*[data-tui-version="5.10.0"]):last-of-type.tui-enter:before,tui-modal:where(*[data-tui-version="5.10.0"]):last-of-type.tui-leave:before{animation-name:tuiModalBackdrop}}@supports (selector(:has(*))){tui-modal:where(*[data-tui-version="5.10.0"]):nth-last-child(1 of tui-modal:not(.tui-leave):not(:has(.tui-backdrop-hidden))):before{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}tui-modal:where(*[data-tui-version="5.10.0"]):nth-last-child(1 of tui-modal:not(:has(.tui-backdrop-hidden))):is(.tui-enter,.tui-leave){animation-name:tuiDummy}tui-modal:where(*[data-tui-version="5.10.0"]):nth-last-child(1 of tui-modal:not(:has(.tui-backdrop-hidden))):is(.tui-enter,.tui-leave):before{animation-name:tuiModalBackdrop}}tui-modal:where(*[data-tui-version="5.10.0"]):before{transition-property:backdrop-filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:sticky;inset:0;display:block;block-size:200%;transition-timing-function:linear;animation-duration:var(--tui-duration);animation-timing-function:cubic-bezier(.14,.52,.35,.84);perspective:10rem}tui-modal:where(*[data-tui-version="5.10.0"]).tui-leave:before{animation-direction:reverse}tui-modal:where(*[data-tui-version="5.10.0"])>[tuiScrollRef]{scrollbar-width:none;-ms-overflow-style:none;position:sticky;inset:0;display:grid;place-items:center;block-size:100%;overflow:auto;overscroll-behavior:none}tui-modal:where(*[data-tui-version="5.10.0"])>[tuiScrollRef]::-webkit-scrollbar,tui-modal:where(*[data-tui-version="5.10.0"])>[tuiScrollRef]::-webkit-scrollbar-thumb{display:none}tui-modal:where(*[data-tui-version="5.10.0"])>[tuiScrollRef]>.t-scrollbars{position:fixed;inset:0;margin:0;color:#747474}tui-modal:where(*[data-tui-version="5.10.0"])>[tuiScrollRef]>.t-scrollbars .t-bar_horizontal,tui-modal:where(*[data-tui-version="5.10.0"])>[tuiScrollRef]>.t-scrollbars .t-bar_vertical .t-thumb[style*="height: 100%"]{display:none}tui-modal:where(*[data-tui-version="5.10.0"])>[tuiScrollRef]>.tui-enter+.t-scrollbars .t-bar_vertical,tui-modal:where(*[data-tui-version="5.10.0"])>[tuiScrollRef]>.tui-leave+.t-scrollbars .t-bar_vertical{display:none}\n']
    }]
  }], null, null);
})();
function findActive(zone, el) {
  if (!el || !zone.contains(el)) {
    return null;
  }
  const active = zone.children.find((child) => !child["el"].matches("[tuiActiveZoneAdapter]") && child.contains(el));
  return active ? findActive(active, el) : zone;
}
var _TuiModalService = class _TuiModalService extends TuiPortal {
  constructor() {
    super(inject(TuiPopupService));
    this.component = TuiModalComponent;
  }
  add(component) {
    const ref = this.service.add(component);
    const el = ref.location.nativeElement;
    ref.instance.component.set(new PolymorpheusComponent(this.content));
    return () => {
      ref.instance.component.set(null);
      ref.changeDetectorRef.detectChanges();
      el.classList.add(TUI_LEAVE);
      Promise.allSettled(getAnimations(el)).then(async () => Promise.allSettled(getAnimations(el.firstElementChild))).then(() => {
        ref.destroy();
        el.remove();
      });
    };
  }
};
_TuiModalService.\u0275fac = function TuiModalService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiModalService)();
};
_TuiModalService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiModalService,
  factory: _TuiModalService.\u0275fac
});
var TuiModalService = _TuiModalService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiModalService, [{
    type: Injectable
  }], () => [], null);
})();
function getAnimations(el) {
  return el?.getAnimations?.().map(async ({
    finished
  }) => finished) || [];
}

export {
  TuiModalService
};
//# sourceMappingURL=chunk-RVANLOA7.js.map
