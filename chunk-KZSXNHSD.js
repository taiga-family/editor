import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-GUXKSSXB.js";
import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-QWXTPXAR.js";
import "./chunk-JISC74IQ.js";
import "./chunk-XLA4OBVG.js";
import "./chunk-CZJXMXHX.js";
import "./chunk-AJCAW3YX.js";
import "./chunk-2QRDY5ZS.js";
import "./chunk-PJJ4EG5U.js";
import "./chunk-LR6MFXG2.js";
import "./chunk-N3XZP6Z7.js";
import "./chunk-6JDH2PV3.js";
import "./chunk-7QK2CPSE.js";
import "./chunk-WBHAP4JC.js";
import "./chunk-X3PSOWX2.js";
import "./chunk-E3TKWIMT.js";
import "./chunk-HSMAYE7Z.js";
import "./chunk-ARYGUNWN.js";
import "./chunk-3L6ILX4W.js";
import "./chunk-M6TSJ4NT.js";
import "./chunk-BAXR2EDS.js";
import "./chunk-3MA5NXQZ.js";
import "./chunk-IG5NUA4T.js";
import "./chunk-LPOWL4X5.js";
import "./chunk-RURN6JQY.js";
import "./chunk-QOV567V2.js";
import "./chunk-UFW7RGXF.js";
import "./chunk-X7NG6AFM.js";
import "./chunk-RB5ZTUSK.js";
import "./chunk-TKB72JFC.js";
import "./chunk-ZL2NLOVI.js";
import "./chunk-WQSN4Q62.js";
import "./chunk-F47ZTIMH.js";
import "./chunk-H6B6ZN6C.js";
import "./chunk-VCEUECWR.js";
import "./chunk-EHYODUHD.js";
import "./chunk-K3KVBV5Y.js";
import {
  TuiAvatar
} from "./chunk-L5QVMFBS.js";
import {
  TuiDataList,
  TuiDataListComponent,
  TuiItem,
  TuiOption,
  TuiTextfield,
  TuiTextfieldDropdownDirective
} from "./chunk-M277MCZ7.js";
import {
  TUI_IS_E2E
} from "./chunk-3VK442GK.js";
import "./chunk-XI2RCXXD.js";
import "./chunk-AHSN3FX6.js";
import "./chunk-3ZVYWLQ5.js";
import "./chunk-2X7NNA2Q.js";
import {
  TuiEditorTool
} from "./chunk-NBZDMZNA.js";
import "./chunk-Q4JLRECA.js";
import "./chunk-6A2ZSXM6.js";
import "./chunk-LBJNUVBM.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  tuiPure
} from "./chunk-2QWGY2YZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Pipe,
  ViewEncapsulation,
  inject,
  input,
  output,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-SLVEPEAC.js";
import {
  __esDecorate,
  __runInitializers
} from "./chunk-CJ7OSSQR.js";
import "./chunk-TPMK677Z.js";
import "./chunk-Q6WMBPZ3.js";
import "./chunk-IN2LCJCD.js";
import "./chunk-G3QJNC4B.js";
import "./chunk-U65UEYRO.js";
import {
  __async
} from "./chunk-4MWRP73S.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-initials.mjs
var _TuiInitialsPipe = class _TuiInitialsPipe {
  transform(text) {
    return text.toUpperCase().split(" ").map(([char]) => char).join("").slice(0, 2);
  }
};
_TuiInitialsPipe.\u0275fac = function TuiInitialsPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiInitialsPipe)();
};
_TuiInitialsPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
  name: "tuiInitials",
  type: _TuiInitialsPipe,
  pure: true
});
var TuiInitialsPipe = _TuiInitialsPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInitialsPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiInitials"
    }]
  }], null, null);
})();

