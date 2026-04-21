import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-QWXTPXAR.js";
import "./chunk-JISC74IQ.js";
import "./chunk-XLA4OBVG.js";
import "./chunk-CZJXMXHX.js";
import "./chunk-AJCAW3YX.js";
import "./chunk-2QRDY5ZS.js";
import "./chunk-PJJ4EG5U.js";
import "./chunk-LR6MFXG2.js";
import "./chunk-N3XZP6Z7.js";
import "./chunk-6JDH2PV3.js";
import "./chunk-7QK2CPSE.js";
import "./chunk-WBHAP4JC.js";
import "./chunk-X3PSOWX2.js";
import "./chunk-E3TKWIMT.js";
import "./chunk-HSMAYE7Z.js";
import "./chunk-ARYGUNWN.js";
import "./chunk-3L6ILX4W.js";
import "./chunk-M6TSJ4NT.js";
import "./chunk-BAXR2EDS.js";
import "./chunk-3MA5NXQZ.js";
import "./chunk-IG5NUA4T.js";
import "./chunk-LPOWL4X5.js";
import "./chunk-RURN6JQY.js";
import "./chunk-QOV567V2.js";
import "./chunk-UFW7RGXF.js";
import "./chunk-X7NG6AFM.js";
import "./chunk-RB5ZTUSK.js";
import "./chunk-TKB72JFC.js";
import "./chunk-ZL2NLOVI.js";
import "./chunk-WQSN4Q62.js";
import "./chunk-F47ZTIMH.js";
import "./chunk-H6B6ZN6C.js";
import "./chunk-VCEUECWR.js";
import "./chunk-EHYODUHD.js";
import "./chunk-K3KVBV5Y.js";
import {
  WaResizeObserverService
} from "./chunk-M277MCZ7.js";
import "./chunk-3VK442GK.js";
import "./chunk-XI2RCXXD.js";
import "./chunk-AHSN3FX6.js";
import "./chunk-3ZVYWLQ5.js";
import "./chunk-2X7NNA2Q.js";
import {
  TuiEditorTool
} from "./chunk-NBZDMZNA.js";
import "./chunk-Q4JLRECA.js";
import "./chunk-6A2ZSXM6.js";
import "./chunk-LBJNUVBM.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  coerceBooleanProperty,
  toSignal,
  tuiInjectElement,
  tuiWithStyles
} from "./chunk-2QWGY2YZ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  InjectionToken,
  Input,
  ViewEncapsulation,
  computed,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-SLVEPEAC.js";
