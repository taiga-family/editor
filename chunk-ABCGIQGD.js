import {
  TuiModalService
} from "./chunk-GCTBMP5W.js";
import {
  TuiEditor,
  TuiEditorImagePreview,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-W6GQCH54.js";
import "./chunk-6MP7IPJW.js";
import "./chunk-CQCVA6IH.js";
import "./chunk-35INNUXK.js";
import "./chunk-HEWXKLLS.js";
import "./chunk-FSBD2B32.js";
import "./chunk-MOZWJJCS.js";
import "./chunk-XK45D6UZ.js";
import "./chunk-NGQVSVIB.js";
import "./chunk-DD32KBA7.js";
import "./chunk-C4PFMQ72.js";
import "./chunk-LT7X7D6S.js";
import "./chunk-O7DJUOJG.js";
import "./chunk-VV3D2HHM.js";
import "./chunk-2MSSL2IN.js";
import "./chunk-MO4NYBTB.js";
import "./chunk-W4U25YU5.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-UOROJ4OO.js";
import {
  TUI_PAGINATION_TEXTS,
  TUI_PREVIEW_TEXTS,
  TUI_PREVIEW_ZOOM_TEXTS,
  TuiHint,
  TuiHintDescribe,
  TuiHintDirective,
  TuiHintManual,
  TuiItem,
  TuiSlider,
  TuiSliderComponent,
  TuiSliderThumbLabel,
  WaMutationObserver,
  WaResizeObserver
} from "./chunk-D3YV7ZHS.js";
import {
  PolymorpheusOutlet,
  TUI_FALSE_HANDLER,
  TUI_VERSION,
  TuiAnimated,
  TuiButton,
  TuiPortalDirective,
  WA_IS_E2E,
  injectContext,
  tuiAsPortal,
  tuiButtonOptionsProvider
} from "./chunk-NLNCZRCI.js";
import "./chunk-LPBSAZLJ.js";
import "./chunk-DMAZJOQQ.js";
import "./chunk-SID5SRJX.js";
import "./chunk-2SAJKKTH.js";
import "./chunk-QD3ZUMKY.js";
import {
  TuiEditorTool
} from "./chunk-MKSJ7GZB.js";
import "./chunk-IKZS23CJ.js";
import {
  tuiCreateOptions,
  tuiDragAndDropFrom,
  tuiPreventDefault,
  tuiTypedFromEvent
} from "./chunk-EMEGSUC4.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  NgModel,
  RangeValueAccessor,
  ReactiveFormsModule,
  outputFromObservable,
  toObservable,
  toSignal,
  tuiClamp,
  tuiDistanceBetweenTouches,
  tuiInjectElement,
  tuiPx,
  tuiRound
} from "./chunk-5BSJ6YPL.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  Directive,
  Injectable,
  InjectionToken,
  Observable,
  PercentPipe,
  ViewEncapsulation,
  combineLatest,
  computed,
  filter,
  inject,
  input,
  map,
  merge,
  model,
  of,
  output,
  pairwise,
  repeat,
  scan,
  setClassMetadata,
  skip,
  startWith,
  switchMap,
  takeUntil,
  timer,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-KFKFA6WT.js";
