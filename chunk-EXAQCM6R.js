import {
  TuiBoldButtonTool,
  TuiEditor,
  TuiFontSizeButtonTool,
  TuiItalicButtonTool,
  TuiToolbar,
  TuiUnderlineButtonTool,
  provideTuiEditor
} from "./chunk-PCC4JY5W.js";
import "./chunk-BKBI5FDR.js";
import "./chunk-SP2RLMJ3.js";
import "./chunk-EINUTI2P.js";
import "./chunk-3FE37GZG.js";
import "./chunk-JJURWGWL.js";
import "./chunk-D77NNQR5.js";
import "./chunk-J54AAGPK.js";
import "./chunk-LRQ53CSP.js";
import "./chunk-HR6RGQTF.js";
import "./chunk-WRIQDWYS.js";
import "./chunk-ODLDHFKK.js";
import "./chunk-2ST3K3BL.js";
import "./chunk-IDGNFT5E.js";
import "./chunk-UZMOA7JP.js";
import "./chunk-XM5RTYUR.js";
import "./chunk-3YPDJXUW.js";
import "./chunk-X7GRIVH7.js";
import "./chunk-BILNAO2Z.js";
import "./chunk-M562FPU2.js";
import "./chunk-KD3HJTV7.js";
import "./chunk-5XN4VSG5.js";
import "./chunk-NSYJ5MQ7.js";
import "./chunk-6VV32JRO.js";
import {
  TuiEditorTool
} from "./chunk-3BHDA4GH.js";
import "./chunk-HZQ27SF5.js";
import "./chunk-CGIMAQGG.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-4FOPQVVL.js";
import {
  ChangeDetectionStrategy,
  Component,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵstyleProp
} from "./chunk-G7TA3DS4.js";
import "./chunk-46H3G724.js";
import "./chunk-G6LPKBY6.js";
import "./chunk-JCOA2MEW.js";
import "./chunk-QYO3DBNN.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/toolbar/floating/examples/1/index.ts
var _c0 = () => [];
var _Example = class _Example {
  constructor() {
    this.builtInTools = [
      TuiEditorTool.Undo,
      TuiEditorTool.Clear,
      TuiEditorTool.Color,
      TuiEditorTool.HR,
      TuiEditorTool.Img,
      TuiEditorTool.Link,
      TuiEditorTool.Table
    ];
    this.control = new FormControl(`
        <h2>What is Lorem Ipsum?</h2>
        <p>
            <a
                href="https://www.google.com/search?q=wikipedia&sca_esv=563020551&sxsrf=AB5stBhNcprCNZotMYrhf_8rPUA7JwZ4XQ%3A1693989718615&ei=Vjv4ZKGaJaPMwPAPx5m68Ag&ved=0ahUKEwihnbm7y5WBAxUjJhAIHceMDo4Q4dUDCBA&uact=5&oq=wikipedia&gs_lp=Egxnd3Mtd2l6LXNlcnAiCXdpa2lwZWRpYTIKEAAYigUYsQMYQzIKEAAYgAQYFBiHAjIHEAAYigUYQzILEAAYgAQYsQMYgwEyBxAAGIoFGEMyBxAAGIoFGEMyCBAAGIAEGLEDMgcQABiKBRhDMgUQABiABDIFEAAYgARIqDZQAFjRMXAAeAGQAQCYAYEBoAG4B6oBAzMuNrgBA8gBAPgBAcICBxAjGIoFGCfCAhEQLhiABBixAxiDARjHARjRA8ICCxAuGIAEGLEDGIMBwgINEAAYigUYsQMYgwEYQ8ICExAuGIoFGLEDGIMBGMcBGNEDGEPCAgoQLhiKBRjUAhhDwgINEAAYgAQYsQMYgwEYCsICDRAuGIoFGMcBGNEDGEPiAwQYACBBiAYB&sclient=gws-wiz-serp"
            >
                Lorem Ipsum
            </a>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    `);
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([
  provideTuiEditor({
    placeholder: { placeholder: "Type /" },
    heading: { levels: [1, 2, 3, 4, 5, 6] },
    image: true
  })
])], decls: 8, vars: 8, consts: [["editorRef", ""], [3, "editor", "tools"], ["appearance", "no-border", 3, "floatingToolbar", "formControl", "tools"], ["ngProjectAs", "tools", 5, ["tools"]], ["tuiFontSizeTool", ""], ["tuiBoldTool", ""], ["tuiItalicTool", ""], ["tuiUnderlineTool", ""]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tui-toolbar", 1);
    \u0275\u0275elementStart(1, "tui-editor", 2, 0);
    \u0275\u0275elementContainerStart(3, 3);
    \u0275\u0275element(4, "button", 4)(5, "button", 5)(6, "button", 6)(7, "button", 7);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const editorRef_r1 = \u0275\u0275reference(2);
    \u0275\u0275property("editor", editorRef_r1.editor)("tools", ctx.builtInTools);
    \u0275\u0275advance();
    \u0275\u0275styleProp("max-height", 400, "px");
    \u0275\u0275property("floatingToolbar", true)("formControl", ctx.control)("tools", \u0275\u0275pureFunction0(7, _c0));
  }
}, dependencies: [
  ReactiveFormsModule,
  NgControlStatus,
  FormControlDirective,
  TuiBoldButtonTool,
  TuiEditor,
  TuiFontSizeButtonTool,
  TuiItalicButtonTool,
  TuiToolbar,
  TuiUnderlineButtonTool
], styles: ["\n\n[tuiAppearance][data-appearance=no-border][_ngcontent-%COMP%] {\n  outline: none;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [
      ReactiveFormsModule,
      TuiBoldButtonTool,
      TuiEditor,
      TuiFontSizeButtonTool,
      TuiItalicButtonTool,
      TuiToolbar,
      TuiUnderlineButtonTool
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor({
        placeholder: { placeholder: "Type /" },
        heading: { levels: [1, 2, 3, 4, 5, 6] },
        image: true
      })
    ], template: '<tui-toolbar\n    [editor]="editorRef.editor"\n    [tools]="builtInTools"\n/>\n\n<tui-editor\n    #editorRef\n    appearance="no-border"\n    [floatingToolbar]="true"\n    [formControl]="control"\n    [style.max-height.px]="400"\n    [tools]="[]"\n>\n    <ng-container ngProjectAs="tools">\n        <button tuiFontSizeTool></button>\n        <button tuiBoldTool></button>\n        <button tuiItalicTool></button>\n        <button tuiUnderlineTool></button>\n    </ng-container>\n</tui-editor>\n', styles: ["/* projects/demo/src/app/pages/toolbar/floating/examples/1/index.less */\n[tuiAppearance][data-appearance=no-border] {\n  outline: none;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/toolbar/floating/examples/1/index.ts", lineNumber: 35 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-EXAQCM6R.js.map
