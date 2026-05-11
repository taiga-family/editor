import {
  TuiColorSelector,
  TuiEditor,
  provideTuiEditor
} from "./chunk-KOEJR3UV.js";
import "./chunk-XUT57MFZ.js";
import "./chunk-ONGVM4GJ.js";
import {
  TuiTiptapEditorService
} from "./chunk-MTFKGVUX.js";
import "./chunk-FXPT24WY.js";
import "./chunk-SUJWYGZS.js";
import "./chunk-KIYCCMVA.js";
import "./chunk-HAE43MDU.js";
import "./chunk-LGM6JTI4.js";
import "./chunk-BGCTYHEB.js";
import "./chunk-UVV7USAX.js";
import "./chunk-N3ASRP5P.js";
import "./chunk-BP7L4YXV.js";
import "./chunk-4WC5OTYE.js";
import "./chunk-3F4QNJFV.js";
import "./chunk-OZQMG2V2.js";
import "./chunk-VEVUDH35.js";
import "./chunk-FWOW37TG.js";
import "./chunk-L3GOEM5R.js";
import "./chunk-B43K272B.js";
import "./chunk-N5RRZVQ3.js";
import "./chunk-3ZQ2AWCT.js";
import "./chunk-JA46CMTS.js";
import "./chunk-NKJMBZ76.js";
import "./chunk-SS6YEVNJ.js";
import "./chunk-IHDMRANP.js";
import "./chunk-RWJ2HBVJ.js";
import "./chunk-EFOSPXQH.js";
import "./chunk-T3R67HDH.js";
import "./chunk-7TRXGXB5.js";
import "./chunk-4BKSQ4WE.js";
import "./chunk-MQBRMCSJ.js";
import "./chunk-5HK4TACZ.js";
import "./chunk-JIT3DKX5.js";
import "./chunk-E4VTS3R6.js";
import "./chunk-POEE2B5N.js";
import "./chunk-FKOUSXA3.js";
import {
  TuiButton,
  TuiDropdown,
  TuiDropdownDirective,
  TuiDropdownOpen,
  TuiDropdownOptionsDirective
} from "./chunk-6XV2X7BK.js";
import "./chunk-R3NXKXZ4.js";
import "./chunk-ZBWOCD7G.js";
import "./chunk-JHFJB5LV.js";
import "./chunk-6RV2SSBI.js";
import "./chunk-CW45XSAV.js";
import {
  TUI_EDITOR_OPTIONS,
  TuiEditorTool
} from "./chunk-UXUYEKAA.js";
import "./chunk-BGJRQH3N.js";
import "./chunk-5KWHOROR.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-7VRO2DFS.js";
import {
  AsyncPipe,
  ChangeDetectionStrategy,
  Component,
  distinctUntilChanged,
  inject,
  input,
  map,
  setClassMetadata,
  share,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-WNG4JUA7.js";
import "./chunk-RXK6YP7O.js";
import "./chunk-FFR5OF2V.js";
import "./chunk-VUNK2IUC.js";
import "./chunk-OPLENYEC.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/custom-tool/color-picker/examples/1/custom-color-picker/index.ts
function CustomColorPicker_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tui-color-selector", 3);
    \u0275\u0275listener("colorChange", function CustomColorPicker_ng_template_5_Template_tui_color_selector_colorChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onValueChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "button", 4);
    \u0275\u0275listener("click", function CustomColorPicker_ng_template_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setColor());
    });
    \u0275\u0275text(2, " Apply ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("color", ctx_r1.selectedColor)("colors", ctx_r1.colors);
  }
}
var _CustomColorPicker = class _CustomColorPicker {
  constructor() {
    this.options = inject(TUI_EDITOR_OPTIONS);
    this.colors = this.options.textColors ?? this.options.colors;
    this.selectedColor = "";
    this.editor = inject(TuiTiptapEditorService);
    this.fontColor$ = this.editor.valueChange$.pipe(map(() => this.editor.getOriginTiptapEditor()?.isFocused ? this.editor[`get${this.type()}`]() || "transparent" : "transparent"), distinctUntilChanged(), share());
    this.icon = input("");
    this.type = input("FontColor");
  }
  onValueChange(color) {
    this.selectedColor = color;
  }
  setColor() {
    this.editor[`set${this.type()}`](this.selectedColor);
  }
};
_CustomColorPicker.\u0275fac = function CustomColorPicker_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CustomColorPicker)();
};
_CustomColorPicker.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomColorPicker, selectors: [["custom-color-picker"]], hostAttrs: ["tuiPlateHost", ""], inputs: { icon: [1, "icon"], type: [1, "type"] }, decls: 7, vars: 8, consts: [["colorDropdown", ""], ["appearance", "icon", "automation-id", "toolbar__color-button", "size", "s", "tuiDropdownAlign", "start", "tuiDropdownDirection", "bottom", "tuiDropdownLimitWidth", "auto", "tuiIconButton", "", "tuiToolbarTool", "", "type", "button", 3, "iconStart", "tuiDropdown", "tuiDropdownMinHeight", "tuiDropdownOpen"], ["tuiPlate", ""], [3, "colorChange", "color", "colors"], ["appearance", "flat", "size", "m", "tuiButton", "", "type", "button", 1, "t-color-save", 3, "click"]], template: function CustomColorPicker_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "button", 1);
    \u0275\u0275text(2, " Color options ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 2);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CustomColorPicker_ng_template_5_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const colorDropdown_r3 = \u0275\u0275reference(6);
    \u0275\u0275advance();
    \u0275\u0275property("iconStart", ctx.icon() || "")("tuiDropdown", colorDropdown_r3)("tuiDropdownMinHeight", 0)("tuiDropdownOpen", false);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", \u0275\u0275pipeBind1(4, 6, ctx.fontColor$));
  }
}, dependencies: [AsyncPipe, TuiButton, TuiColorSelector, TuiDropdownOptionsDirective, TuiDropdownDirective, TuiDropdownOpen], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n}\n.t-color-save[_ngcontent-%COMP%] {\n  position: sticky;\n  inset-inline-start: 0;\n  inset-block-end: 0;\n  inline-size: 100%;\n  box-shadow: inset 0 0.0625rem var(--tui-background-neutral-1-hover);\n  background: var(--tui-background-base) !important;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var CustomColorPicker = _CustomColorPicker;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomColorPicker, [{
    type: Component,
    args: [{ selector: "custom-color-picker", imports: [AsyncPipe, TuiButton, TuiColorSelector, TuiDropdown], changeDetection: ChangeDetectionStrategy.OnPush, host: { tuiPlateHost: "" }, template: `<div>
    <button
        appearance="icon"
        automation-id="toolbar__color-button"
        size="s"
        tuiDropdownAlign="start"
        tuiDropdownDirection="bottom"
        tuiDropdownLimitWidth="auto"
        tuiIconButton
        tuiToolbarTool
        type="button"
        [iconStart]="icon() || ''"
        [tuiDropdown]="colorDropdown"
        [tuiDropdownMinHeight]="0"
        [tuiDropdownOpen]="false"
    >
        Color options
    </button>
    <div
        tuiPlate
        [style.background]="fontColor$ | async"
    ></div>
</div>

<ng-template #colorDropdown>
    <tui-color-selector
        [color]="selectedColor"
        [colors]="colors"
        (colorChange)="onValueChange($event)"
    />

    <button
        appearance="flat"
        size="m"
        tuiButton
        type="button"
        class="t-color-save"
        (click)="setColor()"
    >
        Apply
    </button>
</ng-template>
`, styles: ["/* projects/demo/src/app/pages/custom-tool/color-picker/examples/1/custom-color-picker/index.less */\n:host {\n  position: relative;\n}\n.t-color-save {\n  position: sticky;\n  inset-inline-start: 0;\n  inset-block-end: 0;\n  inline-size: 100%;\n  box-shadow: inset 0 0.0625rem var(--tui-background-neutral-1-hover);\n  background: var(--tui-background-base) !important;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomColorPicker, { className: "CustomColorPicker", filePath: "projects/demo/src/app/pages/custom-tool/color-picker/examples/1/custom-color-picker/index.ts", lineNumber: 20 });
})();

// projects/demo/src/app/pages/custom-tool/color-picker/examples/1/index.ts
var _Example = class _Example {
  constructor() {
    this.builtInTools = [TuiEditorTool.Undo];
    this.control = new FormControl("");
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([provideTuiEditor()])], decls: 4, vars: 2, consts: [["placeholder", "Required text *", 1, "editor", 3, "formControl", "tools"], ["ngProjectAs", "tools", 5, ["tools"]], ["icon", "@tui.baseline", "type", "FontColor"], ["icon", "@tui.paint-bucket", "type", "BackgroundColor"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-editor", 0);
    \u0275\u0275elementContainerStart(1, 1);
    \u0275\u0275element(2, "custom-color-picker", 2)(3, "custom-color-picker", 3);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools);
  }
}, dependencies: [CustomColorPicker, ReactiveFormsModule, NgControlStatus, FormControlDirective, TuiEditor], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [CustomColorPicker, ReactiveFormsModule, TuiEditor], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideTuiEditor()], template: '<tui-editor\n    placeholder="Required text *"\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    <ng-container ngProjectAs="tools">\n        <custom-color-picker\n            icon="@tui.baseline"\n            type="FontColor"\n        />\n\n        <custom-color-picker\n            icon="@tui.paint-bucket"\n            type="BackgroundColor"\n        />\n    </ng-container>\n</tui-editor>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/custom-tool/color-picker/examples/1/index.ts", lineNumber: 13 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-Z6SKUU2Q.js.map
