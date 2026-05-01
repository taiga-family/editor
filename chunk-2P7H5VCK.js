import {
  tuiHintOptionsProvider
} from "./chunk-EQTN4WLW.js";
import {
  TuiControl,
  tuiAsAuxiliary,
  tuiFallbackValueProvider
} from "./chunk-QA7BIT47.js";
import {
  tuiControlValue,
  tuiTypedFromEvent,
  tuiWatch
} from "./chunk-Z64UTBP3.js";
import {
  AsyncPipe,
  DOCUMENT,
  NgControl,
  NgIf,
  NgModel,
  TUI_FALSE_HANDLER,
  TUI_TRUE_HANDLER,
  coerceBooleanProperty,
  takeUntilDestroyed,
  toSignal,
  tuiInjectElement,
  tuiPure,
  tuiRound
} from "./chunk-P325F6NW.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  INJECTOR$1,
  InjectionToken,
  Input,
  computed,
  forwardRef,
  inject,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-MN3TG6GQ.js";
import {
  __decorate,
  combineLatest,
  filter,
  map,
  merge,
  switchMap,
  take,
  tap,
  timer
} from "./chunk-CJ7OSSQR.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-slider.mjs
var _c0 = ["type", "range", "tuiSlider", ""];
var _c1 = ["tuiSliderThumbLabel", ""];
var _c2 = ["*", [["input", "type", "range"]]];
var _c3 = ["*", "input[type=range]"];
function TuiSliderThumbLabel_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var TUI_FLOATING_PRECISION = 7;
function tuiFindKeyStepsBoundariesByFn(keySteps, fn) {
  const keyStepUpperIndex = keySteps.findIndex((keyStep, i) => i && fn(keyStep));
  const lowerStep = keySteps[keyStepUpperIndex - 1] || keySteps[0];
  const upperStep = keySteps[keyStepUpperIndex] || keySteps[keySteps.length - 1] || [0, 0];
  return [lowerStep, upperStep];
}
function tuiPercentageToKeyStepValue(valuePercentage, keySteps) {
  const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([keyStepPercentage, _]) => valuePercentage <= keyStepPercentage);
  const ratio = (valuePercentage - lowerStepPercent) / (upperStepPercent - lowerStepPercent);
  const controlValue = (upperStepValue - lowerStepValue) * ratio + lowerStepValue;
  return tuiRound(controlValue, TUI_FLOATING_PRECISION);
}
function tuiKeyStepValueToPercentage(value, keySteps) {
  const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([_, keyStepValue]) => value <= keyStepValue);
  const ratio = (value - lowerStepValue) / (upperStepValue - lowerStepValue) || 0;
  return (upperStepPercent - lowerStepPercent) * ratio + lowerStepPercent;
}
function tuiCreateKeyStepsTransformer(keySteps, slider) {
  return new class {
    fromControlValue(controlValue) {
      const newValuePercentage = tuiKeyStepValueToPercentage(controlValue, keySteps);
      return newValuePercentage * (slider.max - slider.min) / 100 + slider.min;
    }
    toControlValue(nativeValue) {
      const valueRatio = (nativeValue - slider.min) / (slider.max - slider.min) || 0;
      return tuiPercentageToKeyStepValue(valueRatio * 100, keySteps);
    }
  }();
}
var TUI_SLIDER_DEFAULT_OPTIONS = {
  size: "m",
  trackColor: "var(--tui-background-neutral-2)"
};
var TUI_SLIDER_OPTIONS = new InjectionToken(ngDevMode ? "TUI_SLIDER_OPTIONS" : "", {
  factory: () => TUI_SLIDER_DEFAULT_OPTIONS
});
var _TuiSliderComponent = class _TuiSliderComponent {
  constructor() {
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.options = inject(TUI_SLIDER_OPTIONS);
    this.segments = signal([1]);
    this.ticksGradient = computed((segments = this.segments()) => this.getTicksGradient(segments));
    this.size = this.options.size;
    this.el = tuiInjectElement();
    this.keySteps = inject(TuiSliderKeyStepsBase, {
      self: true,
      optional: true
    });
    if (this.control instanceof NgModel) {
      this.control.valueChanges?.pipe(tuiWatch(), take(1)).subscribe();
    }
  }
  // TODO(v5): use signal inputs
  set segmentsSetter(segments) {
    this.segments.set(segments);
  }
  get valueRatio() {
    return (this.value - this.min) / (this.max - this.min) || 0;
  }
  get min() {
    return Number(this.el.min);
  }
  set min(x) {
    this.el.min = String(x);
  }
  get max() {
    return Number(this.el.max || 100);
  }
  set max(x) {
    this.el.max = String(x);
  }
  get step() {
    if (!this.el.step) {
      return 1;
    }
    return this.el.step === "any" ? 0 : Number(this.el.step);
  }
  set step(x) {
    this.el.step = String(x);
  }
  get value() {
    if (this.control instanceof NgModel) {
      const transformer = this.keySteps?.transformer();
      const value = transformer ? transformer.fromControlValue(this.control.value) : this.control.viewModel;
      return this.step ? tuiRound(Math.round(value / this.step) * this.step, TUI_FLOATING_PRECISION) : value;
    }
    return Number(this.el.value) || 0;
  }
  set value(newValue) {
    this.el.value = `${newValue}`;
  }
  getTicksGradient(segments) {
    if (segments.length <= 1) {
      return "linear-gradient(to right, transparent 0 100%)";
    }
    const percentages = segments.filter((segment) => segment > 0 && segment < 1).map((segment) => segment * 100);
    return percentages.reduce((acc, segment, index) => `${acc}
                var(--tui-text-tertiary) ${segment}% calc(${segment}% + var(--t-tick-thickness)),
                transparent ${segment}% ${percentages[index + 1] ?? 100}%${percentages[index + 1] ? "," : ")"}
                `, `linear-gradient(to right, transparent 0 ${percentages[0]}%,`);
  }
};
_TuiSliderComponent.\u0275fac = function TuiSliderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiSliderComponent)();
};
_TuiSliderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiSliderComponent,
  selectors: [["input", "type", "range", "tuiSlider", ""]],
  hostVars: 7,
  hostBindings: function TuiSliderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function TuiSliderComponent_input_HostBindingHandler() {
        return 0;
      });
    }
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.size);
      \u0275\u0275styleProp("--tui-slider-track-color", ctx.options.trackColor)("--tui-ticks-gradient", ctx.ticksGradient())("--tui-slider-fill-ratio", ctx.valueRatio);
    }
  },
  inputs: {
    size: "size",
    segmentsSetter: [2, "segments", "segmentsSetter", (x) => Array.isArray(x) ? x : new Array(x).fill(null).map((_, i) => i / x)]
  },
  features: [\u0275\u0275ProvidersFeature([tuiAsAuxiliary(_TuiSliderComponent)])],
  attrs: _c0,
  decls: 0,
  vars: 0,
  template: function TuiSliderComponent_Template(rf, ctx) {
  },
  styles: ['[_nghost-%COMP%]{--t-tick-thickness: .25rem;position:relative;display:block;inline-size:100%;color:var(--tui-background-accent-1);cursor:pointer;-webkit-appearance:none;appearance:none;block-size:1rem;background-color:transparent;background-clip:content-box;outline:none;border-radius:var(--tui-radius-m);--tui-thickness: .125rem}[_nghost-%COMP%]:active{cursor:ew-resize}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:auto}[data-size=s][_nghost-%COMP%]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.25rem;left:var(--t-left);inset-inline-start:var(--t-left);inline-size:.5rem;block-size:.5rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));--t-left: calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .5rem);content:"";cursor:ew-resize;background:currentColor;opacity:0}[data-size=s][_nghost-%COMP%]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}[data-size=m][_nghost-%COMP%]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.125rem;left:var(--t-left);inset-inline-start:var(--t-left);inline-size:.75rem;block-size:.75rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));--t-left: calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .75rem);content:"";cursor:ew-resize;background:currentColor;opacity:0}[data-size=m][_nghost-%COMP%]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}[_nghost-%COMP%]::-webkit-slider-container{border-radius:inherit}[data-size=m][_nghost-%COMP%]::-webkit-slider-runnable-track{block-size:var(--tui-thickness);border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:var(--tui-ticks-gradient),linear-gradient(to var(--tui-inline-end),currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:calc((.75rem - var(--t-tick-thickness)) / 2),0;background-size:calc(100% - .75rem),auto}[data-size=s][_nghost-%COMP%]::-webkit-slider-runnable-track{block-size:var(--tui-thickness);border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:var(--tui-ticks-gradient),linear-gradient(to var(--tui-inline-end),currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:calc((.5rem - var(--t-tick-thickness)) / 2),0;background-size:calc(100% - .5rem),auto}[data-size=m][_nghost-%COMP%]::-moz-range-track{block-size:var(--tui-thickness);border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:var(--tui-ticks-gradient);background-position-x:calc((.75rem - var(--t-tick-thickness)) / 2);background-size:calc(100% - .75rem)}[data-size=s][_nghost-%COMP%]::-moz-range-track{block-size:var(--tui-thickness);border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:var(--tui-ticks-gradient);background-position-x:calc((.5rem - var(--t-tick-thickness)) / 2);background-size:calc(100% - .5rem)}[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-block-start:calc(var(--tui-thickness) / 2 - (1rem / 2))}:not(:disabled)[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled)[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb:hover, :active:not(:disabled)[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-block-start:calc(var(--tui-thickness) / 2 - (1rem / 2))}:not(:disabled)[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled)[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb:hover, :active:not(:disabled)[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[data-size=m][_nghost-%COMP%]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled)[data-size=m][_nghost-%COMP%]::-moz-range-thumb{cursor:ew-resize}:not(:disabled)[data-size=m][_nghost-%COMP%]::-moz-range-thumb:hover, :active:not(:disabled)[data-size=m][_nghost-%COMP%]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible[data-size=m][_nghost-%COMP%]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[data-size=s][_nghost-%COMP%]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled)[data-size=s][_nghost-%COMP%]::-moz-range-thumb{cursor:ew-resize}:not(:disabled)[data-size=s][_nghost-%COMP%]::-moz-range-thumb:hover, :active:not(:disabled)[data-size=s][_nghost-%COMP%]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible[data-size=s][_nghost-%COMP%]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[_nghost-%COMP%]::-moz-range-progress{border-radius:inherit}[_nghost-%COMP%]::-moz-range-progress{block-size:var(--tui-thickness);background:currentColor;border-top-right-radius:0;border-bottom-right-radius:0}tui-textfield   [type="range"][_nghost-%COMP%]{top:100%;left:var(--t-padding);right:var(--t-padding);inline-size:calc(100% - var(--t-padding) * 2);block-size:1rem;margin:calc(-.5rem - var(--tui-thickness) / 2) 0 0;padding:0;pointer-events:auto}'],
  changeDetection: 0
});
var TuiSliderComponent = _TuiSliderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "input[type=range][tuiSlider]",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsAuxiliary(TuiSliderComponent)],
      host: {
        /**
         * For change detection.
         * Webkit does not have built-in method for customization of filling progress (as Firefox).
         * We draw filling of progress by `background: linear-gradient(...)` of the track.
         * This function triggers change detection (for {@link valueRatio} getter) when we drag thumb of the input.
         */
        "(input)": "0",
        "[style.--tui-slider-track-color]": "options.trackColor",
        "[style.--tui-ticks-gradient]": "ticksGradient()",
        "[style.--tui-slider-fill-ratio]": "valueRatio",
        "[attr.data-size]": "size"
      },
      styles: [':host{--t-tick-thickness: .25rem;position:relative;display:block;inline-size:100%;color:var(--tui-background-accent-1);cursor:pointer;-webkit-appearance:none;appearance:none;block-size:1rem;background-color:transparent;background-clip:content-box;outline:none;border-radius:var(--tui-radius-m);--tui-thickness: .125rem}:host:active{cursor:ew-resize}:host:disabled{opacity:var(--tui-disabled-opacity);cursor:auto}:host[data-size=s]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.25rem;left:var(--t-left);inset-inline-start:var(--t-left);inline-size:.5rem;block-size:.5rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));--t-left: calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .5rem);content:"";cursor:ew-resize;background:currentColor;opacity:0}:host[data-size=s]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}:host[data-size=m]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.125rem;left:var(--t-left);inset-inline-start:var(--t-left);inline-size:.75rem;block-size:.75rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));--t-left: calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .75rem);content:"";cursor:ew-resize;background:currentColor;opacity:0}:host[data-size=m]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}:host::-webkit-slider-container{border-radius:inherit}:host[data-size=m]::-webkit-slider-runnable-track{block-size:var(--tui-thickness);border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:var(--tui-ticks-gradient),linear-gradient(to var(--tui-inline-end),currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:calc((.75rem - var(--t-tick-thickness)) / 2),0;background-size:calc(100% - .75rem),auto}:host[data-size=s]::-webkit-slider-runnable-track{block-size:var(--tui-thickness);border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:var(--tui-ticks-gradient),linear-gradient(to var(--tui-inline-end),currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:calc((.5rem - var(--t-tick-thickness)) / 2),0;background-size:calc(100% - .5rem),auto}:host[data-size=m]::-moz-range-track{block-size:var(--tui-thickness);border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:var(--tui-ticks-gradient);background-position-x:calc((.75rem - var(--t-tick-thickness)) / 2);background-size:calc(100% - .75rem)}:host[data-size=s]::-moz-range-track{block-size:var(--tui-thickness);border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:var(--tui-ticks-gradient);background-position-x:calc((.5rem - var(--t-tick-thickness)) / 2);background-size:calc(100% - .5rem)}:host[data-size=m]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-block-start:calc(var(--tui-thickness) / 2 - (1rem / 2))}:not(:disabled):host[data-size=m]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled):host[data-size=m]::-webkit-slider-thumb:hover,:active:not(:disabled):host[data-size=m]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible:host[data-size=m]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host[data-size=s]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-block-start:calc(var(--tui-thickness) / 2 - (1rem / 2))}:not(:disabled):host[data-size=s]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled):host[data-size=s]::-webkit-slider-thumb:hover,:active:not(:disabled):host[data-size=s]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible:host[data-size=s]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host[data-size=m]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled):host[data-size=m]::-moz-range-thumb{cursor:ew-resize}:not(:disabled):host[data-size=m]::-moz-range-thumb:hover,:active:not(:disabled):host[data-size=m]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible:host[data-size=m]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host[data-size=s]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled):host[data-size=s]::-moz-range-thumb{cursor:ew-resize}:not(:disabled):host[data-size=s]::-moz-range-thumb:hover,:active:not(:disabled):host[data-size=s]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible:host[data-size=s]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host::-moz-range-progress{border-radius:inherit}:host::-moz-range-progress{block-size:var(--tui-thickness);background:currentColor;border-top-right-radius:0;border-bottom-right-radius:0}:host-context(tui-textfield) :host([type="range"]){top:100%;left:var(--t-padding);right:var(--t-padding);inline-size:calc(100% - var(--t-padding) * 2);block-size:1rem;margin:calc(-.5rem - var(--tui-thickness) / 2) 0 0;padding:0;pointer-events:auto}\n']
    }]
  }], function() {
    return [];
  }, {
    size: [{
      type: Input
    }],
    segmentsSetter: [{
      type: Input,
      args: [{
        alias: "segments",
        transform: (x) => Array.isArray(x) ? x : new Array(x).fill(null).map((_, i) => i / x)
      }]
    }]
  });
})();
var _TuiSliderKeyStepsBase = class _TuiSliderKeyStepsBase {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.step = 1;
    this.transformer = signal(null);
    this.value = toSignal(timer(0).pipe(switchMap(() => tuiControlValue(this.control))));
  }
  get slider() {
    return this.injector.get(TuiSliderComponent);
  }
  set keySteps(steps) {
    this.transformer.set(steps && tuiCreateKeyStepsTransformer(steps, this.slider));
    this.min = steps?.[0][1];
    this.max = steps?.[steps.length - 1]?.[1];
  }
  /**
   * TODO(v5): standardize logic between `TuiSlider` & `TuiInputSlider` & `Range` & `InputRange`
   * For non-linear slider (with `[keySteps]` property) `step` means percentage
   * Add these host-bindings to `TuiSliderKeyStepsBase`:
   * ```
   * host: {
   *     '[attr.min]': '0',
   *     '[attr.step]': '1',
   *     '[attr.max]': 'totalSteps',
   * },
   * ```
   */
  get totalSteps() {
    return this.step ? Math.round(100 / this.step) : Infinity;
  }
  takeStep(coefficient) {
    const newValue = this.slider.value + coefficient;
    return this.transformer()?.toControlValue(this.slider.value + coefficient) ?? newValue;
  }
};
_TuiSliderKeyStepsBase.\u0275fac = function TuiSliderKeyStepsBase_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiSliderKeyStepsBase)();
};
_TuiSliderKeyStepsBase.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiSliderKeyStepsBase,
  selectors: [["input", "tuiSlider", "", "keySteps", ""]],
  hostVars: 3,
  hostBindings: function TuiSliderKeyStepsBase_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.value());
    }
  },
  inputs: {
    step: [2, "step", "step", (x) => x === "any" ? null : x],
    keySteps: "keySteps"
  }
});
var TuiSliderKeyStepsBase = _TuiSliderKeyStepsBase;
__decorate([tuiPure], TuiSliderKeyStepsBase.prototype, "slider", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderKeyStepsBase, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "input[tuiSlider][keySteps]",
      host: {
        "[attr.aria-valuemin]": "min",
        "[attr.aria-valuemax]": "max",
        "[attr.aria-valuenow]": "value()"
      }
    }]
  }], null, {
    step: [{
      type: Input,
      args: [{
        transform: (x) => x === "any" ? null : x
      }]
    }],
    slider: [],
    keySteps: [{
      type: Input
    }]
  });
})();
var _TuiSliderKeySteps = class _TuiSliderKeySteps extends TuiControl {
  constructor() {
    super(...arguments);
    this.slider = inject(forwardRef(() => TuiSliderComponent));
  }
  set keySteps(steps) {
    this.transformer = tuiCreateKeyStepsTransformer(steps, this.slider);
  }
};
_TuiSliderKeySteps.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiSliderKeySteps_BaseFactory;
  return function TuiSliderKeySteps_Factory(__ngFactoryType__) {
    return (\u0275TuiSliderKeySteps_BaseFactory || (\u0275TuiSliderKeySteps_BaseFactory = \u0275\u0275getInheritedFactory(_TuiSliderKeySteps)))(__ngFactoryType__ || _TuiSliderKeySteps);
  };
})();
_TuiSliderKeySteps.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiSliderKeySteps,
  selectors: [["input", "tuiSlider", "", "keySteps", "", "ngModel", ""], ["input", "tuiSlider", "", "keySteps", "", "formControl", ""], ["input", "tuiSlider", "", "keySteps", "", "formControlName", ""]],
  hostVars: 2,
  hostBindings: function TuiSliderKeySteps_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("blur", function TuiSliderKeySteps_blur_HostBindingHandler() {
        return ctx.onTouched();
      })("input", function TuiSliderKeySteps_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("change", function TuiSliderKeySteps_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      });
    }
    if (rf & 2) {
      \u0275\u0275hostProperty("value", ctx.value())("disabled", ctx.disabled());
    }
  },
  inputs: {
    keySteps: "keySteps"
  },
  features: [\u0275\u0275ProvidersFeature([tuiFallbackValueProvider(0)]), \u0275\u0275InheritDefinitionFeature]
});
var TuiSliderKeySteps = _TuiSliderKeySteps;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderKeySteps, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "input[tuiSlider][keySteps][ngModel],input[tuiSlider][keySteps][formControl],input[tuiSlider][keySteps][formControlName]",
      providers: [tuiFallbackValueProvider(0)],
      host: {
        "[value]": "value()",
        "[disabled]": "disabled()",
        "(blur)": "onTouched()",
        "(input)": "onChange($event.target.value)",
        "(change)": "onChange($event.target.value)"
      }
    }]
  }], null, {
    keySteps: [{
      type: Input
    }]
  });
})();
var SLIDER_INTERACTION_KEYS = /* @__PURE__ */ new Set(["ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp"]);
var _TuiSliderReadonly = class _TuiSliderReadonly {
  constructor() {
    this.el = tuiInjectElement();
    this.doc = inject(DOCUMENT);
    this.readonly = true;
    const touchStart$ = tuiTypedFromEvent(this.el, "touchstart", {
      passive: false
    });
    const touchMove$ = tuiTypedFromEvent(this.doc, "touchmove", {
      passive: false
    });
    const touchEnd$ = tuiTypedFromEvent(this.doc, "touchend", {
      passive: true
    });
    const shouldPreventMove$ = merge(touchStart$.pipe(tap((e) => this.preventEvent(e)), map(TUI_TRUE_HANDLER)), touchEnd$.pipe(map(TUI_FALSE_HANDLER)));
    combineLatest([touchMove$, shouldPreventMove$]).pipe(filter(([_, shouldPreventMove]) => shouldPreventMove), takeUntilDestroyed()).subscribe(([moveEvent]) => this.preventEvent(moveEvent));
  }
  preventEvent(event) {
    if (event.cancelable && this.readonly) {
      event.preventDefault();
    }
  }
  preventKeyboardInteraction(event) {
    if (SLIDER_INTERACTION_KEYS.has(event.key)) {
      this.preventEvent(event);
    }
  }
};
_TuiSliderReadonly.\u0275fac = function TuiSliderReadonly_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiSliderReadonly)();
};
_TuiSliderReadonly.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiSliderReadonly,
  selectors: [["input", "tuiSlider", "", "readonly", ""]],
  hostBindings: function TuiSliderReadonly_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function TuiSliderReadonly_keydown_HostBindingHandler($event) {
        return ctx.preventKeyboardInteraction($event);
      })("mousedown", function TuiSliderReadonly_mousedown_HostBindingHandler($event) {
        return ctx.preventEvent($event);
      });
    }
  },
  inputs: {
    readonly: [2, "readonly", "readonly", coerceBooleanProperty]
  }
});
var TuiSliderReadonly = _TuiSliderReadonly;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderReadonly, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "input[tuiSlider][readonly]",
      host: {
        "(keydown)": "preventKeyboardInteraction($event)",
        "(mousedown)": "preventEvent($event)"
      }
    }]
  }], function() {
    return [];
  }, {
    readonly: [{
      type: Input,
      args: [{
        transform: coerceBooleanProperty
      }]
    }]
  });
})();
var _TuiSliderThumbLabel = class _TuiSliderThumbLabel {
  ngAfterContentInit() {
    ngDevMode && console.assert(Boolean(this.control?.valueChanges), '\n[tuiSliderThumbLabel] expected <input tuiSlider type="range" /> to use Angular Forms.\nUse [(ngModel)] or [formControl] or formControlName for correct work.');
  }
  get size() {
    return this.slider?.size || "m";
  }
  get ratio() {
    return this.slider?.valueRatio || 0;
  }
  get ghostStart() {
    return this.ratio * (this.slider?.el.offsetWidth || 0);
  }
};
_TuiSliderThumbLabel.\u0275fac = function TuiSliderThumbLabel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiSliderThumbLabel)();
};
_TuiSliderThumbLabel.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiSliderThumbLabel,
  selectors: [["", "tuiSliderThumbLabel", ""]],
  contentQueries: function TuiSliderThumbLabel_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, TuiSliderComponent, 5);
      \u0275\u0275contentQuery(dirIndex, NgControl, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.slider = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.control = _t.first);
    }
  },
  features: [\u0275\u0275ProvidersFeature([tuiHintOptionsProvider({
    direction: "top",
    appearance: "dark"
  })])],
  attrs: _c1,
  ngContentSelectors: _c3,
  decls: 5,
  vars: 10,
  consts: [[4, "ngIf"], [1, "t-ghost"]],
  template: function TuiSliderThumbLabel_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c2);
      \u0275\u0275template(0, TuiSliderThumbLabel_ng_container_0_Template, 1, 0, "ng-container", 0);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275projection(3);
      \u0275\u0275elementEnd();
      \u0275\u0275projection(4, 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 8, ctx.control == null ? null : ctx.control.valueChanges));
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("--tui-slider-thumb-ratio", ctx.ratio)("inset-inline-start", ctx.ghostStart, "px")("left", ctx.ghostStart, "px");
      \u0275\u0275attribute("data-size", ctx.size);
    }
  },
  dependencies: [AsyncPipe, NgIf],
  styles: ['[_nghost-%COMP%]{position:relative}.t-ghost[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;margin:auto;border-radius:50%;pointer-events:none}.t-ghost[data-size=s][_ngcontent-%COMP%]{inline-size:.5rem;block-size:.5rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.5rem * var(--tui-inline)))}.t-ghost[data-size=m][_ngcontent-%COMP%]{inline-size:.75rem;block-size:.75rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.75rem * var(--tui-inline)))}@supports (inset-inline-end: 0){[dir="rtl"][_nghost-%COMP%]   .t-ghost[_ngcontent-%COMP%], [dir="rtl"]   [_nghost-%COMP%]   .t-ghost[_ngcontent-%COMP%]{left:unset!important}}'],
  changeDetection: 0
});
var TuiSliderThumbLabel = _TuiSliderThumbLabel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderThumbLabel, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "[tuiSliderThumbLabel]",
      imports: [AsyncPipe, NgIf],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiHintOptionsProvider({
        direction: "top",
        appearance: "dark"
      })],
      template: '<ng-container *ngIf="control?.valueChanges | async" />\n\n<div\n    class="t-ghost"\n    [attr.data-size]="size"\n    [style.--tui-slider-thumb-ratio]="ratio"\n    [style.inset-inline-start.px]="ghostStart"\n    [style.left.px]="ghostStart"\n>\n    <ng-content />\n</div>\n\n<ng-content select="input[type=range]" />\n',
      styles: [':host{position:relative}.t-ghost{position:absolute;top:0;bottom:0;margin:auto;border-radius:50%;pointer-events:none}.t-ghost[data-size=s]{inline-size:.5rem;block-size:.5rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.5rem * var(--tui-inline)))}.t-ghost[data-size=m]{inline-size:.75rem;block-size:.75rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.75rem * var(--tui-inline)))}@supports (inset-inline-end: 0){:host-context([dir="rtl"]) .t-ghost{left:unset!important}}\n']
    }]
  }], null, {
    slider: [{
      type: ContentChild,
      args: [TuiSliderComponent]
    }],
    control: [{
      type: ContentChild,
      args: [NgControl]
    }]
  });
})();
var TuiSlider = [TuiSliderComponent, TuiSliderThumbLabel, TuiSliderKeyStepsBase, TuiSliderKeySteps, TuiSliderReadonly];

export {
  TUI_FLOATING_PRECISION,
  TuiSliderComponent,
  TuiSliderThumbLabel,
  TuiSlider
};
//# sourceMappingURL=chunk-2P7H5VCK.js.map
