import {
  TUI_TEXTFIELD_OPTIONS,
  TuiLabel,
  TuiTextfieldComponent,
  TuiTextfieldOptionsDirective,
  TuiWithInput
} from "./chunk-TPR7EYDZ.js";
import {
  PolymorpheusComponent,
  PolymorpheusOutlet,
  TUI_SCROLL_REF,
  TUI_TEXTFIELD_VALUE,
  TuiDropdownContent,
  TuiScrollControls,
  WA_IS_MOBILE,
  injectContext
} from "./chunk-WEV3GG6Y.js";
import {
  tuiCreateOptions,
  tuiProvide
} from "./chunk-EMEGSUC4.js";
import {
  NG_VALIDATORS,
  Validators,
  tuiInjectElement
} from "./chunk-5BSJ6YPL.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  inject,
  input,
  setClassMetadata,
  signal,
  viewChild,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-KFKFA6WT.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-textarea.mjs
var _c0 = ["text"];
var _c1 = ["tuiTextarea", ""];
var _c2 = (a0) => ({
  $implicit: a0
});
function TuiTextareaComponent_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tui-scroll-controls", 4);
    \u0275\u0275listener("click.prevent", function TuiTextareaComponent_ng_template_0_Conditional_0_Template_tui_scroll_controls_click_prevent_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(0);
    });
    \u0275\u0275elementEnd();
  }
}
function TuiTextareaComponent_ng_template_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(text_r2);
  }
}
function TuiTextareaComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TuiTextareaComponent_ng_template_0_Conditional_0_Template, 1, 0, "tui-scroll-controls", 1);
    \u0275\u0275elementStart(1, "span", 2, 0);
    \u0275\u0275template(3, TuiTextareaComponent_ng_template_0_ng_container_3_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r2.isMobile ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("max-height", 1.25 * ctx_r2.max(), "em")("min-height", 1.25 * ctx_r2.min(), "em");
    \u0275\u0275advance(2);
    \u0275\u0275property("polymorpheusOutlet", ctx_r2.content())("polymorpheusOutletContext", \u0275\u0275pureFunction1(7, _c2, ctx_r2.el.value));
  }
}
function TuiTextareaCounter_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", ctx_r0.length(), " / ", ctx_r0.limit(), " ");
  }
}
function TuiTextareaLimit_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("textContent", ctx_r0.context.$implicit.slice(ctx_r0.limit()));
  }
}
var [TUI_TEXTAREA_OPTIONS, tuiTextareaOptionsProvider] = tuiCreateOptions({
  min: 1,
  max: 3,
  content: ({
    $implicit
  }) => $implicit
});
var _TuiTextareaComponent = class _TuiTextareaComponent {
  constructor() {
    this.template = viewChild.required(TemplateRef);
    this.options = inject(TUI_TEXTAREA_OPTIONS);
    this.vcr = inject(ViewContainerRef);
    this.text = viewChild("text", {
      read: ElementRef
    });
    this.el = tuiInjectElement();
    this.textfield = inject(TuiTextfieldComponent);
    this.isMobile = inject(WA_IS_MOBILE);
    this.min = input(this.options.min);
    this.max = input(this.options.max);
    this.content = input(this.options.content);
  }
  ngAfterViewInit() {
    this.vcr.createEmbeddedView(this.template());
  }
  onScroll() {
    requestAnimationFrame(() => {
      this.text()?.nativeElement.scrollTo({
        top: this.el.scrollTop
      });
    });
  }
};
_TuiTextareaComponent.\u0275fac = function TuiTextareaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTextareaComponent)();
};
_TuiTextareaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiTextareaComponent,
  selectors: [["textarea", "tuiTextarea", ""]],
  viewQuery: function TuiTextareaComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.template, TemplateRef, 5);
      \u0275\u0275viewQuerySignal(ctx.text, _c0, 5, ElementRef);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  },
  hostAttrs: ["ngSkipHydration", "true"],
  hostVars: 2,
  hostBindings: function TuiTextareaComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll.once", function TuiTextareaComponent_scroll_once_HostBindingHandler() {
        return ctx.onScroll();
      })("scroll.zoneless", function TuiTextareaComponent_scroll_zoneless_HostBindingHandler() {
        return ctx.onScroll();
      });
    }
    if (rf & 2) {
      \u0275\u0275classProp("_mobile", ctx.isMobile);
    }
  },
  inputs: {
    min: [1, "min"],
    max: [1, "max"],
    content: [1, "content"]
  },
  features: [\u0275\u0275ProvidersFeature([tuiProvide(TUI_SCROLL_REF, ElementRef)]), \u0275\u0275HostDirectivesFeature([TuiWithInput])],
  attrs: _c1,
  decls: 1,
  vars: 0,
  consts: [["text", ""], [1, "t-scroll"], ["aria-hidden", "true", 1, "t-ghost"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-scroll", 3, "click.prevent"]],
  template: function TuiTextareaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TuiTextareaComponent_ng_template_0_Template, 4, 9, "ng-template");
    }
  },
  dependencies: [PolymorpheusOutlet, TuiScrollControls],
  styles: ['tui-textfield._with-label[data-size="m"]._with-label[data-size="m"][_nghost-%COMP%], tui-textfield._with-label[data-size="m"]._with-label[data-size="m"]   [_nghost-%COMP%]{border-block-start-width:calc(.5rem + var(--t-height) / 3);padding-block:0}tui-textfield._with-label[data-size="l"]._with-label[data-size="l"][_nghost-%COMP%], tui-textfield._with-label[data-size="l"]._with-label[data-size="l"]   [_nghost-%COMP%]{border-block-start-width:calc(.625rem + var(--t-height) / 3);padding-block:0}tui-textfield[data-size="s"][_nghost-%COMP%], tui-textfield[data-size="s"]   [_nghost-%COMP%]{padding-block:.5rem .25rem}tui-textfield[data-size="m"][_nghost-%COMP%], tui-textfield[data-size="m"]   [_nghost-%COMP%]{padding-block:.875rem .25rem}tui-textfield[data-size="l"][_nghost-%COMP%], tui-textfield[data-size="l"]   [_nghost-%COMP%]{padding-block:1.125rem .375rem}tui-textfield:has(.t-ghost > * > span)[_nghost-%COMP%], tui-textfield:has(.t-ghost > * > span)   [_nghost-%COMP%]{overscroll-behavior:none}[_nghost-%COMP%][_nghost-%COMP%]{block-size:100%;white-space:pre-wrap;overflow:auto;word-break:break-word;border:0 solid transparent}[_nghost-%COMP%][_nghost-%COMP%]:not(._mobile){scrollbar-width:none;-ms-overflow-style:none}[_nghost-%COMP%][_nghost-%COMP%]:not(._mobile)::-webkit-scrollbar, [_nghost-%COMP%][_nghost-%COMP%]:not(._mobile)::-webkit-scrollbar-thumb{display:none}.t-scroll[_ngcontent-%COMP%]{position:absolute;inset:.25rem 0;min-block-size:0}  tui-textfield._with-label[data-size=m] .t-scroll{inset-block-start:calc(.5rem + var(--t-height) / 3)}  tui-textfield._with-label[data-size=l] .t-scroll{inset-block-start:calc(.625rem + var(--t-height) / 3)}.t-ghost[_ngcontent-%COMP%]{position:relative;z-index:1;order:1;inline-size:calc(100% - var(--t-start) - var(--t-end) - var(--t-side));white-space:pre-wrap;word-break:break-word;overflow-wrap:break-word;padding-inline-start:var(--t-start);padding-inline-end:calc(var(--t-end) + var(--t-side) + var(--t-space));pointer-events:none;box-sizing:content-box;overflow:hidden;color:transparent}.t-ghost[_ngcontent-%COMP%]:after{content:" "}  tui-textfield._with-label[data-size=m] textarea~.t-ghost{margin-block-start:calc(-1.25 * var(--tui-font-offset) - 1.375rem);padding-block-end:.3125rem}  tui-textfield._with-label[data-size=l] textarea~.t-ghost{margin-block-start:calc(-1.25 * var(--tui-font-offset) - 1.75rem);padding-block-end:.5rem}  tui-textfield[data-size=s] textarea~.t-ghost{margin-block-start:-1.625rem;padding-block-end:.5rem}  tui-textfield[data-size=m] textarea~.t-ghost{margin-block-start:-2rem;padding-block-end:.875rem}  tui-textfield[data-size=l] textarea~.t-ghost{margin-block-start:-2.5rem;padding-block-end:1rem}'],
  changeDetection: 0
});
var TuiTextareaComponent = _TuiTextareaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextareaComponent, [{
    type: Component,
    args: [{
      selector: "textarea[tuiTextarea]",
      imports: [PolymorpheusOutlet, TuiScrollControls],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)],
      hostDirectives: [TuiWithInput],
      host: {
        ngSkipHydration: "true",
        "[class._mobile]": "isMobile",
        // To trigger CD for #text
        "(scroll.once)": "onScroll()",
        "(scroll.zoneless)": "onScroll()"
      },
      template: '<ng-template>\n    @if (!isMobile) {\n        <tui-scroll-controls\n            class="t-scroll"\n            (click.prevent)="(0)"\n        />\n    }\n    <span\n        #text\n        aria-hidden="true"\n        class="t-ghost"\n        [style.max-height.em]="1.25 * max()"\n        [style.min-height.em]="1.25 * min()"\n    >\n        <ng-container *polymorpheusOutlet="content() as text; context: {$implicit: el.value}">{{ text }}</ng-container>\n    </span>\n</ng-template>\n',
      styles: [':host-context(tui-textfield._with-label[data-size="m"]._with-label[data-size="m"]){border-block-start-width:calc(.5rem + var(--t-height) / 3);padding-block:0}:host-context(tui-textfield._with-label[data-size="l"]._with-label[data-size="l"]){border-block-start-width:calc(.625rem + var(--t-height) / 3);padding-block:0}:host-context(tui-textfield[data-size="s"]){padding-block:.5rem .25rem}:host-context(tui-textfield[data-size="m"]){padding-block:.875rem .25rem}:host-context(tui-textfield[data-size="l"]){padding-block:1.125rem .375rem}:host-context(tui-textfield:has(.t-ghost > * > span)){overscroll-behavior:none}:host:host{block-size:100%;white-space:pre-wrap;overflow:auto;word-break:break-word;border:0 solid transparent}:host:host:not(._mobile){scrollbar-width:none;-ms-overflow-style:none}:host:host:not(._mobile)::-webkit-scrollbar,:host:host:not(._mobile)::-webkit-scrollbar-thumb{display:none}.t-scroll{position:absolute;inset:.25rem 0;min-block-size:0}::ng-deep tui-textfield._with-label[data-size=m] .t-scroll{inset-block-start:calc(.5rem + var(--t-height) / 3)}::ng-deep tui-textfield._with-label[data-size=l] .t-scroll{inset-block-start:calc(.625rem + var(--t-height) / 3)}.t-ghost{position:relative;z-index:1;order:1;inline-size:calc(100% - var(--t-start) - var(--t-end) - var(--t-side));white-space:pre-wrap;word-break:break-word;overflow-wrap:break-word;padding-inline-start:var(--t-start);padding-inline-end:calc(var(--t-end) + var(--t-side) + var(--t-space));pointer-events:none;box-sizing:content-box;overflow:hidden;color:transparent}.t-ghost:after{content:" "}::ng-deep tui-textfield._with-label[data-size=m] textarea~.t-ghost{margin-block-start:calc(-1.25 * var(--tui-font-offset) - 1.375rem);padding-block-end:.3125rem}::ng-deep tui-textfield._with-label[data-size=l] textarea~.t-ghost{margin-block-start:calc(-1.25 * var(--tui-font-offset) - 1.75rem);padding-block-end:.5rem}::ng-deep tui-textfield[data-size=s] textarea~.t-ghost{margin-block-start:-1.625rem;padding-block-end:.5rem}::ng-deep tui-textfield[data-size=m] textarea~.t-ghost{margin-block-start:-2rem;padding-block-end:.875rem}::ng-deep tui-textfield[data-size=l] textarea~.t-ghost{margin-block-start:-2.5rem;padding-block-end:1rem}\n']
    }]
  }], null, null);
})();
var _TuiTextareaCounter = class _TuiTextareaCounter {
  constructor() {
    this.limit = signal(0);
    this.length = signal(0);
  }
};
_TuiTextareaCounter.\u0275fac = function TuiTextareaCounter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTextareaCounter)();
};
_TuiTextareaCounter.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiTextareaCounter,
  selectors: [["ng-component"]],
  decls: 1,
  vars: 1,
  template: function TuiTextareaCounter_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TuiTextareaCounter_Conditional_0_Template, 1, 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.limit() ? 0 : -1);
    }
  },
  styles: ["[_nghost-%COMP%]{z-index:1;inline-size:100%;order:2;text-align:end;pointer-events:none;padding-block-end:.75rem;font:var(--tui-typography-ui-2xs);color:var(--tui-text-secondary)}"],
  changeDetection: 0
});
var TuiTextareaCounter = _TuiTextareaCounter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextareaCounter, [{
    type: Component,
    args: [{
      template: "@if (limit()) { {{ length() }} / {{ limit() }} } ",
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [":host{z-index:1;inline-size:100%;order:2;text-align:end;pointer-events:none;padding-block-end:.75rem;font:var(--tui-typography-ui-2xs);color:var(--tui-text-secondary)}\n"]
    }]
  }], null, null);
})();
var _TuiTextareaLimit = class _TuiTextareaLimit {
  constructor() {
    this.limit = inject(TuiTextareaDirective).limit;
    this.context = injectContext();
  }
};
_TuiTextareaLimit.\u0275fac = function TuiTextareaLimit_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTextareaLimit)();
};
_TuiTextareaLimit.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiTextareaLimit,
  selectors: [["ng-component"]],
  decls: 3,
  vars: 2,
  consts: [[3, "textContent"]],
  template: function TuiTextareaLimit_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0);
      \u0275\u0275text(1);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(2, TuiTextareaLimit_Conditional_2_Template, 1, 1, "span", 0);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.context.$implicit.slice(0, ctx.limit()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.limit() <= ctx.context.$implicit.length ? 2 : -1);
    }
  },
  styles: ["span[_ngcontent-%COMP%]:last-child{background:linear-gradient(transparent .25rem,var(--tui-status-negative-pale) .25rem,var(--tui-status-negative-pale) 100%)}"],
  changeDetection: 0
});
var TuiTextareaLimit = _TuiTextareaLimit;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextareaLimit, [{
    type: Component,
    args: [{
      template: `
        <ng-container>{{ context.$implicit.slice(0, limit()) }}</ng-container>
        @if (limit() <= context.$implicit.length) {
            <span [textContent]="context.$implicit.slice(limit())"></span>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ["span:last-child{background:linear-gradient(transparent .25rem,var(--tui-status-negative-pale) .25rem,var(--tui-status-negative-pale) 100%)}\n"]
    }]
  }], null, null);
})();
var COMPONENT = new PolymorpheusComponent(TuiTextareaLimit);
var _TuiTextareaDirective = class _TuiTextareaDirective {
  constructor() {
    this.value = inject(TUI_TEXTFIELD_VALUE);
    this.ref = inject(ViewContainerRef).createComponent(TuiTextareaCounter);
    this.size = inject(TUI_TEXTFIELD_OPTIONS).size;
    this.limit = input(0);
  }
  ngDoCheck() {
    this.ref.instance.length.set(this.value().length);
    this.ref.instance.limit.set(this.limit());
  }
  validate(control) {
    return Validators.maxLength(this.limit())(control);
  }
};
_TuiTextareaDirective.\u0275fac = function TuiTextareaDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTextareaDirective)();
};
_TuiTextareaDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiTextareaDirective,
  selectors: [["", "tuiTextarea", "", "limit", ""]],
  hostVars: 2,
  hostBindings: function TuiTextareaDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("border-block-end-width", ctx.size() === "l" ? 1.875 : 1.75, "rem");
    }
  },
  inputs: {
    limit: [1, "limit"]
  },
  features: [\u0275\u0275ProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiTextareaDirective, true), tuiTextareaOptionsProvider({
    content: COMPONENT
  })])]
});
var TuiTextareaDirective = _TuiTextareaDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextareaDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiTextarea][limit]",
      providers: [tuiProvide(NG_VALIDATORS, TuiTextareaDirective, true), tuiTextareaOptionsProvider({
        content: COMPONENT
      })],
      host: {
        "[style.border-block-end-width.rem]": 'size() === "l" ? 1.875 : 1.75'
      }
    }]
  }], null, null);
})();
var TuiTextarea = [TuiTextareaComponent, TuiTextareaDirective, TuiLabel, TuiTextfieldComponent, TuiTextfieldOptionsDirective, TuiDropdownContent];

export {
  TuiTextareaComponent,
  TuiTextarea
};
//# sourceMappingURL=chunk-SJ6OUQBU.js.map
