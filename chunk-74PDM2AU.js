import {
  TuiTextareaComponent,
  TuiTextareaDirective,
  TuiTextareaModule
} from "./chunk-SHTMTJ2D.js";
import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-QWXTPXAR.js";
import "./chunk-JISC74IQ.js";
import "./chunk-XLA4OBVG.js";
import {
  TUI_IMAGE_EDITOR_OPTIONS
} from "./chunk-CZJXMXHX.js";
import "./chunk-AJCAW3YX.js";
import "./chunk-2QRDY5ZS.js";
import "./chunk-PJJ4EG5U.js";
import "./chunk-LR6MFXG2.js";
import "./chunk-N3XZP6Z7.js";
import "./chunk-6JDH2PV3.js";
import "./chunk-7QK2CPSE.js";
import "./chunk-WBHAP4JC.js";
import "./chunk-X3PSOWX2.js";
import "./chunk-E3TKWIMT.js";
import "./chunk-HSMAYE7Z.js";
import "./chunk-ARYGUNWN.js";
import "./chunk-3L6ILX4W.js";
import "./chunk-M6TSJ4NT.js";
import "./chunk-BAXR2EDS.js";
import "./chunk-3MA5NXQZ.js";
import "./chunk-IG5NUA4T.js";
import "./chunk-LPOWL4X5.js";
import "./chunk-RURN6JQY.js";
import "./chunk-QOV567V2.js";
import "./chunk-UFW7RGXF.js";
import "./chunk-X7NG6AFM.js";
import "./chunk-RB5ZTUSK.js";
import "./chunk-TKB72JFC.js";
import "./chunk-ZL2NLOVI.js";
import "./chunk-WQSN4Q62.js";
import "./chunk-F47ZTIMH.js";
import "./chunk-H6B6ZN6C.js";
import "./chunk-VCEUECWR.js";
import "./chunk-EHYODUHD.js";
import "./chunk-K3KVBV5Y.js";
import {
  TuiAddonDoc,
  TuiDocCode,
  TuiDocDemo,
  TuiDocDocumentation,
  TuiDocDocumentationPropertyConnector,
  TuiDocPage
} from "./chunk-GP5GXI3G.js";
import "./chunk-VQYWSL72.js";
import "./chunk-4QQZBGYJ.js";
import "./chunk-PRS6ECY2.js";
import "./chunk-WWNKJV6L.js";
import "./chunk-2P6XZLUI.js";
import "./chunk-WG3DIIIA.js";
import "./chunk-JHR5K2RS.js";
import "./chunk-L5QVMFBS.js";
import {
  TuiNativeValidator,
  TuiValidator
} from "./chunk-M277MCZ7.js";
import {
  PolymorpheusOutlet,
  TUI_IS_E2E,
  TuiAppearance,
  TuiAutoFocus,
  TuiButton,
  TuiControl,
  TuiIdService,
  tuiAsControl
} from "./chunk-3VK442GK.js";
import "./chunk-XI2RCXXD.js";
import "./chunk-AHSN3FX6.js";
import "./chunk-3ZVYWLQ5.js";
import "./chunk-2X7NNA2Q.js";
import {
  TUI_EDITOR_DEFAULT_TOOLS,
  TuiEditorTool
} from "./chunk-NBZDMZNA.js";
import "./chunk-Q4JLRECA.js";
import {
  tuiWatch
} from "./chunk-6A2ZSXM6.js";
import "./chunk-LBJNUVBM.js";
import {
  DefaultValueAccessor,
  EMPTY_QUERY,
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControl,
  NgControlStatus,
  NgForOf,
  NgModel,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  TUI_DEFAULT_IDENTITY_MATCHER,
  TUI_FALSE_HANDLER,
  Validators,
  takeUntilDestroyed,
  tuiInjectElement,
  tuiIsString
} from "./chunk-2QWGY2YZ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Directive,
  InjectionToken,
  Input,
  ViewChildren,
  ViewEncapsulation,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-SLVEPEAC.js";
