import {
  tuiInjectElement,
  tuiPx
} from "./chunk-6HH4HFWJ.js";
import {
  Directive,
  ElementRef,
  inject,
  input,
  output,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵdefineDirective,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵresolveDocument,
  ɵɵstyleProp
} from "./chunk-NS3244ZP.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-element.mjs
var _TuiElement = class _TuiElement {
  constructor() {
    this.nativeElement = tuiInjectElement();
    return new ElementRef(this.nativeElement);
  }
};
_TuiElement.\u0275fac = function TuiElement_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiElement)();
};
_TuiElement.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiElement,
  selectors: [["", "tuiElement", ""]],
  exportAs: ["elementRef"]
});
var TuiElement = _TuiElement;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiElement, [{
    type: Directive,
    args: [{
      selector: "[tuiElement]",
      exportAs: "elementRef"
    }]
  }], () => [], null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-resizer.mjs
var _TuiResizable = class _TuiResizable extends TuiElement {
};
_TuiResizable.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiResizable_BaseFactory;
  return function TuiResizable_Factory(__ngFactoryType__) {
    return (\u0275TuiResizable_BaseFactory || (\u0275TuiResizable_BaseFactory = \u0275\u0275getInheritedFactory(_TuiResizable)))(__ngFactoryType__ || _TuiResizable);
  };
})();
_TuiResizable.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiResizable,
  selectors: [["", "tuiResizable", ""]],
  features: [\u0275\u0275InheritDefinitionFeature]
});
var TuiResizable = _TuiResizable;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiResizable, [{
    type: Directive,
    args: [{
      selector: "[tuiResizable]"
    }]
  }], null, null);
})();
var _TuiResizer = class _TuiResizer {
  constructor() {
    this.resizable = inject(TuiResizable);
    this.x = Number.NaN;
    this.y = Number.NaN;
    this.width = 0;
    this.height = 0;
    this.tuiResizer = input([0, 0]);
    this.tuiSizeChange = output();
  }
  get cursor() {
    const tuiResizer = this.tuiResizer();
    if (!tuiResizer[0]) {
      return "ns-resize";
    }
    if (!tuiResizer[1]) {
      return "ew-resize";
    }
    return tuiResizer[0] * tuiResizer[1] > 0 ? "nwse-resize" : "nesw-resize";
  }
  onPointerDown(x, y) {
    this.x = x;
    this.y = y;
    this.width = this.resizable.nativeElement.clientWidth;
    this.height = this.resizable.nativeElement.clientHeight;
  }
  onPointerMove({
    x,
    y,
    buttons
  }) {
    if (buttons) {
      this.onMove(x, y);
    } else {
      this.onPointerUp();
    }
  }
  onPointerUp() {
    this.x = Number.NaN;
  }
  onMove(x, y) {
    const tuiResizer = this.tuiResizer();
    if (Number.isNaN(this.x)) {
      return;
    }
    const {
      style
    } = this.resizable.nativeElement;
    const size = [this.width + tuiResizer[0] * (x - this.x), this.height + tuiResizer[1] * (y - this.y)];
    if (tuiResizer[0]) {
      style.width = tuiPx(size[0]);
    }
    if (tuiResizer[1]) {
      style.height = tuiPx(size[1]);
    }
    this.tuiSizeChange.emit(size);
  }
};
_TuiResizer.\u0275fac = function TuiResizer_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiResizer)();
};
_TuiResizer.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiResizer,
  selectors: [["", "tuiResizer", ""]],
  hostVars: 4,
  hostBindings: function TuiResizer_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("pointermove.zoneless", function TuiResizer_pointermove_zoneless_HostBindingHandler($event) {
        return ctx.onPointerMove($event);
      }, false, \u0275\u0275resolveDocument)("pointerup.zoneless", function TuiResizer_pointerup_zoneless_HostBindingHandler() {
        return ctx.onPointerUp();
      }, false, \u0275\u0275resolveDocument)("pointerdown.zoneless.prevent", function TuiResizer_pointerdown_zoneless_prevent_HostBindingHandler($event) {
        return ctx.onPointerDown($event.x, $event.y);
      });
    }
    if (rf & 2) {
      \u0275\u0275styleProp("cursor", ctx.cursor)("touch-action", "none");
    }
  },
  inputs: {
    tuiResizer: [1, "tuiResizer"]
  },
  outputs: {
    tuiSizeChange: "tuiSizeChange"
  }
});
var TuiResizer = _TuiResizer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiResizer, [{
    type: Directive,
    args: [{
      selector: "[tuiResizer]",
      host: {
        "[style.cursor]": "cursor",
        "[style.touchAction]": '"none"',
        "(document:pointermove.zoneless)": "onPointerMove($event)",
        "(document:pointerup.zoneless)": "onPointerUp()",
        "(pointerdown.zoneless.prevent)": "onPointerDown($event.x, $event.y)"
      }
    }]
  }], null, null);
})();

export {
  TuiResizable,
  TuiResizer
};
//# sourceMappingURL=chunk-UOQYRYT2.js.map