import "./chunk-YANEK5OP.js";
import "./chunk-JTJXQAN7.js";
import "./chunk-PSTGTYGJ.js";
import "./chunk-LXNO5FKD.js";
import "./chunk-KWSTWQNB.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-pan.mjs
var _TuiPanService = class _TuiPanService extends Observable {
  constructor() {
    const el = tuiInjectElement();
    const doc = inject(DOCUMENT);
    super((subscriber) => merge(tuiTypedFromEvent(el, "touchstart", {
      passive: true
    }), tuiTypedFromEvent(el, "mousedown")).pipe(switchMap(() => merge(tuiTypedFromEvent(doc, "touchmove", {
      passive: true
    }).pipe(filter(({
      touches
    }) => touches.length < 2), map(({
      touches
    }) => touches[0])), tuiTypedFromEvent(doc, "mousemove"))), pairwise(), map(([first, second]) => {
      const deltaX = (second?.clientX ?? 0) - (first?.clientX ?? 0);
      const deltaY = (second?.clientY ?? 0) - (first?.clientY ?? 0);
      return [deltaX, deltaY];
    }), takeUntil(merge(tuiTypedFromEvent(doc, "touchend"), tuiTypedFromEvent(doc, "mouseup"))), repeat()).subscribe(subscriber));
  }
};
_TuiPanService.\u0275fac = function TuiPanService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPanService)();
};
_TuiPanService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiPanService,
  factory: _TuiPanService.\u0275fac
});
var TuiPanService = _TuiPanService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPanService, [{
    type: Injectable
  }], () => [], null);
})();
var _TuiPan = class _TuiPan {
  constructor() {
    this.tuiPan = outputFromObservable(inject(TuiPanService));
  }
};
_TuiPan.\u0275fac = function TuiPan_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPan)();
};
_TuiPan.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiPan,
  selectors: [["", "tuiPan", ""]],
  outputs: {
    tuiPan: "tuiPan"
  },
  features: [\u0275\u0275ProvidersFeature([TuiPanService])]
});
var TuiPan = _TuiPan;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPan, [{
    type: Directive,
    args: [{
      selector: "[tuiPan]",
      providers: [TuiPanService]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-zoom.mjs
var TUI_ZOOM_OPTIONS = new InjectionToken(ngDevMode ? "TUI_ZOOM_OPTIONS" : "", {
  factory: () => ({
    wheelSensitivity: 0.01
  })
});
var TOUCH_SENSITIVITY = 0.01;
var _TuiZoomService = class _TuiZoomService extends Observable {
  constructor() {
    const el = tuiInjectElement();
    const {
      wheelSensitivity
    } = inject(TUI_ZOOM_OPTIONS);
    super((subscriber) => merge(tuiTypedFromEvent(el, "touchstart", {
      passive: true
    }).pipe(filter(({
      touches
    }) => touches.length > 1), switchMap((startEvent) => tuiTypedFromEvent(el, "touchmove", {
      passive: true
    }).pipe(tuiPreventDefault(), scan((prev, event) => {
      const distance = tuiDistanceBetweenTouches(event);
      return {
        event,
        distance,
        delta: (distance - prev.distance) * TOUCH_SENSITIVITY
      };
    }, {
      event: startEvent,
      distance: tuiDistanceBetweenTouches(startEvent),
      delta: 0
    }), map(({
      event,
      delta
    }) => {
      const clientX = ((event.touches[0]?.clientX ?? 0) + (event.touches[1]?.clientX ?? 0)) / 2;
      const clientY = ((event.touches[0]?.clientY ?? 0) + (event.touches[1]?.clientY ?? 0)) / 2;
      return {
        clientX,
        clientY,
        delta,
        event
      };
    }), takeUntil(tuiTypedFromEvent(el, "touchend"))))), tuiTypedFromEvent(el, "wheel", {
      passive: false
    }).pipe(tuiPreventDefault(), map((wheel) => ({
      clientX: wheel.clientX,
      clientY: wheel.clientY,
      delta: -wheel.deltaY * wheelSensitivity,
      event: wheel
    })))).subscribe(subscriber));
  }
};
_TuiZoomService.\u0275fac = function TuiZoomService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiZoomService)();
};
_TuiZoomService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiZoomService,
  factory: _TuiZoomService.\u0275fac
});
var TuiZoomService = _TuiZoomService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiZoomService, [{
    type: Injectable
  }], () => [], null);
})();
var _TuiZoom = class _TuiZoom {
  constructor() {
    this.tuiZoom = inject(TuiZoomService);
  }
};
_TuiZoom.\u0275fac = function TuiZoom_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiZoom)();
};
_TuiZoom.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiZoom,
  selectors: [["", "tuiZoom", ""]],
  hostVars: 2,
  hostBindings: function TuiZoom_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("touch-action", "none");
    }
  },
  outputs: {
    tuiZoom: "tuiZoom"
  },
  features: [\u0275\u0275ProvidersFeature([TuiZoomService])]
});
var TuiZoom = _TuiZoom;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiZoom, [{
    type: Directive,
    args: [{
      selector: "[tuiZoom]",
      outputs: ["tuiZoom"],
      providers: [TuiZoomService],
      host: {
        "[style.touch-action]": '"none"'
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-preview.mjs
function TuiPreviewDialog_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", text_r1, " ");
  }
}
var _c0 = () => ({
  standalone: true
});
var _c1 = ["*", [["tui-preview-title"]], [["tui-preview-pagination"]], [["", "tuiPreviewAction", ""]]];
var _c2 = ["*", "tui-preview-title", "tui-preview-pagination", "[tuiPreviewAction]"];
function TuiPreviewComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function TuiPreviewComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.rotate());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("iconStart", ctx_r3.icons.rotate)("tuiHint", ctx_r3.texts().rotate);
  }
}
function TuiPreviewComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tui-preview-zoom", 9);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("reset", function TuiPreviewComponent_Conditional_14_Template_tui_preview_zoom_reset_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.reset());
    })("valueChange", function TuiPreviewComponent_Conditional_14_Template_tui_preview_zoom_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setZoom($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("min", ctx_r3.minZoom)("value", \u0275\u0275pipeBind1(1, 2, ctx_r3.zoom$) || 1);
  }
}
var _c3 = ["*"];
var _TuiPreviewAction = class _TuiPreviewAction {
};
_TuiPreviewAction.\u0275fac = function TuiPreviewAction_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPreviewAction)();
};
_TuiPreviewAction.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiPreviewAction,
  selectors: [["", "tuiPreviewAction", ""]],
  hostVars: 2,
  hostBindings: function TuiPreviewAction_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("border-radius", 100, "rem");
    }
  },
  features: [\u0275\u0275ProvidersFeature([tuiButtonOptionsProvider({
    appearance: "preview-action",
    size: "s"
  })])]
});
var TuiPreviewAction = _TuiPreviewAction;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreviewAction, [{
    type: Directive,
    args: [{
      selector: "[tuiPreviewAction]",
      providers: [tuiButtonOptionsProvider({
        appearance: "preview-action",
        size: "s"
      })],
      host: {
        "[style.border-radius.rem]": "100"
      }
    }]
  }], null, null);
})();
var _TuiPreviewDialog = class _TuiPreviewDialog {
  constructor() {
    this.context = injectContext();
  }
};
_TuiPreviewDialog.\u0275fac = function TuiPreviewDialog_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPreviewDialog)();
};
_TuiPreviewDialog.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiPreviewDialog,
  selectors: [["tui-preview-dialog"]],
  hostAttrs: ["data-tui-version", "5.8.0"],
  hostBindings: function TuiPreviewDialog_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.esc.prevent", function TuiPreviewDialog_keydown_esc_prevent_HostBindingHandler() {
        return ctx.context.$implicit.complete();
      }, false, \u0275\u0275resolveDocument);
    }
  },
  features: [\u0275\u0275HostDirectivesFeature([TuiAnimated])],
  decls: 1,
  vars: 2,
  consts: [[4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
  template: function TuiPreviewDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TuiPreviewDialog_ng_container_0_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("polymorpheusOutlet", ctx.context.content)("polymorpheusOutletContext", ctx.context);
    }
  },
  dependencies: [PolymorpheusOutlet],
  styles: ['tui-preview-dialog:where(*[data-tui-version="5.8.0"]){inline-size:100%;block-size:100%;overflow:hidden}tui-preview-dialog:where(*[data-tui-version="5.8.0"]).tui-enter,tui-preview-dialog:where(*[data-tui-version="5.8.0"]).tui-leave{animation-name:tuiFade,tuiSlide}[tuiAppearance][data-appearance=preview-action]:where(*[data-tui-version="5.8.0"]){background:#686868f5;color:#fff}@media(hover:hover)and (pointer:fine){[tuiAppearance][data-appearance=preview-action]:where(*[data-tui-version="5.8.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){background:#9f9f9fdb}}[tuiAppearance][data-appearance=preview-action]:where(*[data-tui-version="5.8.0"])[data-state=hover]{background:#9f9f9fdb}[tuiAppearance][data-appearance=preview-action]:where(*[data-tui-version="5.8.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):active:not([data-state]){background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action]:where(*[data-tui-version="5.8.0"])[data-state=active]{background:#9f9f9fbf}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiPreviewDialog = _TuiPreviewDialog;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreviewDialog, [{
    type: Component,
    args: [{
      selector: "tui-preview-dialog",
      imports: [PolymorpheusOutlet],
      template: `
        <ng-container *polymorpheusOutlet="context.content as text; context: context">
            {{ text }}
        </ng-container>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [TuiAnimated],
      host: {
        "data-tui-version": TUI_VERSION,
        "(document:keydown.esc.prevent)": "context.$implicit.complete()"
      },
      styles: ['tui-preview-dialog:where(*[data-tui-version="5.8.0"]){inline-size:100%;block-size:100%;overflow:hidden}tui-preview-dialog:where(*[data-tui-version="5.8.0"]).tui-enter,tui-preview-dialog:where(*[data-tui-version="5.8.0"]).tui-leave{animation-name:tuiFade,tuiSlide}[tuiAppearance][data-appearance=preview-action]:where(*[data-tui-version="5.8.0"]){background:#686868f5;color:#fff}@media(hover:hover)and (pointer:fine){[tuiAppearance][data-appearance=preview-action]:where(*[data-tui-version="5.8.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){background:#9f9f9fdb}}[tuiAppearance][data-appearance=preview-action]:where(*[data-tui-version="5.8.0"])[data-state=hover]{background:#9f9f9fdb}[tuiAppearance][data-appearance=preview-action]:where(*[data-tui-version="5.8.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):active:not([data-state]){background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action]:where(*[data-tui-version="5.8.0"])[data-state=active]{background:#9f9f9fbf}\n']
    }]
  }], null, null);
})();
var _TuiPreviewDialogService = class _TuiPreviewDialogService extends TuiModalService {
  constructor() {
    super(...arguments);
    this.options = {};
    this.content = TuiPreviewDialog;
  }
};
_TuiPreviewDialogService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiPreviewDialogService_BaseFactory;
  return function TuiPreviewDialogService_Factory(__ngFactoryType__) {
    return (\u0275TuiPreviewDialogService_BaseFactory || (\u0275TuiPreviewDialogService_BaseFactory = \u0275\u0275getInheritedFactory(_TuiPreviewDialogService)))(__ngFactoryType__ || _TuiPreviewDialogService);
  };
})();
_TuiPreviewDialogService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TuiPreviewDialogService,
  factory: _TuiPreviewDialogService.\u0275fac,
  providedIn: "root"
});
var TuiPreviewDialogService = _TuiPreviewDialogService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreviewDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _TuiPreviewDialogDirective = class _TuiPreviewDialogDirective {
};
_TuiPreviewDialogDirective.\u0275fac = function TuiPreviewDialogDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPreviewDialogDirective)();
};
_TuiPreviewDialogDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiPreviewDialogDirective,
  selectors: [["ng-template", "tuiPreviewDialog", ""]],
  features: [\u0275\u0275ProvidersFeature([tuiAsPortal(TuiPreviewDialogService)]), \u0275\u0275HostDirectivesFeature([{
    directive: TuiPortalDirective,
    inputs: ["open", "tuiPreviewDialog"],
    outputs: ["openChange", "tuiPreviewDialogChange"]
  }])]
});
var TuiPreviewDialogDirective = _TuiPreviewDialogDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreviewDialogDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiPreviewDialog]",
      providers: [tuiAsPortal(TuiPreviewDialogService)],
      hostDirectives: [{
        directive: TuiPortalDirective,
        inputs: ["open: tuiPreviewDialog"],
        outputs: ["openChange: tuiPreviewDialogChange"]
      }]
    }]
  }], null, null);
})();
var TUI_PREVIEW_ICONS_DEFAULT = {
  rotate: "@tui.rotate-ccw-square",
  prev: "@tui.arrow-left",
  next: "@tui.arrow-right",
  zoomIn: "@tui.plus",
  zoomOut: "@tui.minus",
  zoomReset: "@tui.minimize"
};
var [TUI_PREVIEW_ICONS, tuiPreviewIconsProvider] = tuiCreateOptions(TUI_PREVIEW_ICONS_DEFAULT);
var _TuiPreviewPagination = class _TuiPreviewPagination {
  constructor() {
    this.icons = inject(TUI_PREVIEW_ICONS);
    this.texts = inject(TUI_PAGINATION_TEXTS);
    this.length = input(1);
    this.index = model(0);
  }
  onArrowClick(step) {
    this.index.set(tuiClamp(this.index() + step, 0, this.length() - 1));
  }
};
_TuiPreviewPagination.\u0275fac = function TuiPreviewPagination_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPreviewPagination)();
};
_TuiPreviewPagination.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiPreviewPagination,
  selectors: [["tui-preview-pagination"]],
  hostBindings: function TuiPreviewPagination_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.arrowLeft.prevent", function TuiPreviewPagination_keydown_arrowLeft_prevent_HostBindingHandler() {
        return ctx.onArrowClick(-1);
      }, false, \u0275\u0275resolveDocument)("keydown.arrowRight.prevent", function TuiPreviewPagination_keydown_arrowRight_prevent_HostBindingHandler() {
        return ctx.onArrowClick(1);
      }, false, \u0275\u0275resolveDocument);
    }
  },
  inputs: {
    length: [1, "length"],
    index: [1, "index"]
  },
  outputs: {
    index: "indexChange"
  },
  decls: 5,
  vars: 8,
  consts: [["tuiIconButton", "", "tuiPreviewAction", "", "type", "button", 1, "t-arrow", "t-arrow_left", 3, "click", "disabled", "iconStart"], ["tuiIconButton", "", "tuiPreviewAction", "", "type", "button", 1, "t-arrow", "t-arrow_right", 3, "click", "disabled", "iconStart"]],
  template: function TuiPreviewPagination_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function TuiPreviewPagination_Template_button_click_0_listener() {
        return ctx.onArrowClick(-1);
      });
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
      \u0275\u0275text(2);
      \u0275\u0275elementStart(3, "button", 1);
      \u0275\u0275listener("click", function TuiPreviewPagination_Template_button_click_3_listener() {
        return ctx.onArrowClick(1);
      });
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("disabled", !ctx.index())("iconStart", ctx.icons.prev);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.texts()[0], "\n");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate2("\n", ctx.index() + 1, "/", ctx.length(), "\n");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.index() === ctx.length() - 1)("iconStart", ctx.icons.next);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.texts()[1], "\n");
    }
  },
  dependencies: [TuiButton, TuiPreviewAction],
  styles: ["[_nghost-%COMP%]{border-radius:1rem;background:#686868f5;color:#fff;display:flex;font:var(--tui-typography-body-s);justify-content:space-between;align-items:center;inline-size:6.25rem}.t-arrow[_ngcontent-%COMP%]{transform:scaleX(var(--tui-inline))}.t-arrow_left[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.t-arrow_right[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}"],
  changeDetection: 0
});
var TuiPreviewPagination = _TuiPreviewPagination;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreviewPagination, [{
    type: Component,
    args: [{
      selector: "tui-preview-pagination",
      imports: [TuiButton, TuiPreviewAction],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(document:keydown.arrowLeft.prevent)": "onArrowClick(-1)",
        "(document:keydown.arrowRight.prevent)": "onArrowClick(1)"
      },
      template: '<button\n    tuiIconButton\n    tuiPreviewAction\n    type="button"\n    class="t-arrow t-arrow_left"\n    [disabled]="!index()"\n    [iconStart]="icons.prev"\n    (click)="onArrowClick(-1)"\n>\n    {{ texts()[0] }}\n</button>\n{{ index() + 1 }}/{{ length() }}\n<button\n    tuiIconButton\n    tuiPreviewAction\n    type="button"\n    class="t-arrow t-arrow_right"\n    [disabled]="index() === length() - 1"\n    [iconStart]="icons.next"\n    (click)="onArrowClick(1)"\n>\n    {{ texts()[1] }}\n</button>\n',
      styles: [":host{border-radius:1rem;background:#686868f5;color:#fff;display:flex;font:var(--tui-typography-body-s);justify-content:space-between;align-items:center;inline-size:6.25rem}.t-arrow{transform:scaleX(var(--tui-inline))}.t-arrow_left{border-top-right-radius:0;border-bottom-right-radius:0}.t-arrow_right{border-top-left-radius:0;border-bottom-left-radius:0}\n"]
    }]
  }], null, null);
})();
var _TuiPreviewZoom = class _TuiPreviewZoom {
  constructor() {
    this.icons = inject(TUI_PREVIEW_ICONS);
    this.texts = inject(TUI_PREVIEW_ZOOM_TEXTS);
    this.sliderLabel = computed(() => `${this.texts().zoomOut} / ${this.texts().zoomIn}`);
    this.min = input(0.5);
    this.max = input(2);
    this.value = model(1);
    this.reset = output();
    this.hint = toSignal(toObservable(this.value).pipe(skip(1), switchMap(() => merge(of(true), timer(1e3).pipe(map(TUI_FALSE_HANDLER)))), startWith(false)), {
      requireSync: true
    });
  }
  clamp(value) {
    this.value.set(tuiClamp(value, this.min(), this.max()));
  }
};
_TuiPreviewZoom.\u0275fac = function TuiPreviewZoom_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPreviewZoom)();
};
_TuiPreviewZoom.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiPreviewZoom,
  selectors: [["tui-preview-zoom"]],
  inputs: {
    min: [1, "min"],
    max: [1, "max"],
    value: [1, "value"]
  },
  outputs: {
    value: "valueChange",
    reset: "reset"
  },
  decls: 12,
  vars: 24,
  consts: [[1, "t-zoom"], ["tuiIconButton", "", "tuiPreviewAction", "", "type", "button", 1, "t-sign_minus", 3, "click", "disabled", "iconStart"], ["tuiSliderThumbLabel", ""], [3, "tuiHint", "tuiHintManual"], ["step", "any", "tuiSlider", "", "tuiTheme", "dark", "type", "range", 1, "t-slider", 3, "ngModelChange", "max", "min", "ngModel", "ngModelOptions"], ["tuiIconButton", "", "tuiPreviewAction", "", "type", "button", 1, "t-sign_plus", 3, "click", "disabled", "iconStart"], ["tuiHintAppearance", "floating", "tuiHintDescribe", "", "tuiHintDirection", "top-end", "tuiIconButton", "", "tuiPreviewAction", "", "type", "button", 1, "t-reset-button", 3, "click", "iconStart", "tuiHint"]],
  template: function TuiPreviewZoom_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "button", 1);
      \u0275\u0275listener("click", function TuiPreviewZoom_Template_button_click_1_listener() {
        return ctx.clamp(ctx.value() - 0.5);
      });
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "label", 2);
      \u0275\u0275element(4, "div", 3);
      \u0275\u0275pipe(5, "percent");
      \u0275\u0275elementStart(6, "input", 4);
      \u0275\u0275pipe(7, "percent");
      \u0275\u0275listener("ngModelChange", function TuiPreviewZoom_Template_input_ngModelChange_6_listener($event) {
        return ctx.clamp($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function TuiPreviewZoom_Template_button_click_8_listener() {
        return ctx.clamp(ctx.value() + 0.5);
      });
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "button", 6);
      \u0275\u0275listener("click", function TuiPreviewZoom_Template_button_click_10_listener() {
        return ctx.reset.emit();
      });
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.value() === ctx.min())("iconStart", ctx.icons.zoomOut);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.texts().zoomOut, " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("tuiHint", \u0275\u0275pipeBind1(5, 19, ctx.value()))("tuiHintManual", ctx.hint());
      \u0275\u0275advance(2);
      \u0275\u0275property("max", ctx.max())("min", ctx.min())("ngModel", ctx.value())("ngModelOptions", \u0275\u0275pureFunction0(23, _c0));
      \u0275\u0275attribute("aria-label", ctx.sliderLabel())("aria-valuetext", \u0275\u0275pipeBind1(7, 21, ctx.value()));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.value() === ctx.max())("iconStart", ctx.icons.zoomIn);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.texts().zoomIn, " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("t-invisible", ctx.value() === ctx.min());
      \u0275\u0275property("iconStart", ctx.icons.zoomReset)("tuiHint", ctx.texts().reset);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.texts().reset, "\n");
    }
  },
  dependencies: [FormsModule, DefaultValueAccessor, RangeValueAccessor, NgControlStatus, NgModel, PercentPipe, TuiButton, TuiHintDirective, TuiHintDescribe, TuiHintManual, TuiPreviewAction, TuiSliderComponent, TuiSliderThumbLabel],
  styles: ["[_nghost-%COMP%]{position:relative;display:flex}.t-zoom[_ngcontent-%COMP%]{border-radius:1rem;background:#686868f5;color:#fff;display:flex;font:var(--tui-typography-body-s);justify-content:space-between;align-items:center;inline-size:12rem}.t-slider[_ngcontent-%COMP%]{inline-size:7.5rem}.t-sign_minus[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.t-sign_plus[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}.t-invisible[_ngcontent-%COMP%]{visibility:hidden}.t-reset-button[_ngcontent-%COMP%]{margin-inline-start:.3125rem}"],
  changeDetection: 0
});
var TuiPreviewZoom = _TuiPreviewZoom;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreviewZoom, [{
    type: Component,
    args: [{
      selector: "tui-preview-zoom",
      imports: [FormsModule, PercentPipe, TuiButton, TuiHint, TuiPreviewAction, TuiSlider],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<section class="t-zoom">\n    <button\n        tuiIconButton\n        tuiPreviewAction\n        type="button"\n        class="t-sign_minus"\n        [disabled]="value() === min()"\n        [iconStart]="icons.zoomOut"\n        (click)="clamp(value() - 0.5)"\n    >\n        {{ texts().zoomOut }}\n    </button>\n    <label tuiSliderThumbLabel>\n        <div\n            [tuiHint]="value() | percent"\n            [tuiHintManual]="hint()"\n        ></div>\n        <input\n            step="any"\n            tuiSlider\n            tuiTheme="dark"\n            type="range"\n            class="t-slider"\n            [attr.aria-label]="sliderLabel()"\n            [attr.aria-valuetext]="value() | percent"\n            [max]="max()"\n            [min]="min()"\n            [ngModel]="value()"\n            [ngModelOptions]="{standalone: true}"\n            (ngModelChange)="clamp($event)"\n        />\n    </label>\n    <button\n        tuiIconButton\n        tuiPreviewAction\n        type="button"\n        class="t-sign_plus"\n        [disabled]="value() === max()"\n        [iconStart]="icons.zoomIn"\n        (click)="clamp(value() + 0.5)"\n    >\n        {{ texts().zoomIn }}\n    </button>\n</section>\n<button\n    tuiHintAppearance="floating"\n    tuiHintDescribe\n    tuiHintDirection="top-end"\n    tuiIconButton\n    tuiPreviewAction\n    type="button"\n    class="t-reset-button"\n    [class.t-invisible]="value() === this.min()"\n    [iconStart]="icons.zoomReset"\n    [tuiHint]="texts().reset"\n    (click)="reset.emit()"\n>\n    {{ texts().reset }}\n</button>\n',
      styles: [":host{position:relative;display:flex}.t-zoom{border-radius:1rem;background:#686868f5;color:#fff;display:flex;font:var(--tui-typography-body-s);justify-content:space-between;align-items:center;inline-size:12rem}.t-slider{inline-size:7.5rem}.t-sign_minus{border-top-right-radius:0;border-bottom-right-radius:0}.t-sign_plus{border-top-left-radius:0;border-bottom-left-radius:0}.t-invisible{visibility:hidden}.t-reset-button{margin-inline-start:.3125rem}\n"]
    }]
  }], null, null);
})();
var EMPTY_COORDINATES = [0, 0];
var ROTATION_ANGLE = 90;
var _TuiPreviewComponent = class _TuiPreviewComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.minZoom = 1;
    this.width = 0;
    this.height = 0;
    this.texts = inject(TUI_PREVIEW_TEXTS);
    this.icons = inject(TUI_PREVIEW_ICONS);
    this.cdr = inject(ChangeDetectorRef);
    this.zoom$ = new BehaviorSubject(this.minZoom);
    this.rotation$ = new BehaviorSubject(0);
    this.coordinates$ = new BehaviorSubject(EMPTY_COORDINATES);
    this.transitioned$ = merge(tuiDragAndDropFrom(this.el).pipe(map(({
      stage
    }) => stage !== "continues")), tuiTypedFromEvent(this.el, "touchmove", {
      passive: true
    }).pipe(map(TUI_FALSE_HANDLER)), tuiTypedFromEvent(this.el, "wheel", {
      passive: true
    }).pipe(map(TUI_FALSE_HANDLER)));
    this.cursor$ = tuiDragAndDropFrom(this.el).pipe(map(({
      stage
    }) => stage === "continues" ? "grabbing" : "initial"), startWith("initial"));
    this.wrapperTransform$ = combineLatest([this.coordinates$.pipe(map(([x, y]) => `${tuiPx(x)}, ${tuiPx(y)}`)), this.zoom$, this.rotation$]).pipe(map(([translate, zoom, rotation]) => `translate(${translate}) scale(${zoom}) rotate(${rotation}deg)`));
    this.zoomable = input(true);
    this.rotatable = input(false);
    this.initialScale = input(0.8);
  }
  rotate() {
    this.rotation$.next(this.rotation$.value - ROTATION_ANGLE);
  }
  onPan(delta) {
    this.coordinates$.next(this.getGuardedCoordinates(this.coordinates$.value[0] + delta[0], this.coordinates$.value[1] + delta[1]));
  }
  onMutation(contentWrapper) {
    const {
      clientWidth,
      clientHeight
    } = contentWrapper;
    this.refresh(clientWidth, clientHeight);
  }
  onZoom({
    clientX,
    clientY,
    delta
  }) {
    if (this.zoomable()) {
      this.processZoom(clientX, clientY, delta);
    }
  }
  onResize([entry]) {
    if (entry?.contentRect) {
      this.refresh(entry.contentRect.width, entry.contentRect.height);
      this.cdr.detectChanges();
    }
  }
  reset() {
    this.zoom$.next(this.minZoom);
    this.coordinates$.next(EMPTY_COORDINATES);
  }
  setZoom(zoom) {
    this.zoom$.next(zoom);
    const [x, y] = this.coordinates$.value;
    this.coordinates$.next(this.getGuardedCoordinates(x, y));
  }
  get offsets() {
    const offsetX = (this.zoom$.value - this.minZoom) * this.width / 2;
    const offsetY = (this.zoom$.value - this.minZoom) * this.height / 2;
    return {
      offsetX,
      offsetY
    };
  }
  calculateMinZoom(contentHeight, contentWidth, boxHeight, boxWidth) {
    const bigSize = contentHeight > boxHeight * this.initialScale() || contentWidth > boxWidth * this.initialScale();
    const {
      clientHeight,
      clientWidth
    } = this.el;
    return bigSize ? tuiRound(Math.min(clientHeight * this.initialScale() / contentHeight, clientWidth * this.initialScale() / contentWidth), 2) : 1;
  }
  refresh(width, height) {
    this.width = width;
    this.height = height;
    this.minZoom = this.calculateMinZoom(height, width, this.el.clientHeight, this.el.clientWidth);
    this.zoom$.next(this.minZoom);
    this.coordinates$.next(EMPTY_COORDINATES);
    this.rotation$.next(0);
  }
  processZoom(clientX, clientY, delta) {
    const oldScale = this.zoom$.value;
    const newScale = tuiClamp(oldScale + delta, this.minZoom, 2);
    const center = this.getScaleCenter({
      clientX,
      clientY
    }, this.coordinates$.value, this.zoom$.value);
    const moveX = center[0] * oldScale - center[0] * newScale;
    const moveY = center[1] * oldScale - center[1] * newScale;
    this.zoom$.next(newScale);
    this.coordinates$.next(this.getGuardedCoordinates(this.coordinates$.value[0] + moveX, this.coordinates$.value[1] + moveY));
  }
  getGuardedCoordinates(x, y) {
    const {
      offsetX,
      offsetY
    } = this.offsets;
    return [tuiClamp(x, -offsetX, offsetX), tuiClamp(y, -offsetY, offsetY)];
  }
  getScaleCenter({
    clientX,
    clientY
  }, [x, y], scale) {
    return [(clientX - x - this.el.offsetWidth / 2) / scale, (clientY - y - this.el.offsetHeight / 2) / scale];
  }
};
_TuiPreviewComponent.\u0275fac = function TuiPreviewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPreviewComponent)();
};
_TuiPreviewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiPreviewComponent,
  selectors: [["tui-preview"]],
  inputs: {
    zoomable: [1, "zoomable"],
    rotatable: [1, "rotatable"],
    initialScale: [1, "initialScale"]
  },
  ngContentSelectors: _c2,
  decls: 15,
  vars: 16,
  consts: [["contentWrapper", ""], ["attributeFilter", "src", "characterData", "", "childList", "", "subtree", "", 1, "t-wrapper", 3, "tuiPan", "tuiZoom", "waMutationObserver", "waResizeObserver"], [1, "t-header"], [1, "t-title"], [1, "t-actions"], [1, "t-footer"], ["tuiHintAppearance", "floating", "tuiHintDescribe", "", "tuiHintDirection", "top-end", "tuiIconButton", "", "tuiPreviewAction", "", "type", "button", 1, "t-rotate-button", 3, "iconStart", "tuiHint"], [3, "min", "value"], ["tuiHintAppearance", "floating", "tuiHintDescribe", "", "tuiHintDirection", "top-end", "tuiIconButton", "", "tuiPreviewAction", "", "type", "button", 1, "t-rotate-button", 3, "click", "iconStart", "tuiHint"], [3, "reset", "valueChange", "min", "value"]],
  template: function TuiPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef(_c1);
      \u0275\u0275elementStart(0, "section", 1, 0);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275pipe(3, "async");
      \u0275\u0275pipe(4, "async");
      \u0275\u0275listener("tuiPan", function TuiPreviewComponent_Template_section_tuiPan_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPan($event));
      })("tuiZoom", function TuiPreviewComponent_Template_section_tuiZoom_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onZoom($event));
      })("waMutationObserver", function TuiPreviewComponent_Template_section_waMutationObserver_0_listener() {
        \u0275\u0275restoreView(_r1);
        const contentWrapper_r2 = \u0275\u0275reference(1);
        return \u0275\u0275resetView(ctx.onMutation(contentWrapper_r2));
      })("waResizeObserver", function TuiPreviewComponent_Template_section_waResizeObserver_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onResize($event));
      });
      \u0275\u0275projection(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "header", 2)(7, "div", 3);
      \u0275\u0275projection(8, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275projection(9, 2);
      \u0275\u0275elementStart(10, "div", 4);
      \u0275\u0275projection(11, 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "footer", 5);
      \u0275\u0275template(13, TuiPreviewComponent_Conditional_13_Template, 1, 2, "button", 6)(14, TuiPreviewComponent_Conditional_14_Template, 2, 4, "tui-preview-zoom", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("cursor", \u0275\u0275pipeBind1(2, 10, ctx.cursor$))("transform", \u0275\u0275pipeBind1(3, 12, ctx.wrapperTransform$));
      \u0275\u0275classProp("t-not-interactive-content", ctx.zoomable())("t-transitive", \u0275\u0275pipeBind1(4, 14, ctx.transitioned$));
      \u0275\u0275advance(13);
      \u0275\u0275conditional(ctx.rotatable() ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.zoomable() ? 14 : -1);
    }
  },
  dependencies: [AsyncPipe, TuiButton, TuiHintDirective, TuiHintDescribe, TuiPan, TuiPreviewAction, TuiPreviewZoom, TuiZoom, WaMutationObserver, WaResizeObserver],
  styles: ["[_nghost-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;inline-size:100%;block-size:100%;-webkit-user-select:none;user-select:none}.t-header[_ngcontent-%COMP%]{position:fixed;display:flex;inset-block-start:max(1rem,env(safe-area-inset-top));inline-size:100%;padding:0 1rem;box-sizing:border-box}.t-footer[_ngcontent-%COMP%]{position:absolute;display:flex;inset-block-end:max(1rem,env(safe-area-inset-bottom));inline-size:100%;padding:0 1rem;box-sizing:border-box;justify-content:center}.t-actions[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-end}.t-actions[_ngcontent-%COMP%]    >*{margin-inline-start:.625rem}.t-rotate-button[_ngcontent-%COMP%]{margin-inline-end:.3125rem}.t-title[_ngcontent-%COMP%]{flex:1}tui-root._mobile[_nghost-%COMP%]   .t-title[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-title[_ngcontent-%COMP%]{display:none}.t-not-interactive-content[_ngcontent-%COMP%]    >*{pointer-events:none}.t-wrapper[_ngcontent-%COMP%]{will-change:transform}.t-transitive[_ngcontent-%COMP%]{transition-duration:.3s}"],
  changeDetection: 0
});
var TuiPreviewComponent = _TuiPreviewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreviewComponent, [{
    type: Component,
    args: [{
      selector: "tui-preview",
      imports: [AsyncPipe, TuiButton, TuiHint, TuiPan, TuiPreviewAction, TuiPreviewZoom, TuiZoom, WaMutationObserver, WaResizeObserver],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<section\n    #contentWrapper\n    attributeFilter="src"\n    characterData\n    childList\n    subtree\n    class="t-wrapper"\n    [class.t-not-interactive-content]="zoomable()"\n    [class.t-transitive]="transitioned$ | async"\n    [style.cursor]="cursor$ | async"\n    [style.transform]="wrapperTransform$ | async"\n    (tuiPan)="onPan($event)"\n    (tuiZoom)="onZoom($event)"\n    (waMutationObserver)="onMutation(contentWrapper)"\n    (waResizeObserver)="onResize($event)"\n>\n    <ng-content />\n</section>\n<header class="t-header">\n    <div class="t-title">\n        <ng-content select="tui-preview-title" />\n    </div>\n    <ng-content select="tui-preview-pagination" />\n    <div class="t-actions">\n        <ng-content select="[tuiPreviewAction]" />\n    </div>\n</header>\n<footer class="t-footer">\n    @if (rotatable()) {\n        <button\n            tuiHintAppearance="floating"\n            tuiHintDescribe\n            tuiHintDirection="top-end"\n            tuiIconButton\n            tuiPreviewAction\n            type="button"\n            class="t-rotate-button"\n            [iconStart]="icons.rotate"\n            [tuiHint]="texts().rotate"\n            (click)="rotate()"\n        ></button>\n    }\n    @if (zoomable()) {\n        <tui-preview-zoom\n            [min]="minZoom"\n            [value]="(zoom$ | async) || 1"\n            (reset)="reset()"\n            (valueChange)="setZoom($event)"\n        />\n    }\n</footer>\n',
      styles: [":host{position:relative;display:flex;justify-content:center;align-items:center;inline-size:100%;block-size:100%;-webkit-user-select:none;user-select:none}.t-header{position:fixed;display:flex;inset-block-start:max(1rem,env(safe-area-inset-top));inline-size:100%;padding:0 1rem;box-sizing:border-box}.t-footer{position:absolute;display:flex;inset-block-end:max(1rem,env(safe-area-inset-bottom));inline-size:100%;padding:0 1rem;box-sizing:border-box;justify-content:center}.t-actions{display:flex;flex:1;justify-content:flex-end}.t-actions ::ng-deep>*{margin-inline-start:.625rem}.t-rotate-button{margin-inline-end:.3125rem}.t-title{flex:1}:host-context(tui-root._mobile) .t-title{display:none}.t-not-interactive-content ::ng-deep>*{pointer-events:none}.t-wrapper{will-change:transform}.t-transitive{transition-duration:.3s}\n"]
    }]
  }], null, null);
})();
var _TuiPreviewTitle = class _TuiPreviewTitle {
};
_TuiPreviewTitle.\u0275fac = function TuiPreviewTitle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPreviewTitle)();
};
_TuiPreviewTitle.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiPreviewTitle,
  selectors: [["tui-preview-title"]],
  ngContentSelectors: _c3,
  decls: 1,
  vars: 0,
  template: function TuiPreviewTitle_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{border-radius:1rem;background:#686868f5;color:#fff;display:inline-block;font:var(--tui-typography-body-s);padding:.375rem .75rem}"],
  changeDetection: 0
});
var TuiPreviewTitle = _TuiPreviewTitle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreviewTitle, [{
    type: Component,
    args: [{
      selector: "tui-preview-title",
      template: `
        <ng-content />
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [":host{border-radius:1rem;background:#686868f5;color:#fff;display:inline-block;font:var(--tui-typography-body-s);padding:.375rem .75rem}\n"]
    }]
  }], null, null);
})();
var TuiPreview = [TuiPreviewComponent, TuiPreviewDialogDirective, TuiPreviewTitle, TuiPreviewPagination, TuiPreviewAction, TuiPreviewZoom];

