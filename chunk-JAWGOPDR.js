import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-FHEWIXBT.js";
import "./chunk-PVDK2H6E.js";
import "./chunk-GIXC74OZ.js";
import {
  TuiInputInline,
  TuiTiptapEditorService
} from "./chunk-BTIXJPXB.js";
import "./chunk-Y7XM5JQW.js";
import "./chunk-PZ6EFBVI.js";
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
import "./chunk-BWOAGEWN.js";
import "./chunk-X2HCUICK.js";
import "./chunk-4BKSQ4WE.js";
import "./chunk-MQBRMCSJ.js";
import "./chunk-VPQZPBK5.js";
import "./chunk-JIT3DKX5.js";
import "./chunk-E4VTS3R6.js";
import "./chunk-POEE2B5N.js";
import {
  TuiItem
} from "./chunk-FKOUSXA3.js";
import {
  TuiAutoFocus,
  TuiButton,
  TuiDropdown,
  TuiDropdownDirective,
  TuiDropdownOpen,
  TuiDropdownOptionsDirective,
  TuiIcon
} from "./chunk-6XV2X7BK.js";
import "./chunk-R3NXKXZ4.js";
import "./chunk-ZBWOCD7G.js";
import "./chunk-JHFJB5LV.js";
import "./chunk-F3EGT6EX.js";
import "./chunk-CW45XSAV.js";
import {
  TuiEditorTool
} from "./chunk-UXUYEKAA.js";
import "./chunk-RVX5RPAP.js";
import "./chunk-5KWHOROR.js";
import {
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-7VRO2DFS.js";
import {
  ChangeDetectionStrategy,
  Component,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-WNG4JUA7.js";
import "./chunk-XMOIN5M7.js";
import "./chunk-FFR5OF2V.js";
import "./chunk-VUNK2IUC.js";
import {
  Plugin
} from "./chunk-OPLENYEC.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/custom-tool/paste-image/examples/1/image-tool/image-tool.component.ts
var _c0 = ["dropdown"];
function ExampleTuiPasteImageTool_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 5)(2, "div", 6);
    \u0275\u0275text(3, "Image URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7)(5, "tui-input-inline", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ExampleTuiPasteImageTool_ng_template_4_Template_tui_input_inline_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.url, $event) || (ctx_r1.url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ExampleTuiPasteImageTool_ng_template_4_Template_tui_input_inline_keydown_enter_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.insertImage(ctx_r1.url));
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
var _ExampleTuiPasteImageTool = class _ExampleTuiPasteImageTool {
  constructor() {
    this.dropdown = viewChild.required("dropdown");
    this.editor = inject(TuiTiptapEditorService);
    this.youtubeLogo = "assets/icons/google.svg";
    this.placeholder = "Path to Image URL (ex. https://your-site.com/image.png)";
    this.url = "";
  }
  insertImage(src) {
    if (!src) {
      return;
    }
    this.editor.setImage(src);
    this.dropdown()?.close();
  }
};
_ExampleTuiPasteImageTool.\u0275fac = function ExampleTuiPasteImageTool_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExampleTuiPasteImageTool)();
};
_ExampleTuiPasteImageTool.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleTuiPasteImageTool, selectors: [["image-tool"]], viewQuery: function ExampleTuiPasteImageTool_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.dropdown, _c0, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, decls: 6, vars: 4, consts: [["dropdown", ""], ["youtubeDropdown", ""], ["tuiDropdownAlign", "start", "tuiDropdownDirection", "bottom", "tuiDropdownLimitWidth", "auto", 3, "tuiDropdown", "tuiDropdownMinHeight", "tuiDropdownOpen"], ["appearance", "flat", "automation-id", "youtube-tool__button", "size", "s", "tuiIconButton", "", "tuiToolbarTool", "", "type", "button", 1, "tool-button", 3, "iconStart"], [1, "youtube-tool-content"], [1, "t-label"], [1, "t-label-properties"], [1, "t-url"], ["tuiAutoFocus", "", 1, "t-input", 3, "ngModelChange", "keydown.enter", "ngModel"]], template: function ExampleTuiPasteImageTool_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2, 0)(2, "button", 3);
    \u0275\u0275text(3, " Youtube ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ExampleTuiPasteImageTool_ng_template_4_Template, 7, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const youtubeDropdown_r3 = \u0275\u0275reference(5);
    \u0275\u0275property("tuiDropdown", youtubeDropdown_r3)("tuiDropdownMinHeight", 0)("tuiDropdownOpen", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("iconStart", ctx.youtubeLogo);
  }
}, dependencies: [FormsModule, NgControlStatus, NgModel, TuiAutoFocus, TuiButton, TuiDropdownOptionsDirective, TuiDropdownDirective, TuiDropdownOpen, TuiInputInline], styles: ["\n\n.tool-button[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n}\n.tool-button[_ngcontent-%COMP%]:hover {\n  background: var(--tui-background-neutral-1-hover);\n}\n.youtube-tool-content[_ngcontent-%COMP%] {\n  display: flex;\n  min-block-size: 4rem;\n  align-items: center;\n  padding-inline-end: 0.75rem;\n}\n.t-label[_ngcontent-%COMP%] {\n  block-size: var(--tui-height-l);\n  box-sizing: border-box;\n  padding: 0.4375rem 1rem;\n  min-inline-size: 12.5rem;\n  max-inline-size: 25rem;\n  inline-size: 100%;\n}\n.t-input[_ngcontent-%COMP%] {\n  flex: 1;\n  color: var(--tui-text-secondary);\n}\n.t-input_filled[_ngcontent-%COMP%] {\n  color: var(--tui-text-primary);\n}\n.t-url[_ngcontent-%COMP%] {\n  max-inline-size: 12.5rem;\n  min-inline-size: 12.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=image-tool.styles.css.map */"], changeDetection: 0 });
var ExampleTuiPasteImageTool = _ExampleTuiPasteImageTool;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleTuiPasteImageTool, [{
    type: Component,
    args: [{ selector: "image-tool", imports: [FormsModule, TuiAutoFocus, TuiButton, TuiDropdown, TuiInputInline], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div\n    #dropdown\n    tuiDropdownAlign="start"\n    tuiDropdownDirection="bottom"\n    tuiDropdownLimitWidth="auto"\n    [tuiDropdown]="youtubeDropdown"\n    [tuiDropdownMinHeight]="0"\n    [tuiDropdownOpen]="false"\n>\n    <button\n        appearance="flat"\n        automation-id="youtube-tool__button"\n        size="s"\n        tuiIconButton\n        tuiToolbarTool\n        type="button"\n        class="tool-button"\n        [iconStart]="youtubeLogo"\n    >\n        Youtube\n    </button>\n    <ng-template #youtubeDropdown>\n        <div class="youtube-tool-content">\n            <label class="t-label">\n                <div class="t-label-properties">Image URL</div>\n                <div class="t-url">\n                    <tui-input-inline\n                        tuiAutoFocus\n                        class="t-input"\n                        [class.t-input_filled]="url"\n                        [(ngModel)]="url"\n                        (keydown.enter)="insertImage(url)"\n                    >\n                        {{ placeholder }}\n                    </tui-input-inline>\n                </div>\n            </label>\n        </div>\n    </ng-template>\n</div>\n', styles: ["/* projects/demo/src/app/pages/custom-tool/paste-image/examples/1/image-tool/image-tool.styles.less */\n.tool-button {\n  transition-property: background;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n}\n.tool-button:hover {\n  background: var(--tui-background-neutral-1-hover);\n}\n.youtube-tool-content {\n  display: flex;\n  min-block-size: 4rem;\n  align-items: center;\n  padding-inline-end: 0.75rem;\n}\n.t-label {\n  block-size: var(--tui-height-l);\n  box-sizing: border-box;\n  padding: 0.4375rem 1rem;\n  min-inline-size: 12.5rem;\n  max-inline-size: 25rem;\n  inline-size: 100%;\n}\n.t-input {\n  flex: 1;\n  color: var(--tui-text-secondary);\n}\n.t-input_filled {\n  color: var(--tui-text-primary);\n}\n.t-url {\n  max-inline-size: 12.5rem;\n  min-inline-size: 12.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=image-tool.styles.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleTuiPasteImageTool, { className: "ExampleTuiPasteImageTool", filePath: "projects/demo/src/app/pages/custom-tool/paste-image/examples/1/image-tool/image-tool.component.ts", lineNumber: 15 });
})();

// projects/demo/src/app/pages/custom-tool/paste-image/examples/1/image-tool/paste.extension.ts
var IMAGE_CLIPBOARD_PASTE_EXTENSION = {
  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          handleDOMEvents: {
            paste: (view, event) => {
              const url = event.clipboardData?.getData("text/plain") ?? "";
              const isImage = /^https?:\/\/.+\.(?:jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
              if (isImage) {
                const node = view.state.schema.nodes.image?.create({
                  src: url
                });
                if (!node) {
                  return;
                }
                console.info("Image embedded via link", isImage);
                const transaction = view.state.tr.replaceSelectionWith(node);
                setTimeout(() => view.dispatch(transaction));
                event.preventDefault();
              }
            }
          }
        }
      })
    ];
  }
};

