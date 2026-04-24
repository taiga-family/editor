import {
  TUI_DOC_DEFAULT_TABS,
  TUI_DOC_ICONS,
  TUI_DOC_LOGO,
  TUI_DOC_PAGES,
  TUI_DOC_SOURCE_CODE,
  TUI_DOC_TITLE,
  TuiAddonDoc,
  TuiDocHeader,
  TuiDocMain,
  tuiProvideRoutePageTab
} from "./chunk-GP5GXI3G.js";
import "./chunk-VQYWSL72.js";
import "./chunk-4QQZBGYJ.js";
import {
  provideEventPlugins
} from "./chunk-PRS6ECY2.js";
import "./chunk-WWNKJV6L.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
  provideRouter,
  withInMemoryScrolling
} from "./chunk-2P6XZLUI.js";
import "./chunk-WG3DIIIA.js";
import "./chunk-JHR5K2RS.js";
import "./chunk-L5QVMFBS.js";
import "./chunk-M277MCZ7.js";
import {
  AnimationDriver,
  AnimationEngine,
  AnimationRendererFactory,
  AnimationStyleNormalizer,
  NoopAnimationDriver,
  PolymorpheusComponent,
  TUI_DARK_MODE,
  TUI_IS_PLAYWRIGHT,
  TuiButton,
  TuiIcon,
  TuiLink,
  WebAnimationsDriver,
  WebAnimationsStyleNormalizer
} from "./chunk-3VK442GK.js";
import {
  BrowserModule,
  DomRendererFactory2,
  bootstrapApplication
} from "./chunk-XI2RCXXD.js";
import "./chunk-6A2ZSXM6.js";
import "./chunk-LBJNUVBM.js";
import {
  DOCUMENT,
  LOCAL_STORAGE,
  LocationStrategy,
  PathLocationStrategy,
  WA_SESSION_STORAGE,
  toSignal
} from "./chunk-2QWGY2YZ.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injectable,
  NgModule,
  NgZone,
  RendererFactory2,
  enableProdMode,
  inject,
  performanceMarkFeature,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-SLVEPEAC.js";
import {
  distinctUntilChanged,
  filter,
  map,
  startWith
} from "./chunk-CJ7OSSQR.js";
import {
  __async
} from "./chunk-4MWRP73S.js";

