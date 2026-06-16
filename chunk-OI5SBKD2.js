import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-WR5B45AM.js";
import "./chunk-OFQDSMHJ.js";
import "./chunk-SP2RLMJ3.js";
import "./chunk-EINUTI2P.js";
import "./chunk-3FE37GZG.js";
import "./chunk-JJURWGWL.js";
import "./chunk-D77NNQR5.js";
import "./chunk-J54AAGPK.js";
import "./chunk-PDGZF52Z.js";
import "./chunk-HR6RGQTF.js";
import "./chunk-FTLZTFFZ.js";
import {
  TuiInputInline,
  TuiTiptapEditorService
} from "./chunk-EHE5SKPN.js";
import "./chunk-B62HG66G.js";
import "./chunk-IDGNFT5E.js";
import "./chunk-ZWHYYCIL.js";
import "./chunk-WK2M2Q76.js";
import "./chunk-3YPDJXUW.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-MXICQEMR.js";
import {
  TuiItem
} from "./chunk-BWCWLN77.js";
import {
  TuiAutoFocus,
  TuiButton,
  TuiDropdown,
  TuiDropdownDirective,
  TuiDropdownOpen,
  TuiDropdownOptionsDirective,
  TuiIcon,
  WA_IS_E2E
} from "./chunk-B3ZIK3YY.js";
import "./chunk-HCLCQICK.js";
import "./chunk-F67AGDSR.js";
import "./chunk-5XN4VSG5.js";
import "./chunk-FI5H2H2O.js";
import "./chunk-6VV32JRO.js";
import {
  TuiEditorTool
} from "./chunk-5SUTSJOI.js";
import "./chunk-HPC7TKDJ.js";
import "./chunk-5464WHRF.js";
import {
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule,
  Validators
} from "./chunk-YZQ2AVZQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  inject,
  isPlatformServer,
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
} from "./chunk-6FE6LACA.js";
import "./chunk-46H3G724.js";
import "./chunk-G6LPKBY6.js";
import "./chunk-JCOA2MEW.js";
import "./chunk-QYO3DBNN.js";
import "./chunk-KWSTWQNB.js";

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
    this.dropdown = viewChild.required("dropdown", { read: TuiDropdownOpen });
    this.editor = inject(TuiTiptapEditorService);
    this.placeholder = "https://my-embed.site.com/etc1235";
    this.url = "";
  }
  embedSource(src) {
    if (src) {
      this.editor.setIframe({ src });
      this.url = "";
      this.dropdown().toggle(false);
    }
  }
};
_ExampleTuiEmbedTool.\u0275fac = function ExampleTuiEmbedTool_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExampleTuiEmbedTool)();
};
_ExampleTuiEmbedTool.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleTuiEmbedTool, selectors: [["embed-tool"]], viewQuery: function ExampleTuiEmbedTool_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.dropdown, _c0, 5, TuiDropdownOpen);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, decls: 6, vars: 3, consts: [["dropdown", ""], ["youtubeDropdown", ""], ["tuiDropdownAlign", "start", "tuiDropdownDirection", "bottom", "tuiDropdownLimitWidth", "auto", 3, "tuiDropdown", "tuiDropdownMinHeight", "tuiDropdownOpen"], ["appearance", "icon", "automation-id", "embed-tool__button", "iconStart", "@tui.code", "size", "s", "tuiIconButton", "", "tuiToolbarTool", "", "type", "button", 1, "tool-button"], [1, "embed-tool-content"], [1, "t-label"], [1, "t-label-properties"], [1, "t-url"], ["tuiAutoFocus", "", 1, "t-input", 3, "ngModelChange", "keydown.enter", "ngModel"]], template: function ExampleTuiEmbedTool_Template(rf, ctx) {
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
    args: [{ selector: "embed-tool", imports: [FormsModule, TuiAutoFocus, TuiButton, TuiDropdown, TuiInputInline], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div\n    #dropdown\n    tuiDropdownAlign="start"\n    tuiDropdownDirection="bottom"\n    tuiDropdownLimitWidth="auto"\n    [tuiDropdown]="youtubeDropdown"\n    [tuiDropdownMinHeight]="0"\n    [tuiDropdownOpen]="false"\n>\n    <button\n        appearance="icon"\n        automation-id="embed-tool__button"\n        iconStart="@tui.code"\n        size="s"\n        tuiIconButton\n        tuiToolbarTool\n        type="button"\n        class="tool-button"\n    >\n        Embedded tool\n    </button>\n    <ng-template #youtubeDropdown>\n        <div class="embed-tool-content">\n            <label class="t-label">\n                <div class="t-label-properties">Embed URL</div>\n                <div class="t-url">\n                    <tui-input-inline\n                        tuiAutoFocus\n                        class="t-input"\n                        [class.t-input_filled]="url"\n                        [(ngModel)]="url"\n                        (keydown.enter)="embedSource(url)"\n                    >\n                        {{ placeholder }}\n                    </tui-input-inline>\n                </div>\n            </label>\n        </div>\n    </ng-template>\n</div>\n', styles: ["/* projects/demo/src/app/pages/embed/iframe/examples/1/embed-tool/embed-tool.styles.less */\n.tool-button {\n  transition-property: background;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n}\n.tool-button:hover {\n  background: var(--tui-background-neutral-1-hover);\n}\n.embed-tool-content {\n  display: flex;\n  min-block-size: 4rem;\n  align-items: center;\n  padding-inline-end: 0.75rem;\n}\n.t-label {\n  block-size: var(--tui-height-l);\n  box-sizing: border-box;\n  padding: 0.4375rem 1rem;\n  min-inline-size: 12.5rem;\n  max-inline-size: 25rem;\n  inline-size: 100%;\n}\n.t-input {\n  flex: 1;\n  color: var(--tui-text-secondary);\n}\n.t-input_filled {\n  color: var(--tui-text-primary);\n}\n/*# sourceMappingURL=embed-tool.styles.css.map */\n"] }]
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
var _Example = class _Example {
  constructor() {
    this.isNotStatic = inject(WA_IS_E2E) || isPlatformServer(inject(PLATFORM_ID));
    this.isE2E = inject(WA_IS_E2E);
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
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], exportAs: ["iframe-example"], features: [\u0275\u0275ProvidersFeature([provideTuiEditor({ iframe: true })])], decls: 15, vars: 5, consts: [[1, "editor", 3, "formControl", "tools"], ["ngProjectAs", "tools", 5, ["tools"]], ["tuiItem", ""], [1, "hint"], ["icon", "@tui.arrow-left"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
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
], styles: ["\n\n.hint[_ngcontent-%COMP%] {\n  display: flex;\n  color: var(--tui-border-hover);\n  block-size: 100%;\n  align-items: center;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var Example = _Example;
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
    ], exportAs: "iframe-example", changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideTuiEditor({ iframe: true })], template: '<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    <ng-container ngProjectAs="tools">\n        <embed-tool tuiItem />\n\n        <span class="hint">\n            <tui-icon icon="@tui.arrow-left" />\n            click it\n        </span>\n    </ng-container>\n</tui-editor>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n', styles: ["/* projects/demo/src/app/pages/embed/iframe/examples/1/index.less */\n.hint {\n  display: flex;\n  color: var(--tui-border-hover);\n  block-size: 100%;\n  align-items: center;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/embed/iframe/examples/1/index.ts", lineNumber: 34 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-OI5SBKD2.js.map
