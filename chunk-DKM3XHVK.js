import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-5MUC44EU.js";
import "./chunk-EO7LQO3V.js";
import "./chunk-IYZNRN55.js";
import "./chunk-T3OKOD3A.js";
import "./chunk-OGDOLTW3.js";
import "./chunk-O4YFAAW5.js";
import "./chunk-FQYNGWGS.js";
import "./chunk-LXPXPQCS.js";
import "./chunk-INMNDEHV.js";
import "./chunk-J4TAEO4S.js";
import "./chunk-A33AM5OH.js";
import "./chunk-T5QAZXLT.js";
import "./chunk-CEVSZ4W2.js";
import "./chunk-FSPXCFZT.js";
import "./chunk-C7MBO5OX.js";
import "./chunk-IZQL34JE.js";
import "./chunk-GPYYXLWQ.js";
import {
  WaResizeObserverService
} from "./chunk-X7GRIVH7.js";
import {
  TUI_VERSION
} from "./chunk-BILNAO2Z.js";
import "./chunk-M562FPU2.js";
import "./chunk-KD3HJTV7.js";
import "./chunk-HDBDXCXT.js";
import "./chunk-SWVF5MG7.js";
import "./chunk-FWDXC2LG.js";
import {
  TuiEditorTool
} from "./chunk-TU7TDGZA.js";
import "./chunk-3PCP22CS.js";
import {
  tuiCreateOptions
} from "./chunk-CGIMAQGG.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  coerceBooleanProperty,
  toSignal,
  tuiInjectElement,
  tuiWithStyles
} from "./chunk-4FOPQVVL.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ViewEncapsulation,
  computed,
  inject,
  input,
  map,
  setClassMetadata,
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
} from "./chunk-G7TA3DS4.js";
import "./chunk-4HJQMCHN.js";
import "./chunk-VV7RTGQI.js";
import "./chunk-I33OXPP7.js";
import "./chunk-Q52BLV3K.js";
import "./chunk-KWSTWQNB.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-progress.mjs
var _c0 = ["tuiProgressBar", ""];
var _c1 = ["tuiProgressLabel", ""];
var _c2 = [[["progress"]], [["tui-progress-circle"]], "*"];
var _c3 = ["progress", "tui-progress-circle", "*"];
var _a;
var Styles$1 = (_a = class {
}, _a.\u0275fac = function Styles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a)();
}, _a.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a,
  selectors: [["ng-component"]],
  exportAs: ["tui-fixed-gradient-5.11.0"],
  decls: 0,
  vars: 0,
  template: function Styles_Template(rf, ctx) {
  },
  styles: ['[tuiProgressFixedGradient]:where(*[data-tui-version="5.11.0"])::-moz-progress-bar{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));transition:clip-path var(--tui-duration) linear;margin-inline-end:calc(-100% + var(--tui-progress-percent))}[tuiProgressFixedGradient]:where(*[data-tui-version="5.11.0"])::-webkit-progress-value{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));transition:clip-path var(--tui-duration) linear}\n'],
  encapsulation: 2,
  changeDetection: 0
}), _a);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles$1, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-fixed-gradient-${TUI_VERSION}`,
      styles: ['[tuiProgressFixedGradient]:where(*[data-tui-version="5.11.0"])::-moz-progress-bar{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));transition:clip-path var(--tui-duration) linear;margin-inline-end:calc(-100% + var(--tui-progress-percent))}[tuiProgressFixedGradient]:where(*[data-tui-version="5.11.0"])::-webkit-progress-value{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));transition:clip-path var(--tui-duration) linear}\n']
    }]
  }], null, null);
})();
var _TuiProgressFixedGradientDirective = class _TuiProgressFixedGradientDirective {
  constructor() {
    this.nothing = tuiWithStyles(Styles$1);
    this.el = tuiInjectElement();
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
      \u0275\u0275styleProp("--tui-progress-percent", ctx.el.position * 100, "%");
    }
  }
});
var TuiProgressFixedGradientDirective = _TuiProgressFixedGradientDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressFixedGradientDirective, [{
    type: Directive,
    args: [{
      selector: "progress[tuiProgressBar][tuiProgressFixedGradient]",
      host: {
        "[style.--tui-progress-percent.%]": "el.position * 100"
      }
    }]
  }], null, null);
})();
var TUI_PROGRESS_DEFAULT_OPTIONS = {
  color: null,
  size: "m"
};
var [TUI_PROGRESS_OPTIONS, tuiProgressOptionsProvider] = tuiCreateOptions(TUI_PROGRESS_DEFAULT_OPTIONS);
var _TuiProgressBar = class _TuiProgressBar {
  constructor() {
    this.options = inject(TUI_PROGRESS_OPTIONS);
    this.color = input(this.options.color);
    this.size = input(this.options.size);
  }
};
_TuiProgressBar.\u0275fac = function TuiProgressBar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiProgressBar)();
};
_TuiProgressBar.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiProgressBar,
  selectors: [["progress", "tuiProgressBar", ""]],
  hostAttrs: ["data-tui-version", "5.11.0"],
  hostVars: 3,
  hostBindings: function TuiProgressBar_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.size());
      \u0275\u0275styleProp("--tui-progress-color", ctx.color());
    }
  },
  inputs: {
    color: [1, "color"],
    size: [1, "size"]
  },
  attrs: _c0,
  decls: 0,
  vars: 0,
  template: function TuiProgressBar_Template(rf, ctx) {
  },
  styles: ['@keyframes tuiIndeterminateAnimation{50%{background-position:left}}[tuiProgressBar]:where(*[data-tui-version="5.11.0"]){-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;--t-height: .75rem;display:block;inline-size:100%;block-size:var(--t-height);color:var(--tui-background-accent-1);background:var(--tui-background-neutral-2);clip-path:inset(0 .5px round var(--tui-radius-m));overflow:hidden;border-radius:1rem;flex-shrink:0}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])::-webkit-progress-value{transition:inline-size var(--tui-duration) linear}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])::-webkit-progress-value{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])::-moz-progress-bar{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])[data-size=xxs]{--t-height: .125rem}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])[data-size=xs]{--t-height: .25rem}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])[data-size=s]{--t-height: .5rem}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])[data-size=l]{--t-height: 1rem}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])[data-size=xl]{--t-height: 1.25rem}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])[data-size=xxl]{--t-height: 1.5rem}[tuiProgressBar]:where(*[data-tui-version="5.11.0"]):indeterminate{background:linear-gradient(to right,var(--tui-background-neutral-2) 0 45%,var(--tui-progress-color, currentColor) 45% 55%,var(--tui-background-neutral-2) 55% 100%) right;background-size:225%;animation:tuiIndeterminateAnimation 3s infinite ease-in-out}[tuiProgressBar]:where(*[data-tui-version="5.11.0"]):indeterminate::-webkit-progress-value{background:transparent}[tuiProgressBar]:where(*[data-tui-version="5.11.0"]):indeterminate::-moz-progress-bar{background:transparent}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])::-webkit-progress-inner-element{border-radius:inherit}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])::-webkit-progress-bar{background:transparent;border-radius:inherit}label[tuiProgressLabel] [tuiProgressBar]:where(*[data-tui-version="5.11.0"]):not(:first-child){position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;background:transparent}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiProgressBar = _TuiProgressBar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressBar, [{
    type: Component,
    args: [{
      selector: "progress[tuiProgressBar]",
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-size]": "size()",
        "[style.--tui-progress-color]": "color()"
      },
      styles: ['@keyframes tuiIndeterminateAnimation{50%{background-position:left}}[tuiProgressBar]:where(*[data-tui-version="5.11.0"]){-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;--t-height: .75rem;display:block;inline-size:100%;block-size:var(--t-height);color:var(--tui-background-accent-1);background:var(--tui-background-neutral-2);clip-path:inset(0 .5px round var(--tui-radius-m));overflow:hidden;border-radius:1rem;flex-shrink:0}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])::-webkit-progress-value{transition:inline-size var(--tui-duration) linear}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])::-webkit-progress-value{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])::-moz-progress-bar{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])[data-size=xxs]{--t-height: .125rem}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])[data-size=xs]{--t-height: .25rem}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])[data-size=s]{--t-height: .5rem}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])[data-size=l]{--t-height: 1rem}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])[data-size=xl]{--t-height: 1.25rem}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])[data-size=xxl]{--t-height: 1.5rem}[tuiProgressBar]:where(*[data-tui-version="5.11.0"]):indeterminate{background:linear-gradient(to right,var(--tui-background-neutral-2) 0 45%,var(--tui-progress-color, currentColor) 45% 55%,var(--tui-background-neutral-2) 55% 100%) right;background-size:225%;animation:tuiIndeterminateAnimation 3s infinite ease-in-out}[tuiProgressBar]:where(*[data-tui-version="5.11.0"]):indeterminate::-webkit-progress-value{background:transparent}[tuiProgressBar]:where(*[data-tui-version="5.11.0"]):indeterminate::-moz-progress-bar{background:transparent}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])::-webkit-progress-inner-element{border-radius:inherit}[tuiProgressBar]:where(*[data-tui-version="5.11.0"])::-webkit-progress-bar{background:transparent;border-radius:inherit}label[tuiProgressLabel] [tuiProgressBar]:where(*[data-tui-version="5.11.0"]):not(:first-child){position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;background:transparent}\n']
    }]
  }], null, null);
})();
var _TuiProgressColorSegments = class _TuiProgressColorSegments {
  constructor() {
    this.el = tuiInjectElement();
    this.width = toSignal(inject(WaResizeObserverService, {
      self: true
    }).pipe(map(([x]) => x?.contentRect.width ?? 0)), {
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
    this.colors = input([], {
      alias: "tuiProgressColorSegments"
    });
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
    colors: [1, "tuiProgressColorSegments", "colors"]
  },
  features: [\u0275\u0275ProvidersFeature([WaResizeObserverService])]
});
var TuiProgressColorSegments = _TuiProgressColorSegments;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressColorSegments, [{
    type: Directive,
    args: [{
      selector: "progress[tuiProgressBar][tuiProgressColorSegments]",
      providers: [WaResizeObserverService],
      host: {
        "[style.--tui-progress-color]": "gradient()"
      }
    }]
  }], null, null);
})();
var _TuiProgressCircle = class _TuiProgressCircle {
  constructor() {
    this.options = inject(TUI_PROGRESS_OPTIONS);
    this.ratio = computed((ratio = this.value() / this.max()) => Number.isFinite(ratio) ? ratio : 0);
    this.value = input(0);
    this.max = input(1);
    this.color = input(this.options.color);
    this.size = input(this.options.size);
    this.arc = input(false, {
      transform: coerceBooleanProperty
    });
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
      \u0275\u0275attribute("data-size", ctx.size());
      \u0275\u0275styleProp("--t-progress-ratio", ctx.ratio())("--tui-progress-color", ctx.color());
      \u0275\u0275classProp("_arc", ctx.arc());
    }
  },
  inputs: {
    value: [1, "value"],
    max: [1, "max"],
    color: [1, "color"],
    size: [1, "size"],
    arc: [1, "arc"]
  },
  decls: 4,
  vars: 2,
  consts: [[1, "t-hidden", 3, "max", "value"], ["aria-hidden", "true", "height", "100%", "width", "100%", 1, "t-svg"], ["cx", "50%", "cy", "50%", 1, "t-track"], ["cx", "50%", "cy", "50%", 1, "t-progress"]],
  template: function TuiProgressCircle_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "progress", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 1);
      \u0275\u0275element(2, "circle", 2)(3, "circle", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("max", ctx.max())("value", ctx.value());
    }
  },
  styles: ["[_nghost-%COMP%]{--t-stroke-width: var(--tui-thickness, .375em);position:relative;display:flex;align-items:center;justify-content:center;color:var(--tui-background-accent-1);font-size:1rem;inline-size:var(--t-diameter);min-inline-size:var(--t-diameter);block-size:var(--t-diameter);border-radius:100%;stroke:var(--tui-background-neutral-1);overflow:hidden;-webkit-mask-image:radial-gradient(closest-side,transparent calc(100% - var(--t-stroke-width) - .5px),#000 calc(100% - var(--t-stroke-width)));mask-image:radial-gradient(closest-side,transparent calc(100% - var(--t-stroke-width) - .5px),#000 calc(100% - var(--t-stroke-width)))}[data-size=xxs][_nghost-%COMP%]{--t-diameter: 2em}[data-size=xs][_nghost-%COMP%]{--t-diameter: 2.5em}[data-size=s][_nghost-%COMP%]{--t-diameter: 3.5em}[data-size=m][_nghost-%COMP%]{--t-diameter: 4em}[data-size=l][_nghost-%COMP%]{--t-diameter: 5em}[data-size=xl][_nghost-%COMP%]{--t-diameter: 6em}[data-size=xxl][_nghost-%COMP%]{--t-diameter: 8em}.t-track[_ngcontent-%COMP%], .t-progress[_ngcontent-%COMP%]{fill:transparent;stroke-linecap:round;stroke-width:var(--t-stroke-width);r:calc((var(--t-diameter) - var(--t-stroke-width)) / 2)}.t-track[_ngcontent-%COMP%]{stroke:inherit}._arc[_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]{stroke-dasharray:calc(.75 * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))) calc(.25 * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}.t-progress[_ngcontent-%COMP%]{transition-property:stroke-dashoffset,stroke-dasharray;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-timing-function:linear;stroke:var(--tui-progress-color, currentColor);stroke-dasharray:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2));stroke-dashoffset:calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)) - var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}._arc[_nghost-%COMP%]   .t-progress[_ngcontent-%COMP%]{stroke-dashoffset:.1px;stroke-dasharray:calc(.75 * var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))) calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}.t-hidden[_ngcontent-%COMP%]{position:absolute;clip-path:inset(50%)}.t-svg[_ngcontent-%COMP%]{position:absolute;transform:rotate(-90deg);overflow:unset}._arc[_nghost-%COMP%]   .t-svg[_ngcontent-%COMP%]{transform:rotate(135deg)}"],
  changeDetection: 0
});
var TuiProgressCircle = _TuiProgressCircle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressCircle, [{
    type: Component,
    args: [{
      selector: "tui-progress-circle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-size]": "size()",
        "[class._arc]": "arc()",
        "[style.--t-progress-ratio]": "ratio()",
        "[style.--tui-progress-color]": "color()"
      },
      template: '<progress\n    class="t-hidden"\n    [max]="max()"\n    [value]="value()"\n></progress>\n\n<svg\n    aria-hidden="true"\n    height="100%"\n    width="100%"\n    class="t-svg"\n>\n    <circle\n        cx="50%"\n        cy="50%"\n        class="t-track"\n    />\n\n    <circle\n        cx="50%"\n        cy="50%"\n        class="t-progress"\n    />\n</svg>\n',
      styles: [":host{--t-stroke-width: var(--tui-thickness, .375em);position:relative;display:flex;align-items:center;justify-content:center;color:var(--tui-background-accent-1);font-size:1rem;inline-size:var(--t-diameter);min-inline-size:var(--t-diameter);block-size:var(--t-diameter);border-radius:100%;stroke:var(--tui-background-neutral-1);overflow:hidden;-webkit-mask-image:radial-gradient(closest-side,transparent calc(100% - var(--t-stroke-width) - .5px),#000 calc(100% - var(--t-stroke-width)));mask-image:radial-gradient(closest-side,transparent calc(100% - var(--t-stroke-width) - .5px),#000 calc(100% - var(--t-stroke-width)))}:host[data-size=xxs]{--t-diameter: 2em}:host[data-size=xs]{--t-diameter: 2.5em}:host[data-size=s]{--t-diameter: 3.5em}:host[data-size=m]{--t-diameter: 4em}:host[data-size=l]{--t-diameter: 5em}:host[data-size=xl]{--t-diameter: 6em}:host[data-size=xxl]{--t-diameter: 8em}.t-track,.t-progress{fill:transparent;stroke-linecap:round;stroke-width:var(--t-stroke-width);r:calc((var(--t-diameter) - var(--t-stroke-width)) / 2)}.t-track{stroke:inherit}:host._arc .t-track{stroke-dasharray:calc(.75 * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))) calc(.25 * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}.t-progress{transition-property:stroke-dashoffset,stroke-dasharray;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-timing-function:linear;stroke:var(--tui-progress-color, currentColor);stroke-dasharray:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2));stroke-dashoffset:calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)) - var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}:host._arc .t-progress{stroke-dashoffset:.1px;stroke-dasharray:calc(.75 * var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))) calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}.t-hidden{position:absolute;clip-path:inset(50%)}.t-svg{position:absolute;transform:rotate(-90deg);overflow:unset}:host._arc .t-svg{transform:rotate(135deg)}\n"]
    }]
  }], null, null);
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
  styles: ["[_nghost-%COMP%]{position:relative;display:inline-block;color:var(--tui-text-primary)}.t-label[_ngcontent-%COMP%]{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;display:flex;font:var(--tui-typography-body-s);flex-direction:column;justify-content:center;align-items:center}.t-label[_ngcontent-%COMP%]     [tuiTitle]{text-align:center}"],
  changeDetection: 0
});
var TuiProgressLabel = _TuiProgressLabel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressLabel, [{
    type: Component,
    args: [{
      selector: "label[tuiProgressLabel]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-content select="progress" />\n<ng-content select="tui-progress-circle" />\n<span class="t-label">\n    <ng-content />\n</span>\n',
      styles: [":host{position:relative;display:inline-block;color:var(--tui-text-primary)}.t-label{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;display:flex;font:var(--tui-typography-body-s);flex-direction:column;justify-content:center;align-items:center}.t-label ::ng-deep [tuiTitle]{text-align:center}\n"]
    }]
  }], null, null);
})();
var _Styles = class _Styles {
};
_Styles.\u0275fac = function Styles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Styles)();
};
_Styles.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _Styles,
  selectors: [["ng-component"]],
  exportAs: ["tui-progress-segmented-5.11.0"],
  decls: 0,
  vars: 0,
  template: function Styles_Template1(rf, ctx) {
  },
  styles: ['[tuiProgressBar]:where(*[data-tui-version="5.11.0"])._segmented{--tui-segment-gap: .5rem;-webkit-mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));-webkit-mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width));mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width))}\n'],
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
      exportAs: `tui-progress-segmented-${TUI_VERSION}`,
      styles: ['[tuiProgressBar]:where(*[data-tui-version="5.11.0"])._segmented{--tui-segment-gap: .5rem;-webkit-mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));-webkit-mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width));mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width))}\n']
    }]
  }], null, null);
})();
var _TuiProgressSegmented = class _TuiProgressSegmented {
  constructor() {
    this.nothing = tuiWithStyles(Styles);
    this.segments = input(1);
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
      \u0275\u0275styleProp("--t-segment-width", 1 / ctx.segments());
    }
  },
  inputs: {
    segments: [1, "segments"]
  }
});
var TuiProgressSegmented = _TuiProgressSegmented;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressSegmented, [{
    type: Directive,
    args: [{
      selector: "[tuiProgressBar][segments]",
      host: {
        class: "_segmented",
        "[style.--t-segment-width]": "1 / segments()"
      }
    }]
  }], null, null);
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
    return this.wysiwyg().editor?.getOriginTiptapEditor()?.storage.characterCount ?? null;
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
  provideTuiEditor(async () => import("./chunk-USSKX3FM.js").then(({ CharacterCount }) => CharacterCount.configure({ limit })))
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
      provideTuiEditor(async () => import("./chunk-USSKX3FM.js").then(({ CharacterCount }) => CharacterCount.configure({ limit })))
    ], template: '<tui-editor\n    [formControl]="control"\n    [tools]="builtInTools"\n/>\n\n<div\n    class="character-count"\n    [class.warning]="characterCount?.characters() === limit"\n>\n    <tui-progress-circle\n        size="xxs"\n        [max]="100"\n        [value]="percentage"\n    />\n\n    {{ characterCount?.characters() }} / {{ limit }} characters\n    <br />\n    {{ characterCount?.words() }} words\n</div>\n', styles: ["/* projects/demo/src/app/pages/character-counter/examples/1/index.less */\n.character-count {\n  display: flex;\n  align-items: center;\n  color: rgba(28, 25, 23, 0.6);\n  font-size: 0.75rem;\n  gap: 0.5rem;\n  margin: 1.5rem;\n}\n.warning {\n  color: #ff5c33;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/character-counter/examples/1/index.ts", lineNumber: 22 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-DKM3XHVK.js.map
