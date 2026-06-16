import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-PCC4JY5W.js";
import "./chunk-BKBI5FDR.js";
import "./chunk-SP2RLMJ3.js";
import "./chunk-EINUTI2P.js";
import "./chunk-3FE37GZG.js";
import "./chunk-JJURWGWL.js";
import "./chunk-D77NNQR5.js";
import "./chunk-J54AAGPK.js";
import "./chunk-LRQ53CSP.js";
import "./chunk-HR6RGQTF.js";
import "./chunk-WRIQDWYS.js";
import "./chunk-ODLDHFKK.js";
import "./chunk-2ST3K3BL.js";
import "./chunk-IDGNFT5E.js";
import "./chunk-UZMOA7JP.js";
import "./chunk-XM5RTYUR.js";
import "./chunk-3YPDJXUW.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-EF4ATJ2Z.js";
import {
  TuiAvatar,
  TuiDataList,
  TuiDataListComponent,
  TuiInput,
  TuiItem,
  TuiOption
} from "./chunk-X7GRIVH7.js";
import {
  TuiDropdownContent,
  WA_IS_E2E
} from "./chunk-BILNAO2Z.js";
import "./chunk-M562FPU2.js";
import "./chunk-KD3HJTV7.js";
import "./chunk-5XN4VSG5.js";
import "./chunk-NSYJ5MQ7.js";
import "./chunk-6VV32JRO.js";
import {
  TuiEditorTool
} from "./chunk-3BHDA4GH.js";
import "./chunk-HZQ27SF5.js";
import "./chunk-CGIMAQGG.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  takeUntilDestroyed
} from "./chunk-4FOPQVVL.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
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
  ɵɵconditional,
  ɵɵdeclareLet,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-G7TA3DS4.js";
import "./chunk-46H3G724.js";
import "./chunk-G6LPKBY6.js";
import "./chunk-JCOA2MEW.js";
import "./chunk-QYO3DBNN.js";
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
function Mentions_For_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r2.avatar, \u0275\u0275sanitizeUrl);
  }
}
function Mentions_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3, 1);
    \u0275\u0275listener("click", function Mentions_For_6_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setMention.emit(item_r2));
    })("keydown.enter.prevent", function Mentions_For_6_Template_button_keydown_enter_prevent_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setMention.emit(item_r2));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275pipe(4, "tuiInitials");
    \u0275\u0275template(5, Mentions_For_6_Conditional_5_Template, 1, 1, "img", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("tuiAvatar", \u0275\u0275pipeBind1(4, 3, item_r2.name));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r2.avatar ? 5 : -1);
  }
}
var _Mentions = class _Mentions {
  constructor() {
    this.container = viewChild("container", { read: ElementRef });
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
    return this.container()?.nativeElement ?? null;
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
}, inputs: { mentionSuggestions: [1, "mentionSuggestions"] }, outputs: { setMention: "setMention" }, decls: 7, vars: 3, consts: [["container", ""], ["button", ""], ["tuiOption", "", "type", "button"], ["tuiOption", "", "type", "button", 3, "click", "keydown.enter.prevent"], ["size", "s", 3, "tuiAvatar"], ["alt", "", 3, "src"]], template: function Mentions_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-data-list")(1, "div", null, 0);
    \u0275\u0275declareLet(3);
    \u0275\u0275pipe(4, "filterItems");
    \u0275\u0275repeaterCreate(5, Mentions_For_6_Template, 6, 5, "button", 2, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const filtered_r4 = \u0275\u0275pipeBind2(4, 0, ctx.items, ctx.mentionSuggestions());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(filtered_r4);
  }
}, dependencies: [FilterItems, TuiAvatar, TuiDataListComponent, TuiOption, TuiInitialsPipe], encapsulation: 2, changeDetection: 0 });
var Mentions = _Mentions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Mentions, [{
    type: Component,
    args: [{ selector: "mentions", imports: [FilterItems, TuiAvatar, TuiDataList, TuiInitialsPipe], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "(window:keydown.arrowDown)": "down($event, true)",
      "(window:keydown.arrowUp)": "down($event, false)"
    }, template: '<tui-data-list>\n    <div #container>\n        @let filtered = items | filterItems: mentionSuggestions();\n\n        @for (item of filtered; track item.login) {\n            <button\n                #button\n                tuiOption\n                type="button"\n                (click)="setMention.emit(item)"\n                (keydown.enter.prevent)="setMention.emit(item)"\n            >\n                {{ item.name }}\n                <span\n                    size="s"\n                    [tuiAvatar]="item.name | tuiInitials"\n                >\n                    @if (item.avatar) {\n                        <img\n                            alt=""\n                            [src]="item.avatar"\n                        />\n                    }\n                </span>\n            </button>\n        }\n    </div>\n</tui-data-list>\n' }]
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
    \u0275\u0275property("mentionSuggestions", ctx_r1.mentionSuggestions);
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
    this.destroyRef = inject(DestroyRef);
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
    this.isMentionMode = false;
  }
  ngOnInit() {
    this.control.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.isMentionMode = this.wysiwyg().selectionState.before.startsWith("@");
    });
  }
  get mentionSuggestions() {
    const before = this.wysiwyg().selectionState.before;
    return before.startsWith("@") && before.length > 1 ? before.slice(1) : "";
  }
  setMention(item) {
    const editor = this.wysiwyg().editor?.getOriginTiptapEditor();
    if (!editor) {
      return;
    }
    const uuid = crypto.randomUUID();
    const replaceText = `<span class="my-mention" data-type="mention" data-user="${uuid}">@${item.login}</span>&nbsp;`;
    const to = editor.state.selection.to;
    const from = editor.state.selection.from - this.mentionSuggestions.length - 1;
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
  provideTuiEditor(async () => import("./chunk-ZQHVDOUE.js").then(({ TuiMention }) => TuiMention))
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
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools)("tuiDropdownOpen", ctx.isMentionMode);
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
      provideTuiEditor(async () => import("./chunk-ZQHVDOUE.js").then(({ TuiMention }) => TuiMention))
    ], template: '<tui-editor\n    placeholder="Required text *"\n    [formControl]="control"\n    [tools]="builtInTools"\n    [tuiDropdownOpen]="isMentionMode"\n>\n    <ng-container *tuiDropdown>\n        <mentions\n            [mentionSuggestions]="mentionSuggestions"\n            (setMention)="setMention($event)"\n        />\n    </ng-container>\n</tui-editor>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n', styles: ["/* projects/demo/src/app/pages/mention/examples/1/index.less */\n.my-mention {\n  display: inline-block;\n  background: var(--tui-autofill);\n  outline: 0.0625rem solid var(--tui-background-accent-opposite-hover);\n  border-radius: 0.4rem;\n  padding: 0.1rem 0.3rem;\n  cursor: default;\n  margin: 1px;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/mention/examples/1/index.ts", lineNumber: 45 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-HYR5I6KC.js.map
