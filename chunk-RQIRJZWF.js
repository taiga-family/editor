import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-GUXKSSXB.js";
import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-KZS7YKOQ.js";
import "./chunk-JISC74IQ.js";
import "./chunk-BJZBC7OY.js";
import {
  TuiTiptapEditorService
} from "./chunk-5NITR7HG.js";
import "./chunk-EK32FQMI.js";
import "./chunk-KMQDJKVH.js";
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
import "./chunk-J256VTJM.js";
import "./chunk-TKB72JFC.js";
import "./chunk-ZL2NLOVI.js";
import "./chunk-WQSN4Q62.js";
import "./chunk-F47ZTIMH.js";
import "./chunk-H6B6ZN6C.js";
import "./chunk-VCEUECWR.js";
import "./chunk-EHYODUHD.js";
import "./chunk-K3KVBV5Y.js";
import "./chunk-L5QVMFBS.js";
import {
  TuiDataList,
  TuiDataListComponent,
  TuiItem,
  TuiOption
} from "./chunk-M277MCZ7.js";
import {
  TUI_IS_E2E,
  TuiButton,
  TuiDropdown,
  TuiDropdownDirective,
  TuiDropdownOpen,
  TuiDropdownOptionsDirective
} from "./chunk-3VK442GK.js";
import "./chunk-XI2RCXXD.js";
import "./chunk-AHSN3FX6.js";
import "./chunk-PMDCSBJF.js";
import "./chunk-2X7NNA2Q.js";
import {
  TuiEditorTool
} from "./chunk-I6VUD5CU.js";
import "./chunk-Q4JLRECA.js";
import "./chunk-6A2ZSXM6.js";
import "./chunk-LBJNUVBM.js";
import {
  AsyncPipe,
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  WINDOW,
  tuiPure
} from "./chunk-2QWGY2YZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SLVEPEAC.js";
import {
  __esDecorate,
  __runInitializers,
  distinctUntilChanged,
  map
} from "./chunk-CJ7OSSQR.js";
import "./chunk-TPMK677Z.js";
import "./chunk-Q6WMBPZ3.js";
import "./chunk-IN2LCJCD.js";
import "./chunk-G3QJNC4B.js";
import "./chunk-U65UEYRO.js";
import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/font/examples/3/font-size-tool/index.ts
function ExampleTuiFontSizeTool_ng_template_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function ExampleTuiFontSizeTool_ng_template_7_For_2_Template_button_click_0_listener() {
      const size_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setFontSize(size_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", size_r3, " ");
  }
}
function ExampleTuiFontSizeTool_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-data-list");
    \u0275\u0275repeaterCreate(1, ExampleTuiFontSizeTool_ng_template_7_For_2_Template, 2, 1, "button", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.sizes);
  }
}
var ExampleTuiFontSizeTool = (() => {
  var _a;
  let _instanceExtraInitializers = [];
  let _getDefaultFontSize_decorators;
  return _a = class {
    constructor() {
      this.editor = (__runInitializers(this, _instanceExtraInitializers), inject(TuiTiptapEditorService));
      this.win = inject(WINDOW);
      this.sizes = [8, 9, 10, 11, 12, 14, 16, 18, 24, 30];
      this.size$ = this.editor.valueChange$.pipe(map(() => this.fontSize), distinctUntilChanged());
    }
    get fontSize() {
      return this.editor.getFontSize() || this.getDefaultFontSize(this.editor.getOriginTiptapEditor()?.view.dom) || 16;
    }
    setFontSize(size) {
      this.editor.setFontSize(size);
    }
    increase() {
      const newIndex = this.currentIndex + 1;
      if (newIndex <= this.sizes.length - 1) {
        const newSize = this.sizes[newIndex] ?? 0;
        if (newSize > 0) {
          this.setFontSize(newSize);
        }
      }
    }
    decrease() {
      const newIndex = this.currentIndex - 1;
      if (newIndex > 0) {
        const newSize = this.sizes[newIndex] ?? 0;
        if (newSize > 0) {
          this.setFontSize(newSize);
        }
      }
    }
    get currentIndex() {
      return this.sizes.indexOf(this.fontSize);
    }
    getDefaultFontSize(element) {
      return element ? Number(/\d+/.exec(this.win.getComputedStyle(element).getPropertyValue("font-size"))?.[0]) : 16;
    }
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
    _getDefaultFontSize_decorators = [tuiPure];
    __esDecorate(_a, null, _getDefaultFontSize_decorators, { kind: "method", name: "getDefaultFontSize", static: false, private: false, access: { has: (obj) => "getDefaultFontSize" in obj, get: (obj) => obj.getDefaultFontSize }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a.\u0275fac = function ExampleTuiFontSizeTool_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _a)();
  }, _a.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _a, selectors: [["font-size-tool"]], decls: 11, vars: 6, consts: [["fonts", ""], ["fontsDropdown", ""], ["appearance", "flat", "iconStart", "@tui.minus", "size", "s", "tuiIconButton", "", "tuiToolbarTool", "", "type", "button", 3, "click"], ["tuiDropdownAlign", "left", "tuiDropdownDirection", "bottom", "tuiDropdownLimitWidth", "auto", 3, "tuiDropdown", "tuiDropdownMinHeight", "tuiDropdownOpen"], ["appearance", "flat", "size", "s", "tuiButton", "", "tuiToolbarTool", "", "type", "button"], ["appearance", "flat", "iconStart", "@tui.plus", "size", "s", "tuiIconButton", "", "tuiToolbarTool", "", "type", "button", 3, "click"], ["tuiOption", "", "type", "button"], ["tuiOption", "", "type", "button", 3, "click"]], template: function ExampleTuiFontSizeTool_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "button", 2);
      \u0275\u0275listener("click", function ExampleTuiFontSizeTool_Template_button_click_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.decrease());
      });
      \u0275\u0275text(1, " Decrease size\n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 3, 0)(4, "button", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, ExampleTuiFontSizeTool_ng_template_7_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 5);
      \u0275\u0275listener("click", function ExampleTuiFontSizeTool_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.increase());
      });
      \u0275\u0275text(10, " Increase size\n");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const fontsDropdown_r5 = \u0275\u0275reference(8);
      \u0275\u0275advance(2);
      \u0275\u0275property("tuiDropdown", fontsDropdown_r5)("tuiDropdownMinHeight", 0)("tuiDropdownOpen", false);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, ctx.size$), " ");
    }
  }, dependencies: [AsyncPipe, TuiButton, TuiDataListComponent, TuiOption, TuiDropdownOptionsDirective, TuiDropdownDirective, TuiDropdownOpen], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 }), _a;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleTuiFontSizeTool, [{
    type: Component,
    args: [{ selector: "font-size-tool", imports: [AsyncPipe, TuiButton, TuiDataList, TuiDropdown], changeDetection: ChangeDetectionStrategy.OnPush, template: '<button\n    appearance="flat"\n    iconStart="@tui.minus"\n    size="s"\n    tuiIconButton\n    tuiToolbarTool\n    type="button"\n    (click)="decrease()"\n>\n    Decrease size\n</button>\n<div\n    #fonts\n    tuiDropdownAlign="left"\n    tuiDropdownDirection="bottom"\n    tuiDropdownLimitWidth="auto"\n    [tuiDropdown]="fontsDropdown"\n    [tuiDropdownMinHeight]="0"\n    [tuiDropdownOpen]="false"\n>\n    <button\n        appearance="flat"\n        size="s"\n        tuiButton\n        tuiToolbarTool\n        type="button"\n    >\n        {{ size$ | async }}\n    </button>\n\n    <ng-template #fontsDropdown>\n        <tui-data-list>\n            @for (size of sizes; track size) {\n                <button\n                    tuiOption\n                    type="button"\n                    (click)="setFontSize(size)"\n                >\n                    {{ size }}\n                </button>\n            }\n        </tui-data-list>\n    </ng-template>\n</div>\n\n<button\n    appearance="flat"\n    iconStart="@tui.plus"\n    size="s"\n    tuiIconButton\n    tuiToolbarTool\n    type="button"\n    (click)="increase()"\n>\n    Increase size\n</button>\n', styles: ["/* projects/demo/src/app/pages/font/examples/3/font-size-tool/index.less */\n:host {\n  display: flex;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, { getDefaultFontSize: [] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleTuiFontSizeTool, { className: "ExampleTuiFontSizeTool", filePath: "projects/demo/src/app/pages/font/examples/3/font-size-tool/index.ts", lineNumber: 16 });
})();

// projects/demo/src/app/pages/font/examples/3/index.ts
function Example_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "tui-editor-socket", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("content", ctx_r0.control.value);
  }
}
function Example_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.control.value);
  }
}
var _Example = class _Example {
  constructor() {
    this.builtInTools = [TuiEditorTool.Undo];
    this.isE2E = inject(TUI_IS_E2E);
    this.control = new FormControl(`
        <p>Hello</p>
        <p><span style="font-size: 24px">Hello world</span></p>
    `);
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([provideTuiEditor()])], decls: 12, vars: 5, consts: [[1, "heading", 3, "formControl", "tools"], ["ngProjectAs", "tools", 5, ["tools"]], ["tuiItem", ""], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-editor", 0);
    \u0275\u0275elementContainerStart(1, 1);
    \u0275\u0275element(2, "font-size-tool", 2);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "tui-accordion", 3)(4, "button", 4);
    \u0275\u0275text(5, "HTML");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "tui-expand");
    \u0275\u0275template(7, Example_ng_container_7_Template, 2, 1, "ng-container", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 4);
    \u0275\u0275text(9, "Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "tui-expand");
    \u0275\u0275template(11, Example_ng_container_11_Template, 3, 1, "ng-container", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools);
    \u0275\u0275advance(3);
    \u0275\u0275property("closeOthers", false);
    \u0275\u0275advance();
    \u0275\u0275property("tuiAccordion", ctx.isE2E);
    \u0275\u0275advance(4);
    \u0275\u0275property("tuiAccordion", ctx.isE2E);
  }
}, dependencies: [
  ExampleTuiFontSizeTool,
  ReactiveFormsModule,
  NgControlStatus,
  FormControlDirective,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand,
  TuiItem,
  TuiEditor,
  TuiEditorSocket
], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [
      ExampleTuiFontSizeTool,
      ReactiveFormsModule,
      TuiAccordion,
      TuiEditor,
      TuiEditorSocket,
      TuiExpand,
      TuiItem
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideTuiEditor()], template: '<tui-editor\n    class="heading"\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    <ng-container ngProjectAs="tools">\n        <font-size-tool tuiItem />\n    </ng-container>\n</tui-editor>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/font/examples/3/index.ts", lineNumber: 28 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-RQIRJZWF.js.map