import "./chunk-CJ7OSSQR.js";
import "./chunk-TPMK677Z.js";
import "./chunk-Q6WMBPZ3.js";
import "./chunk-IN2LCJCD.js";
import "./chunk-G3QJNC4B.js";
import "./chunk-U65UEYRO.js";
import "./chunk-4MWRP73S.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-radio.mjs
var _c0 = ["type", "radio", "tuiRadio", ""];
var TUI_RADIO_DEFAULT_OPTIONS = {
  size: "m",
  appearance: ({
    checked
  }) => checked ? "primary" : "outline-grayscale"
};
var TUI_RADIO_OPTIONS = new InjectionToken(ngDevMode ? "TUI_RADIO_OPTIONS" : "", {
  factory: () => TUI_RADIO_DEFAULT_OPTIONS
});
var _TuiRadioComponent = class _TuiRadioComponent {
  constructor() {
    this.appearance = inject(TuiAppearance);
    this.destroyRef = inject(DestroyRef);
    this.cdr = inject(ChangeDetectorRef);
    this.options = inject(TUI_RADIO_OPTIONS);
    this.el = tuiInjectElement();
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.size = this.options.size;
  }
  ngOnInit() {
    this.control?.valueChanges?.pipe(tuiWatch(this.cdr), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  ngDoCheck() {
    this.appearance.tuiAppearance = tuiIsString(this.options.appearance) ? this.options.appearance : this.options.appearance(this.el);
  }
};
_TuiRadioComponent.\u0275fac = function TuiRadioComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiRadioComponent)();
};
_TuiRadioComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiRadioComponent,
  selectors: [["input", "type", "radio", "tuiRadio", ""]],
  hostVars: 4,
  hostBindings: function TuiRadioComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275hostProperty("disabled", !ctx.control || ctx.control.disabled);
      \u0275\u0275attribute("data-size", ctx.size);
      \u0275\u0275classProp("_readonly", !ctx.control);
    }
  },
  inputs: {
    size: "size"
  },
  features: [\u0275\u0275HostDirectivesFeature([{
    directive: TuiAppearance,
    inputs: ["tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus", "tuiAppearanceMode", "tuiAppearanceMode"]
  }, TuiNativeValidator])],
  attrs: _c0,
  decls: 0,
  vars: 0,
  template: function TuiRadioComponent_Template(rf, ctx) {
  },
  styles: ['[tuiRadio]{--t-size: 1.5rem;transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:var(--t-size);block-size:var(--t-size);cursor:pointer;margin:0;flex-shrink:0;border-radius:100%;color:var(--tui-text-primary-on-accent-1)}[tuiRadio]:disabled._readonly._readonly{opacity:1}[tuiRadio]:before{position:absolute;top:0;left:0;bottom:0;right:0;content:"";margin:auto;border-radius:100%;background:currentColor;transform:scale(0);transition-property:transform}[tuiRadio]:checked:before{transform:scale(.5)}[tuiRadio][data-size=s]{--t-size: 1rem}[tuiRadio]:invalid:not([data-mode]),[tuiRadio][data-mode~=invalid]{color:#fff}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiRadioComponent = _TuiRadioComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRadioComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: 'input[type="radio"][tuiRadio]',
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceMode"]
      }, TuiNativeValidator],
      host: {
        "[disabled]": "!control || control.disabled",
        "[attr.data-size]": "size",
        "[class._readonly]": "!control"
      },
      styles: ['[tuiRadio]{--t-size: 1.5rem;transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:var(--t-size);block-size:var(--t-size);cursor:pointer;margin:0;flex-shrink:0;border-radius:100%;color:var(--tui-text-primary-on-accent-1)}[tuiRadio]:disabled._readonly._readonly{opacity:1}[tuiRadio]:before{position:absolute;top:0;left:0;bottom:0;right:0;content:"";margin:auto;border-radius:100%;background:currentColor;transform:scale(0);transition-property:transform}[tuiRadio]:checked:before{transform:scale(.5)}[tuiRadio][data-size=s]{--t-size: 1rem}[tuiRadio]:invalid:not([data-mode]),[tuiRadio][data-mode~=invalid]{color:#fff}\n']
    }]
  }], null, {
    size: [{
      type: Input
    }]
  });
})();
var _TuiRadioDirective = class _TuiRadioDirective {
  constructor() {
    this.identityMatcher = TUI_DEFAULT_IDENTITY_MATCHER;
    const accessor = inject(RadioControlValueAccessor);
    const writeValue = accessor.writeValue.bind(accessor);
    accessor.writeValue = (value) => {
      if (this.identityMatcher(value, accessor.value)) {
        writeValue(accessor.value);
      } else {
        writeValue(value);
      }
    };
  }
};
_TuiRadioDirective.\u0275fac = function TuiRadioDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiRadioDirective)();
};
_TuiRadioDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiRadioDirective,
  selectors: [["input", "type", "radio", "tuiRadio", "", "identityMatcher", ""]],
  inputs: {
    identityMatcher: "identityMatcher"
  }
});
var TuiRadioDirective = _TuiRadioDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRadioDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: 'input[type="radio"][tuiRadio][identityMatcher]'
    }]
  }], function() {
    return [];
  }, {
    identityMatcher: [{
      type: Input
    }]
  });
})();
var TuiRadio = [TuiRadioComponent, TuiRadioDirective];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-radio-list.mjs
var _c02 = () => ({
  standalone: true
});
var _c1 = (a0, a1) => ({
  $implicit: a0,
  active: a1
});
function TuiRadioList_label_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const text_r3 = ctx.polymorpheusOutlet;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", text_r3, " ");
  }
}
function TuiRadioList_label_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 1)(1, "input", 2);
    \u0275\u0275listener("ngModelChange", function TuiRadioList_label_0_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, TuiRadioList_label_0_ng_container_2_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("t-item_disabled", ctx_r1.disabled() || ctx_r1.disabledItemHandler(item_r4));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disabled() || ctx_r1.disabledItemHandler(item_r4))("identityMatcher", ctx_r1.identityMatcher)("name", ctx_r1.name)("ngModel", ctx_r1.value())("ngModelOptions", \u0275\u0275pureFunction0(12, _c02))("size", ctx_r1.size)("tuiValidator", ctx_r1.validator())("value", item_r4);
    \u0275\u0275advance();
    \u0275\u0275property("polymorpheusOutlet", ctx_r1.itemContent)("polymorpheusOutletContext", \u0275\u0275pureFunction2(13, _c1, item_r4, ctx_r1.itemIsActive(item_r4)));
  }
}
var ERROR = () => ({
  error: "Invalid"
});
var _TuiRadioList = class _TuiRadioList extends TuiControl {
  constructor() {
    super(...arguments);
    this.controls = EMPTY_QUERY;
    this.id = inject(TuiIdService).generate();
    this.validator = computed(() => this.invalid() ? ERROR : Validators.nullValidator);
    this.items = [];
    this.size = "m";
    this.identityMatcher = TUI_DEFAULT_IDENTITY_MATCHER;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.itemContent = ({
      $implicit
    }) => String($implicit);
  }
  get name() {
    return `${this.control.name}-${this.id}`;
  }
  onFocusOut() {
    this.controls.forEach((control) => control.control?.markAsTouched());
    if (!this.touched()) {
      this.onTouched();
    }
  }
  itemIsActive(item) {
    return this.value() === null ? item === null : this.identityMatcher(this.value(), item);
  }
};
_TuiRadioList.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiRadioList_BaseFactory;
  return function TuiRadioList_Factory(__ngFactoryType__) {
    return (\u0275TuiRadioList_BaseFactory || (\u0275TuiRadioList_BaseFactory = \u0275\u0275getInheritedFactory(_TuiRadioList)))(__ngFactoryType__ || _TuiRadioList);
  };
})();
_TuiRadioList.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiRadioList,
  selectors: [["tui-radio-list"]],
  viewQuery: function TuiRadioList_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(NgControl, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.controls = _t);
    }
  },
  hostVars: 1,
  hostBindings: function TuiRadioList_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("focusout", function TuiRadioList_focusout_HostBindingHandler() {
        return ctx.onFocusOut();
      });
    }
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.size);
    }
  },
  inputs: {
    items: "items",
    size: "size",
    identityMatcher: "identityMatcher",
    disabledItemHandler: "disabledItemHandler",
    itemContent: "itemContent"
  },
  features: [\u0275\u0275ProvidersFeature([tuiAsControl(_TuiRadioList)]), \u0275\u0275InheritDefinitionFeature],
  decls: 1,
  vars: 1,
  consts: [["class", "t-item", 3, "t-item_disabled", 4, "ngFor", "ngForOf"], [1, "t-item"], ["tuiRadio", "", "type", "radio", 3, "ngModelChange", "disabled", "identityMatcher", "name", "ngModel", "ngModelOptions", "size", "tuiValidator", "value"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
  template: function TuiRadioList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TuiRadioList_label_0_Template, 3, 16, "label", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngForOf", ctx.items);
    }
  },
  dependencies: [FormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, NgForOf, PolymorpheusOutlet, TuiRadioComponent, TuiRadioDirective, TuiValidator],
  styles: ["tui-radio-list{display:flex;flex-direction:column;align-items:flex-start;gap:.75rem 1.5rem;font:var(--tui-font-text-m)}tui-radio-list[data-size=s],tui-radio-list[data-size=s] [tuiTitle]{font:var(--tui-font-text-ui-s)}tui-radio-list[data-size=s] [tuiSubtitle],tui-radio-list[data-size=s] [tuiTitle] [tuiSubtitle]{font:var(--tui-font-text-xs)}tui-radio-list[data-size=s]>.t-item,tui-radio-list[data-size=s] [tuiTitle]>.t-item{gap:.5rem}tui-radio-list [tuiTitle]{font:var(--tui-font-text-m)}tui-radio-list [tuiSubtitle]{color:var(--tui-text-secondary)}tui-radio-list>.t-item{display:flex;gap:.75rem}tui-radio-list>.t-item_disabled{opacity:var(--tui-disabled-opacity)}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiRadioList = _TuiRadioList;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRadioList, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-radio-list",
      imports: [FormsModule, NgForOf, PolymorpheusOutlet, TuiRadio, TuiValidator],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsControl(TuiRadioList)],
      host: {
        "[attr.data-size]": "size",
        "(focusout)": "onFocusOut()"
      },
      template: '<label\n    *ngFor="let item of items; index as index"\n    class="t-item"\n    [class.t-item_disabled]="disabled() || disabledItemHandler(item)"\n>\n    <input\n        tuiRadio\n        type="radio"\n        [disabled]="disabled() || disabledItemHandler(item)"\n        [identityMatcher]="identityMatcher"\n        [name]="name"\n        [ngModel]="value()"\n        [ngModelOptions]="{standalone: true}"\n        [size]="size"\n        [tuiValidator]="validator()"\n        [value]="item"\n        (ngModelChange)="onChange($event)"\n    />\n    <ng-container *polymorpheusOutlet="itemContent as text; context: {$implicit: item, active: itemIsActive(item)}">\n        {{ text }}\n    </ng-container>\n</label>\n',
      styles: ["tui-radio-list{display:flex;flex-direction:column;align-items:flex-start;gap:.75rem 1.5rem;font:var(--tui-font-text-m)}tui-radio-list[data-size=s],tui-radio-list[data-size=s] [tuiTitle]{font:var(--tui-font-text-ui-s)}tui-radio-list[data-size=s] [tuiSubtitle],tui-radio-list[data-size=s] [tuiTitle] [tuiSubtitle]{font:var(--tui-font-text-xs)}tui-radio-list[data-size=s]>.t-item,tui-radio-list[data-size=s] [tuiTitle]>.t-item{gap:.5rem}tui-radio-list [tuiTitle]{font:var(--tui-font-text-m)}tui-radio-list [tuiSubtitle]{color:var(--tui-text-secondary)}tui-radio-list>.t-item{display:flex;gap:.75rem}tui-radio-list>.t-item_disabled{opacity:var(--tui-disabled-opacity)}\n"]
    }]
  }], null, {
    controls: [{
      type: ViewChildren,
      args: [NgControl]
    }],
    items: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    identityMatcher: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    itemContent: [{
      type: Input
    }]
  });
})();

