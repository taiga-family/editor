import {
  TuiEditor,
  TuiEditorSocket,
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
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-U2A4WWTO.js";
import {
  TuiAvatar,
  TuiDataList,
  TuiDataListComponent,
  TuiInput,
  TuiItem,
  TuiOption
} from "./chunk-FKOUSXA3.js";
import {
  TuiDropdownContent,
  WA_IS_E2E
} from "./chunk-6XV2X7BK.js";
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
  ɵɵpipeBind2,
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
} from "./chunk-WNG4JUA7.js";
import "./chunk-RXK6YP7O.js";
import "./chunk-FFR5OF2V.js";
import "./chunk-VUNK2IUC.js";
import "./chunk-OPLENYEC.js";
import "./chunk-KWSTWQNB.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-pipes-initials.mjs
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
      name: "tuiInitials"
    }]
  }], null, null);
})();

// projects/demo/src/app/pages/mention/examples/1/mention/filter.ts
var _FilterItems = class _FilterItems {
  transform(items, search) {
    return search?.length ? items.filter(({ name, login }) => login.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) || name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())) : items;
  }
};
_FilterItems.\u0275fac = function FilterItems_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FilterItems)();
};
_FilterItems.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "filterItems", type: _FilterItems, pure: true });
var FilterItems = _FilterItems;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterItems, [{
    type: Pipe,
    args: [{ name: "filterItems" }]
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
    \u0275\u0275element(3, "span", 4);
    \u0275\u0275pipe(4, "tuiInitials");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("tuiAvatar", item_r2.avatar || \u0275\u0275pipeBind1(4, 2, item_r2.name));
  }
}
var _Mentions = class _Mentions {
  constructor() {
    this.container = viewChild.required("container", { read: ElementRef });
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
};
_Mentions.\u0275fac = function Mentions_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Mentions)();
};
_Mentions.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Mentions, selectors: [["mentions"]], viewQuery: function Mentions_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.container, _c0, 5, ElementRef);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, hostBindings: function Mentions_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("keydown.arrowDown", function Mentions_keydown_arrowDown_HostBindingHandler($event) {
      return ctx.down($event, true);
    }, false, \u0275\u0275resolveWindow)("keydown.arrowUp", function Mentions_keydown_arrowUp_HostBindingHandler($event) {
      return ctx.down($event, false);
    }, false, \u0275\u0275resolveWindow);
  }
}, inputs: { mentionSuggestions: [1, "mentionSuggestions"] }, outputs: { setMention: "setMention" }, decls: 6, vars: 3, consts: [["container", ""], ["button", ""], ["tuiOption", "", "type", "button"], ["tuiOption", "", "type", "button", 3, "click", "keydown.enter"], ["size", "s", 3, "tuiAvatar"]], template: function Mentions_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-data-list")(1, "div", null, 0);
    \u0275\u0275repeaterCreate(3, Mentions_For_4_Template, 5, 4, "button", 2, _forTrack0);
    \u0275\u0275pipe(5, "filterItems");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(5, 0, ctx.items, ctx.mentionSuggestions()));
  }
}, dependencies: [FilterItems, TuiAvatar, TuiDataListComponent, TuiOption, TuiInitialsPipe], encapsulation: 2, changeDetection: 0 });
var Mentions = _Mentions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Mentions, [{
    type: Component,
    args: [{ selector: "mentions", imports: [FilterItems, TuiAvatar, TuiDataList, TuiInitialsPipe], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "(window:keydown.arrowDown)": "down($event, true)",
      "(window:keydown.arrowUp)": "down($event, false)"
    }, template: '<tui-data-list>\n    <div #container>\n        @for (item of items | filterItems: mentionSuggestions(); track item.login) {\n            <button\n                #button\n                tuiOption\n                type="button"\n                (click)="setMention.emit(item)"\n                (keydown.enter)="setMention.emit(item)"\n            >\n                {{ item.name }}\n                <span\n                    size="s"\n                    [tuiAvatar]="item.avatar || (item.name | tuiInitials)"\n                ></span>\n            </button>\n        }\n    </div>\n</tui-data-list>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Mentions, { className: "Mentions", filePath: "projects/demo/src/app/pages/mention/examples/1/mention/index.ts", lineNumber: 25 });
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
    this.isE2E = inject(WA_IS_E2E);
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
  provideTuiEditor(async () => import("./chunk-EXAGE7AN.js").then(({ TuiMention }) => TuiMention))
])], decls: 11, vars: 6, consts: [["placeholder", "Required text *", 3, "formControl", "tools", "tuiDropdownOpen"], [4, "tuiDropdown"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "setMention", "mentionSuggestions"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
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
  TuiDropdownContent
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
      TuiInput
    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor(async () => import("./chunk-EXAGE7AN.js").then(({ TuiMention }) => TuiMention))
    ], template: '<tui-editor\n    placeholder="Required text *"\n    [formControl]="control"\n    [tools]="builtInTools"\n    [tuiDropdownOpen]="wysiwyg().isMentionMode"\n>\n    <ng-container *tuiDropdown>\n        <mentions\n            [mentionSuggestions]="wysiwyg().mentionSuggestions"\n            (setMention)="setMention($event)"\n        />\n    </ng-container>\n</tui-editor>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n', styles: ["/* projects/demo/src/app/pages/mention/examples/1/index.less */\n.my-mention {\n  display: inline-block;\n  background: var(--tui-autofill);\n  outline: 0.0625rem solid var(--tui-background-accent-opposite-hover);\n  border-radius: 0.4rem;\n  padding: 0.1rem 0.3rem;\n  cursor: default;\n  margin: 1px;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/mention/examples/1/index.ts", lineNumber: 42 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-OEZAOCIP.js.map
