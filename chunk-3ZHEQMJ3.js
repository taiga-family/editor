import {
  DomSanitizer
} from "./chunk-LZR2XIKZ.js";
import {
  BehaviorSubject,
  DOCUMENT,
  Directive,
  EMPTY,
  ElementRef,
  Injectable,
  InjectionToken,
  NgModule,
  PLATFORM_ID,
  SecurityContext,
  afterRenderEffect,
  booleanAttribute,
  catchError,
  computed,
  filter,
  firstValueFrom,
  forkJoin,
  from,
  inject,
  input,
  isPlatformBrowser,
  makeEnvironmentProviders,
  map,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  throwError,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory
} from "./chunk-F26JVLG2.js";

// node_modules/ngx-highlightjs/fesm2022/ngx-highlightjs.mjs
var HIGHLIGHT_OPTIONS = new InjectionToken("HIGHLIGHT_OPTIONS");
function provideHighlightOptions(options) {
  return makeEnvironmentProviders([{
    provide: HIGHLIGHT_OPTIONS,
    useValue: options
  }]);
}
var LoaderErrors;
(function(LoaderErrors2) {
  LoaderErrors2["FULL_WITH_CORE_LIBRARY_IMPORTS"] = "The full library and the core library were imported, only one of them should be imported!";
  LoaderErrors2["FULL_WITH_LANGUAGE_IMPORTS"] = "The highlighting languages were imported they are not needed!";
  LoaderErrors2["CORE_WITHOUT_LANGUAGE_IMPORTS"] = "The highlighting languages were not imported!";
  LoaderErrors2["LANGUAGE_WITHOUT_CORE_IMPORTS"] = "The core library was not imported!";
  LoaderErrors2["NO_FULL_AND_NO_CORE_IMPORTS"] = "Highlight.js library was not imported!";
})(LoaderErrors || (LoaderErrors = {}));
var _HighlightLoader = class _HighlightLoader {
  constructor() {
    this.document = inject(DOCUMENT);
    this.isPlatformBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this.options = inject(HIGHLIGHT_OPTIONS, {
      optional: true
    });
    this._ready = new BehaviorSubject(null);
    this.ready = firstValueFrom(this._ready.asObservable().pipe(filter((hljs) => !!hljs)));
    if (this.isPlatformBrowser) {
      if (this.document.defaultView["hljs"]) {
        this._ready.next(this.document.defaultView["hljs"]);
      } else {
        this._loadLibrary().pipe(switchMap((hljs) => {
          if (this.options?.lineNumbersLoader) {
            this.document.defaultView["hljs"] = hljs;
            return this.loadLineNumbers().pipe(tap((plugin) => {
              plugin.activateLineNumbers();
              this._ready.next(hljs);
            }));
          } else {
            this._ready.next(hljs);
            return EMPTY;
          }
        }), catchError((e) => {
          console.error("[HLJS] ", e);
          this._ready.error(e);
          return EMPTY;
        })).subscribe();
      }
      if (this.options?.themePath) {
        this.loadTheme(this.options.themePath);
      }
    }
  }
  /**
   * Lazy-Load highlight.js library
   */
  _loadLibrary() {
    if (this.options) {
      if (this.options.fullLibraryLoader && this.options.coreLibraryLoader) {
        return throwError(() => LoaderErrors.FULL_WITH_CORE_LIBRARY_IMPORTS);
      }
      if (this.options.fullLibraryLoader && this.options.languages) {
        return throwError(() => LoaderErrors.FULL_WITH_LANGUAGE_IMPORTS);
      }
      if (this.options.coreLibraryLoader && !this.options.languages) {
        return throwError(() => LoaderErrors.CORE_WITHOUT_LANGUAGE_IMPORTS);
      }
      if (!this.options.coreLibraryLoader && this.options.languages) {
        return throwError(() => LoaderErrors.LANGUAGE_WITHOUT_CORE_IMPORTS);
      }
      if (this.options.fullLibraryLoader) {
        return this.loadFullLibrary();
      }
      if (this.options.coreLibraryLoader && this.options.languages && Object.keys(this.options.languages).length) {
        return this.loadCoreLibrary().pipe(switchMap((hljs) => this._loadLanguages(hljs)));
      }
    }
    return throwError(() => LoaderErrors.NO_FULL_AND_NO_CORE_IMPORTS);
  }
  /**
   * Lazy-load highlight.js languages
   */
  _loadLanguages(hljs) {
    const languages = Object.entries(this.options.languages).map(([langName, langLoader]) => importModule(langLoader()).pipe(tap((langFunc) => hljs.registerLanguage(langName, langFunc))));
    return forkJoin(languages).pipe(map(() => hljs));
  }
  /**
   * Import highlight.js core library
   */
  loadCoreLibrary() {
    return importModule(this.options.coreLibraryLoader());
  }
  /**
   * Import highlight.js library with all languages
   */
  loadFullLibrary() {
    return importModule(this.options.fullLibraryLoader());
  }
  /**
   * Import line numbers library
   */
  loadLineNumbers() {
    return from(this.options.lineNumbersLoader());
  }
  /**
   * Reload theme styles
   */
  setTheme(path) {
    if (this.isPlatformBrowser) {
      if (this._themeLinkElement) {
        this._themeLinkElement.href = path;
      } else {
        this.loadTheme(path);
      }
    }
  }
  /**
   * Load theme
   */
  loadTheme(path) {
    this._themeLinkElement = this.document.createElement("link");
    this._themeLinkElement.href = path;
    this._themeLinkElement.type = "text/css";
    this._themeLinkElement.rel = "stylesheet";
    this._themeLinkElement.media = "screen,print";
    this.document.head.appendChild(this._themeLinkElement);
  }
};
_HighlightLoader.\u0275fac = function HighlightLoader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HighlightLoader)();
};
_HighlightLoader.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _HighlightLoader,
  factory: _HighlightLoader.\u0275fac,
  providedIn: "root"
});
var HighlightLoader = _HighlightLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var importModule = (moduleLoader) => {
  return from(moduleLoader).pipe(filter((module) => !!module?.default), map((module) => module.default));
};
var _HighlightJS = class _HighlightJS {
  constructor() {
    this.loader = inject(HighlightLoader);
    this.options = inject(HIGHLIGHT_OPTIONS, {
      optional: true
    });
    this.hljsSignal = signal(null);
    this.hljs = computed(() => this.hljsSignal());
    this.loader.ready.then((hljs) => {
      this.hljsSignal.set(hljs);
      if (this.options?.highlightOptions) {
        hljs.configure(this.options.highlightOptions);
      }
    });
  }
  /**
   * Core highlighting function. Accepts the code to highlight (string) and a list of options (object)
   */
  async highlight(code, options) {
    const hljs = await this.loader.ready;
    return hljs.highlight(code, options);
  }
  /**
   * Highlighting with language detection.
   */
  async highlightAuto(value, languageSubset) {
    const hljs = await this.loader.ready;
    return hljs.highlightAuto(value, languageSubset);
  }
  /**
   * Applies highlighting to a DOM node containing code.
   * This function is the one to use to apply highlighting dynamically after page load or within initialization code of third-party JavaScript frameworks.
   * The function uses language detection by default but you can specify the language in the class attribute of the DOM node. See the scopes reference for all available language names and scopes.
   */
  async highlightElement(element) {
    const hljs = await this.loader.ready;
    hljs.highlightElement(element);
  }
  /**
   * Applies highlighting to all elements on a page matching the configured cssSelector. The default cssSelector value is 'pre code',
   * which highlights all code blocks. This can be called before or after the page’s onload event has fired.
   */
  async highlightAll() {
    const hljs = await this.loader.ready;
    hljs.highlightAll();
  }
  /**
   * @deprecated in version 12
   * Configures global options:
   */
  async configure(config) {
    const hljs = await this.loader.ready;
    hljs.configure(config);
  }
  /**
   * Adds new language to the library under the specified name. Used mostly internally.
   * The function is passed the hljs object to be able to use common regular expressions defined within it.
   */
  async registerLanguage(languageName, languageDefinition) {
    const hljs = await this.loader.ready;
    hljs.registerLanguage(languageName, languageDefinition);
  }
  /**
   * Removes a language and its aliases from the library. Used mostly internally
   */
  async unregisterLanguage(languageName) {
    const hljs = await this.loader.ready;
    hljs.unregisterLanguage(languageName);
  }
  /**
   * Adds new language alias or aliases to the library for the specified language name defined under languageName key.
   */
  async registerAliases(alias, {
    languageName
  }) {
    const hljs = await this.loader.ready;
    hljs.registerAliases(alias, {
      languageName
    });
  }
  /**
   * @return The languages names list.
   */
  async listLanguages() {
    const hljs = await this.loader.ready;
    return hljs.listLanguages();
  }
  /**
   * Looks up a language by name or alias.
   */
  async getLanguage(name) {
    const hljs = await this.loader.ready;
    return hljs.getLanguage(name);
  }
  /**
   * Enables safe mode. This is the default mode, providing the most reliable experience for production usage.
   */
  async safeMode() {
    const hljs = await this.loader.ready;
    hljs.safeMode();
  }
  /**
   * Enables debug/development mode.
   */
  async debugMode() {
    const hljs = await this.loader.ready;
    hljs.debugMode();
  }
  /**
   * Display line numbers
   */
  async lineNumbersBlock(el, options) {
    const hljs = await this.loader.ready;
    if (hljs.lineNumbersBlock) {
      hljs.lineNumbersBlock(el, options);
    }
  }
};
_HighlightJS.\u0275fac = function HighlightJS_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HighlightJS)();
};
_HighlightJS.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _HighlightJS,
  factory: _HighlightJS.\u0275fac,
  providedIn: "root"
});
var HighlightJS = _HighlightJS;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightJS, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var policy;
function getPolicy() {
  if (!policy) {
    try {
      policy = window?.trustedTypes?.createPolicy("ngx-highlightjs", {
        createHTML: (s) => s
      });
    } catch {
    }
  }
  return policy;
}
function trustedHTMLFromStringBypass(html) {
  return getPolicy()?.createHTML(html) || html;
}
var _HighlightBase = class _HighlightBase {
  constructor() {
    this._hljs = inject(HighlightJS);
    this._nativeElement = inject(ElementRef).nativeElement;
    this._sanitizer = inject(DomSanitizer);
    afterRenderEffect({
      write: () => {
        const code = this.code();
        this.setTextContent(code || "");
        if (code) {
          this.highlightElement(code);
        }
      }
    });
    afterRenderEffect({
      write: () => {
        const res = this.highlightResult();
        this.setInnerHTML(res?.value);
        this.highlighted.emit(res);
      }
    });
  }
  setTextContent(content) {
    requestAnimationFrame(() => this._nativeElement.textContent = content);
  }
  setInnerHTML(content) {
    requestAnimationFrame(() => this._nativeElement.innerHTML = trustedHTMLFromStringBypass(this._sanitizer.sanitize(SecurityContext.HTML, content) || ""));
  }
};
_HighlightBase.\u0275fac = function HighlightBase_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HighlightBase)();
};
_HighlightBase.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _HighlightBase
});
var HighlightBase = _HighlightBase;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightBase, [{
    type: Directive
  }], () => [], null);
})();
var _Highlight = class _Highlight extends HighlightBase {
  constructor() {
    super(...arguments);
    this.code = input(null, {
      alias: "highlight"
    });
    this.highlightResult = signal(null);
    this.language = input.required();
    this.ignoreIllegals = input(void 0, {
      transform: booleanAttribute
    });
    this.highlighted = output();
  }
  async highlightElement(code) {
    const res = await this._hljs.highlight(code, {
      language: this.language(),
      ignoreIllegals: this.ignoreIllegals()
    });
    this.highlightResult.set(res);
  }
};
_Highlight.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275Highlight_BaseFactory;
  return function Highlight_Factory(__ngFactoryType__) {
    return (\u0275Highlight_BaseFactory || (\u0275Highlight_BaseFactory = \u0275\u0275getInheritedFactory(_Highlight)))(__ngFactoryType__ || _Highlight);
  };
})();
_Highlight.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _Highlight,
  selectors: [["", "highlight", ""]],
  hostVars: 2,
  hostBindings: function Highlight_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("hljs", true);
    }
  },
  inputs: {
    code: [1, "highlight", "code"],
    language: [1, "language"],
    ignoreIllegals: [1, "ignoreIllegals"]
  },
  outputs: {
    highlighted: "highlighted"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: HighlightBase,
    useExisting: _Highlight
  }]), \u0275\u0275InheritDefinitionFeature]
});
var Highlight = _Highlight;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Highlight, [{
    type: Directive,
    args: [{
      selector: "[highlight]",
      providers: [{
        provide: HighlightBase,
        useExisting: Highlight
      }],
      host: {
        "[class.hljs]": "true"
      }
    }]
  }], null, null);
})();
var _HighlightAuto = class _HighlightAuto extends HighlightBase {
  constructor() {
    super(...arguments);
    this.code = input(null, {
      alias: "highlightAuto"
    });
    this.highlightResult = signal(null);
    this.languages = input();
    this.highlighted = output();
  }
  async highlightElement(code) {
    const res = await this._hljs.highlightAuto(code, this.languages());
    this.highlightResult.set(res);
  }
};
_HighlightAuto.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275HighlightAuto_BaseFactory;
  return function HighlightAuto_Factory(__ngFactoryType__) {
    return (\u0275HighlightAuto_BaseFactory || (\u0275HighlightAuto_BaseFactory = \u0275\u0275getInheritedFactory(_HighlightAuto)))(__ngFactoryType__ || _HighlightAuto);
  };
})();
_HighlightAuto.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _HighlightAuto,
  selectors: [["", "highlightAuto", ""]],
  hostVars: 2,
  hostBindings: function HighlightAuto_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("hljs", true);
    }
  },
  inputs: {
    code: [1, "highlightAuto", "code"],
    languages: [1, "languages"]
  },
  outputs: {
    highlighted: "highlighted"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: HighlightBase,
    useExisting: _HighlightAuto
  }]), \u0275\u0275InheritDefinitionFeature]
});
var HighlightAuto = _HighlightAuto;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightAuto, [{
    type: Directive,
    args: [{
      selector: "[highlightAuto]",
      providers: [{
        provide: HighlightBase,
        useExisting: HighlightAuto
      }],
      host: {
        "[class.hljs]": "true"
      }
    }]
  }], null, null);
})();
var _HighlightModule = class _HighlightModule {
};
_HighlightModule.\u0275fac = function HighlightModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HighlightModule)();
};
_HighlightModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _HighlightModule,
  imports: [Highlight, HighlightAuto],
  exports: [Highlight, HighlightAuto]
});
_HighlightModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var HighlightModule = _HighlightModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightModule, [{
    type: NgModule,
    args: [{
      imports: [Highlight, HighlightAuto],
      exports: [Highlight, HighlightAuto]
    }]
  }], null, null);
})();

