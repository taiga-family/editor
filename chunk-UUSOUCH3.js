import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-W6GQCH54.js";
import "./chunk-6MP7IPJW.js";
import "./chunk-CQCVA6IH.js";
import "./chunk-35INNUXK.js";
import "./chunk-HEWXKLLS.js";
import "./chunk-FSBD2B32.js";
import "./chunk-MOZWJJCS.js";
import "./chunk-XK45D6UZ.js";
import "./chunk-NGQVSVIB.js";
import "./chunk-DD32KBA7.js";
import "./chunk-C4PFMQ72.js";
import "./chunk-LT7X7D6S.js";
import "./chunk-O7DJUOJG.js";
import "./chunk-VV3D2HHM.js";
import "./chunk-2MSSL2IN.js";
import "./chunk-MO4NYBTB.js";
import "./chunk-W4U25YU5.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-UOROJ4OO.js";
import {
  TuiItem
} from "./chunk-D3YV7ZHS.js";
import {
  WA_IS_E2E
} from "./chunk-NLNCZRCI.js";
import "./chunk-LPBSAZLJ.js";
import "./chunk-DMAZJOQQ.js";
import "./chunk-SID5SRJX.js";
import "./chunk-2SAJKKTH.js";
import "./chunk-QD3ZUMKY.js";
import {
  TuiEditorTool,
  provideTuiEditorOptions
} from "./chunk-MKSJ7GZB.js";
import "./chunk-IKZS23CJ.js";
import "./chunk-EMEGSUC4.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-5BSJ6YPL.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KFKFA6WT.js";
import "./chunk-YANEK5OP.js";
import "./chunk-JTJXQAN7.js";
import "./chunk-PSTGTYGJ.js";
import {
  mergeAttributes
} from "./chunk-LXNO5FKD.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/font/examples/1/index.ts
function Example_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "tui-editor-socket", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("content", ctx_r0.control.value);
  }
}
function Example_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 5);
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
    this.builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Size];
    this.isE2E = inject(WA_IS_E2E);
    this.control = new FormControl(`
        <h1>This is a 1st level heading</h1>
        <h2>This is a 2nd level heading</h2>
        <h3>This is a 3rd level heading</h3>
        <h4>This is a 4th level heading</h4>
        <h5>This is a 5th level heading</h5>
        <h6>This is a 6th level heading</h6>
        <p>This is a paragraph</p>
    `);
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([
  provideTuiEditorOptions({
    fontOptions: () => [
      { name: "H1", headingLevel: 1 },
      { name: "H2", headingLevel: 2 },
      { name: "H3", headingLevel: 3 },
      { name: "H4", headingLevel: 4 },
      { name: "H5", headingLevel: 5 },
      { name: "H6", headingLevel: 6 }
    ]
  }),
  provideTuiEditor(async () => import("./chunk-IFCRBIDR.js").then(({ Heading }) => Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }).extend({
    renderHTML({ node, HTMLAttributes }) {
      const classes = {
        1: "text-h1",
        2: "text-h2",
        3: "text-h3",
        4: "text-h4",
        5: "text-h5",
        6: "text-h6"
      };
      const hasLevel = this.options.levels.includes(node.attrs.level);
      const level = hasLevel ? node.attrs.level : this.options.levels[0];
      return [
        `h${level}`,
        mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, { class: classes[level] }),
        0
      ];
    }
  })))
])], decls: 10, vars: 5, consts: [[1, "heading", 3, "formControl", "tools"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tui-editor", 0);
    \u0275\u0275elementStart(1, "tui-accordion", 1)(2, "button", 2);
    \u0275\u0275text(3, "HTML");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "tui-expand");
    \u0275\u0275template(5, Example_ng_container_5_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 2);
    \u0275\u0275text(7, "Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tui-expand");
    \u0275\u0275template(9, Example_ng_container_9_Template, 3, 1, "ng-container", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools);
    \u0275\u0275advance();
    \u0275\u0275property("closeOthers", false);
    \u0275\u0275advance();
    \u0275\u0275property("tuiAccordion", ctx.isE2E);
    \u0275\u0275advance(4);
    \u0275\u0275property("tuiAccordion", ctx.isE2E);
  }
}, dependencies: [
  ReactiveFormsModule,
  NgControlStatus,
  FormControlDirective,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand,
  TuiItem,
  TuiEditor,
  TuiEditorSocket
], styles: ["\n\n[_nghost-%COMP%]     .text-h1, \n[_nghost-%COMP%]     .text-h2, \n[_nghost-%COMP%]     .text-h3, \n[_nghost-%COMP%]     .text-h4, \n[_nghost-%COMP%]     .text-h5, \n[_nghost-%COMP%]     .text-h6 {\n  margin: 0.3125rem 0;\n}\n[_nghost-%COMP%]     .text-h1 {\n  color: #f00;\n}\n[_nghost-%COMP%]     .text-h2 {\n  color: #00f;\n}\n[_nghost-%COMP%]     .text-h3 {\n  color: #008000;\n}\n[_nghost-%COMP%]     .text-h4 {\n  color: #808080;\n}\n[_nghost-%COMP%]     .text-h5 {\n  color: #ffc0cb;\n}\n[_nghost-%COMP%]     .text-h6 {\n  color: #8a2be2;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
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
      TuiItem
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditorOptions({
        fontOptions: () => [
          { name: "H1", headingLevel: 1 },
          { name: "H2", headingLevel: 2 },
          { name: "H3", headingLevel: 3 },
          { name: "H4", headingLevel: 4 },
          { name: "H5", headingLevel: 5 },
          { name: "H6", headingLevel: 6 }
        ]
      }),
      provideTuiEditor(async () => import("./chunk-IFCRBIDR.js").then(({ Heading }) => Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }).extend({
        renderHTML({ node, HTMLAttributes }) {
          const classes = {
            1: "text-h1",
            2: "text-h2",
            3: "text-h3",
            4: "text-h4",
            5: "text-h5",
            6: "text-h6"
          };
          const hasLevel = this.options.levels.includes(node.attrs.level);
          const level = hasLevel ? node.attrs.level : this.options.levels[0];
          return [
            `h${level}`,
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, { class: classes[level] }),
            0
          ];
        }
      })))
    ], template: '<tui-editor\n    class="heading"\n    [formControl]="control"\n    [tools]="builtInTools"\n/>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n', styles: ["/* projects/demo/src/app/pages/font/examples/1/index.less */\n:host ::ng-deep .text-h1,\n:host ::ng-deep .text-h2,\n:host ::ng-deep .text-h3,\n:host ::ng-deep .text-h4,\n:host ::ng-deep .text-h5,\n:host ::ng-deep .text-h6 {\n  margin: 0.3125rem 0;\n}\n:host ::ng-deep .text-h1 {\n  color: #f00;\n}\n:host ::ng-deep .text-h2 {\n  color: #00f;\n}\n:host ::ng-deep .text-h3 {\n  color: #008000;\n}\n:host ::ng-deep .text-h4 {\n  color: #808080;\n}\n:host ::ng-deep .text-h5 {\n  color: #ffc0cb;\n}\n:host ::ng-deep .text-h6 {\n  color: #8a2be2;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/font/examples/1/index.ts", lineNumber: 79 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-UUSOUCH3.js.map
