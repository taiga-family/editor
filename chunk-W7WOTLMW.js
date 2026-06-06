import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-DXVMR4C5.js";
import "./chunk-4UYSEWYM.js";
import "./chunk-ON6CMRJE.js";
import "./chunk-CGQ7SF5X.js";
import "./chunk-K4VHZDJ3.js";
import "./chunk-BMQKW5MW.js";
import "./chunk-AJXXSTGP.js";
import "./chunk-PZFOFBEJ.js";
import "./chunk-AVXWN6PC.js";
import "./chunk-DFL5NIEH.js";
import "./chunk-BMTZ6XJZ.js";
import {
  TuiTiptapEditorService
} from "./chunk-OQKPKAK5.js";
import "./chunk-4P4YSWKO.js";
import "./chunk-ZRZNAMTC.js";
import "./chunk-ZPZIXJAI.js";
import "./chunk-2RUHTAHV.js";
import "./chunk-3N57KBZI.js";
import {
  TuiItem
} from "./chunk-JDPEJWFS.js";
import {
  TuiButton,
  TuiDropdown,
  TuiDropdownDirective,
  TuiDropdownOpen,
  TuiDropdownOptionsDirective,
  TuiIcon
} from "./chunk-NLNCZRCI.js";
import "./chunk-LPBSAZLJ.js";
import "./chunk-DMAZJOQQ.js";
import "./chunk-QVEY2JIK.js";
import "./chunk-KMEEBF2K.js";
import "./chunk-MAMGYOWB.js";
import {
  TuiEditorTool
} from "./chunk-XDT5UXUV.js";
import "./chunk-HNVQLPMS.js";
import "./chunk-EMEGSUC4.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-5BSJ6YPL.js";
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
} from "./chunk-KFKFA6WT.js";
import "./chunk-OT66PQDS.js";
import "./chunk-6E3PG6FD.js";
import "./chunk-GAZHX25U.js";
import "./chunk-QAKA6OWS.js";
import "./chunk-KWSTWQNB.js";

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
  provideTuiEditor(async () => import("./chunk-TN6S3IKO.js").then(({ EmojiExtension }) => EmojiExtension))
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
      provideTuiEditor(async () => import("./chunk-TN6S3IKO.js").then(({ EmojiExtension }) => EmojiExtension))
    ], template: '<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    Smiles are custom tool. Try it.\n\n    <ng-container ngProjectAs="tools">\n        <smiles-tool tuiItem />\n\n        <span class="hint">\n            <tui-icon icon="@tui.arrow-left" />\n            click it\n        </span>\n    </ng-container>\n</tui-editor>\n', styles: ["/* projects/demo/src/app/pages/custom-tool/paste-emoji/examples/1/index.less */\n.hint {\n  display: flex;\n  color: var(--tui-border-hover);\n  block-size: 100%;\n  align-items: center;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/custom-tool/paste-emoji/examples/1/index.ts", lineNumber: 22 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-W7WOTLMW.js.map
