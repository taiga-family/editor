import {
  TuiResizable,
  TuiResizer
} from "./chunk-LPBSAZLJ.js";
import {
  DomSanitizer
} from "./chunk-DMAZJOQQ.js";
import {
  TUI_EDITOR_PM_SELECTED_NODE
} from "./chunk-XDT5UXUV.js";
import {
  tuiIsNumber,
  tuiPx
} from "./chunk-5BSJ6YPL.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver$1,
  DOCUMENT,
  Directive,
  ElementRef,
  Pipe,
  inject,
  input,
  output,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefinePipe,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuerySignal
} from "./chunk-KFKFA6WT.js";
import {
  NodeView
} from "./chunk-QAKA6OWS.js";

// projects/editor/extensions/tiptap-node-view/index.ts
var TuiComponentRenderer = class {
  constructor(component, injector, props) {
    const applicationRef = injector.get(ApplicationRef);
    const componentFactoryResolver = injector.get(ComponentFactoryResolver$1);
    const factory = componentFactoryResolver.resolveComponentFactory(component);
    this.componentRef = factory.create(injector, []);
    this.updateProps(props);
    applicationRef.attachView(this.componentRef.hostView);
  }
  get el() {
    return this.componentRef.injector.get(ElementRef);
  }
  get dom() {
    return this.el.nativeElement;
  }
  updateProps(props) {
    Object.entries(props).forEach(([key, value]) => {
      this.instance[key] = value;
    });
  }
  detectChanges() {
    this.componentRef.changeDetectorRef.detectChanges();
  }
  destroy() {
    this.componentRef.destroy();
  }
  get instance() {
    return this.componentRef.instance;
  }
};
var TuiNodeViewNg = class {
};
var TuiNodeView = class extends NodeView {
  /**
   * @caretaker note:
   * Class constructor NodeView cannot be invoked without 'new'
   */
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(component, props, options) {
    super(component, props, options);
    this.contentDOMElement = null;
  }
  get dom() {
    return this.renderer.dom;
  }
  get contentDOM() {
    return this.node.isLeaf ? null : this.contentDOMElement;
  }
  mount() {
    const injector = this.options.injector;
    const doc = injector.get(DOCUMENT);
    const props = {
      editor: this.editor,
      node: this.node,
      decorations: this.decorations,
      selected: false,
      extension: this.extension,
      getPos: () => this.getPos(),
      updateAttributes: (attributes) => this.updateAttributes(attributes),
      deleteNode: () => this.deleteNode(),
      view: this.view,
      innerDecorations: this.innerDecorations,
      HTMLAttributes: this.HTMLAttributes
    };
    this.editor.on("selectionUpdate", this.handleSelectionUpdate.bind(this));
    this.renderer = new TuiComponentRenderer(this.component, injector, props);
    if (this.extension.config.draggable !== void 0) {
      this.renderer.el.nativeElement.ondragstart = (e) => {
        this.onDragStart(e);
      };
    }
    const inline = this.node.isInline ? "span" : "div";
    this.contentDOMElement = this.node.isLeaf ? null : doc.createElement(inline);
    if (this.contentDOMElement) {
      this.contentDOMElement.style.whiteSpace = "inherit";
      this.renderer.detectChanges();
    }
    this.appendContendDom();
  }
  update(node, decorations) {
    if (this.options.update) {
      return this.options.update(node, decorations);
    }
    if (node.type !== this.node.type) {
      return false;
    }
    if (node === this.node && this.decorations === decorations) {
      return true;
    }
    this.node = node;
    this.decorations = decorations;
    this.renderer.updateProps({ node, decorations });
    this.appendContendDom();
    return true;
  }
  handleSelectionUpdate() {
    const { from, to } = this.editor.state.selection;
    const pos = this.getPos();
    if (pos === void 0) {
      this.deselectNode();
      return;
    }
    if (from <= pos && to >= pos + this.node.nodeSize) {
      this.selectNode();
    } else {
      this.deselectNode();
    }
  }
  selectNode() {
    this.renderer.updateProps({ selected: true });
    this.renderer.dom.classList.add(TUI_EDITOR_PM_SELECTED_NODE);
  }
  deselectNode() {
    this.renderer.updateProps({ selected: false });
    this.renderer.dom.classList.remove(TUI_EDITOR_PM_SELECTED_NODE);
  }
  destroy() {
    this.renderer.destroy();
    this.editor.off("selectionUpdate", this.handleSelectionUpdate.bind(this));
    this.contentDOMElement = null;
  }
  appendContendDom() {
    const contentElement = this.dom.querySelector("[data-node-view-content]");
    if (this.contentDOMElement && contentElement && !contentElement.contains(this.contentDOMElement)) {
      contentElement.appendChild(this.contentDOMElement);
    }
  }
};

