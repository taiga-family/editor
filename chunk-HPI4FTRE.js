import {
  tuiExtractI18n,
  tuiProvideOptions,
  tuiTypedFromEvent
} from "./chunk-5464WHRF.js";
import {
  BehaviorSubject,
  Directive,
  InjectionToken,
  ReplaySubject,
  map,
  of,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-6FE6LACA.js";

// projects/editor/common/default-editor-colors.ts
var TUI_EDITOR_DEFAULT_EDITOR_COLORS = /* @__PURE__ */ new Map([
  ["color-black-100", "#909090"],
  ["color-black-200", "#666666"],
  ["color-black-300", "#333333"],
  ["color-blue-100", "#1771e6"],
  ["color-blue-200", "#1464cc"],
  ["color-blue-300", "#0953b3"],
  ["color-gray-100", "#f5f5f6"],
  ["color-gray-200", "#e7e8ea"],
  ["color-gray-300", "#cbcfd3"],
  ["color-gray-400", "#959ba4"],
  ["color-gray-500", "#79818c"],
  ["color-gray-600", "#616871"],
  ["color-green-100", "#39b54a"],
  ["color-green-200", "#2ca53a"],
  ["color-green-300", "#168a21"],
  ["color-light-blue-100", "#ecf1f7"],
  ["color-light-blue-200", "#e4ebf3"],
  ["color-light-blue-300", "#dde4ed"],
  ["color-red-100", "#e01f19"],
  ["color-red-200", "#d3120e"],
  ["color-red-300", "#c40b08"],
  ["color-yellow-100", "#FFDD2C"],
  ["color-yellow-200", "#FCC521"],
  ["color-yellow-300", "#FAB618"],
  ["transparent", "transparent"]
]);
var EDITOR_BLANK_COLOR = "rgb(51, 51, 51)";

// projects/editor/common/editor-tool.ts
var TuiEditorTool = {
  Align: "justify",
  Anchor: "anchor",
  Attach: "attach",
  Bold: "bold",
  Clear: "clear",
  Code: "code",
  Color: "foreColor",
  Details: "details",
  Group: "group",
  HR: "insertHorizontalRule",
  Hilite: "hiliteColor",
  Img: "image",
  Italic: "italic",
  Link: "link",
  List: "list",
  MergeCells: "mergeCells",
  Quote: "quote",
  RowsColumnsManaging: "rowsColumnsManaging",
  Size: "fontSize",
  SplitCells: "splitCells",
  Strikethrough: "strikeThrough",
  Sub: "subscript",
  Sup: "superscript",
  Table: "insertTable",
  CellColor: "cellColor",
  Tex: "tex",
  Underline: "underline",
  Undo: "undo"
};

// projects/editor/common/default-editor-tools.ts
var TUI_EDITOR_DEFAULT_TOOLS = /* @__PURE__ */ new Set([
  TuiEditorTool.Align,
  TuiEditorTool.Anchor,
  TuiEditorTool.Bold,
  TuiEditorTool.CellColor,
  TuiEditorTool.Clear,
  TuiEditorTool.Code,
  TuiEditorTool.Color,
  TuiEditorTool.Details,
  TuiEditorTool.Hilite,
  TuiEditorTool.HR,
  TuiEditorTool.Img,
  TuiEditorTool.Italic,
  TuiEditorTool.Link,
  TuiEditorTool.List,
  TuiEditorTool.Quote,
  TuiEditorTool.Size,
  TuiEditorTool.Strikethrough,
  TuiEditorTool.Sub,
  TuiEditorTool.Sup,
  TuiEditorTool.Table,
  TuiEditorTool.Underline,
  TuiEditorTool.Undo
]);

// projects/editor/common/default-events.ts
var TUI_EDITOR_RESIZE_EVENT = "tui_editor_resize";

// projects/editor/common/default-font-options-handler.ts
function tuiDefaultFontOptionsHandler(texts) {
  return [
    {
      px: 13,
      name: texts.small
    },
    {
      px: 15,
      name: texts.normal
    },
    {
      px: 17,
      name: texts.large
    },
    {
      px: 24,
      family: "var(--tui-font-heading)",
      name: texts.subtitle,
      headingLevel: 2,
      weight: "bold"
    },
    {
      px: 30,
      family: "var(--tui-font-heading)",
      name: texts.title,
      headingLevel: 1,
      weight: "bold"
    }
  ];
}

// projects/editor/common/default-html5-media-attributes.ts
var TUI_DEFAULT_HTML5_MEDIA_ATTRIBUTES = [
  "id",
  "class",
  "src",
  "style",
  "controls",
  "loop",
  "muted",
  "preload",
  "autoplay",
  "width",
  "height",
  "controlsList"
];

// projects/editor/common/default-link-options-handler.ts
var TUI_EDITOR_LINK_HASH_PREFIX = "#";
var TUI_EDITOR_LINK_HTTP_PREFIX = "http://";
var TUI_EDITOR_LINK_HTTPS_PREFIX = "https://";
var TUI_EDITOR_LINK_SIMPLE_PROTOCOL_DIVIDER = ":";
var TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER = "://";
var TUI_DEFAULT_LINK_OPTIONS = { protocol: TUI_EDITOR_LINK_HTTPS_PREFIX };

// projects/editor/common/editor-adapter.ts
var _AbstractTuiEditor = class _AbstractTuiEditor {
  constructor() {
    this.valueChange$ = new BehaviorSubject("");
  }
};
_AbstractTuiEditor.\u0275fac = function AbstractTuiEditor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbstractTuiEditor)();
};
_AbstractTuiEditor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AbstractTuiEditor });
var AbstractTuiEditor = _AbstractTuiEditor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiEditor, [{
    type: Directive
  }], null, null);
})();

