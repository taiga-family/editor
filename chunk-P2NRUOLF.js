import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-ULLNWCHK.js";
import "./chunk-WCJAXZXO.js";
import "./chunk-CD3ZDPWT.js";
import "./chunk-J5UAEM45.js";
import "./chunk-ZB2SK7NT.js";
import "./chunk-KFJ6GJTL.js";
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
import "./chunk-7CX5NSUY.js";
import "./chunk-RS2S3DLU.js";
import "./chunk-ZL2NLOVI.js";
import "./chunk-WQSN4Q62.js";
import "./chunk-F47ZTIMH.js";
import "./chunk-H6B6ZN6C.js";
import "./chunk-VCEUECWR.js";
import "./chunk-EHYODUHD.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-43T2765T.js";
import {
  TuiItem
} from "./chunk-TO6IF4KK.js";
import {
  WA_IS_E2E
} from "./chunk-2LK3XWNF.js";
import "./chunk-UK3D2IJN.js";
import "./chunk-LTRKP6XS.js";
import "./chunk-AHSN3FX6.js";
import "./chunk-OR7YRS4P.js";
import "./chunk-2X7NNA2Q.js";
import {
  TUI_ATTACH_FILES_LOADER,
  TUI_ATTACH_FILES_OPTIONS,
  TuiEditorTool
} from "./chunk-WUF6K6RJ.js";
import "./chunk-WLOLI4OQ.js";
import {
  tuiTypedFromEvent
} from "./chunk-UO32WQJY.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  Validators
} from "./chunk-XQBFNBOU.js";
import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  inject,
  isPlatformServer,
  map,
  of,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-QZKNXBAU.js";
import "./chunk-TPMK677Z.js";
import "./chunk-Q6WMBPZ3.js";
import "./chunk-IN2LCJCD.js";
import "./chunk-U65UEYRO.js";
import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/embed/pdf/examples/1/index.ts
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
    this.editor = viewChild.required(TuiEditor);
    this.isE2E = inject(WA_IS_E2E);
    this.isNotStatic = inject(WA_IS_E2E) || isPlatformServer(inject(PLATFORM_ID));
    this.builtInTools = [
      TuiEditorTool.Undo,
      TuiEditorTool.Link,
      TuiEditorTool.Attach
    ];
    this.control = new FormControl(this.isNotStatic ? "" : `
            <p>sample.pdf</p>
            <iframe
                data-type="iframe-editor"
                src="https://mozilla.github.io/pdf.js/web/viewer.html?url=https://pdfobject.com/pdf/sample.pdf"
                width="100%"
                height="300"
            ></iframe>
            <p>Hello world</p>
    `, Validators.required);
  }
  attach([file]) {
    if (!file) {
      return;
    }
    this.editor().editorService.getOriginTiptapEditor()?.chain().focus("end").createParagraphNear().insertContent(file.name).run();
    this.editor().editorService.setIframe({
      allowfullscreen: false,
      frameborder: null,
      // For example, src: `https://mozilla.github.io/pdf.js/web/viewer.html?url${file.link}`,
      src: `data:application/pdf;base64${file.link}`,
      width: "100%",
      height: 300
    });
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
}, hostAttrs: [1, "html5-editor-example"], hostVars: 2, hostBindings: function Example_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275classProp("_e2e", ctx.isNotStatic);
  }
}, exportAs: ["pdf-example"], features: [\u0275\u0275ProvidersFeature([
  provideTuiEditor({ iframe: true }),
  {
    provide: TUI_ATTACH_FILES_LOADER,
    useFactory: () => ([file]) => {
      if (!file) {
        return of([]);
      }
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      return tuiTypedFromEvent(fileReader, "load").pipe(map(() => [
        {
          name: file.name,
          /* base64 or link to the file on your server */
          link: String(fileReader.result),
          attrs: { type: file.type }
        }
      ]));
    }
  },
  {
    provide: TUI_ATTACH_FILES_OPTIONS,
    useValue: {
      accept: "application/pdf",
      multiple: false
    }
  }
])], decls: 10, vars: 5, consts: [[1, "editor", 3, "fileAttached", "formControl", "tools"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-editor", 0);
    \u0275\u0275listener("fileAttached", function Example_Template_tui_editor_fileAttached_0_listener($event) {
      return ctx.attach($event);
    });
    \u0275\u0275elementEnd();
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
], styles: ["\n\n.editor[_ngcontent-%COMP%] {\n  min-block-size: 43.75rem;\n}\n  iframe {\n  border: 0.0625rem solid var(--tui-background-accent-1);\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
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
    ], exportAs: "pdf-example", changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor({ iframe: true }),
      {
        provide: TUI_ATTACH_FILES_LOADER,
        useFactory: () => ([file]) => {
          if (!file) {
            return of([]);
          }
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          return tuiTypedFromEvent(fileReader, "load").pipe(map(() => [
            {
              name: file.name,
              /* base64 or link to the file on your server */
              link: String(fileReader.result),
              attrs: { type: file.type }
            }
          ]));
        }
      },
      {
        provide: TUI_ATTACH_FILES_OPTIONS,
        useValue: {
          accept: "application/pdf",
          multiple: false
        }
      }
    ], host: {
      class: "html5-editor-example",
      "[class._e2e]": "isNotStatic"
    }, template: '<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n    (fileAttached)="attach($event)"\n/>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n', styles: ["/* projects/demo/src/app/pages/embed/pdf/examples/1/index.less */\n.editor {\n  min-block-size: 43.75rem;\n}\n::ng-deep iframe {\n  border: 0.0625rem solid var(--tui-background-accent-1);\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/embed/pdf/examples/1/index.ts", lineNumber: 85 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-P2NRUOLF.js.map
