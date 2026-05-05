import {
  TuiTextarea,
  TuiTextareaComponent
} from "./chunk-DVI64H4K.js";
import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-DV6NTZXX.js";
import "./chunk-LSJB2ZNP.js";
import "./chunk-7UNPMT6U.js";
import "./chunk-4IEDWFJO.js";
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
  TuiLabel,
  TuiTextfieldComponent
} from "./chunk-O2R5TA2P.js";
import "./chunk-C2RQT3I6.js";
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
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule,
  takeUntilDestroyed
} from "./chunk-7NTP4ZJW.js";
import "./chunk-7CQO4UTC.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
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
} from "./chunk-KCQY4XIQ.js";
import {
  Subject,
  debounceTime
} from "./chunk-JJYTWBAH.js";
import "./chunk-TPMK677Z.js";
import "./chunk-Q6WMBPZ3.js";
import "./chunk-IN2LCJCD.js";
import "./chunk-U65UEYRO.js";
import {
  __async
} from "./chunk-4MWRP73S.js";

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
  provideTuiEditor({ image: true }, () => __async(_Example, null, function* () {
    return import("./chunk-M3DX2FDS.js").then(({ TuiMarkdown }) => TuiMarkdown.configure({
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
    }));
  }))
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
      provideTuiEditor({ image: true }, () => __async(null, null, function* () {
        return import("./chunk-M3DX2FDS.js").then(({ TuiMarkdown }) => TuiMarkdown.configure({
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
        }));
      }))
    ], template: '<tui-editor\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    Placeholder\n</tui-editor>\n<tui-textfield\n    class="tui-space_top-5"\n    [style.min-height.rem]="30"\n>\n    <label tuiLabel>Markdown</label>\n    <textarea\n        tuiTextarea\n        [ngModel]="markdown"\n        (ngModelChange)="markdown$.next($event)"\n    ></textarea>\n</tui-textfield>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/markdown-extension/examples/1/index.ts", lineNumber: 56 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-VZGTJWEA.js.map