// projects/demo/src/app/pages/mention/examples/1/mention/index.ts
var _c0 = ["container"];
var _forTrack0 = ($index, $item) => $item.login;
function Mentions_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3, 1);
    \u0275\u0275listener("click", function Mentions_For_4_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setMention.emit(item_r2));
    })("keydown.enter", function Mentions_For_4_Template_button_keydown_enter_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setMention.emit(item_r2));
    });
    \u0275\u0275text(2);
    \u0275\u0275element(3, "tui-avatar", 4);
    \u0275\u0275pipe(4, "tuiInitials");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r2.avatar || \u0275\u0275pipeBind1(4, 2, item_r2.name));
  }
}
var Mentions = (() => {
  var _a;
  let _instanceExtraInitializers = [];
  let _getFilteredItems_decorators;
  return _a = class {
    constructor() {
      this.container = (__runInitializers(this, _instanceExtraInitializers), viewChild.required("container", { read: ElementRef }));
      this.items = [
        {
          name: "Alexander Inkin",
          avatar: "https://taiga-ui.dev/assets/images/avatar.jpg",
          login: "a.inkin"
        },
        {
          name: "Roman Sedov",
          avatar: "",
          login: "r.sedov"
        }
      ];
      this.mentionSuggestions = input();
      this.setMention = output();
    }
    getFilteredItems(items, search) {
      return search?.length ? items.filter(({ name, login }) => login.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) || name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())) : items;
    }
    down(event, isDown) {
      const buttons = Array.from(this.el?.querySelectorAll("button") ?? []);
      const button = isDown ? buttons[0] : buttons[buttons.length - 1];
      if (!this.el?.contains(event.target)) {
        button?.focus();
      }
    }
    get el() {
      return this.container().nativeElement ?? null;
    }
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
    _getFilteredItems_decorators = [tuiPure];
    __esDecorate(_a, null, _getFilteredItems_decorators, { kind: "method", name: "getFilteredItems", static: false, private: false, access: { has: (obj) => "getFilteredItems" in obj, get: (obj) => obj.getFilteredItems }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a.\u0275fac = function Mentions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _a)();
  }, _a.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _a, selectors: [["mentions"]], viewQuery: function Mentions_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.container, _c0, 5, ElementRef);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, hostBindings: function Mentions_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.arrowUp", function Mentions_keydown_arrowUp_HostBindingHandler($event) {
        return ctx.down($event, false);
      }, false, \u0275\u0275resolveWindow)("keydown.arrowDown", function Mentions_keydown_arrowDown_HostBindingHandler($event) {
        return ctx.down($event, true);
      }, false, \u0275\u0275resolveWindow);
    }
  }, inputs: { mentionSuggestions: [1, "mentionSuggestions"] }, outputs: { setMention: "setMention" }, decls: 5, vars: 0, consts: [["container", ""], ["button", ""], ["tuiOption", "", "type", "button"], ["tuiOption", "", "type", "button", 3, "click", "keydown.enter"], ["size", "s", 3, "src"]], template: function Mentions_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "tui-data-list")(1, "div", null, 0);
      \u0275\u0275repeaterCreate(3, Mentions_For_4_Template, 5, 4, "button", 2, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.getFilteredItems(ctx.items, ctx.mentionSuggestions()));
    }
  }, dependencies: [TuiAvatar, TuiDataListComponent, TuiOption, TuiInitialsPipe], encapsulation: 2, changeDetection: 0 }), _a;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Mentions, [{
    type: Component,
    args: [{ selector: "mentions", imports: [TuiAvatar, TuiDataList, TuiInitialsPipe], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "(window:keydown.arrowUp)": "down($event, false)",
      "(window:keydown.arrowDown)": "down($event, true)"
    }, template: '<tui-data-list>\n    <div #container>\n        @for (item of getFilteredItems(items, mentionSuggestions()); track item.login) {\n            <button\n                #button\n                tuiOption\n                type="button"\n                (click)="setMention.emit(item)"\n                (keydown.enter)="setMention.emit(item)"\n            >\n                {{ item.name }}\n                <tui-avatar\n                    size="s"\n                    [src]="item.avatar || (item.name | tuiInitials)"\n                />\n            </button>\n        }\n    </div>\n</tui-data-list>\n' }]
  }], null, { getFilteredItems: [] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Mentions, { className: "Mentions", filePath: "projects/demo/src/app/pages/mention/examples/1/mention/index.ts", lineNumber: 29 });
})();

