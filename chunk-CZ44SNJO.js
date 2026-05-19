import {
  TuiChevron,
  TuiGroup,
  TuiItem,
  tuiAvatarOptionsProvider,
  tuiGroupOptionsProvider
} from "./chunk-3CRZRPMF.js";
import {
  TUI_VERSION,
  TuiButton,
  tuiButtonOptionsProvider
} from "./chunk-CV6PGG7O.js";
import {
  tuiDirectiveBinding
} from "./chunk-2UOD7KNB.js";
import {
  tuiGenerateId,
  tuiSetSignal
} from "./chunk-6HH4HFWJ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  NgTemplateOutlet,
  TemplateRef,
  ViewEncapsulation,
  contentChild,
  contentChildren,
  effect,
  inject,
  input,
  model,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵtemplate
} from "./chunk-NS3244ZP.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-expand.mjs
var _c0 = ["*"];
function TuiExpand_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.content() || null);
  }
}
var _TuiExpand = class _TuiExpand {
  constructor() {
    this.content = contentChild(TuiItem, {
      read: TemplateRef
    });
    this.open = signal(false);
    this.expanded = input(false);
  }
  ngOnInit() {
    this.open.set(this.expanded());
  }
  onTransitionEnd({
    propertyName
  }) {
    if (propertyName === "grid-template-rows") {
      this.open.set(this.expanded());
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
      \u0275\u0275contentQuerySignal(dirIndex, ctx.content, TuiItem, 5, TemplateRef);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  },
  hostVars: 4,
  hostBindings: function TuiExpand_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("transitionend.self", function TuiExpand_transitionend_self_HostBindingHandler($event) {
        return ctx.onTransitionEnd($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275classProp("_expanded", ctx.expanded())("_open", ctx.open());
    }
  },
  inputs: {
    expanded: [1, "expanded"]
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 1,
  consts: [[1, "t-wrapper"], [3, "ngTemplateOutlet"]],
  template: function TuiExpand_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, TuiExpand_Conditional_1_Template, 1, 1, "ng-container", 1);
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.expanded() || ctx.open() ? 1 : -1);
    }
  },
  dependencies: [NgTemplateOutlet],
  styles: ["[_nghost-%COMP%]{transition-property:grid-template-rows,padding;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:grid;grid-template-rows:0fr;transition-delay:1ms}[_nghost-%COMP%]:not(._expanded){padding-block:0}._expanded[_nghost-%COMP%]{visibility:visible;grid-template-rows:1fr}._expanded[_nghost-%COMP%] > .t-wrapper[_ngcontent-%COMP%]{opacity:1;visibility:visible}._expanded._open[_nghost-%COMP%] > .t-wrapper[_ngcontent-%COMP%]{overflow:visible}.t-wrapper[_ngcontent-%COMP%]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;grid-row:1 / span 2;overflow:hidden;opacity:0;visibility:hidden}"],
  changeDetection: 0
});
var TuiExpand = _TuiExpand;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiExpand, [{
    type: Component,
    args: [{
      selector: "tui-expand",
      imports: [NgTemplateOutlet],
      template: `
        <div class="t-wrapper">
            @if (expanded() || open()) {
                <ng-container [ngTemplateOutlet]="content() || null" />
            }
            <ng-content />
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._expanded]": "expanded()",
        "[class._open]": "open()",
        "(transitionend.self)": "onTransitionEnd($event)"
      },
      styles: [":host{transition-property:grid-template-rows,padding;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:grid;grid-template-rows:0fr;transition-delay:1ms}:host:not(._expanded){padding-block:0}:host._expanded{visibility:visible;grid-template-rows:1fr}:host._expanded>.t-wrapper{opacity:1;visibility:visible}:host._expanded._open>.t-wrapper{overflow:visible}.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;grid-row:1 / span 2;overflow:hidden;opacity:0;visibility:hidden}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-accordion.mjs
var _c02 = ["*"];
var _TuiAccordionDirective = class _TuiAccordionDirective {
  constructor() {
    this.accordion = inject(TuiAccordionComponent);
    this.open = model(false, {
      alias: "tuiAccordion"
    });
    this.id = tuiGenerateId();
    this.size = tuiDirectiveBinding(TuiButton, "size", this.accordion.size);
    this.chevron = tuiDirectiveBinding(TuiChevron, "rotated", this.open);
  }
  ngOnChanges() {
    this.accordion.toggle(this);
  }
  toggle() {
    this.open.set(!this.open());
    this.accordion.toggle(this);
  }
};
_TuiAccordionDirective.\u0275fac = function TuiAccordionDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAccordionDirective)();
};
_TuiAccordionDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiAccordionDirective,
  selectors: [["button", "tuiAccordion", ""]],
  hostAttrs: ["tuiAccordion", "", "tuiButton", "", "type", "button"],
  hostVars: 2,
  hostBindings: function TuiAccordionDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function TuiAccordionDirective_click_HostBindingHandler() {
        return ctx.toggle();
      });
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-controls", ctx.id)("aria-expanded", ctx.open() || "false");
    }
  },
  inputs: {
    open: [1, "tuiAccordion", "open"]
  },
  outputs: {
    open: "tuiAccordionChange"
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
      selector: "button[tuiAccordion]",
      providers: [tuiAvatarOptionsProvider({
        size: "s"
      }), tuiButtonOptionsProvider({
        appearance: "outline-grayscale"
      })],
      hostDirectives: [TuiButton, TuiChevron],
      host: {
        tuiAccordion: "",
        tuiButton: "",
        type: "button",
        "[attr.aria-controls]": "id",
        "[attr.aria-expanded]": 'open() || "false"',
        "(click)": "toggle()"
      }
    }]
  }], null, null);
})();
var _TuiAccordionComponent = class _TuiAccordionComponent {
  constructor() {
    this.expands = contentChildren(TuiExpand);
    this.directives = contentChildren(TuiAccordionDirective);
    this.elements = contentChildren(TuiExpand, {
      read: ElementRef
    });
    this.sync = effect(() => this.elements().forEach(({
      nativeElement
    }, index) => {
      nativeElement.id = this.directives()[index]?.id;
    }));
    this.closeOthers = input(true);
    this.size = input("l");
  }
  toggle(directive) {
    if (this.closeOthers() && directive.open()) {
      this.expands().forEach((expand2) => tuiSetSignal(expand2.expanded, false));
      this.directives().forEach((dir) => {
        if (dir !== directive) {
          dir.open.set(false);
        }
      });
    }
    const expand = this.expands()[this.directives().indexOf(directive)];
    if (expand) {
      tuiSetSignal(expand.expanded, !!directive.open());
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
      \u0275\u0275contentQuerySignal(dirIndex, ctx.expands, TuiExpand, 4);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.directives, TuiAccordionDirective, 4);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.elements, TuiExpand, 4, ElementRef);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(3);
    }
  },
  hostAttrs: ["data-tui-version", "5.7.0"],
  hostVars: 1,
  hostBindings: function TuiAccordionComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.size());
    }
  },
  inputs: {
    closeOthers: [1, "closeOthers"],
    size: [1, "size"]
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
  styles: ['tui-accordion:where(*[data-tui-version="5.7.0"]){inline-size:100%;border-radius:var(--t-group-radius);font:var(--tui-typography-body-m);overflow:hidden}tui-accordion:where(*[data-tui-version="5.7.0"])>[tuiAccordion]{text-align:start;justify-content:flex-start}tui-accordion:where(*[data-tui-version="5.7.0"])>[tuiAccordion]:last-of-type:not([aria-expanded=true]){-webkit-mask-image:var(--t-group-mask-end);mask-image:var(--t-group-mask-end);border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}tui-accordion:where(*[data-tui-version="5.7.0"])>[tuiAccordion]:first-child{border-top-left-radius:inherit!important;border-top-right-radius:inherit!important}tui-accordion:where(*[data-tui-version="5.7.0"])>[tuiAccordion]:first-child:last-of-type:not([aria-expanded=true]){-webkit-mask-image:none;mask-image:none}tui-accordion:where(*[data-tui-version="5.7.0"])>[tuiAccordion]:after{margin-inline-start:auto!important}tui-accordion:where(*[data-tui-version="5.7.0"])>[tuiAccordion]>[tuiAvatar]{margin:0}tui-accordion:where(*[data-tui-version="5.7.0"])>tui-expand{visibility:hidden;min-block-size:1px!important;padding:1.25rem;transition-property:grid-template-rows,padding,visibility!important;box-shadow:inset 0 0 0 1px var(--tui-border-normal)}tui-accordion:where(*[data-tui-version="5.7.0"])>tui-expand:last-child{border-bottom-left-radius:inherit!important;border-bottom-right-radius:inherit!important}tui-accordion:where(*[data-tui-version="5.7.0"])>[tuiAccordion][data-appearance=""]+tui-expand{box-shadow:none}tui-accordion:where(*[data-tui-version="5.7.0"])[data-size=m]{font:var(--tui-typography-body-s)}tui-accordion:where(*[data-tui-version="5.7.0"])[data-size=m]>tui-expand{padding:1rem}tui-accordion:where(*[data-tui-version="5.7.0"])[data-size=s]{font:var(--tui-typography-body-s)}tui-accordion:where(*[data-tui-version="5.7.0"])[data-size=s]>tui-expand{padding:.625rem}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiAccordionComponent = _TuiAccordionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAccordionComponent, [{
    type: Component,
    args: [{
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
        "data-tui-version": TUI_VERSION,
        "[attr.data-size]": "size()"
      },
      styles: ['tui-accordion:where(*[data-tui-version="5.7.0"]){inline-size:100%;border-radius:var(--t-group-radius);font:var(--tui-typography-body-m);overflow:hidden}tui-accordion:where(*[data-tui-version="5.7.0"])>[tuiAccordion]{text-align:start;justify-content:flex-start}tui-accordion:where(*[data-tui-version="5.7.0"])>[tuiAccordion]:last-of-type:not([aria-expanded=true]){-webkit-mask-image:var(--t-group-mask-end);mask-image:var(--t-group-mask-end);border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}tui-accordion:where(*[data-tui-version="5.7.0"])>[tuiAccordion]:first-child{border-top-left-radius:inherit!important;border-top-right-radius:inherit!important}tui-accordion:where(*[data-tui-version="5.7.0"])>[tuiAccordion]:first-child:last-of-type:not([aria-expanded=true]){-webkit-mask-image:none;mask-image:none}tui-accordion:where(*[data-tui-version="5.7.0"])>[tuiAccordion]:after{margin-inline-start:auto!important}tui-accordion:where(*[data-tui-version="5.7.0"])>[tuiAccordion]>[tuiAvatar]{margin:0}tui-accordion:where(*[data-tui-version="5.7.0"])>tui-expand{visibility:hidden;min-block-size:1px!important;padding:1.25rem;transition-property:grid-template-rows,padding,visibility!important;box-shadow:inset 0 0 0 1px var(--tui-border-normal)}tui-accordion:where(*[data-tui-version="5.7.0"])>tui-expand:last-child{border-bottom-left-radius:inherit!important;border-bottom-right-radius:inherit!important}tui-accordion:where(*[data-tui-version="5.7.0"])>[tuiAccordion][data-appearance=""]+tui-expand{box-shadow:none}tui-accordion:where(*[data-tui-version="5.7.0"])[data-size=m]{font:var(--tui-typography-body-s)}tui-accordion:where(*[data-tui-version="5.7.0"])[data-size=m]>tui-expand{padding:1rem}tui-accordion:where(*[data-tui-version="5.7.0"])[data-size=s]{font:var(--tui-typography-body-s)}tui-accordion:where(*[data-tui-version="5.7.0"])[data-size=s]>tui-expand{padding:.625rem}\n']
    }]
  }], null, null);
})();
var TuiAccordion = [TuiAccordionComponent, TuiAccordionDirective, TuiExpand, TuiItem];

export {
  TuiExpand,
  TuiAccordionDirective,
  TuiAccordionComponent,
  TuiAccordion
};
//# sourceMappingURL=chunk-CZ44SNJO.js.map
