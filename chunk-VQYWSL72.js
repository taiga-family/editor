import {
  TuiChevron,
  TuiGroup,
  TuiLoader
} from "./chunk-M277MCZ7.js";
import {
  PolymorpheusOutlet,
  PolymorpheusTemplate,
  TuiIcon,
  animate,
  animateChild,
  query,
  sequence,
  stagger,
  style,
  transition,
  trigger
} from "./chunk-3VK442GK.js";
import {
  tuiQueryListChanges
} from "./chunk-6A2ZSXM6.js";
import {
  DOCUMENT,
  EMPTY_QUERY,
  NgIf,
  NgTemplateOutlet,
  takeUntilDestroyed,
  tuiIsPresent
} from "./chunk-2QWGY2YZ.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  Directive,
  EventEmitter,
  Inject,
  Injectable,
  Input,
  Output,
  RendererFactory2,
  RuntimeError,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-SLVEPEAC.js";
import {
  filter,
  identity,
  map,
  merge,
  pairwise,
  switchMap,
  timer
} from "./chunk-CJ7OSSQR.js";

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationBuilder = class _AnimationBuilder {
  static \u0275fac = function AnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimationBuilder,
    factory: () => (() => inject(BrowserAnimationBuilder))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  animationModuleType = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _nextAnimationId = 0;
  _renderer;
  constructor(rootRenderer, doc) {
    super();
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation2) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static \u0275fac = function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationBuilder)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserAnimationBuilder,
    factory: _BrowserAnimationBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  _id;
  _renderer;
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  id;
  element;
  _renderer;
  parentPlayer = null;
  _started = false;
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
  totalTime = 0;
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-animations.mjs
var TRANSITION = "{{duration}}ms ease-in-out";
var DURATION = {
  params: {
    duration: 300
  }
};
var STAGGER = 300;
var tuiParentAnimation = trigger("tuiParentAnimation", [transition(":leave", [query(":scope > *", [animateChild()], {
  optional: true
})])]);
var tuiParentStop = trigger("tuiParentStop", [transition(":enter", [])]);
var tuiHost = trigger("tuiHost", [transition(":enter", [style({
  overflow: "clip"
}), query(":scope > *", [animateChild()], {
  optional: true
})]), transition(":leave", [query(":scope > *", [animateChild()], {
  optional: true
})])]);
var tuiHeightCollapse = trigger("tuiHeightCollapse", [transition(":enter", [style({
  height: 0
}), animate(TRANSITION, style({
  height: "*"
}))], DURATION), transition(":leave", [style({
  height: "*"
}), animate(TRANSITION, style({
  height: 0
}))], DURATION)]);
var tuiHeightCollapseList = trigger("tuiHeightCollapseList", [transition("* => *", [query(":enter", [style({
  height: 0
}), stagger(STAGGER, [animate(TRANSITION, style({
  height: "*"
}))])], {
  optional: true
}), query(":leave", [style({
  height: "*"
}), stagger(STAGGER, [animate(TRANSITION, style({
  height: 0
}))])], {
  optional: true
})], DURATION)]);
var tuiWidthCollapse = trigger("tuiWidthCollapse", [transition(":enter", [style({
  width: 0
}), animate(TRANSITION, style({
  width: "*"
}))], DURATION), transition(":leave", [style({
  width: "*"
}), animate(TRANSITION, style({
  width: 0
}))], DURATION)]);
var tuiWidthCollapseList = trigger("tuiWidthCollapseList", [transition("* => *", [query(":enter", [style({
  width: 0
}), stagger(STAGGER, [animate(TRANSITION, style({
  width: "*"
}))])], {
  optional: true
}), query(":leave", [style({
  width: "*"
}), stagger(STAGGER, [animate(TRANSITION, style({
  width: 0
}))])], {
  optional: true
})], DURATION)]);
var tuiCrossFade = trigger("tuiCrossFade", [transition(":enter", [style({
  opacity: 0
}), animate(TRANSITION, style({
  opacity: 1
}))], {
  params: {
    duration: 300
  }
}), transition(":leave", [style({
  opacity: 1,
  position: "absolute",
  left: "{{left}}",
  right: "{{right}}",
  bottom: "{{bottom}}",
  top: "{{top}}"
}), animate(TRANSITION, style({
  opacity: 0
}))], {
  params: {
    duration: 300,
    left: "auto",
    right: "auto",
    bottom: "auto",
    top: "auto"
  }
})]);
var tuiFadeIn = trigger("tuiFadeIn", [transition(":enter", [style({
  opacity: 0
}), animate(TRANSITION, style({
  opacity: 1
}))], DURATION), transition(":leave", [style({
  opacity: 1
}), animate(TRANSITION, style({
  opacity: 0
}))], DURATION)]);
var tuiFadeInList = trigger("tuiFadeInList", [transition("* => *", [query(":enter", [style({
  opacity: 0
}), stagger(STAGGER, [animate(TRANSITION, style({
  opacity: 1
}))])], {
  optional: true
}), query(":leave", [style({
  opacity: 1
}), stagger(STAGGER, [animate(TRANSITION, style({
  opacity: 0
}))])], {
  optional: true
})], DURATION)]);
var tuiFadeInTop = trigger("tuiFadeInTop", [transition(":enter", [style({
  transform: "translateY(-{{start}}px)",
  opacity: 0
}), animate(TRANSITION, style({
  transform: "translateY({{end}})",
  opacity: 1
}))], {
  params: {
    end: 0,
    start: 10,
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translateY({{end}})",
  opacity: 1
}), animate(TRANSITION, style({
  transform: "translateY(-{{start}}px)",
  opacity: 0
}))], {
  params: {
    end: 0,
    start: 10,
    duration: 300
  }
})]);
var tuiFadeInBottom = trigger("tuiFadeInBottom", [transition(":enter", [style({
  transform: "translateY({{start}}px)",
  opacity: 0
}), animate(TRANSITION, style({
  transform: "translateY({{end}})",
  opacity: 1
}))], {
  params: {
    end: 0,
    start: 10,
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translateY({{end}})",
  opacity: 1
}), animate(TRANSITION, style({
  transform: "translateY({{start}}px)",
  opacity: 0
}))], {
  params: {
    end: 0,
    start: 10,
    duration: 300
  }
})]);
var tuiDropdownAnimation = trigger("tuiDropdownAnimation", [transition(":enter", [style({
  transform: "translateY(-{{start}}px)",
  opacity: 0
}), animate(TRANSITION, style({
  transform: "translateY({{end}})",
  opacity: 1
}))], {
  params: {
    end: 0,
    start: 10,
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translateY({{end}})",
  opacity: 1
}), animate(TRANSITION, style({
  transform: "translateY(-{{start}}px)",
  opacity: 0
}))], {
  params: {
    end: 0,
    start: 10,
    duration: 300
  }
})]);
var tuiScaleIn = trigger("tuiScaleIn", [transition(":enter", [style({
  transform: "scale({{start}})"
}), animate("{{duration}}ms {{easing}}", style({
  transform: "scale({{end}})"
}))], {
  params: {
    end: 1,
    start: 0,
    duration: 300,
    easing: "ease-in-out"
  }
}), transition(":leave", [style({
  transform: "scale({{end}})"
}), animate(TRANSITION, style({
  transform: "scale({{start}})"
}))], {
  params: {
    end: 1,
    start: 0,
    duration: 300
  }
})]);
var tuiPop = trigger("tuiPop", [transition(":enter", [style({
  transform: "scale({{start}})"
}), animate(TRANSITION, style({
  transform: "scale({{middle}})"
})), animate(TRANSITION, style({
  transform: "scale({{end}})"
}))], {
  params: {
    end: 1,
    middle: 1.1,
    start: 0,
    duration: 300
  }
}), transition(":leave", [style({
  transform: "scale({{end}})"
}), animate(TRANSITION, style({
  transform: "scale({{middle}})"
})), animate(TRANSITION, style({
  transform: "scale({{start}})"
}))], {
  params: {
    end: 1,
    middle: 1.1,
    start: 0,
    duration: 300
  }
})]);
var tuiScaleInList = trigger("tuiScaleInList", [transition("* => *", [query(":enter", [style({
  transform: "scale({{start}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "scale({{end}})"
}))])], {
  optional: true
}), query(":leave", [style({
  transform: "scale({{end}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "scale({{start}})"
}))])], {
  optional: true
})], {
  params: {
    end: 1,
    start: 0,
    duration: 300
  }
})]);
var tuiSlideIn = trigger("tuiSlideIn", [transition("* => left", [style({
  transform: "translateX(-{{start}})"
}), animate(TRANSITION, style({
  transform: "translateX({{end}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition("left => *", [style({
  transform: "translateX({{end}})"
}), animate(TRANSITION, style({
  transform: "translateX(-{{start}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition("* => right", [style({
  transform: "translateX({{start}})"
}), animate(TRANSITION, style({
  transform: "translateX({{end}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition("right => *", [style({
  transform: "translateX({{end}})"
}), animate(TRANSITION, style({
  transform: "translateX({{start}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInLeft = trigger("tuiSlideInLeft", [transition(":enter", [style({
  transform: "translateX(-{{start}})"
}), animate(TRANSITION, style({
  transform: "translateX({{end}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translateX({{end}})"
}), animate(TRANSITION, style({
  transform: "translateX(-{{start}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInLeftList = trigger("tuiSlideInLeftList", [transition("* => *", [query(":enter", [style({
  transform: "translateX(-{{start}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateX({{end}})"
}))])], {
  optional: true
}), query(":leave", [style({
  transform: "translateX({{end}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateX(-{{start}})"
}))])], {
  optional: true
})], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInRight = trigger("tuiSlideInRight", [transition(":enter", [style({
  transform: "translateX({{start}})"
}), animate(TRANSITION, style({
  transform: "translateX({{end}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translateX({{end}})"
}), animate(TRANSITION, style({
  transform: "translateX({{start}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInRightList = trigger("tuiSlideInRightList", [transition("* => *", [query(":enter", [style({
  transform: "translateX({{start}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateX({{end}})"
}))])], {
  optional: true
}), query(":leave", [style({
  transform: "translateX({{end}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateX({{start}})"
}))])], {
  optional: true
})], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInTop = trigger("tuiSlideInTop", [transition(":enter", [style({
  transform: "translate3d(0,{{start}},0)",
  pointerEvents: "none"
}), animate(TRANSITION, style({
  transform: "translate3d(0,{{end}},0)"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translate3d(0,{{end}},0)"
}), animate(TRANSITION, style({
  transform: "translate3d(0,{{start}},0)"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInTopList = trigger("tuiSlideInTopList", [transition("* => *", [query(":enter", [style({
  transform: "translateY({{start}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateY({{end}})"
}))])], {
  optional: true
}), query(":leave", [style({
  transform: "translateY({{end}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateY({{start}})"
}))])], {
  optional: true
})], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInBottom = trigger("tuiSlideInBottom", [transition(":enter", [style({
  transform: "translateY(-{{start}})"
}), animate(TRANSITION, style({
  transform: "translateY({{end}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translateY({{end}})"
}), animate(TRANSITION, style({
  transform: "translateY(-{{start}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInBottomList = trigger("tuiSlideInBottomList", [transition("* => *", [query(":enter", [style({
  transform: "translateY(-{{start}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateY({{end}})"
}))])], {
  optional: true
}), query(":leave", [style({
  transform: "translateY({{end}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateY(-{{start}})"
}))])], {
  optional: true
})], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-expand.mjs
var _c0 = ["wrapper"];
var _c1 = ["*"];
function TuiExpandComponent_ng_container_2_tui_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tui-loader", 4);
    \u0275\u0275elementContainer(1, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("overlay", true)("showLoader", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.content);
  }
}
function TuiExpandComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275projection(1);
    \u0275\u0275template(2, TuiExpandComponent_ng_container_2_tui_loader_2_Template, 2, 3, "tui-loader", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.async)("ngIfElse", ctx_r0.content);
  }
}
var _TuiExpandContent = class _TuiExpandContent {
};
_TuiExpandContent.\u0275fac = function TuiExpandContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiExpandContent)();
};
_TuiExpandContent.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiExpandContent,
  selectors: [["", "tuiExpandContent", ""]]
});
var TuiExpandContent = _TuiExpandContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiExpandContent, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiExpandContent]"
    }]
  }], null, null);
})();
var State = {
  Idle: 0,
  Loading: 1,
  Prepared: 2,
  Animated: 3
};
var LOADER_HEIGHT = 48;
var TUI_EXPAND_LOADED = "tui-expand-loaded";
var _TuiExpandComponent = class _TuiExpandComponent {
  constructor() {
    this.cdr = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.state = State.Idle;
    this.content = null;
    this.expanded = null;
    this.async = false;
  }
  set expandedSetter(expanded) {
    if (this.expanded === null) {
      this.expanded = expanded;
      return;
    }
    if (this.state !== State.Idle) {
      this.expanded = expanded;
      this.state = State.Animated;
      return;
    }
    this.expanded = expanded;
    this.retrigger(this.async && expanded ? State.Loading : State.Animated);
  }
  get contentVisible() {
    return this.expanded || this.state !== State.Idle;
  }
  get overflow() {
    return this.state !== State.Idle;
  }
  get loading() {
    return !!this.expanded && this.async && this.state === State.Loading;
  }
  get height() {
    const {
      expanded,
      state: state2,
      contentWrapper
    } = this;
    if (expanded && state2 === State.Prepared || !expanded && state2 === State.Animated) {
      return 0;
    }
    if (contentWrapper && (!expanded && state2 === State.Prepared || expanded && state2 === State.Animated)) {
      return contentWrapper.nativeElement.offsetHeight;
    }
    if (contentWrapper && expanded && state2 === State.Loading) {
      return Math.max(contentWrapper.nativeElement.offsetHeight, LOADER_HEIGHT);
    }
    return null;
  }
  onTransitionEnd({
    propertyName,
    pseudoElement
  }) {
    if (propertyName === "opacity" && !pseudoElement && this.state === State.Animated) {
      this.state = State.Idle;
    }
  }
  onExpandLoaded(event) {
    event.stopPropagation();
    if (this.state === State.Loading) {
      this.retrigger(State.Animated);
    }
  }
  retrigger(state2) {
    this.state = State.Prepared;
    timer(0).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (this.state !== State.Prepared) {
        return;
      }
      this.state = state2;
      this.cdr.markForCheck();
    });
  }
};
_TuiExpandComponent.\u0275fac = function TuiExpandComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiExpandComponent)();
};
_TuiExpandComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiExpandComponent,
  selectors: [["tui-expand"]],
  contentQueries: function TuiExpandComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, TuiExpandContent, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
    }
  },
  viewQuery: function TuiExpandComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentWrapper = _t.first);
    }
  },
  hostVars: 9,
  hostBindings: function TuiExpandComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("transitionend.self", function TuiExpandComponent_transitionend_self_HostBindingHandler($event) {
        return ctx.onTransitionEnd($event);
      })("tui-expand-loaded", function TuiExpandComponent_tui_expand_loaded_HostBindingHandler($event) {
        return ctx.onExpandLoaded($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-expanded", ctx.expanded);
      \u0275\u0275styleProp("height", ctx.height, "px");
      \u0275\u0275classProp("_loading", ctx.loading)("_overflow", ctx.overflow)("_expanded", ctx.expanded);
    }
  },
  inputs: {
    async: "async",
    expandedSetter: [0, "expanded", "expandedSetter"]
  },
  ngContentSelectors: _c1,
  decls: 3,
  vars: 3,
  consts: [["wrapper", ""], [1, "t-wrapper"], [4, "ngIf"], ["size", "l", 3, "overlay", "showLoader", 4, "ngIf", "ngIfElse"], ["size", "l", 3, "overlay", "showLoader"], [3, "ngTemplateOutlet"]],
  template: function TuiExpandComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, TuiExpandComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("@tuiParentAnimation", void 0)("@.disabled", ctx.overflow);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.contentVisible);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, TuiLoader],
  styles: ['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],
  data: {
    animation: [tuiParentAnimation]
  },
  changeDetection: 0
});
var TuiExpandComponent = _TuiExpandComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiExpandComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-expand",
      imports: [NgIf, NgTemplateOutlet, TuiLoader],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiParentAnimation],
      host: {
        "[style.height.px]": "height",
        "[class._loading]": "loading",
        "[class._overflow]": "overflow",
        "[class._expanded]": "expanded",
        "[attr.aria-expanded]": "expanded",
        "(transitionend.self)": "onTransitionEnd($event)",
        [`(${TUI_EXPAND_LOADED})`]: "onExpandLoaded($event)"
      },
      template: '<div\n    #wrapper\n    class="t-wrapper"\n    @tuiParentAnimation\n    [@.disabled]="overflow"\n>\n    <ng-container *ngIf="contentVisible">\n        <ng-content />\n        <tui-loader\n            *ngIf="async; else content"\n            size="l"\n            [overlay]="true"\n            [showLoader]="loading"\n        >\n            <ng-container [ngTemplateOutlet]="content" />\n        </tui-loader>\n    </ng-container>\n</div>\n',
      styles: [':host{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}:host._overflow{overflow:hidden}:host._expanded{opacity:1}:host._loading{opacity:.99}.t-wrapper:before,.t-wrapper:after{content:"";display:table}\n']
    }]
  }], null, {
    contentWrapper: [{
      type: ViewChild,
      args: ["wrapper"]
    }],
    content: [{
      type: ContentChild,
      args: [TuiExpandContent, {
        read: TemplateRef
      }]
    }],
    async: [{
      type: Input
    }],
    expandedSetter: [{
      type: Input,
      args: ["expanded"]
    }]
  });
})();
var TuiExpand = [TuiExpandComponent, TuiExpandContent];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-accordion.mjs
var _c02 = ["*", [["", "tuiAccordionItemContent", "", 5, "ng-template"]]];
var _c12 = ["*", "[tuiAccordionItemContent]:not(ng-template)"];
function TuiAccordionItem_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "tui-icon", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("tuiChevron", ctx_r0.open);
  }
}
function TuiAccordionItem_ng_template_6_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", text_r2, " ");
  }
}
function TuiAccordionItem_ng_template_6_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, TuiAccordionItem_ng_template_6_div_0_ng_container_1_Template, 2, 1, "ng-container", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("polymorpheusOutlet", ctx_r0.lazyContent);
  }
}
function TuiAccordionItem_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TuiAccordionItem_ng_template_6_div_0_Template, 2, 1, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.lazyContent);
  }
}
function TuiAccordionItem_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
}
var _TuiAccordionItemContent = class _TuiAccordionItemContent extends PolymorpheusTemplate {
};
_TuiAccordionItemContent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TuiAccordionItemContent_BaseFactory;
  return function TuiAccordionItemContent_Factory(__ngFactoryType__) {
    return (\u0275TuiAccordionItemContent_BaseFactory || (\u0275TuiAccordionItemContent_BaseFactory = \u0275\u0275getInheritedFactory(_TuiAccordionItemContent)))(__ngFactoryType__ || _TuiAccordionItemContent);
  };
})();
_TuiAccordionItemContent.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiAccordionItemContent,
  selectors: [["ng-template", "tuiAccordionItemContent", ""]],
  features: [\u0275\u0275InheritDefinitionFeature]
});
var TuiAccordionItemContent = _TuiAccordionItemContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAccordionItemContent, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiAccordionItemContent]"
    }]
  }], null, null);
})();
var _TuiAccordionItemEagerContent = class _TuiAccordionItemEagerContent {
};
_TuiAccordionItemEagerContent.\u0275fac = function TuiAccordionItemEagerContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAccordionItemEagerContent)();
};
_TuiAccordionItemEagerContent.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiAccordionItemEagerContent,
  selectors: [["", "tuiAccordionItemContent", "", 5, "ng-template"]]
});
var TuiAccordionItemEagerContent = _TuiAccordionItemEagerContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAccordionItemEagerContent, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAccordionItemContent]:not(ng-template)"
    }]
  }], null, null);
})();
var _TuiAccordionItem = class _TuiAccordionItem {
  constructor() {
    this.cdr = inject(ChangeDetectorRef);
    this.noPadding = false;
    this.showArrow = true;
    this.borders = "all";
    this.size = "m";
    this.disabled = false;
    this.disableHover = false;
    this.open = false;
    this.async = false;
    this.openChange = new EventEmitter();
  }
  close() {
    this.updateOpen(false);
    this.cdr.markForCheck();
  }
  onRowToggle() {
    if (!this.disabled) {
      this.updateOpen(!this.open);
    }
  }
  onItemKeyDownEsc(event) {
    if (!this.open) {
      return;
    }
    event.stopPropagation();
    this.updateOpen(false);
  }
  updateOpen(open) {
    if (this.open === open) {
      return;
    }
    this.open = open;
    this.openChange.emit(open);
  }
};
_TuiAccordionItem.\u0275fac = function TuiAccordionItem_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAccordionItem)();
};
_TuiAccordionItem.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TuiAccordionItem,
  selectors: [["tui-accordion-item"]],
  contentQueries: function TuiAccordionItem_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, TuiAccordionItemEagerContent, 5);
      \u0275\u0275contentQuery(dirIndex, TuiAccordionItemContent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.eagerContent = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lazyContent = _t.first);
    }
  },
  hostVars: 8,
  hostBindings: function TuiAccordionItem_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-borders", ctx.borders)("data-size", ctx.size);
      \u0275\u0275classProp("_no-padding", ctx.noPadding)("_has-arrow", ctx.showArrow)("_disabled", ctx.disabled);
    }
  },
  inputs: {
    noPadding: "noPadding",
    showArrow: "showArrow",
    borders: "borders",
    size: "size",
    disabled: "disabled",
    disableHover: "disableHover",
    open: "open",
    async: "async"
  },
  outputs: {
    openChange: "openChange"
  },
  ngContentSelectors: _c12,
  decls: 8,
  vars: 9,
  consts: [["automation-id", "tui-accordion__item-wrapper", 1, "t-wrapper"], ["automation-id", "tui-accordion__item-header", "type", "button", 1, "t-header", 3, "click", "keydown.esc", "disabled"], ["automation-id", "tui-accordion__item-title", 1, "t-title"], [4, "ngIf"], [3, "async", "expanded"], ["tuiExpandContent", ""], ["class", "t-content", 4, "ngIf"], [1, "t-icon", 3, "tuiChevron"], ["automation-id", "tui-accordion__item-content", "class", "t-content", 4, "ngIf"], ["automation-id", "tui-accordion__item-content", 1, "t-content"], [4, "polymorpheusOutlet"], [1, "t-content"]],
  template: function TuiAccordionItem_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c02);
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function TuiAccordionItem_Template_button_click_1_listener() {
        return ctx.onRowToggle();
      })("keydown.esc", function TuiAccordionItem_Template_button_keydown_esc_1_listener($event) {
        return ctx.onItemKeyDownEsc($event);
      });
      \u0275\u0275elementStart(2, "span", 2);
      \u0275\u0275projection(3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, TuiAccordionItem_ng_container_4_Template, 2, 1, "ng-container", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "tui-expand", 4);
      \u0275\u0275template(6, TuiAccordionItem_ng_template_6_Template, 1, 1, "ng-template", 5)(7, TuiAccordionItem_div_7_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("t-header_hoverable", !ctx.disableHover)("t-header_open", ctx.open);
      \u0275\u0275property("disabled", ctx.disabled);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showArrow);
      \u0275\u0275advance();
      \u0275\u0275property("async", ctx.async)("expanded", ctx.open);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.eagerContent);
    }
  },
  dependencies: [NgIf, PolymorpheusOutlet, TuiChevron, TuiExpandComponent, TuiExpandContent, TuiIcon],
  styles: ['[_nghost-%COMP%]{position:relative;display:block;overflow:hidden;border-radius:var(--tui-radius-l)}[data-borders=top-bottom][_nghost-%COMP%]{border-radius:0!important}  tui-accordion{inline-size:100%}.t-wrapper[_ngcontent-%COMP%]{position:relative;border-radius:inherit}.t-wrapper[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";box-sizing:border-box;border-radius:inherit;border:1px solid var(--tui-border-normal);pointer-events:none}[_nghost-%COMP%]:not([data-borders])   .t-wrapper[_ngcontent-%COMP%]:after{border-width:0}[data-borders=all][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-width:1px}[data-borders=top-bottom][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-inline-start-width:0;border-inline-end-width:0}[data-borders=top][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-inline-start-width:0;border-inline-end-width:0;border-block-end-width:0}[data-borders=bottom][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-inline-start-width:0;border-inline-end-width:0;border-block-start-width:0}.t-header[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;inline-size:100%;font:var(--tui-font-text-l);align-items:center;box-sizing:border-box;border-block-end:1px solid var(--tui-border-normal);min-block-size:var(--tui-height-l);padding:.75rem 1.25rem;color:var(--tui-text-primary);cursor:pointer;text-align:start;outline:none}.t-header[_ngcontent-%COMP%]:focus-visible{box-shadow:inset 0 0 0 2px var(--tui-border-focus)}[_nghost-%COMP%]:not([data-borders])   .t-header[_ngcontent-%COMP%]{border-block-end-width:0}._has-arrow[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{padding-inline-end:.75rem}[tuiTheme="dark"][_nghost-%COMP%]   .t-header_open[_ngcontent-%COMP%], [tuiTheme="dark"]   [_nghost-%COMP%]   .t-header_open[_ngcontent-%COMP%]{background:var(--tui-background-neutral-1)}[data-size=s][_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{font:var(--tui-font-text-m);min-block-size:var(--tui-height-m);padding:.625rem .75rem .625rem 1rem}._no-padding[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{padding-inline-start:0;padding-inline-end:0}._disabled[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{cursor:default}.t-wrapper[_ngcontent-%COMP%]:hover > .t-header_hoverable[_ngcontent-%COMP%]{background:var(--tui-background-base-alt)}.t-title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-inline-end:0;flex-grow:1}._has-arrow[_nghost-%COMP%]   .t-title[_ngcontent-%COMP%]{margin-inline-end:.5rem}.t-icon[_ngcontent-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-inline-start:auto;border-width:.25rem;color:var(--tui-text-tertiary)}[_nghost-%COMP%]:hover   .t-icon[_ngcontent-%COMP%]{color:var(--tui-text-secondary)}.t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-m);padding:1.25rem;overflow-wrap:break-word}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-s);padding:1rem}'],
  changeDetection: 0
});
var TuiAccordionItem = _TuiAccordionItem;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAccordionItem, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-accordion-item",
      imports: [NgIf, PolymorpheusOutlet, TuiChevron, TuiExpand, TuiIcon],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._no-padding]": "noPadding",
        "[class._has-arrow]": "showArrow",
        "[attr.data-borders]": "borders",
        "[attr.data-size]": "size",
        "[class._disabled]": "disabled"
      },
      template: '<div\n    automation-id="tui-accordion__item-wrapper"\n    class="t-wrapper"\n>\n    <button\n        automation-id="tui-accordion__item-header"\n        type="button"\n        class="t-header"\n        [class.t-header_hoverable]="!disableHover"\n        [class.t-header_open]="open"\n        [disabled]="disabled"\n        (click)="onRowToggle()"\n        (keydown.esc)="onItemKeyDownEsc($event)"\n    >\n        <span\n            automation-id="tui-accordion__item-title"\n            class="t-title"\n        >\n            <ng-content />\n        </span>\n        <ng-container *ngIf="showArrow">\n            <tui-icon\n                class="t-icon"\n                [tuiChevron]="open"\n            />\n        </ng-container>\n    </button>\n    <tui-expand\n        [async]="async"\n        [expanded]="open"\n    >\n        <ng-template tuiExpandContent>\n            <div\n                *ngIf="lazyContent"\n                automation-id="tui-accordion__item-content"\n                class="t-content"\n            >\n                <ng-container *polymorpheusOutlet="lazyContent as text">\n                    {{ text }}\n                </ng-container>\n            </div>\n        </ng-template>\n        <div\n            *ngIf="eagerContent"\n            class="t-content"\n        >\n            <ng-content select="[tuiAccordionItemContent]:not(ng-template)" />\n        </div>\n    </tui-expand>\n</div>\n',
      styles: [':host{position:relative;display:block;overflow:hidden;border-radius:var(--tui-radius-l)}:host[data-borders=top-bottom]{border-radius:0!important}::ng-deep tui-accordion{inline-size:100%}.t-wrapper{position:relative;border-radius:inherit}.t-wrapper:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";box-sizing:border-box;border-radius:inherit;border:1px solid var(--tui-border-normal);pointer-events:none}:host:not([data-borders]) .t-wrapper:after{border-width:0}:host[data-borders=all] .t-wrapper:after{border-width:1px}:host[data-borders=top-bottom] .t-wrapper:after{border-inline-start-width:0;border-inline-end-width:0}:host[data-borders=top] .t-wrapper:after{border-inline-start-width:0;border-inline-end-width:0;border-block-end-width:0}:host[data-borders=bottom] .t-wrapper:after{border-inline-start-width:0;border-inline-end-width:0;border-block-start-width:0}.t-header{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;inline-size:100%;font:var(--tui-font-text-l);align-items:center;box-sizing:border-box;border-block-end:1px solid var(--tui-border-normal);min-block-size:var(--tui-height-l);padding:.75rem 1.25rem;color:var(--tui-text-primary);cursor:pointer;text-align:start;outline:none}.t-header:focus-visible{box-shadow:inset 0 0 0 2px var(--tui-border-focus)}:host:not([data-borders]) .t-header{border-block-end-width:0}:host._has-arrow .t-header{padding-inline-end:.75rem}:host-context([tuiTheme="dark"]) .t-header_open{background:var(--tui-background-neutral-1)}:host[data-size=s] .t-header{font:var(--tui-font-text-m);min-block-size:var(--tui-height-m);padding:.625rem .75rem .625rem 1rem}:host._no-padding .t-header{padding-inline-start:0;padding-inline-end:0}:host._disabled .t-header{cursor:default}.t-wrapper:hover>.t-header_hoverable{background:var(--tui-background-base-alt)}.t-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-inline-end:0;flex-grow:1}:host._has-arrow .t-title{margin-inline-end:.5rem}.t-icon{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-inline-start:auto;border-width:.25rem;color:var(--tui-text-tertiary)}:host:hover .t-icon{color:var(--tui-text-secondary)}.t-content{font:var(--tui-font-text-m);padding:1.25rem;overflow-wrap:break-word}:host[data-size=s] .t-content{font:var(--tui-font-text-s);padding:1rem}\n']
    }]
  }], null, {
    eagerContent: [{
      type: ContentChild,
      args: [TuiAccordionItemEagerContent]
    }],
    lazyContent: [{
      type: ContentChild,
      args: [TuiAccordionItemContent]
    }],
    noPadding: [{
      type: Input
    }],
    showArrow: [{
      type: Input
    }],
    borders: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    disableHover: [{
      type: Input
    }],
    open: [{
      type: Input
    }],
    async: [{
      type: Input
    }],
    openChange: [{
      type: Output
    }]
  });
})();
var _TuiAccordionDirective = class _TuiAccordionDirective {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.accordionItems = EMPTY_QUERY;
    this.closeOthers = true;
    const group2 = inject(TuiGroup);
    group2.orientation = "vertical";
    group2.collapsed = true;
  }
  ngAfterContentInit() {
    const {
      accordionItems
    } = this;
    const rows$ = tuiQueryListChanges(accordionItems);
    const newOpenRow$ = rows$.pipe(pairwise(), map(([previous, current]) => current.find((item) => !previous.includes(item) && item.open)), filter(tuiIsPresent));
    const rowsOpen$ = merge(rows$.pipe(switchMap((rows) => merge(...rows.map((row) => row.openChange.pipe(filter(identity), map(() => row)))))), newOpenRow$).pipe(filter(() => this.closeOthers), takeUntilDestroyed(this.destroyRef));
    rowsOpen$.subscribe((currentRow) => {
      accordionItems.forEach((row) => {
        if (currentRow !== row) {
          row.close();
        }
      });
    });
  }
};
_TuiAccordionDirective.\u0275fac = function TuiAccordionDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAccordionDirective)();
};
_TuiAccordionDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TuiAccordionDirective,
  selectors: [["tui-accordion"]],
  contentQueries: function TuiAccordionDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, TuiAccordionItem, 4);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.accordionItems = _t);
    }
  },
  inputs: {
    closeOthers: "closeOthers"
  },
  features: [\u0275\u0275HostDirectivesFeature([{
    directive: TuiGroup,
    inputs: ["rounded", "rounded"]
  }])]
});
var TuiAccordionDirective = _TuiAccordionDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAccordionDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-accordion",
      hostDirectives: [{
        directive: TuiGroup,
        inputs: ["rounded"]
      }]
    }]
  }], function() {
    return [];
  }, {
    accordionItems: [{
      type: ContentChildren,
      args: [TuiAccordionItem]
    }],
    closeOthers: [{
      type: Input
    }]
  });
})();
var TuiAccordion = [TuiAccordionItem, TuiAccordionDirective, TuiAccordionItemContent, TuiAccordionItemEagerContent];

export {
  tuiSlideIn,
  TuiExpandContent,
  TuiExpandComponent,
  TuiExpand,
  TuiAccordionItemContent,
  TuiAccordionItem,
  TuiAccordionDirective,
  TuiAccordion
};
/*! Bundled license information:

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v19.2.20
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-VQYWSL72.js.map