// projects/demo/src/app/app.component.ts
function AppComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
function AppComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
    \u0275\u0275element(3, "img", 3)(4, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function AppComponent_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.darkMode.set(!ctx_r1.darkMode()));
    });
    \u0275\u0275text(6, " Change mode ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(7, "tui-doc-main");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("tuiTheme", ctx_r1.darkMode() ? "dark" : "light");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("border-radius", 100, "%");
    \u0275\u0275property("iconStart", ctx_r1.icon);
  }
}
var _AppComponent = class _AppComponent {
  constructor() {
    this.icons = inject(TUI_DOC_ICONS);
    this.darkMode = inject(TUI_DARK_MODE);
    this.router = inject(Router);
    this.storage = inject(LOCAL_STORAGE);
    this.isLanding = toSignal(this.router.events.pipe(filter((event) => event instanceof NavigationEnd), map(() => this.url === "" || this.url === "/"), distinctUntilChanged(), startWith(true)), { initialValue: true });
  }
  ngOnInit() {
    void this.replaceEnvInURI();
  }
  get url() {
    return this.router.routerState.snapshot.url;
  }
  get icon() {
    return this.darkMode() ? this.icons.light : this.icons.dark;
  }
  replaceEnvInURI() {
    return __async(this, null, function* () {
      const env = this.storage.getItem("env");
      if (env) {
        this.storage.removeItem("env");
        yield this.router.navigateByUrl(env);
      }
    });
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app"]], decls: 2, vars: 1, consts: [["tuiDocHeader", ""], [1, "t-links"], ["href", "https://stackblitz.com/github/taiga-family/editor-preview/tree/main?file=apps/demo/src/app/home/home.component.html", "rel", "noreferrer", "target", "_blank"], ["alt", "stackblitz", "src", "https://developer.stackblitz.com/img/open_in_stackblitz_small.svg", 1, "t-stackblitz"], ["alt", "stackblitz", "src", "assets/icons/stackblitz.svg", 1, "t-stackblitz", "t-stackblitz_mobile"], ["appearance", "secondary", "size", "s", "tuiIconButton", "", "type", "button", 1, "tui-doc-dark-mode-switch", 3, "click", "iconStart"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_Conditional_0_Template, 1, 0, "router-outlet")(1, AppComponent_Conditional_1_Template, 8, 4);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.isLanding() ? 0 : 1);
  }
}, dependencies: [RouterOutlet, TuiDocMain, TuiButton, TuiDocHeader], styles: ["\n\n[tuiDocHeader][_ngcontent-%COMP%] {\n  color: var(--tui-text-primary);\n  background: var(--tui-background-base);\n}\n.t-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.625rem;\n  align-items: center;\n  font: var(--tui-font-text-s);\n}\n.t-links[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n}\n.t-link[_ngcontent-%COMP%] {\n  margin-inline-start: 1rem;\n}\n.t-stackblitz[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n  box-shadow: 0.1875rem 0.125rem 1.375rem 0.0625rem rgba(0, 0, 0, 0.24);\n}\n.t-stackblitz_mobile[_ngcontent-%COMP%] {\n  display: none;\n}\nheader[_ngcontent-%COMP%] {\n  position: unset;\n  margin-inline-start: 16.25rem;\n  box-shadow: none;\n}\n@media only screen and (max-width: 768px) {\n  header[_ngcontent-%COMP%] {\n    margin-inline-start: 0;\n  }\n  .t-stackblitz[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .t-stackblitz_mobile[_ngcontent-%COMP%] {\n    display: block;\n    padding-inline-start: 12px;\n  }\n  .t-app-version[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */"], changeDetection: 0 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app", imports: [RouterOutlet, TuiAddonDoc, TuiButton, TuiDocHeader], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (isLanding()) {
    <router-outlet />
} @else {
    <header
        tuiDocHeader
        [attr.tuiTheme]="darkMode() ? 'dark' : 'light'"
    >
        <div class="t-links">
            <a
                href="https://stackblitz.com/github/taiga-family/editor-preview/tree/main?file=apps/demo/src/app/home/home.component.html"
                rel="noreferrer"
                target="_blank"
            >
                <img
                    alt="stackblitz"
                    src="https://developer.stackblitz.com/img/open_in_stackblitz_small.svg"
                    class="t-stackblitz"
                />
                <img
                    alt="stackblitz"
                    src="assets/icons/stackblitz.svg"
                    class="t-stackblitz t-stackblitz_mobile"
                />
            </a>

            <button
                appearance="secondary"
                size="s"
                tuiIconButton
                type="button"
                class="tui-doc-dark-mode-switch"
                [iconStart]="icon"
                [style.border-radius.%]="100"
                (click)="darkMode.set(!darkMode())"
            >
                Change mode
            </button>
        </div>
    </header>

    <tui-doc-main />
}
`, styles: ["/* projects/demo/src/app/app.component.css */\n[tuiDocHeader] {\n  color: var(--tui-text-primary);\n  background: var(--tui-background-base);\n}\n.t-links {\n  display: flex;\n  gap: 0.625rem;\n  align-items: center;\n  font: var(--tui-font-text-s);\n}\n.t-links > * {\n  display: flex;\n}\n.t-link {\n  margin-inline-start: 1rem;\n}\n.t-stackblitz:active {\n  transform: scale(0.98);\n  box-shadow: 0.1875rem 0.125rem 1.375rem 0.0625rem rgba(0, 0, 0, 0.24);\n}\n.t-stackblitz_mobile {\n  display: none;\n}\nheader {\n  position: unset;\n  margin-inline-start: 16.25rem;\n  box-shadow: none;\n}\n@media only screen and (max-width: 768px) {\n  header {\n    margin-inline-start: 0;\n  }\n  .t-stackblitz {\n    display: none;\n  }\n  .t-stackblitz_mobile {\n    display: block;\n    padding-inline-start: 12px;\n  }\n  .t-app-version {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "projects/demo/src/app/app.component.ts", lineNumber: 16 });
})();

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static \u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InjectableAnimationEngine,
    factory: _InjectableAnimationEngine.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_ANIMATIONS_PROVIDERS = [
  // Note: the `ngServerMode` happen inside factories to give the variable time to initialize.
  {
    provide: AnimationDriver,
    useFactory: () => false ? new NoopAnimationDriver() : new WebAnimationsDriver()
  },
  {
    provide: ANIMATION_MODULE_TYPE,
    useFactory: () => false ? "NoopAnimations" : "BrowserAnimations"
  },
  ...SHARED_ANIMATION_PROVIDERS
];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```ts
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static \u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BrowserAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static \u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NoopAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// projects/demo/src/app/shared/routes.ts
var TuiDemoPath = {
  GettingStarted: "",
  Anchors: "anchors",
  Appearance: "appearance",
  Mention: "mention",
  Details: "details",
  CharacterCounter: "character-counter",
  SlashCommand: "slash-command",
  Checkbox: "checkbox",
  ColorPickerTool: "custom-tool/color-picker",
  EmbedHtml5: "embed/html5",
  EmbedPDF: "embed/pdf",
  EmbedIframe: "embed/iframe",
  EmbedYoutube: "embed/youtube",
  Focus: "focus",
  Options: "options",
  Sanitize: "sanitize",
  Font: "font",
  Span: "span",
  Groups: "groups",
  TableOfContents: "table-of-contents",
  HighlightCode: "highlight/code",
  HighlightText: "highlight/text",
  ImagesPreview: "images/preview",
  ImagesResizable: "images/resizable",
  PasteEmojiTool: "custom-tool/paste-emoji",
  PasteImageTool: "custom-tool/paste-image",
  ProcessingCleanupHtml: "processing/cleanup-html",
  ClipboardPaste: "processing/clipboard-paste",
  ProcessingLegacyHtml: "processing/legacy-html",
  ProcessingMarkdown: "processing/markdown",
  ProcessingMarkdownExtension: "processing/markdown-extension",
  StarterKit: "starter-kit",
  UploadFiles: "upload-files",
  UploadImages: "images/upload",
  ToolbarBottom: "toolbar/bottom",
  ToolbarFloating: "toolbar/floating",
  ToolbarShared: "toolbar/shared",
  ToolbarCustom: "toolbar/custom"
};

