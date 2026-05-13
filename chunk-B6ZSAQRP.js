import {
  AbstractTuiEditorResizable,
  TuiEditorResizable,
  TuiNodeView,
  TuiTrustResourceUrlPipe
} from "./chunk-EHJT6QZS.js";
import {
  isAllowedUri
} from "./chunk-KTNJ5Y6T.js";
import {
  TuiActiveZone,
  TuiAutoFocus,
  TuiButton,
  TuiDropdown,
  TuiDropdownDirective,
  TuiDropdownManual,
  TuiDropdownOpen,
  TuiDropdownOptionsDirective,
  TuiIcon,
  TuiLink,
  TuiScrollbar,
  WA_IS_IOS,
  tuiAutoFocusOptionsProvider
} from "./chunk-SXFCOZII.js";
import {
  AbstractTuiEditor,
  EDITOR_BLANK_COLOR,
  INITIALIZATION_TIPTAP_CONTAINER,
  TIPTAP_EDITOR,
  TUI_EDITOR_LINK_HASH_PREFIX,
  TUI_EDITOR_LINK_HTTPS_PREFIX,
  TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER,
  TUI_EDITOR_LINK_SIMPLE_PROTOCOL_DIVIDER,
  TUI_EDITOR_LINK_TEXTS,
  TUI_EDITOR_OPTIONS,
  TUI_EDITOR_RESIZE_EVENT,
  TUI_IMAGE_LOADER
} from "./chunk-QVR3CYX7.js";
import {
  tuiGetMarkRange,
  tuiParseStyle
} from "./chunk-LJS3AHKK.js";
import {
  TUI_VERSION,
  tuiControlValue
} from "./chunk-KTHA2NW7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControl,
  NgControlStatus,
  NgModel,
  WA_WINDOW,
  outputFromObservable,
  takeUntilDestroyed,
  toObservable,
  toSignal,
  tuiIsElement,
  tuiIsPresent,
  tuiPx
} from "./chunk-XQPBGS7K.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  Injectable,
  InjectionToken,
  Pipe,
  Renderer2,
  ViewEncapsulation,
  computed,
  contentChild,
  distinctUntilChanged,
  effect,
  inject,
  input,
  map,
  output,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  takeWhile,
  timer,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-WNG4JUA7.js";
import {
  EditorState,
  Node3,
  Plugin,
  ResizableNodeView,
  mergeAttributes,
  nodeInputRule
} from "./chunk-77B4UB4S.js";
import {
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// projects/editor/directives/tiptap-editor/utils/is-empty-paragraph.ts
function tuiIsEmptyParagraph(json) {
  return Array.isArray(json) && json.length === 1 && json[0]?.type === "paragraph" && !json[0].hasOwnProperty("content");
}

// projects/editor/directives/tiptap-editor/tiptap-editor.service.ts
var _TuiTiptapEditorService = class _TuiTiptapEditorService extends AbstractTuiEditor {
  constructor() {
    super();
    this.editorRef = inject(TIPTAP_EDITOR);
    this.options = inject(TUI_EDITOR_OPTIONS);
    this.firstInitContent = false;
    this.selectionSnapshot = null;
    this.editorRef.subscribe((editor) => {
      if (!editor) {
        return;
      }
      this.editor = editor;
      editor.on("transaction", () => {
        const content = editor.getHTML();
        const json = editor.getJSON().content;
        const value = tuiIsEmptyParagraph(json) ? "" : content;
        this.valueChange$.next(value);
      });
      editor.on("blur", () => this.triggerTransaction());
    });
  }
  get isFocused() {
    return this.editor?.isFocused ?? false;
  }
  get html() {
    return this.editor?.getHTML() ?? "";
  }
  get editable() {
    return this.editor?.isEditable ?? false;
  }
  set editable(editable) {
    this.editor?.setEditable(editable, false);
  }
  get state() {
    return this.editor?.state ?? null;
  }
  getOriginTiptapEditor() {
    return this.editor ?? null;
  }
  undoDisabled() {
    return !this.editor?.can().undo();
  }
  redoDisabled() {
    return !this.editor?.can().redo();
  }
  getFontColor() {
    return this.editor?.getAttributes("textStyle").fontColor || EDITOR_BLANK_COLOR;
  }
  getFontSize() {
    return Number.parseInt(this.editor?.getAttributes("textStyle").fontSize, 10);
  }
  setFontSize(size) {
    this.editor?.chain().setMark("textStyle", { fontSize: tuiPx(size) }).run();
  }
  getBackgroundColor() {
    return this.editor?.getAttributes("textStyle").backgroundColor || "transparent";
  }
  getCellColor() {
    return this.editor?.getAttributes("tableCell").background || this.editor?.getAttributes("tableHeader").background || "";
  }
  getGroupColor() {
    if (this.editor?.isActive("group")) {
      const style = this.editor.getAttributes("group").style ?? "";
      const styles = tuiParseStyle(style);
      return styles["background-color"] ?? styles["background"] ?? "";
    }
    return "";
  }
  onAlign(align) {
    this.editor?.chain().focus().setTextAlign(align).run();
  }
  setImage(src) {
    this.editor?.chain().focus().command(({ commands, state }) => {
      const setImage = commands.setEditableImage ?? commands.setImage;
      if (setImage) {
        const anchor = state.selection.anchor;
        setImage({ src });
        commands.setTextSelection(anchor);
        return true;
      }
      return false;
    }).run();
  }
  undo() {
    this.editor?.chain().undo().run();
  }
  redo() {
    this.editor?.chain().redo().run();
  }
  setHorizontalRule() {
    this.editor?.chain().focus().setHorizontalRule().run();
  }
  removeFormat() {
    this.editor?.commands.unsetAllMarks();
    this.editor?.commands.clearNodes();
  }
  setFontColor(color) {
    this.editor?.chain().focus().setFontColor(color).run();
  }
  setBackgroundColor(color) {
    this.editor?.chain().focus().setBackgroundColor(color).run();
  }
  toggleUnderline() {
    this.editor?.chain().focus().toggleUnderline().run();
  }
  toggleStrike() {
    this.editor?.chain().focus().toggleStrike().run();
  }
  toggleOrderedList() {
    this.editor?.chain().focus().toggleOrderedList().run();
  }
  toggleUnorderedList() {
    this.editor?.chain().focus().toggleBulletList().run();
  }
  togglePre() {
    this.editor?.chain().focus().toggleCodeBlock().run();
  }
  toggleTaskList() {
    this.editor?.chain().focus().toggleTaskList().run();
  }
  sinkListItem() {
    const type = this.editor?.isActive("taskList") ? "taskItem" : "listItem";
    this.editor?.chain().focus().sinkListItem(type).run();
  }
  liftListItem() {
    const type = this.editor?.isActive("taskList") ? "taskItem" : "listItem";
    this.editor?.chain().focus().liftListItem(type).run();
  }
  isActive(name, attributes) {
    return (typeof name === "string" ? this.editor?.isActive(name, attributes) : this.editor?.isActive(name)) ?? false;
  }
  isActive$(name, attributes) {
    return this.valueChange$.pipe(startWith(null), map(() => typeof name === "string" ? this.isActive(name, attributes) : this.isActive(name)), distinctUntilChanged());
  }
  toggleBold() {
    this.editor?.chain().focus().toggleBold().run();
  }
  toggleCode() {
    this.editor?.chain().focus().toggleCode().run();
  }
  toggleItalic() {
    this.editor?.chain().focus().toggleItalic().run();
  }
  toggleBlockquote() {
    this.editor?.chain().focus().toggleBlockquote().run();
  }
  toggleSubscript() {
    this.editor?.chain().focus().toggleSubscript().run();
  }
  toggleSuperscript() {
    this.editor?.chain().focus().toggleSuperscript().run();
  }
  toggleCodeBlock() {
    this.editor?.chain().focus().toggleCodeBlock().run();
  }
  insertTable(cols, rows) {
    this.editor?.chain().focus().insertTable({ cols, rows }).run();
  }
  addColumnAfter() {
    this.editor?.chain().focus().addColumnAfter().run();
  }
  addColumnBefore() {
    this.editor?.chain().focus().addColumnBefore().run();
  }
  addRowAfter() {
    this.editor?.chain().focus().addRowAfter().run();
  }
  addRowBefore() {
    this.editor?.chain().focus().addRowBefore().run();
  }
  deleteColumn() {
    this.editor?.chain().focus().deleteColumn().run();
  }
  deleteRow() {
    this.editor?.chain().focus().deleteRow().run();
  }
  mergeCells() {
    this.editor?.chain().focus().mergeCells().run();
  }
  splitCell() {
    this.editor?.chain().focus().splitCell().run();
  }
  canMergeCells() {
    return this.editor?.can().mergeCells() ?? false;
  }
  canSplitCells() {
    return this.editor?.can().splitCell() ?? false;
  }
  setHeading(level) {
    this.editor?.chain().focus().setHeading({ level }).run();
  }
  setParagraph(options) {
    this.editor?.chain().focus().setParagraph().run();
    if (options) {
      this.editor?.chain().setMark("textStyle", options).run();
    }
  }
  setHardBreak() {
    this.editor?.chain().setHardBreak().run();
  }
  setTextSelection(value) {
    this.editor?.commands.setTextSelection(value);
  }
  toggleLink(href) {
    this.editor?.chain().focus().toggleLink({ href }).run();
  }
  setLink(href) {
    this.editor?.chain().focus().setLink({ href }).run();
  }
  unsetLink() {
    this.editor?.chain().focus().unsetLink().run();
  }
  focus() {
    this.editor?.chain().focus().run();
  }
  setValue(value, options = {}) {
    if (value === this.html || value === "" && this.html === "<p></p>") {
      return;
    }
    this.editor?.commands.setContent(value, {
      emitUpdate: false,
      parseOptions: this.options.parseOptions
    });
    if (options.clearsHistory || !this.firstInitContent) {
      this.clearHistory();
    }
    this.firstInitContent = true;
  }
  clearHistory() {
    this.editor?.view.updateState(EditorState.create({
      schema: this.editor.state.schema,
      doc: this.editor.state.doc,
      selection: this.editor.state.selection,
      storedMarks: this.editor.state.storedMarks,
      plugins: this.editor.state.plugins
    }));
    this.triggerTransaction();
  }
  destroy() {
    this.editor?.destroy();
  }
  setCellColor(color) {
    this.editor?.chain().focus().setCellBackground(color).run();
  }
  selectClosest() {
    const pos = this.editor?.state.selection.anchor;
    const range = tuiGetMarkRange(this.editor?.state.tr.doc.resolve(pos ?? 0), this.editor?.schema.marks.link);
    if (range) {
      this.editor?.chain().setTextSelection(range).run();
    }
  }
  enter() {
    this.editor?.commands.enter();
  }
  setDetails() {
    this.editor?.commands.setDetails();
  }
  unsetDetailsAt(pos) {
    this.editor?.commands.unsetDetailsAt(pos);
  }
  /**
   * @deprecated use {@link unsetDetailsAt}
   */
  unsetDetails() {
    this.editor?.commands.unsetDetails();
  }
  /**
   * @deprecated use {@link unsetDetails}
   */
  removeDetails() {
    this.editor?.commands.unsetDetails();
  }
  setGroup() {
    this.editor?.commands.setGroup();
  }
  removeGroup() {
    this.editor?.commands.removeGroup();
  }
  setGroupHilite(color) {
    this.editor?.commands.setGroupHilite(color);
  }
  setAnchor(anchor) {
    this.editor?.commands.setAnchor(anchor.replace("#", ""));
  }
  removeAnchor() {
    this.editor?.commands.removeAnchor();
  }
  setFileLink(preview) {
    this.editor?.commands.setFileLink(preview);
  }
  setYoutubeVideo(options) {
    this.editor?.commands.setYoutubeVideo(options);
  }
  setIframe(options) {
    this.editor?.commands.setIframe(options);
  }
  removeEmptyTextStyle() {
    this.editor?.commands.removeEmptyTextStyle();
  }
  toggleMark(typeOrName, attributes, options) {
    this.editor?.commands.toggleMark(typeOrName, attributes, options);
  }
  /**
   * @deprecated use {@link html}
   */
  getHTML() {
    return this.getOriginTiptapEditor()?.getHTML() ?? "";
  }
  takeSelectionSnapshot() {
    this.selectionSnapshot = this.editor?.state.selection.toJSON() ?? null;
  }
  getSelectionSnapshot() {
    return this.selectionSnapshot;
  }
  triggerTransaction() {
    this.editor?.view.dispatch(this.editor.state.tr);
  }
};
_TuiTiptapEditorService.\u0275fac = function TuiTiptapEditorService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTiptapEditorService)();
};
_TuiTiptapEditorService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TuiTiptapEditorService, factory: _TuiTiptapEditorService.\u0275fac });
var TuiTiptapEditorService = _TuiTiptapEditorService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTiptapEditorService, [{
    type: Injectable
  }], () => [], null);
})();

