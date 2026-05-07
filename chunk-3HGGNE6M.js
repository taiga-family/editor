import {
  TuiTextarea,
  TuiTextareaComponent
} from "./chunk-G5BXP2GU.js";
import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-LDD6Y27D.js";
import "./chunk-WCJAXZXO.js";
import "./chunk-CD3ZDPWT.js";
import {
  TUI_IMAGE_EDITOR_OPTIONS
} from "./chunk-J5UAEM45.js";
import "./chunk-ZB2SK7NT.js";
import "./chunk-KFJ6GJTL.js";
import "./chunk-PJJ4EG5U.js";
import "./chunk-M6TSJ4NT.js";
import "./chunk-LR6MFXG2.js";
import "./chunk-N3XZP6Z7.js";
import "./chunk-6JDH2PV3.js";
import "./chunk-X7NG6AFM.js";
import "./chunk-7QK2CPSE.js";
import "./chunk-WBHAP4JC.js";
import "./chunk-X3PSOWX2.js";
import "./chunk-E3TKWIMT.js";
import "./chunk-HSMAYE7Z.js";
import "./chunk-ARYGUNWN.js";
import "./chunk-3L6ILX4W.js";
import "./chunk-K3KVBV5Y.js";
import "./chunk-BAXR2EDS.js";
import "./chunk-3MA5NXQZ.js";
import "./chunk-IG5NUA4T.js";
import "./chunk-LPOWL4X5.js";
import "./chunk-RURN6JQY.js";
import "./chunk-QOV567V2.js";
import "./chunk-SB5PRQWC.js";
import "./chunk-G3QJNC4B.js";
import "./chunk-7CX5NSUY.js";
import "./chunk-RS2S3DLU.js";
import "./chunk-ZL2NLOVI.js";
import "./chunk-WQSN4Q62.js";
import "./chunk-F47ZTIMH.js";
import "./chunk-H6B6ZN6C.js";
import "./chunk-VCEUECWR.js";
import "./chunk-EHYODUHD.js";
import {
  TuiAddonDoc,
  TuiDocAPI,
  TuiDocAPIItem,
  TuiDocCode,
  TuiDocDemo,
  TuiDocPage
} from "./chunk-5OYCAE6U.js";
import "./chunk-N2I4NDEC.js";
import "./chunk-43T2765T.js";
import "./chunk-RGU5X6JK.js";
import "./chunk-6VH6DR7W.js";
import "./chunk-GLG7L24I.js";
import {
  TUI_ITEMS_HANDLERS,
  TuiControl,
  TuiRadio,
  TuiRadioComponent,
  TuiRadioDirective,
  TuiTextfieldComponent,
  TuiValidator,
  TuiWithItemsHandlers,
  tuiAsControl
} from "./chunk-TO6IF4KK.js";
import {
  PolymorpheusOutlet,
  TuiAutoFocus,
  TuiButton,
  WA_IS_E2E
} from "./chunk-2LK3XWNF.js";
import "./chunk-UK3D2IJN.js";
import "./chunk-CZCJZTAA.js";
import "./chunk-LTRKP6XS.js";
import "./chunk-AHSN3FX6.js";
import "./chunk-OR7YRS4P.js";
import "./chunk-2X7NNA2Q.js";
import {
  TUI_EDITOR_DEFAULT_TOOLS,
  TuiEditorTool
} from "./chunk-WUF6K6RJ.js";
import "./chunk-WLOLI4OQ.js";
import {
  TUI_STRINGIFY,
  TUI_VERSION
} from "./chunk-UO32WQJY.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControl,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  Validators,
  tuiGenerateId
} from "./chunk-XQBFNBOU.js";
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  setClassMetadata,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-QZKNXBAU.js";
import "./chunk-TPMK677Z.js";
import "./chunk-Q6WMBPZ3.js";
import "./chunk-IN2LCJCD.js";
import "./chunk-U65UEYRO.js";
import "./chunk-4MWRP73S.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-radio-list.mjs
var _c0 = () => ({
  standalone: true
});
var _c1 = (a0, a1) => ({
  $implicit: a0,
  active: a1
});
function TuiRadioList_For_1_ng_container_2_Template(rf, ctx) {
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
function TuiRadioList_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 1)(1, "input", 2);
    \u0275\u0275listener("ngModelChange", function TuiRadioList_For_1_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, TuiRadioList_For_1_ng_container_2_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("t-item_disabled", ctx_r1.disabled() || ctx_r1.handlers.disabledItemHandler()(item_r4));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disabled() || ctx_r1.handlers.disabledItemHandler()(item_r4))("identityMatcher", ctx_r1.handlers.identityMatcher())("name", ctx_r1.name)("ngModel", ctx_r1.value())("ngModelOptions", \u0275\u0275pureFunction0(12, _c0))("size", ctx_r1.size())("tuiValidator", ctx_r1.validator())("value", item_r4);
    \u0275\u0275advance();
    \u0275\u0275property("polymorpheusOutlet", ctx_r1.itemContent())("polymorpheusOutletContext", \u0275\u0275pureFunction2(13, _c1, item_r4, ctx_r1.itemIsActive(item_r4)));
  }
}
var ERROR = () => ({
  error: "Invalid"
});
var _TuiRadioList = class _TuiRadioList extends TuiControl {
  constructor() {
    super(...arguments);
    this.controls = viewChildren(NgControl);
    this.id = tuiGenerateId();
    this.handlers = inject(TUI_ITEMS_HANDLERS);
    this.validator = computed(() => this.invalid() ? ERROR : Validators.nullValidator);
    this.items = input();
    this.size = input("m");
    this.itemContent = input(TUI_STRINGIFY);
  }
  get name() {
    return `${this.control.name}-${this.id}`;
  }
  onFocusOut() {
    this.controls().forEach((control) => control.control?.markAsTouched());
    if (!this.touched()) {
      this.onTouched();
    }
  }
  itemIsActive(item) {
    return this.value() === null ? item === null : this.handlers.identityMatcher()(this.value(), item);
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
      \u0275\u0275viewQuerySignal(ctx.controls, NgControl, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  },
  hostAttrs: ["role", "radiogroup", "data-tui-version", "5.4.0"],
  hostVars: 1,
  hostBindings: function TuiRadioList_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("focusout", function TuiRadioList_focusout_HostBindingHandler() {
        return ctx.onFocusOut();
      });
    }
    if (rf & 2) {
      \u0275\u0275attribute("data-size", ctx.size());
    }
  },
  inputs: {
    items: [1, "items"],
    size: [1, "size"],
    itemContent: [1, "itemContent"]
  },
  features: [\u0275\u0275ProvidersFeature([tuiAsControl(_TuiRadioList)]), \u0275\u0275HostDirectivesFeature([TuiWithItemsHandlers]), \u0275\u0275InheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [[1, "t-item", 3, "t-item_disabled"], [1, "t-item"], ["tuiRadio", "", "type", "radio", 3, "ngModelChange", "disabled", "identityMatcher", "name", "ngModel", "ngModelOptions", "size", "tuiValidator", "value"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
  template: function TuiRadioList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275repeaterCreate(0, TuiRadioList_For_1_Template, 3, 16, "label", 0, \u0275\u0275repeaterTrackByIdentity);
    }
    if (rf & 2) {
      \u0275\u0275repeater(ctx.items());
    }
  },
  dependencies: [FormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, PolymorpheusOutlet, TuiRadioComponent, TuiRadioDirective, TuiValidator],
  styles: ['tui-radio-list:where(*[data-tui-version="5.4.0"]){display:flex;flex-direction:column;align-items:flex-start;gap:.75rem 1.5rem;font:var(--tui-typography-body-m)}tui-radio-list:where(*[data-tui-version="5.4.0"])[data-size=s],tui-radio-list:where(*[data-tui-version="5.4.0"])[data-size=s] [tuiTitle]{font:var(--tui-typography-ui-s)}tui-radio-list:where(*[data-tui-version="5.4.0"])[data-size=s] [tuiSubtitle],tui-radio-list:where(*[data-tui-version="5.4.0"])[data-size=s] [tuiTitle] [tuiSubtitle]{font:var(--tui-typography-body-xs)}tui-radio-list:where(*[data-tui-version="5.4.0"])[data-size=s]>.t-item,tui-radio-list:where(*[data-tui-version="5.4.0"])[data-size=s] [tuiTitle]>.t-item{gap:.5rem}tui-radio-list:where(*[data-tui-version="5.4.0"]) [tuiTitle]{font:var(--tui-typography-body-m)}tui-radio-list:where(*[data-tui-version="5.4.0"]) [tuiSubtitle]{color:var(--tui-text-secondary)}tui-radio-list:where(*[data-tui-version="5.4.0"])>.t-item{display:flex;gap:.75rem}tui-radio-list:where(*[data-tui-version="5.4.0"])>.t-item_disabled{opacity:var(--tui-disabled-opacity)}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiRadioList = _TuiRadioList;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRadioList, [{
    type: Component,
    args: [{
      selector: "tui-radio-list",
      imports: [FormsModule, PolymorpheusOutlet, TuiRadio, TuiValidator],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsControl(TuiRadioList)],
      hostDirectives: [TuiWithItemsHandlers],
      host: {
        role: "radiogroup",
        "data-tui-version": TUI_VERSION,
        "[attr.data-size]": "size()",
        "(focusout)": "onFocusOut()"
      },
      template: '@for (item of items(); track item) {\n    <label\n        class="t-item"\n        [class.t-item_disabled]="disabled() || handlers.disabledItemHandler()(item)"\n    >\n        <input\n            tuiRadio\n            type="radio"\n            [disabled]="disabled() || handlers.disabledItemHandler()(item)"\n            [identityMatcher]="handlers.identityMatcher()"\n            [name]="name"\n            [ngModel]="value()"\n            [ngModelOptions]="{standalone: true}"\n            [size]="size()"\n            [tuiValidator]="validator()"\n            [value]="item"\n            (ngModelChange)="onChange($event)"\n        />\n        <ng-container\n            *polymorpheusOutlet="itemContent() as text; context: {$implicit: item, active: itemIsActive(item)}"\n        >\n            {{ text }}\n        </ng-container>\n    </label>\n}\n',
      styles: ['tui-radio-list:where(*[data-tui-version="5.4.0"]){display:flex;flex-direction:column;align-items:flex-start;gap:.75rem 1.5rem;font:var(--tui-typography-body-m)}tui-radio-list:where(*[data-tui-version="5.4.0"])[data-size=s],tui-radio-list:where(*[data-tui-version="5.4.0"])[data-size=s] [tuiTitle]{font:var(--tui-typography-ui-s)}tui-radio-list:where(*[data-tui-version="5.4.0"])[data-size=s] [tuiSubtitle],tui-radio-list:where(*[data-tui-version="5.4.0"])[data-size=s] [tuiTitle] [tuiSubtitle]{font:var(--tui-typography-body-xs)}tui-radio-list:where(*[data-tui-version="5.4.0"])[data-size=s]>.t-item,tui-radio-list:where(*[data-tui-version="5.4.0"])[data-size=s] [tuiTitle]>.t-item{gap:.5rem}tui-radio-list:where(*[data-tui-version="5.4.0"]) [tuiTitle]{font:var(--tui-typography-body-m)}tui-radio-list:where(*[data-tui-version="5.4.0"]) [tuiSubtitle]{color:var(--tui-text-secondary)}tui-radio-list:where(*[data-tui-version="5.4.0"])>.t-item{display:flex;gap:.75rem}tui-radio-list:where(*[data-tui-version="5.4.0"])>.t-item_disabled{opacity:var(--tui-disabled-opacity)}\n']
    }]
  }], null, null);
})();

