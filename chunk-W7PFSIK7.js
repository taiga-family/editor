import {
  TuiColorSelector,
  TuiEditor,
  provideTuiEditor
} from "./chunk-WT4WTHJ4.js";
import "./chunk-FCZJQULK.js";
import "./chunk-2ES6PUYZ.js";
import "./chunk-I7X6V4CT.js";
import "./chunk-75FDNOQF.js";
import "./chunk-DSHVBE6A.js";
import "./chunk-IHVGLZ2Q.js";
import "./chunk-NXH7MFHV.js";
import "./chunk-YVPQMOM7.js";
import "./chunk-R53H6MIJ.js";
import "./chunk-RLW3AZRS.js";
import {
  TuiTiptapEditorService
} from "./chunk-HPPITG2I.js";
import "./chunk-YQUUWYOF.js";
import "./chunk-GMAQM436.js";
import "./chunk-SGJOXJMF.js";
import "./chunk-6VXROOO5.js";
import "./chunk-KTNJ5Y6T.js";
import "./chunk-GFHR6XY2.js";
import {
  TuiButton,
  TuiDropdown,
  TuiDropdownDirective,
  TuiDropdownOpen,
  TuiDropdownOptionsDirective
} from "./chunk-SXFCOZII.js";
import "./chunk-UCUDBNZD.js";
import "./chunk-ZBWOCD7G.js";
import "./chunk-PWR5JH2U.js";
import "./chunk-YDV7XTHY.js";
import "./chunk-IK5IBJNP.js";
import {
  TUI_EDITOR_OPTIONS,
  TuiEditorTool
} from "./chunk-OP7WYW65.js";
import "./chunk-ERL72JEN.js";
import "./chunk-KTHA2NW7.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-XQPBGS7K.js";
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
import "./chunk-3YAE2G2V.js";
import "./chunk-G7N6NM5P.js";
import "./chunk-AE53DBVW.js";
import "./chunk-77B4UB4S.js";
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
//# sourceMappingURL=chunk-W7PFSIK7.js.map
