import {
  TuiAddonDoc,
  TuiDocCode,
  TuiDocExample,
  TuiDocPage
} from "./chunk-RBECBQPG.js";
import "./chunk-XM3R7WR7.js";
import "./chunk-U2A4WWTO.js";
import "./chunk-GRGGAYF6.js";
import "./chunk-RC75ZLQU.js";
import "./chunk-XRNRJXWK.js";
import "./chunk-FKOUSXA3.js";
import "./chunk-6XV2X7BK.js";
import "./chunk-R3NXKXZ4.js";
import "./chunk-67AS2LST.js";
import "./chunk-ZBWOCD7G.js";
import "./chunk-5KWHOROR.js";
import "./chunk-7VRO2DFS.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-WNG4JUA7.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/upload-files/index.ts
function Example_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " You can use ");
    \u0275\u0275elementStart(1, "code");
    \u0275\u0275text(2, "TUI_ATTACH_FILES_LOADER");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " and ");
    \u0275\u0275elementStart(4, "code");
    \u0275\u0275text(5, "TUI_ATTACH_FILES_OPTIONS");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " tokens for attach any files in your editor ");
  }
}
function Example_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " This demo uses a local mock that produces ");
    \u0275\u0275elementStart(1, "code");
    \u0275\u0275text(2, "blob:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " URLs via ");
    \u0275\u0275elementStart(4, "code");
    \u0275\u0275text(5, "URL.createObjectURL");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " , so ");
    \u0275\u0275elementStart(7, "code");
    \u0275\u0275text(8, "protocols: ['blob']");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " is added to ");
    \u0275\u0275elementStart(10, "code");
    \u0275\u0275text(11, "provideTuiEditor");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " . With a real HTTP upload the server returns an ");
    \u0275\u0275elementStart(13, "code");
    \u0275\u0275text(14, "https://");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " URL, which is allowed by default \u2014 no extra link configuration needed. ");
  }
}
function Example_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " When ");
    \u0275\u0275elementStart(1, "code");
    \u0275\u0275text(2, "tui-toolbar");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " is used as a separate element outside ");
    \u0275\u0275elementStart(4, "code");
    \u0275\u0275text(5, "tui-editor");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " , bind ");
    \u0275\u0275elementStart(7, "code");
    \u0275\u0275text(8, "(fileAttached)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " on ");
    \u0275\u0275elementStart(10, "code");
    \u0275\u0275text(11, "tui-toolbar");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " directly \u2014 the event does not propagate to ");
    \u0275\u0275elementStart(13, "code");
    \u0275\u0275text(14, "tui-editor");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " automatically. The ");
    \u0275\u0275elementStart(16, "code");
    \u0275\u0275text(17, "protocols: ['blob']");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " option is only needed for this demo's mock \u2014 real ");
    \u0275\u0275elementStart(19, "code");
    \u0275\u0275text(20, "https://");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " URLs work without it. ");
  }
}
function Example_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " A single ");
    \u0275\u0275elementStart(1, "code");
    \u0275\u0275text(2, "tui-toolbar");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " can be shared across multiple ");
    \u0275\u0275elementStart(4, "code");
    \u0275\u0275text(5, "tui-editor");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " instances. Use ");
    \u0275\u0275elementStart(7, "code");
    \u0275\u0275text(8, "(focusIn)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " to track the active editor and pass it via ");
    \u0275\u0275elementStart(10, "code");
    \u0275\u0275text(11, "[editor]");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " . Bind ");
    \u0275\u0275elementStart(13, "code");
    \u0275\u0275text(14, "(fileAttached)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " on the toolbar \u2014 files will be attached to whichever editor was last focused. The ");
    \u0275\u0275elementStart(16, "code");
    \u0275\u0275text(17, "protocols: ['blob']");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " option is only needed for this demo's mock \u2014 real ");
    \u0275\u0275elementStart(19, "code");
    \u0275\u0275text(20, "https://");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " URLs work without it. ");
  }
}
var _Example = class _Example {
  constructor() {
    this.exampleFileAttach = import("./chunk-2RXQRWDX.js");
    this.component1 = import("./chunk-6GCJ43F3.js");
    this.example1 = {
      TypeScript: import("./chunk-5WZQVOJH.js"),
      HTML: import("./chunk-FUJBRCYS.js"),
      LESS: import("./chunk-JCRGNZJU.js"),
      "./upload.service.ts": import("./chunk-NXKGCOBQ.js"),
      "./file-loader.ts": import("./chunk-P2EW4RBX.js")
    };
    this.component2 = import("./chunk-LNHCMHX4.js");
    this.example2 = {
      TypeScript: import("./chunk-N5C4Q6SK.js"),
      HTML: import("./chunk-BC43NZDK.js"),
      LESS: import("./chunk-MDZ362E5.js"),
      "./upload.service.ts": import("./chunk-NXKGCOBQ.js"),
      "./file-loader.ts": import("./chunk-P2EW4RBX.js")
    };
    this.component3 = import("./chunk-KZMVSINA.js");
    this.example3 = {
      TypeScript: import("./chunk-WN7H3OFN.js"),
      HTML: import("./chunk-CYJY3PJN.js"),
      LESS: import("./chunk-K5PN4U4D.js"),
      "./upload.service.ts": import("./chunk-NXKGCOBQ.js"),
      "./file-loader.ts": import("./chunk-P2EW4RBX.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 14, vars: 11, consts: [["info", ""], ["uploadFilesInfo", ""], ["separateToolbarInfo", ""], ["sharedToolbarInfo", ""], ["heading", "Basic", 3, "description"], [3, "code"], ["heading", "Upload files", 3, "component", "content", "description"], ["heading", "Separate toolbar", 3, "component", "content", "description"], ["heading", "Shared toolbar", 3, "component", "content", "description"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-doc-page")(1, "tui-doc-example", 4);
    \u0275\u0275template(2, Example_ng_template_2_Template, 7, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(4, "tui-doc-code", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tui-doc-example", 6);
    \u0275\u0275template(6, Example_ng_template_6_Template, 16, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tui-doc-example", 7);
    \u0275\u0275template(9, Example_ng_template_9_Template, 22, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "tui-doc-example", 8);
    \u0275\u0275template(12, Example_ng_template_12_Template, 22, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const info_r1 = \u0275\u0275reference(3);
    const uploadFilesInfo_r2 = \u0275\u0275reference(7);
    const separateToolbarInfo_r3 = \u0275\u0275reference(10);
    const sharedToolbarInfo_r4 = \u0275\u0275reference(13);
    \u0275\u0275advance();
    \u0275\u0275property("description", info_r1);
    \u0275\u0275advance(3);
    \u0275\u0275property("code", ctx.exampleFileAttach);
    \u0275\u0275advance();
    \u0275\u0275property("component", ctx.component1)("content", ctx.example1)("description", uploadFilesInfo_r2);
    \u0275\u0275advance(3);
    \u0275\u0275property("component", ctx.component2)("content", ctx.example2)("description", separateToolbarInfo_r3);
    \u0275\u0275advance(3);
    \u0275\u0275property("component", ctx.component3)("content", ctx.example3)("description", sharedToolbarInfo_r4);
  }
}, dependencies: [TuiDocCode, TuiDocExample, TuiDocPage], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [TuiAddonDoc], changeDetection: ChangeDetectionStrategy.OnPush, template: `<tui-doc-page>
    <tui-doc-example
        heading="Basic"
        [description]="info"
    >
        <ng-template #info>
            You can use
            <code>TUI_ATTACH_FILES_LOADER</code>
            and
            <code>TUI_ATTACH_FILES_OPTIONS</code>
            tokens for attach any files in your editor
        </ng-template>
        <tui-doc-code [code]="exampleFileAttach" />
    </tui-doc-example>

    <tui-doc-example
        heading="Upload files"
        [component]="component1"
        [content]="example1"
        [description]="uploadFilesInfo"
    >
        <ng-template #uploadFilesInfo>
            This demo uses a local mock that produces
            <code>blob:</code>
            URLs via
            <code>URL.createObjectURL</code>
            , so
            <code>protocols: ['blob']</code>
            is added to
            <code>provideTuiEditor</code>
            . With a real HTTP upload the server returns an
            <code>https://</code>
            URL, which is allowed by default \u2014 no extra link configuration needed.
        </ng-template>
    </tui-doc-example>

    <tui-doc-example
        heading="Separate toolbar"
        [component]="component2"
        [content]="example2"
        [description]="separateToolbarInfo"
    >
        <ng-template #separateToolbarInfo>
            When
            <code>tui-toolbar</code>
            is used as a separate element outside
            <code>tui-editor</code>
            , bind
            <code>(fileAttached)</code>
            on
            <code>tui-toolbar</code>
            directly \u2014 the event does not propagate to
            <code>tui-editor</code>
            automatically. The
            <code>protocols: ['blob']</code>
            option is only needed for this demo's mock \u2014 real
            <code>https://</code>
            URLs work without it.
        </ng-template>
    </tui-doc-example>

    <tui-doc-example
        heading="Shared toolbar"
        [component]="component3"
        [content]="example3"
        [description]="sharedToolbarInfo"
    >
        <ng-template #sharedToolbarInfo>
            A single
            <code>tui-toolbar</code>
            can be shared across multiple
            <code>tui-editor</code>
            instances. Use
            <code>(focusIn)</code>
            to track the active editor and pass it via
            <code>[editor]</code>
            . Bind
            <code>(fileAttached)</code>
            on the toolbar \u2014 files will be attached to whichever editor was last focused. The
            <code>protocols: ['blob']</code>
            option is only needed for this demo's mock \u2014 real
            <code>https://</code>
            URLs work without it.
        </ng-template>
    </tui-doc-example>
</tui-doc-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/upload-files/index.ts", lineNumber: 9 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-SO6EOUUX.js.map
