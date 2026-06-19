import {
  TuiTextarea,
  TuiTextareaComponent
} from "./chunk-74WSJO2C.js";
import {
  TuiEditor,
  provideTuiEditor
} from "./chunk-RH6GHVKL.js";
import "./chunk-EO7LQO3V.js";
import "./chunk-IYZNRN55.js";
import "./chunk-T3OKOD3A.js";
import "./chunk-OGDOLTW3.js";
import "./chunk-O4YFAAW5.js";
import "./chunk-FQYNGWGS.js";
import "./chunk-LXPXPQCS.js";
import "./chunk-INMNDEHV.js";
import "./chunk-J4TAEO4S.js";
import "./chunk-A33AM5OH.js";
import "./chunk-T5QAZXLT.js";
import "./chunk-CEVSZ4W2.js";
import "./chunk-FSPXCFZT.js";
import "./chunk-C7MBO5OX.js";
import "./chunk-IZQL34JE.js";
import "./chunk-GPYYXLWQ.js";
import {
  TuiLabel,
  TuiTextfieldComponent
} from "./chunk-X7GRIVH7.js";
import "./chunk-BILNAO2Z.js";
import "./chunk-M562FPU2.js";
import "./chunk-KD3HJTV7.js";
import "./chunk-HDBDXCXT.js";
import "./chunk-SWVF5MG7.js";
import "./chunk-FWDXC2LG.js";
import {
  TuiEditorTool
} from "./chunk-TU7TDGZA.js";
import "./chunk-3PCP22CS.js";
import "./chunk-CGIMAQGG.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule,
  takeUntilDestroyed
} from "./chunk-4FOPQVVL.js";
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
} from "./chunk-G7TA3DS4.js";
import "./chunk-4HJQMCHN.js";
import "./chunk-VV7RTGQI.js";
import "./chunk-I33OXPP7.js";
import "./chunk-Q52BLV3K.js";
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
  provideTuiEditor({ image: true }, async () => import("./chunk-DBTT64T5.js").then(({ TuiMarkdown }) => TuiMarkdown.configure({
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
      provideTuiEditor({ image: true }, async () => import("./chunk-DBTT64T5.js").then(({ TuiMarkdown }) => TuiMarkdown.configure({
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
//# sourceMappingURL=chunk-IRYV7QI5.js.map
