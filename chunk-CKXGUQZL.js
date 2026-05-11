import {
  TuiBoldButtonTool,
  TuiEditor,
  TuiFontSizeButtonTool,
  TuiItalicButtonTool,
  TuiToolbar,
  TuiUnderlineButtonTool,
  provideTuiEditor
} from "./chunk-KOEJR3UV.js";
import "./chunk-XUT57MFZ.js";
import "./chunk-ONGVM4GJ.js";
import "./chunk-MTFKGVUX.js";
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
import "./chunk-6XV2X7BK.js";
import "./chunk-R3NXKXZ4.js";
import "./chunk-ZBWOCD7G.js";
import "./chunk-JHFJB5LV.js";
import "./chunk-6RV2SSBI.js";
import "./chunk-CW45XSAV.js";
import {
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
} from "./chunk-WNG4JUA7.js";
import "./chunk-RXK6YP7O.js";
import "./chunk-FFR5OF2V.js";
import "./chunk-VUNK2IUC.js";
import "./chunk-OPLENYEC.js";
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
//# sourceMappingURL=chunk-CKXGUQZL.js.map