// projects/demo/src/app/app.pages.ts
var DEMO_PAGES = [
  {
    section: "Documentation",
    title: "Starter Kit",
    route: TuiDemoPath.StarterKit,
    keywords: "editor, setup, starter kit, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, html, rich, text"
  },
  {
    section: "Documentation",
    title: "Options",
    route: TuiDemoPath.Options,
    keywords: "editor, sanitize, security, \u0441\u0430\u043D\u0438\u0442\u0430\u0439\u0437\u0435\u0440"
  },
  {
    section: "Documentation",
    title: "Sanitize",
    route: TuiDemoPath.Sanitize,
    keywords: "editor, parse, options, preserveWhitespace, editor props, keyboard, provideTuiEditorOptions, TUI_EDITOR_OPTIONS"
  },
  {
    section: "Documentation",
    title: "Font",
    route: TuiDemoPath.Font,
    keywords: "editor, font, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, html, rich, text"
  },
  {
    section: "Documentation",
    title: "Anchors",
    route: TuiDemoPath.Anchors,
    keywords: "editor, anchors, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, html, rich, text"
  },
  {
    section: "Documentation",
    title: "Checkbox",
    route: TuiDemoPath.Checkbox,
    keywords: "editor, checkbox, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, html, rich, text"
  },
  {
    section: "Documentation",
    title: "Appearance",
    route: TuiDemoPath.Appearance,
    keywords: "editor, appearance, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, html, rich, text"
  },
  {
    section: "Documentation",
    title: "Mention",
    route: TuiDemoPath.Mention,
    keywords: "editor, mention, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, html, rich, text"
  },
  {
    section: "Documentation",
    title: "Details",
    route: TuiDemoPath.Details,
    keywords: "details, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, html, rich, text"
  },
  {
    section: "Documentation",
    title: "Character counter",
    route: TuiDemoPath.CharacterCounter,
    keywords: "editor, counter, character"
  },
  {
    section: "Documentation",
    title: "Slash commands",
    route: TuiDemoPath.SlashCommand,
    keywords: "editor, slash, commands, dropdown, list"
  },
  {
    section: "Documentation",
    title: "Groups",
    route: TuiDemoPath.Groups,
    keywords: "editor, draggable, nested, hilite, groups, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, html, rich, text"
  },
  {
    section: "Documentation",
    title: "Table of contents",
    route: TuiDemoPath.TableOfContents,
    keywords: "editor, table of contents, contents, table, \u0442\u0435\u043A\u0441\u0442, html, rich, text"
  },
  {
    section: "Documentation",
    title: "Focus",
    route: TuiDemoPath.Focus,
    keywords: "editor, focus, focusable, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0444\u043E\u043A\u0443\u0441, html, rich, text"
  },
  {
    section: "Documentation",
    title: "Upload files",
    route: TuiDemoPath.UploadFiles,
    keywords: "attach, files, upload, TUI_ATTACH_FILES_LOADER"
  },
  {
    section: "Documentation",
    title: "Custom tool",
    subPages: [
      {
        section: "Documentation",
        title: "Color picker",
        keywords: "editor, custom color picker, color picker, tool, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0446\u0432\u0435\u0442, html, rich, text",
        route: `/${TuiDemoPath.ColorPickerTool}`
      },
      {
        section: "Documentation",
        title: "Paste emoji",
        keywords: "editor, custom, tool, emoji, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, html, rich, text",
        route: `/${TuiDemoPath.PasteEmojiTool}`
      },
      {
        section: "Documentation",
        title: "Paste image via link",
        keywords: "editor, paste image, tool, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, html, rich, text",
        route: `/${TuiDemoPath.PasteImageTool}`
      },
      {
        section: "Documentation",
        title: "Font size tool",
        keywords: "editor, custom font size tool, tool, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440, html, rich, text",
        route: `/${TuiDemoPath.Font}`,
        fragment: "custom-size-tool"
      },
      {
        section: "Documentation",
        title: "Span thread tool",
        keywords: "editor, custom span thread tool, tool, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, html, rich, text",
        route: `/${TuiDemoPath.Span}`,
        fragment: "span-thread-tool"
      }
    ]
  },
  {
    section: "Documentation",
    title: "Highlight",
    subPages: [
      {
        section: "Documentation",
        title: "Mark text",
        keywords: "editor, highlight, text, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430, html, rich, text",
        route: `/${TuiDemoPath.HighlightText}`
      },
      {
        section: "Documentation",
        title: "Code block",
        keywords: "editor, highlight, code, block, pre, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430, html, rich, text",
        route: `/${TuiDemoPath.HighlightCode}`
      }
    ]
  },
  {
    section: "Documentation",
    title: "Processing",
    subPages: [
      {
        section: "Documentation",
        title: "Legacy html",
        keywords: "editor, processing, content, legacy html, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, html, rich, text",
        route: `/${TuiDemoPath.ProcessingLegacyHtml}`
      },
      {
        section: "Documentation",
        title: "Cleanup html",
        keywords: "editor, processing, content, cleanup html, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, html, rich, text",
        route: `/${TuiDemoPath.ProcessingCleanupHtml}`
      },
      {
        section: "Documentation",
        title: "Clipboard paste",
        keywords: "remove-inline, styles, clipboard, paste",
        route: `/${TuiDemoPath.ClipboardPaste}`
      }
    ]
  },
  {
    section: "Documentation",
    title: "Markdown",
    subPages: [
      {
        section: "Documentation",
        title: "Extension",
        keywords: "editor, markdown, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, html, rich, text",
        route: `/${TuiDemoPath.ProcessingMarkdownExtension}`
      },
      {
        section: "Documentation",
        title: "Custom parsing",
        keywords: "editor, markdown, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, html, rich, text",
        route: `/${TuiDemoPath.ProcessingMarkdown}`
      }
    ]
  },
  {
    section: "Documentation",
    title: "Images",
    subPages: [
      {
        section: "Documentation",
        title: "Resizable",
        keywords: "editor, resizable, image, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, html, rich, text",
        route: `/${TuiDemoPath.ImagesResizable}`
      },
      {
        section: "Documentation",
        title: "Preview images",
        keywords: "editor, preview, images, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, html, rich, text",
        route: `/${TuiDemoPath.ImagesPreview}`
      },
      {
        section: "Documentation",
        title: "Upload",
        keywords: "editor, upload, images, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, html, rich, text",
        route: `/${TuiDemoPath.UploadImages}`
      }
    ]
  },
  {
    section: "Documentation",
    title: "Embed",
    subPages: [
      {
        section: "Documentation",
        title: "Youtube",
        keywords: "editor, embed, video player, audio player, youtube, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u043F\u043B\u0435\u0439\u0435\u0440, \u043F\u043B\u0435\u0435\u0440, \u044E\u0442\u0443\u0431, \u0442\u0435\u043A\u0441\u0442, html, rich, text",
        route: `/${TuiDemoPath.EmbedYoutube}`
      },
      {
        section: "Documentation",
        title: "Iframe",
        keywords: "editor, embed, iframe, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0430\u0439\u0444\u0440\u0435\u0439\u043C, html, rich, text",
        route: `/${TuiDemoPath.EmbedIframe}`
      },
      {
        section: "Documentation",
        title: "HTML5",
        keywords: "editor, embed, video player, audio player, html5, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u043F\u043B\u0435\u0435\u0440, html, rich, text",
        route: `/${TuiDemoPath.EmbedHtml5}`
      },
      {
        section: "Documentation",
        title: "PDF",
        keywords: "editor, embed, pdf",
        route: `/${TuiDemoPath.EmbedPDF}`
      }
    ]
  },
  {
    section: "Documentation",
    title: "Toolbar",
    subPages: [
      {
        section: "Documentation",
        title: "Align bottom",
        keywords: "editor, toolbar, bottom, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430, html, rich, text",
        route: `/${TuiDemoPath.ToolbarBottom}`
      },
      {
        section: "Documentation",
        title: "Floating",
        keywords: "editor, toolbar, floating, wysiwyg, \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440, \u0442\u0435\u043A\u0441\u0442, \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430, html, rich, text",
        route: `/${TuiDemoPath.ToolbarFloating}`
      },
      {
        section: "Documentation",
        title: "Shared",
        keywords: "editor, toolbar, shared, multiple, \u043E\u0434\u0438\u043D \u043D\u0430 \u0432\u0441\u0435\u0445, html, rich, text",
        route: `/${TuiDemoPath.ToolbarShared}`
      },
      {
        section: "Documentation",
        title: "Custom",
        keywords: "editor, toolbar, custom",
        route: `/${TuiDemoPath.ToolbarCustom}`
      }
    ]
  }
];