// projects/editor/components/editor-resizable/editor-resizable.abstract.ts
var _AbstractTuiEditorResizable = class _AbstractTuiEditorResizable extends TuiNodeViewNg {
  constructor() {
    super(...arguments);
    this.currentHeight = 0;
    this.currentWidth = 0;
  }
  get node() {
    return this.localNode;
  }
  set node(value) {
    this.localNode = value;
    this.changeDetector.detectChanges();
  }
  get attrs() {
    return this.node.attrs ?? { src: "" };
  }
  get width() {
    return (this.currentWidth || this.attrs?.width) ?? null;
  }
  get height() {
    return (this.currentHeight || this.attrs?.height) ?? null;
  }
};
_AbstractTuiEditorResizable.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AbstractTuiEditorResizable_BaseFactory;
  return function AbstractTuiEditorResizable_Factory(__ngFactoryType__) {
    return (\u0275AbstractTuiEditorResizable_BaseFactory || (\u0275AbstractTuiEditorResizable_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractTuiEditorResizable)))(__ngFactoryType__ || _AbstractTuiEditorResizable);
  };
})();
_AbstractTuiEditorResizable.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AbstractTuiEditorResizable, features: [\u0275\u0275InheritDefinitionFeature] });
var AbstractTuiEditorResizable = _AbstractTuiEditorResizable;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiEditorResizable, [{
    type: Directive
  }], null, null);
})();