// projects/editor/common/editor-extensions.ts
var TUI_EDITOR_EXTENSIONS = new InjectionToken(ngDevMode ? "TUI_EDITOR_EXTENSIONS" : "");
var LAZY_EDITOR_EXTENSIONS = new InjectionToken(ngDevMode ? "LAZY_EDITOR_EXTENSIONS" : "");

// projects/editor/common/editor-options.ts
var TUI_EDITOR_DEFAULT_OPTIONS = {
  translate: "no",
  spellcheck: false,
  placeholder: "",
  enableDefaultStyles: true,
  tools: TUI_EDITOR_DEFAULT_TOOLS,
  colors: TUI_EDITOR_DEFAULT_EDITOR_COLORS,
  textColors: null,
  backgroundColors: null,
  blankColor: EDITOR_BLANK_COLOR,
  linkOptions: TUI_DEFAULT_LINK_OPTIONS,
  fontOptions: tuiDefaultFontOptionsHandler,
  floatingToolbar: false,
  parseOptions: {},
  icons: {
    undo: "@tui.undo",
    redo: "@tui.redo",
    quote: "@tui.quote",
    link: "@tui.link",
    anchor: "@tui.anchor",
    attach: "@tui.paperclip",
    sub: "@tui.subscript",
    sup: "@tui.superscript",
    tex: "@tui.whole-word",
    image: "@tui.image",
    hr: "@tui.minus",
    clear: "@tui.remove-formatting",
    groupAdd: "@tui.plus",
    groupRemove: "@tui.circle-minus",
    detailsAdd: "@tui.copy-plus",
    detailsRemove: "@tui.square-minus",
    popupLinkSave: "@tui.save",
    popupLinkRemove: "@tui.x",
    popupPreviewLinkEdit: "@tui.pencil",
    popupPreviewLinkClear: "@tui.x",
    paint: "@tui.paint-bucket",
    hash: "@tui.hash",
    externalLink: "@tui.external-link",
    textAlignPreview: "@tui.align-left",
    textAlignLeft: "@tui.align-left",
    textAlignCenter: "@tui.align-center",
    textAlignRight: "@tui.align-right",
    textAlignJustify: "@tui.align-justify",
    textColor: "@tui.baseline",
    textHilite: "@tui.paint-roller",
    listPreview: "@tui.list",
    listUnOrdered: "@tui.list",
    listOrdered: "@tui.list-ordered",
    taskList: "@tui.check-check",
    indent: "@tui.indent-increase",
    outdent: "@tui.indent-decrease",
    fontSize: "@tui.a-large-small",
    insertTable: "@tui.table",
    tableCellMerge: "@tui.table-cells-merge",
    tableCellSplit: "@tui.table-rows-split",
    addRowTable: "@tui.between-horizontal-start",
    code: "@tui.code",
    fontStylePreview: "@tui.type-outline",
    fontStyleBold: "@tui.bold",
    fontStyleItalic: "@tui.italic",
    fontStyleUnderline: "@tui.underline",
    fontStyleStrike: "@tui.strikethrough",
    colorSelectorDropdownChevron: "@tui.chevron-down",
    colorSelectorDropdownCheck: "@tui.check",
    imageExtension: {
      link: "@tui.link",
      previewLink: "@tui.arrow-up-right",
      previewEditLink: "@tui.pencil-line",
      align: "@tui.align-left",
      alignJustify: "@tui.align-justify",
      alignCenter: "@tui.align-center",
      alignLeft: "@tui.align-left",
      alignRight: "@tui.align-right"
    }
  }
};
var TUI_EDITOR_OPTIONS = new InjectionToken(ngDevMode ? "TUI_EDITOR_OPTIONS" : "", { factory: () => TUI_EDITOR_DEFAULT_OPTIONS });
function provideTuiEditorOptions(options) {
  return tuiProvideOptions(TUI_EDITOR_OPTIONS, options, TUI_EDITOR_DEFAULT_OPTIONS);
}

// projects/editor/common/editor-sanitizer.ts
var TUI_EDITOR_SANITIZER = new InjectionToken(ngDevMode ? "TUI_EDITOR_SANITIZER" : "", { factory: () => null });

