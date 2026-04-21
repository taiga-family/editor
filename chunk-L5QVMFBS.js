import {
  WaResizeObserverService
} from "./chunk-M277MCZ7.js";
import {
  TuiIcons,
  TuiWithAppearance,
  WA_MUTATION_OBSERVER_INIT,
  WaMutationObserverService,
  tuiAppearanceOptionsProvider,
  tuiCreateOptions
} from "./chunk-3VK442GK.js";
import {
  tuiZonefree
} from "./chunk-6A2ZSXM6.js";
import {
  NgForOf,
  NgIf,
  takeUntilDestroyed,
  tuiInjectElement,
  tuiIsString,
  tuiPure,
  tuiWithStyles
} from "./chunk-2QWGY2YZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  NgZone,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SLVEPEAC.js";
import {
  __decorate,
  filter,
  fromEvent,
  merge
} from "./chunk-CJ7OSSQR.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-fade.mjs
var BUFFER = 1;
var _TuiFadeStyles = class _TuiFadeStyles {
};
_TuiFadeStyles.\u0275fac = function TuiFadeStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiFadeStyles)();
};
_TuiFadeStyles.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiFadeStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-fade-styles"],
  decls: 0,
  vars: 0,
  template: function TuiFadeStyles_Template(rf, ctx) {
  },
  styles: ["[tuiFade]{scrollbar-width:none;-ms-overflow-style:none;transition-property:-webkit-mask-position;transition-property:mask-position;transition-property:mask-position,-webkit-mask-position;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;overflow:auto;text-overflow:unset!important;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[tuiFade]::-webkit-scrollbar,[tuiFade]::-webkit-scrollbar-thumb{display:none}[tuiFade]:not([data-orientation=vertical]){overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;-webkit-mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%));mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%))}[tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top}[tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top}[tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[dir=rtl] [tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top}[dir=rtl] [tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top}[dir=rtl] [tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[tuiFade][data-orientation=vertical]{overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);-webkit-mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset));mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset))}[tuiFade][data-orientation=vertical]._start{-webkit-mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px)}[tuiFade][data-orientation=vertical]._end{-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left bottom;mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left bottom}[tuiFade][data-orientation=vertical]._start._end{-webkit-mask-position:left top,left bottom;mask-position:left top,left bottom}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiFadeStyles = _TuiFadeStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFadeStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-fade-styles"
      },
      styles: ["[tuiFade]{scrollbar-width:none;-ms-overflow-style:none;transition-property:-webkit-mask-position;transition-property:mask-position;transition-property:mask-position,-webkit-mask-position;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;overflow:auto;text-overflow:unset!important;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[tuiFade]::-webkit-scrollbar,[tuiFade]::-webkit-scrollbar-thumb{display:none}[tuiFade]:not([data-orientation=vertical]){overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;-webkit-mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%));mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%))}[tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top}[tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top}[tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[dir=rtl] [tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top}[dir=rtl] [tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top}[dir=rtl] [tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[tuiFade][data-orientation=vertical]{overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);-webkit-mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset));mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset))}[tuiFade][data-orientation=vertical]._start{-webkit-mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px)}[tuiFade][data-orientation=vertical]._end{-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left bottom;mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left bottom}[tuiFade][data-orientation=vertical]._start._end{-webkit-mask-position:left top,left bottom;mask-position:left top,left bottom}\n"]
    }]
  }], null, null);
})();
var _TuiFade = class _TuiFade {
  constructor() {
    this.lineHeight = null;
    this.size = "1.5em";
    this.offset = "0em";
    this.orientation = "horizontal";
    const el = tuiInjectElement();
    inject(NgZone).runOutsideAngular(() => {
      setTimeout(() => {
        el.style.transition = "";
      });
    });
    tuiWithStyles(TuiFadeStyles);
    merge(inject(WaResizeObserverService, {
      self: true
    }), inject(WaMutationObserverService, {
      self: true
    }), fromEvent(el, "scroll")).pipe(filter(() => !!el.scrollWidth), tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      el.classList.toggle("_end", this.isEnd(el));
      el.classList.toggle("_start", !!Math.floor(el.scrollLeft) || !!Math.floor(el.scrollTop));
    });
  }
  isEnd({
    scrollTop,
    scrollLeft,
    scrollHeight,
    scrollWidth,
    clientHeight,
    clientWidth
  }) {
    return this.orientation === "vertical" ? Math.round(scrollTop) < scrollHeight - clientHeight - BUFFER : Math.ceil(Math.abs(scrollLeft)) < scrollWidth - clientWidth - BUFFER || // horizontal multiline fade can kick in early due to hanging elements of fonts so using bigger buffer
    scrollHeight > clientHeight + 4 * BUFFER;
  }
};
_TuiFade.\u0275fac = function TuiFade_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiFade)();
};
_TuiFade.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiFade,
  selectors: [["", "tuiFade", ""]],
  hostVars: 11,
  hostBindings: function TuiFade_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-orientation", ctx.orientation);
      \u0275\u0275styleProp("line-height", ctx.lineHeight)("--t-line-height", ctx.lineHeight)("--t-fade-size", ctx.size)("--t-fade-offset", ctx.offset)("transition", "none");
    }
  },
  inputs: {
    lineHeight: [0, "tuiFadeHeight", "lineHeight"],
    size: [0, "tuiFadeSize", "size"],
    offset: [0, "tuiFadeOffset", "offset"],
    orientation: [0, "tuiFade", "orientation"]
  },
  features: [\u0275\u0275ProvidersFeature([WaResizeObserverService, WaMutationObserverService, {
    provide: WA_MUTATION_OBSERVER_INIT,
    useValue: {
      characterData: true,
      subtree: true
    }
  }])]
});
var TuiFade = _TuiFade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFade, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiFade]",
      providers: [WaResizeObserverService, WaMutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          characterData: true,
          subtree: true
        }
      }],
      host: {
        "[style.line-height]": "lineHeight",
        "[style.--t-line-height]": "lineHeight",
        "[style.--t-fade-size]": "size",
        "[style.--t-fade-offset]": "offset",
        "[attr.data-orientation]": "orientation",
        "[style.transition]": '"none"'
      }
    }]
  }], function() {
    return [];
  }, {
    lineHeight: [{
      type: Input,
      args: ["tuiFadeHeight"]
    }],
    size: [{
      type: Input,
      args: ["tuiFadeSize"]
    }],
    offset: [{
      type: Input,
      args: ["tuiFadeOffset"]
    }],
    orientation: [{
      type: Input,
      args: ["tuiFade"]
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-avatar.mjs
var _c0 = ["*"];
function TuiAvatar_img_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.value, \u0275\u0275sanitizeUrl);
  }
}
function TuiAvatar_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.value);
  }
}
function TuiAvatarLabeled_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1, " ");
  }
}
function TuiAvatarLabeled_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TuiAvatarLabeled_ng_container_1_span_1_Template, 2, 1, "span", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.split(ctx_r1.label));
  }
}
var TUI_AVATAR_DEFAULT_OPTIONS = {
  appearance: "",
  round: true,
  size: "l"
};
var [TUI_AVATAR_OPTIONS, tuiAvatarOptionsProvider] = tuiCreateOptions(TUI_AVATAR_DEFAULT_OPTIONS);
var _TuiAvatar = class _TuiAvatar {
  constructor() {
    this.options = inject(TUI_AVATAR_OPTIONS);
    this.size = this.options.size;
    this.round = this.options.round;
  }
  get value() {
    return this.src || "";
  }
  get svg() {
    return tuiIsString(this.value) && this.value.endsWith(".svg");
  }
  get type() {
    if (this.value && !tuiIsString(this.value)) {
      return "img";
    }
    if (this.value.startsWith("@tui.")) {
      return "icon";
    }
    if (this.value.length > 0 && this.value.length < 3) {
      return "text";
    }
    return this.value.length ? "img" : "content";
  }
};
_TuiAvatar.\u0275fac = function TuiAvatar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAvatar)();
};
_TuiAvatar.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiAvatar,
  selectors: [["tui-avatar"], ["button", "tuiAvatar", ""], ["a", "tuiAvatar", ""]],
  hostVars: 6,
  hostBindings: function TuiAvatar_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.size)("data-type", ctx.type);
      \u0275\u0275classProp("_round", ctx.round)("_svg", ctx.svg);
    }
  },
  inputs: {
    size: "size",
    round: "round",
    src: "src"
  },
  features: [\u0275\u0275ProvidersFeature([tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)]), \u0275\u0275HostDirectivesFeature([TuiWithAppearance, {
    directive: TuiIcons,
    inputs: ["iconStart", "src"]
  }])],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 2,
  consts: [["alt", "", "loading", "lazy", 3, "src", 4, "ngIf"], [4, "ngIf"], ["alt", "", "loading", "lazy", 3, "src"]],
  template: function TuiAvatar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, TuiAvatar_img_0_Template, 1, 1, "img", 0)(1, TuiAvatar_ng_container_1_Template, 2, 1, "ng-container", 1);
      \u0275\u0275projection(2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.type === "img");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.type === "text");
    }
  },
  dependencies: [NgIf],
  styles: ['[_nghost-%COMP%]{--t-size: 3.5rem;--t-radius: .75rem;position:relative;display:inline-flex;flex-shrink:0;inline-size:var(--t-size);block-size:var(--t-size);align-items:center;justify-content:center;overflow:hidden;white-space:nowrap;border-radius:var(--t-radius);border:none;background:var(--tui-background-neutral-1);color:var(--tui-text-secondary);vertical-align:middle;box-sizing:border-box;padding:.25rem;opacity:.999}[data-size=xs][_nghost-%COMP%]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-font-text-xs);font-weight:700}[data-size=xs][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-m);font-size:.5625rem}[data-size=s][_nghost-%COMP%]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-font-text-s);font-weight:700}[data-size=s][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-xs);font-weight:700}[data-size=m][_nghost-%COMP%]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-font-text-l);font-weight:700}[data-size=m][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-m);font-weight:700}[data-size=l][_nghost-%COMP%]{--t-size: var(--tui-height-l);--t-radius: .75rem;font:var(--tui-font-heading-5)}[data-size=l][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-l);font-weight:700}[data-size=xl][_nghost-%COMP%]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-font-heading-3)}[data-size=xl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-4)}[data-size=xxl][_nghost-%COMP%]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-font-heading-3)}[data-size=xxl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-3)}[data-size=xxxl][_nghost-%COMP%]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-font-heading-2)}[data-size=xxxl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-3)}[data-type][_nghost-%COMP%]:before{display:none}[_nghost-%COMP%]:not([data-type=icon]):before{-webkit-mask:none;mask:none}[data-type=img][_nghost-%COMP%]:not(._svg){background:transparent}[data-type=icon][_nghost-%COMP%]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block;font-size:calc(var(--t-size) * .6);-webkit-mask-size:1em;mask-size:1em}._round[_nghost-%COMP%]{--t-radius: calc(var(--t-size) / 2)}[_nghost-%COMP%]     img, [_nghost-%COMP%]     picture, [_nghost-%COMP%]     video{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;object-fit:cover;box-sizing:border-box;border-radius:inherit}._svg[_nghost-%COMP%]   img[_ngcontent-%COMP%]{padding:20%;object-fit:contain;border-radius:unset}'],
  changeDetection: 0
});
var TuiAvatar = _TuiAvatar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-avatar,button[tuiAvatar],a[tuiAvatar]",
      imports: [NgIf],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)],
      hostDirectives: [TuiWithAppearance, {
        directive: TuiIcons,
        inputs: ["iconStart: src"]
      }],
      host: {
        "[attr.data-size]": "size",
        "[attr.data-type]": "type",
        "[class._round]": "round",
        "[class._svg]": "svg"
      },
      template: `<img
    *ngIf="type === 'img'"
    alt=""
    loading="lazy"
    [src]="value"
/>
<ng-container *ngIf="type === 'text'">{{ value }}</ng-container>
<ng-content />
`,
      styles: [':host{--t-size: 3.5rem;--t-radius: .75rem;position:relative;display:inline-flex;flex-shrink:0;inline-size:var(--t-size);block-size:var(--t-size);align-items:center;justify-content:center;overflow:hidden;white-space:nowrap;border-radius:var(--t-radius);border:none;background:var(--tui-background-neutral-1);color:var(--tui-text-secondary);vertical-align:middle;box-sizing:border-box;padding:.25rem;opacity:.999}:host[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-font-text-xs);font-weight:700}:host[data-size=xs][data-type=content]{font:var(--tui-font-text-m);font-size:.5625rem}:host[data-size=s]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-font-text-s);font-weight:700}:host[data-size=s][data-type=content]{font:var(--tui-font-text-xs);font-weight:700}:host[data-size=m]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-font-text-l);font-weight:700}:host[data-size=m][data-type=content]{font:var(--tui-font-text-m);font-weight:700}:host[data-size=l]{--t-size: var(--tui-height-l);--t-radius: .75rem;font:var(--tui-font-heading-5)}:host[data-size=l][data-type=content]{font:var(--tui-font-text-l);font-weight:700}:host[data-size=xl]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-font-heading-3)}:host[data-size=xl][data-type=content]{font:var(--tui-font-heading-4)}:host[data-size=xxl]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-font-heading-3)}:host[data-size=xxl][data-type=content]{font:var(--tui-font-heading-3)}:host[data-size=xxxl]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-font-heading-2)}:host[data-size=xxxl][data-type=content]{font:var(--tui-font-heading-3)}:host[data-type]:before{display:none}:host:not([data-type=icon]):before{-webkit-mask:none;mask:none}:host[data-type=img]:not(._svg){background:transparent}:host[data-type=icon]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block;font-size:calc(var(--t-size) * .6);-webkit-mask-size:1em;mask-size:1em}:host._round{--t-radius: calc(var(--t-size) / 2)}:host ::ng-deep img,:host ::ng-deep picture,:host ::ng-deep video{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;object-fit:cover;box-sizing:border-box;border-radius:inherit}:host._svg img{padding:20%;object-fit:contain;border-radius:unset}\n']
    }]
  }], null, {
    size: [{
      type: Input
    }],
    round: [{
      type: Input
    }],
    src: [{
      type: Input
    }]
  });
})();
var _TuiAvatarLabeled = class _TuiAvatarLabeled {
  constructor() {
    this.label = "";
  }
  split(label) {
    return label.split(" ");
  }
};
_TuiAvatarLabeled.\u0275fac = function TuiAvatarLabeled_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAvatarLabeled)();
};
_TuiAvatarLabeled.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiAvatarLabeled,
  selectors: [["tui-avatar-labeled"]],
  inputs: {
    label: "label"
  },
  ngContentSelectors: _c0,
  decls: 2,
  vars: 1,
  consts: [[4, "ngIf"], ["tuiFade", "", 4, "ngFor", "ngForOf"], ["tuiFade", ""]],
  template: function TuiAvatarLabeled_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
      \u0275\u0275template(1, TuiAvatarLabeled_ng_container_1_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.label.length);
    }
  },
  dependencies: [NgForOf, NgIf, TuiFade],
  styles: ["tui-avatar-labeled{display:flex;inline-size:3.5rem;box-sizing:content-box;flex-direction:column;text-align:center;align-items:center;line-height:.895rem;font-size:.75rem;padding:0 .5rem;white-space:nowrap}tui-avatar-labeled tui-avatar{margin-block-end:.375rem}tui-avatar-labeled [tuiFade]{inline-size:calc(100% + 1rem)}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiAvatarLabeled = _TuiAvatarLabeled;
__decorate([tuiPure], TuiAvatarLabeled.prototype, "split", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarLabeled, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-avatar-labeled",
      imports: [NgForOf, NgIf, TuiFade],
      template: `
        <ng-content />
        <ng-container *ngIf="label.length">
            <span
                *ngFor="let item of split(label)"
                tuiFade
            >
                {{ item }}
            </span>
        </ng-container>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ["tui-avatar-labeled{display:flex;inline-size:3.5rem;box-sizing:content-box;flex-direction:column;text-align:center;align-items:center;line-height:.895rem;font-size:.75rem;padding:0 .5rem;white-space:nowrap}tui-avatar-labeled tui-avatar{margin-block-end:.375rem}tui-avatar-labeled [tuiFade]{inline-size:calc(100% + 1rem)}\n"]
    }]
  }], null, {
    label: [{
      type: Input
    }],
    split: []
  });
})();
var _TuiAvatarOutlineStyles = class _TuiAvatarOutlineStyles {
};
_TuiAvatarOutlineStyles.\u0275fac = function TuiAvatarOutlineStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAvatarOutlineStyles)();
};
_TuiAvatarOutlineStyles.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiAvatarOutlineStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-avatar-outline"],
  decls: 0,
  vars: 0,
  template: function TuiAvatarOutlineStyles_Template(rf, ctx) {
  },
  styles: ['[tuiAvatarOutline]{--t-outline: .1875rem;--t-gap: .125rem}[tuiAvatarOutline][data-size=xs],[tuiAvatarOutline][data-size=s],[tuiAvatarOutline][data-size=m]{--t-outline: .125rem;--t-gap: .0625rem}[tuiAvatarOutline]._outline{-webkit-mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}[tuiAvatarOutline]._outline:after{content:"";position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:var(--t-fill);-webkit-mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiAvatarOutlineStyles = _TuiAvatarOutlineStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarOutlineStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-avatar-outline"
      },
      styles: ['[tuiAvatarOutline]{--t-outline: .1875rem;--t-gap: .125rem}[tuiAvatarOutline][data-size=xs],[tuiAvatarOutline][data-size=s],[tuiAvatarOutline][data-size=m]{--t-outline: .125rem;--t-gap: .0625rem}[tuiAvatarOutline]._outline{-webkit-mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}[tuiAvatarOutline]._outline:after{content:"";position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:var(--t-fill);-webkit-mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}\n']
    }]
  }], null, null);
})();
var _TuiAvatarOutline = class _TuiAvatarOutline {
  constructor() {
    this.nothing = tuiWithStyles(TuiAvatarOutlineStyles);
    this.tuiAvatarOutline = "";
  }
  get value() {
    return this.tuiAvatarOutline === "" ? "var(--tui-background-accent-1)" : this.tuiAvatarOutline;
  }
};
_TuiAvatarOutline.\u0275fac = function TuiAvatarOutline_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAvatarOutline)();
};
_TuiAvatarOutline.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiAvatarOutline,
  selectors: [["", "tuiAvatarOutline", ""]],
  hostVars: 4,
  hostBindings: function TuiAvatarOutline_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("--t-fill", ctx.value);
      \u0275\u0275classProp("_outline", ctx.value);
    }
  },
  inputs: {
    tuiAvatarOutline: "tuiAvatarOutline"
  }
});
var TuiAvatarOutline = _TuiAvatarOutline;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarOutline, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAvatarOutline]",
      host: {
        "[style.--t-fill]": "value",
        "[class._outline]": "value"
      }
    }]
  }], null, {
    tuiAvatarOutline: [{
      type: Input
    }]
  });
})();
var _TuiAvatarStack = class _TuiAvatarStack {
  constructor() {
    this.direction = "right";
  }
};
_TuiAvatarStack.\u0275fac = function TuiAvatarStack_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAvatarStack)();
};
_TuiAvatarStack.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiAvatarStack,
  selectors: [["tui-avatar-stack"]],
  hostVars: 1,
  hostBindings: function TuiAvatarStack_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-direction", ctx.direction);
    }
  },
  inputs: {
    direction: "direction"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function TuiAvatarStack_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  styles: ["tui-avatar-stack{display:flex;--t-gap: .125rem}tui-avatar-stack tui-avatar{--t-offset: 2.5rem}tui-avatar-stack tui-avatar[data-size=xl]{--t-offset: 2.125rem}tui-avatar-stack tui-avatar[data-size=l]{--t-offset: 1.5rem}tui-avatar-stack tui-avatar[data-size=m]{--t-offset: .75rem}tui-avatar-stack tui-avatar[data-size=s]{--t-offset: .575rem}tui-avatar-stack tui-avatar[data-size=xs]{--t-offset: .375rem}tui-avatar-stack tui-avatar._round{-webkit-mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px));mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px))}tui-avatar-stack[data-direction=right] tui-avatar._round{--tui-inline: -1}[dir=rtl] tui-avatar-stack[data-direction=right] tui-avatar._round{--tui-inline: 1}tui-avatar-stack[data-direction=right] tui-avatar._round:last-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar._round:first-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child),[dir=rtl] tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child){-webkit-mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom;mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom}tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child),[dir=rtl] tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child){-webkit-mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom;mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom}tui-avatar-stack tui-avatar:not(._round){-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[dir=rtl] tui-avatar-stack[data-direction=left] tui-avatar:not(._round),tui-avatar-stack[data-direction=right] tui-avatar:not(._round){-webkit-mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%}[dir=rtl] tui-avatar-stack[data-direction=right] tui-avatar:not(._round){-webkit-mask-size:unset;mask-size:unset}tui-avatar-stack tui-avatar:not(:last-child){margin-inline-end:calc(-1 * var(--t-offset))}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiAvatarStack = _TuiAvatarStack;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarStack, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-avatar-stack",
      template: "<ng-content />",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-direction]": "direction"
      },
      styles: ["tui-avatar-stack{display:flex;--t-gap: .125rem}tui-avatar-stack tui-avatar{--t-offset: 2.5rem}tui-avatar-stack tui-avatar[data-size=xl]{--t-offset: 2.125rem}tui-avatar-stack tui-avatar[data-size=l]{--t-offset: 1.5rem}tui-avatar-stack tui-avatar[data-size=m]{--t-offset: .75rem}tui-avatar-stack tui-avatar[data-size=s]{--t-offset: .575rem}tui-avatar-stack tui-avatar[data-size=xs]{--t-offset: .375rem}tui-avatar-stack tui-avatar._round{-webkit-mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px));mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px))}tui-avatar-stack[data-direction=right] tui-avatar._round{--tui-inline: -1}[dir=rtl] tui-avatar-stack[data-direction=right] tui-avatar._round{--tui-inline: 1}tui-avatar-stack[data-direction=right] tui-avatar._round:last-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar._round:first-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child),[dir=rtl] tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child){-webkit-mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom;mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom}tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child),[dir=rtl] tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child){-webkit-mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom;mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom}tui-avatar-stack tui-avatar:not(._round){-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[dir=rtl] tui-avatar-stack[data-direction=left] tui-avatar:not(._round),tui-avatar-stack[data-direction=right] tui-avatar:not(._round){-webkit-mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%}[dir=rtl] tui-avatar-stack[data-direction=right] tui-avatar:not(._round){-webkit-mask-size:unset;mask-size:unset}tui-avatar-stack tui-avatar:not(:last-child){margin-inline-end:calc(-1 * var(--t-offset))}\n"]
    }]
  }], null, {
    direction: [{
      type: Input
    }]
  });
})();

export {
  tuiAvatarOptionsProvider,
  TuiAvatar
};
//# sourceMappingURL=chunk-L5QVMFBS.js.map
