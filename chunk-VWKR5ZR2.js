import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-TMAIJMJG.js";
import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-7F4Z4OEH.js";
import "./chunk-BTUNPS36.js";
import "./chunk-EP2JXLAZ.js";
import {
  TuiInputInline,
  TuiTiptapEditorService
} from "./chunk-FQFMIA7P.js";
import "./chunk-ENNG77OY.js";
import "./chunk-4KQC5VQM.js";
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
import "./chunk-KABZ5ZTT.js";
import "./chunk-RR2HWU3Q.js";
import "./chunk-ZL2NLOVI.js";
import "./chunk-WQSN4Q62.js";
import "./chunk-F47ZTIMH.js";
import "./chunk-H6B6ZN6C.js";
import "./chunk-VCEUECWR.js";
import "./chunk-EHYODUHD.js";
import "./chunk-K3KVBV5Y.js";
import "./chunk-7Q3SE4QU.js";
import {
  TuiItem
} from "./chunk-EQTN4WLW.js";
import {
  TUI_IS_E2E,
  TuiAutoFocus,
  TuiButton,
  TuiDropdown,
  TuiDropdownDirective,
  TuiDropdownOpen,
  TuiDropdownOptionsDirective,
  TuiIcon
} from "./chunk-QA7BIT47.js";
import {
  DomSanitizer
} from "./chunk-GJ4XEV4D.js";
import "./chunk-AHSN3FX6.js";
import "./chunk-6UFFMEMO.js";
import "./chunk-2X7NNA2Q.js";
import {
  TuiEditorTool
} from "./chunk-AJIK2DF5.js";
import "./chunk-RDIT4KNC.js";
import "./chunk-Z64UTBP3.js";
import "./chunk-LBJNUVBM.js";
import {
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule,
  Validators,
  isPlatformServer,
  tuiPure
} from "./chunk-P325F6NW.js";
import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  inject,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-MN3TG6GQ.js";
import {
  __esDecorate,
  __runInitializers
} from "./chunk-CJ7OSSQR.js";
import "./chunk-TPMK677Z.js";
import "./chunk-Q6WMBPZ3.js";
import "./chunk-IN2LCJCD.js";
import "./chunk-G3QJNC4B.js";
import "./chunk-U65UEYRO.js";
import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/embed/iframe/examples/1/embed-tool/embed-tool.component.ts
var _c0 = ["dropdown"];
function ExampleTuiEmbedTool_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 5)(2, "div", 6);
    \u0275\u0275text(3, "Embed URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7)(5, "tui-input-inline", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ExampleTuiEmbedTool_ng_template_4_Template_tui_input_inline_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.url, $event) || (ctx_r1.url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ExampleTuiEmbedTool_ng_template_4_Template_tui_input_inline_keydown_enter_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.embedSource(ctx_r1.url));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("t-input_filled", ctx_r1.url);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.url);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.placeholder, " ");
  }
}
var _ExampleTuiEmbedTool = class _ExampleTuiEmbedTool {
  constructor() {
    this.dropdown = viewChild.required("dropdown");
    this.editor = inject(TuiTiptapEditorService);
    this.placeholder = "https://my-embed.site.com/etc1235";
    this.url = "";
  }
  embedSource(src) {
    if (src) {
      this.editor.setIframe({ src });
      this.url = "";
      this.dropdown().close();
    }
  }
};
_ExampleTuiEmbedTool.\u0275fac = function ExampleTuiEmbedTool_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExampleTuiEmbedTool)();
};
_ExampleTuiEmbedTool.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleTuiEmbedTool, selectors: [["embed-tool"]], viewQuery: function ExampleTuiEmbedTool_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.dropdown, _c0, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, decls: 6, vars: 3, consts: [["dropdown", ""], ["youtubeDropdown", ""], ["tuiDropdownAlign", "left", "tuiDropdownDirection", "bottom", "tuiDropdownLimitWidth", "auto", 3, "tuiDropdown", "tuiDropdownMinHeight", "tuiDropdownOpen"], ["appearance", "icon", "automation-id", "embed-tool__button", "iconStart", "@tui.code", "size", "s", "tuiIconButton", "", "tuiToolbarTool", "", "type", "button", 1, "tool-button"], [1, "embed-tool-content"], [1, "t-label"], [1, "t-label-properties"], [1, "t-url"], ["tuiAutoFocus", "", 1, "t-input", 3, "ngModelChange", "keydown.enter", "ngModel"]], template: function ExampleTuiEmbedTool_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2, 0)(2, "button", 3);
    \u0275\u0275text(3, " Embedded tool ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ExampleTuiEmbedTool_ng_template_4_Template, 7, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const youtubeDropdown_r3 = \u0275\u0275reference(5);
    \u0275\u0275property("tuiDropdown", youtubeDropdown_r3)("tuiDropdownMinHeight", 0)("tuiDropdownOpen", false);
  }
}, dependencies: [FormsModule, NgControlStatus, NgModel, TuiAutoFocus, TuiButton, TuiDropdownOptionsDirective, TuiDropdownDirective, TuiDropdownOpen, TuiInputInline], styles: ["\n\n.tool-button[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n}\n.tool-button[_ngcontent-%COMP%]:hover {\n  background: var(--tui-background-neutral-1-hover);\n}\n.embed-tool-content[_ngcontent-%COMP%] {\n  display: flex;\n  min-block-size: 4rem;\n  align-items: center;\n  padding-inline-end: 0.75rem;\n}\n.t-label[_ngcontent-%COMP%] {\n  block-size: var(--tui-height-l);\n  box-sizing: border-box;\n  padding: 0.4375rem 1rem;\n  min-inline-size: 12.5rem;\n  max-inline-size: 25rem;\n  inline-size: 100%;\n}\n.t-input[_ngcontent-%COMP%] {\n  flex: 1;\n  color: var(--tui-text-secondary);\n}\n.t-input_filled[_ngcontent-%COMP%] {\n  color: var(--tui-text-primary);\n}\n/*# sourceMappingURL=embed-tool.styles.css.map */"], changeDetection: 0 });
var ExampleTuiEmbedTool = _ExampleTuiEmbedTool;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleTuiEmbedTool, [{
    type: Component,
    args: [{ selector: "embed-tool", imports: [FormsModule, TuiAutoFocus, TuiButton, TuiDropdown, TuiInputInline], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div\n    #dropdown\n    tuiDropdownAlign="left"\n    tuiDropdownDirection="bottom"\n    tuiDropdownLimitWidth="auto"\n    [tuiDropdown]="youtubeDropdown"\n    [tuiDropdownMinHeight]="0"\n    [tuiDropdownOpen]="false"\n>\n    <button\n        appearance="icon"\n        automation-id="embed-tool__button"\n        iconStart="@tui.code"\n        size="s"\n        tuiIconButton\n        tuiToolbarTool\n        type="button"\n        class="tool-button"\n    >\n        Embedded tool\n    </button>\n    <ng-template #youtubeDropdown>\n        <div class="embed-tool-content">\n            <label class="t-label">\n                <div class="t-label-properties">Embed URL</div>\n                <div class="t-url">\n                    <tui-input-inline\n                        tuiAutoFocus\n                        class="t-input"\n                        [class.t-input_filled]="url"\n                        [(ngModel)]="url"\n                        (keydown.enter)="embedSource(url)"\n                    >\n                        {{ placeholder }}\n                    </tui-input-inline>\n                </div>\n            </label>\n        </div>\n    </ng-template>\n</div>\n', styles: ["/* projects/demo/src/app/pages/embed/iframe/examples/1/embed-tool/embed-tool.styles.less */\n.tool-button {\n  transition-property: background;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n}\n.tool-button:hover {\n  background: var(--tui-background-neutral-1-hover);\n}\n.embed-tool-content {\n  display: flex;\n  min-block-size: 4rem;\n  align-items: center;\n  padding-inline-end: 0.75rem;\n}\n.t-label {\n  block-size: var(--tui-height-l);\n  box-sizing: border-box;\n  padding: 0.4375rem 1rem;\n  min-inline-size: 12.5rem;\n  max-inline-size: 25rem;\n  inline-size: 100%;\n}\n.t-input {\n  flex: 1;\n  color: var(--tui-text-secondary);\n}\n.t-input_filled {\n  color: var(--tui-text-primary);\n}\n/*# sourceMappingURL=embed-tool.styles.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleTuiEmbedTool, { className: "ExampleTuiEmbedTool", filePath: "projects/demo/src/app/pages/embed/iframe/examples/1/embed-tool/embed-tool.component.ts", lineNumber: 15 });
})();

// projects/demo/src/app/pages/embed/iframe/examples/1/index.ts
function Example_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "tui-editor-socket", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("content", ctx_r0.control.value);
  }
}
function Example_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 9);
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
var Example = (() => {
  var _a;
  let _instanceExtraInitializers = [];
  let _safe_decorators;
  return _a = class {
    constructor() {
      this.sanitizer = (__runInitializers(this, _instanceExtraInitializers), inject(DomSanitizer));
      this.isNotStatic = inject(TUI_IS_E2E) || isPlatformServer(inject(PLATFORM_ID));
      this.isE2E = inject(TUI_IS_E2E);
      this.builtInTools = [TuiEditorTool.Undo];
      this.control = new FormControl(this.isNotStatic ? "" : `
        <p>Here is an online IDE:</p>
        <iframe
         src="https://codepen.io/mehdinajafi/embed/LYyqNqR?default-tab=html$%2Cresult&editable=true"
         height="375"
         width="100%"
         scrolling="no"
         frameborder="no"
         loading="lazy"
         allowtransparency="true"
         data-type="iframe-editor"
         allowfullscreen="true">
        </iframe>
        </iframe>
        <p>Here is a media player:</p>
        <iframe
            src="https://bandcamp.com/EmbeddedPlayer/album=2219061201/size=small/bgcol=ffffff/linkcol=63b2cc/transparent=true/"
            height="42"
            width="100%"
            data-type="iframe-editor">
        </iframe>
        <p></p>
    `, Validators.required);
    }
    safe(content) {
      return this.sanitizer.bypassSecurityTrustHtml(content ?? "");
    }
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
    _safe_decorators = [tuiPure];
    __esDecorate(_a, null, _safe_decorators, { kind: "method", name: "safe", static: false, private: false, access: { has: (obj) => "safe" in obj, get: (obj) => obj.safe }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a.\u0275fac = function Example_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _a)();
  }, _a.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _a, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([provideTuiEditor({ iframe: true })])], decls: 15, vars: 5, consts: [[1, "editor", 3, "formControl", "tools"], ["ngProjectAs", "tools", 5, ["tools"]], ["tuiItem", ""], [1, "hint"], ["icon", "@tui.arrow-left"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "tui-editor", 0);
      \u0275\u0275elementContainerStart(1, 1);
      \u0275\u0275element(2, "embed-tool", 2);
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275element(4, "tui-icon", 4);
      \u0275\u0275text(5, " click it ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "tui-accordion", 5)(7, "button", 6);
      \u0275\u0275text(8, "HTML");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "tui-expand");
      \u0275\u0275template(10, Example_ng_container_10_Template, 2, 1, "ng-container", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 6);
      \u0275\u0275text(12, "Text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "tui-expand");
      \u0275\u0275template(14, Example_ng_container_14_Template, 3, 1, "ng-container", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools);
      \u0275\u0275advance(6);
      \u0275\u0275property("closeOthers", false);
      \u0275\u0275advance();
      \u0275\u0275property("tuiAccordion", ctx.isE2E);
      \u0275\u0275advance(4);
      \u0275\u0275property("tuiAccordion", ctx.isE2E);
    }
  }, dependencies: [
    ExampleTuiEmbedTool,
    ReactiveFormsModule,
    NgControlStatus,
    FormControlDirective,
    TuiAccordionComponent,
    TuiAccordionDirective,
    TuiExpand,
    TuiItem,
    TuiEditor,
    TuiEditorSocket,
    TuiIcon
  ], styles: ["\n\n.hint[_ngcontent-%COMP%] {\n  display: flex;\n  color: var(--tui-border-hover);\n  block-size: 100%;\n  align-items: center;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 }), _a;
})();
var __default = Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [
      ExampleTuiEmbedTool,
      ReactiveFormsModule,
      TuiAccordion,
      TuiEditor,
      TuiEditorSocket,
      TuiExpand,
      TuiIcon,
      TuiItem
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideTuiEditor({ iframe: true })], template: '<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    <ng-container ngProjectAs="tools">\n        <embed-tool tuiItem />\n\n        <span class="hint">\n            <tui-icon icon="@tui.arrow-left" />\n            click it\n        </span>\n    </ng-container>\n</tui-editor>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n', styles: ["/* projects/demo/src/app/pages/embed/iframe/examples/1/index.less */\n.hint {\n  display: flex;\n  color: var(--tui-border-hover);\n  block-size: 100%;\n  align-items: center;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, { safe: [] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/embed/iframe/examples/1/index.ts", lineNumber: 33 });
})();
export {
  __default as default
};
//# sourceMappingURL=chunk-VWKR5ZR2.js.map