// projects/demo/src/app/pages/images/preview/examples/1/image-preview/image-preview.component.ts
var _c02 = ["previewImages"];
function ImagePreviewExample_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.image.src, \u0275\u0275sanitizeUrl);
  }
}
function ImagePreviewExample_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tui-preview", 1);
    \u0275\u0275template(1, ImagePreviewExample_ng_template_0_Conditional_1_Template, 1, 1, "img", 2);
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function ImagePreviewExample_ng_template_0_Template_button_click_2_listener() {
      const dialog_r3 = \u0275\u0275restoreView(_r1).$implicit;
      return \u0275\u0275resetView(dialog_r3.complete());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("rotatable", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.image ? 1 : -1);
  }
}
var _ImagePreviewExample = class _ImagePreviewExample {
  constructor() {
    this.dialogs = inject(TuiPreviewDialogService);
    this.template = viewChild.required("previewImages");
  }
  showImage(image) {
    this.image = image;
    this.dialogs.open(this.template()).subscribe();
  }
};
_ImagePreviewExample.\u0275fac = function ImagePreviewExample_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ImagePreviewExample)();
};
_ImagePreviewExample.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImagePreviewExample, selectors: [["image-preview-example"]], viewQuery: function ImagePreviewExample_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.template, _c02, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, decls: 2, vars: 0, consts: [["previewImages", ""], [3, "rotatable"], ["alt", "", "loading", "lazy", 1, "t-image-preview", 3, "src"], ["iconStart", "@tui.x", "title", "Close", "tuiIconButton", "", "tuiPreviewAction", "", "type", "button", 3, "click"]], template: function ImagePreviewExample_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ImagePreviewExample_ng_template_0_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
}, dependencies: [TuiButton, TuiPreviewComponent, TuiPreviewAction], styles: ["\n\n.t-image-preview[_ngcontent-%COMP%] {\n  inline-size: 100%;\n}\n/*# sourceMappingURL=image-preview.style.css.map */"], changeDetection: 0 });
var ImagePreviewExample = _ImagePreviewExample;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImagePreviewExample, [{
    type: Component,
    args: [{ selector: "image-preview-example", imports: [TuiButton, TuiPreview], changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-template\n    #previewImages\n    let-dialog\n>\n    <tui-preview [rotatable]="true">\n        @if (image) {\n            <img\n                alt=""\n                loading="lazy"\n                class="t-image-preview"\n                [src]="image.src"\n            />\n        }\n\n        <button\n            iconStart="@tui.x"\n            title="Close"\n            tuiIconButton\n            tuiPreviewAction\n            type="button"\n            (click)="dialog.complete()"\n        ></button>\n    </tui-preview>\n</ng-template>\n', styles: ["/* projects/demo/src/app/pages/images/preview/examples/1/image-preview/image-preview.style.less */\n.t-image-preview {\n  inline-size: 100%;\n}\n/*# sourceMappingURL=image-preview.style.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImagePreviewExample, { className: "ImagePreviewExample", filePath: "projects/demo/src/app/pages/images/preview/examples/1/image-preview/image-preview.component.ts", lineNumber: 18 });
})();

// projects/demo/src/app/pages/images/preview/examples/1/index.ts
function Example_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tui-editor-socket", 5);
    \u0275\u0275listener("imagePreview", function Example_ng_container_5_Template_tui_editor_socket_imagePreview_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const preview_r2 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(preview_r2.showImage($event));
    });
    \u0275\u0275element(2, "image-preview-example", null, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("content", ctx_r2.control.value);
  }
}
var _Example = class _Example {
  constructor() {
    this.isE2E = inject(WA_IS_E2E);
    this.builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];
    this.control = new FormControl("");
    this.control.patchValue('<p>Small image</p><img src="assets/images/lumberjack.png" width="300" /><p>Big image</p><img src="assets/images/big-wallpaper.jpg" width="500" />');
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([provideTuiEditor({ image: true })])], decls: 6, vars: 3, consts: [["preview", ""], [1, "editor", 3, "formControl", "tools"], [1, "tui-space_top-6"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "imagePreview", "content"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tui-editor", 1);
    \u0275\u0275elementStart(1, "tui-accordion", 2)(2, "button", 3);
    \u0275\u0275text(3, "HTML");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "tui-expand");
    \u0275\u0275template(5, Example_ng_container_5_Template, 4, 1, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools);
    \u0275\u0275advance(2);
    \u0275\u0275property("tuiAccordion", ctx.isE2E);
  }
}, dependencies: [
  ImagePreviewExample,
  ReactiveFormsModule,
  NgControlStatus,
  FormControlDirective,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand,
  TuiItem,
  TuiEditor,
  TuiEditorImagePreview,
  TuiEditorSocket
], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [
      ImagePreviewExample,
      ReactiveFormsModule,
      TuiAccordion,
      TuiEditor,
      TuiEditorImagePreview,
      TuiEditorSocket
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideTuiEditor({ image: true })], template: '<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n/>\n\n<tui-accordion class="tui-space_top-6">\n    <button [tuiAccordion]="isE2E">HTML</button>\n\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket\n                [content]="control.value"\n                (imagePreview)="preview.showImage($event)"\n            >\n                <image-preview-example #preview />\n            </tui-editor-socket>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/images/preview/examples/1/index.ts", lineNumber: 28 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-ABCGIQGD.js.map
