import {
  TuiAccordion,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand
} from "./chunk-TMAIJMJG.js";
import {
  TuiEditor,
  TuiEditorSocket,
  provideTuiEditor
} from "./chunk-7F4Z4OEH.js";
import "./chunk-BTUNPS36.js";
import "./chunk-EP2JXLAZ.js";
import "./chunk-FQFMIA7P.js";
import "./chunk-ENNG77OY.js";
import "./chunk-4KQC5VQM.js";
import "./chunk-PJJ4EG5U.js";
import "./chunk-LR6MFXG2.js";
import "./chunk-N3XZP6Z7.js";
import "./chunk-6JDH2PV3.js";
import "./chunk-7QK2CPSE.js";
import "./chunk-WBHAP4JC.js";
import "./chunk-X3PSOWX2.js";
import "./chunk-E3TKWIMT.js";
import "./chunk-HSMAYE7Z.js";
import "./chunk-ARYGUNWN.js";
import "./chunk-3L6ILX4W.js";
import "./chunk-M6TSJ4NT.js";
import "./chunk-BAXR2EDS.js";
import "./chunk-3MA5NXQZ.js";
import "./chunk-IG5NUA4T.js";
import "./chunk-LPOWL4X5.js";
import "./chunk-RURN6JQY.js";
import "./chunk-QOV567V2.js";
import "./chunk-UFW7RGXF.js";
import "./chunk-X7NG6AFM.js";
import "./chunk-KABZ5ZTT.js";
import "./chunk-RR2HWU3Q.js";
import "./chunk-ZL2NLOVI.js";
import "./chunk-WQSN4Q62.js";
import "./chunk-F47ZTIMH.js";
import "./chunk-H6B6ZN6C.js";
import "./chunk-VCEUECWR.js";
import "./chunk-EHYODUHD.js";
import "./chunk-K3KVBV5Y.js";
import "./chunk-7Q3SE4QU.js";
import {
  TuiItem
} from "./chunk-EQTN4WLW.js";
import {
  TUI_IS_E2E
} from "./chunk-QA7BIT47.js";
import "./chunk-GJ4XEV4D.js";
import "./chunk-AHSN3FX6.js";
import "./chunk-6UFFMEMO.js";
import "./chunk-2X7NNA2Q.js";
import {
  TuiEditorTool
} from "./chunk-AJIK2DF5.js";
import "./chunk-RDIT4KNC.js";
import "./chunk-Z64UTBP3.js";
import "./chunk-LBJNUVBM.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-P325F6NW.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-MN3TG6GQ.js";
import "./chunk-CJ7OSSQR.js";
import "./chunk-TPMK677Z.js";
import "./chunk-Q6WMBPZ3.js";
import "./chunk-IN2LCJCD.js";
import "./chunk-G3QJNC4B.js";
import "./chunk-U65UEYRO.js";
import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/anchors/examples/1/index.ts
function Example_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "tui-editor-socket", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("content", ctx_r0.control.value);
  }
}
function Example_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.control.value);
  }
}
var _Example = class _Example {
  constructor() {
    this.builtInTools = [
      TuiEditorTool.Undo,
      TuiEditorTool.Img,
      TuiEditorTool.Link,
      TuiEditorTool.Anchor
    ];
    this.isE2E = inject(TUI_IS_E2E);
    this.control = new FormControl(`<p><strong><em>War and Peace</em></strong> (<a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Russian_language">Russian</a>: \u0412\u043E\u0439\u043D\u0430 \u0438 \u043C\u0438\u0440, <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Romanization_of_Russian">romanized</a>:&nbsp;<em>Voyna i mir</em>; <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Reforms_of_Russian_orthography">pre-reform Russian</a>: <strong>\u0412\u043E\u0439\u043D\u0430 \u0438 \u043C\u0438\u0440\u044A</strong>; <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Help:IPA/Russian">[v\u0250j\u02C8na i \u02C8m\u02B2ir]</a>) is a literary work by the Russian author <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Leo_Tolstoy">Leo Tolstoy</a> that mixes fictional narrative with chapters on history and philosophy. It was first published serially, then published in its entirety in 1869. It is regarded as Tolstoy's finest literary achievement and remains an internationally praised classic of <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/World_literature">world literature</a>.<a target="_blank" rel="noopener noreferrer nofollow" href="#moser">[1]</a><a target="_blank" rel="noopener noreferrer nofollow" href="#thirlwell">[2]</a><a target="_blank" rel="noopener noreferrer nofollow" href="#briggs">[3]</a></p><p>The novel chronicles the <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/French_invasion_of_Russia">French invasion of Russia</a> and the impact of the <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Napoleonic_era">Napoleonic era</a> on <a target="_blank" rel="noopener noreferrer nofollow" class="my-custom-class mw-redirect" href="https://en.wikipedia.org/wiki/Tsarist">Tsarist</a> society through the stories of five Russian <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Aristocracy_(class)">aristocratic</a> families. Portions of an earlier version, titled <em>The Year 1805</em>,<a target="_blank" rel="noopener noreferrer nofollow" href="#introduction">[4] </a>were serialized in <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/The_Russian_Messenger"><em>The Russian Messenger</em></a> from 1865 to 1867 before the novel was published in its entirety in 1869.<a target="_blank" rel="noopener noreferrer nofollow" href="#knowles">[5]</a></p><p>Tolstoy said that the best <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Russian_literature">Russian literature</a> does not conform to standards and hence hesitated to classify <em>War and Peace</em>, saying it is "not a novel, even less is it a poem, and still less a historical chronicle". Large sections, especially the later chapters, are philosophical discussions rather than narrative.<a target="_blank" rel="noopener noreferrer nofollow" href="#war">[6]</a> He regarded <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Anna_Karenina"><em>Anna Karenina</em></a> as his first true novel.</p><p></p><img src="./assets/images/piece-and-war.jpg" width="732" alt="" title="" /><p></p><p><strong>References</strong>:</p><ol><li><p><a data-type="jump-anchor" id="moser">Moser</a>, Charles. 1992. <em>Encyclopedia of Russian Literature</em>. Cambridge University Press, pp. 298\u2013300.</p></li><li><p><a data-type="jump-anchor" id="thirlwell">Thirlwell</a>, Adam <a target="_blank" rel="noopener noreferrer nofollow" class="external text" href="https://www.theguardian.com/books/2005/oct/08/classics.leonikolaevichtolstoy">"A masterpiece in miniature"</a>. <em>The Guardian</em> (London, UK) October 8, 2005</p></li><li><p><a data-type="jump-anchor" id="briggs">Briggs</a>, Anthony. 2005. "Introduction" to <em>War and Peace</em>. Penguin Classics.</p><p></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Richard_Pevear_and_Larissa_Volokhonsky">Pevear, Richard</a> (2008). "<a data-type="jump-anchor" id="introduction">Introduction</a>". <a target="_blank" rel="noopener noreferrer nofollow" class="external text" href="https://archive.org/details/warpeace00tols_1"><em>War and Peace</em></a>. Trans. Pevear; <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Richard_Pevear_and_Larissa_Volokhonsky">Volokhonsky, Larissa</a>. New York: Vintage Books. pp.&nbsp;VIII\u2013IX. <a target="_blank" rel="noopener noreferrer nofollow" class="mw-redirect" href="https://en.wikipedia.org/wiki/ISBN_(identifier)">ISBN</a>&nbsp;<a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Special:BookSources/978-1-4000-7998-8">978-1-4000-7998-8</a>.</p><p></p></li><li><p><a data-type="jump-anchor" id="knowles">Knowles</a>, A. V. <em>Leo Tolstoy</em>, Routledge 1997.</p><p></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" class="external text" href="https://books.google.com/books?id=c4HEAN-ti1MC&amp;pg=PR10">"Introduction?"</a>. <a data-type="jump-anchor" id="war"><em>War and Peace</em></a>. Wordsworth Editions. 1993. <a target="_blank" rel="noopener noreferrer nofollow" class="mw-redirect" href="https://en.wikipedia.org/wiki/ISBN_(identifier)">ISBN</a>&nbsp;<a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Special:BookSources/978-1-85326-062-9">978-1-85326-062-9</a>. Retrieved 2009-03-24.</p></li></ol>`);
  }
};
_Example.\u0275fac = function Example_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Example)();
};
_Example.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Example, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([provideTuiEditor({ image: true })])], decls: 10, vars: 5, consts: [[1, "editor", 3, "formControl", "tools"], [3, "closeOthers"], [3, "tuiAccordion"], [4, "tuiItem"], [3, "content"], [1, "code"]], template: function Example_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tui-editor", 0);
    \u0275\u0275elementStart(1, "tui-accordion", 1)(2, "button", 2);
    \u0275\u0275text(3, "HTML");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "tui-expand");
    \u0275\u0275template(5, Example_ng_container_5_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 2);
    \u0275\u0275text(7, "Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tui-expand");
    \u0275\u0275template(9, Example_ng_container_9_Template, 3, 1, "ng-container", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("formControl", ctx.control)("tools", ctx.builtInTools);
    \u0275\u0275advance();
    \u0275\u0275property("closeOthers", false);
    \u0275\u0275advance();
    \u0275\u0275property("tuiAccordion", ctx.isE2E);
    \u0275\u0275advance(4);
    \u0275\u0275property("tuiAccordion", ctx.isE2E);
  }
}, dependencies: [
  ReactiveFormsModule,
  NgControlStatus,
  FormControlDirective,
  TuiAccordionComponent,
  TuiAccordionDirective,
  TuiExpand,
  TuiItem,
  TuiEditor,
  TuiEditorSocket
], encapsulation: 2, changeDetection: 0 });
var Example = _Example;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Example, [{
    type: Component,
    args: [{ imports: [
      ReactiveFormsModule,
      TuiAccordion,
      TuiEditor,
      TuiEditorSocket,
      TuiExpand,
      TuiItem
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideTuiEditor({ image: true })], template: '<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n/>\n\n<tui-accordion [closeOthers]="false">\n    <button [tuiAccordion]="isE2E">HTML</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <tui-editor-socket [content]="control.value" />\n        </ng-container>\n    </tui-expand>\n\n    <button [tuiAccordion]="isE2E">Text</button>\n    <tui-expand>\n        <ng-container *tuiItem>\n            <span class="code">{{ control.value }}</span>\n        </ng-container>\n    </tui-expand>\n</tui-accordion>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Example, { className: "Example", filePath: "projects/demo/src/app/pages/anchors/examples/1/index.ts", lineNumber: 25 });
})();
export {
  Example as default
};
//# sourceMappingURL=chunk-3YHAWTHV.js.map
