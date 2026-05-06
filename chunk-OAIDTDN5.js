import {
  TuiAddonDoc,
  TuiDocCode,
  TuiDocExample,
  TuiDocPage
} from "./chunk-5OYCAE6U.js";
import "./chunk-N2I4NDEC.js";
import "./chunk-43T2765T.js";
import "./chunk-RGU5X6JK.js";
import "./chunk-6VH6DR7W.js";
import "./chunk-GLG7L24I.js";
import "./chunk-TO6IF4KK.js";
import {
  TuiLink
} from "./chunk-2LK3XWNF.js";
import "./chunk-UK3D2IJN.js";
import "./chunk-CZCJZTAA.js";
import "./chunk-LTRKP6XS.js";
import "./chunk-UO32WQJY.js";
import "./chunk-XQBFNBOU.js";
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
} from "./chunk-QZKNXBAU.js";
import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/options/index.ts
function Example_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " You can also passed the default options inherited from ");
    \u0275\u0275elementStart(2, "a", 11);
    \u0275\u0275text(3, " TipTap. ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " By default you can use a ");
    \u0275\u0275elementStart(5, "code");
    \u0275\u0275text(6, "provideTuiEditorOptions");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " helper to override TUI_EDITOR_OPTIONS. ");
    \u0275\u0275elementEnd();
  }
}
function Example_ng_template_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Passed content is parsed by ProseMirror. To hook into the parsing, you can pass parseOptions which are then handled by ");
    \u0275\u0275elementStart(2, "a", 12);
    \u0275\u0275text(3, " ProseMirror. ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " By default, whitespace is collapsed as per HTML's rules. Pass true to preserve whitespace, but normalize newlines to spaces, and 'full' to preserve whitespace entirely. ");
    \u0275\u0275elementEnd();
  }
}
function Example_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " For advanced use cases, you can pass editorProps which will be handled by ");
    \u0275\u0275elementStart(2, "a", 13);
    \u0275\u0275text(3, " ProseMirror ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " . You can use it to override various editor events or change editor DOM element attributes, for example to add some Tailwind classes. Here is an example: ");
    \u0275\u0275elementEnd();
  }
}
var _Example = class _Example {
  constructor() {
    this.exampleOptions = import("./chunk-IVVI6EJH.js");
    this.component1 = import("./chunk-CTEZ5BD4.js");
    this.example1 = {
      TypeScript: import("./chunk-D5OYUAGC.js"),
      HTML: import("./chunk-BPMRDEUB.js")
    };
    this.component2 = import("./chunk-VXYBOY3G.js");
    this.example2 = {
      TypeScript: import("./chunk-VF2DVEQG.js"),
      HTML: import("./chunk-U4XRWO6H.js")
    };
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], decls: 92, vars: 11, consts: [["info", ""], ["first", ""], ["second", ""], ["heading", "TUI_EDITOR_OPTIONS", 3, "description"], [3, "code"], [1, "tui-space_bottom-5"], [3, "innerText"], ["href", "https://github.com/taiga-family/tui-editor/blob/main/projects/tui-editor/tokens/editor-options.ts#L74", "rel", "noreferrer", "target", "_blank", "tuiLink", ""], ["href", "https://taiga-ui.dev/icons/mapping", "rel", "noreferrer", "target", "_blank", "tuiLink", ""], ["heading", "Preserve whitespace", 3, "component", "content", "description"], ["heading", "Editor Props", 3, "component", "content", "description"], ["href", "https://github.com/ueberdosis/tiptap/blob/develop/packages/core/src/types.ts#L74", "tuiLink", ""], ["href", "https://prosemirror.net/docs/ref/#model.ParseOptions", "target", "_blank", "tuiLink", ""], ["href", "https://prosemirror.net/docs/ref/#view.EditorProps", "target", "_blank", "tuiLink", ""]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-doc-page")(1, "tui-doc-example", 3);
    \u0275\u0275template(2, Example_ng_template_2_Template, 8, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(4, "tui-doc-code", 4);
    \u0275\u0275elementStart(5, "p")(6, "strong");
    \u0275\u0275text(7, "Description of the available configurations:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "dl")(9, "dt")(10, "code");
    \u0275\u0275text(11, "appearance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "dd", 5)(13, "p");
    \u0275\u0275text(14, "Visual presets of interactive components");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "dt")(16, "code");
    \u0275\u0275text(17, "colors");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "dd", 5);
    \u0275\u0275text(19, " is a global color palette for text selection backgrounds, table cell backgrounds and text colors. ");
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21, " It accepts ");
    \u0275\u0275element(22, "code", 6);
    \u0275\u0275text(23, " : the ");
    \u0275\u0275elementStart(24, "strong");
    \u0275\u0275text(25, "key");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " is the name of the color (used only for hint and accessibility), the ");
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28, "value");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " \u2013 HTML color code. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "dt")(31, "code");
    \u0275\u0275text(32, "textColors");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "dd", 5);
    \u0275\u0275text(34, " used specifically for text colors, and it defaults to the global color palette. ");
    \u0275\u0275elementStart(35, "p");
    \u0275\u0275text(36, " It accepts ");
    \u0275\u0275element(37, "code", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "dt")(39, "code");
    \u0275\u0275text(40, "backgroundColors");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "dd", 5);
    \u0275\u0275text(42, " used for text backgrounds and table cell backgrounds \u2014 defaults to the global palette. ");
    \u0275\u0275elementStart(43, "p");
    \u0275\u0275text(44, " It accepts ");
    \u0275\u0275element(45, "code", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "dt")(47, "code");
    \u0275\u0275text(48, "blankColor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "dd", 5);
    \u0275\u0275text(50, " Null color. It is used in situations when there is no color selected. ");
    \u0275\u0275elementStart(51, "p");
    \u0275\u0275text(52, " it accepts ");
    \u0275\u0275elementStart(53, "code");
    \u0275\u0275text(54, "string");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " (HTML color code). ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "dt")(57, "code");
    \u0275\u0275text(58, "fontOptions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "dd", 5);
    \u0275\u0275text(60, "You can customize your own list of font sizes in editor.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "dt")(62, "code");
    \u0275\u0275text(63, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "dd", 5);
    \u0275\u0275text(65, " Although not all browsers recognize this attribute, it is respected by automatic translation systems such as Google Translate, and may also be respected by tools used by human translators. As such it's important that web authors use this attribute to mark content that should not be translated.. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "dt")(67, "code");
    \u0275\u0275text(68, "icons");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "dd", 5);
    \u0275\u0275text(70, " You can redefine ");
    \u0275\u0275elementStart(71, "a", 7);
    \u0275\u0275text(72, " icons ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, " by names. ");
    \u0275\u0275elementStart(74, "a", 8);
    \u0275\u0275text(75, " More -> ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "dt")(77, "code");
    \u0275\u0275text(78, "spellcheck");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "dd", 5);
    \u0275\u0275text(80, "Defines whether the editor may be checked for spelling errors.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "dt")(82, "code");
    \u0275\u0275text(83, "enableDefaultStyles");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "dd", 5);
    \u0275\u0275text(85, " By default, editor styles will be included without encapsulation, if you want your own styles, you can disable them. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "tui-doc-example", 9);
    \u0275\u0275template(87, Example_ng_template_87_Template, 5, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "tui-doc-example", 10);
    \u0275\u0275template(90, Example_ng_template_90_Template, 5, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const info_r1 = \u0275\u0275reference(3);
    const first_r2 = \u0275\u0275reference(88);
    const second_r3 = \u0275\u0275reference(91);
    \u0275\u0275advance();
    \u0275\u0275property("description", info_r1);
    \u0275\u0275advance(3);
    \u0275\u0275property("code", ctx.exampleOptions);
    \u0275\u0275advance(18);
    \u0275\u0275property("innerText", "ReadonlyMap<string, string>");
    \u0275\u0275advance(15);
    \u0275\u0275property("innerText", "ReadonlyMap<string, string> | null");
    \u0275\u0275advance(8);
    \u0275\u0275property("innerText", "ReadonlyMap<string, string> | null");
    \u0275\u0275advance(41);
    \u0275\u0275property("component", ctx.component1)("content", ctx.example1)("description", first_r2);
    \u0275\u0275advance(3);
    \u0275\u0275property("component", ctx.component2)("content", ctx.example2)("description", second_r3);
  }
}, dependencies: [TuiDocCode, TuiDocExample, TuiDocPage, TuiLink], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [TuiAddonDoc, TuiLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<tui-doc-page>
    <tui-doc-example
        heading="TUI_EDITOR_OPTIONS"
        [description]="info"
    >
        <ng-template #info>
            <p>
                You can also passed the default options inherited from
                <a
                    href="https://github.com/ueberdosis/tiptap/blob/develop/packages/core/src/types.ts#L74"
                    tuiLink
                >
                    TipTap.
                </a>
                By default you can use a
                <code>provideTuiEditorOptions</code>
                helper to override TUI_EDITOR_OPTIONS.
            </p>
        </ng-template>

        <tui-doc-code [code]="exampleOptions" />

        <p>
            <strong>Description of the available configurations:</strong>
        </p>
        <dl>
            <dt>
                <code>appearance</code>
            </dt>
            <dd class="tui-space_bottom-5">
                <p>Visual presets of interactive components</p>
            </dd>

            <dt>
                <code>colors</code>
            </dt>
            <dd class="tui-space_bottom-5">
                is a global color palette for text selection backgrounds, table cell backgrounds and text colors.

                <p>
                    It accepts
                    <code [innerText]="'ReadonlyMap<string, string>'"></code>
                    : the
                    <strong>key</strong>
                    is the name of the color (used only for hint and accessibility), the
                    <strong>value</strong>
                    \u2013 HTML color code.
                </p>
            </dd>

            <dt>
                <code>textColors</code>
            </dt>
            <dd class="tui-space_bottom-5">
                used specifically for text colors, and it defaults to the global color palette.

                <p>
                    It accepts
                    <code [innerText]="'ReadonlyMap<string, string> | null'"></code>
                </p>
            </dd>

            <dt>
                <code>backgroundColors</code>
            </dt>
            <dd class="tui-space_bottom-5">
                used for text backgrounds and table cell backgrounds \u2014 defaults to the global palette.

                <p>
                    It accepts
                    <code [innerText]="'ReadonlyMap<string, string> | null'"></code>
                </p>
            </dd>

            <dt>
                <code>blankColor</code>
            </dt>
            <dd class="tui-space_bottom-5">
                Null color. It is used in situations when there is no color selected.

                <p>
                    it accepts
                    <code>string</code>
                    (HTML color code).
                </p>
            </dd>

            <dt>
                <code>fontOptions</code>
            </dt>
            <dd class="tui-space_bottom-5">You can customize your own list of font sizes in editor.</dd>

            <dt>
                <code>translate</code>
            </dt>
            <dd class="tui-space_bottom-5">
                Although not all browsers recognize this attribute, it is respected by automatic translation systems
                such as Google Translate, and may also be respected by tools used by human translators. As such it's
                important that web authors use this attribute to mark content that should not be translated..
            </dd>

            <dt>
                <code>icons</code>
            </dt>
            <dd class="tui-space_bottom-5">
                You can redefine
                <a
                    href="https://github.com/taiga-family/tui-editor/blob/main/projects/tui-editor/tokens/editor-options.ts#L74"
                    rel="noreferrer"
                    target="_blank"
                    tuiLink
                >
                    icons
                </a>
                by names.
                <a
                    href="https://taiga-ui.dev/icons/mapping"
                    rel="noreferrer"
                    target="_blank"
                    tuiLink
                >
                    More ->
                </a>
            </dd>

            <dt>
                <code>spellcheck</code>
            </dt>
            <dd class="tui-space_bottom-5">Defines whether the editor may be checked for spelling errors.</dd>

            <dt>
                <code>enableDefaultStyles</code>
            </dt>
            <dd class="tui-space_bottom-5">
                By default, editor styles will be included without encapsulation, if you want your own styles, you can
                disable them.
            </dd>
        </dl>
    </tui-doc-example>

    <tui-doc-example
        heading="Preserve whitespace"
        [component]="component1"
        [content]="example1"
        [description]="first"
    >
        <ng-template #first>
            <p>
                Passed content is parsed by ProseMirror. To hook into the parsing, you can pass parseOptions which are
                then handled by
                <a
                    href="https://prosemirror.net/docs/ref/#model.ParseOptions"
                    target="_blank"
                    tuiLink
                >
                    ProseMirror.
                </a>
                By default, whitespace is collapsed as per HTML's rules. Pass true to preserve whitespace, but normalize
                newlines to spaces, and 'full' to preserve whitespace entirely.
            </p>
        </ng-template>
    </tui-doc-example>

    <tui-doc-example
        heading="Editor Props"
        [component]="component2"
        [content]="example2"
        [description]="second"
    >
        <ng-template #second>
            <p>
                For advanced use cases, you can pass editorProps which will be handled by
                <a
                    href="https://prosemirror.net/docs/ref/#view.EditorProps"
                    target="_blank"
                    tuiLink
                >
                    ProseMirror
                </a>
                . You can use it to override various editor events or change editor DOM element attributes, for example
                to add some Tailwind classes. Here is an example:
            </p>
        </ng-template>
    </tui-doc-example>
</tui-doc-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/options/index.ts", lineNumber: 10 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-OAIDTDN5.js.map