import {
  delay,
  distinctUntilChanged,
  map,
  of,
  tap
} from "./chunk-CJ7OSSQR.js";
import "./chunk-TPMK677Z.js";
import "./chunk-Q6WMBPZ3.js";
import "./chunk-IN2LCJCD.js";
import "./chunk-G3QJNC4B.js";
import "./chunk-U65UEYRO.js";
import {
  __async
} from "./chunk-4MWRP73S.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-progress.mjs
var _c0 = ["tuiProgressBar", ""];
var _c1 = ["tuiProgressLabel", ""];
var _c2 = [[["progress"]], [["tui-progress-circle"]], "*"];
var _c3 = ["progress", "tui-progress-circle", "*"];
var _TuiProgressFixedGradientStyles = class _TuiProgressFixedGradientStyles {
};
_TuiProgressFixedGradientStyles.\u0275fac = function TuiProgressFixedGradientStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiProgressFixedGradientStyles)();
};
_TuiProgressFixedGradientStyles.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiProgressFixedGradientStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-fixed-gradient"],
  decls: 0,
  vars: 0,
  template: function TuiProgressFixedGradientStyles_Template(rf, ctx) {
  },
  styles: ["[tuiProgressFixedGradient]::-moz-progress-bar{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));-moz-transition:clip-path var(--tui-duration) linear;transition:clip-path var(--tui-duration) linear;margin-inline-end:calc(-100% + var(--tui-progress-percent))}[tuiProgressFixedGradient]::-webkit-progress-value{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));-webkit-transition:clip-path var(--tui-duration) linear;transition:clip-path var(--tui-duration) linear}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiProgressFixedGradientStyles = _TuiProgressFixedGradientStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressFixedGradientStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-fixed-gradient"
      },
      styles: ["[tuiProgressFixedGradient]::-moz-progress-bar{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));-moz-transition:clip-path var(--tui-duration) linear;transition:clip-path var(--tui-duration) linear;margin-inline-end:calc(-100% + var(--tui-progress-percent))}[tuiProgressFixedGradient]::-webkit-progress-value{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));-webkit-transition:clip-path var(--tui-duration) linear;transition:clip-path var(--tui-duration) linear}\n"]
    }]
  }], null, null);
})();
var _TuiProgressFixedGradientDirective = class _TuiProgressFixedGradientDirective {
  constructor() {
    this.nativeProgress = tuiInjectElement();
    this.nothing = tuiWithStyles(TuiProgressFixedGradientStyles);
  }
  get progressPercent() {
    const {
      value
    } = this.nativeProgress;
    const max = this.nativeProgress.max ?? 1;
    return Math.min(value / max * 100, 100);
  }
};
_TuiProgressFixedGradientDirective.\u0275fac = function TuiProgressFixedGradientDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiProgressFixedGradientDirective)();
};
_TuiProgressFixedGradientDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiProgressFixedGradientDirective,
  selectors: [["progress", "tuiProgressBar", "", "tuiProgressFixedGradient", ""]],
  hostVars: 2,
  hostBindings: function TuiProgressFixedGradientDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("--tui-progress-percent", ctx.progressPercent, "%");
    }
  }
});
var TuiProgressFixedGradientDirective = _TuiProgressFixedGradientDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressFixedGradientDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "progress[tuiProgressBar][tuiProgressFixedGradient]",
      host: {
        "[style.--tui-progress-percent.%]": "progressPercent"
      }
    }]
  }], null, null);
})();
var TUI_PROGRESS_DEFAULT_OPTIONS = {
  color: null,
  size: "m"
};
var TUI_PROGRESS_OPTIONS = new InjectionToken(ngDevMode ? "TUI_PROGRESS_OPTIONS" : "", {
  factory: () => TUI_PROGRESS_DEFAULT_OPTIONS
});
var _TuiProgressBar = class _TuiProgressBar {
  constructor() {
    this.options = inject(TUI_PROGRESS_OPTIONS);
    this.color = this.options.color;
    this.size = this.options.size;
  }
};
_TuiProgressBar.\u0275fac = function TuiProgressBar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiProgressBar)();
};
_TuiProgressBar.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiProgressBar,
  selectors: [["progress", "tuiProgressBar", ""]],
  hostVars: 3,
  hostBindings: function TuiProgressBar_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.size);
      \u0275\u0275styleProp("--tui-progress-color", ctx.color);
    }
  },
  inputs: {
    color: "color",
    size: "size"
  },
  attrs: _c0,
  decls: 0,
  vars: 0,
  template: function TuiProgressBar_Template(rf, ctx) {
  },
  styles: ["@keyframes tuiIndeterminateAnimation{50%{background-position:left}}[tuiProgressBar]{-webkit-appearance:none;appearance:none;border:none;--t-height: .75rem;display:block;inline-size:100%;block-size:var(--t-height);color:var(--tui-background-accent-1);background:var(--tui-background-neutral-2);clip-path:inset(0 .5px round var(--tui-radius-m));overflow:hidden;border-radius:1rem;flex-shrink:0}[tuiProgressBar]::-webkit-progress-value{-webkit-transition:inline-size var(--tui-duration) linear;transition:inline-size var(--tui-duration) linear}[tuiProgressBar]::-webkit-progress-value{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar]::-moz-progress-bar{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar][data-size=xxs]{--t-height: .125rem}[tuiProgressBar][data-size=xs]{--t-height: .25rem}[tuiProgressBar][data-size=s]{--t-height: .5rem}[tuiProgressBar][data-size=l]{--t-height: 1rem}[tuiProgressBar][data-size=xl]{--t-height: 1.25rem}[tuiProgressBar][data-size=xxl]{--t-height: 1.5rem}[tuiProgressBar]:indeterminate{background:linear-gradient(to right,var(--tui-background-neutral-2) 0 45%,var(--tui-progress-color, currentColor) 45% 55%,var(--tui-background-neutral-2) 55% 100%) right;background-size:225%;animation:tuiIndeterminateAnimation 3s infinite ease-in-out}[tuiProgressBar]:indeterminate::-webkit-progress-value{background:transparent}[tuiProgressBar]:indeterminate::-moz-progress-bar{background:transparent}[tuiProgressBar]::-webkit-progress-inner-element{border-radius:inherit}[tuiProgressBar]::-webkit-progress-bar{background:transparent;border-radius:inherit}label[tuiProgressLabel] [tuiProgressBar]:not(:first-child){position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:transparent}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiProgressBar = _TuiProgressBar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressBar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "progress[tuiProgressBar]",
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style.--tui-progress-color]": "color",
        "[attr.data-size]": "size"
      },
      styles: ["@keyframes tuiIndeterminateAnimation{50%{background-position:left}}[tuiProgressBar]{-webkit-appearance:none;appearance:none;border:none;--t-height: .75rem;display:block;inline-size:100%;block-size:var(--t-height);color:var(--tui-background-accent-1);background:var(--tui-background-neutral-2);clip-path:inset(0 .5px round var(--tui-radius-m));overflow:hidden;border-radius:1rem;flex-shrink:0}[tuiProgressBar]::-webkit-progress-value{-webkit-transition:inline-size var(--tui-duration) linear;transition:inline-size var(--tui-duration) linear}[tuiProgressBar]::-webkit-progress-value{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar]::-moz-progress-bar{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar][data-size=xxs]{--t-height: .125rem}[tuiProgressBar][data-size=xs]{--t-height: .25rem}[tuiProgressBar][data-size=s]{--t-height: .5rem}[tuiProgressBar][data-size=l]{--t-height: 1rem}[tuiProgressBar][data-size=xl]{--t-height: 1.25rem}[tuiProgressBar][data-size=xxl]{--t-height: 1.5rem}[tuiProgressBar]:indeterminate{background:linear-gradient(to right,var(--tui-background-neutral-2) 0 45%,var(--tui-progress-color, currentColor) 45% 55%,var(--tui-background-neutral-2) 55% 100%) right;background-size:225%;animation:tuiIndeterminateAnimation 3s infinite ease-in-out}[tuiProgressBar]:indeterminate::-webkit-progress-value{background:transparent}[tuiProgressBar]:indeterminate::-moz-progress-bar{background:transparent}[tuiProgressBar]::-webkit-progress-inner-element{border-radius:inherit}[tuiProgressBar]::-webkit-progress-bar{background:transparent;border-radius:inherit}label[tuiProgressLabel] [tuiProgressBar]:not(:first-child){position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:transparent}\n"]
    }]
  }], null, {
    color: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var _TuiProgressColorSegments = class _TuiProgressColorSegments {
  constructor() {
    this.cdr = inject(ChangeDetectorRef, {
      skipSelf: true
    });
    this.colors = signal([]);
    this.el = tuiInjectElement();
    this.width = toSignal(inject(WaResizeObserverService, {
      self: true
    }).pipe(
      map(([x]) => x?.contentRect.width ?? 0),
      distinctUntilChanged(),
      // Angular 16 bug
      // Otherwise, host: {'[style.--tui-progress-color]': 'gradient()'} will not recomputed
      tap(() => this.cdr.markForCheck())
    ), {
      initialValue: this.el.offsetWidth
    });
    this.gradient = computed((colors = this.colors()) => {
      if (!colors.length) {
        return null;
      }
      const segmentWidth = this.width() / colors.length;
      const colorsString = colors.reduce((acc, color, i) => `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`, "");
      return `linear-gradient(to right${colorsString})`;
    });
  }
  set colorsSetter(colors) {
    this.colors.set(colors);
  }
};
_TuiProgressColorSegments.\u0275fac = function TuiProgressColorSegments_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiProgressColorSegments)();
};
_TuiProgressColorSegments.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiProgressColorSegments,
  selectors: [["progress", "tuiProgressBar", "", "tuiProgressColorSegments", ""]],
  hostVars: 2,
  hostBindings: function TuiProgressColorSegments_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("--tui-progress-color", ctx.gradient());
    }
  },
  inputs: {
    colorsSetter: [0, "tuiProgressColorSegments", "colorsSetter"]
  },
  features: [\u0275\u0275ProvidersFeature([WaResizeObserverService])]
});
var TuiProgressColorSegments = _TuiProgressColorSegments;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressColorSegments, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "progress[tuiProgressBar][tuiProgressColorSegments]",
      providers: [WaResizeObserverService],
      host: {
        "[style.--tui-progress-color]": "gradient()"
      }
    }]
  }], null, {
    colorsSetter: [{
      type: Input,
      args: ["tuiProgressColorSegments"]
    }]
  });
})();
var _TuiProgressCircle = class _TuiProgressCircle {
  constructor() {
    this.options = inject(TUI_PROGRESS_OPTIONS);
    this.animationDelay = toSignal(of(true).pipe(delay(0)));
    this.value = 0;
    this.max = 1;
    this.color = this.options.color;
    this.size = this.options.size;
    this.arc = false;
  }
  get progressRatio() {
    const ratio = this.value / this.max;
    return Number.isFinite(ratio) ? ratio : 0;
  }
};
_TuiProgressCircle.\u0275fac = function TuiProgressCircle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiProgressCircle)();
};
_TuiProgressCircle.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiProgressCircle,
  selectors: [["tui-progress-circle"]],
  hostVars: 7,
  hostBindings: function TuiProgressCircle_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.size);
      \u0275\u0275styleProp("--tui-progress-color", ctx.color)("--t-progress-ratio", ctx.progressRatio);
      \u0275\u0275classProp("_arc", ctx.arc);
    }
  },
  inputs: {
    value: "value",
    max: "max",
    color: "color",
    size: "size",
    arc: [2, "arc", "arc", coerceBooleanProperty]
  },
  decls: 4,
  vars: 4,
  consts: [[1, "t-hidden-progress", 3, "max", "value"], ["aria-hidden", "true", "height", "100%", "width", "100%", 1, "t-svg"], ["cx", "50%", "cy", "50%", 1, "t-track"], ["cx", "50%", "cy", "50%", 1, "t-progress"]],
  template: function TuiProgressCircle_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "progress", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 1);
      \u0275\u0275element(2, "circle", 2)(3, "circle", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("max", ctx.max)("value", ctx.value);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("t-progress_filled", ctx.animationDelay());
    }
  },
  styles: ["[_nghost-%COMP%]{--t-stroke-width: var(--tui-thickness, .375em);position:relative;display:block;color:var(--tui-background-accent-1);transform:rotate(-90deg);transform-origin:center;font-size:1rem;inline-size:var(--t-diameter);min-inline-size:var(--t-diameter);block-size:var(--t-diameter);border-radius:100%;-webkit-mask:radial-gradient(closest-side,transparent calc(100% - var(--t-stroke-width)),#000 calc(100% - var(--t-stroke-width) + .5px));mask:radial-gradient(closest-side,transparent calc(100% - var(--t-stroke-width)),#000 calc(100% - var(--t-stroke-width) + .5px))}._arc[_nghost-%COMP%]{transform:rotate(135deg)}[data-size=xxs][_nghost-%COMP%]{--t-diameter: 2em}[data-size=xs][_nghost-%COMP%]{--t-diameter: 2.5em}[data-size=s][_nghost-%COMP%]{--t-diameter: 3.5em}[data-size=m][_nghost-%COMP%]{--t-diameter: 4em}[data-size=l][_nghost-%COMP%]{--t-diameter: 5em}[data-size=xl][_nghost-%COMP%]{--t-diameter: 6em}[data-size=xxl][_nghost-%COMP%]{--t-diameter: 8em}.t-track[_ngcontent-%COMP%], .t-progress[_ngcontent-%COMP%]{fill:transparent;stroke-linecap:round;stroke-width:var(--t-stroke-width);r:calc((var(--t-diameter) - var(--t-stroke-width)) / 2)}.t-track[_ngcontent-%COMP%]{stroke:var(--tui-background-neutral-1)}._arc[_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]{stroke-dasharray:calc(.75 * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))) calc(.25 * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}.t-progress[_ngcontent-%COMP%]{stroke:var(--tui-progress-color, currentColor);stroke-dasharray:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2));stroke-dashoffset:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))}.t-progress_filled[_ngcontent-%COMP%]{transition-property:stroke-dashoffset,stroke-dasharray;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-timing-function:linear;stroke-dashoffset:calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)) - var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}._arc[_nghost-%COMP%]   .t-progress[_ngcontent-%COMP%]{stroke-dashoffset:.1px;stroke-dasharray:calc(.75 * var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))) calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}.t-hidden-progress[_ngcontent-%COMP%]{position:absolute;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);block-size:1px;inline-size:1px;margin:-1px;overflow:hidden;padding:0}.t-svg[_ngcontent-%COMP%]{overflow:unset}"],
  changeDetection: 0
});
var TuiProgressCircle = _TuiProgressCircle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressCircle, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-progress-circle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-size]": "size",
        "[style.--tui-progress-color]": "color",
        "[style.--t-progress-ratio]": "progressRatio",
        "[class._arc]": "arc"
      },
      template: '<progress\n    class="t-hidden-progress"\n    [max]="max"\n    [value]="value"\n></progress>\n\n<svg\n    aria-hidden="true"\n    height="100%"\n    width="100%"\n    class="t-svg"\n>\n    <circle\n        cx="50%"\n        cy="50%"\n        class="t-track"\n    />\n\n    <circle\n        cx="50%"\n        cy="50%"\n        class="t-progress"\n        [class.t-progress_filled]="animationDelay()"\n    />\n</svg>\n',
      styles: [":host{--t-stroke-width: var(--tui-thickness, .375em);position:relative;display:block;color:var(--tui-background-accent-1);transform:rotate(-90deg);transform-origin:center;font-size:1rem;inline-size:var(--t-diameter);min-inline-size:var(--t-diameter);block-size:var(--t-diameter);border-radius:100%;-webkit-mask:radial-gradient(closest-side,transparent calc(100% - var(--t-stroke-width)),#000 calc(100% - var(--t-stroke-width) + .5px));mask:radial-gradient(closest-side,transparent calc(100% - var(--t-stroke-width)),#000 calc(100% - var(--t-stroke-width) + .5px))}:host._arc{transform:rotate(135deg)}:host[data-size=xxs]{--t-diameter: 2em}:host[data-size=xs]{--t-diameter: 2.5em}:host[data-size=s]{--t-diameter: 3.5em}:host[data-size=m]{--t-diameter: 4em}:host[data-size=l]{--t-diameter: 5em}:host[data-size=xl]{--t-diameter: 6em}:host[data-size=xxl]{--t-diameter: 8em}.t-track,.t-progress{fill:transparent;stroke-linecap:round;stroke-width:var(--t-stroke-width);r:calc((var(--t-diameter) - var(--t-stroke-width)) / 2)}.t-track{stroke:var(--tui-background-neutral-1)}:host._arc .t-track{stroke-dasharray:calc(.75 * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))) calc(.25 * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}.t-progress{stroke:var(--tui-progress-color, currentColor);stroke-dasharray:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2));stroke-dashoffset:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))}.t-progress_filled{transition-property:stroke-dashoffset,stroke-dasharray;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-timing-function:linear;stroke-dashoffset:calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)) - var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}:host._arc .t-progress{stroke-dashoffset:.1px;stroke-dasharray:calc(.75 * var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))) calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}.t-hidden-progress{position:absolute;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);block-size:1px;inline-size:1px;margin:-1px;overflow:hidden;padding:0}.t-svg{overflow:unset}\n"]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    arc: [{
      type: Input,
      args: [{
        transform: coerceBooleanProperty
      }]
    }]
  });
})();
var _TuiProgressLabel = class _TuiProgressLabel {
};
_TuiProgressLabel.\u0275fac = function TuiProgressLabel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiProgressLabel)();
};
_TuiProgressLabel.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiProgressLabel,
  selectors: [["label", "tuiProgressLabel", ""]],
  attrs: _c1,
  ngContentSelectors: _c3,
  decls: 4,
  vars: 0,
  consts: [[1, "t-label"]],
  template: function TuiProgressLabel_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c2);
      \u0275\u0275projection(0);
      \u0275\u0275projection(1, 1);
      \u0275\u0275elementStart(2, "span", 0);
      \u0275\u0275projection(3, 2);
      \u0275\u0275elementEnd();
    }
  },
  styles: ["[_nghost-%COMP%]{position:relative;display:inline-block;color:var(--tui-text-primary)}.t-label[_ngcontent-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;font:var(--tui-font-text-s);flex-direction:column;justify-content:center;align-items:center}"],
  changeDetection: 0
});
var TuiProgressLabel = _TuiProgressLabel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressLabel, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "label[tuiProgressLabel]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-content select="progress" />\n<ng-content select="tui-progress-circle" />\n<span class="t-label">\n    <ng-content />\n</span>\n',
      styles: [":host{position:relative;display:inline-block;color:var(--tui-text-primary)}.t-label{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;font:var(--tui-font-text-s);flex-direction:column;justify-content:center;align-items:center}\n"]
    }]
  }], null, null);
})();
var _TuiProgressSegmentedStyles = class _TuiProgressSegmentedStyles {
};
_TuiProgressSegmentedStyles.\u0275fac = function TuiProgressSegmentedStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiProgressSegmentedStyles)();
};
_TuiProgressSegmentedStyles.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiProgressSegmentedStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-progress-segmented"],
  decls: 0,
  vars: 0,
  template: function TuiProgressSegmentedStyles_Template(rf, ctx) {
  },
  styles: ["[tuiProgressBar]._segmented{--tui-segment-gap: .5rem;-webkit-mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));-webkit-mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width));mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width))}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiProgressSegmentedStyles = _TuiProgressSegmentedStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressSegmentedStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-progress-segmented"
      },
      styles: ["[tuiProgressBar]._segmented{--tui-segment-gap: .5rem;-webkit-mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));-webkit-mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width));mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width))}\n"]
    }]
  }], null, null);
})();
var _TuiProgressSegmented = class _TuiProgressSegmented {
  constructor() {
    this.nothing = tuiWithStyles(TuiProgressSegmentedStyles);
    this.segments = 1;
  }
};
_TuiProgressSegmented.\u0275fac = function TuiProgressSegmented_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiProgressSegmented)();
};
_TuiProgressSegmented.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiProgressSegmented,
  selectors: [["", "tuiProgressBar", "", "segments", ""]],
  hostAttrs: [1, "_segmented"],
  hostVars: 2,
  hostBindings: function TuiProgressSegmented_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("--t-segment-width", 1 / ctx.segments);
    }
  },
  inputs: {
    segments: "segments"
  }
});
var TuiProgressSegmented = _TuiProgressSegmented;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressSegmented, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiProgressBar][segments]",
      host: {
        class: "_segmented",
        "[style.--t-segment-width]": "1 / segments"
      }
    }]
  }], null, {
    segments: [{
      type: Input
    }]
  });
})();
var TuiProgress = [TuiProgressBar, TuiProgressCircle, TuiProgressColorSegments, TuiProgressFixedGradientDirective, TuiProgressLabel, TuiProgressSegmented];

