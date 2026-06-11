import {
  TuiEditor,
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
  RouterLink
} from "./chunk-QBSXUJOT.js";
import "./chunk-TPR7EYDZ.js";
import "./chunk-WEV3GG6Y.js";
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
  WA_WINDOW
} from "./chunk-5BSJ6YPL.js";
import {
  AsyncPipe,
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Subject,
  inject,
  input,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-KFKFA6WT.js";
import "./chunk-OT66PQDS.js";
import "./chunk-6E3PG6FD.js";
import "./chunk-GAZHX25U.js";
import "./chunk-QAKA6OWS.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/table-of-contents/examples/1/my-toc/index.ts
var _c0 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function MyToc_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "a", 5);
    \u0275\u0275listener("click", function MyToc_For_6_Template_a_click_1_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onItemClick($event, item_r2));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--level", item_r2.level);
    \u0275\u0275classProp("is-active", item_r2.isActive)("is-scrolled-over", !((tmp_12_0 = ctx_r2.contents()) == null ? null : tmp_12_0.isCreate) && item_r2.isScrolledOver);
    \u0275\u0275advance();
    \u0275\u0275property("fragment", item_r2.id);
    \u0275\u0275attribute("data-item-index", item_r2.itemIndex);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.textContent, " ");
  }
}
function MyToc_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2, "Start editing your document to see the outline.");
    \u0275\u0275elementEnd()();
  }
}
var _MyToc = class _MyToc {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.contents = input();
  }
  onItemClick(event, item) {
    this.doc.location.hash = "";
    this.doc.location.hash = item.id;
    event.preventDefault();
  }
};
_MyToc.\u0275fac = function MyToc_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MyToc)();
};
_MyToc.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyToc, selectors: [["my-table-of-contents"]], inputs: { contents: [1, "contents"] }, decls: 8, vars: 3, consts: [[1, "sidebar"], [1, "sidebar-options"], [1, "table-of-contents"], [3, "is-active", "is-scrolled-over", "--level"], [1, "empty-state"], ["routerLink", ".", 3, "click", "fragment"]], template: function MyToc_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
    \u0275\u0275text(3, "Table of contents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2);
    \u0275\u0275repeaterCreate(5, MyToc_For_6_Template, 3, 9, "div", 3, _forTrack0);
    \u0275\u0275template(7, MyToc_Conditional_7_Template, 3, 0, "div", 4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_1_0;
    \u0275\u0275advance(5);
    \u0275\u0275repeater((tmp_0_0 = (tmp_0_0 = ctx.contents()) == null ? null : tmp_0_0.items) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : \u0275\u0275pureFunction0(1, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((tmp_1_0 = (tmp_1_0 = ctx.contents()) == null ? null : tmp_1_0.items) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : \u0275\u0275pureFunction0(2, _c0)).length ? 7 : -1);
  }
}, dependencies: [RouterLink], styles: ['\n\n.sidebar[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  padding: 0 1rem;\n  inline-size: 12rem;\n}\n.sidebar-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  block-size: 100%;\n  gap: 1rem;\n}\n.table-of-contents[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-size: 0.875rem;\n  gap: 0.25rem;\n  overflow: auto;\n  text-decoration: none;\n}\n.table-of-contents[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  padding-inline-start: calc(0.875rem * (var(--level) - 1));\n  transition: all 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n.table-of-contents[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n  background-color: rgba(61, 37, 20, 0.08);\n}\n.table-of-contents[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  color: rgba(28, 25, 23, 0.6);\n  -webkit-user-select: none;\n  user-select: none;\n}\n.table-of-contents[_ngcontent-%COMP%]   .is-scrolled-over[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(28, 25, 23, 0.6);\n}\n.table-of-contents[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--tui-background-accent-1);\n}\n.table-of-contents[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  color: #2e2b29;\n  gap: 0.25rem;\n  text-decoration: none;\n}\n.table-of-contents[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: attr(data-item-index) ".";\n}\n/*# sourceMappingURL=index.css.map */'], changeDetection: 0 });
var MyToc = _MyToc;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyToc, [{
    type: Component,
    args: [{ selector: "my-table-of-contents", imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="sidebar">\n    <div class="sidebar-options">\n        <h2>Table of contents</h2>\n        <div class="table-of-contents">\n            @for (item of contents()?.items ?? []; track item.id) {\n                <div\n                    [class.is-active]="item.isActive"\n                    [class.is-scrolled-over]="!contents()?.isCreate && item.isScrolledOver"\n                    [style.--level]="item.level"\n                >\n                    <a\n                        routerLink="."\n                        [attr.data-item-index]="item.itemIndex"\n                        [fragment]="item.id"\n                        (click)="onItemClick($event, item)"\n                    >\n                        {{ item.textContent }}\n                    </a>\n                </div>\n            }\n\n            @if (!(contents()?.items ?? []).length) {\n                <div class="empty-state">\n                    <p>Start editing your document to see the outline.</p>\n                </div>\n            }\n        </div>\n    </div>\n</div>\n', styles: ['/* projects/demo/src/app/pages/table-of-contents/examples/1/my-toc/index.less */\n.sidebar {\n  flex-grow: 0;\n  flex-shrink: 0;\n  padding: 0 1rem;\n  inline-size: 12rem;\n}\n.sidebar-options {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  block-size: 100%;\n  gap: 1rem;\n}\n.table-of-contents {\n  display: flex;\n  flex-direction: column;\n  font-size: 0.875rem;\n  gap: 0.25rem;\n  overflow: auto;\n  text-decoration: none;\n}\n.table-of-contents > div {\n  border-radius: 0.25rem;\n  padding-inline-start: calc(0.875rem * (var(--level) - 1));\n  transition: all 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n.table-of-contents > div:hover {\n  background-color: rgba(61, 37, 20, 0.08);\n}\n.table-of-contents .empty-state {\n  color: rgba(28, 25, 23, 0.6);\n  -webkit-user-select: none;\n  user-select: none;\n}\n.table-of-contents .is-scrolled-over a {\n  color: rgba(28, 25, 23, 0.6);\n}\n.table-of-contents .is-active a {\n  color: var(--tui-background-accent-1);\n}\n.table-of-contents a {\n  display: flex;\n  color: #2e2b29;\n  gap: 0.25rem;\n  text-decoration: none;\n}\n.table-of-contents a::before {\n  content: attr(data-item-index) ".";\n}\n/*# sourceMappingURL=index.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyToc, { className: "MyToc", filePath: "projects/demo/src/app/pages/table-of-contents/examples/1/my-toc/index.ts", lineNumber: 21 });
})();

// projects/demo/src/app/pages/table-of-contents/examples/1/index.ts
var _Example = class _Example {
  constructor() {
    this.builtInTools = [
      TuiEditorTool.Undo,
      TuiEditorTool.Size,
      TuiEditorTool.Bold,
      TuiEditorTool.Italic,
      TuiEditorTool.Underline
    ];
    this.wysiwyg = viewChild.required(TuiEditor);
    this.contents = new Subject();
    this.control = new FormControl(`
        <h1>Text editor</h1>
        <p>
            A text editor is a type of computer program that edits plain text. Such programs are sometimes known as "notepad"
            software (e.g. Windows Notepad). Text editors are provided with operating systems and software development packages,
            and can be used to change files such as configuration files, documentation files and programming language source
            code.
        </p>
        <h2>Plain text and rich text</h2>
        <p>
            There are important differences between plain text (created and edited by text editors) and rich text (such as that
            created by word processors or desktop publishing software).
        </p>
        <p>
            Plain text exclusively consists of character representation. Each character is represented by a fixed-length
            sequence of one, two, or four bytes, or as a variable-length sequence of one to four bytes, in accordance to
            specific character encoding conventions, such as ASCII, ISO/IEC 2022, Shift JIS, UTF-8, or UTF-16. These conventions
            define many printable characters, but also non-printing characters that control the flow of the text, such as space,
            line break, and page break. Plain text contains no other information about the text itself, not even the character
            encoding convention employed. Plain text is stored in text files, although text files do not exclusively store plain
            text. Since the early days of computers, plain text was (once by necessity and now by convention) generally
            displayed using a monospace font, such that horizontal alignment and columnar formatting were sometimes done using
            whitespace characters.
        </p>
        <p>
            Rich text, on the other hand, may contain metadata, character formatting data (e.g. typeface, size, weight and
            style), paragraph formatting data (e.g. indentation, alignment, letter and word distribution, and space between
            lines or other paragraphs), and page specification data (e.g. size, margin and reading direction). Rich text can be
            very complex. Rich text can be saved in binary format (e.g. DOC), text files adhering to a markup language (e.g. RTF
            or HTML), or in a hybrid form of both (e.g. Office Open XML).
        </p>
        <p>
            Text editors are intended to open and save text files containing either plain text or anything that can be
            interpreted as plain text, including the markup for rich text or the markup for something else (e.g. SVG).
        </p>
        <h2>History</h2>
        <p>
            Before text editors existed, computer text was punched into cards with keypunch machines. Physical boxes of these
            thin cardboard cards were then inserted into a card reader. Magnetic tape, drum and disk card image files created
            from such card decks often had no line-separation characters at all, and assumed fixed-length 80- or 90-character
            records. An alternative to cards was Punched tape. It could be created by some teleprinters (such as the Teletype),
            which used special characters to indicate ends of records. Some early operating systems included batch text editors,
            either integrated with language processors or as separate utility programs; one early example was the ability to
            edit SQUOZE source files for SCAT in SHARE Operating System.
        </p>
        <p>
            The first interactive text editors were "line editors" oriented to teleprinter- or typewriter-style terminals
            without displays. Commands (often a single keystroke) effected edits to a file at an imaginary insertion point
            called the "cursor". Edits were verified by typing a command to print a small section of the file, and periodically
            by printing the entire file. In some line editors, the cursor could be moved by commands that specified the line
            number in the file, text strings (context) for which to search, and eventually regular expressions. Line editors
            were major improvements over keypunching. Some line editors could be used by keypunch; editing commands could be
            taken from a deck of cards and applied to a specified file. Some common line editors supported a "verify" mode in
            which change commands displayed the altered lines.
        </p>
        <h5>Weird h5 headline</h5>
        <p>
            When computer terminals with video screens became available, screen-based text editors (sometimes called just
            "screen editors") became common. One of the earliest full-screen editors was O26, which was written for the operator
            console of the CDC 6000 series computers in 1967. Another early full-screen editor was vi. Written in the 1970s, it
            is still a standard editor on Unix and Linux operating systems. Also written in the 1970s was the UCSD Pascal Screen
            Oriented Editor, which was optimized both for indented source code and general text. Emacs, one of the first free
            and open-source software projects, is another early full-screen or real-time editor, one that was ported to many
            systems. A full-screen editor's ease-of-use and speed (compared to the line-based editors) motivated many early
            purchases of video terminals.
        </p>
        <h2>Types of text editors</h2>
        <h3>Simple text editors</h3>
        <p>
            Some text editors are small and simple, while others offer broad and complex functions. For example, Unix and
            Unix-like operating systems have the pico editor (or a variant), but many also include the vi and Emacs editors.
            Microsoft Windows systems come with the simple Notepad, though many people\u2014especially programmers\u2014prefer other
            editors with more features. Under Apple Macintosh's classic Mac OS there was the native TeachText later replaced by
            SimpleText in 1994, which was replaced in Mac OS X by TextEdit, which combines features of a text editor with those
            typical of a word processor such as rulers, margins and multiple font selection. These features are not available
            simultaneously, but must be switched by user command, or through the program automatically determining the file
            type.
        </p>
        <h3>Word editors</h3>
        <p>
            Most word processors can read and write files in plain text format, allowing them to open files saved from text
            editors. Saving these files from a word processor, however, requires ensuring the file is written in plain text
            format, and that any text encoding or BOM settings won't obscure the file for its intended use. Non-WYSIWYG word
            processors, such as WordStar, are more easily pressed into service as text editors, and in fact were commonly used
            as such during the 1980s. The default file format of these word processors often resembles a markup language, with
            the basic format being plain text and visual formatting achieved using non-printing control characters or escape
            sequences. Later word processors like Microsoft Word store their files in a binary format and are almost never used
            to edit plain text files.
        </p>
    `);
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
  provideTuiEditor(async (injector) => {
    const example = injector.get(_Example);
    const win = injector.get(WA_WINDOW);
    const { TableOfContents, getHierarchicalIndexes } = await import("./chunk-7HSPFQJN.js");
    return TableOfContents.configure({
      scrollParent: () => example.wysiwyg().rootEl.querySelector("tui-scrollbar") ?? win,
      getIndex: getHierarchicalIndexes,
      onUpdate(items, isCreate) {
        example.contents.next({ items, isCreate });
      }
    });
  })
])], decls: 3, vars: 5, consts: [[3, "formControl", "tools"], [3, "contents"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tui-editor", 0)(1, "my-table-of-contents", 1);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools);
    \u0275\u0275advance();
    \u0275\u0275property("contents", \u0275\u0275pipeBind1(2, 3, ctx.contents));
  }
}, dependencies: [AsyncPipe, MyToc, ReactiveFormsModule, NgControlStatus, FormControlDirective, TuiEditor], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n}\ntui-editor[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  block-size: 28rem;\n}\n/*# sourceMappingURL=index.css.map */"], changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [AsyncPipe, MyToc, ReactiveFormsModule, TuiEditor], template: `
        <tui-editor
            [formControl]="control"
            [tools]="builtInTools"
        />

        <my-table-of-contents [contents]="contents | async" />
    `, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      provideTuiEditor(async (injector) => {
        const example = injector.get(Example);
        const win = injector.get(WA_WINDOW);
        const { TableOfContents, getHierarchicalIndexes } = await import("./chunk-7HSPFQJN.js");
        return TableOfContents.configure({
          scrollParent: () => example.wysiwyg().rootEl.querySelector("tui-scrollbar") ?? win,
          getIndex: getHierarchicalIndexes,
          onUpdate(items, isCreate) {
            example.contents.next({ items, isCreate });
          }
        });
      })
    ], styles: ["/* projects/demo/src/app/pages/table-of-contents/examples/1/index.less */\n:host {\n  display: flex;\n}\ntui-editor {\n  inline-size: 100%;\n  block-size: 28rem;\n}\n/*# sourceMappingURL=index.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/table-of-contents/examples/1/index.ts", lineNumber: 43 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-OPEAPUWG.js.map