// projects/demo/src/app/pages/mention/examples/1/index.ts
function Example_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mentions", 5);
    \u0275\u0275listener("setMention", function Example_ng_container_1_Template_mentions_setMention_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMention($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("mentionSuggestions", ctx_r1.wysiwyg().mentionSuggestions);
  }
}
function Example_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "tui-editor-socket", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("content", ctx_r1.control.value);
  }
}
function Example_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 7);
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
    this.wysiwyg = viewChild.required(TuiEditor);
    this.isE2E = inject(TUI_IS_E2E);
    this.builtInTools = [
      TuiEditorTool.Undo,
      TuiEditorTool.Size,
      TuiEditorTool.Link
    ];
    this.control = new FormControl(`
        <p><span class="my-mention" data-type="mention" data-user="7dabb7f0-099b-4c19-b70c-7a5ebdf53a86">@m.ivanov</span> FYI</p>
    `);
  }
  setMention(item) {
    const editor = this.wysiwyg().editor?.getOriginTiptapEditor();
    if (!editor) {
      return;
    }
    const uuid = crypto.randomUUID();
    const replaceText = `<span class="my-mention" data-type="mention" data-user="${uuid}">@${item.login}</span>&nbsp;`;
    const to = editor.state.selection.to;
    const from = editor.state.selection.from - this.wysiwyg().mentionSuggestions.length - 1;
    editor.chain().focus().insertContentAt({ from, to }, replaceText).run();
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
  provideTuiEditor(() => __async(_Example, null, function* () {
    return import("./chunk-NOEJKQKS.js").then(({ TuiMention }) => TuiMention);
  }))
])], decls: 11, vars: 6, consts: [["placeholder", "Required text *", 3, "formControl", "tools", "tuiDropdownOpen"], [4, "tuiTextfieldDropdown"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "setMention", "mentionSuggestions"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-editor", 0);
    \u0275\u0275template(1, Example_ng_container_1_Template, 2, 1, "ng-container", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tui-accordion", 2)(3, "button", 3);
    \u0275\u0275text(4, "HTML");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tui-expand");
    \u0275\u0275template(6, Example_ng_container_6_Template, 2, 1, "ng-container", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 3);
    \u0275\u0275text(8, "Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "tui-expand");
    \u0275\u0275template(10, Example_ng_container_10_Template, 3, 1, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools)("tuiDropdownOpen", ctx.wysiwyg().isMentionMode);
    \u0275\u0275advance(2);
    \u0275\u0275property("closeOthers", false);
    \u0275\u0275advance();
    \u0275\u0275property("tuiAccordion", ctx.isE2E);
    \u0275\u0275advance(4);
    \u0275\u0275property("tuiAccordion", ctx.isE2E);
  }
}, dependencies: [
  Mentions,
  ReactiveFormsModule,
  NgControlStatus,
  FormControlDirective,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand,
  TuiItem,
  TuiEditor,
  TuiEditorSocket,
  TuiTextfieldDropdownDirective
], styles: ["/* projects/demo/src/app/pages/mention/examples/1/index.less */\n.my-mention {\n  display: inline-block;\n  background: var(--tui-autofill);\n  outline: 0.0625rem solid var(--tui-background-accent-opposite-hover);\n  border-radius: 0.4rem;\n  padding: 0.1rem 0.3rem;\n  cursor: default;\n  margin: 1px;\n}\n/*# sourceMappingURL=index.css.map */\n"], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [
      Mentions,
      ReactiveFormsModule,
      TuiAccordion,
      TuiEditor,
      TuiEditorSocket,
      TuiExpand,
      TuiTextfield
    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor(() => __async(null, null, function* () {
        return import("./chunk-NOEJKQKS.js").then(({ TuiMention }) => TuiMention);
      }))
    ], template: '<tui-editor\n    placeholder="Required text *"\n    [formControl]="control"\n    [tools]="builtInTools"\n    [tuiDropdownOpen]="wysiwyg().isMentionMode"\n>\n    <ng-container *tuiTextfieldDropdown>\n        <mentions\n            [mentionSuggestions]="wysiwyg().mentionSuggestions"\n            (setMention)="setMention($event)"\n        />\n    </ng-container>\n</tui-editor>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n', styles: ["/* projects/demo/src/app/pages/mention/examples/1/index.less */\n.my-mention {\n  display: inline-block;\n  background: var(--tui-autofill);\n  outline: 0.0625rem solid var(--tui-background-accent-opposite-hover);\n  border-radius: 0.4rem;\n  padding: 0.1rem 0.3rem;\n  cursor: default;\n  margin: 1px;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/mention/examples/1/index.ts", lineNumber: 41 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-KZSXNHSD.js.map
