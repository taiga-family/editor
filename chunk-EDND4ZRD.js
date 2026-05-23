import {
  AbstractTuiEditorResizable,
  TuiEditorResizable,
  TuiNodeView,
  TuiTrustResourceUrlPipe
} from "./chunk-JQT6NZCN.js";
import {
  TUI_EDITOR_RESIZE_EVENT
} from "./chunk-5B5T5J6E.js";
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵsanitizeResourceUrl,
  ɵɵstyleProp
} from "./chunk-NS3244ZP.js";
import {
  Node3,
  mergeAttributes
} from "./chunk-LXNO5FKD.js";
import {
  __spreadValues
} from "./chunk-KWSTWQNB.js";

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
var _TuiIframeEditor = class _TuiIframeEditor extends AbstractTuiEditorResizable {
  constructor() {
    super(...arguments);
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
};
_TuiIframeEditor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiIframeEditor_BaseFactory;
  return function TuiIframeEditor_Factory(__ngFactoryType__) {
    return (\u0275TuiIframeEditor_BaseFactory || (\u0275TuiIframeEditor_BaseFactory = \u0275\u0275getInheritedFactory(_TuiIframeEditor)))(__ngFactoryType__ || _TuiIframeEditor);
  };
})();
_TuiIframeEditor.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TuiIframeEditor, selectors: [["tui-iframe-editor"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 16, consts: [[3, "sizeChange", "height", "isEditable", "width"], ["alt", "", 3, "height", "src", "width"]], template: function TuiIframeEditor_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-editor-resizable", 0);
    \u0275\u0275listener("sizeChange", function TuiIframeEditor_Template_tui_editor_resizable_sizeChange_0_listener($event) {
      return ctx.updateSize($event);
    });
    \u0275\u0275element(1, "iframe", 1);
    \u0275\u0275pipe(2, "tuiTrustResourceUrl");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("height", ctx.height)("isEditable", ctx.editor.isEditable)("width", ctx.width);
    \u0275\u0275advance();
    \u0275\u0275styleProp("max-height", ctx.options.maxHeight)("max-width", ctx.options.maxWidth)("min-height", ctx.options.minHeight)("min-width", ctx.options.minWidth);
    \u0275\u0275property("height", ctx.height)("src", \u0275\u0275pipeBind1(2, 14, ctx.attrs.src), \u0275\u0275sanitizeResourceUrl)("width", ctx.width);
  }
}, dependencies: [TuiEditorResizable, TuiTrustResourceUrlPipe], styles: ["\n\niframe[_ngcontent-%COMP%] {\n  display: inline;\n  pointer-events: none;\n}\n/*# sourceMappingURL=iframe-editor.component.css.map */"], changeDetection: 0 });
var TuiIframeEditor = _TuiIframeEditor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIframeEditor, [{
    type: Component,
    args: [{ selector: "tui-iframe-editor", imports: [TuiEditorResizable, TuiTrustResourceUrlPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: '<tui-editor-resizable\n    [height]="height"\n    [isEditable]="editor.isEditable"\n    [width]="width"\n    (sizeChange)="updateSize($event)"\n>\n    <iframe\n        alt=""\n        [height]="height"\n        [src]="attrs.src | tuiTrustResourceUrl"\n        [style.max-height]="options.maxHeight"\n        [style.max-width]="options.maxWidth"\n        [style.min-height]="options.minHeight"\n        [style.min-width]="options.minWidth"\n        [width]="width"\n    ></iframe>\n</tui-editor-resizable>\n', styles: ["/* projects/editor/extensions/iframe-editor/iframe-editor.component.less */\niframe {\n  display: inline;\n  pointer-events: none;\n}\n/*# sourceMappingURL=iframe-editor.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TuiIframeEditor, { className: "TuiIframeEditor", filePath: "projects/editor/extensions/iframe-editor/iframe-editor.component.ts", lineNumber: 24 });
})();

// projects/editor/extensions/iframe-editor/iframe-editor.extension.ts
var tuiCreateIframeEditorExtension = ({ injector }) => Node3.create({
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
//# sourceMappingURL=chunk-EDND4ZRD.js.map
