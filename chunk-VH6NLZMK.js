import {
  TuiTextarea,
  TuiTextareaComponent
} from "./chunk-YIDYVPQE.js";
import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-7AQ3YKF3.js";
import "./chunk-IGWQ3F4L.js";
import "./chunk-2ES6PUYZ.js";
import "./chunk-I7X6V4CT.js";
import "./chunk-75FDNOQF.js";
import "./chunk-VVRQ5RPZ.js";
import "./chunk-IHVGLZ2Q.js";
import "./chunk-NXH7MFHV.js";
import "./chunk-IIR3UFO4.js";
import "./chunk-R53H6MIJ.js";
import "./chunk-BYECHZ5B.js";
import "./chunk-XKG5XYPP.js";
import "./chunk-N24CUMQC.js";
import "./chunk-GMAQM436.js";
import "./chunk-AV7CKHNB.js";
import "./chunk-G5OGPCCF.js";
import "./chunk-KTNJ5Y6T.js";
import {
  TuiLabel,
  TuiTextfieldComponent
} from "./chunk-VBCJONIF.js";
import "./chunk-42JXV3G3.js";
import "./chunk-4FRPOUVT.js";
import "./chunk-YQZG6ATW.js";
import "./chunk-7YCTWNBQ.js";
import "./chunk-ZSGH4ALF.js";
import "./chunk-IK5IBJNP.js";
import {
  TuiEditorTool
} from "./chunk-V2BVSIUM.js";
import "./chunk-ZV6S7NWH.js";
import "./chunk-BQB57HZN.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule,
  takeUntilDestroyed
} from "./chunk-EEBAV3RI.js";
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
} from "./chunk-NS3244ZP.js";
import "./chunk-3YAE2G2V.js";
import "./chunk-HX6R2MZW.js";
import "./chunk-YFDPJ5PH.js";
import "./chunk-77B4UB4S.js";
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
    this.wysiwyg = viewChild.required(TuiEditor);
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
    return this.wysiwyg().editorService.getOriginTiptapEditor();
  }
  get markdown() {
    return this.editor?.storage.markdown.getMarkdown() ?? "";
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], viewQuery: function Example_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.wysiwyg, TuiEditor, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275ProvidersFeature([
  provideTuiEditor({ image: true }, async () => import("./chunk-OFYGPTMM.js").then(({ TuiMarkdown }) => TuiMarkdown.configure({
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
      provideTuiEditor({ image: true }, async () => import("./chunk-OFYGPTMM.js").then(({ TuiMarkdown }) => TuiMarkdown.configure({
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
//# sourceMappingURL=chunk-VH6NLZMK.js.map
