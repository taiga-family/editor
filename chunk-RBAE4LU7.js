import {
  TuiTextarea,
  TuiTextareaComponent
} from "./chunk-ZTFTEO24.js";
import {
  TuiEditor,
  TuiEditorSocket,
  TuiToolbar,
  provideTuiEditor
} from "./chunk-NSTTLCZN.js";
import "./chunk-77Q7E6KR.js";
import "./chunk-ON6CMRJE.js";
import "./chunk-CGQ7SF5X.js";
import "./chunk-K4VHZDJ3.js";
import "./chunk-BMQKW5MW.js";
import "./chunk-AJXXSTGP.js";
import "./chunk-PZFOFBEJ.js";
import "./chunk-T7ACE4S4.js";
import "./chunk-DFL5NIEH.js";
import "./chunk-YCZ4XIMS.js";
import "./chunk-ZFBS4UHE.js";
import "./chunk-E2MCQ2GA.js";
import "./chunk-ZRZNAMTC.js";
import "./chunk-2EOU6FUY.js";
import "./chunk-PQORXA7M.js";
import "./chunk-3N57KBZI.js";
import {
  TuiSegmented
} from "./chunk-RSKDBJZQ.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-LWXG2KY6.js";
import "./chunk-XFLAHQA2.js";
import "./chunk-4W47VJX7.js";
import {
  TuiItem,
  TuiTextfieldComponent,
  TuiTextfieldOptionsDirective
} from "./chunk-L4I5LKBQ.js";
import {
  WA_IS_E2E
} from "./chunk-DFGPXHHY.js";
import "./chunk-HCLCQICK.js";
import "./chunk-F67AGDSR.js";
import "./chunk-QVEY2JIK.js";
import "./chunk-DEMSUB7H.js";
import "./chunk-MAMGYOWB.js";
import {
  TuiEditorTool
} from "./chunk-HPI4FTRE.js";
import "./chunk-CDRWMLUY.js";
import "./chunk-5464WHRF.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  NgControlStatus,
  RadioControlValueAccessor,
  ReactiveFormsModule
} from "./chunk-YZQ2AVZQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-6FE6LACA.js";
import "./chunk-OT66PQDS.js";
import "./chunk-6E3PG6FD.js";
import "./chunk-GAZHX25U.js";
import "./chunk-QAKA6OWS.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/images/link/examples/1/index.ts
function Example_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275element(1, "input", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const modeItem_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.mode)("value", modeItem_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", modeItem_r1, " ");
  }
}
function Example_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tui-editor", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formControl", ctx_r1.control)("tools", ctx_r1.codeTools);
  }
}
function Example_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-textfield", 3);
    \u0275\u0275element(1, "textarea", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.control)("min", 16);
  }
}
function Example_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "tui-editor-socket", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("content", ctx_r1.control.value);
  }
}
function Example_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.control.value);
  }
}
var _Example = class _Example {
  constructor() {
    this.isE2E = inject(WA_IS_E2E);
    this.modes = ["Editor", "Code"];
    this.mode = new FormControl("Editor", { nonNullable: true });
    this.codeTools = [];
    this.editor = viewChild(TuiEditor);
    this.tools = [
      TuiEditorTool.Undo,
      TuiEditorTool.Size,
      TuiEditorTool.Bold,
      TuiEditorTool.Link,
      TuiEditorTool.Img,
      TuiEditorTool.Clear
    ];
    this.control = new FormControl(
      /* HTML */
      `
            <p><a href="tel:89998887766">8 111 111 11 11</a></p>
            <p><a href="mailto:mail@mail.ru">mail@mail.com</a></p>
            <p>
                <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                >
                    <span style="font-size: 15px;">google.com</span>
                </a>
            </p>
            <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://taiga-ui.dev"
                style=""
            >
                <img
                    src="data:image/png;base64,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"
                    alt=""
                    title=""
                />
            </a>
            <p>Text</p>
        `,
      { nonNullable: true }
    );
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], viewQuery: function Example_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.editor, TuiEditor, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275ProvidersFeature([provideTuiEditor({ image: true })])], decls: 15, vars: 6, consts: [[3, "editor", "tools"], ["size", "s"], [3, "formControl", "tools"], ["tuiTextfieldSize", "m"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], ["type", "radio", 3, "formControl", "value"], ["tuiTextarea", "", 3, "formControl", "min"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-toolbar", 0)(1, "tui-segmented", 1);
    \u0275\u0275repeaterCreate(2, Example_For_3_Template, 3, 3, "label", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, Example_Conditional_4_Template, 1, 2, "tui-editor", 2)(5, Example_Conditional_5_Template, 2, 2, "tui-textfield", 3);
    \u0275\u0275elementStart(6, "tui-accordion", 4)(7, "button", 5);
    \u0275\u0275text(8, "HTML");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "tui-expand");
    \u0275\u0275template(10, Example_ng_container_10_Template, 2, 1, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 5);
    \u0275\u0275text(12, "Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "tui-expand");
    \u0275\u0275template(14, Example_ng_container_14_Template, 3, 1, "ng-container", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275property("editor", (tmp_0_0 = (tmp_0_0 = ctx.editor()) == null ? null : tmp_0_0.editor) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : null)("tools", ctx.tools);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.modes);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.mode.value === "Editor" ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("closeOthers", false);
    \u0275\u0275advance();
    \u0275\u0275property("tuiAccordion", ctx.isE2E);
    \u0275\u0275advance(4);
    \u0275\u0275property("tuiAccordion", ctx.isE2E);
  }
}, dependencies: [
  ReactiveFormsModule,
  DefaultValueAccessor,
  RadioControlValueAccessor,
  NgControlStatus,
  FormControlDirective,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand,
  TuiItem,
  TuiEditor,
  TuiEditorSocket,
  TuiSegmented,
  TuiTextareaComponent,
  TuiTextfieldComponent,
  TuiTextfieldOptionsDirective,
  TuiToolbar
], styles: ["\n\ntui-toolbar[_ngcontent-%COMP%] {\n  outline: none !important;\n}\ntui-toolbar[_ngcontent-%COMP%]     [tuiToolbarBlock]:last-child {\n  margin-inline-start: auto;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [
      ReactiveFormsModule,
      TuiAccordion,
      TuiEditor,
      TuiEditorSocket,
      TuiExpand,
      TuiItem,
      TuiSegmented,
      TuiTextarea,
      TuiToolbar
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideTuiEditor({ image: true })], template: `<tui-toolbar
    [editor]="editor()?.editor ?? null"
    [tools]="tools"
>
    <tui-segmented size="s">
        @for (modeItem of modes; track modeItem) {
            <label>
                <input
                    type="radio"
                    [formControl]="mode"
                    [value]="modeItem"
                />
                {{ modeItem }}
            </label>
        }
    </tui-segmented>
</tui-toolbar>

@if (mode.value === 'Editor') {
    <tui-editor
        [formControl]="control"
        [tools]="codeTools"
    />
} @else {
    <tui-textfield tuiTextfieldSize="m">
        <textarea
            tuiTextarea
            [formControl]="control"
            [min]="16"
        ></textarea>
    </tui-textfield>
}

<tui-accordion [closeOthers]="false">
    <button [tuiAccordion]="isE2E">HTML</button>
    <tui-expand>
        <ng-container *tuiItem>
            <tui-editor-socket [content]="control.value" />
        </ng-container>
    </tui-expand>

    <button [tuiAccordion]="isE2E">Text</button>
    <tui-expand>
        <ng-container *tuiItem>
            <span class="code">{{ control.value }}</span>
        </ng-container>
    </tui-expand>
</tui-accordion>
`, styles: ["/* projects/demo/src/app/pages/images/link/examples/1/index.less */\ntui-toolbar {\n  outline: none !important;\n}\ntui-toolbar ::ng-deep [tuiToolbarBlock]:last-child {\n  margin-inline-start: auto;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/images/link/examples/1/index.ts", lineNumber: 34 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-RBAE4LU7.js.map
