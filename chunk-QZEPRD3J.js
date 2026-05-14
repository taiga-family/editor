import {
  TUI_VERSION
} from "./chunk-D23KIQ33.js";
import {
  tuiWithStyles
} from "./chunk-MRTTS2CM.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ViewEncapsulation,
  input,
  setClassMetadata,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective
} from "./chunk-NS3244ZP.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-title.mjs
var _Styles = class _Styles {
};
_Styles.\u0275fac = function Styles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Styles)();
};
_Styles.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _Styles,
  selectors: [["ng-component"]],
  exportAs: ["tui-title-5.6.0"],
  decls: 0,
  vars: 0,
  template: function Styles_Template(rf, ctx) {
  },
  styles: ['[tuiTitle]:where(*[data-tui-version="5.6.0"]){position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-typography-ui-m)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=s]{gap:.125rem;font:var(--tui-typography-body-s)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-body-xs)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=m]{gap:.125rem;font:var(--tui-typography-heading-h5)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=l]{gap:.5rem;font:var(--tui-typography-heading-h3)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=l] [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiTitle]:where(*[data-tui-version="5.6.0"]) h1,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h2,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h3,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h4,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h5,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h6{margin:0;font:inherit}[tuiTitle]:where(*[data-tui-version="5.6.0"]) [tuiSubtitle]{font:var(--tui-typography-ui-s);margin:0}[tuiButton]:where(*[data-tui-version="5.6.0"]) [tuiTitle]{margin-inline-end:auto}[tuiButton]:where(*[data-tui-version="5.6.0"]) [tuiTitle] [tuiSubtitle]{color:var(--tui-text-secondary)}\n'],
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
      exportAs: `tui-title-${TUI_VERSION}`,
      styles: ['[tuiTitle]:where(*[data-tui-version="5.6.0"]){position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-typography-ui-m)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=s]{gap:.125rem;font:var(--tui-typography-body-s)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-body-xs)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=m]{gap:.125rem;font:var(--tui-typography-heading-h5)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=l]{gap:.5rem;font:var(--tui-typography-heading-h3)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=l] [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiTitle]:where(*[data-tui-version="5.6.0"]) h1,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h2,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h3,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h4,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h5,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h6{margin:0;font:inherit}[tuiTitle]:where(*[data-tui-version="5.6.0"]) [tuiSubtitle]{font:var(--tui-typography-ui-s);margin:0}[tuiButton]:where(*[data-tui-version="5.6.0"]) [tuiTitle]{margin-inline-end:auto}[tuiButton]:where(*[data-tui-version="5.6.0"]) [tuiTitle] [tuiSubtitle]{color:var(--tui-text-secondary)}\n']
    }]
  }], null, null);
})();
var _TuiTitle = class _TuiTitle {
  constructor() {
    this.nothing = tuiWithStyles(Styles);
    this.tuiTitle = input("");
  }
};
_TuiTitle.\u0275fac = function TuiTitle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTitle)();
};
_TuiTitle.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiTitle,
  selectors: [["", "tuiTitle", ""]],
  hostAttrs: ["data-tui-version", "5.6.0", "tuiTitle", ""],
  hostVars: 1,
  hostBindings: function TuiTitle_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.tuiTitle() || null);
    }
  },
  inputs: {
    tuiTitle: [1, "tuiTitle"]
  }
});
var TuiTitle = _TuiTitle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTitle, [{
    type: Directive,
    args: [{
      selector: "[tuiTitle]",
      host: {
        "data-tui-version": TUI_VERSION,
        tuiTitle: "",
        "[attr.data-size]": "tuiTitle() || null"
      }
    }]
  }], null, null);
})();

export {
  TuiTitle
};
//# sourceMappingURL=chunk-QZEPRD3J.js.map