// projects/demo/src/app/app.routes.ts
var routes = [
  tuiProvideRoutePageTab({
    path: TuiDemoPath.GettingStarted,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-C4ZDA2NM.js");
    }),
    title: "Getting started"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.StarterKit,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-V3KX7RMN.js");
    }),
    title: "StarterKit"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.Options,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-CNU2XSPD.js");
    }),
    title: "ParseOptions"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.Sanitize,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-PQSZPV2Z.js");
    }),
    title: "Sanitize"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.Font,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-27GI73KC.js");
    }),
    title: "Font"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.Anchors,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-RFQRVMBQ.js");
    }),
    title: "Anchors"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.Appearance,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-5FN6U3UQ.js");
    }),
    title: "Appearance"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.Checkbox,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-74SUMPS6.js");
    }),
    title: "Checkbox"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.Mention,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-SNOU7BCP.js");
    }),
    title: "Mention"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.Details,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-5SGE6R2X.js");
    }),
    title: "Details"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.CharacterCounter,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-PXN6FXGO.js");
    }),
    title: "Character counter"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.SlashCommand,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-XGVK5PLA.js");
    }),
    title: "Slash commands"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.Focus,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-TZA5CSVR.js");
    }),
    title: "Focus"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.Groups,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-CRNC6NCD.js");
    }),
    title: "Groups"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.TableOfContents,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-TUFKVPXA.js");
    }),
    title: "Table of Contents"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.UploadFiles,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-T4LAO26D.js");
    }),
    title: "Upload files"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.PasteEmojiTool,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-FI57KFRI.js");
    }),
    title: "Editor \u2014 Paste emoji custom tool"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.Span,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-HLM6QRNT.js");
    }),
    title: "Editor \u2014 span thread tool"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.ColorPickerTool,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-Z7R42QVY.js");
    }),
    title: "Editor \u2014 Color picker custom tool"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.PasteImageTool,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-WYVPTR7N.js");
    }),
    title: "Editor \u2014 Paste image custom tool"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.PasteImageTool,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-WYVPTR7N.js");
    }),
    title: "Editor \u2014 Paste image custom tool"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.HighlightText,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-UXADC2FJ.js");
    }),
    title: "Editor \u2014 Highlight text"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.ProcessingLegacyHtml,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-5CTD7HH7.js");
    }),
    title: "Editor \u2014 Legacy html"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.ProcessingCleanupHtml,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-PYX3XSBS.js");
    }),
    title: "Editor \u2014 Cleanup html"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.ClipboardPaste,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-7RI4BTRO.js");
    }),
    title: "Editor \u2014 Clipboard paste"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.ProcessingMarkdown,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-3G6VJ6K4.js");
    }),
    title: "Editor \u2014 Markdown"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.ProcessingMarkdownExtension,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-EKRLJB7U.js");
    }),
    title: "Editor \u2014 Markdown"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.HighlightCode,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-SGWBD6IB.js");
    }),
    title: "Editor \u2014 Highlight code"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.ImagesResizable,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-KGTEVYWY.js");
    }),
    title: "Editor  \u2014 Resizable images"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.ImagesPreview,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-7QU5NC4S.js");
    }),
    title: "Editor  \u2014 Preview images"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.UploadImages,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-6YUIOXGU.js");
    }),
    title: "Editor \u2014 Upload images"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.EmbedYoutube,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-MVVCAJJ3.js");
    }),
    title: "Editor \u2014 YouTube"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.EmbedIframe,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-P4L2GQVN.js");
    }),
    title: "Editor \u2014 Iframe"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.EmbedHtml5,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-GNKYHHZM.js");
    }),
    title: "Editor \u2014 HTML5"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.EmbedPDF,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-T7OS7UAP.js");
    }),
    title: "Editor \u2014 PDF"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.ToolbarBottom,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-3425TRLQ.js");
    }),
    title: "Editor \u2014 Toolbar"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.ToolbarFloating,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-4QFFBYY5.js");
    }),
    title: "Editor \u2014 Toolbar"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.ToolbarShared,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-VWJ56PLI.js");
    }),
    title: "Editor \u2014 Toolbar"
  }),
  tuiProvideRoutePageTab({
    path: TuiDemoPath.ToolbarCustom,
    loadComponent: () => __async(null, null, function* () {
      return import("./chunk-EKKBSMOD.js");
    }),
    title: "Editor \u2014 Toolbar"
  }),
  {
    path: "**",
    redirectTo: TuiDemoPath.GettingStarted
  }
];

