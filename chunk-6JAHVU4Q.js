import {
  TuiTextarea,
  TuiTextareaComponent
} from "./chunk-G2M2MJZS.js";
import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-UG6QICQC.js";
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
import {
  TuiLabel,
  TuiTextfieldComponent
} from "./chunk-FKOUSXA3.js";
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
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule,
  takeUntilDestroyed
} from "./chunk-7VRO2DFS.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Subject,
  debounceTime,
  inject,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵviewQuerySignal
} from "./chunk-WNG4JUA7.js";
import "./chunk-RXK6YP7O.js";
import "./chunk-FFR5OF2V.js";
import "./chunk-VUNK2IUC.js";
import "./chunk-OPLENYEC.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/markdown-extension/examples/1/index.ts
var markdown = `# h1 Heading \u{1F60E}

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

----

![image info](./assets/icons/logo.svg)

More at [documentation](https://taiga-ui.dev)
`;
var _Example = class _Example {
  constructor() {
    this.editorRef = viewChild.required(TuiEditor);
    this.destroyRef = inject(DestroyRef);
    this.markdown$ = new Subject();
    this.builtInTools = [TuiEditorTool.Undo];
    this.control = new FormControl(markdown);
  }
  ngOnInit() {
    this.markdown$.pipe(debounceTime(500), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      this.editor?.commands.setContent(value);
    });
  }
  get editor() {
    return this.editorRef().editorService.getOriginTiptapEditor();
  }
  get markdown() {
    return this.editor?.storage.markdown?.getMarkdown() ?? "";
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], viewQuery: function Example_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.editorRef, TuiEditor, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275ProvidersFeature([
  provideTuiEditor({ image: true }, async () => import("./chunk-EXAGE7AN.js").then(({ TuiMarkdown }) => TuiMarkdown.configure({
    html: true,
    // Allow HTML input/output
    tightLists: true,
    // No <p> inside <li> in markdown output
    tightListClass: "tight",
    // Add class to <ul> allowing you to remove <p> margins when tight
    bulletListMarker: "-",
    // <li> prefix in markdown output
    linkify: true,
    // Create links from "https://..." text
    breaks: true,
    // New lines (\n) in markdown input are converted to <br>
    transformPastedText: true,
    // Allow to paste markdown text in the editor
    transformCopiedText: true
    // Copied text is transformed to markdown
  })))
])], decls: 6, vars: 5, consts: [[3, "formControl", "tools"], [1, "tui-space_top-5"], ["tuiLabel", ""], ["tuiTextarea", "", 3, "ngModelChange", "ngModel"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-editor", 0);
    \u0275\u0275text(1, " Placeholder\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tui-textfield", 1)(3, "label", 2);
    \u0275\u0275text(4, "Markdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "textarea", 3);
    \u0275\u0275listener("ngModelChange", function Example_Template_textarea_ngModelChange_5_listener($event) {
      return ctx.markdown$.next($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("min-height", 30, "rem");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.markdown);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ReactiveFormsModule, FormControlDirective, TuiEditor, TuiTextareaComponent, TuiLabel, TuiTextfieldComponent], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [FormsModule, ReactiveFormsModule, TuiEditor, TuiTextarea], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor({ image: true }, async () => import("./chunk-EXAGE7AN.js").then(({ TuiMarkdown }) => TuiMarkdown.configure({
        html: true,
        // Allow HTML input/output
        tightLists: true,
        // No <p> inside <li> in markdown output
        tightListClass: "tight",
        // Add class to <ul> allowing you to remove <p> margins when tight
        bulletListMarker: "-",
        // <li> prefix in markdown output
        linkify: true,
        // Create links from "https://..." text
        breaks: true,
        // New lines (\n) in markdown input are converted to <br>
        transformPastedText: true,
        // Allow to paste markdown text in the editor
        transformCopiedText: true
        // Copied text is transformed to markdown
      })))
    ], template: '<tui-editor\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    Placeholder\n</tui-editor>\n<tui-textfield\n    class="tui-space_top-5"\n    [style.min-height.rem]="30"\n>\n    <label tuiLabel>Markdown</label>\n    <textarea\n        tuiTextarea\n        [ngModel]="markdown"\n        (ngModelChange)="markdown$.next($event)"\n    ></textarea>\n</tui-textfield>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/markdown-extension/examples/1/index.ts", lineNumber: 56 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-6JAHVU4Q.js.map