// projects/editor/common/editor-value-transformer.ts
var TUI_EDITOR_VALUE_TRANSFORMER = new InjectionToken(ngDevMode ? "TUI_EDITOR_VALUE_TRANSFORMER" : "");

// projects/editor/common/files-loader.ts
var TUI_ATTACH_FILES_OPTIONS = new InjectionToken(ngDevMode ? "TUI_ATTACH_FILES_OPTIONS" : "", {
  factory: () => ({ accept: "*/*", multiple: true })
});
var TUI_ATTACH_FILES_LOADER = new InjectionToken(ngDevMode ? "TUI_ATTACH_FILES_LOADER" : "");

// projects/editor/common/i18n.ts
var TUI_EDITOR_TOOLBAR_TEXTS = new InjectionToken(ngDevMode ? "TUI_EDITOR_TOOLBAR_TEXTS" : "", { factory: tuiExtractI18n("toolbarTools") });
var TUI_EDITOR_TABLE_COMMANDS = new InjectionToken(ngDevMode ? "TUI_EDITOR_TABLE_COMMANDS" : "", { factory: tuiExtractI18n("editorTableCommands") });
var TUI_EDITOR_LINK_TEXTS = new InjectionToken(ngDevMode ? "TUI_EDITOR_LINK_TEXTS" : "", { factory: tuiExtractI18n("editorEditLink") });
var TUI_EDITOR_CODE_OPTIONS = new InjectionToken(ngDevMode ? "TUI_EDITOR_CODE_OPTIONS" : "", { factory: tuiExtractI18n("editorCodeOptions") });
var TUI_EDITOR_FONT_OPTIONS = new InjectionToken(ngDevMode ? "TUI_EDITOR_FONT_OPTIONS" : "", { factory: tuiExtractI18n("editorFontOptions") });

// projects/editor/common/image-loader.ts
var TUI_IMAGE_LOADER = new InjectionToken(ngDevMode ? "TUI_IMAGE_LOADER" : "", {
  factory: () => (file) => {
    if (typeof FileReader === "undefined") {
      return of("");
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    return tuiTypedFromEvent(fileReader, "load").pipe(map(() => String(fileReader.result)));
  }
});

// projects/editor/common/pm-css-classes.ts
var TUI_EDITOR_PM_SELECTED_NODE = "ProseMirror-selectednode";

// projects/editor/common/tiptap-editor.ts
var TIPTAP_EDITOR = new InjectionToken(ngDevMode ? "TIPTAP_EDITOR" : "");
var LAZY_TIPTAP_EDITOR = new InjectionToken(ngDevMode ? "LAZY_TIPTAP_EDITOR" : "", {
  factory: () => {
    const editor$ = new ReplaySubject(1);
    import("./chunk-EPZLADOE.js").then(({ Editor }) => editor$.next(Editor)).catch(() => editor$.complete());
    return editor$;
  }
});
var INITIALIZATION_TIPTAP_CONTAINER = new InjectionToken(ngDevMode ? "INITIALIZATION_TIPTAP_CONTAINER" : "");

export {
  TUI_EDITOR_DEFAULT_EDITOR_COLORS,
  EDITOR_BLANK_COLOR,
  TuiEditorTool,
  TUI_EDITOR_DEFAULT_TOOLS,
  TUI_EDITOR_RESIZE_EVENT,
  tuiDefaultFontOptionsHandler,
  TUI_DEFAULT_HTML5_MEDIA_ATTRIBUTES,
  TUI_EDITOR_LINK_HASH_PREFIX,
  TUI_EDITOR_LINK_HTTP_PREFIX,
  TUI_EDITOR_LINK_HTTPS_PREFIX,
  TUI_EDITOR_LINK_SIMPLE_PROTOCOL_DIVIDER,
  TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER,
  TUI_DEFAULT_LINK_OPTIONS,
  AbstractTuiEditor,
  TUI_EDITOR_EXTENSIONS,
  LAZY_EDITOR_EXTENSIONS,
  TUI_EDITOR_DEFAULT_OPTIONS,
  TUI_EDITOR_OPTIONS,
  provideTuiEditorOptions,
  TUI_EDITOR_SANITIZER,
  TUI_EDITOR_VALUE_TRANSFORMER,
  TUI_ATTACH_FILES_OPTIONS,
  TUI_ATTACH_FILES_LOADER,
  TUI_EDITOR_TOOLBAR_TEXTS,
  TUI_EDITOR_TABLE_COMMANDS,
  TUI_EDITOR_LINK_TEXTS,
  TUI_EDITOR_CODE_OPTIONS,
  TUI_EDITOR_FONT_OPTIONS,
  TUI_IMAGE_LOADER,
  TUI_EDITOR_PM_SELECTED_NODE,
  TIPTAP_EDITOR,
  LAZY_TIPTAP_EDITOR,
  INITIALIZATION_TIPTAP_CONTAINER
};
//# sourceMappingURL=chunk-HPI4FTRE.js.map
