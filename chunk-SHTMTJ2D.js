import {
  AbstractTuiControl,
  AbstractTuiTextfieldHost,
  TEXTFIELD_CONTROLLER_PROVIDER,
  TUI_ICON_START_PADDINGS,
  TUI_TEXTFIELD_OPTIONS,
  TUI_TEXTFIELD_WATCHED_CONTROLLER,
  TuiHintOptionsDirective,
  TuiPrimitiveTextfieldModule,
  TuiTextfieldComponent2 as TuiTextfieldComponent,
  TuiTooltipComponent,
  TuiTooltipModule,
  TuiWrapperDirective,
  TuiWrapperModule,
  tuiAsControl,
  tuiAsFocusableItemAccessor,
  tuiAsTextfieldHost,
  tuiGetBorder
} from "./chunk-M277MCZ7.js";
import {
  PolymorpheusOutlet,
  PolymorpheusTemplate,
  TUI_IS_IOS,
  TuiAppearance,
  TuiIcon,
  TuiScrollbar,
  tuiIsFocused
} from "./chunk-3VK442GK.js";
import {
  AsyncPipe,
  CommonModule,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgIf,
  NgModel
} from "./chunk-2QWGY2YZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  Input,
  NgModule,
  ViewChild,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-SLVEPEAC.js";

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-textarea.mjs
var _c0 = ["focusableElement"];
var _c1 = [[["textarea"]], "*"];
var _c2 = ["textarea", "*"];
var _c3 = () => ({
  standalone: true
});
var _c4 = (a0) => ({
  $implicit: a0
});
function TuiTextareaComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TuiTextareaComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.value.length, "/", ctx_r1.maxLength, " ");
  }
}
function TuiTextareaComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("t-placeholder_raised", ctx_r1.placeholderRaised);
  }
}
function TuiTextareaComponent_div_18_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tui-icon", 23);
  }
  if (rf & 2) {
    const src_r3 = ctx.polymorpheusOutlet;
    \u0275\u0275property("icon", src_r3.toString());
  }
}
function TuiTextareaComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, TuiTextareaComponent_div_18_tui_icon_1_Template, 1, 1, "tui-icon", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("polymorpheusOutlet", ctx_r1.iconLeftContent)("polymorpheusOutletContext", \u0275\u0275pureFunction1(2, _c4, ctx_r1.size));
  }
}
function TuiTextareaComponent_ng_container_19_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tui-icon", 25);
  }
  if (rf & 2) {
    const src_r4 = ctx.polymorpheusOutlet;
    \u0275\u0275property("icon", src_r4);
  }
}
function TuiTextareaComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TuiTextareaComponent_ng_container_19_tui_icon_1_Template, 1, 1, "tui-icon", 24);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("polymorpheusOutlet", ctx_r1.controller.customContent);
  }
}
function TuiTextareaComponent_ng_container_20_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tui-icon", 27);
    \u0275\u0275listener("click.stop", function TuiTextareaComponent_ng_container_20_tui_icon_1_Template_tui_icon_click_stop_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onValueChange(""));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const src_r6 = ctx.polymorpheusOutlet;
    \u0275\u0275property("icon", src_r6.toString());
  }
}
function TuiTextareaComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TuiTextareaComponent_ng_container_20_tui_icon_1_Template, 1, 1, "tui-icon", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("polymorpheusOutlet", ctx_r1.iconCleaner)("polymorpheusOutletContext", \u0275\u0275pureFunction1(2, _c4, ctx_r1.size));
  }
}
function TuiTextareaComponent_tui_tooltip_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tui-tooltip", 28);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("content", ctx_r1.hintOptions == null ? null : ctx_r1.hintOptions.content)("describeId", ctx_r1.id);
  }
}
function TuiTextareaComponent_div_22_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tui-icon", 23);
  }
  if (rf & 2) {
    const src_r7 = ctx.polymorpheusOutlet;
    \u0275\u0275property("icon", src_r7.toString());
  }
}
function TuiTextareaComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, TuiTextareaComponent_div_22_tui_icon_1_Template, 1, 1, "tui-icon", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("polymorpheusOutlet", ctx_r1.iconContent)("polymorpheusOutletContext", \u0275\u0275pureFunction1(2, _c4, ctx_r1.size));
  }
}
var DEFAULT_ROWS = 20;
var LINE_HEIGHT_M = 20;
var LINE_HEIGHT_L = 24;
var _TuiTextareaComponent = class _TuiTextareaComponent extends AbstractTuiControl {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_TEXTFIELD_OPTIONS);
    this.isIOS = inject(TUI_IS_IOS);
    this.controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    this.hintOptions = inject(TuiHintOptionsDirective, {
      optional: true
    });
    this.rows = DEFAULT_ROWS;
    this.maxLength = null;
    this.expandable = false;
  }
  get nativeFocusableElement() {
    if (this.computedDisabled) {
      return null;
    }
    return this.textfield?.nativeElement || this.focusableElement?.nativeElement || null;
  }
  get focused() {
    return tuiIsFocused(this.nativeFocusableElement);
  }
  get computeMaxHeight() {
    return this.expandable ? this.rows * this.lineHeight : null;
  }
  onValueChange(value) {
    this.value = value;
  }
  get labelOutside() {
    return this.options.appearance() === "table" || this.controller.labelOutside;
  }
  get size() {
    return this.controller.size;
  }
  get borderStart() {
    return this.iconLeftContent ? TUI_ICON_START_PADDINGS[this.size] : 0;
  }
  get borderEnd() {
    return tuiGetBorder(!!this.iconContent, this.hasCleaner, this.hasTooltip, this.hasCustomContent, this.size);
  }
  get hasTooltip() {
    return !!this.hintOptions?.content && (this.controller.options.hintOnDisabled || !this.computedDisabled);
  }
  get hasValue() {
    return this.value !== "";
  }
  get hasCounter() {
    return !!this.maxLength && this.interactive;
  }
  get appearance() {
    return this.options.appearance() === "table" ? "table" : this.controller.appearance;
  }
  get hasCleaner() {
    return this.controller.cleaner && this.hasValue && this.interactive;
  }
  get hasPlaceholder() {
    return this.placeholderRaisable || !this.hasValue && !this.hasExampleText;
  }
  get hasCustomContent() {
    return !!this.controller.customContent;
  }
  get iconLeftContent() {
    return this.controller.iconStart;
  }
  get iconContent() {
    return this.controller.icon;
  }
  get iconCleaner() {
    return this.controller.options.iconCleaner;
  }
  get hasExampleText() {
    return !!this.textfield?.nativeElement.placeholder && this.focused && !this.hasValue && !this.readOnly;
  }
  get placeholderRaised() {
    return this.placeholderRaisable && (this.computedFocused && !this.readOnly || this.hasValue);
  }
  get fittedContent() {
    return this.value.slice(0, this.maxLength || Infinity);
  }
  get extraContent() {
    return this.value.slice(this.maxLength || Infinity);
  }
  onFocused(focused) {
    this.updateFocused(focused);
  }
  onMouseDown(event) {
    if (event.target === this.nativeFocusableElement) {
      return;
    }
    event.preventDefault();
    if (this.nativeFocusableElement) {
      this.nativeFocusableElement.focus();
    }
  }
  getFallbackValue() {
    return "";
  }
  get lineHeight() {
    return this.controller.size === "m" ? LINE_HEIGHT_M : LINE_HEIGHT_L;
  }
  get placeholderRaisable() {
    return this.size !== "s" && !this.controller.labelOutside;
  }
};
_TuiTextareaComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiTextareaComponent_BaseFactory;
  return function TuiTextareaComponent_Factory(__ngFactoryType__) {
    return (\u0275TuiTextareaComponent_BaseFactory || (\u0275TuiTextareaComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TuiTextareaComponent)))(__ngFactoryType__ || _TuiTextareaComponent);
  };
})();
_TuiTextareaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiTextareaComponent,
  selectors: [["tui-textarea"]],
  contentQueries: function TuiTextareaComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, TuiTextfieldComponent, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.textfield = _t.first);
    }
  },
  viewQuery: function TuiTextareaComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.focusableElement = _t.first);
    }
  },
  hostVars: 17,
  hostBindings: function TuiTextareaComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("focusin", function TuiTextareaComponent_focusin_HostBindingHandler() {
        return ctx.onFocused(true);
      })("focusout", function TuiTextareaComponent_focusout_HostBindingHandler() {
        return ctx.onFocused(false);
      });
    }
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.size);
      \u0275\u0275styleProp("--t-border-end", ctx.borderEnd, "rem")("--t-border-start", ctx.borderStart, "rem");
      \u0275\u0275classProp("_ios", ctx.isIOS)("_expandable", ctx.expandable)("_has-counter", ctx.hasCounter)("_label-outside", ctx.labelOutside)("_has-tooltip", ctx.hasTooltip)("_has-value", ctx.hasValue);
    }
  },
  inputs: {
    rows: "rows",
    maxLength: "maxLength",
    expandable: "expandable"
  },
  standalone: false,
  features: [\u0275\u0275ProvidersFeature([tuiAsFocusableItemAccessor(_TuiTextareaComponent), tuiAsControl(_TuiTextareaComponent), TEXTFIELD_CONTROLLER_PROVIDER]), \u0275\u0275InheritDefinitionFeature],
  ngContentSelectors: _c2,
  decls: 23,
  vars: 27,
  consts: [["focusableElement", ""], [4, "ngIf"], ["automation-id", "tui-text-area__wrapper", "tuiWrapper", "", 1, "t-outline", 3, "appearance", "disabled", "focus", "hover", "invalid", "readOnly"], ["automation-id", "tui-text-area__counter", "class", "t-counter", 4, "ngIf"], [1, "t-content", 3, "mousedown"], [1, "t-wrapper"], ["automation-id", "tui-text-area__placeholder", "class", "t-placeholder", 3, "t-placeholder_raised", 4, "ngIf"], ["automation-id", "tui-text-area__scrollbar", 1, "t-box"], [1, "t-input-wrapper"], [1, "t-relative"], ["aria-hidden", "true", 1, "t-pseudo-content"], [3, "textContent"], [1, "t-pseudo-content__extra", 3, "textContent"], [1, "t-caret"], ["automation-id", "tui-text-area__native", 1, "t-input", 3, "ngModelChange", "disabled", "id", "ngModelOptions", "readOnly", "tabIndex", "ngModel"], [1, "t-icons"], ["class", "t-icon t-icon_left t-textfield-icon", 4, "ngIf"], ["automation-id", "tui-text-area__tooltip", 3, "content", "describeId", 4, "ngIf"], ["class", "t-icon t-textfield-icon", 4, "ngIf"], ["automation-id", "tui-text-area__counter", 1, "t-counter"], ["automation-id", "tui-text-area__placeholder", 1, "t-placeholder"], [1, "t-icon", "t-icon_left", "t-textfield-icon"], ["tuiAppearance", "icon", 3, "icon", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiAppearance", "icon", 3, "icon"], [3, "icon", 4, "polymorpheusOutlet"], [3, "icon"], ["tuiAppearance", "icon", "class", "t-cleaner", 3, "icon", "click.stop", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiAppearance", "icon", 1, "t-cleaner", 3, "click.stop", "icon"], ["automation-id", "tui-text-area__tooltip", 3, "content", "describeId"], [1, "t-icon", "t-textfield-icon"]],
  template: function TuiTextareaComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef(_c1);
      \u0275\u0275template(0, TuiTextareaComponent_ng_container_0_Template, 1, 0, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275template(3, TuiTextareaComponent_div_3_Template, 2, 2, "div", 3);
      \u0275\u0275elementStart(4, "label", 4);
      \u0275\u0275listener("mousedown", function TuiTextareaComponent_Template_label_mousedown_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMouseDown($event));
      });
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275template(6, TuiTextareaComponent_div_6_Template, 2, 2, "div", 6);
      \u0275\u0275elementStart(7, "tui-scrollbar", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
      \u0275\u0275element(11, "span", 11)(12, "span", 12)(13, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "textarea", 14, 0);
      \u0275\u0275twoWayListener("ngModelChange", function TuiTextareaComponent_Template_textarea_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275projection(16);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 15);
      \u0275\u0275template(18, TuiTextareaComponent_div_18_Template, 2, 4, "div", 16)(19, TuiTextareaComponent_ng_container_19_Template, 2, 1, "ng-container", 1)(20, TuiTextareaComponent_ng_container_20_Template, 2, 4, "ng-container", 1)(21, TuiTextareaComponent_tui_tooltip_21_Template, 1, 2, "tui-tooltip", 17)(22, TuiTextareaComponent_div_22_Template, 2, 4, "div", 18);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 24, ctx.hintOptions == null ? null : ctx.hintOptions.change$));
      \u0275\u0275advance(2);
      \u0275\u0275property("appearance", ctx.appearance)("disabled", ctx.disabled)("focus", ctx.computedFocused)("hover", ctx.pseudoHover)("invalid", ctx.computedInvalid)("readOnly", ctx.readOnly);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasCounter);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.hasPlaceholder);
      \u0275\u0275advance();
      \u0275\u0275styleProp("max-height", ctx.computeMaxHeight, "px");
      \u0275\u0275advance(4);
      \u0275\u0275property("textContent", ctx.fittedContent || (ctx.nativeFocusableElement == null ? null : ctx.nativeFocusableElement.placeholder));
      \u0275\u0275advance();
      \u0275\u0275property("textContent", ctx.extraContent);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.computedDisabled)("id", ctx.id)("ngModelOptions", \u0275\u0275pureFunction0(26, _c3))("readOnly", ctx.readOnly)("tabIndex", ctx.computedFocusable ? 0 : -1);
      \u0275\u0275twoWayProperty("ngModel", ctx.value);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.iconLeftContent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasCustomContent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasCleaner);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasTooltip);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.iconContent);
    }
  },
  dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, TuiScrollbar, TuiTooltipComponent, TuiWrapperDirective, PolymorpheusOutlet, TuiIcon, TuiAppearance, AsyncPipe],
  styles: ["[_nghost-%COMP%]{position:relative;z-index:0;display:flex;flex-direction:column;min-block-size:var(--tui-textarea-height);border-radius:var(--tui-radius-m);color:var(--tui-text-primary)}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}[data-size=s][_nghost-%COMP%]{--tui-height: var(--tui-height-s);--tui-textarea-height: 4.5625rem;font:var(--tui-font-text-s)}[data-size=m][_nghost-%COMP%]{--tui-height: var(--tui-height-m);--tui-textarea-height: 5.5rem;font:var(--tui-font-text-s)}[data-size=l][_nghost-%COMP%]{--tui-height: var(--tui-height-l);--tui-textarea-height: 6.75rem;font:var(--tui-font-text-m)}[data-size=m]._has-counter[_nghost-%COMP%]{--tui-textarea-height: 6.625rem}[data-size=l]._has-counter[_nghost-%COMP%]{--tui-textarea-height: 7.875rem}@supports (-webkit-hyphens: none){[_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%], [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{text-wrap:balance;white-space:break-spaces}}.t-outline[_ngcontent-%COMP%]{min-block-size:inherit}.t-content[_ngcontent-%COMP%]{display:block;margin-block-start:0;margin-block-end:0;min-block-size:inherit;box-sizing:border-box;overflow:hidden;cursor:text}._disabled[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{cursor:auto;opacity:var(--tui-disabled-opacity)}[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:1px;right:0;min-block-size:auto}._has-counter[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{bottom:1.6875rem}._label-outside._has-counter[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{bottom:1rem}.t-wrapper[_ngcontent-%COMP%]{position:relative;inline-size:100%;block-size:100%;min-block-size:inherit;box-sizing:border-box;padding:calc((var(--tui-height) - 1.25rem) / 2) 0}[data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 1.5rem) / 2) 0}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 2.25rem) / 2) 0}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 2.625rem) / 2) 0}table[data-size=m]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], table   [data-size=m]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding-block-end:.75rem}table[data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], table   [data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding-block-end:1rem}.t-input-wrapper[_ngcontent-%COMP%]{min-block-size:inherit;inline-size:100%;flex:1}.t-relative[_ngcontent-%COMP%]{position:relative;min-block-size:inherit}.t-box[_ngcontent-%COMP%]{display:flex;min-block-size:calc(100% - 1rem);inline-size:100%;box-sizing:content-box}[_nghost-%COMP%]:not(._expandable)   .t-box[_ngcontent-%COMP%]{block-size:calc(100% - 1rem)}[_nghost-%COMP%]:not(._expandable)._label-outside   .t-box[_ngcontent-%COMP%]{block-size:100%}._has-counter._expandable[_nghost-%COMP%]   .t-box[_ngcontent-%COMP%]{margin-block-end:1.25rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-box[_ngcontent-%COMP%]{border-block-start:1rem solid transparent}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-box[_ngcontent-%COMP%]{border-block-start:1.25rem solid transparent}.t-pseudo-content[_ngcontent-%COMP%]{white-space:pre-wrap;overflow-wrap:break-word;pointer-events:none;color:transparent;overflow:hidden;border:0 solid transparent;border-inline-start-width:var(--t-border-start, 0);border-inline-end-width:var(--t-border-end, 0)}[data-size=s][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%], [data-size=m][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%]{padding:0 1rem}.t-pseudo-content__extra[_ngcontent-%COMP%]{background-color:var(--tui-status-negative-pale)}.t-input[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;box-sizing:border-box;resize:none;overflow:hidden;outline:none;border-style:solid;border-color:transparent;border-inline-start-width:var(--t-border-start, 0);border-inline-end-width:var(--t-border-end, 0)}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}.t-input[_ngcontent-%COMP%]:not(:last-of-type){display:none}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-tertiary);opacity:0}._focused[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]:not(:read-only)::placeholder{opacity:1}[data-size=s][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], [data-size=m][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding:0 .75rem;font:var(--tui-font-text-s)}[data-size=l][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding:0 1rem;font:var(--tui-font-text-m)}@supports (-webkit-marquee-repetition: infinite) and (object-fit: fill){._ios[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding-inline-start:.8125rem}}.t-pseudo-content[_ngcontent-%COMP%], .t-input[_ngcontent-%COMP%]{word-break:break-word}.t-placeholder[_ngcontent-%COMP%]{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;inline-size:100%;-webkit-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none;will-change:transform;transform:translateY(0);position:absolute;top:calc(var(--tui-height) / 2 - .625rem);left:0;max-inline-size:100%;border:0 solid transparent;border-inline-start-width:var(--t-border-start, 0);border-inline-end-width:var(--t-border-end, 0);box-sizing:border-box}@supports (-webkit-hyphens: none){.t-placeholder[_ngcontent-%COMP%]{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised[_ngcontent-%COMP%]{transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-text-negative)}._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-tertiary)}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font:var(--tui-font-text-m);line-height:1.25rem}[data-size=l][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font-size:.8156rem}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-primary)}[data-size=s][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=m][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 1rem}._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{overflow:initial;block-size:auto;white-space:initial}.t-icons[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;display:flex;justify-content:flex-end;pointer-events:none;padding:calc((var(--tui-height) - 1.5rem) / 2) 1rem}[data-size=m][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 1.5rem) / 2) .625rem}.t-icons[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){margin-inline-start:.25rem}.t-icon[_ngcontent-%COMP%]{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}.t-icon_left[_ngcontent-%COMP%]{margin-inline-end:auto}.t-cleaner[_ngcontent-%COMP%]{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto;border-width:.25rem}._readonly[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%], ._disabled[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%]{pointer-events:none}.t-caret[_ngcontent-%COMP%]{display:inline-block;block-size:1rem;inline-size:0}.t-counter[_ngcontent-%COMP%]{position:absolute;right:.75rem;bottom:.5rem;font:var(--tui-font-text-s);pointer-events:none;margin-block-start:auto;text-align:end;color:var(--tui-text-tertiary)}._readonly[_nghost-%COMP%]   .t-textfield-icon[_ngcontent-%COMP%]     [tuiAppearance][data-appearance=icon]{pointer-events:none}@media (hover: hover) and (pointer: fine){[_nghost-%COMP%]:not(._readonly):not(._disabled):hover   .t-textfield-icon[_ngcontent-%COMP%]     [tuiAppearance][data-appearance=icon]:after{color:var(--tui-text-secondary)}}"],
  changeDetection: 0
});
var TuiTextareaComponent = _TuiTextareaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextareaComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-textarea",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiTextareaComponent), tuiAsControl(TuiTextareaComponent), TEXTFIELD_CONTROLLER_PROVIDER],
      host: {
        "[attr.data-size]": "size",
        "[class._ios]": "isIOS",
        "[class._expandable]": "expandable",
        "[class._has-counter]": "hasCounter",
        "[class._label-outside]": "labelOutside",
        "[class._has-tooltip]": "hasTooltip",
        "[class._has-value]": "hasValue",
        "[style.--t-border-end.rem]": "borderEnd",
        "[style.--t-border-start.rem]": "borderStart",
        "(focusin)": "onFocused(true)",
        "(focusout)": "onFocused(false)"
      },
      template: `<ng-container *ngIf="hintOptions?.change$ | async" />
<div
    automation-id="tui-text-area__wrapper"
    tuiWrapper
    class="t-outline"
    [appearance]="appearance"
    [disabled]="disabled"
    [focus]="computedFocused"
    [hover]="pseudoHover"
    [invalid]="computedInvalid"
    [readOnly]="readOnly"
>
    <div
        *ngIf="hasCounter"
        automation-id="tui-text-area__counter"
        class="t-counter"
    >
        {{ value.length }}/{{ maxLength }}
    </div>

    <label
        class="t-content"
        (mousedown)="onMouseDown($event)"
    >
        <div class="t-wrapper">
            <div
                *ngIf="hasPlaceholder"
                automation-id="tui-text-area__placeholder"
                class="t-placeholder"
                [class.t-placeholder_raised]="placeholderRaised"
            >
                <ng-content />
            </div>
            <tui-scrollbar
                automation-id="tui-text-area__scrollbar"
                class="t-box"
                [style.maxHeight.px]="computeMaxHeight"
            >
                <div class="t-input-wrapper">
                    <div class="t-relative">
                        <div
                            aria-hidden="true"
                            class="t-pseudo-content"
                        >
                            <span [textContent]="fittedContent || nativeFocusableElement?.placeholder"></span>
                            <span
                                class="t-pseudo-content__extra"
                                [textContent]="extraContent"
                            ></span>
                            <span class="t-caret"></span>
                        </div>
                        <textarea
                            #focusableElement
                            automation-id="tui-text-area__native"
                            class="t-input"
                            [disabled]="computedDisabled"
                            [id]="id"
                            [ngModelOptions]="{standalone: true}"
                            [readOnly]="readOnly"
                            [tabIndex]="computedFocusable ? 0 : -1"
                            [(ngModel)]="value"
                        ></textarea>
                        <ng-content select="textarea" />
                    </div>
                </div>
            </tui-scrollbar>
        </div>
        <div class="t-icons">
            <div
                *ngIf="iconLeftContent"
                class="t-icon t-icon_left t-textfield-icon"
            >
                <tui-icon
                    *polymorpheusOutlet="iconLeftContent as src; context: {$implicit: size}"
                    tuiAppearance="icon"
                    [icon]="src.toString()"
                />
            </div>
            <ng-container *ngIf="hasCustomContent">
                <tui-icon
                    *polymorpheusOutlet="controller.customContent as src"
                    [icon]="src"
                />
            </ng-container>
            <ng-container *ngIf="hasCleaner">
                <tui-icon
                    *polymorpheusOutlet="iconCleaner as src; context: {$implicit: size}"
                    tuiAppearance="icon"
                    class="t-cleaner"
                    [icon]="src.toString()"
                    (click.stop)="onValueChange('')"
                />
            </ng-container>
            <tui-tooltip
                *ngIf="hasTooltip"
                automation-id="tui-text-area__tooltip"
                [content]="hintOptions?.content"
                [describeId]="id"
            />
            <div
                *ngIf="iconContent"
                class="t-icon t-textfield-icon"
            >
                <tui-icon
                    *polymorpheusOutlet="iconContent as src; context: {$implicit: size}"
                    tuiAppearance="icon"
                    [icon]="src.toString()"
                />
            </div>
        </div>
    </label>
</div>
`,
      styles: [":host{position:relative;z-index:0;display:flex;flex-direction:column;min-block-size:var(--tui-textarea-height);border-radius:var(--tui-radius-m);color:var(--tui-text-primary)}:host :host-context(*:disabled){pointer-events:none}:host[data-size=s]{--tui-height: var(--tui-height-s);--tui-textarea-height: 4.5625rem;font:var(--tui-font-text-s)}:host[data-size=m]{--tui-height: var(--tui-height-m);--tui-textarea-height: 5.5rem;font:var(--tui-font-text-s)}:host[data-size=l]{--tui-height: var(--tui-height-l);--tui-textarea-height: 6.75rem;font:var(--tui-font-text-m)}:host[data-size=m]._has-counter{--tui-textarea-height: 6.625rem}:host[data-size=l]._has-counter{--tui-textarea-height: 7.875rem}@supports (-webkit-hyphens: none){:host .t-pseudo-content,:host .t-input{text-wrap:balance;white-space:break-spaces}}.t-outline{min-block-size:inherit}.t-content{display:block;margin-block-start:0;margin-block-end:0;min-block-size:inherit;box-sizing:border-box;overflow:hidden;cursor:text}:host._disabled .t-content{cursor:auto;opacity:var(--tui-disabled-opacity)}:host:not(._expandable) .t-content{position:absolute;top:0;left:0;bottom:1px;right:0;min-block-size:auto}:host._has-counter:not(._expandable) .t-content{bottom:1.6875rem}:host._label-outside._has-counter:not(._expandable) .t-content{bottom:1rem}.t-wrapper{position:relative;inline-size:100%;block-size:100%;min-block-size:inherit;box-sizing:border-box;padding:calc((var(--tui-height) - 1.25rem) / 2) 0}:host[data-size=l]._label-outside .t-wrapper{padding:calc((var(--tui-height) - 1.5rem) / 2) 0}:host[data-size=m]:not(._label-outside) .t-wrapper{padding:calc((var(--tui-height) - 2.25rem) / 2) 0}:host[data-size=l]:not(._label-outside) .t-wrapper{padding:calc((var(--tui-height) - 2.625rem) / 2) 0}:host-context(table)[data-size=m]._label-outside .t-wrapper{padding-block-end:.75rem}:host-context(table)[data-size=l]._label-outside .t-wrapper{padding-block-end:1rem}.t-input-wrapper{min-block-size:inherit;inline-size:100%;flex:1}.t-relative{position:relative;min-block-size:inherit}.t-box{display:flex;min-block-size:calc(100% - 1rem);inline-size:100%;box-sizing:content-box}:host:not(._expandable) .t-box{block-size:calc(100% - 1rem)}:host:not(._expandable)._label-outside .t-box{block-size:100%}:host._has-counter._expandable .t-box{margin-block-end:1.25rem}:host[data-size=m]:not(._label-outside) .t-box{border-block-start:1rem solid transparent}:host[data-size=l]:not(._label-outside) .t-box{border-block-start:1.25rem solid transparent}.t-pseudo-content{white-space:pre-wrap;overflow-wrap:break-word;pointer-events:none;color:transparent;overflow:hidden;border:0 solid transparent;border-inline-start-width:var(--t-border-start, 0);border-inline-end-width:var(--t-border-end, 0)}:host[data-size=s] .t-pseudo-content,:host[data-size=m] .t-pseudo-content{padding:0 .75rem}:host[data-size=l] .t-pseudo-content{padding:0 1rem}.t-pseudo-content__extra{background-color:var(--tui-status-negative-pale)}.t-input{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;box-sizing:border-box;resize:none;overflow:hidden;outline:none;border-style:solid;border-color:transparent;border-inline-start-width:var(--t-border-start, 0);border-inline-end-width:var(--t-border-end, 0)}.t-input:-webkit-autofill,.t-input:-webkit-autofill:hover,.t-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}.t-input:not(:last-of-type){display:none}.t-input::placeholder{color:var(--tui-text-tertiary);opacity:0}:host._focused .t-input:not(:read-only)::placeholder{opacity:1}:host[data-size=s] .t-input,:host[data-size=m] .t-input{padding:0 .75rem;font:var(--tui-font-text-s)}:host[data-size=l] .t-input{padding:0 1rem;font:var(--tui-font-text-m)}@supports (-webkit-marquee-repetition: infinite) and (object-fit: fill){:host._ios .t-input{padding-inline-start:.8125rem}}.t-pseudo-content,.t-input{word-break:break-word}.t-placeholder{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;inline-size:100%;-webkit-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none;will-change:transform;transform:translateY(0);position:absolute;top:calc(var(--tui-height) / 2 - .625rem);left:0;max-inline-size:100%;border:0 solid transparent;border-inline-start-width:var(--t-border-start, 0);border-inline-end-width:var(--t-border-end, 0);box-sizing:border-box}@supports (-webkit-hyphens: none){.t-placeholder{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised{transform:translateY(-.625rem)}:host[data-size=m] .t-placeholder_raised{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}:host._invalid:not(._focused) .t-placeholder_raised,:host._invalid:not(._focused):hover .t-placeholder_raised{color:var(--tui-text-negative)}:host._focused .t-placeholder,:host[data-size=m]._focused._label-outside .t-placeholder,:host[data-size=l]._focused._label-outside .t-placeholder{color:var(--tui-text-tertiary)}:host[data-size=l] .t-placeholder{font:var(--tui-font-text-m);line-height:1.25rem}:host[data-size=l] .t-placeholder_raised{font-size:.8156rem}:host[data-size=m]._focused:not(._label-outside) .t-placeholder,:host[data-size=l]._focused:not(._label-outside) .t-placeholder{color:var(--tui-text-primary)}:host[data-size=s] .t-placeholder{padding:0 .75rem}:host[data-size=m] .t-placeholder{padding:0 .75rem}:host[data-size=l] .t-placeholder{padding:0 1rem}:host._label-outside .t-placeholder{overflow:initial;block-size:auto;white-space:initial}.t-icons{position:absolute;top:0;left:0;bottom:0;right:0;display:flex;justify-content:flex-end;pointer-events:none;padding:calc((var(--tui-height) - 1.5rem) / 2) 1rem}:host[data-size=m] .t-icons{padding:calc((var(--tui-height) - 1.5rem) / 2) .625rem}.t-icons>:not(:first-child){margin-inline-start:.25rem}.t-icon{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}.t-icon_left{margin-inline-end:auto}.t-cleaner{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto;border-width:.25rem}:host._readonly .t-cleaner,:host._disabled .t-cleaner{pointer-events:none}.t-caret{display:inline-block;block-size:1rem;inline-size:0}.t-counter{position:absolute;right:.75rem;bottom:.5rem;font:var(--tui-font-text-s);pointer-events:none;margin-block-start:auto;text-align:end;color:var(--tui-text-tertiary)}:host._readonly .t-textfield-icon ::ng-deep [tuiAppearance][data-appearance=icon]{pointer-events:none}@media (hover: hover) and (pointer: fine){:host:not(._readonly):not(._disabled):hover .t-textfield-icon ::ng-deep [tuiAppearance][data-appearance=icon]:after{color:var(--tui-text-secondary)}}\n"]
    }]
  }], null, {
    focusableElement: [{
      type: ViewChild,
      args: ["focusableElement"]
    }],
    textfield: [{
      type: ContentChild,
      args: [TuiTextfieldComponent, {
        read: ElementRef
      }]
    }],
    rows: [{
      type: Input
    }],
    maxLength: [{
      type: Input
    }],
    expandable: [{
      type: Input
    }]
  });
})();
var _TuiTextareaDirective = class _TuiTextareaDirective extends AbstractTuiTextfieldHost {
  onValueChange(value) {
    this.host.onValueChange(value);
  }
};
_TuiTextareaDirective.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiTextareaDirective_BaseFactory;
  return function TuiTextareaDirective_Factory(__ngFactoryType__) {
    return (\u0275TuiTextareaDirective_BaseFactory || (\u0275TuiTextareaDirective_BaseFactory = \u0275\u0275getInheritedFactory(_TuiTextareaDirective)))(__ngFactoryType__ || _TuiTextareaDirective);
  };
})();
_TuiTextareaDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiTextareaDirective,
  selectors: [["tui-textarea"]],
  standalone: false,
  features: [\u0275\u0275ProvidersFeature([tuiAsTextfieldHost(_TuiTextareaDirective)]), \u0275\u0275InheritDefinitionFeature]
});
var TuiTextareaDirective = _TuiTextareaDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextareaDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-textarea",
      providers: [tuiAsTextfieldHost(TuiTextareaDirective)]
    }]
  }], null, null);
})();
var _TuiTextareaModule = class _TuiTextareaModule {
};
_TuiTextareaModule.\u0275fac = function TuiTextareaModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTextareaModule)();
};
_TuiTextareaModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _TuiTextareaModule,
  declarations: [TuiTextareaComponent, TuiTextareaDirective],
  imports: [CommonModule, FormsModule, TuiScrollbar, TuiTooltipModule, TuiWrapperModule, TuiPrimitiveTextfieldModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiIcon, TuiAppearance],
  exports: [TuiTextareaComponent, TuiTextareaDirective, TuiTextfieldComponent, PolymorpheusOutlet, PolymorpheusTemplate]
});
_TuiTextareaModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, FormsModule, TuiScrollbar, TuiTooltipModule, TuiWrapperModule, TuiPrimitiveTextfieldModule, TuiIcon]
});
var TuiTextareaModule = _TuiTextareaModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextareaModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, TuiScrollbar, TuiTooltipModule, TuiWrapperModule, TuiPrimitiveTextfieldModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiIcon, TuiAppearance],
      declarations: [TuiTextareaComponent, TuiTextareaDirective],
      exports: [TuiTextareaComponent, TuiTextareaDirective, TuiTextfieldComponent, PolymorpheusOutlet, PolymorpheusTemplate]
    }]
  }], null, null);
})();

export {
  TuiTextareaComponent,
  TuiTextareaDirective,
  TuiTextareaModule
};
//# sourceMappingURL=chunk-SHTMTJ2D.js.map