// projects/demo/src/app/pages/starter/index.ts
var _c03 = () => [];
var _c12 = () => ({ updateOn: "change" });
var _c2 = () => ({ updateOn: "blur" });
function TuiEditorStarter_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tui-textarea", 23);
    \u0275\u0275listener("ngModelChange", function TuiEditorStarter_Conditional_7_Conditional_4_Template_tui_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.control.setValue($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("expandable", true)("ngModel", ctx_r1.control.value)("ngModelOptions", \u0275\u0275pureFunction0(3, _c12));
  }
}
function TuiEditorStarter_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tui-textarea", 23);
    \u0275\u0275listener("ngModelChange", function TuiEditorStarter_Conditional_7_Conditional_5_Template_tui_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.control.setValue($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("expandable", true)("ngModel", ctx_r1.control.value)("ngModelOptions", \u0275\u0275pureFunction0(3, _c2));
  }
}
function TuiEditorStarter_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, "Update HTML:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tui-radio-list", 21);
    \u0275\u0275twoWayListener("ngModelChange", function TuiEditorStarter_Conditional_7_Template_tui_radio_list_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.updateOn, $event) || (ctx_r1.updateOn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "br");
    \u0275\u0275template(4, TuiEditorStarter_Conditional_7_Conditional_4_Template, 1, 4, "tui-textarea", 22)(5, TuiEditorStarter_Conditional_7_Conditional_5_Template, 1, 4, "tui-textarea", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("flex-direction", "row")("width", "max-content");
    \u0275\u0275property("items", ctx_r1.updates);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.updateOn);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.updateOn === "change" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.updateOn === "blur" ? 5 : -1);
  }
}
function TuiEditorStarter_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Just demo ");
  }
}
function TuiEditorStarter_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Disabled state (use ");
    \u0275\u0275elementStart(1, "code");
    \u0275\u0275text(2, "formControl.disable()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " ) ");
  }
}
function TuiEditorStarter_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Readonly mode ");
  }
}
function TuiEditorStarter_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Floating toolbar ");
  }
}
function TuiEditorStarter_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Allowed edit tools ");
  }
}
function TuiEditorStarter_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Example pass HTML code ");
  }
}
function TuiEditorStarter_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Placeholder shown on empty focused input ");
  }
}
function TuiEditorStarter_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, ' Value of CSS-property "min-height" ');
  }
}
function TuiEditorStarter_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, ' Value of CSS-property "max-height" ');
  }
}
function TuiEditorStarter_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Emits when editor is loaded ");
  }
}
var _TuiEditorStarter = class _TuiEditorStarter {
  constructor() {
    this.template = import("./chunk-3HPMMNUL.js");
    this.component = import("./chunk-DM66UUZA.js");
    this.exampleStyles = import("./chunk-R4IGWLHI.js");
    this.exampleIcons = import("./chunk-UPHNWZPH.js");
    this.isE2E = inject(TUI_IS_E2E);
    this.control = new FormControl(
      /* HTML */
      `
        <h2>What is Lorem Ipsum?</h2>
        <p>
            <a
                target="_blank"
                href="https://www.google.com/search?q=wikipedia&sca_esv=563020551&sxsrf=AB5stBhNcprCNZotMYrhf_8rPUA7JwZ4XQ%3A1693989718615&ei=Vjv4ZKGaJaPMwPAPx5m68Ag&ved=0ahUKEwihnbm7y5WBAxUjJhAIHceMDo4Q4dUDCBA&uact=5&oq=wikipedia&gs_lp=Egxnd3Mtd2l6LXNlcnAiCXdpa2lwZWRpYTIKEAAYigUYsQMYQzIKEAAYgAQYFBiHAjIHEAAYigUYQzILEAAYgAQYsQMYgwEyBxAAGIoFGEMyBxAAGIoFGEMyCBAAGIAEGLEDMgcQABiKBRhDMgUQABiABDIFEAAYgARIqDZQAFjRMXAAeAGQAQCYAYEBoAG4B6oBAzMuNrgBA8gBAPgBAcICBxAjGIoFGCfCAhEQLhiABBixAxiDARjHARjRA8ICCxAuGIAEGLEDGIMBwgINEAAYigUYsQMYgwEYQ8ICExAuGIoFGLEDGIMBGMcBGNEDGEPCAgoQLhiKBRjUAhhDwgINEAAYgAQYsQMYgwEYCsICDRAuGIoFGMcBGNEDGEPiAwQYACBBiAYB&sclient=gws-wiz-serp"
            >
                Lorem Ipsum
            </a>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
        </p>
    `
    );
    this.placeholder = "";
    this.minHeight = "";
    this.maxHeight = "";
    this.updates = ["change", "blur"];
    this.updateOn = this.updates[0];
    this.toolsVariants = [
      Array.from(TUI_EDITOR_DEFAULT_TOOLS).filter((tool) => tool !== "image"),
      [
        TuiEditorTool.Bold,
        TuiEditorTool.Italic,
        TuiEditorTool.Strikethrough,
        TuiEditorTool.HR
      ],
      [TuiEditorTool.Table, TuiEditorTool.CellColor]
    ];
    this.tools = this.toolsVariants[0];
    this.readOnly = false;
    this.floating = false;
    this.preview = true;
  }
  get disabled() {
    return this.control.disabled;
  }
  set disabled(value) {
    this.control[value ? "disable" : "enable"]();
  }
};
_TuiEditorStarter.\u0275fac = function TuiEditorStarter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiEditorStarter)();
};
_TuiEditorStarter.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TuiEditorStarter, selectors: [["editor-starter-page"]], features: [\u0275\u0275ProvidersFeature([
  provideTuiEditor({
    image: true,
    details: true,
    detailsSummary: true,
    detailsContent: true
  }),
  {
    provide: TUI_IMAGE_EDITOR_OPTIONS,
    useValue: {
      minWidth: 100,
      maxWidth: 800
    }
  }
])], decls: 30, vars: 27, consts: [[3, "sticky"], [1, "container"], [3, "floatingToolbar", "formControl", "placeholder", "readOnly", "tools", "tuiAutoFocus"], ["appearance", "outline", "size", "s", "tuiButton", "", "type", "button", 1, "tui-space_top-3", 3, "click"], ["documentationPropertyName", "Show preview", "documentationPropertyType", "boolean", 3, "documentationPropertyValueChange", "documentationPropertyValue"], ["documentationPropertyName", "disabled", "documentationPropertyType", "boolean", 3, "documentationPropertyValueChange", "documentationPropertyValue"], ["documentationPropertyName", "[readOnly]", "documentationPropertyType", "boolean", 3, "documentationPropertyValueChange", "documentationPropertyValue"], ["documentationPropertyName", "[floatingToolbar]", "documentationPropertyType", "boolean", 3, "documentationPropertyValueChange", "documentationPropertyValue"], ["documentationPropertyMode", "input", "documentationPropertyName", "tools", "documentationPropertyType", "readonly TuiEditorToolType[] | Set<TuiEditorToolType>", 3, "documentationPropertyValueChange", "documentationPropertyValues", "documentationPropertyValue"], ["documentationPropertyMode", "input", "documentationPropertyName", "ngModel", "documentationPropertyType", "string", 3, "documentationPropertyValueChange", "documentationPropertyValue"], ["documentationPropertyMode", "input", "documentationPropertyName", "placeholder", "documentationPropertyType", "string", 3, "documentationPropertyValueChange", "documentationPropertyValue"], ["documentationPropertyMode", "input", "documentationPropertyName", "style.min-height", "documentationPropertyType", "string", 3, "documentationPropertyValueChange", "documentationPropertyValue"], ["documentationPropertyMode", "input", "documentationPropertyName", "style.max-height", "documentationPropertyType", "string", 3, "documentationPropertyValueChange", "documentationPropertyValue"], ["documentationPropertyMode", "output", "documentationPropertyName", "loaded", "documentationPropertyType", "boolean"], ["heading", "How to use"], ["code", "npm i @taiga-ui/{cdk,core,kit,icons,editor}"], [1, "b-demo-steps"], ["filename", "styles.less", 3, "code"], ["filename", "angular.json (icons are not included in the bundle)", 3, "code"], ["filename", "app.component.html", 3, "code"], ["filename", "app.component.ts", 3, "code"], ["size", "s", 3, "ngModelChange", "items", "ngModel"], [3, "expandable", "ngModel", "ngModelOptions"], [3, "ngModelChange", "expandable", "ngModel", "ngModelOptions"]], template: function TuiEditorStarter_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-doc-page")(1, "tui-doc-demo", 0)(2, "div", 1)(3, "tui-editor", 2);
    \u0275\u0275text(4, " Start typing ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 3);
    \u0275\u0275listener("click", function TuiEditorStarter_Template_button_click_5_listener() {
      return ctx.control.setValue("");
    });
    \u0275\u0275text(6, " Reset ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TuiEditorStarter_Conditional_7_Template, 6, 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "tui-doc-documentation");
    \u0275\u0275template(9, TuiEditorStarter_ng_template_9_Template, 1, 0, "ng-template", 4);
    \u0275\u0275twoWayListener("documentationPropertyValueChange", function TuiEditorStarter_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.preview, $event) || (ctx.preview = $event);
      return $event;
    });
    \u0275\u0275template(10, TuiEditorStarter_ng_template_10_Template, 4, 0, "ng-template", 5);
    \u0275\u0275twoWayListener("documentationPropertyValueChange", function TuiEditorStarter_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.disabled, $event) || (ctx.disabled = $event);
      return $event;
    });
    \u0275\u0275template(11, TuiEditorStarter_ng_template_11_Template, 1, 0, "ng-template", 6);
    \u0275\u0275twoWayListener("documentationPropertyValueChange", function TuiEditorStarter_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.readOnly, $event) || (ctx.readOnly = $event);
      return $event;
    });
    \u0275\u0275template(12, TuiEditorStarter_ng_template_12_Template, 1, 0, "ng-template", 7);
    \u0275\u0275twoWayListener("documentationPropertyValueChange", function TuiEditorStarter_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.floating, $event) || (ctx.floating = $event);
      return $event;
    });
    \u0275\u0275template(13, TuiEditorStarter_ng_template_13_Template, 1, 0, "ng-template", 8);
    \u0275\u0275twoWayListener("documentationPropertyValueChange", function TuiEditorStarter_Template_ng_template_documentationPropertyValueChange_13_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.tools, $event) || (ctx.tools = $event);
      return $event;
    });
    \u0275\u0275template(14, TuiEditorStarter_ng_template_14_Template, 1, 0, "ng-template", 9);
    \u0275\u0275listener("documentationPropertyValueChange", function TuiEditorStarter_Template_ng_template_documentationPropertyValueChange_14_listener($event) {
      return ctx.control.setValue($event);
    });
    \u0275\u0275template(15, TuiEditorStarter_ng_template_15_Template, 1, 0, "ng-template", 10);
    \u0275\u0275twoWayListener("documentationPropertyValueChange", function TuiEditorStarter_Template_ng_template_documentationPropertyValueChange_15_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.placeholder, $event) || (ctx.placeholder = $event);
      return $event;
    });
    \u0275\u0275template(16, TuiEditorStarter_ng_template_16_Template, 1, 0, "ng-template", 11);
    \u0275\u0275twoWayListener("documentationPropertyValueChange", function TuiEditorStarter_Template_ng_template_documentationPropertyValueChange_16_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.minHeight, $event) || (ctx.minHeight = $event);
      return $event;
    });
    \u0275\u0275template(17, TuiEditorStarter_ng_template_17_Template, 1, 0, "ng-template", 12);
    \u0275\u0275twoWayListener("documentationPropertyValueChange", function TuiEditorStarter_Template_ng_template_documentationPropertyValueChange_17_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.maxHeight, $event) || (ctx.maxHeight = $event);
      return $event;
    });
    \u0275\u0275template(18, TuiEditorStarter_ng_template_18_Template, 1, 0, "ng-template", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "tui-doc-documentation", 14);
    \u0275\u0275element(20, "tui-doc-code", 15);
    \u0275\u0275elementStart(21, "ol", 16)(22, "li");
    \u0275\u0275element(23, "tui-doc-code", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li");
    \u0275\u0275element(25, "tui-doc-code", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "li");
    \u0275\u0275element(27, "tui-doc-code", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "li");
    \u0275\u0275element(29, "tui-doc-code", 20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    \u0275\u0275advance();
    \u0275\u0275property("sticky", false);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("max-height", ctx.maxHeight)("min-height", ctx.minHeight);
    \u0275\u0275property("floatingToolbar", ctx.floating)("formControl", ctx.control)("placeholder", ctx.placeholder)("readOnly", ctx.readOnly)("tools", (tmp_7_0 = ctx.tools) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : \u0275\u0275pureFunction0(26, _c03))("tuiAutoFocus", !ctx.isE2E);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.preview ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("documentationPropertyValue", ctx.preview);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("documentationPropertyValue", ctx.disabled);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("documentationPropertyValue", ctx.readOnly);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("documentationPropertyValue", ctx.floating);
    \u0275\u0275advance();
    \u0275\u0275property("documentationPropertyValues", ctx.toolsVariants);
    \u0275\u0275twoWayProperty("documentationPropertyValue", ctx.tools);
    \u0275\u0275advance();
    \u0275\u0275property("documentationPropertyValue", ctx.control.value);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("documentationPropertyValue", ctx.placeholder);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("documentationPropertyValue", ctx.minHeight);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("documentationPropertyValue", ctx.maxHeight);
    \u0275\u0275advance(6);
    \u0275\u0275property("code", ctx.exampleStyles);
    \u0275\u0275advance(2);
    \u0275\u0275property("code", ctx.exampleIcons);
    \u0275\u0275advance(2);
    \u0275\u0275property("code", ctx.template);
    \u0275\u0275advance(2);
    \u0275\u0275property("code", ctx.component);
  }
}, dependencies: [
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule,
  FormControlDirective,
  TuiDocDemo,
  TuiDocCode,
  TuiDocDocumentation,
  TuiDocDocumentationPropertyConnector,
  TuiDocPage,
  TuiAutoFocus,
  TuiButton,
  TuiEditor,
  TuiRadioList,
  TuiTextareaModule,
  TuiTextareaComponent,
  TuiTextareaDirective
], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var TuiEditorStarter = _TuiEditorStarter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiEditorStarter, [{
    type: Component,
    args: [{ selector: "editor-starter-page", imports: [
      FormsModule,
      ReactiveFormsModule,
      TuiAddonDoc,
      TuiAutoFocus,
      TuiButton,
      TuiEditor,
      TuiRadioList,
      TuiTextareaModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor({
        image: true,
        details: true,
        detailsSummary: true,
        detailsContent: true
      }),
      {
        provide: TUI_IMAGE_EDITOR_OPTIONS,
        useValue: {
          minWidth: 100,
          maxWidth: 800
        }
      }
    ], template: `<tui-doc-page>
    <tui-doc-demo [sticky]="false">
        <div class="container">
            <tui-editor
                [floatingToolbar]="floating"
                [formControl]="control"
                [placeholder]="placeholder"
                [readOnly]="readOnly"
                [style.max-height]="maxHeight"
                [style.min-height]="minHeight"
                [tools]="tools ?? []"
                [tuiAutoFocus]="!isE2E"
            >
                Start typing
            </tui-editor>

            <button
                appearance="outline"
                size="s"
                tuiButton
                type="button"
                class="tui-space_top-3"
                (click)="control.setValue('')"
            >
                Reset
            </button>

            @if (preview) {
                <h4>Update HTML:</h4>

                <tui-radio-list
                    size="s"
                    [items]="updates"
                    [style.flex-direction]="'row'"
                    [style.width]="'max-content'"
                    [(ngModel)]="updateOn"
                />

                <br />

                @if (updateOn === 'change') {
                    <tui-textarea
                        [expandable]="true"
                        [ngModel]="control.value"
                        [ngModelOptions]="{updateOn: 'change'}"
                        (ngModelChange)="control.setValue($event)"
                    />
                }

                @if (updateOn === 'blur') {
                    <tui-textarea
                        [expandable]="true"
                        [ngModel]="control.value"
                        [ngModelOptions]="{updateOn: 'blur'}"
                        (ngModelChange)="control.setValue($event)"
                    />
                }
            }
        </div>
    </tui-doc-demo>
    <tui-doc-documentation>
        <ng-template
            documentationPropertyName="Show preview"
            documentationPropertyType="boolean"
            [(documentationPropertyValue)]="preview"
        >
            Just demo
        </ng-template>
        <ng-template
            documentationPropertyName="disabled"
            documentationPropertyType="boolean"
            [(documentationPropertyValue)]="disabled"
        >
            Disabled state (use
            <code>formControl.disable()</code>
            )
        </ng-template>
        <ng-template
            documentationPropertyName="[readOnly]"
            documentationPropertyType="boolean"
            [(documentationPropertyValue)]="readOnly"
        >
            Readonly mode
        </ng-template>
        <ng-template
            documentationPropertyName="[floatingToolbar]"
            documentationPropertyType="boolean"
            [(documentationPropertyValue)]="floating"
        >
            Floating toolbar
        </ng-template>
        <ng-template
            documentationPropertyMode="input"
            documentationPropertyName="tools"
            documentationPropertyType="readonly TuiEditorToolType[] | Set<TuiEditorToolType>"
            [documentationPropertyValues]="toolsVariants"
            [(documentationPropertyValue)]="tools"
        >
            Allowed edit tools
        </ng-template>
        <ng-template
            documentationPropertyMode="input"
            documentationPropertyName="ngModel"
            documentationPropertyType="string"
            [documentationPropertyValue]="control.value"
            (documentationPropertyValueChange)="control.setValue($event)"
        >
            Example pass HTML code
        </ng-template>
        <ng-template
            documentationPropertyMode="input"
            documentationPropertyName="placeholder"
            documentationPropertyType="string"
            [(documentationPropertyValue)]="placeholder"
        >
            Placeholder shown on empty focused input
        </ng-template>
        <ng-template
            documentationPropertyMode="input"
            documentationPropertyName="style.min-height"
            documentationPropertyType="string"
            [(documentationPropertyValue)]="minHeight"
        >
            Value of CSS-property "min-height"
        </ng-template>
        <ng-template
            documentationPropertyMode="input"
            documentationPropertyName="style.max-height"
            documentationPropertyType="string"
            [(documentationPropertyValue)]="maxHeight"
        >
            Value of CSS-property "max-height"
        </ng-template>
        <ng-template
            documentationPropertyMode="output"
            documentationPropertyName="loaded"
            documentationPropertyType="boolean"
        >
            Emits when editor is loaded
        </ng-template>
    </tui-doc-documentation>
    <tui-doc-documentation heading="How to use">
        <tui-doc-code code="npm i &#64;taiga-ui/{cdk,core,kit,icons,editor}" />

        <ol class="b-demo-steps">
            <li>
                <tui-doc-code
                    filename="styles.less"
                    [code]="exampleStyles"
                />
            </li>

            <li>
                <tui-doc-code
                    filename="angular.json (icons are not included in the bundle)"
                    [code]="exampleIcons"
                />
            </li>

            <li>
                <tui-doc-code
                    filename="app.component.html"
                    [code]="template"
                />
            </li>

            <li>
                <tui-doc-code
                    filename="app.component.ts"
                    [code]="component"
                />
            </li>
        </ol>
    </tui-doc-documentation>
</tui-doc-page>
`, styles: ["/* projects/demo/src/app/pages/starter/index.less */\n.container {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TuiEditorStarter, { className: "TuiEditorStarter", filePath: "projects/demo/src/app/pages/starter/index.ts", lineNumber: 48 });
})();
export {
  TuiEditorStarter as default
};
//# sourceMappingURL=chunk-74PDM2AU.js.map