// projects/editor/components/editor-resizable/editor-resizable.component.ts
var _c0 = ["container"];
var _c1 = ["*"];
var _c2 = (a0) => [a0, 0];
var _c3 = () => [1, 0];
var _c4 = () => [0, 1];
function TuiEditorResizable_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275listener("tuiSizeChange", function TuiEditorResizable_Conditional_3_Conditional_1_Template_div_tuiSizeChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sizeChange.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("tuiResizer", \u0275\u0275pureFunction0(1, _c4));
  }
}
function TuiEditorResizable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("tuiSizeChange", function TuiEditorResizable_Conditional_3_Template_div_tuiSizeChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sizeChange.emit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(1, TuiEditorResizable_Conditional_3_Conditional_1_Template, 1, 2, "div", 3);
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275listener("tuiSizeChange", function TuiEditorResizable_Conditional_3_Template_div_tuiSizeChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sizeChange.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("tuiResizer", \u0275\u0275pureFunction1(3, _c2, -1));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.autoHeight() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("tuiResizer", \u0275\u0275pureFunction0(5, _c3));
  }
}
var _TuiEditorResizable = class _TuiEditorResizable {
  constructor() {
    this.container = viewChild.required("container");
    this.isEditable = input(false);
    this.autoHeight = input(false);
    this.width = input(null);
    this.height = input(null);
    this.sizeChange = output();
  }
  get hostWidth() {
    const width = this.width();
    return tuiIsNumber(width) ? tuiPx(width) : width;
  }
  get hostHeight() {
    if (this.autoHeight()) {
      return null;
    }
    const height = this.height();
    return tuiIsNumber(height) ? tuiPx(height) : height;
  }
};
_TuiEditorResizable.\u0275fac = function TuiEditorResizable_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiEditorResizable)();
};
_TuiEditorResizable.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TuiEditorResizable, selectors: [["tui-editor-resizable"]], viewQuery: function TuiEditorResizable_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.container, _c0, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, hostVars: 4, hostBindings: function TuiEditorResizable_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275styleProp("height", ctx.hostHeight)("width", ctx.hostWidth);
  }
}, inputs: { isEditable: [1, "isEditable"], autoHeight: [1, "autoHeight"], width: [1, "width"], height: [1, "height"] }, outputs: { sizeChange: "sizeChange" }, ngContentSelectors: _c1, decls: 4, vars: 3, consts: [["container", ""], ["tuiResizable", "", 1, "t-resizable"], [1, "t-handle", "t-handle-left-side", 3, "tuiSizeChange", "tuiResizer"], [1, "t-handle", "t-handle-bottom-side", 3, "tuiResizer"], [1, "t-handle", "t-handle-right-side", 3, "tuiSizeChange", "tuiResizer"], [1, "t-handle", "t-handle-bottom-side", 3, "tuiSizeChange", "tuiResizer"]], template: function TuiEditorResizable_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div", 1, 0);
    \u0275\u0275projection(2);
    \u0275\u0275template(3, TuiEditorResizable_Conditional_3_Template, 3, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275classProp("t-resizable-auto-height", ctx.autoHeight());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.isEditable() ? 3 : -1);
  }
}, dependencies: [TuiResizable, TuiResizer], styles: ['\n\n[_nghost-%COMP%] {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .t-resizable[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .t-resizable-auto-height[_ngcontent-%COMP%] {\n  block-size: auto !important;\n}\n[_nghost-%COMP%]   iframe[_ngcontent-%COMP%] {\n  display: inline;\n  pointer-events: none;\n}\n[_nghost-%COMP%]:hover   .t-handle[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n.t-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  inset-block-start: 0;\n  inline-size: 0.75rem;\n  cursor: col-resize;\n  justify-content: center;\n  align-items: center;\n  block-size: 100%;\n}\n.t-handle[_ngcontent-%COMP%]::after {\n  transition-property: opacity;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  content: "";\n  inline-size: 50%;\n  block-size: 33%;\n  box-sizing: border-box;\n  border-radius: var(--tui-radius-m);\n  background: var(--tui-background-accent-opposite-hover);\n  outline: 1px solid rgba(255, 255, 255, 0.5);\n  border: 0.0625rem solid var(--tui-background-neutral-1-hover);\n  opacity: 0;\n}\n.t-handle-left-side[_ngcontent-%COMP%] {\n  inset-inline-start: 0;\n}\n.t-handle-bottom-side[_ngcontent-%COMP%] {\n  inset-block-start: unset;\n  inset-block-end: 0.3125rem;\n  block-size: 0.95rem;\n  inline-size: 100%;\n}\n.t-handle-right-side[_ngcontent-%COMP%] {\n  inset-inline-end: 0;\n}\n/*# sourceMappingURL=editor-resizable.component.css.map */'], changeDetection: 0 });
var TuiEditorResizable = _TuiEditorResizable;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiEditorResizable, [{
    type: Component,
    args: [{ selector: "tui-editor-resizable", imports: [TuiResizable, TuiResizer], changeDetection: ChangeDetectionStrategy.OnPush, host: { "[style.height]": "hostHeight", "[style.width]": "hostWidth" }, template: '<div\n    #container\n    tuiResizable\n    class="t-resizable"\n    [class.t-resizable-auto-height]="autoHeight()"\n>\n    <ng-content />\n\n    @if (isEditable()) {\n        <div\n            class="t-handle t-handle-left-side"\n            [tuiResizer]="[-1, 0]"\n            (tuiSizeChange)="sizeChange.emit($event)"\n        ></div>\n\n        @if (!autoHeight()) {\n            <div\n                class="t-handle t-handle-bottom-side"\n                [tuiResizer]="[0, 1]"\n                (tuiSizeChange)="sizeChange.emit($event)"\n            ></div>\n        }\n\n        <div\n            class="t-handle t-handle-right-side"\n            [tuiResizer]="[1, 0]"\n            (tuiSizeChange)="sizeChange.emit($event)"\n        ></div>\n    }\n</div>\n', styles: ['/* projects/editor/components/editor-resizable/editor-resizable.component.less */\n:host {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n}\n:host .t-resizable {\n  box-sizing: border-box;\n}\n:host .t-resizable-auto-height {\n  block-size: auto !important;\n}\n:host iframe {\n  display: inline;\n  pointer-events: none;\n}\n:host:hover .t-handle::after {\n  opacity: 1;\n}\n.t-handle {\n  position: absolute;\n  display: flex;\n  inset-block-start: 0;\n  inline-size: 0.75rem;\n  cursor: col-resize;\n  justify-content: center;\n  align-items: center;\n  block-size: 100%;\n}\n.t-handle::after {\n  transition-property: opacity;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  content: "";\n  inline-size: 50%;\n  block-size: 33%;\n  box-sizing: border-box;\n  border-radius: var(--tui-radius-m);\n  background: var(--tui-background-accent-opposite-hover);\n  outline: 1px solid rgba(255, 255, 255, 0.5);\n  border: 0.0625rem solid var(--tui-background-neutral-1-hover);\n  opacity: 0;\n}\n.t-handle-left-side {\n  inset-inline-start: 0;\n}\n.t-handle-bottom-side {\n  inset-block-start: unset;\n  inset-block-end: 0.3125rem;\n  block-size: 0.95rem;\n  inline-size: 100%;\n}\n.t-handle-right-side {\n  inset-inline-end: 0;\n}\n/*# sourceMappingURL=editor-resizable.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TuiEditorResizable, { className: "TuiEditorResizable", filePath: "projects/editor/components/editor-resizable/editor-resizable.component.ts", lineNumber: 19 });
})();

// projects/editor/pipes/trust-resource-url.pipe.ts
var _TuiTrustResourceUrlPipe = class _TuiTrustResourceUrlPipe {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
  }
  transform(src) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src ?? "");
  }
};
_TuiTrustResourceUrlPipe.\u0275fac = function TuiTrustResourceUrlPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTrustResourceUrlPipe)();
};
_TuiTrustResourceUrlPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "tuiTrustResourceUrl", type: _TuiTrustResourceUrlPipe, pure: true });
var TuiTrustResourceUrlPipe = _TuiTrustResourceUrlPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTrustResourceUrlPipe, [{
    type: Pipe,
    args: [{ name: "tuiTrustResourceUrl" }]
  }], null, null);
})();

export {
  TuiComponentRenderer,
  TuiNodeViewNg,
  TuiNodeView,
  AbstractTuiEditorResizable,
  TuiEditorResizable,
  TuiTrustResourceUrlPipe
};
//# sourceMappingURL=chunk-4P4YSWKO.js.map