// projects/editor/directives/tiptap-editor/tiptap-editor.directive.ts
var _TuiTiptapEditor = class _TuiTiptapEditor {
  constructor() {
    this.el = inject(ElementRef);
    this.renderer = inject(Renderer2);
    this.editor = inject(TuiTiptapEditorService);
    this.editorContainer = inject(INITIALIZATION_TIPTAP_CONTAINER);
    this.value = input("");
    this.editable = input(true);
    this.valueChange = outputFromObservable(this.editor.valueChange$.pipe(distinctUntilChanged()));
    this.stateChange = outputFromObservable(this.editor.stateChange$);
    this.$ = inject(TIPTAP_EDITOR).pipe(takeUntilDestroyed()).subscribe(() => {
      this.renderer.appendChild(this.el.nativeElement, this.editorContainer);
      this.editor.editable = this.editable();
    });
    this.valueEffect = effect(() => {
      this.editor.setValue(this.value());
    });
    this.editableEffect = effect(() => {
      this.editor.editable = this.editable();
    });
  }
};
_TuiTiptapEditor.\u0275fac = function TuiTiptapEditor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTiptapEditor)();
};
_TuiTiptapEditor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _TuiTiptapEditor, selectors: [["", "tuiTiptapEditor", ""]], inputs: { value: [1, "value"], editable: [1, "editable"] }, outputs: { valueChange: "valueChange", stateChange: "stateChange" } });
var TuiTiptapEditor = _TuiTiptapEditor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTiptapEditor, [{
    type: Directive,
    args: [{ selector: "[tuiTiptapEditor]" }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-input-inline.mjs
var _c0 = [[["input"]], "*"];
var _c1 = ["input", "*"];
function TuiInputInline_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
}
var _TuiInputInline = class _TuiInputInline {
  constructor() {
    this.control = contentChild(NgControl);
    this.value = toSignal(toObservable(this.control).pipe(switchMap(tuiControlValue)));
  }
};
_TuiInputInline.\u0275fac = function TuiInputInline_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiInputInline)();
};
_TuiInputInline.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiInputInline,
  selectors: [["tui-input-inline"]],
  contentQueries: function TuiInputInline_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.control, NgControl, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  },
  hostAttrs: ["data-tui-version", "5.6.0"],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 2,
  consts: [[1, "t-before", 3, "textContent"], ["automation-id", "tui-input-inline__placeholder", 1, "t-placeholder"]],
  template: function TuiInputInline_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275element(0, "span", 0);
      \u0275\u0275template(1, TuiInputInline_Conditional_1_Template, 2, 0, "span", 1);
      \u0275\u0275projection(2);
    }
    if (rf & 2) {
      \u0275\u0275property("textContent", ctx.value());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.value() ? 1 : -1);
    }
  },
  styles: ['tui-input-inline:where(*[data-tui-version="5.6.0"]){position:relative;display:inline-block;white-space:nowrap;box-sizing:border-box}tui-input-inline:where(*[data-tui-version="5.6.0"])>.t-before{padding-inline-end:.02em;margin-inline-start:1px;white-space:pre;visibility:hidden}tui-input-inline:where(*[data-tui-version="5.6.0"])>.t-placeholder{display:inline-block;min-inline-size:1px;margin-inline-start:-1px}tui-input-inline:where(*[data-tui-version="5.6.0"])>input{position:absolute;inset-block-start:0;inset-inline-start:0;background-color:transparent;padding:inherit;font:inherit;color:inherit;box-sizing:border-box;inline-size:100%;block-size:100%;border-width:0;text-align:inherit;letter-spacing:inherit;text-indent:inherit;text-transform:inherit;outline:none}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiInputInline = _TuiInputInline;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputInline, [{
    type: Component,
    args: [{
      selector: "tui-input-inline",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "data-tui-version": TUI_VERSION
      },
      template: '<span\n    class="t-before"\n    [textContent]="value()"\n></span>\n\n@if (!value()) {\n    <span\n        automation-id="tui-input-inline__placeholder"\n        class="t-placeholder"\n    >\n        <ng-content />\n    </span>\n}\n<ng-content select="input" />\n',
      styles: ['tui-input-inline:where(*[data-tui-version="5.6.0"]){position:relative;display:inline-block;white-space:nowrap;box-sizing:border-box}tui-input-inline:where(*[data-tui-version="5.6.0"])>.t-before{padding-inline-end:.02em;margin-inline-start:1px;white-space:pre;visibility:hidden}tui-input-inline:where(*[data-tui-version="5.6.0"])>.t-placeholder{display:inline-block;min-inline-size:1px;margin-inline-start:-1px}tui-input-inline:where(*[data-tui-version="5.6.0"])>input{position:absolute;inset-block-start:0;inset-inline-start:0;background-color:transparent;padding:inherit;font:inherit;color:inherit;box-sizing:border-box;inline-size:100%;block-size:100%;border-width:0;text-align:inherit;letter-spacing:inherit;text-indent:inherit;text-transform:inherit;outline:none}\n']
    }]
  }], null, null);
})();

// projects/editor/components/edit-link/pipes/filter-anchors.pipe.ts
var _TuiFilterAnchorsPipe = class _TuiFilterAnchorsPipe {
  transform(anchors, prefix, currentUrl) {
    return prefix === "#" ? anchors.filter((anchor) => anchor !== currentUrl) : anchors;
  }
};
_TuiFilterAnchorsPipe.\u0275fac = function TuiFilterAnchorsPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiFilterAnchorsPipe)();
};
_TuiFilterAnchorsPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "tuiFilterAnchors", type: _TuiFilterAnchorsPipe, pure: true });
var TuiFilterAnchorsPipe = _TuiFilterAnchorsPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFilterAnchorsPipe, [{
    type: Pipe,
    args: [{ name: "tuiFilterAnchors" }]
  }], null, null);
})();

// projects/editor/components/edit-link/pipes/short-url.pipe.ts
var MAX_LENGTH = 60;
var START = MAX_LENGTH - 20;
var END = MAX_LENGTH - START - 10;
var _TuiShortUrlPipe = class _TuiShortUrlPipe {
  transform(url) {
    return url.length < MAX_LENGTH ? url : `${url.slice(0, Math.max(0, START))}...${url.slice(url.length - END)}`;
  }
};
_TuiShortUrlPipe.\u0275fac = function TuiShortUrlPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiShortUrlPipe)();
};
_TuiShortUrlPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "tuiShortUrl", type: _TuiShortUrlPipe, pure: true });
var TuiShortUrlPipe = _TuiShortUrlPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiShortUrlPipe, [{
    type: Pipe,
    args: [{ name: "tuiShortUrl" }]
  }], null, null);
})();

