import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-NVEV64I6.js";
import "./chunk-4UYSEWYM.js";
import "./chunk-ON6CMRJE.js";
import "./chunk-CGQ7SF5X.js";
import "./chunk-K4VHZDJ3.js";
import "./chunk-BMQKW5MW.js";
import "./chunk-AJXXSTGP.js";
import "./chunk-PZFOFBEJ.js";
import "./chunk-AVXWN6PC.js";
import "./chunk-DFL5NIEH.js";
import "./chunk-BMTZ6XJZ.js";
import "./chunk-GIGKRLE2.js";
import "./chunk-4P4YSWKO.js";
import "./chunk-ZRZNAMTC.js";
import "./chunk-ZPZIXJAI.js";
import "./chunk-4UWTSVE2.js";
import "./chunk-3N57KBZI.js";
import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-63U3CPUR.js";
import {
  TuiDataList,
  TuiDataListComponent,
  TuiInput,
  TuiItem,
  TuiOption
} from "./chunk-TPR7EYDZ.js";
import {
  TuiDropdown,
  TuiDropdownContent,
  WA_IS_E2E
} from "./chunk-WEV3GG6Y.js";
import "./chunk-LPBSAZLJ.js";
import "./chunk-DMAZJOQQ.js";
import "./chunk-QVEY2JIK.js";
import "./chunk-KMEEBF2K.js";
import "./chunk-MAMGYOWB.js";
import {
  TuiEditorTool
} from "./chunk-XDT5UXUV.js";
import "./chunk-HNVQLPMS.js";
import "./chunk-EMEGSUC4.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  takeUntilDestroyed
} from "./chunk-5BSJ6YPL.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-KFKFA6WT.js";
import "./chunk-OT66PQDS.js";
import "./chunk-6E3PG6FD.js";
import "./chunk-GAZHX25U.js";
import "./chunk-QAKA6OWS.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/slash/examples/1/index.ts
var _forTrack0 = ($index, $item) => $item.name;
function Example_tui_data_list_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function Example_tui_data_list_1_For_2_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.command(item_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.name, " ");
  }
}
function Example_tui_data_list_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-data-list");
    \u0275\u0275repeaterCreate(1, Example_tui_data_list_1_For_2_Template, 2, 1, "button", 5, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filter(ctx_r2.suggestion));
  }
}
function Example_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "tui-editor-socket", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("content", ctx_r2.control.value);
  }
}
function Example_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.control.value);
  }
}
var _Example = class _Example {
  constructor() {
    this.destroy$ = inject(DestroyRef);
    this.wysiwyg = viewChild.required(TuiEditor);
    this.datalist = viewChild(TuiDataListComponent, { read: ElementRef });
    this.isE2E = inject(WA_IS_E2E);
    this.open = true;
    this.builtInTools = [
      TuiEditorTool.Undo,
      TuiEditorTool.Bold,
      TuiEditorTool.Italic,
      TuiEditorTool.Link,
      TuiEditorTool.Anchor
    ];
    this.control = new FormControl("");
    this.items = [
      { name: "Heading 1" },
      { name: "Heading 2" },
      { name: "Bold" },
      { name: "Italic" }
    ];
  }
  ngOnInit() {
    this.control.valueChanges.pipe(takeUntilDestroyed(this.destroy$)).subscribe(() => {
      const isLinkSelected = this.wysiwyg().isLinkSelected;
      const before = this.wysiwyg().selectionState.before;
      const isMentionMode = before.startsWith("@");
      const hasSlash = before.startsWith("/");
      this.open = isMentionMode || isLinkSelected ? false : hasSlash;
    });
  }
  get suggestion() {
    const before = this.wysiwyg().selectionState.before;
    return before.startsWith("/") && before.length > 1 ? before.replace("/", "") || "" : "";
  }
  down(event, isDown) {
    const buttons = Array.from(this.el?.querySelectorAll("button") ?? []);
    const button = isDown ? buttons[0] : buttons[buttons.length - 1];
    if (!this.el?.contains(event.target)) {
      button?.focus();
    }
  }
  filter(search) {
    return search?.length ? this.items.filter(({ name }) => name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())) : this.items;
  }
  command(command) {
    const editor = this.wysiwyg().editor?.getOriginTiptapEditor();
    if (!editor) {
      return;
    }
    const { from, to } = editor.state.selection;
    editor.chain().focus().deleteRange({ from: from - (this.suggestion.length + 1), to }).run();
    switch (command.name) {
      case "Bold":
        editor.chain().toggleBold().run();
        break;
      case "Heading 1":
        editor.chain().setNode("heading", { level: 1 }).run();
        break;
      case "Heading 2":
        editor.chain().setNode("heading", { level: 2 }).run();
        break;
      case "Italic":
        editor.chain().toggleItalic().run();
        break;
    }
  }
  get el() {
    return this.datalist()?.nativeElement ?? null;
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], viewQuery: function Example_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.wysiwyg, TuiEditor, 5);
    \u0275\u0275viewQuerySignal(ctx.datalist, TuiDataListComponent, 5, ElementRef);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance(2);
  }
}, hostBindings: function Example_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("keydown.arrowDown", function Example_keydown_arrowDown_HostBindingHandler($event) {
      return ctx.down($event, true);
    }, false, \u0275\u0275resolveWindow)("keydown.arrowUp", function Example_keydown_arrowUp_HostBindingHandler($event) {
      return ctx.down($event, false);
    }, false, \u0275\u0275resolveWindow);
  }
}, features: [\u0275\u0275ProvidersFeature([provideTuiEditor()])], decls: 11, vars: 6, consts: [[3, "tuiDropdownOpenChange", "formControl", "tools", "tuiDropdownOpen"], [4, "tuiDropdown"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], ["tuiOption", "", "type", "button"], ["tuiOption", "", "type", "button", 3, "click"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-editor", 0);
    \u0275\u0275twoWayListener("tuiDropdownOpenChange", function Example_Template_tui_editor_tuiDropdownOpenChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.open, $event) || (ctx.open = $event);
      return $event;
    });
    \u0275\u0275template(1, Example_tui_data_list_1_Template, 3, 0, "tui-data-list", 1);
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
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools);
    \u0275\u0275twoWayProperty("tuiDropdownOpen", ctx.open);
    \u0275\u0275advance(2);
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
  TuiDataListComponent,
  TuiOption,
  TuiDropdownContent,
  TuiEditor,
  TuiEditorSocket
], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [
      ReactiveFormsModule,
      TuiAccordion,
      TuiDataList,
      TuiDropdown,
      TuiEditor,
      TuiEditorSocket,
      TuiExpand,
      TuiInput
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideTuiEditor()], host: {
      "(window:keydown.arrowDown)": "down($event, true)",
      "(window:keydown.arrowUp)": "down($event, false)"
    }, template: '<tui-editor\n    [formControl]="control"\n    [tools]="builtInTools"\n    [(tuiDropdownOpen)]="open"\n>\n    <tui-data-list *tuiDropdown>\n        @for (item of filter(suggestion); track item.name) {\n            <button\n                tuiOption\n                type="button"\n                (click)="command(item)"\n            >\n                {{ item.name }}\n            </button>\n        }\n    </tui-data-list>\n</tui-editor>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/slash/examples/1/index.ts", lineNumber: 51 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-GYOHL5TN.js.map
