import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-R5IEBJJ7.js";
import "./chunk-AZ3433JV.js";
import "./chunk-2ES6PUYZ.js";
import "./chunk-I7X6V4CT.js";
import "./chunk-75FDNOQF.js";
import "./chunk-VVRQ5RPZ.js";
import "./chunk-IHVGLZ2Q.js";
import "./chunk-NXH7MFHV.js";
import "./chunk-DRDD33GY.js";
import "./chunk-R53H6MIJ.js";
import "./chunk-S5MUM5K7.js";
import {
  TuiTiptapEditorService
} from "./chunk-RJWRFJJL.js";
import "./chunk-5234B5NM.js";
import "./chunk-GMAQM436.js";
import "./chunk-V7FD3XDZ.js";
import "./chunk-JAU7JOFF.js";
import "./chunk-KTNJ5Y6T.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-ODER4NNH.js";
import {
  TuiDataList,
  TuiDataListComponent,
  TuiItem,
  TuiOption
} from "./chunk-QZTLTFCW.js";
import {
  TuiButton,
  TuiDropdown,
  TuiDropdownDirective,
  TuiDropdownOpen,
  TuiDropdownOptionsDirective,
  WA_IS_E2E
} from "./chunk-FM47Y63S.js";
import "./chunk-R3AGXJOZ.js";
import "./chunk-YQZG6ATW.js";
import "./chunk-7YCTWNBQ.js";
import "./chunk-AKGAEKNJ.js";
import "./chunk-IK5IBJNP.js";
import {
  TuiEditorTool
} from "./chunk-7SYCPNDB.js";
import "./chunk-22UO2BZC.js";
import "./chunk-4K4DVCQ3.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  WA_WINDOW
} from "./chunk-MRTTS2CM.js";
import {
  AsyncPipe,
  ChangeDetectionStrategy,
  Component,
  distinctUntilChanged,
  inject,
  map,
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
} from "./chunk-NS3244ZP.js";
import "./chunk-3YAE2G2V.js";
import "./chunk-HX6R2MZW.js";
import "./chunk-YFDPJ5PH.js";
import "./chunk-77B4UB4S.js";
import "./chunk-KWSTWQNB.js";

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
var _ExampleTuiFontSizeTool = class _ExampleTuiFontSizeTool {
  constructor() {
    this.editor = inject(TuiTiptapEditorService);
    this.win = inject(WA_WINDOW);
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
};
_ExampleTuiFontSizeTool.\u0275fac = function ExampleTuiFontSizeTool_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExampleTuiFontSizeTool)();
};
_ExampleTuiFontSizeTool.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleTuiFontSizeTool, selectors: [["font-size-tool"]], decls: 11, vars: 6, consts: [["fonts", ""], ["fontsDropdown", ""], ["appearance", "flat", "iconStart", "@tui.minus", "size", "s", "tuiIconButton", "", "tuiToolbarTool", "", "type", "button", 3, "click"], ["tuiDropdownAlign", "start", "tuiDropdownDirection", "bottom", "tuiDropdownLimitWidth", "auto", 3, "tuiDropdown", "tuiDropdownMinHeight", "tuiDropdownOpen"], ["appearance", "flat", "size", "s", "tuiButton", "", "tuiToolbarTool", "", "type", "button"], ["appearance", "flat", "iconStart", "@tui.plus", "size", "s", "tuiIconButton", "", "tuiToolbarTool", "", "type", "button", 3, "click"], ["tuiOption", "", "type", "button"], ["tuiOption", "", "type", "button", 3, "click"]], template: function ExampleTuiFontSizeTool_Template(rf, ctx) {
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
}, dependencies: [AsyncPipe, TuiButton, TuiDataListComponent, TuiOption, TuiDropdownOptionsDirective, TuiDropdownDirective, TuiDropdownOpen], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var ExampleTuiFontSizeTool = _ExampleTuiFontSizeTool;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleTuiFontSizeTool, [{
    type: Component,
    args: [{ selector: "font-size-tool", imports: [AsyncPipe, TuiButton, TuiDataList, TuiDropdown], changeDetection: ChangeDetectionStrategy.OnPush, template: '<button\n    appearance="flat"\n    iconStart="@tui.minus"\n    size="s"\n    tuiIconButton\n    tuiToolbarTool\n    type="button"\n    (click)="decrease()"\n>\n    Decrease size\n</button>\n<div\n    #fonts\n    tuiDropdownAlign="start"\n    tuiDropdownDirection="bottom"\n    tuiDropdownLimitWidth="auto"\n    [tuiDropdown]="fontsDropdown"\n    [tuiDropdownMinHeight]="0"\n    [tuiDropdownOpen]="false"\n>\n    <button\n        appearance="flat"\n        size="s"\n        tuiButton\n        tuiToolbarTool\n        type="button"\n    >\n        {{ size$ | async }}\n    </button>\n\n    <ng-template #fontsDropdown>\n        <tui-data-list>\n            @for (size of sizes; track size) {\n                <button\n                    tuiOption\n                    type="button"\n                    (click)="setFontSize(size)"\n                >\n                    {{ size }}\n                </button>\n            }\n        </tui-data-list>\n    </ng-template>\n</div>\n\n<button\n    appearance="flat"\n    iconStart="@tui.plus"\n    size="s"\n    tuiIconButton\n    tuiToolbarTool\n    type="button"\n    (click)="increase()"\n>\n    Increase size\n</button>\n', styles: ["/* projects/demo/src/app/pages/font/examples/3/font-size-tool/index.less */\n:host {\n  display: flex;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleTuiFontSizeTool, { className: "ExampleTuiFontSizeTool", filePath: "projects/demo/src/app/pages/font/examples/3/font-size-tool/index.ts", lineNumber: 15 });
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
    this.isE2E = inject(WA_IS_E2E);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/font/examples/3/index.ts", lineNumber: 30 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-AJOOGUH3.js.map