// projects/demo/src/app/pages/starter/index.ts
var _c02 = () => [];
var _c12 = () => ({ updateOn: "change" });
var _c2 = () => ({ updateOn: "blur" });
function TuiEditorStarter_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tui-textfield")(1, "textarea", 22);
    \u0275\u0275listener("ngModelChange", function TuiEditorStarter_Conditional_7_Conditional_4_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.control.setValue($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.control.value)("ngModelOptions", \u0275\u0275pureFunction0(2, _c12));
  }
}
function TuiEditorStarter_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tui-textfield")(1, "textarea", 22);
    \u0275\u0275listener("ngModelChange", function TuiEditorStarter_Conditional_7_Conditional_5_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.control.setValue($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.control.value)("ngModelOptions", \u0275\u0275pureFunction0(2, _c2));
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
    \u0275\u0275template(4, TuiEditorStarter_Conditional_7_Conditional_4_Template, 2, 3, "tui-textfield")(5, TuiEditorStarter_Conditional_7_Conditional_5_Template, 2, 3, "tui-textfield");
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
var _TuiEditorStarter = class _TuiEditorStarter {
  constructor() {
    this.template = import("./chunk-3HPMMNUL.js");
    this.component = import("./chunk-DM66UUZA.js");
    this.exampleStyles = import("./chunk-R4IGWLHI.js");
    this.exampleIcons = import("./chunk-UPHNWZPH.js");
    this.isE2E = inject(WA_IS_E2E);
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
])], decls: 45, vars: 27, consts: [[3, "sticky"], [1, "container"], [3, "floatingToolbar", "formControl", "placeholder", "readOnly", "tools", "tuiAutoFocus"], ["appearance", "outline", "size", "s", "tuiButton", "", "type", "button", 1, "tui-space_top-3", 3, "click"], ["tuiDocAPI", ""], ["name", "Show preview", "tuiDocAPIItem", "", "type", "boolean", 3, "valueChange", "value"], ["name", "disabled", "tuiDocAPIItem", "", "type", "boolean", 3, "valueChange", "value"], ["name", "[readOnly]", "tuiDocAPIItem", "", "type", "boolean", 3, "valueChange", "value"], ["name", "[floatingToolbar]", "tuiDocAPIItem", "", "type", "boolean", 3, "valueChange", "value"], ["name", "[tools]", "tuiDocAPIItem", "", "type", "readonly TuiEditorToolType[] | Set<TuiEditorToolType>", 3, "valueChange", "items", "value"], ["name", "[ngModel]", "tuiDocAPIItem", "", "type", "string", 3, "valueChange", "value"], ["name", "[placeholder]", "tuiDocAPIItem", "", "type", "string", 3, "valueChange", "value"], ["name", "[style.min-height]", "tuiDocAPIItem", "", "type", "string", 3, "valueChange", "value"], ["name", "[style.max-height]", "tuiDocAPIItem", "", "type", "string", 3, "valueChange", "value"], ["name", "(loaded)", "tuiDocAPIItem", "", "type", "boolean"], ["code", "npm i @taiga-ui/{cdk,core,kit,icons,editor}"], [1, "b-demo-steps"], ["filename", "styles.less", 3, "code"], ["filename", "angular.json (icons are not included in the bundle)", 3, "code"], ["filename", "app.component.html", 3, "code"], ["filename", "app.component.ts", 3, "code"], ["size", "s", 3, "ngModelChange", "items", "ngModel"], ["tuiTextarea", "", 3, "ngModelChange", "ngModel", "ngModelOptions"]], template: function TuiEditorStarter_Template(rf, ctx) {
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
    \u0275\u0275elementStart(8, "table", 4)(9, "tr", 5);
    \u0275\u0275twoWayListener("valueChange", function TuiEditorStarter_Template_tr_valueChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.preview, $event) || (ctx.preview = $event);
      return $event;
    });
    \u0275\u0275text(10, " Just demo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "tr", 6);
    \u0275\u0275twoWayListener("valueChange", function TuiEditorStarter_Template_tr_valueChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.disabled, $event) || (ctx.disabled = $event);
      return $event;
    });
    \u0275\u0275text(12, " Disabled state (use ");
    \u0275\u0275elementStart(13, "code");
    \u0275\u0275text(14, "formControl.disable()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " ) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "tr", 7);
    \u0275\u0275twoWayListener("valueChange", function TuiEditorStarter_Template_tr_valueChange_16_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.readOnly, $event) || (ctx.readOnly = $event);
      return $event;
    });
    \u0275\u0275text(17, " Readonly mode ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "tr", 8);
    \u0275\u0275twoWayListener("valueChange", function TuiEditorStarter_Template_tr_valueChange_18_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.floating, $event) || (ctx.floating = $event);
      return $event;
    });
    \u0275\u0275text(19, " Floating toolbar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "tr", 9);
    \u0275\u0275twoWayListener("valueChange", function TuiEditorStarter_Template_tr_valueChange_20_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.tools, $event) || (ctx.tools = $event);
      return $event;
    });
    \u0275\u0275text(21, " Allowed edit tools ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "tr", 10);
    \u0275\u0275listener("valueChange", function TuiEditorStarter_Template_tr_valueChange_22_listener($event) {
      let tmp_0_0;
      return ctx.control.setValue((tmp_0_0 = $event) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "");
    });
    \u0275\u0275text(23, " Example pass HTML code ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "tr", 11);
    \u0275\u0275twoWayListener("valueChange", function TuiEditorStarter_Template_tr_valueChange_24_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.placeholder, $event) || (ctx.placeholder = $event);
      return $event;
    });
    \u0275\u0275text(25, " Placeholder shown on empty focused input ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "tr", 12);
    \u0275\u0275twoWayListener("valueChange", function TuiEditorStarter_Template_tr_valueChange_26_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.minHeight, $event) || (ctx.minHeight = $event);
      return $event;
    });
    \u0275\u0275text(27, ' Value of CSS-property "min-height" ');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "tr", 13);
    \u0275\u0275twoWayListener("valueChange", function TuiEditorStarter_Template_tr_valueChange_28_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.maxHeight, $event) || (ctx.maxHeight = $event);
      return $event;
    });
    \u0275\u0275text(29, ' Value of CSS-property "max-height" ');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "tr", 14);
    \u0275\u0275text(31, " Emits when editor is loaded ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "h3");
    \u0275\u0275text(33, "How to use");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "table", 4);
    \u0275\u0275element(35, "tui-doc-code", 15);
    \u0275\u0275elementStart(36, "ol", 16)(37, "li");
    \u0275\u0275element(38, "tui-doc-code", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li");
    \u0275\u0275element(40, "tui-doc-code", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li");
    \u0275\u0275element(42, "tui-doc-code", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "li");
    \u0275\u0275element(44, "tui-doc-code", 20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    \u0275\u0275advance();
    \u0275\u0275property("sticky", false);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("max-height", ctx.maxHeight)("min-height", ctx.minHeight);
    \u0275\u0275property("floatingToolbar", ctx.floating)("formControl", ctx.control)("placeholder", ctx.placeholder)("readOnly", ctx.readOnly)("tools", (tmp_7_0 = ctx.tools) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : \u0275\u0275pureFunction0(26, _c02))("tuiAutoFocus", !ctx.isE2E);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.preview ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("value", ctx.preview);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("value", ctx.disabled);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("value", ctx.readOnly);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("value", ctx.floating);
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx.toolsVariants);
    \u0275\u0275twoWayProperty("value", ctx.tools);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx.control.value);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("value", ctx.placeholder);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("value", ctx.minHeight);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("value", ctx.maxHeight);
    \u0275\u0275advance(10);
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
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule,
  FormControlDirective,
  TuiDocAPI,
  TuiDocAPIItem,
  TuiDocDemo,
  TuiDocCode,
  TuiDocPage,
  TuiAutoFocus,
  TuiButton,
  TuiEditor,
  TuiRadioList,
  TuiTextareaComponent,
  TuiTextfieldComponent
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
      TuiTextarea
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
                    <tui-textfield>
                        <textarea
                            tuiTextarea
                            [ngModel]="control.value"
                            [ngModelOptions]="{updateOn: 'change'}"
                            (ngModelChange)="control.setValue($event)"
                        ></textarea>
                    </tui-textfield>
                }

                @if (updateOn === 'blur') {
                    <tui-textfield>
                        <textarea
                            tuiTextarea
                            [ngModel]="control.value"
                            [ngModelOptions]="{updateOn: 'blur'}"
                            (ngModelChange)="control.setValue($event)"
                        ></textarea>
                    </tui-textfield>
                }
            }
        </div>
    </tui-doc-demo>
    <table tuiDocAPI>
        <tr
            name="Show preview"
            tuiDocAPIItem
            type="boolean"
            [(value)]="preview"
        >
            Just demo
        </tr>
        <tr
            name="disabled"
            tuiDocAPIItem
            type="boolean"
            [(value)]="disabled"
        >
            Disabled state (use
            <code>formControl.disable()</code>
            )
        </tr>
        <tr
            name="[readOnly]"
            tuiDocAPIItem
            type="boolean"
            [(value)]="readOnly"
        >
            Readonly mode
        </tr>
        <tr
            name="[floatingToolbar]"
            tuiDocAPIItem
            type="boolean"
            [(value)]="floating"
        >
            Floating toolbar
        </tr>
        <tr
            name="[tools]"
            tuiDocAPIItem
            type="readonly TuiEditorToolType[] | Set<TuiEditorToolType>"
            [items]="toolsVariants"
            [(value)]="tools"
        >
            Allowed edit tools
        </tr>
        <tr
            name="[ngModel]"
            tuiDocAPIItem
            type="string"
            [value]="control.value"
            (valueChange)="control.setValue($event ?? '')"
        >
            Example pass HTML code
        </tr>
        <tr
            name="[placeholder]"
            tuiDocAPIItem
            type="string"
            [(value)]="placeholder"
        >
            Placeholder shown on empty focused input
        </tr>
        <tr
            name="[style.min-height]"
            tuiDocAPIItem
            type="string"
            [(value)]="minHeight"
        >
            Value of CSS-property "min-height"
        </tr>
        <tr
            name="[style.max-height]"
            tuiDocAPIItem
            type="string"
            [(value)]="maxHeight"
        >
            Value of CSS-property "max-height"
        </tr>
        <tr
            name="(loaded)"
            tuiDocAPIItem
            type="boolean"
        >
            Emits when editor is loaded
        </tr>
    </table>
    <h3>How to use</h3>
    <table tuiDocAPI>
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
    </table>
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
//# sourceMappingURL=chunk-3HGGNE6M.js.map
