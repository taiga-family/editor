import {
  PolymorpheusTemplate,
  TuiPopoverService
} from "./chunk-QA7BIT47.js";
import {
  tuiIfMap
} from "./chunk-Z64UTBP3.js";
import {
  Directive,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵgetInheritedFactory
} from "./chunk-MN3TG6GQ.js";
import {
  Subject,
  distinctUntilChanged,
  endWith,
  ignoreElements,
  share
} from "./chunk-CJ7OSSQR.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-popover.mjs
var _TuiPopoverDirective = class _TuiPopoverDirective extends PolymorpheusTemplate {
  constructor() {
    super(...arguments);
    this.service = inject(TuiPopoverService);
    this.open$ = new Subject();
    this.options = {};
    this.open = false;
    this.openChange = this.open$.pipe(distinctUntilChanged(), tuiIfMap(() => this.service.open(this, this.options).pipe(ignoreElements(), endWith(false))), share());
  }
  ngOnChanges() {
    this.open$.next(this.open);
  }
};
_TuiPopoverDirective.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiPopoverDirective_BaseFactory;
  return function TuiPopoverDirective_Factory(__ngFactoryType__) {
    return (\u0275TuiPopoverDirective_BaseFactory || (\u0275TuiPopoverDirective_BaseFactory = \u0275\u0275getInheritedFactory(_TuiPopoverDirective)))(__ngFactoryType__ || _TuiPopoverDirective);
  };
})();
_TuiPopoverDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiPopoverDirective,
  standalone: false,
  features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var TuiPopoverDirective = _TuiPopoverDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopoverDirective, [{
    type: Directive
  }], null, null);
})();

export {
  TuiPopoverDirective
};
//# sourceMappingURL=chunk-BBPZELMZ.js.map