// node_modules/ngx-highlightjs/fesm2022/ngx-highlightjs-line-numbers.mjs
function activateLineNumbers() {
  const w = window;
  const d = document;
  const TABLE_NAME = "hljs-ln", LINE_NAME = "hljs-ln-line", CODE_BLOCK_NAME = "hljs-ln-code", NUMBERS_BLOCK_NAME = "hljs-ln-numbers", NUMBER_LINE_NAME = "hljs-ln-n", DATA_ATTR_NAME = "data-line-number", BREAK_LINE_REGEXP = /\r\n|\r|\n/g;
  if (w.hljs) {
    w.hljs.initLineNumbersOnLoad = initLineNumbersOnLoad;
    w.hljs.lineNumbersBlock = lineNumbersBlock;
    w.hljs.lineNumbersValue = lineNumbersValue;
    addStyles();
  } else {
    w.console.error("highlight.js not detected!");
  }
  function isHljsLnCodeDescendant(domElt) {
    let curElt = domElt;
    while (curElt) {
      if (curElt.className && curElt.className.indexOf("hljs-ln-code") !== -1) {
        return true;
      }
      curElt = curElt.parentNode;
    }
    return false;
  }
  function getHljsLnTable(hljsLnDomElt) {
    let curElt = hljsLnDomElt;
    while (curElt.nodeName !== "TABLE") {
      curElt = curElt.parentNode;
    }
    return curElt;
  }
  function edgeGetSelectedCodeLines(selection) {
    const selectionText = selection.toString();
    let tdAnchor = selection.anchorNode;
    while (tdAnchor.nodeName !== "TD") {
      tdAnchor = tdAnchor.parentNode;
    }
    let tdFocus = selection.focusNode;
    while (tdFocus.nodeName !== "TD") {
      tdFocus = tdFocus.parentNode;
    }
    let firstLineNumber = parseInt(tdAnchor.dataset.lineNumber);
    let lastLineNumber = parseInt(tdFocus.dataset.lineNumber);
    if (firstLineNumber != lastLineNumber) {
      let firstLineText = tdAnchor.textContent;
      let lastLineText = tdFocus.textContent;
      if (firstLineNumber > lastLineNumber) {
        let tmp = firstLineNumber;
        firstLineNumber = lastLineNumber;
        lastLineNumber = tmp;
        tmp = firstLineText;
        firstLineText = lastLineText;
        lastLineText = tmp;
      }
      while (selectionText.indexOf(firstLineText) !== 0) {
        firstLineText = firstLineText.slice(1);
      }
      while (selectionText.lastIndexOf(lastLineText) === -1) {
        lastLineText = lastLineText.slice(0, -1);
      }
      let selectedText = firstLineText;
      const hljsLnTable = getHljsLnTable(tdAnchor);
      for (let i = firstLineNumber + 1; i < lastLineNumber; ++i) {
        const codeLineSel = format('.{0}[{1}="{2}"]', [CODE_BLOCK_NAME, DATA_ATTR_NAME, i]);
        const codeLineElt = hljsLnTable.querySelector(codeLineSel);
        selectedText += "\n" + codeLineElt.textContent;
      }
      selectedText += "\n" + lastLineText;
      return selectedText;
    } else {
      return selectionText;
    }
  }
  document.addEventListener("copy", function(e) {
    const selection = window.getSelection();
    if (isHljsLnCodeDescendant(selection.anchorNode)) {
      let selectionText;
      if (window.navigator.userAgent.indexOf("Edge") !== -1) {
        selectionText = edgeGetSelectedCodeLines(selection);
      } else {
        selectionText = selection.toString();
      }
      e.clipboardData.setData("text/plain", selectionText);
      e.preventDefault();
    }
  });
  function addStyles() {
    const css = d.createElement("style");
    css.type = "text/css";
    css.innerHTML = format(".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}", [TABLE_NAME, NUMBER_LINE_NAME, DATA_ATTR_NAME]);
    d.getElementsByTagName("head")[0].appendChild(css);
  }
  function initLineNumbersOnLoad(options) {
    if (d.readyState === "interactive" || d.readyState === "complete") {
      documentReady(options);
    } else {
      w.addEventListener("DOMContentLoaded", function() {
        documentReady(options);
      });
    }
  }
  function documentReady(options) {
    try {
      const blocks = d.querySelectorAll("code.hljs,code.nohighlight");
      for (const i in blocks) {
        if (blocks.hasOwnProperty(i)) {
          if (!isPluginDisabledForBlock(blocks[i])) {
            lineNumbersBlock(blocks[i], options);
          }
        }
      }
    } catch (e) {
      w.console.error("LineNumbers error: ", e);
    }
  }
  function isPluginDisabledForBlock(element) {
    return element.classList.contains("nohljsln");
  }
  function lineNumbersBlock(element, options) {
    if (typeof element !== "object") {
      return;
    }
    async(function() {
      element.innerHTML = lineNumbersInternal(element, options);
    });
  }
  function lineNumbersValue(value, options) {
    if (typeof value !== "string") {
      return;
    }
    const element = document.createElement("code");
    element.innerHTML = value;
    return lineNumbersInternal(element, options);
  }
  function lineNumbersInternal(element, options) {
    const internalOptions = mapOptions(element, options);
    duplicateMultilineNodes(element);
    return addLineNumbersBlockFor(element.innerHTML, internalOptions);
  }
  function addLineNumbersBlockFor(inputHtml, options) {
    const lines = getLines(inputHtml);
    if (lines[lines.length - 1].trim() === "") {
      lines.pop();
    }
    if (lines.length > 1 || options.singleLine) {
      let html = "";
      for (let i = 0, l = lines.length; i < l; i++) {
        html += format('<tr><td class="{0} {1}" {3}="{5}"><div class="{2}" {3}="{5}"></div></td><td class="{0} {4}" {3}="{5}">{6}</td></tr>', [LINE_NAME, NUMBERS_BLOCK_NAME, NUMBER_LINE_NAME, DATA_ATTR_NAME, CODE_BLOCK_NAME, i + options.startFrom, lines[i].length > 0 ? lines[i] : " "]);
      }
      return format('<table class="{0}">{1}</table>', [TABLE_NAME, html]);
    }
    return inputHtml;
  }
  function mapOptions(element, options) {
    options = options || {};
    return {
      singleLine: getSingleLineOption(options),
      startFrom: getStartFromOption(element, options)
    };
  }
  function getSingleLineOption(options) {
    const defaultValue = false;
    if (options.singleLine) {
      return options.singleLine;
    }
    return defaultValue;
  }
  function getStartFromOption(element, options) {
    const defaultValue = 1;
    let startFrom = defaultValue;
    if (isFinite(options.startFrom)) {
      startFrom = options.startFrom;
    }
    const value = getAttribute(element, "data-ln-start-from");
    if (value !== null) {
      startFrom = toNumber(value, defaultValue);
    }
    return startFrom;
  }
  function duplicateMultilineNodes(element) {
    const nodes = element.childNodes;
    for (const node in nodes) {
      if (nodes.hasOwnProperty(node)) {
        const child = nodes[node];
        if (getLinesCount(child.textContent) > 0) {
          if (child.childNodes.length > 0) {
            duplicateMultilineNodes(child);
          } else {
            duplicateMultilineNode(child.parentNode);
          }
        }
      }
    }
  }
  function duplicateMultilineNode(element) {
    const className = element.className;
    if (!/hljs-/.test(className)) {
      return;
    }
    const lines = getLines(element.innerHTML);
    let result = "";
    for (let i = 0; i < lines.length; i++) {
      const lineText = lines[i].length > 0 ? lines[i] : " ";
      result += format('<span class="{0}">{1}</span>\n', [className, lineText]);
    }
    element.innerHTML = result.trim();
  }
  function getLines(text) {
    if (text.length === 0) {
      return [];
    }
    return text.split(BREAK_LINE_REGEXP);
  }
  function getLinesCount(text) {
    return (text.trim().match(BREAK_LINE_REGEXP) || []).length;
  }
  function async(func) {
    w.setTimeout(func, 0);
  }
  function format(format2, args) {
    return format2.replace(/\{(\d+)\}/g, function(m, n) {
      return args[n] !== void 0 ? args[n] : m;
    });
  }
  function getAttribute(element, attrName) {
    return element.hasAttribute(attrName) ? element.getAttribute(attrName) : null;
  }
  function toNumber(str, fallback) {
    if (!str) {
      return fallback;
    }
    const number = Number(str);
    return isFinite(number) ? number : fallback;
  }
}
var _HighlightLineNumbers = class _HighlightLineNumbers {
  constructor() {
    this.options = inject(HIGHLIGHT_OPTIONS)?.lineNumbersOptions;
    this._hljs = inject(HighlightJS);
    this._highlight = inject(HighlightBase);
    this._nativeElement = inject(ElementRef).nativeElement;
    this.startFrom = input(this.options?.startFrom, {
      transform: numberAttribute
    });
    this.singleLine = input(this.options?.singleLine, {
      transform: booleanAttribute
    });
    afterRenderEffect({
      write: () => {
        if (this._highlight.highlightResult()) {
          this.addLineNumbers();
        }
      }
    });
  }
  addLineNumbers() {
    this.destroyLineNumbersObserver();
    requestAnimationFrame(async () => {
      await this._hljs.lineNumbersBlock(this._nativeElement, {
        startFrom: this.startFrom(),
        singleLine: this.singleLine()
      });
      this._lineNumbersObs = new MutationObserver(() => {
        if (this._nativeElement.firstElementChild?.tagName.toUpperCase() === "TABLE") {
          this._nativeElement.classList.add("hljs-line-numbers");
        }
        this.destroyLineNumbersObserver();
      });
      this._lineNumbersObs.observe(this._nativeElement, {
        childList: true
      });
    });
  }
  destroyLineNumbersObserver() {
    if (this._lineNumbersObs) {
      this._lineNumbersObs.disconnect();
      this._lineNumbersObs = null;
    }
  }
};
_HighlightLineNumbers.\u0275fac = function HighlightLineNumbers_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HighlightLineNumbers)();
};
_HighlightLineNumbers.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _HighlightLineNumbers,
  selectors: [["", "highlight", "", "lineNumbers", ""], ["", "highlightAuto", "", "lineNumbers", ""]],
  inputs: {
    startFrom: [1, "startFrom"],
    singleLine: [1, "singleLine"]
  }
});
var HighlightLineNumbers = _HighlightLineNumbers;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightLineNumbers, [{
    type: Directive,
    args: [{
      selector: "[highlight][lineNumbers], [highlightAuto][lineNumbers]"
    }]
  }], () => [], null);
})();

export {
  provideHighlightOptions,
  HighlightAuto,
  activateLineNumbers,
  HighlightLineNumbers
};
//# sourceMappingURL=chunk-3ZHEQMJ3.js.map