// projects/demo/src/app/pages/character-counter/examples/1/index.ts
var limit = 280;
var _Example = class _Example {
  constructor() {
    this.wysiwyg = viewChild.required(TuiEditor);
    this.builtInTools = [TuiEditorTool.Undo];
    this.limit = limit;
    this.control = new FormControl(`
        <p>Hello world</p>
    `);
  }
  get characterCount() {
    return this.wysiwyg().editor?.getOriginTiptapEditor()?.storage.characterCount;
  }
  get percentage() {
    return Math.round(100 / this.limit * (this.characterCount?.characters() ?? 0));
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], viewQuery: function Example_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.wysiwyg, TuiEditor, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275ProvidersFeature([
  provideTuiEditor(() => __async(_Example, null, function* () {
    return import("./chunk-53PLTFXX.js").then(({ CharacterCount }) => CharacterCount.configure({ limit }));
  }))
])], decls: 6, vars: 9, consts: [[3, "formControl", "tools"], [1, "character-count"], ["size", "xxs", 3, "max", "value"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tui-editor", 0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "tui-progress-circle", 2);
    \u0275\u0275text(3);
    \u0275\u0275element(4, "br");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools);
    \u0275\u0275advance();
    \u0275\u0275classProp("warning", (ctx.characterCount == null ? null : ctx.characterCount.characters()) === ctx.limit);
    \u0275\u0275advance();
    \u0275\u0275property("max", 100)("value", ctx.percentage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx.characterCount == null ? null : ctx.characterCount.characters(), " / ", ctx.limit, " characters ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.characterCount == null ? null : ctx.characterCount.words(), " words\n");
  }
}, dependencies: [ReactiveFormsModule, NgControlStatus, FormControlDirective, TuiEditor, TuiProgressCircle], styles: ["\n\n.character-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: rgba(28, 25, 23, 0.6);\n  font-size: 0.75rem;\n  gap: 0.5rem;\n  margin: 1.5rem;\n}\n.warning[_ngcontent-%COMP%] {\n  color: #ff5c33;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [ReactiveFormsModule, TuiEditor, TuiProgress], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor(() => __async(null, null, function* () {
        return import("./chunk-53PLTFXX.js").then(({ CharacterCount }) => CharacterCount.configure({ limit }));
      }))
    ], template: '<tui-editor\n    [formControl]="control"\n    [tools]="builtInTools"\n/>\n\n<div\n    class="character-count"\n    [class.warning]="characterCount?.characters() === limit"\n>\n    <tui-progress-circle\n        size="xxs"\n        [max]="100"\n        [value]="percentage"\n    />\n\n    {{ characterCount?.characters() }} / {{ limit }} characters\n    <br />\n    {{ characterCount?.words() }} words\n</div>\n', styles: ["/* projects/demo/src/app/pages/character-counter/examples/1/index.less */\n.character-count {\n  display: flex;\n  align-items: center;\n  color: rgba(28, 25, 23, 0.6);\n  font-size: 0.75rem;\n  gap: 0.5rem;\n  margin: 1.5rem;\n}\n.warning {\n  color: #ff5c33;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/character-counter/examples/1/index.ts", lineNumber: 22 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-SNPTFG6V.js.map