// projects/editor/components/edit-link/utils/edit-link-parse-url.ts
function splitOsiProtocol(rawUrl = "") {
  const [url = "", queryParams = ""] = rawUrl.split(/\?/);
  const protocolPosition = url.indexOf(TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER);
  const [prefix, path] = protocolPosition > -1 ? [
    url.slice(0, protocolPosition + TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER.length),
    url.slice(protocolPosition + TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER.length, url.length)
  ] : ["", url];
  const pathWithQueries = `${path}${queryParams.length ? `?${queryParams}` : ""}`;
  const result = [prefix, pathWithQueries].filter(Boolean);
  return path.includes("://") && result.length > 1 ? splitOsiProtocol(pathWithQueries) : result;
}
function splitSimpleProtocol(rawUrl = "") {
  const [url = "", queryParams = ""] = rawUrl.split(/\?/);
  const [prefix, path] = url.split(/:/).slice(-2).filter(Boolean);
  const hardUrl = (
    // https://domain.com/path:some:schema:data:test
    url.includes("/") && url.lastIndexOf(":") > url.indexOf("/") || url.includes("?") && url.lastIndexOf(":") > url.indexOf("?")
  );
  return !hardUrl && prefix && path && !isValidUrl(url) ? [`${prefix}:`, `${path}${queryParams.length ? `?${queryParams}` : ""}`] : [];
}
function tuiEditLinkParseUrl(url = "") {
  if (url.startsWith(TUI_EDITOR_LINK_HASH_PREFIX)) {
    return { prefix: TUI_EDITOR_LINK_HASH_PREFIX, path: url.slice(1) };
  }
  const [prefix = "", path = ""] = url.includes(TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER) ? splitOsiProtocol(url) : splitSimpleProtocol(url);
  if (path.includes(TUI_EDITOR_LINK_SIMPLE_PROTOCOL_DIVIDER)) {
    const [protocol, otherPart] = splitSimpleProtocol(path);
    if (protocol && otherPart) {
      return { prefix: protocol, path: otherPart };
    }
  }
  if (url.startsWith("/") && !url.startsWith("//")) {
    return { prefix: url.slice(0, 1), path: url.slice(1) };
  }
  return url.startsWith("./") ? { prefix: url.slice(0, 2), path: url.slice(2) } : { prefix, path: prefix === "" ? url : path };
}
function isValidUrl(url) {
  return new RegExp(
    `${String.raw`^([a-zA-Z]+:\/\/)?`}${String.raw`((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|localhost|`}${String.raw`((\d{1,3}\.){3}\d{1,3}))`}${String.raw`(\:\d+)?(\/[-a-z\d%_.~+\:]*)*`}${String.raw`(\?[)(;&a-z\d%_.~+=-]*)?`}${String.raw`(\#[-a-z\d_]*)?$`}`,
    // fragment locator
    "i"
  ).test(url);
}

// projects/editor/components/edit-link/edit-link.component.ts
function TuiEditLink_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Edit anchor ");
  }
}
function TuiEditLink_Conditional_1_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Link to anchor");
    \u0275\u0275elementEnd();
  }
}
function TuiEditLink_Conditional_1_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "URL");
    \u0275\u0275elementEnd();
  }
}
function TuiEditLink_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TuiEditLink_Conditional_1_Conditional_3_Conditional_0_Template, 2, 0, "span")(1, TuiEditLink_Conditional_1_Conditional_3_Conditional_1_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.prefixIsHashMode ? 0 : 1);
  }
}
function TuiEditLink_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const text_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.prefixIsHashMode ? text_r3.anchorExample : text_r3.urlExample, " ");
  }
}
function TuiEditLink_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 1)(1, "div", 2);
    \u0275\u0275template(2, TuiEditLink_Conditional_1_Conditional_2_Template, 1, 0)(3, TuiEditLink_Conditional_1_Conditional_3_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "tui-input-inline", 5);
    \u0275\u0275listener("input", function TuiEditLink_Conditional_1_Template_tui_input_inline_input_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onChange($event.target == null ? null : $event.target.value));
    })("keydown.backspace", function TuiEditLink_Conditional_1_Template_tui_input_inline_keydown_backspace_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackspace());
    })("keydown.prevent.enter", function TuiEditLink_Conditional_1_Template_tui_input_inline_keydown_prevent_enter_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSave());
    });
    \u0275\u0275template(8, TuiEditLink_Conditional_1_Conditional_8_Template, 1, 1);
    \u0275\u0275elementStart(9, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function TuiEditLink_Conditional_1_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.url, $event) || (ctx_r1.url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function TuiEditLink_Conditional_1_Template_input_blur_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBlur(ctx_r1.url));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "button", 7);
    \u0275\u0275listener("mousedown.prevent", function TuiEditLink_Conditional_1_Template_button_mousedown_prevent_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClear());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 8);
    \u0275\u0275listener("mousedown", function TuiEditLink_Conditional_1_Template_button_mousedown_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSave());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isOnlyAnchorMode ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.prefix);
    \u0275\u0275advance();
    \u0275\u0275classProp("t-input_filled", ctx_r1.hasUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.texts()) ? 8 : -1, tmp_4_0);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.url);
    \u0275\u0275advance();
    \u0275\u0275property("iconStart", ctx_r1.options.icons.popupLinkRemove);
    \u0275\u0275advance();
    \u0275\u0275property("iconStart", ctx_r1.options.icons.popupLinkSave);
  }
}
function TuiEditLink_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "tuiShortUrl");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10);
    \u0275\u0275listener("click", function TuiEditLink_Conditional_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 11);
    \u0275\u0275listener("click", function TuiEditLink_Conditional_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRemove());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("href", ctx_r1.href, \u0275\u0275sanitizeUrl)("iconStart", ctx_r1.prefixIsHashMode ? ctx_r1.options.icons.hash : ctx_r1.options.icons.externalLink);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, ctx_r1.url), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("iconStart", ctx_r1.options.icons.popupPreviewLinkEdit);
    \u0275\u0275advance();
    \u0275\u0275property("iconStart", ctx_r1.options.icons.popupPreviewLinkClear);
  }
}
function TuiEditLink_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("mousedown", function TuiEditLink_Conditional_3_For_4_Template_button_mousedown_0_listener() {
      const id_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setAnchor(id_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const id_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" #", id_r6, " ");
  }
}
function TuiEditLink_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 12);
    \u0275\u0275elementStart(1, "tui-scrollbar")(2, "div", 13);
    \u0275\u0275repeaterCreate(3, TuiEditLink_Conditional_3_For_4_Template, 2, 1, "button", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "tuiFilterAnchors");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(5, 0, ctx_r1.anchorIds, (tmp_1_0 = ctx_r1.prefix) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "", ctx_r1.url));
  }
}
var _TuiEditLink = class _TuiEditLink {
  constructor() {
    this.doc = inject(WA_WINDOW)?.document ?? null;
    this.isOnlyAnchorMode = this.detectAnchorMode();
    this.options = inject(TUI_EDITOR_OPTIONS);
    this.url = this.getHrefOrAnchorId();
    this.edit = !this.url;
    this.prefix = this.makeDefaultPrefix();
    this.texts = inject(TUI_EDITOR_LINK_TEXTS);
    this.editor = input(inject(TuiTiptapEditorService, { optional: true }));
    this.anchorIds = this.getAllAnchorsIds();
    this.link = input(void 0);
    this.explicitOnlyLinkEdit = input(false);
    this.addLink = output();
    this.removeLink = output();
    this.anchorMode = input(false);
    this.hasAnchorMode = signal(false);
  }
  ngOnInit() {
    const mode = this.anchorMode();
    this.hasAnchorMode.set(mode);
    this.isOnlyAnchorMode = mode;
    this.prefix = mode ? TUI_EDITOR_LINK_HASH_PREFIX : this.makeDefaultPrefix();
    if (this.explicitOnlyLinkEdit()) {
      const link = this.link();
      this.url = link ? this.removePrefix(link) : "";
      this.edit = true;
    }
  }
  get defaultProtocol() {
    return this.options.linkOptions?.protocol ?? TUI_EDITOR_LINK_HTTPS_PREFIX;
  }
  get prefixIsHashMode() {
    return this.prefix === TUI_EDITOR_LINK_HASH_PREFIX;
  }
  get hasUrl() {
    return !!this.url;
  }
  get href() {
    return `${this.prefix}${this.url}`;
  }
  get showAnchorsList() {
    return !this.explicitOnlyLinkEdit() && !this.isOnlyAnchorMode && this.edit && this.anchorIds.length > 0;
  }
  onSelectionChange() {
    if (this.isViewMode) {
      this.url = this.getHrefOrAnchorId();
      const mode = this.detectAnchorMode();
      this.isOnlyAnchorMode = mode;
      this.prefix = mode ? TUI_EDITOR_LINK_HASH_PREFIX : this.makeDefaultPrefix();
    }
  }
  onMouseDown(event) {
    if (tuiIsElement(event.target) && !event.target.matches("a, button, input")) {
      event.preventDefault();
    }
  }
  setAnchor(anchor) {
    this.url = anchor;
    this.changePrefix(true);
    this.addLink.emit(this.href);
  }
  changePrefix(useHash) {
    this.prefix = useHash ? TUI_EDITOR_LINK_HASH_PREFIX : this.defaultProtocol;
  }
  onSave() {
    if (this.url) {
      this.addLink.emit(this.href);
    } else {
      this.removeLink.emit();
    }
  }
  onBackspace() {
    if (!this.url) {
      this.prefix = this.isOnlyAnchorMode ? TUI_EDITOR_LINK_HASH_PREFIX : this.defaultProtocol;
    }
  }
  onEdit() {
    this.edit = true;
  }
  onRemove() {
    this.removeLink.emit();
  }
  onChange(url) {
    this.url = this.removePrefix(url);
  }
  onBlur(url) {
    if (this.explicitOnlyLinkEdit()) {
      return;
    }
    const range = this.editor()?.getSelectionSnapshot();
    if (range && !url && !this.url) {
      this.editor()?.setTextSelection({ from: range.anchor, to: range.head });
      if (this.isOnlyAnchorMode) {
        this.editor()?.removeAnchor();
      } else {
        this.removeLink.emit();
      }
    }
  }
  onClear() {
    this.url = "";
  }
  get isViewMode() {
    return !this.edit;
  }
  makeDefaultPrefix() {
    const a = this.getAnchorElement();
    const defaultPrefix = tuiEditLinkParseUrl(a?.getAttribute("href") ?? "").prefix || this.defaultProtocol;
    if (a) {
      if (this.isOnlyAnchorMode) {
        return TUI_EDITOR_LINK_HASH_PREFIX;
      }
      return !a.getAttribute("href") && a.getAttribute("id") || a.getAttribute("href")?.startsWith(TUI_EDITOR_LINK_HASH_PREFIX) ? TUI_EDITOR_LINK_HASH_PREFIX : defaultPrefix;
    }
    return defaultPrefix;
  }
  detectAnchorMode() {
    const a = this.getAnchorElement();
    return !a?.href && (!!a?.getAttribute("id") || a?.getAttribute("data-type") === "jump-anchor");
  }
  getFocusedParentElement() {
    return this.doc?.getSelection?.()?.focusNode?.parentElement || null;
  }
  getAnchorElement() {
    const focusable = this.getFocusedParentElement();
    return focusable?.closest("a") ?? focusable?.querySelector("img")?.closest("a") ?? null;
  }
  getHrefOrAnchorId() {
    const a = this.getAnchorElement();
    return a ? this.removePrefix(a.getAttribute("href") ?? a.getAttribute("id") ?? "") : this.url;
  }
  removePrefix(url) {
    const fullPath = url.startsWith(TUI_EDITOR_LINK_HASH_PREFIX) || this.prefix === TUI_EDITOR_LINK_HASH_PREFIX || url.startsWith("/") || url.startsWith("./") || url.startsWith("http") || url.startsWith("://") ? url : `${this.prefix ?? ""}${url}`;
    const { prefix, path } = tuiEditLinkParseUrl(fullPath);
    const expectAnchorMode = this.isOnlyAnchorMode || prefix === TUI_EDITOR_LINK_HASH_PREFIX || prefix === "" && this.prefix === TUI_EDITOR_LINK_HASH_PREFIX;
    if (expectAnchorMode) {
      this.prefix = TUI_EDITOR_LINK_HASH_PREFIX;
    } else if (prefix === "") {
      this.prefix = this.defaultProtocol;
    } else {
      this.prefix = prefix;
    }
    return path;
  }
  getAllAnchorsIds() {
    const nodes = Array.from(this.editor()?.getOriginTiptapEditor()?.view.dom.querySelectorAll('[data-type="jump-anchor"]') ?? []);
    return Array.from(nodes).map((node) => node.getAttribute("id") ?? "").filter(Boolean);
  }
};
_TuiEditLink.\u0275fac = function TuiEditLink_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiEditLink)();
};
_TuiEditLink.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TuiEditLink, selectors: [["tui-edit-link"]], hostBindings: function TuiEditLink_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("selectionchange", function TuiEditLink_selectionchange_HostBindingHandler() {
      return ctx.onSelectionChange();
    }, false, \u0275\u0275resolveDocument)("mousedown.capture", function TuiEditLink_mousedown_capture_HostBindingHandler($event) {
      return ctx.onMouseDown($event);
    });
  }
}, inputs: { editor: [1, "editor"], link: [1, "link"], explicitOnlyLinkEdit: [1, "explicitOnlyLinkEdit"], anchorMode: [1, "anchorMode"] }, outputs: { addLink: "addLink", removeLink: "removeLink" }, features: [\u0275\u0275ProvidersFeature([
  /**
   * Safari has a different behavior for autofocus,
   * which causes focus to be lost at the moment of delay
   * https://github.com/taiga-family/editor/issues/1717
   */
  {
    provide: WA_IS_IOS,
    useValue: true
  },
  tuiAutoFocusOptionsProvider({
    delay: 0,
    preventScroll: true
  })
])], decls: 4, vars: 2, consts: [[1, "t-edit-link"], [1, "t-label"], [1, "t-label-properties"], [1, "t-url"], [1, "t-prefix"], [1, "t-input", 3, "input", "keydown.backspace", "keydown.prevent.enter"], ["tuiAutoFocus", "", 3, "ngModelChange", "blur", "ngModel"], ["appearance", "icon", "size", "s", "title", "Clear", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "mousedown.prevent", "iconStart"], ["appearance", "icon", "size", "s", "title", "Save", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "mousedown", "iconStart"], ["target", "_blank", "tuiLink", "", 1, "t-link", 3, "href", "iconStart"], ["appearance", "icon", "size", "s", "title", "Change link", "tuiIconButton", "", "type", "button", 1, "t-button", "t-edit-button", 3, "click", "iconStart"], ["appearance", "icon", "automation-id", "toolbar__popup-link-clear-button", "size", "s", "title", "Remove link", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "click", "iconStart"], [1, "t-hr"], [1, "t-anchor-list"], ["type", "button", 1, "t-anchor"], ["type", "button", 1, "t-anchor", 3, "mousedown"]], template: function TuiEditLink_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, TuiEditLink_Conditional_1_Template, 12, 8)(2, TuiEditLink_Conditional_2_Template, 5, 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TuiEditLink_Conditional_3_Template, 6, 4);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.edit ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.showAnchorsList ? 3 : -1);
  }
}, dependencies: [
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  TuiAutoFocus,
  TuiButton,
  TuiFilterAnchorsPipe,
  TuiInputInline,
  TuiLink,
  TuiScrollbar,
  TuiShortUrlPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-inline-size: 18.75rem;\n}\n.t-edit-link[_ngcontent-%COMP%] {\n  display: flex;\n  min-block-size: 4rem;\n  align-items: center;\n  padding-inline-end: 0.75rem;\n}\n.t-label[_ngcontent-%COMP%] {\n  font: var(--tui-typography-body-s);\n  block-size: var(--tui-height-l);\n  box-sizing: border-box;\n  padding: 0.4375rem 1rem;\n  min-inline-size: 12.5rem;\n  max-inline-size: 25rem;\n  inline-size: 100%;\n}\n.t-label-properties[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  max-inline-size: 8.375rem;\n  justify-content: space-between;\n}\n.t-property_inactive[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.t-url[_ngcontent-%COMP%] {\n  display: flex;\n  font: var(--tui-typography-body-m);\n  color: var(--tui-text-secondary);\n  overflow: auto;\n}\n.t-input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.t-input_filled[_ngcontent-%COMP%] {\n  color: var(--tui-text-primary);\n}\n.t-button[_ngcontent-%COMP%] {\n  inline-size: 2rem;\n  block-size: 2rem;\n  margin: 0 0.25rem;\n  transition: background 0.2s;\n}\n.t-edit-button[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n}\n.t-link[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.t-cleaner[_ngcontent-%COMP%] {\n  transition-property: color;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  color: var(--tui-text-secondary);\n  cursor: pointer;\n  margin-inline-start: auto;\n}\n.t-cleaner[_ngcontent-%COMP%]:hover {\n  color: var(--tui-background-accent-opposite-pressed);\n}\n.t-cleaner_hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.t-anchor-list[_ngcontent-%COMP%] {\n  display: flex;\n  max-block-size: 12.5rem;\n  flex-direction: column;\n}\n.t-anchor[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  appearance: none;\n  border: 0;\n  background: none;\n  font-size: inherit;\n  line-height: inherit;\n  text-decoration: none;\n  min-block-size: 2.75rem;\n  padding: 0.375rem 0.5rem;\n  margin: 0.125rem 0.5rem;\n  border-radius: var(--tui-radius-m);\n  text-align: start;\n}\n.t-anchor[_ngcontent-%COMP%]:hover {\n  background: var(--tui-background-base-alt);\n  cursor: pointer;\n}\n/*# sourceMappingURL=edit-link.style.css.map */"], changeDetection: 0 });
var TuiEditLink = _TuiEditLink;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiEditLink, [{
    type: Component,
    args: [{ selector: "tui-edit-link", imports: [
      FormsModule,
      TuiAutoFocus,
      TuiButton,
      TuiFilterAnchorsPipe,
      TuiInputInline,
      TuiLink,
      TuiScrollbar,
      TuiShortUrlPipe
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      /**
       * Safari has a different behavior for autofocus,
       * which causes focus to be lost at the moment of delay
       * https://github.com/taiga-family/editor/issues/1717
       */
      {
        provide: WA_IS_IOS,
        useValue: true
      },
      tuiAutoFocusOptionsProvider({
        delay: 0,
        preventScroll: true
      })
    ], host: {
      "(document:selectionchange)": "onSelectionChange()",
      "(mousedown.capture)": "onMouseDown($event)"
    }, template: `<div class="t-edit-link">
    @if (edit) {
        <label class="t-label">
            <div class="t-label-properties">
                @if (isOnlyAnchorMode) {
                    Edit anchor
                } @else {
                    @if (prefixIsHashMode) {
                        <span>Link to anchor</span>
                    } @else {
                        <span>URL</span>
                    }
                }
            </div>
            <div class="t-url">
                <div class="t-prefix">{{ prefix }}</div>
                <tui-input-inline
                    class="t-input"
                    [class.t-input_filled]="hasUrl"
                    (input)="onChange($any($event.target)?.value)"
                    (keydown.backspace)="onBackspace()"
                    (keydown.prevent.enter)="onSave()"
                >
                    @if (texts(); as text) {
                        {{ prefixIsHashMode ? text.anchorExample : text.urlExample }}
                    }
                    <input
                        tuiAutoFocus
                        [(ngModel)]="url"
                        (blur)="onBlur(url)"
                    />
                </tui-input-inline>
            </div>
        </label>
        <button
            appearance="icon"
            size="s"
            title="Clear"
            tuiIconButton
            type="button"
            class="t-button"
            [iconStart]="options.icons.popupLinkRemove"
            (mousedown.prevent)="onClear()"
        ></button>
        <button
            appearance="icon"
            size="s"
            title="Save"
            tuiIconButton
            type="button"
            class="t-button"
            [iconStart]="options.icons.popupLinkSave"
            (mousedown)="onSave()"
        ></button>
    } @else {
        <a
            target="_blank"
            tuiLink
            class="t-link"
            [href]="href"
            [iconStart]="prefixIsHashMode ? options.icons.hash : options.icons.externalLink"
        >
            {{ url | tuiShortUrl }}
        </a>
        <button
            appearance="icon"
            size="s"
            title="Change link"
            tuiIconButton
            type="button"
            class="t-button t-edit-button"
            [iconStart]="options.icons.popupPreviewLinkEdit"
            (click)="onEdit()"
        ></button>
        <button
            appearance="icon"
            automation-id="toolbar__popup-link-clear-button"
            size="s"
            title="Remove link"
            tuiIconButton
            type="button"
            class="t-button"
            [iconStart]="options.icons.popupPreviewLinkClear"
            (click)="onRemove()"
        ></button>
    }
</div>

@if (showAnchorsList) {
    <hr class="t-hr" />
    <tui-scrollbar>
        <div class="t-anchor-list">
            @for (id of anchorIds | tuiFilterAnchors: prefix ?? '' : url; track id) {
                <button
                    type="button"
                    class="t-anchor"
                    (mousedown)="setAnchor(id)"
                >
                    #{{ id }}
                </button>
            }
        </div>
    </tui-scrollbar>
}
`, styles: ["/* projects/editor/components/edit-link/edit-link.style.less */\n:host {\n  display: block;\n  min-inline-size: 18.75rem;\n}\n.t-edit-link {\n  display: flex;\n  min-block-size: 4rem;\n  align-items: center;\n  padding-inline-end: 0.75rem;\n}\n.t-label {\n  font: var(--tui-typography-body-s);\n  block-size: var(--tui-height-l);\n  box-sizing: border-box;\n  padding: 0.4375rem 1rem;\n  min-inline-size: 12.5rem;\n  max-inline-size: 25rem;\n  inline-size: 100%;\n}\n.t-label-properties {\n  display: flex;\n  align-items: center;\n  max-inline-size: 8.375rem;\n  justify-content: space-between;\n}\n.t-property_inactive {\n  opacity: 0.5;\n}\n.t-url {\n  display: flex;\n  font: var(--tui-typography-body-m);\n  color: var(--tui-text-secondary);\n  overflow: auto;\n}\n.t-input {\n  flex: 1;\n}\n.t-input_filled {\n  color: var(--tui-text-primary);\n}\n.t-button {\n  inline-size: 2rem;\n  block-size: 2rem;\n  margin: 0 0.25rem;\n  transition: background 0.2s;\n}\n.t-edit-button {\n  margin-inline-start: auto;\n}\n.t-link {\n  margin: 0 1rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.t-cleaner {\n  transition-property: color;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  color: var(--tui-text-secondary);\n  cursor: pointer;\n  margin-inline-start: auto;\n}\n.t-cleaner:hover {\n  color: var(--tui-background-accent-opposite-pressed);\n}\n.t-cleaner_hidden {\n  visibility: hidden;\n}\n.t-anchor-list {\n  display: flex;\n  max-block-size: 12.5rem;\n  flex-direction: column;\n}\n.t-anchor {\n  -webkit-appearance: none;\n  appearance: none;\n  border: 0;\n  background: none;\n  font-size: inherit;\n  line-height: inherit;\n  text-decoration: none;\n  min-block-size: 2.75rem;\n  padding: 0.375rem 0.5rem;\n  margin: 0.125rem 0.5rem;\n  border-radius: var(--tui-radius-m);\n  text-align: start;\n}\n.t-anchor:hover {\n  background: var(--tui-background-base-alt);\n  cursor: pointer;\n}\n/*# sourceMappingURL=edit-link.style.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TuiEditLink, { className: "TuiEditLink", filePath: "projects/editor/components/edit-link/edit-link.component.ts", lineNumber: 66 });
})();

// projects/editor/extensions/image-editor/image-align-list.ts
var _TuiImageAlignList = class _TuiImageAlignList {
  constructor() {
    this.options = inject(TUI_EDITOR_OPTIONS);
    this.style = input(null);
    this.updateAlignStyles = output();
    this.isAlignCenter = computed((style = this.style()) => style?.replaceAll(/\s/g, "").includes("justify-content:center") ?? false);
    this.isAlignJustify = computed((style = this.style()) => style === null || style === void 0 || style === "");
    this.isAlignLeft = computed((style = this.style()) => style?.replaceAll(/\s/g, "").includes("float:left") ?? false);
    this.isAlignRight = computed((style = this.style()) => style?.replaceAll(/\s/g, "").includes("float:right") ?? false);
  }
  alignLeft() {
    this.updateAlignStyles.emit("float: left");
  }
  alignCenter() {
    this.updateAlignStyles.emit("display: flex; justify-content: center; margin-left: auto; margin-right: auto;");
  }
  alignJustify() {
    this.updateAlignStyles.emit(null);
  }
  alignRight() {
    this.updateAlignStyles.emit("float: right");
  }
};
_TuiImageAlignList.\u0275fac = function TuiImageAlignList_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiImageAlignList)();
};
_TuiImageAlignList.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TuiImageAlignList, selectors: [["tui-image-align-list"]], inputs: { style: [1, "style"] }, outputs: { updateAlignStyles: "updateAlignStyles" }, decls: 8, vars: 8, consts: [["aria-label", "Justify align", "size", "xs", "title", "", "tuiIconButton", "", "type", "button", 3, "click.capture", "appearance", "iconStart"], ["aria-label", "Align left", "size", "xs", "tuiIconButton", "", "type", "button", 3, "click.capture", "appearance", "iconStart"], ["aria-label", "Align center", "size", "xs", "tuiIconButton", "", "type", "button", 3, "click.capture", "appearance", "iconStart"], ["aria-label", "Align right", "size", "xs", "tuiIconButton", "", "type", "button", 3, "click.capture", "appearance", "iconStart"]], template: function TuiImageAlignList_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click.capture", function TuiImageAlignList_Template_button_click_capture_0_listener() {
      return ctx.alignJustify();
    });
    \u0275\u0275text(1, " Justify align ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 1);
    \u0275\u0275listener("click.capture", function TuiImageAlignList_Template_button_click_capture_2_listener() {
      return ctx.alignLeft();
    });
    \u0275\u0275text(3, " Left align ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 2);
    \u0275\u0275listener("click.capture", function TuiImageAlignList_Template_button_click_capture_4_listener() {
      return ctx.alignCenter();
    });
    \u0275\u0275text(5, " Center align ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 3);
    \u0275\u0275listener("click.capture", function TuiImageAlignList_Template_button_click_capture_6_listener() {
      return ctx.alignRight();
    });
    \u0275\u0275text(7, " Right align ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("appearance", ctx.isAlignJustify() ? "outline" : "flat")("iconStart", ctx.options.icons.imageExtension.alignJustify);
    \u0275\u0275advance(2);
    \u0275\u0275property("appearance", ctx.isAlignLeft() ? "outline" : "flat")("iconStart", ctx.options.icons.imageExtension.alignLeft);
    \u0275\u0275advance(2);
    \u0275\u0275property("appearance", ctx.isAlignCenter() ? "outline" : "flat")("iconStart", ctx.options.icons.imageExtension.alignCenter);
    \u0275\u0275advance(2);
    \u0275\u0275property("appearance", ctx.isAlignRight() ? "outline" : "flat")("iconStart", ctx.options.icons.imageExtension.alignRight);
  }
}, dependencies: [TuiButton], encapsulation: 2, changeDetection: 0 });
var TuiImageAlignList = _TuiImageAlignList;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiImageAlignList, [{
    type: Component,
    args: [{
      selector: "tui-image-align-list",
      imports: [TuiButton],
      template: `
        <button
            aria-label="Justify align"
            size="xs"
            title=""
            tuiIconButton
            type="button"
            [appearance]="isAlignJustify() ? 'outline' : 'flat'"
            [iconStart]="options.icons.imageExtension.alignJustify"
            (click.capture)="alignJustify()"
        >
            Justify align
        </button>
        <button
            aria-label="Align left"
            size="xs"
            tuiIconButton
            type="button"
            [appearance]="isAlignLeft() ? 'outline' : 'flat'"
            [iconStart]="options.icons.imageExtension.alignLeft"
            (click.capture)="alignLeft()"
        >
            Left align
        </button>
        <button
            aria-label="Align center"
            size="xs"
            tuiIconButton
            type="button"
            [appearance]="isAlignCenter() ? 'outline' : 'flat'"
            [iconStart]="options.icons.imageExtension.alignCenter"
            (click.capture)="alignCenter()"
        >
            Center align
        </button>
        <button
            aria-label="Align right"
            size="xs"
            tuiIconButton
            type="button"
            [appearance]="isAlignRight() ? 'outline' : 'flat'"
            [iconStart]="options.icons.imageExtension.alignRight"
            (click.capture)="alignRight()"
        >
            Right align
        </button>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TuiImageAlignList, { className: "TuiImageAlignList", filePath: "projects/editor/extensions/image-editor/image-align-list.ts", lineNumber: 64 });
})();

// projects/editor/extensions/image-editor/image-editor.options.ts
var TUI_IMAGE_EDITOR_OPTIONS = new InjectionToken(ngDevMode ? "TUI_IMAGE_EDITOR_OPTIONS" : "", {
  factory: () => ({
    minWidth: null,
    maxWidth: Infinity
  })
});

// projects/editor/extensions/image-editor/image-editor.ts
var _c02 = ["img"];
var _c12 = ["resizable"];
function TuiImageEditor_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tui-edit-link", 8);
    \u0275\u0275listener("addLink", function TuiImageEditor_ng_template_5_Template_tui_edit_link_addLink_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setLink($event));
    })("removeLink", function TuiImageEditor_ng_template_5_Template_tui_edit_link_removeLink_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setLink(null));
    })("tuiActiveZoneChange", function TuiImageEditor_ng_template_5_Template_tui_edit_link_tuiActiveZoneChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEditLinkActiveZoneChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("explicitOnlyLinkEdit", true)("link", ctx_r2.attrs["data-href"]);
  }
}
function TuiImageEditor_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function TuiImageEditor_Conditional_7_Conditional_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editLink($event));
    });
    \u0275\u0275text(1, " Image link ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.isLinkDropdownOpened)("iconStart", ctx_r2.options.icons.imageExtension.link);
  }
}
function TuiImageEditor_Conditional_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tui-image-align-list", 13);
    \u0275\u0275listener("updateAlignStyles", function TuiImageEditor_Conditional_7_ng_template_4_Template_tui_image_align_list_updateAlignStyles_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.align($event);
      return \u0275\u0275resetView(ctx_r2.isAlignDropdownOpened = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(ctx_r2.style);
  }
}
function TuiImageEditor_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275twoWayListener("tuiDropdownOpenChange", function TuiImageEditor_Conditional_7_Template_div_tuiDropdownOpenChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.isAlignDropdownOpened, $event) || (ctx_r2.isAlignDropdownOpened = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "button", 10);
    \u0275\u0275listener("click", function TuiImageEditor_Conditional_7_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleAlignDropdown($event));
    });
    \u0275\u0275text(2, " Image align ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TuiImageEditor_Conditional_7_Conditional_3_Template, 2, 2, "button", 11)(4, TuiImageEditor_Conditional_7_ng_template_4_Template, 1, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const list_r7 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("_open", ctx_r2.isAlignDropdownOpened);
    \u0275\u0275property("tuiDropdown", list_r7)("tuiDropdownEnabled", ctx_r2.editor.isEditable)("tuiDropdownMinHeight", 0);
    \u0275\u0275twoWayProperty("tuiDropdownOpen", ctx_r2.isAlignDropdownOpened);
    \u0275\u0275advance();
    \u0275\u0275property("iconStart", ctx_r2.options.icons.imageExtension.settings);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.supportLinkExtension ? 3 : -1);
  }
}
function TuiImageEditor_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const href_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", href_r9, " ");
  }
}
function TuiImageEditor_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tui-icon", 17);
    \u0275\u0275listener("click", function TuiImageEditor_Conditional_8_Conditional_2_Template_tui_icon_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.editLink($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", ctx_r2.options.icons.imageExtension.previewEditLink);
  }
}
function TuiImageEditor_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function TuiImageEditor_Conditional_8_Template_button_click_0_listener() {
      const href_r9 = \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openLink(href_r9));
    });
    \u0275\u0275template(1, TuiImageEditor_Conditional_8_Conditional_1_Template, 2, 1, "div", 15)(2, TuiImageEditor_Conditional_8_Conditional_2_Template, 1, 1, "tui-icon", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.isLinkDropdownOpened)("iconStart", ctx_r2.options.icons.imageExtension.previewLink);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.containerWidth >= 170 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.containerWidth >= 170 ? 2 : -1);
  }
}
var _TuiImageEditor = class _TuiImageEditor extends AbstractTuiEditorResizable {
  constructor() {
    super(...arguments);
    this.img = viewChild("img", { read: ElementRef });
    this.resizable = viewChild.required("resizable");
    this.destroy$ = inject(DestroyRef);
    this.el = inject(ElementRef);
    this.win = inject(WA_WINDOW);
    this.style = null;
    this.contenteditable = false;
    this.isAlignDropdownOpened = false;
    this.options = inject(TUI_EDITOR_OPTIONS);
    this.imageOptions = inject(TUI_IMAGE_EDITOR_OPTIONS);
    this.changeDetector = inject(ChangeDetectorRef);
  }
  get height() {
    return null;
  }
  get minWidth() {
    return this.imageOptions.minWidth ?? 0;
  }
  get maxWidth() {
    return this.imageOptions.maxWidth ?? 0;
  }
  ngOnInit() {
    this.style = this.attrs.style;
  }
  onImageLoad() {
    if (this.minWidth > 0 || this.maxWidth > 0 && this.maxWidth !== Infinity) {
      this.setInitialSize();
    }
  }
  updateSize([width]) {
    this.currentWidth = Math.max(this.minWidth, Math.min(this.maxWidth, width));
    this.attrs.width = this.currentWidth;
    this.notifyUpdate();
  }
  openLink(url) {
    this.win.open(url, "_blank");
  }
  onEditLinkActiveZoneChange(isActive) {
    if (this.isLinkDropdownOpened && !isActive) {
      this.isLinkDropdownOpened = false;
    }
  }
  setLink(url) {
    this.attrs["data-href"] = url;
    this.isLinkDropdownOpened = false;
    this.setNodeSelection();
  }
  get dragHandle() {
    return this.attrs.draggable ?? null;
  }
  get isLinkDropdownOpened() {
    return this.attrs["data-editing-href"] ?? false;
  }
  set isLinkDropdownOpened(isOpened) {
    this.attrs["data-editing-href"] = isOpened ? true : null;
  }
  get alt() {
    return this.attrs.alt ?? "";
  }
  get title() {
    return this.attrs.title ?? "";
  }
  get containerWidth() {
    const naturalWidth = this.attrs.width ?? this.img()?.nativeElement.naturalWidth ?? this.resizable().width() ?? 0;
    return Number.parseInt(naturalWidth, 10);
  }
  get supportLinkExtension() {
    return Boolean(this.editor.commands.toggleLink);
  }
  toggleAlignDropdown(event) {
    event.stopImmediatePropagation();
    this.isAlignDropdownOpened = !this.isAlignDropdownOpened;
  }
  align(styles) {
    this.style = styles;
    this.attrs.style = styles;
    this.notifyUpdate();
  }
  editLink(event) {
    event.stopImmediatePropagation();
    if (this.isLinkDropdownOpened) {
      return;
    }
    this.isLinkDropdownOpened = true;
    timer(0).pipe(takeUntilDestroyed(this.destroy$)).subscribe(() => this.setNodeSelection());
  }
  setInitialSize() {
    const containerWidth = this.containerWidth;
    if (containerWidth < this.minWidth || containerWidth > this.maxWidth) {
      this.updateSize([containerWidth]);
    }
  }
  notifyUpdate() {
    this.el.nativeElement.dispatchEvent(new CustomEvent(TUI_EDITOR_RESIZE_EVENT, { bubbles: true }));
  }
  setNodeSelection() {
    const pos = this.getPos();
    if (pos !== void 0) {
      this.editor.commands.setNodeSelection(pos);
    }
  }
};
_TuiImageEditor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiImageEditor_BaseFactory;
  return function TuiImageEditor_Factory(__ngFactoryType__) {
    return (\u0275TuiImageEditor_BaseFactory || (\u0275TuiImageEditor_BaseFactory = \u0275\u0275getInheritedFactory(_TuiImageEditor)))(__ngFactoryType__ || _TuiImageEditor);
  };
})();
_TuiImageEditor.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TuiImageEditor, selectors: [["tui-image-editor"]], viewQuery: function TuiImageEditor_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.img, _c02, 5, ElementRef);
    \u0275\u0275viewQuerySignal(ctx.resizable, _c12, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance(2);
  }
}, hostVars: 5, hostBindings: function TuiImageEditor_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275attribute("contenteditable", ctx.contenteditable)("data-drag-handle", ctx.dragHandle)("data-editing-href", ctx.isLinkDropdownOpened);
    \u0275\u0275styleMap(ctx.style);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 18, consts: [["resizable", ""], ["img", ""], ["linkEditingDropdown", ""], ["list", ""], [3, "sizeChange", "autoHeight", "isEditable", "width"], ["contenteditable", "false", "decoding", "async", "loading", "lazy", "tuiDropdownAlign", "end", "tuiDropdownDirection", "bottom", "tuiDropdownLimitWidth", "auto", 3, "load", "alt", "src", "title", "tuiDropdown", "tuiDropdownManual", "tuiDropdownMinHeight"], ["tuiDropdownAlign", "end", "tuiDropdownAppearance", "editor-image-options", "tuiDropdownDirection", "bottom", "tuiDropdownLimitWidth", "auto", 1, "t-image-buttons", 3, "_open", "tuiDropdown", "tuiDropdownEnabled", "tuiDropdownMinHeight", "tuiDropdownOpen"], ["appearance", "reference", "size", "s", "tuiButton", "", "type", "button", 3, "disabled", "iconStart"], [3, "addLink", "removeLink", "tuiActiveZoneChange", "explicitOnlyLinkEdit", "link"], ["tuiDropdownAlign", "end", "tuiDropdownAppearance", "editor-image-options", "tuiDropdownDirection", "bottom", "tuiDropdownLimitWidth", "auto", 1, "t-image-buttons", 3, "tuiDropdownOpenChange", "tuiDropdown", "tuiDropdownEnabled", "tuiDropdownMinHeight", "tuiDropdownOpen"], ["appearance", "flat", "size", "xs", "tuiIconButton", "", "type", "button", 3, "click", "iconStart"], ["appearance", "flat", "size", "xs", "tuiIconButton", "", "type", "button", 3, "disabled", "iconStart"], ["appearance", "flat", "size", "xs", "tuiIconButton", "", "type", "button", 3, "click", "disabled", "iconStart"], [3, "updateAlignStyles"], ["appearance", "reference", "size", "s", "tuiButton", "", "type", "button", 3, "click", "disabled", "iconStart"], [1, "t-link-href"], [1, "t-link-preview-edit", 3, "icon"], [1, "t-link-preview-edit", 3, "click", "icon"]], template: function TuiImageEditor_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tui-editor-resizable", 4, 0);
    \u0275\u0275listener("sizeChange", function TuiImageEditor_Template_tui_editor_resizable_sizeChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateSize($event));
    });
    \u0275\u0275elementStart(2, "img", 5, 1);
    \u0275\u0275pipe(4, "tuiTrustResourceUrl");
    \u0275\u0275listener("load", function TuiImageEditor_Template_img_load_2_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onImageLoad());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, TuiImageEditor_ng_template_5_Template, 1, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(7, TuiImageEditor_Conditional_7_Template, 6, 8, "div", 6)(8, TuiImageEditor_Conditional_8_Template, 3, 4, "button", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    const linkEditingDropdown_r11 = \u0275\u0275reference(6);
    \u0275\u0275property("autoHeight", true)("isEditable", ctx.editor.isEditable)("width", ctx.width);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("max-width", ctx.maxWidth, "px")("min-width", ctx.minWidth, "px");
    \u0275\u0275property("alt", ctx.alt)("src", \u0275\u0275pipeBind1(4, 16, ctx.attrs.src), \u0275\u0275sanitizeUrl)("title", ctx.title)("tuiDropdown", linkEditingDropdown_r11)("tuiDropdownManual", ctx.isLinkDropdownOpened)("tuiDropdownMinHeight", 0);
    \u0275\u0275attribute("width", ctx.width);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.editor.isEditable ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx.attrs["data-href"]) ? 8 : -1, tmp_16_0);
  }
}, dependencies: [
  TuiActiveZone,
  TuiButton,
  TuiDropdownOptionsDirective,
  TuiDropdownDirective,
  TuiDropdownOpen,
  TuiDropdownManual,
  TuiEditLink,
  TuiEditorResizable,
  TuiIcon,
  TuiImageAlignList,
  TuiTrustResourceUrlPipe
], styles: ["/* projects/editor/extensions/image-editor/image-editor.less */\ntui-image-editor[data-drag-handle] {\n  cursor: move;\n}\ntui-image-editor,\ntui-image-editor img,\ntui-image-editor tui-editor-resizable {\n  display: flex;\n}\n.ProseMirror-focused tui-image-editor.ProseMirror-selectednode img {\n  outline: 0.125rem solid var(--tui-background-accent-1-hover);\n}\ntui-image-editor img {\n  pointer-events: none;\n}\ntui-image-editor .t-image-buttons {\n  position: absolute;\n  z-index: 1;\n  display: flex;\n  inset-block-end: 0;\n  inset-inline-start: 50%;\n  transform: translateX(-50%) translateY(100%);\n  background: var(--tui-background-base);\n  border-radius: var(--tui-radius-m);\n  color: var(--tui-text-primary);\n  padding: 0.25rem;\n  gap: 0.25rem;\n}\ntui-image-editor .t-image-buttons [tuiIconButton] {\n  color: inherit;\n}\ntui-image-editor .t-image-buttons:not(._open) {\n  transition-property: opacity;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  opacity: 0;\n}\ntui-image-editor:hover .t-image-buttons {\n  opacity: 1;\n}\ntui-image-editor [tuiButton][data-appearance=reference] {\n  --t-padding: 0 0.375rem;\n  position: absolute;\n  inset-inline-start: 0.25rem;\n  inset-block-end: 0.25rem;\n  max-inline-size: calc(100% - 4rem);\n  color: #fff;\n  background-color: var(--tui-background-overlay-glass, rgba(0, 0, 0, 0.48));\n}\ntui-image-editor .t-link-href {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\ntui-image-align-list {\n  display: flex;\n  gap: 0.25rem;\n  padding: 0.25rem;\n}\n.t-image-buttons,\ntui-image-align-list {\n  box-shadow: var(--tui-shadow-small, 0 0.3125rem 1.25rem 0 rgba(0, 0, 0, 0.1));\n}\ntui-image-editor [tuiIconButton][tuiAppearance],\ntui-image-align-list [tuiIconButton][tuiAppearance] {\n  color: inherit;\n}\ntui-dropdown[data-appearance=editor-image-options] {\n  background: var(--tui-background-base);\n  border: none;\n}\n.t-link-preview-edit {\n  inline-size: 1.5rem;\n  block-size: 1.5rem;\n  border-width: 0.25rem;\n  border-radius: var(--tui-radius-m);\n}\n.t-link-preview-edit:hover {\n  background: var(--tui-background-overlay-glass-hover, rgba(0, 0, 0, 0.4));\n}\n/*# sourceMappingURL=image-editor.css.map */\n"], encapsulation: 2, changeDetection: 0 });
var TuiImageEditor = _TuiImageEditor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiImageEditor, [{
    type: Component,
    args: [{ selector: "tui-image-editor", imports: [
      TuiActiveZone,
      TuiButton,
      TuiDropdown,
      TuiEditLink,
      TuiEditorResizable,
      TuiIcon,
      TuiImageAlignList,
      TuiTrustResourceUrlPipe
    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "[attr.contenteditable]": "contenteditable",
      "[attr.data-drag-handle]": "dragHandle",
      "[attr.data-editing-href]": "isLinkDropdownOpened",
      "[style]": "style"
    }, template: `<tui-editor-resizable
    #resizable
    [autoHeight]="true"
    [isEditable]="editor.isEditable"
    [width]="width"
    (sizeChange)="updateSize($event)"
>
    <img
        #img
        contenteditable="false"
        decoding="async"
        loading="lazy"
        tuiDropdownAlign="end"
        tuiDropdownDirection="bottom"
        tuiDropdownLimitWidth="auto"
        [alt]="alt"
        [attr.width]="width"
        [src]="attrs.src | tuiTrustResourceUrl"
        [style.max-width.px]="maxWidth"
        [style.min-width.px]="minWidth"
        [title]="title"
        [tuiDropdown]="linkEditingDropdown"
        [tuiDropdownManual]="isLinkDropdownOpened"
        [tuiDropdownMinHeight]="0"
        (load)="onImageLoad()"
    />

    <ng-template #linkEditingDropdown>
        <tui-edit-link
            [explicitOnlyLinkEdit]="true"
            [link]="attrs['data-href']"
            (addLink)="setLink($event)"
            (removeLink)="setLink(null)"
            (tuiActiveZoneChange)="onEditLinkActiveZoneChange($event)"
        />
    </ng-template>

    @if (editor.isEditable) {
        <div
            tuiDropdownAlign="end"
            tuiDropdownAppearance="editor-image-options"
            tuiDropdownDirection="bottom"
            tuiDropdownLimitWidth="auto"
            class="t-image-buttons"
            [class._open]="isAlignDropdownOpened"
            [tuiDropdown]="list"
            [tuiDropdownEnabled]="editor.isEditable"
            [tuiDropdownMinHeight]="0"
            [(tuiDropdownOpen)]="isAlignDropdownOpened"
        >
            <button
                appearance="flat"
                size="xs"
                tuiIconButton
                type="button"
                [iconStart]="options.icons.imageExtension.settings"
                (click)="toggleAlignDropdown($event)"
            >
                Image align
            </button>

            @if (supportLinkExtension) {
                <button
                    appearance="flat"
                    size="xs"
                    tuiIconButton
                    type="button"
                    [disabled]="isLinkDropdownOpened"
                    [iconStart]="options.icons.imageExtension.link"
                    (click)="editLink($event)"
                >
                    Image link
                </button>
            }

            <ng-template #list>
                <tui-image-align-list
                    [style]="style"
                    (updateAlignStyles)="align($event); isAlignDropdownOpened = false"
                />
            </ng-template>
        </div>
    }

    @if (attrs['data-href']; as href) {
        <button
            appearance="reference"
            size="s"
            tuiButton
            type="button"
            [disabled]="isLinkDropdownOpened"
            [iconStart]="options.icons.imageExtension.previewLink"
            (click)="openLink(href)"
        >
            @if (containerWidth >= 170) {
                <div class="t-link-href">
                    {{ href }}
                </div>
            }

            @if (containerWidth >= 170) {
                <tui-icon
                    class="t-link-preview-edit"
                    [icon]="options.icons.imageExtension.previewEditLink"
                    (click)="$event.stopPropagation(); editLink($event)"
                />
            }
        </button>
    }
</tui-editor-resizable>
`, styles: ["/* projects/editor/extensions/image-editor/image-editor.less */\ntui-image-editor[data-drag-handle] {\n  cursor: move;\n}\ntui-image-editor,\ntui-image-editor img,\ntui-image-editor tui-editor-resizable {\n  display: flex;\n}\n.ProseMirror-focused tui-image-editor.ProseMirror-selectednode img {\n  outline: 0.125rem solid var(--tui-background-accent-1-hover);\n}\ntui-image-editor img {\n  pointer-events: none;\n}\ntui-image-editor .t-image-buttons {\n  position: absolute;\n  z-index: 1;\n  display: flex;\n  inset-block-end: 0;\n  inset-inline-start: 50%;\n  transform: translateX(-50%) translateY(100%);\n  background: var(--tui-background-base);\n  border-radius: var(--tui-radius-m);\n  color: var(--tui-text-primary);\n  padding: 0.25rem;\n  gap: 0.25rem;\n}\ntui-image-editor .t-image-buttons [tuiIconButton] {\n  color: inherit;\n}\ntui-image-editor .t-image-buttons:not(._open) {\n  transition-property: opacity;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  opacity: 0;\n}\ntui-image-editor:hover .t-image-buttons {\n  opacity: 1;\n}\ntui-image-editor [tuiButton][data-appearance=reference] {\n  --t-padding: 0 0.375rem;\n  position: absolute;\n  inset-inline-start: 0.25rem;\n  inset-block-end: 0.25rem;\n  max-inline-size: calc(100% - 4rem);\n  color: #fff;\n  background-color: var(--tui-background-overlay-glass, rgba(0, 0, 0, 0.48));\n}\ntui-image-editor .t-link-href {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\ntui-image-align-list {\n  display: flex;\n  gap: 0.25rem;\n  padding: 0.25rem;\n}\n.t-image-buttons,\ntui-image-align-list {\n  box-shadow: var(--tui-shadow-small, 0 0.3125rem 1.25rem 0 rgba(0, 0, 0, 0.1));\n}\ntui-image-editor [tuiIconButton][tuiAppearance],\ntui-image-align-list [tuiIconButton][tuiAppearance] {\n  color: inherit;\n}\ntui-dropdown[data-appearance=editor-image-options] {\n  background: var(--tui-background-base);\n  border: none;\n}\n.t-link-preview-edit {\n  inline-size: 1.5rem;\n  block-size: 1.5rem;\n  border-width: 0.25rem;\n  border-radius: var(--tui-radius-m);\n}\n.t-link-preview-edit:hover {\n  background: var(--tui-background-overlay-glass-hover, rgba(0, 0, 0, 0.4));\n}\n/*# sourceMappingURL=image-editor.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TuiImageEditor, { className: "TuiImageEditor", filePath: "projects/editor/extensions/image-editor/image-editor.ts", lineNumber: 55 });
})();

// node_modules/@tiptap/extension-image/dist/index.js
var inputRegex = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/;
var Image = Node3.create({
  name: "image",
  addOptions() {
    return {
      inline: false,
      allowBase64: false,
      HTMLAttributes: {},
      resize: false
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: true,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      },
      width: {
        default: null
      },
      height: {
        default: null
      }
    };
  },
  parseHTML() {
    return [{
      tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["img", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)];
  },
  parseMarkdown: (token, helpers) => {
    return helpers.createNode("image", {
      src: token.href,
      title: token.title,
      alt: token.text
    });
  },
  renderMarkdown: (node) => {
    var _a, _b, _c, _d, _e, _f;
    const src = (_b = (_a = node.attrs) == null ? void 0 : _a.src) != null ? _b : "";
    const alt = (_d = (_c = node.attrs) == null ? void 0 : _c.alt) != null ? _d : "";
    const title = (_f = (_e = node.attrs) == null ? void 0 : _e.title) != null ? _f : "";
    return title ? `![${alt}](${src} "${title}")` : `![${alt}](${src})`;
  },
  addNodeView() {
    if (!this.options.resize || !this.options.resize.enabled || typeof document === "undefined") {
      return null;
    }
    const {
      directions,
      minWidth,
      minHeight,
      alwaysPreserveAspectRatio
    } = this.options.resize;
    return ({
      node,
      getPos,
      HTMLAttributes,
      editor
    }) => {
      const el = document.createElement("img");
      Object.entries(HTMLAttributes).forEach(([key, value]) => {
        if (value != null) {
          switch (key) {
            case "width":
            case "height":
              break;
            default:
              el.setAttribute(key, value);
              break;
          }
        }
      });
      el.src = HTMLAttributes.src;
      const nodeView = new ResizableNodeView({
        element: el,
        editor,
        node,
        getPos,
        onResize: (width, height) => {
          el.style.width = `${width}px`;
          el.style.height = `${height}px`;
        },
        onCommit: (width, height) => {
          const pos = getPos();
          if (pos === void 0) {
            return;
          }
          this.editor.chain().setNodeSelection(pos).updateAttributes(this.name, {
            width,
            height
          }).run();
        },
        onUpdate: (updatedNode, _decorations, _innerDecorations) => {
          if (updatedNode.type !== node.type) {
            return false;
          }
          return true;
        },
        options: {
          directions,
          min: {
            width: minWidth,
            height: minHeight
          },
          preserveAspectRatio: alwaysPreserveAspectRatio === true
        }
      });
      const dom = nodeView.dom;
      dom.style.visibility = "hidden";
      dom.style.pointerEvents = "none";
      el.onload = () => {
        dom.style.visibility = "";
        dom.style.pointerEvents = "";
      };
      return nodeView;
    };
  },
  addCommands() {
    return {
      setImage: (options) => ({
        commands
      }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options
        });
      }
    };
  },
  addInputRules() {
    return [nodeInputRule({
      find: inputRegex,
      type: this.type,
      getAttributes: (match) => {
        const [, , alt, src, title] = match;
        return {
          src,
          alt,
          title
        };
      }
    })];
  }
});

// projects/editor/extensions/image-editor/image-editor.extension.ts
function pasteImage(injector) {
  return (view, event) => {
    const dataTransfer = event instanceof DragEvent ? event.dataTransfer : event.clipboardData;
    const imagesFiles = Array.from(dataTransfer?.files ?? []).filter((file) => /image/i.test(file.type));
    if (imagesFiles.length) {
      event.preventDefault();
    }
    const loader = injector.get(TUI_IMAGE_LOADER);
    imagesFiles.forEach((file) => {
      loader(file).pipe(take(1), takeWhile(() => !view.isDestroyed)).subscribe((src) => {
        const node = view.state.schema.nodes.image?.create({ src });
        const transaction = node ? view.state.tr.replaceSelectionWith(node) : null;
        setTimeout(() => {
          if (!view.isDestroyed && transaction) {
            view.dispatch(transaction);
          }
        });
      });
    });
  };
}
function typesafeIsAllowedUri(uri) {
  return uri ? isAllowedUri(uri) !== null : false;
}
function tuiCreateImageEditorExtension({ injector, draggable }) {
  const enableDraggable = tuiIsPresent(draggable) ? draggable : true;
  return Image.extend({
    name: "image",
    priority: 0,
    selectable: true,
    draggable: enableDraggable,
    parseHTML() {
      return [
        {
          tag: "a[href] img",
          // Caretaker note:
          // Tiptap link extension priority is 1000
          // ensuring current extension is being handled in precedence
          priority: 1001,
          getAttrs: (el) => {
            const [href, style] = ["href", "style"].map((attrName) => el.getAttribute(attrName) ?? void 0);
            if (!typesafeIsAllowedUri(href)) {
              return false;
            }
            const [src, width, alt, title] = [
              "src",
              "width",
              "alt",
              "title"
            ].map((attrName) => el.firstElementChild?.getAttribute(attrName) ?? void 0);
            return {
              "data-href": href,
              src: src ?? "",
              style,
              width,
              alt,
              title
            };
          }
        },
        { tag: "img" }
      ];
    },
    addAttributes() {
      return {
        src: {
          default: "",
          keepOnSplit: false
        },
        width: {
          default: null,
          keepOnSplit: false
        },
        alt: {
          default: "",
          keepOnSplit: false
        },
        style: {
          default: "",
          keepOnSplit: false
        },
        title: {
          default: "",
          keepOnSplit: false
        },
        draggable: {
          default: enableDraggable ? "" : null,
          keepOnSplit: false
        },
        "data-href": {
          default: null,
          keepOnSplit: false
        },
        "data-editing-href": {
          default: null,
          keepOnSplit: false
        }
      };
    },
    renderHTML({ HTMLAttributes }) {
      const { src, width, alt, style, title, "data-href": href } = HTMLAttributes;
      return href ? [
        "a",
        mergeAttributes({
          target: "_blank",
          rel: "noopener noreferrer nofollow",
          href: typesafeIsAllowedUri(href) ? href : "",
          style
        }),
        [
          "img",
          mergeAttributes({
            src,
            width,
            alt,
            title
          })
        ]
      ] : ["img", mergeAttributes(HTMLAttributes)];
    },
    addNodeView() {
      return (props) => new TuiNodeView(TuiImageEditor, props, __spreadValues({
        injector
      }, props));
    },
    addCommands() {
      return {
        setEditableImage: (attrs) => ({ commands }) => commands.insertContent({
          type: this.name,
          attrs
        }),
        setImageLink: () => ({ commands }) => commands.updateAttributes(this.name, { "data-editing-href": true })
      };
    },
    addProseMirrorPlugins() {
      return [
        new Plugin({
          props: {
            handleDOMEvents: {
              paste: pasteImage(injector),
              drop: pasteImage(injector)
            }
          }
        })
      ];
    }
  });
}
var setup = tuiCreateImageEditorExtension;

export {
  TuiInputInline,
  tuiIsEmptyParagraph,
  TuiTiptapEditorService,
  TuiTiptapEditor,
  TuiFilterAnchorsPipe,
  TuiShortUrlPipe,
  tuiEditLinkParseUrl,
  TuiEditLink,
  TUI_IMAGE_EDITOR_OPTIONS,
  TuiImageEditor,
  tuiCreateImageEditorExtension,
  setup
};
//# sourceMappingURL=chunk-B6ZSAQRP.js.map
