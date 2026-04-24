import {
  AbstractTuiEditorResizable,
  TuiEditorResizable,
  TuiNodeView
} from "./chunk-EK32FQMI.js";
import {
  DomSanitizer
} from "./chunk-XI2RCXXD.js";
import {
  TUI_EDITOR_RESIZE_EVENT
} from "./chunk-I6VUD5CU.js";
import {
  tuiPure
} from "./chunk-2QWGY2YZ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  InjectionToken,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵsanitizeResourceUrl,
  ɵɵstyleProp
} from "./chunk-SLVEPEAC.js";
import {
  __esDecorate,
  __runInitializers
} from "./chunk-CJ7OSSQR.js";
import {
  Node2 as Node,
  mergeAttributes
} from "./chunk-U65UEYRO.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// projects/editor/extensions/iframe-editor/iframe-editor.options.ts
var TUI_IFRAME_EDITOR_OPTIONS = new InjectionToken(ngDevMode ? "TUI_IFRAME_EDITOR_OPTIONS" : "", {
  factory: () => ({
    minWidth: 100,
    maxWidth: Infinity,
    minHeight: 100,
    maxHeight: Infinity
  })
});

// projects/editor/extensions/iframe-editor/iframe-editor.component.ts
var TuiIframeEditor = (() => {
  var _a;
  let _classSuper = AbstractTuiEditorResizable;
  let _instanceExtraInitializers = [];
  let _get_src_decorators;
  return _a = class extends _classSuper {
    constructor() {
      super(...arguments);
      this.sanitizer = (__runInitializers(this, _instanceExtraInitializers), inject(DomSanitizer));
      this.el = inject(ElementRef);
      this.options = inject(TUI_IFRAME_EDITOR_OPTIONS);
      this.changeDetector = inject(ChangeDetectorRef);
    }
    updateSize([width, height]) {
      this.currentWidth = Math.max(this.options.minWidth, Math.min(this.options.maxWidth, width));
      this.currentHeight = Math.max(this.options.minHeight, Math.min(this.options.maxHeight, height));
      this.attrs.width = this.currentWidth;
      this.attrs.height = this.currentHeight;
      this.el.nativeElement.dispatchEvent(new CustomEvent(TUI_EDITOR_RESIZE_EVENT, { bubbles: true }));
    }
    get src() {
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.attrs.src ?? "");
    }
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    _get_src_decorators = [tuiPure];
    __esDecorate(_a, null, _get_src_decorators, { kind: "getter", name: "src", static: false, private: false, access: { has: (obj) => "src" in obj, get: (obj) => obj.src }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a.\u0275fac = /* @__PURE__ */ (() => {
    let \u0275TuiIframeEditor_BaseFactory;
    return function TuiIframeEditor_Factory(__ngFactoryType__) {
      return (\u0275TuiIframeEditor_BaseFactory || (\u0275TuiIframeEditor_BaseFactory = \u0275\u0275getInheritedFactory(_a)))(__ngFactoryType__ || _a);
    };
  })(), _a.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _a, selectors: [["tui-iframe-editor"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 14, consts: [[3, "sizeChange", "height", "isEditable", "width"], ["alt", "", 3, "height", "src", "width"]], template: function TuiIframeEditor_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "tui-editor-resizable", 0);
      \u0275\u0275listener("sizeChange", function TuiIframeEditor_Template_tui_editor_resizable_sizeChange_0_listener($event) {
        return ctx.updateSize($event);
      });
      \u0275\u0275element(1, "iframe", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("height", ctx.height)("isEditable", ctx.editor.isEditable)("width", ctx.width);
      \u0275\u0275advance();
      \u0275\u0275styleProp("max-height", ctx.options.maxHeight)("max-width", ctx.options.maxWidth)("min-height", ctx.options.minHeight)("min-width", ctx.options.minWidth);
      \u0275\u0275property("height", ctx.height)("src", ctx.src, \u0275\u0275sanitizeResourceUrl)("width", ctx.width);
    }
  }, dependencies: [TuiEditorResizable], styles: ["\n\niframe[_ngcontent-%COMP%] {\n  display: inline;\n  pointer-events: none;\n}\n/*# sourceMappingURL=iframe-editor.component.css.map */"], changeDetection: 0 }), _a;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIframeEditor, [{
    type: Component,
    args: [{ selector: "tui-iframe-editor", imports: [TuiEditorResizable], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-editor-resizable\n    [height]="height"\n    [isEditable]="editor.isEditable"\n    [width]="width"\n    (sizeChange)="updateSize($event)"\n>\n    <iframe\n        alt=""\n        [height]="height"\n        [src]="src"\n        [style.max-height]="options.maxHeight"\n        [style.max-width]="options.maxWidth"\n        [style.min-height]="options.minHeight"\n        [style.min-width]="options.minWidth"\n        [width]="width"\n    ></iframe>\n</tui-editor-resizable>\n', styles: ["/* projects/editor/extensions/iframe-editor/iframe-editor.component.less */\niframe {\n  display: inline;\n  pointer-events: none;\n}\n/*# sourceMappingURL=iframe-editor.component.css.map */\n"] }]
  }], null, { src: [] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TuiIframeEditor, { className: "TuiIframeEditor", filePath: "projects/editor/extensions/iframe-editor/iframe-editor.component.ts", lineNumber: 25 });
})();

// projects/editor/extensions/iframe-editor/iframe-editor.extension.ts
var tuiCreateIframeEditorExtension = ({ injector }) => Node.create({
  name: "iframe",
  group: "block",
  atom: true,
  draggable: false,
  parseHTML() {
    return [{ tag: "iframe" }];
  },
  addAttributes() {
    return {
      src: {
        default: null,
        keepOnSplit: false,
        parseHTML: (element) => element.getAttribute("src")
      },
      frameborder: {
        default: 0,
        keepOnSplit: false,
        parseHTML: (element) => element.getAttribute("frameborder")
      },
      width: {
        default: "100%",
        keepOnSplit: false,
        parseHTML: (element) => element.getAttribute("width")
      },
      height: {
        default: null,
        keepOnSplit: false,
        parseHTML: (element) => element.getAttribute("height")
      },
      allowfullscreen: {
        keepOnSplit: false,
        default: this.options.allowFullscreen,
        parseHTML: (element) => element.getAttribute("allowfullscreen")
      }
    };
  },
  renderHTML({ HTMLAttributes }) {
    return [
      "iframe",
      mergeAttributes(HTMLAttributes, { "data-type": "iframe-editor" })
    ];
  },
  addNodeView() {
    return (props) => new TuiNodeView(TuiIframeEditor, props, __spreadValues({
      injector
    }, props));
  },
  addCommands() {
    return {
      setIframe: (attrs) => ({ commands, state }) => {
        const prevLine = state.selection.anchor;
        commands.enter();
        commands.setTextSelection(prevLine);
        commands.insertContent({
          type: this.name,
          attrs
        });
        commands.setTextSelection(state.selection.anchor);
        return true;
      }
    };
  }
});

export {
  TUI_IFRAME_EDITOR_OPTIONS,
  TuiIframeEditor,
  tuiCreateIframeEditorExtension
};
//# sourceMappingURL=chunk-BJZBC7OY.js.map