// projects/demo/src/app/pages/custom-tool/paste-image/examples/1/index.ts
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
  provideTuiEditor(async (injector) => import("./chunk-TUM7F6CV.js").then(({ tuiCreateImageEditorExtension }) => tuiCreateImageEditorExtension({ injector }).extend(IMAGE_CLIPBOARD_PASTE_EXTENSION)))
])], decls: 6, vars: 2, consts: [[1, "editor", 3, "formControl", "tools"], ["ngProjectAs", "tools", 5, ["tools"]], ["tuiItem", ""], [1, "hint"], ["icon", "@tui.arrow-left"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-editor", 0);
    \u0275\u0275elementContainerStart(1, 1);
    \u0275\u0275element(2, "image-tool", 2);
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275element(4, "tui-icon", 4);
    \u0275\u0275text(5, " click it ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools);
  }
}, dependencies: [ExampleTuiPasteImageTool, ReactiveFormsModule, NgControlStatus, FormControlDirective, TuiEditor, TuiIcon, TuiItem], styles: ["\n\n.hint[_ngcontent-%COMP%] {\n  display: flex;\n  color: var(--tui-border-hover);\n  block-size: 100%;\n  align-items: center;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [ExampleTuiPasteImageTool, ReactiveFormsModule, TuiEditor, TuiIcon, TuiItem], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor(async (injector) => import("./chunk-TUM7F6CV.js").then(({ tuiCreateImageEditorExtension }) => tuiCreateImageEditorExtension({ injector }).extend(IMAGE_CLIPBOARD_PASTE_EXTENSION)))
    ], template: '<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    <ng-container ngProjectAs="tools">\n        <image-tool tuiItem />\n\n        <span class="hint">\n            <tui-icon icon="@tui.arrow-left" />\n            click it\n        </span>\n    </ng-container>\n</tui-editor>\n', styles: ["/* projects/demo/src/app/pages/custom-tool/paste-image/examples/1/index.less */\n.hint {\n  display: flex;\n  color: var(--tui-border-hover);\n  block-size: 100%;\n  align-items: center;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/custom-tool/paste-image/examples/1/index.ts", lineNumber: 25 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-JAWGOPDR.js.map
