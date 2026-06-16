import {
  TuiAnimated
} from "./chunk-BILNAO2Z.js";
import {
  tuiCreateOptions
} from "./chunk-CGIMAQGG.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-G7TA3DS4.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-badge-notification.mjs
var _c0 = ["*"];
var TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS = {
  size: "m"
};
var [TUI_BADGE_NOTIFICATION_OPTIONS, tuiBadgeNotificationOptionsProvider] = tuiCreateOptions(TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS);
var _TuiBadgeNotification = class _TuiBadgeNotification {
  constructor() {
    this.size = input(inject(TUI_BADGE_NOTIFICATION_OPTIONS).size);
  }
};
_TuiBadgeNotification.\u0275fac = function TuiBadgeNotification_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiBadgeNotification)();
};
_TuiBadgeNotification.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiBadgeNotification,
  selectors: [["tui-badge-notification"]],
  hostVars: 1,
  hostBindings: function TuiBadgeNotification_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.size());
    }
  },
  inputs: {
    size: [1, "size"]
  },
  features: [\u0275\u0275HostDirectivesFeature([TuiAnimated])],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function TuiBadgeNotification_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{--t-size: 1.5rem;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;color:#fff;border-radius:2rem;white-space:nowrap;overflow:hidden;vertical-align:middle;font:var(--tui-typography-ui-s);max-inline-size:100%;padding:.0625rem .3125rem;background:var(--tui-status-negative);block-size:var(--t-size);min-block-size:var(--tui-lh);min-inline-size:max(var(--t-size),var(--tui-lh))}.tui-enter[_nghost-%COMP%]{animation:tuiScale var(--tui-duration) cubic-bezier(.34,1.56,.64,1)}.tui-leave[_nghost-%COMP%]{animation:tuiScale var(--tui-duration) ease-in-out reverse}[data-size=m][_nghost-%COMP%]{--t-size: 1.25rem;padding:.0625rem .25rem}[data-size=s][_nghost-%COMP%]{--t-size: 1rem;padding:0 .125rem;font:var(--tui-typography-ui-xs)}[data-size=xs][_nghost-%COMP%]{--t-size: .375rem;padding:0;font-size:0}[_nghost-%COMP%]   [tuiIconButton][_nghost-%COMP%], [tuiIconButton]   [_nghost-%COMP%]{position:absolute;inset-inline-end:25%;inset-block-start:25%}"],
  changeDetection: 0
});
var TuiBadgeNotification = _TuiBadgeNotification;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadgeNotification, [{
    type: Component,
    args: [{
      selector: "tui-badge-notification",
      template: "<ng-content />",
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [TuiAnimated],
      host: {
        "[attr.data-size]": "size()"
      },
      styles: [":host{--t-size: 1.5rem;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;color:#fff;border-radius:2rem;white-space:nowrap;overflow:hidden;vertical-align:middle;font:var(--tui-typography-ui-s);max-inline-size:100%;padding:.0625rem .3125rem;background:var(--tui-status-negative);block-size:var(--t-size);min-block-size:var(--tui-lh);min-inline-size:max(var(--t-size),var(--tui-lh))}:host.tui-enter{animation:tuiScale var(--tui-duration) cubic-bezier(.34,1.56,.64,1)}:host.tui-leave{animation:tuiScale var(--tui-duration) ease-in-out reverse}:host[data-size=m]{--t-size: 1.25rem;padding:.0625rem .25rem}:host[data-size=s]{--t-size: 1rem;padding:0 .125rem;font:var(--tui-typography-ui-xs)}:host[data-size=xs]{--t-size: .375rem;padding:0;font-size:0}:host :host-context([tuiIconButton]){position:absolute;inset-inline-end:25%;inset-block-start:25%}\n"]
    }]
  }], null, null);
})();

export {
  tuiBadgeNotificationOptionsProvider
};
//# sourceMappingURL=chunk-D5HJUDO5.js.map