// projects/demo/src/app/shared/logo/index.ts
var _TuiLogo = class _TuiLogo {
};
_TuiLogo.\u0275fac = function TuiLogo_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiLogo)();
};
_TuiLogo.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TuiLogo, selectors: [["logo"]], decls: 3, vars: 0, consts: [["routerLink", "/", "tuiLink", "", 1, "logo-link"], [1, "logo-name"], ["icon", "assets/icons/logo.svg", 1, "logo-icon"]], template: function TuiLogo_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 0)(1, "span", 1);
    \u0275\u0275element(2, "tui-icon", 2);
    \u0275\u0275elementEnd()();
  }
}, dependencies: [RouterLink, TuiIcon, TuiLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%], tui-root._mobile   [_nghost-%COMP%] {\n  font-size: 0;\n}\n.logo-link[_ngcontent-%COMP%] {\n  display: flex;\n}\n.logo-name[_ngcontent-%COMP%] {\n  display: flex;\n  color: var(--tui-text-primary);\n}\n.logo-icon[_ngcontent-%COMP%] {\n  min-inline-size: 11.25rem;\n  min-block-size: 1.875rem;\n  color: #eb5a3d;\n}\n.logo-icon[tuiTheme="dark"][_nghost-%COMP%]   .logo-icon[_ngcontent-%COMP%], [tuiTheme="dark"]   [_nghost-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.logo[_ngcontent-%COMP%] {\n  margin-inline-end: 0.625rem;\n}\n.by[_ngcontent-%COMP%] {\n  margin-inline-start: 0.875rem;\n}\ntui-root._mobile[_nghost-%COMP%]   .by[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .by[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=index.css.map */'], changeDetection: 0 });
var TuiLogo = _TuiLogo;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLogo, [{
    type: Component,
    args: [{ selector: "logo", imports: [RouterLink, TuiIcon, TuiLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<a\n    routerLink="/"\n    tuiLink\n    class="logo-link"\n>\n    <span class="logo-name">\n        <tui-icon\n            icon="assets/icons/logo.svg"\n            class="logo-icon"\n        />\n    </span>\n</a>\n', styles: ['/* projects/demo/src/app/shared/logo/index.less */\n:host {\n  display: flex;\n  align-items: center;\n}\n:host :host-context(tui-root._mobile) {\n  font-size: 0;\n}\n.logo-link {\n  display: flex;\n}\n.logo-name {\n  display: flex;\n  color: var(--tui-text-primary);\n}\n.logo-icon {\n  min-inline-size: 11.25rem;\n  min-block-size: 1.875rem;\n  color: #eb5a3d;\n}\n.logo-icon:host-context([tuiTheme="dark"]) .logo-icon {\n  color: #fff;\n}\n.logo {\n  margin-inline-end: 0.625rem;\n}\n.by {\n  margin-inline-start: 0.875rem;\n}\n:host-context(tui-root._mobile) .by {\n  display: none;\n}\n/*# sourceMappingURL=index.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TuiLogo, { className: "TuiLogo", filePath: "projects/demo/src/app/shared/logo/index.ts", lineNumber: 13 });
})();
var TUI_LOGO_CONTENT = new PolymorpheusComponent(TuiLogo);

// projects/demo/src/app/app.config.ts
var appConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled"
    })),
    provideEventPlugins(),
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {
      provide: TUI_DOC_TITLE,
      useValue: "Editor | "
    },
    {
      provide: TUI_DOC_LOGO,
      useValue: TUI_LOGO_CONTENT
    },
    {
      provide: TUI_DOC_DEFAULT_TABS,
      useValue: ["Description and examples", "API"]
    },
    {
      provide: TUI_DOC_PAGES,
      useValue: DEMO_PAGES
    },
    {
      provide: TUI_IS_PLAYWRIGHT,
      useFactory: () => Boolean(inject(WA_SESSION_STORAGE).getItem("playwright"))
    },
    {
      provide: TUI_DOC_SOURCE_CODE,
      useValue: (context) => {
        const link = "https://github.com/taiga-family/editor/tree/main/libs";
        if (context.path) {
          return `${link}/${context.path}`;
        }
        if (context.package.toLowerCase() !== "kit") {
          return null;
        }
        return `${link}/${context.package.toLowerCase()}/src/lib/editor/${`${context.header[0]?.toLowerCase() ?? ""}${context.header.slice(1)}`.replaceAll(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}`;
      }
    }
  ]
};

// projects/demo/src/environments/environment.ts
var environment = { production: false };

// projects/demo/src/main.ts
if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v19.2.20
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
