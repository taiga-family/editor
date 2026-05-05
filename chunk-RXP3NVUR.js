import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-DV6NTZXX.js";
import "./chunk-LSJB2ZNP.js";
import "./chunk-7UNPMT6U.js";
import {
  TuiTiptapEditorService
} from "./chunk-4IEDWFJO.js";
import "./chunk-26XUTWAN.js";
import "./chunk-QHXLMMJ2.js";
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
import "./chunk-536EYDGC.js";
import "./chunk-DYCXQFAM.js";
import "./chunk-ZL2NLOVI.js";
import "./chunk-WQSN4Q62.js";
import "./chunk-F47ZTIMH.js";
import "./chunk-H6B6ZN6C.js";
import "./chunk-VCEUECWR.js";
import "./chunk-EHYODUHD.js";
import {
  TuiItem
} from "./chunk-O2R5TA2P.js";
import {
  TuiButton,
  TuiDropdown,
  TuiDropdownDirective,
  TuiDropdownOpen,
  TuiDropdownOptionsDirective,
  TuiIcon
} from "./chunk-C2RQT3I6.js";
import "./chunk-UBEFBV2K.js";
import "./chunk-6K6ZFURU.js";
import "./chunk-AHSN3FX6.js";
import "./chunk-7YGXQPK4.js";
import "./chunk-2X7NNA2Q.js";
import {
  TuiEditorTool
} from "./chunk-6CNQZSVV.js";
import "./chunk-3XOPYWL2.js";
import "./chunk-BZTTG73I.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-7NTP4ZJW.js";
import "./chunk-7CQO4UTC.js";
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-KCQY4XIQ.js";
import "./chunk-JJYTWBAH.js";
import "./chunk-TPMK677Z.js";
import "./chunk-Q6WMBPZ3.js";
import "./chunk-IN2LCJCD.js";
import "./chunk-U65UEYRO.js";
import {
  __async
} from "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/custom-tool/paste-emoji/examples/1/smiles-tool/smiles-tool.component.ts
function ExampleTuiSmilesTool_ng_template_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function ExampleTuiSmilesTool_ng_template_4_For_2_Template_button_click_0_listener() {
      const smile_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.insertSmile(smile_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const smile_r2 = ctx.$implicit;
    \u0275\u0275property("innerHTML", smile_r2, \u0275\u0275sanitizeHtml);
  }
}
function ExampleTuiSmilesTool_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, ExampleTuiSmilesTool_ng_template_4_For_2_Template, 1, 1, "button", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.smiles);
  }
}
var _ExampleTuiSmilesTool = class _ExampleTuiSmilesTool {
  constructor() {
    this.editor = inject(TuiTiptapEditorService);
    this.smiles = [
      "&#129409;",
      "&#9200;",
      "&#9749;",
      "&#9989;",
      "&#10060;",
      "&#10071;",
      "&#10133;",
      "&#128064;",
      "&#128070;",
      "&#128076;",
      "&#128522;",
      "&#128640;"
    ];
  }
  insertSmile(smile) {
    this.editor.getOriginTiptapEditor()?.chain().focus().insertContent(`<p data-type="emoji">${smile}</p>`).insertContent(" ").run();
  }
};
_ExampleTuiSmilesTool.\u0275fac = function ExampleTuiSmilesTool_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExampleTuiSmilesTool)();
};
_ExampleTuiSmilesTool.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleTuiSmilesTool, selectors: [["smiles-tool"]], decls: 6, vars: 3, consts: [["dropdown", ""], ["smileDropdown", ""], ["tuiDropdownAlign", "start", "tuiDropdownDirection", "bottom", "tuiDropdownLimitWidth", "auto", 3, "tuiDropdown", "tuiDropdownMinHeight", "tuiDropdownOpen"], ["appearance", "icon", "automation-id", "smiles-tool__button", "iconStart", "@tui.star", "size", "s", "tuiIconButton", "", "tuiToolbarTool", "", "type", "button", 1, "tool-button"], [1, "smiles"], ["type", "button", 1, "smile", 3, "innerHTML"], ["type", "button", 1, "smile", 3, "click", "innerHTML"]], template: function ExampleTuiSmilesTool_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2, 0)(2, "button", 3);
    \u0275\u0275text(3, " Smile tool ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ExampleTuiSmilesTool_ng_template_4_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const smileDropdown_r4 = \u0275\u0275reference(5);
    \u0275\u0275property("tuiDropdown", smileDropdown_r4)("tuiDropdownMinHeight", 0)("tuiDropdownOpen", false);
  }
}, dependencies: [TuiButton, TuiDropdownOptionsDirective, TuiDropdownDirective, TuiDropdownOpen], styles: ["\n\n.tool-button[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n}\n.tool-button[_ngcontent-%COMP%]:hover {\n  background: var(--tui-background-neutral-1-hover);\n}\n.smiles[_ngcontent-%COMP%] {\n  display: flex;\n  max-inline-size: 18rem;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n}\n.smile[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  -webkit-appearance: none;\n  appearance: none;\n  border: 0;\n  background: none;\n  text-decoration: none;\n  flex: 1 0 21%;\n  cursor: pointer;\n  border-radius: var(--tui-radius-s);\n  font: var(--tui-typography-heading-h4);\n  padding: 1rem;\n}\n.smile[_ngcontent-%COMP%]:hover {\n  background: var(--tui-background-neutral-1-hover);\n}\n/*# sourceMappingURL=smiles-tool.styles.css.map */"], changeDetection: 0 });
var ExampleTuiSmilesTool = _ExampleTuiSmilesTool;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleTuiSmilesTool, [{
    type: Component,
    args: [{ selector: "smiles-tool", imports: [TuiButton, TuiDropdown], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div\n    #dropdown\n    tuiDropdownAlign="start"\n    tuiDropdownDirection="bottom"\n    tuiDropdownLimitWidth="auto"\n    [tuiDropdown]="smileDropdown"\n    [tuiDropdownMinHeight]="0"\n    [tuiDropdownOpen]="false"\n>\n    <button\n        appearance="icon"\n        automation-id="smiles-tool__button"\n        iconStart="@tui.star"\n        size="s"\n        tuiIconButton\n        tuiToolbarTool\n        type="button"\n        class="tool-button"\n    >\n        Smile tool\n    </button>\n    <ng-template #smileDropdown>\n        <div class="smiles">\n            @for (smile of smiles; track smile) {\n                <button\n                    type="button"\n                    class="smile"\n                    [innerHTML]="smile"\n                    (click)="insertSmile(smile)"\n                ></button>\n            }\n        </div>\n    </ng-template>\n</div>\n', styles: ["/* projects/demo/src/app/pages/custom-tool/paste-emoji/examples/1/smiles-tool/smiles-tool.styles.less */\n.tool-button {\n  transition-property: background;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n}\n.tool-button:hover {\n  background: var(--tui-background-neutral-1-hover);\n}\n.smiles {\n  display: flex;\n  max-inline-size: 18rem;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n}\n.smile {\n  transition-property: background;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  -webkit-appearance: none;\n  appearance: none;\n  border: 0;\n  background: none;\n  text-decoration: none;\n  flex: 1 0 21%;\n  cursor: pointer;\n  border-radius: var(--tui-radius-s);\n  font: var(--tui-typography-heading-h4);\n  padding: 1rem;\n}\n.smile:hover {\n  background: var(--tui-background-neutral-1-hover);\n}\n/*# sourceMappingURL=smiles-tool.styles.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleTuiSmilesTool, { className: "ExampleTuiSmilesTool", filePath: "projects/demo/src/app/pages/custom-tool/paste-emoji/examples/1/smiles-tool/smiles-tool.component.ts", lineNumber: 12 });
})();

// projects/demo/src/app/pages/custom-tool/paste-emoji/examples/1/index.ts
var _Example = class _Example {
  constructor() {
    this.builtInTools = [TuiEditorTool.Undo];
    this.control = new FormControl("");
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([
  provideTuiEditor(() => __async(_Example, null, function* () {
    return import("./chunk-GJN3K46V.js").then(({ EmojiExtension }) => EmojiExtension);
  }))
])], decls: 7, vars: 2, consts: [[1, "editor", 3, "formControl", "tools"], ["ngProjectAs", "tools", 5, ["tools"]], ["tuiItem", ""], [1, "hint"], ["icon", "@tui.arrow-left"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-editor", 0);
    \u0275\u0275text(1, " Smiles are custom tool. Try it. ");
    \u0275\u0275elementContainerStart(2, 1);
    \u0275\u0275element(3, "smiles-tool", 2);
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275element(5, "tui-icon", 4);
    \u0275\u0275text(6, " click it ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools);
  }
}, dependencies: [ExampleTuiSmilesTool, ReactiveFormsModule, NgControlStatus, FormControlDirective, TuiEditor, TuiIcon, TuiItem], styles: ["\n\n.hint[_ngcontent-%COMP%] {\n  display: flex;\n  color: var(--tui-border-hover);\n  block-size: 100%;\n  align-items: center;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [ExampleTuiSmilesTool, ReactiveFormsModule, TuiEditor, TuiIcon, TuiItem], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor(() => __async(null, null, function* () {
        return import("./chunk-GJN3K46V.js").then(({ EmojiExtension }) => EmojiExtension);
      }))
    ], template: '<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    Smiles are custom tool. Try it.\n\n    <ng-container ngProjectAs="tools">\n        <smiles-tool tuiItem />\n\n        <span class="hint">\n            <tui-icon icon="@tui.arrow-left" />\n            click it\n        </span>\n    </ng-container>\n</tui-editor>\n', styles: ["/* projects/demo/src/app/pages/custom-tool/paste-emoji/examples/1/index.less */\n.hint {\n  display: flex;\n  color: var(--tui-border-hover);\n  block-size: 100%;\n  align-items: center;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/custom-tool/paste-emoji/examples/1/index.ts", lineNumber: 22 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-RXP3NVUR.js.map
