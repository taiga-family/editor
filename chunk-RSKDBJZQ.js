import {
  tuiBadgeNotificationOptionsProvider
} from "./chunk-XFLAHQA2.js";
import {
  RouterLinkActive
} from "./chunk-4W47VJX7.js";
import {
  WaResizeObserverService
} from "./chunk-L4I5LKBQ.js";
import {
  TUI_VERSION
} from "./chunk-DFGPXHHY.js";
import {
  tuiControlValue,
  tuiCreateOptions,
  tuiZonefree
} from "./chunk-5464WHRF.js";
import {
  NgControl,
  RadioControlValueAccessor,
  WA_CSS,
  takeUntilDestroyed,
  toObservable,
  tuiGenerateId,
  tuiInjectElement,
  tuiIsHTMLElement,
  tuiPx
} from "./chunk-YZQ2AVZQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  ViewEncapsulation,
  contentChildren,
  inject,
  input,
  map,
  model,
  setClassMetadata,
  switchMap,
  ɵɵHostDirectivesFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryAdvance,
  ɵɵstyleProp
} from "./chunk-6FE6LACA.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-segmented.mjs
var _c0 = ["*"];
var _TuiSegmentedDirective = class _TuiSegmentedDirective {
  constructor() {
    this.component = inject(TuiSegmented);
    this.el = tuiInjectElement();
    this.links = contentChildren(RouterLinkActive);
    this.elements = contentChildren(RouterLinkActive, {
      read: ElementRef
    });
    this.controls = contentChildren(NgControl, {
      descendants: true
    });
    this.controls$ = toObservable(this.controls);
    this.radios = contentChildren(RadioControlValueAccessor, {
      descendants: true
    });
  }
  ngAfterContentInit() {
    this.controls$.pipe(switchMap(([control]) => tuiControlValue(control)), map((value) => this.radios().findIndex((c) => c.value === value))).subscribe((index) => {
      this.component.update(index);
    });
  }
  ngAfterContentChecked() {
    const index = this.links().findIndex(({
      isActive
    }) => isActive);
    if (index !== -1) {
      this.update(this.elements()[index]?.nativeElement || null);
    }
  }
  update(target) {
    this.component.update(Array.from(this.el.children).findIndex((tab) => tab.contains(target)));
  }
};
_TuiSegmentedDirective.\u0275fac = function TuiSegmentedDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiSegmentedDirective)();
};
_TuiSegmentedDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiSegmentedDirective,
  contentQueries: function TuiSegmentedDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.links, RouterLinkActive, 4);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.elements, RouterLinkActive, 4, ElementRef);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.controls, NgControl, 5);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.radios, RadioControlValueAccessor, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(4);
    }
  },
  hostBindings: function TuiSegmentedDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function TuiSegmentedDirective_click_HostBindingHandler($event) {
        return ctx.update($event.target);
      });
    }
  }
});
var TuiSegmentedDirective = _TuiSegmentedDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSegmentedDirective, [{
    type: Directive,
    args: [{
      host: {
        "(click)": "update($event.target)"
      }
    }]
  }], null, null);
})();
var [TUI_SEGMENTED_OPTIONS, tuiSegmentedOptionsProvider] = tuiCreateOptions({
  size: "s"
});
var _TuiSegmented = class _TuiSegmented {
  constructor() {
    this.legacy = !inject(WA_CSS).supports("anchor-name", "--t-anchor");
    this.el = tuiInjectElement();
    this.anchorId = `--${tuiGenerateId()}`;
    this.sub = inject(WaResizeObserverService, {
      self: true
    }).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => this.refresh());
    this.size = input(inject(TUI_SEGMENTED_OPTIONS).size);
    this.activeItemIndex = model(0);
    this.disabled = input(false);
  }
  ngOnChanges() {
    this.refresh();
  }
  update(activeItemIndex) {
    if (activeItemIndex === this.activeItemIndex() || activeItemIndex < 0) {
      return;
    }
    this.activeItemIndex.set(activeItemIndex);
    this.refresh();
  }
  refresh() {
    const el = this.el.children.item(this.activeItemIndex());
    if (!tuiIsHTMLElement(el)) {
      return;
    }
    Array.from(this.el.children).forEach((e) => e.classList.remove("tui-segmented_active"));
    el.classList.add("tui-segmented_active");
    if (!this.legacy) {
      return;
    }
    const {
      offsetWidth,
      offsetLeft,
      offsetTop
    } = el;
    this.el.style.setProperty("--t-top", tuiPx(offsetTop));
    this.el.style.setProperty("--t-left", tuiPx(offsetLeft));
    this.el.style.setProperty("--t-width", tuiPx(offsetWidth));
  }
};
_TuiSegmented.\u0275fac = function TuiSegmented_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiSegmented)();
};
_TuiSegmented.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiSegmented,
  selectors: [["tui-segmented"]],
  hostAttrs: ["data-tui-version", "5.10.0"],
  hostVars: 4,
  hostBindings: function TuiSegmented_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.size())("inert", ctx.disabled() ? "" : null);
      \u0275\u0275styleProp("--t-anchor", ctx.anchorId);
    }
  },
  inputs: {
    size: [1, "size"],
    activeItemIndex: [1, "activeItemIndex"],
    disabled: [1, "disabled"]
  },
  outputs: {
    activeItemIndex: "activeItemIndexChange"
  },
  features: [\u0275\u0275ProvidersFeature([WaResizeObserverService, tuiBadgeNotificationOptionsProvider({
    size: "s"
  })]), \u0275\u0275HostDirectivesFeature([TuiSegmentedDirective]), \u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function TuiSegmented_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  styles: ['tui-segmented:where(*[data-tui-version="5.10.0"]){position:relative;display:flex;flex-shrink:0;color:var(--tui-background-base);background:var(--tui-background-neutral-1);overflow:hidden;-webkit-mask-image:linear-gradient(#000,#000);mask-image:linear-gradient(#000,#000)}tui-segmented:where(*[data-tui-version="5.10.0"])[data-size=s]{--t-padding: .5rem;--t-gap: .5rem;--t-margin: -.125rem;--t-height: var(--tui-height-s);font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m)}tui-segmented:where(*[data-tui-version="5.10.0"])[data-size=s] tui-icon{font-size:1rem}tui-segmented:where(*[data-tui-version="5.10.0"])[data-size=m]{--t-padding: .875rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-m);font:var(--tui-typography-body-m);border-radius:var(--tui-radius-m)}tui-segmented:where(*[data-tui-version="5.10.0"])[data-size=l]{--t-padding: 1.25rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-l);font:var(--tui-typography-body-l);border-radius:var(--tui-radius-l)}tui-segmented:where(*[data-tui-version="5.10.0"])[data-size=l]>*:before{block-size:1.25rem}tui-segmented:where(*[data-tui-version="5.10.0"])[inert]{opacity:var(--tui-disabled-opacity);pointer-events:none}tui-segmented:where(*[data-tui-version="5.10.0"])>a,tui-segmented:where(*[data-tui-version="5.10.0"])>button,tui-segmented:where(*[data-tui-version="5.10.0"])>label,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]){transition-property:color,background,opacity,border-image;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;justify-content:center;min-block-size:var(--t-height);block-size:100%;white-space:nowrap;gap:var(--t-gap);margin:0;padding:0 var(--t-padding);color:var(--tui-text-primary);overflow:hidden;cursor:pointer;font:inherit;border-radius:inherit;border:.125rem solid transparent;background-clip:padding-box;box-sizing:border-box;border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 0 0 100 .5;clip-path:polygon(-1rem calc(50% - .5rem),1px calc(50% - .5rem),1px 0,100% 0,100% 100%,1px 100%,1px calc(50% + .5rem),-1rem calc(50% + .5rem))}tui-segmented:where(*[data-tui-version="5.10.0"])>a>*,tui-segmented:where(*[data-tui-version="5.10.0"])>button>*,tui-segmented:where(*[data-tui-version="5.10.0"])>label>*,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio])>*{margin:0 var(--t-margin)}tui-segmented:where(*[data-tui-version="5.10.0"])>a:focus-visible,tui-segmented:where(*[data-tui-version="5.10.0"])>button:focus-visible,tui-segmented:where(*[data-tui-version="5.10.0"])>label:focus-visible,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.25rem}@media(hover:hover)and (pointer:fine){tui-segmented:where(*[data-tui-version="5.10.0"])>a:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.10.0"])>button:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.10.0"])>label:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover{background-color:var(--tui-background-neutral-1-hover)}tui-segmented:where(*[data-tui-version="5.10.0"])>a:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.10.0"])>button:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.10.0"])>label:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.10.0"])>a:not(.tui-segmented_active):not(:active):hover+*,tui-segmented:where(*[data-tui-version="5.10.0"])>button:not(.tui-segmented_active):not(:active):hover+*,tui-segmented:where(*[data-tui-version="5.10.0"])>label:not(.tui-segmented_active):not(:active):hover+*,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}}tui-segmented:where(*[data-tui-version="5.10.0"])>a:active,tui-segmented:where(*[data-tui-version="5.10.0"])>button:active,tui-segmented:where(*[data-tui-version="5.10.0"])>label:active,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]):active,tui-segmented:where(*[data-tui-version="5.10.0"])>a:active+*,tui-segmented:where(*[data-tui-version="5.10.0"])>button:active+*,tui-segmented:where(*[data-tui-version="5.10.0"])>label:active+*,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]):active+*,tui-segmented:where(*[data-tui-version="5.10.0"])>a.tui-segmented_active,tui-segmented:where(*[data-tui-version="5.10.0"])>button.tui-segmented_active,tui-segmented:where(*[data-tui-version="5.10.0"])>label.tui-segmented_active,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]).tui-segmented_active,tui-segmented:where(*[data-tui-version="5.10.0"])>a.tui-segmented_active+*,tui-segmented:where(*[data-tui-version="5.10.0"])>button.tui-segmented_active+*,tui-segmented:where(*[data-tui-version="5.10.0"])>label.tui-segmented_active+*,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]).tui-segmented_active+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}tui-segmented:where(*[data-tui-version="5.10.0"])>.tui-segmented_active{anchor-name:var(--t-anchor)}tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]){position:absolute;inset:-.125rem;background:transparent!important}tui-segmented:where(*[data-tui-version="5.10.0"]):before{transition-property:inset,inline-size;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;inset:var(--t-top) auto auto var(--t-left);inset:anchor(start);position-anchor:var(--t-anchor);block-size:var(--t-height);block-size:anchor-size(block);inline-size:var(--t-width);inline-size:anchor-size(inline);border-radius:inherit;background:currentColor;background-clip:padding-box;border:.125rem solid transparent;box-sizing:border-box;filter:drop-shadow(0 .25rem 1.25rem rgba(0,0,0,.1))}@supports not (anchor-name: --t-anchor){[dir=rtl] tui-segmented:where(*[data-tui-version="5.10.0"]):before{inset-inline:auto var(--t-left)}}[tuiTheme=dark] tui-segmented:where(*[data-tui-version="5.10.0"]),tui-segmented[tuiTheme=dark]:where(*[data-tui-version="5.10.0"]){--tui-background-base: var(--tui-background-neutral-1-hover)}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiSegmented = _TuiSegmented;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSegmented, [{
    type: Component,
    args: [{
      selector: "tui-segmented",
      template: "<ng-content />",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [WaResizeObserverService, tuiBadgeNotificationOptionsProvider({
        size: "s"
      })],
      hostDirectives: [TuiSegmentedDirective],
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-size]": "size()",
        "[attr.inert]": 'disabled() ? "" : null',
        "[style.--t-anchor]": "anchorId"
      },
      styles: ['tui-segmented:where(*[data-tui-version="5.10.0"]){position:relative;display:flex;flex-shrink:0;color:var(--tui-background-base);background:var(--tui-background-neutral-1);overflow:hidden;-webkit-mask-image:linear-gradient(#000,#000);mask-image:linear-gradient(#000,#000)}tui-segmented:where(*[data-tui-version="5.10.0"])[data-size=s]{--t-padding: .5rem;--t-gap: .5rem;--t-margin: -.125rem;--t-height: var(--tui-height-s);font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m)}tui-segmented:where(*[data-tui-version="5.10.0"])[data-size=s] tui-icon{font-size:1rem}tui-segmented:where(*[data-tui-version="5.10.0"])[data-size=m]{--t-padding: .875rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-m);font:var(--tui-typography-body-m);border-radius:var(--tui-radius-m)}tui-segmented:where(*[data-tui-version="5.10.0"])[data-size=l]{--t-padding: 1.25rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-l);font:var(--tui-typography-body-l);border-radius:var(--tui-radius-l)}tui-segmented:where(*[data-tui-version="5.10.0"])[data-size=l]>*:before{block-size:1.25rem}tui-segmented:where(*[data-tui-version="5.10.0"])[inert]{opacity:var(--tui-disabled-opacity);pointer-events:none}tui-segmented:where(*[data-tui-version="5.10.0"])>a,tui-segmented:where(*[data-tui-version="5.10.0"])>button,tui-segmented:where(*[data-tui-version="5.10.0"])>label,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]){transition-property:color,background,opacity,border-image;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;justify-content:center;min-block-size:var(--t-height);block-size:100%;white-space:nowrap;gap:var(--t-gap);margin:0;padding:0 var(--t-padding);color:var(--tui-text-primary);overflow:hidden;cursor:pointer;font:inherit;border-radius:inherit;border:.125rem solid transparent;background-clip:padding-box;box-sizing:border-box;border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 0 0 100 .5;clip-path:polygon(-1rem calc(50% - .5rem),1px calc(50% - .5rem),1px 0,100% 0,100% 100%,1px 100%,1px calc(50% + .5rem),-1rem calc(50% + .5rem))}tui-segmented:where(*[data-tui-version="5.10.0"])>a>*,tui-segmented:where(*[data-tui-version="5.10.0"])>button>*,tui-segmented:where(*[data-tui-version="5.10.0"])>label>*,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio])>*{margin:0 var(--t-margin)}tui-segmented:where(*[data-tui-version="5.10.0"])>a:focus-visible,tui-segmented:where(*[data-tui-version="5.10.0"])>button:focus-visible,tui-segmented:where(*[data-tui-version="5.10.0"])>label:focus-visible,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.25rem}@media(hover:hover)and (pointer:fine){tui-segmented:where(*[data-tui-version="5.10.0"])>a:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.10.0"])>button:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.10.0"])>label:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover{background-color:var(--tui-background-neutral-1-hover)}tui-segmented:where(*[data-tui-version="5.10.0"])>a:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.10.0"])>button:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.10.0"])>label:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.10.0"])>a:not(.tui-segmented_active):not(:active):hover+*,tui-segmented:where(*[data-tui-version="5.10.0"])>button:not(.tui-segmented_active):not(:active):hover+*,tui-segmented:where(*[data-tui-version="5.10.0"])>label:not(.tui-segmented_active):not(:active):hover+*,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}}tui-segmented:where(*[data-tui-version="5.10.0"])>a:active,tui-segmented:where(*[data-tui-version="5.10.0"])>button:active,tui-segmented:where(*[data-tui-version="5.10.0"])>label:active,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]):active,tui-segmented:where(*[data-tui-version="5.10.0"])>a:active+*,tui-segmented:where(*[data-tui-version="5.10.0"])>button:active+*,tui-segmented:where(*[data-tui-version="5.10.0"])>label:active+*,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]):active+*,tui-segmented:where(*[data-tui-version="5.10.0"])>a.tui-segmented_active,tui-segmented:where(*[data-tui-version="5.10.0"])>button.tui-segmented_active,tui-segmented:where(*[data-tui-version="5.10.0"])>label.tui-segmented_active,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]).tui-segmented_active,tui-segmented:where(*[data-tui-version="5.10.0"])>a.tui-segmented_active+*,tui-segmented:where(*[data-tui-version="5.10.0"])>button.tui-segmented_active+*,tui-segmented:where(*[data-tui-version="5.10.0"])>label.tui-segmented_active+*,tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]).tui-segmented_active+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}tui-segmented:where(*[data-tui-version="5.10.0"])>.tui-segmented_active{anchor-name:var(--t-anchor)}tui-segmented:where(*[data-tui-version="5.10.0"])>label>input:not([tuiRadio]){position:absolute;inset:-.125rem;background:transparent!important}tui-segmented:where(*[data-tui-version="5.10.0"]):before{transition-property:inset,inline-size;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;inset:var(--t-top) auto auto var(--t-left);inset:anchor(start);position-anchor:var(--t-anchor);block-size:var(--t-height);block-size:anchor-size(block);inline-size:var(--t-width);inline-size:anchor-size(inline);border-radius:inherit;background:currentColor;background-clip:padding-box;border:.125rem solid transparent;box-sizing:border-box;filter:drop-shadow(0 .25rem 1.25rem rgba(0,0,0,.1))}@supports not (anchor-name: --t-anchor){[dir=rtl] tui-segmented:where(*[data-tui-version="5.10.0"]):before{inset-inline:auto var(--t-left)}}[tuiTheme=dark] tui-segmented:where(*[data-tui-version="5.10.0"]),tui-segmented[tuiTheme=dark]:where(*[data-tui-version="5.10.0"]){--tui-background-base: var(--tui-background-neutral-1-hover)}\n']
    }]
  }], null, null);
})();

export {
  TuiSegmented
};
//# sourceMappingURL=chunk-RSKDBJZQ.js.map
