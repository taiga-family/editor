import {
  tuiAvatarOptionsProvider
} from "./chunk-7Q3SE4QU.js";
import {
  TuiChevron,
  TuiGroup,
  TuiItem,
  tuiGroupOptionsProvider
} from "./chunk-EQTN4WLW.js";
import {
  TuiButton,
  tuiButtonOptionsProvider
} from "./chunk-QA7BIT47.js";
import {
  EMPTY_QUERY,
  NgIf,
  NgTemplateOutlet,
  takeUntilDestroyed,
  tuiDirectiveBinding,
  tuiInjectElement
} from "./chunk-P325F6NW.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  Directive,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate
} from "./chunk-MN3TG6GQ.js";
import {
  ReplaySubject,
  combineLatest,
  map,
  merge,
  withLatestFrom
} from "./chunk-CJ7OSSQR.js";

// node_modules/@taiga-ui/experimental/fesm2022/taiga-ui-experimental-components-expand.mjs
var _c0 = ["*"];
function TuiExpand_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.content || null);
  }
}
var _TuiExpand = class _TuiExpand {
  constructor() {
    this.el = tuiInjectElement();
    this.cdr = inject(ChangeDetectorRef);
    this.signal = signal(false);
    this.animating = signal(false);
  }
  set expanded(expanded) {
    if (expanded === this.signal()) {
      return;
    }
    this.signal.set(expanded);
    this.cdr.detectChanges();
    this.el.classList.toggle("_expanded", expanded);
  }
  onTransitionEnd({
    propertyName
  }) {
    if (propertyName === "grid-template-rows") {
      this.animating.set(this.signal());
    }
  }
};
_TuiExpand.\u0275fac = function TuiExpand_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiExpand)();
};
_TuiExpand.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiExpand,
  selectors: [["tui-expand"]],
  contentQueries: function TuiExpand_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, TuiItem, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function TuiExpand_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("transitionend.self", function TuiExpand_transitionend_self_HostBindingHandler($event) {
        return ctx.onTransitionEnd($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275classProp("_expanded", ctx.signal());
    }
  },
  inputs: {
    expanded: "expanded"
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 1,
  consts: [[1, "t-wrapper"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"]],
  template: function TuiExpand_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, TuiExpand_ng_container_1_Template, 1, 1, "ng-container", 1);
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.signal() || ctx.animating());
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  styles: ["[_nghost-%COMP%]{transition-property:grid-template-rows,padding;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:grid;grid-template-rows:0fr;transition-delay:1ms}[_nghost-%COMP%]:not(._expanded){padding-block:0}._expanded[_nghost-%COMP%]{grid-template-rows:1fr}._expanded[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{opacity:1;visibility:visible}.t-wrapper[_ngcontent-%COMP%]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;grid-row:1 / span 2;overflow:hidden;opacity:0;visibility:hidden}"],
  changeDetection: 0
});
var TuiExpand = _TuiExpand;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiExpand, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-expand",
      imports: [NgIf, NgTemplateOutlet],
      template: `
        <div class="t-wrapper">
            <ng-container
                *ngIf="signal() || animating()"
                [ngTemplateOutlet]="content || null"
            />
            <ng-content />
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._expanded]": "signal()",
        "(transitionend.self)": "onTransitionEnd($event)"
      },
      styles: [":host{transition-property:grid-template-rows,padding;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:grid;grid-template-rows:0fr;transition-delay:1ms}:host:not(._expanded){padding-block:0}:host._expanded{grid-template-rows:1fr}:host._expanded .t-wrapper{opacity:1;visibility:visible}.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;grid-row:1 / span 2;overflow:hidden;opacity:0;visibility:hidden}\n"]
    }]
  }], null, {
    content: [{
      type: ContentChild,
      args: [TuiItem, {
        read: TemplateRef
      }]
    }],
    expanded: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/experimental/fesm2022/taiga-ui-experimental-components-accordion.mjs
var _c02 = ["*"];
var _TuiAccordionDirective = class _TuiAccordionDirective {
  constructor() {
    this.accordion = inject(TuiAccordionComponent);
    this.size = tuiDirectiveBinding(TuiButton, "size", this.accordion.size);
    this.tuiAccordion = "";
    this.tuiAccordionChange = new EventEmitter();
    this.open = tuiDirectiveBinding(TuiChevron, "tuiChevron", signal(false));
  }
  ngOnChanges() {
    this.open.set(!!this.tuiAccordion);
    this.accordion.toggle(this);
  }
  toggle() {
    this.open.set(!this.open());
    this.tuiAccordion = this.open();
    this.tuiAccordionChange.emit(this.open());
    this.accordion.toggle(this);
  }
};
_TuiAccordionDirective.\u0275fac = function TuiAccordionDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAccordionDirective)();
};
_TuiAccordionDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiAccordionDirective,
  selectors: [["button", "tuiAccordion", ""]],
  hostAttrs: ["tuiButton", "", "tuiAccordion", "", "type", "button"],
  hostVars: 2,
  hostBindings: function TuiAccordionDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function TuiAccordionDirective_click_HostBindingHandler() {
        return ctx.toggle();
      });
    }
    if (rf & 2) {
      \u0275\u0275classProp("_open", ctx.open());
    }
  },
  inputs: {
    tuiAccordion: "tuiAccordion"
  },
  outputs: {
    tuiAccordionChange: "tuiAccordionChange"
  },
  features: [\u0275\u0275ProvidersFeature([tuiAvatarOptionsProvider({
    size: "s"
  }), tuiButtonOptionsProvider({
    appearance: "outline-grayscale"
  })]), \u0275\u0275HostDirectivesFeature([TuiButton, TuiChevron]), \u0275\u0275NgOnChangesFeature]
});
var TuiAccordionDirective = _TuiAccordionDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAccordionDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "button[tuiAccordion]",
      providers: [tuiAvatarOptionsProvider({
        size: "s"
      }), tuiButtonOptionsProvider({
        appearance: "outline-grayscale"
      })],
      hostDirectives: [TuiButton, TuiChevron],
      host: {
        tuiButton: "",
        tuiAccordion: "",
        type: "button",
        "[class._open]": "open()",
        "(click)": "toggle()"
      }
    }]
  }], null, {
    tuiAccordion: [{
      type: Input
    }],
    tuiAccordionChange: [{
      type: Output
    }]
  });
})();
var _TuiAccordionComponent = class _TuiAccordionComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.toggle$ = new ReplaySubject(Infinity);
    this.expands = EMPTY_QUERY;
    this.directives = EMPTY_QUERY;
    this.closeOthers = true;
    this.size = signal("l");
  }
  set sizeSetter(size) {
    this.size.set(size);
  }
  ngAfterViewInit() {
    merge(combineLatest([this.directives.changes, this.expands.changes]).pipe(withLatestFrom(this.toggle$), map(([, accordion]) => accordion)), this.toggle$).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((accordion) => this.expand(accordion));
  }
  toggle(directive) {
    this.toggle$.next(directive);
  }
  expand(accordion) {
    if (this.closeOthers && accordion.open()) {
      this.expands.forEach((expand2) => {
        expand2.expanded = false;
      });
      this.directives.forEach((dir) => {
        if (dir === accordion) {
          return;
        }
        dir.open.set(false);
        dir.tuiAccordion = false;
        dir.tuiAccordionChange.emit(false);
      });
    }
    const expand = this.expands.get(this.directives.toArray().indexOf(accordion));
    if (expand) {
      expand.expanded = accordion.open();
    }
  }
};
_TuiAccordionComponent.\u0275fac = function TuiAccordionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAccordionComponent)();
};
_TuiAccordionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiAccordionComponent,
  selectors: [["tui-accordion"]],
  contentQueries: function TuiAccordionComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, TuiExpand, 4);
      \u0275\u0275contentQuery(dirIndex, TuiAccordionDirective, 4);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.expands = _t);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.directives = _t);
    }
  },
  hostVars: 1,
  hostBindings: function TuiAccordionComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.size());
    }
  },
  inputs: {
    closeOthers: "closeOthers",
    sizeSetter: [0, "size", "sizeSetter"]
  },
  features: [\u0275\u0275ProvidersFeature([tuiGroupOptionsProvider({
    orientation: "vertical",
    collapsed: true
  })]), \u0275\u0275HostDirectivesFeature([TuiGroup])],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function TuiAccordionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  styles: ["tui-accordion{inline-size:100%;border-radius:var(--t-group-radius);font:var(--tui-font-text-m);overflow:hidden}tui-accordion>[tuiAccordion]{text-align:start;justify-content:flex-start}tui-accordion>[tuiAccordion]:last-of-type:not(._open){-webkit-mask-image:var(--t-group-mask-end);mask-image:var(--t-group-mask-end);border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}tui-accordion>[tuiAccordion]:first-child{border-top-left-radius:inherit!important;border-top-right-radius:inherit!important}tui-accordion>[tuiAccordion]:first-child:last-of-type:not(._open){-webkit-mask:none;mask:none}tui-accordion>[tuiAccordion]:after{margin-inline-start:auto!important}tui-accordion>[tuiAccordion]._open+tui-expand{visibility:visible}tui-accordion>[tuiAccordion]>tui-avatar,tui-accordion>[tuiAccordion]>[tuiAvatar]{margin:0}tui-accordion>tui-expand{visibility:hidden;min-block-size:1px!important;padding:1.25rem;transition-property:grid-template-rows,padding,visibility!important;box-shadow:inset 0 0 0 1px var(--tui-border-normal)}tui-accordion>tui-expand:last-child{border-bottom-left-radius:inherit!important;border-bottom-right-radius:inherit!important}tui-accordion[data-size=m]{font:var(--tui-font-text-s)}tui-accordion[data-size=m]>tui-expand{padding:1rem}tui-accordion[data-size=s]{font:var(--tui-font-text-s)}tui-accordion[data-size=s]>tui-expand{padding:.625rem}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiAccordionComponent = _TuiAccordionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAccordionComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-accordion",
      template: "<ng-content />",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiGroupOptionsProvider({
        orientation: "vertical",
        collapsed: true
      })],
      hostDirectives: [TuiGroup],
      host: {
        "[attr.data-size]": "size()"
      },
      styles: ["tui-accordion{inline-size:100%;border-radius:var(--t-group-radius);font:var(--tui-font-text-m);overflow:hidden}tui-accordion>[tuiAccordion]{text-align:start;justify-content:flex-start}tui-accordion>[tuiAccordion]:last-of-type:not(._open){-webkit-mask-image:var(--t-group-mask-end);mask-image:var(--t-group-mask-end);border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}tui-accordion>[tuiAccordion]:first-child{border-top-left-radius:inherit!important;border-top-right-radius:inherit!important}tui-accordion>[tuiAccordion]:first-child:last-of-type:not(._open){-webkit-mask:none;mask:none}tui-accordion>[tuiAccordion]:after{margin-inline-start:auto!important}tui-accordion>[tuiAccordion]._open+tui-expand{visibility:visible}tui-accordion>[tuiAccordion]>tui-avatar,tui-accordion>[tuiAccordion]>[tuiAvatar]{margin:0}tui-accordion>tui-expand{visibility:hidden;min-block-size:1px!important;padding:1.25rem;transition-property:grid-template-rows,padding,visibility!important;box-shadow:inset 0 0 0 1px var(--tui-border-normal)}tui-accordion>tui-expand:last-child{border-bottom-left-radius:inherit!important;border-bottom-right-radius:inherit!important}tui-accordion[data-size=m]{font:var(--tui-font-text-s)}tui-accordion[data-size=m]>tui-expand{padding:1rem}tui-accordion[data-size=s]{font:var(--tui-font-text-s)}tui-accordion[data-size=s]>tui-expand{padding:.625rem}\n"]
    }]
  }], null, {
    expands: [{
      type: ContentChildren,
      args: [TuiExpand]
    }],
    directives: [{
      type: ContentChildren,
      args: [TuiAccordionDirective]
    }],
    closeOthers: [{
      type: Input
    }],
    sizeSetter: [{
      type: Input,
      args: ["size"]
    }]
  });
})();
var TuiAccordion = [TuiAccordionComponent, TuiAccordionDirective, TuiExpand, TuiItem];

export {
  TuiExpand,
  TuiAccordionDirective,
  TuiAccordionComponent,
  TuiAccordion
};
//# sourceMappingURL=chunk-TMAIJMJG.js.map
