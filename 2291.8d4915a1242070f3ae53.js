(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[2291],{2291:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiEditorEmbedIframeModule:()=>E});var o=n(12057),i=n(24751),r=n(34016),s=n(47029),l=n(42600),a=n(43232),u=n(37195),d=n(74788),c=n(15997),p=n(73460),m=n(42328),f=n(97582),h=n(91211),b=n(8820),g=n(98778),Z=n(16331),v=n(18289),w=n(55788),y=n(36866);const _=["dropdown"];function A(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"div",4),d.TgZ(1,"label",5),d.TgZ(2,"div",6),d._uU(3,"Embed URL"),d.qZA(),d.TgZ(4,"div",7),d.TgZ(5,"tui-input-inline",8),d.NdJ("ngModelChange",(function(t){return d.CHM(e),d.oxw().url=t}))("keydown.enter",(function(){d.CHM(e);const t=d.oxw();return t.embedSource(t.url)})),d._uU(6),d.qZA(),d.qZA(),d.qZA(),d.qZA()}if(2&e){const e=t.$implicit,n=d.oxw();d.Q6J("tuiActiveZoneParent",e),d.xp6(5),d.ekj("t-input_filled",n.url),d.Q6J("ngModel",n.url),d.xp6(1),d.hij(" ",n.placeholder," ")}}let T=(()=>{class e{constructor(e){this.editor=e,this.placeholder="https://my-embed.site.com/etc1235",this.url=""}embedSource(e){e&&(this.editor.setIframe({src:e}),this.url="",this.dropdown?.close())}}return e.ɵfac=function(t){return new(t||e)(d.Y36(u.$3))},e.ɵcmp=d.Xpm({type:e,selectors:[["embed-tool"]],viewQuery:function(e,t){if(1&e&&d.Gf(_,5),2&e){let e;d.iGM(e=d.CRH())&&(t.dropdown=e.first)}},decls:5,vars:3,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["appearance","icon","automation-id","embed-tool__button","icon","tuiIconCodeLarge","size","s","tuiIconButton","","type","button",1,"tool-button",3,"focusable","pseudoActive"],["youtubeDropdown",""],[1,"embed-tool-content",3,"tuiActiveZoneParent"],[1,"t-label"],[1,"t-label-properties"],[1,"t-url"],["tuiAutoFocus","",1,"t-input",3,"ngModel","ngModelChange","keydown.enter"]],template:function(e,t){if(1&e&&(d.TgZ(0,"tui-hosted-dropdown",0,1),d._UZ(2,"button",2),d.YNc(3,A,7,5,"ng-template",null,3,d.W1O),d.qZA()),2&e){const e=d.MAs(1),t=d.MAs(4);d.Q6J("content",t),d.xp6(2),d.Q6J("focusable",e.open)("pseudoActive",e.open)}},directives:[g.o,Z.Ek,v.v,w.e,y.l,i.JJ,i.On],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.embed-tool-content[_ngcontent-%COMP%]{display:flex;min-height:4rem;align-items:center;padding-right:.75rem}.t-label[_ngcontent-%COMP%]{height:var(--tui-height-l);box-sizing:border-box;padding:.4375rem 1rem;min-width:12.5rem;max-width:25rem;width:100%}.t-input[_ngcontent-%COMP%]{flex:1;color:var(--tui-text-02)}.t-input_filled[_ngcontent-%COMP%]{color:var(--tui-text-01)}"],changeDetection:0}),e})();var x=n(77825);class q{constructor(e,t){this.sanitizer=e,this.isE2E=t,this.builtInTools=[u._2.Undo],this.control=new i.NI(`\n        <p>Here is an online IDE:</p>\n        <iframe\n         src="https://codepen.io/mehdinajafi/embed/LYyqNqR?default-tab=html${this.isE2E?"":"%2Cresult"}&editable=true"\n         height="375"\n         width="100%"\n         scrolling="no"\n         frameborder="no"\n         loading="lazy"\n         allowtransparency="true"\n         data-type="iframe-editor"\n         allowfullscreen="true">\n        </iframe>\n        </iframe>\n        <p>Here is a media player:</p>\n        <iframe\n            src="https://bandcamp.com/EmbeddedPlayer/album=2219061201/size=small/bgcol=ffffff/linkcol=63b2cc/transparent=true/"\n            height="42"\n            width="100%"\n            data-type="iframe-editor">\n        </iframe>\n        <p></p>\n    `,i.kI.required)}safe(e){return this.sanitizer.bypassSecurityTrustHtml(e??"")}}q.ɵfac=function(e){return new(e||q)(d.Y36(h.H7),d.Y36(l.oDT))},q.ɵcmp=d.Xpm({type:q,selectors:[["tui-editor-embed-iframe-example-1"]],features:[d._Bn([{provide:u.Wf,deps:[d.gxx],useFactory:e=>[Promise.resolve().then(n.bind(n,90784)).then((({StarterKit:e})=>e)),Promise.resolve().then(n.bind(n,33626)).then((({createIframeEditorExtension:t})=>t(e)))]}])],decls:13,vars:4,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["src","tuiIconArrowLeft"],[3,"innerHTML"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-editor",0),d.ynx(1,1),d._UZ(2,"embed-tool",2),d.TgZ(3,"span",3),d._UZ(4,"tui-svg",4),d._uU(5," click it "),d.qZA(),d.BQk(),d.qZA(),d.TgZ(6,"h4"),d._uU(7,"HTML:"),d.qZA(),d._UZ(8,"div",5),d.TgZ(9,"h4"),d._uU(10,"Text:"),d.qZA(),d.TgZ(11,"p"),d._uU(12),d.qZA()),2&e&&(d.Q6J("formControl",t.control)("tools",t.builtInTools),d.xp6(8),d.Q6J("innerHTML",t.safe(t.control.value),d.oJD),d.xp6(4),d.Oqu(t.control.value))},directives:[b.a,i.JJ,i.oH,T,x.P],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),(0,f.gn)([l.UMq],q.prototype,"safe",null);let M=(()=>{class e{constructor(){this.example1={HTML:n.e(3270).then(n.t.bind(n,43270,17)),TypeScript:n.e(3878).then(n.t.bind(n,63878,17)),LESS:n.e(2889).then(n.t.bind(n,92889,17)),"embed-tool/embed-tool.component.ts":n.e(6949).then(n.t.bind(n,76949,17)),"embed-tool/embed-tool.template.html":n.e(8275).then(n.t.bind(n,58275,17)),"embed-tool/embed-tool.styles.less":n.e(6530).then(n.t.bind(n,26530,17)),"embed-tool/embed-tool.module.ts":n.e(7703).then(n.t.bind(n,7703,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["editor-embed-iframe"]],features:[d._Bn([{provide:u.Wf,useValue:u.PD}])],decls:11,vars:1,consts:[["header","Editor","type","components"],["href","https://www.tiptap.dev/","tuiLink",""],["fragment","sanitizer","routerLink","/icons/bundled","tuiLink",""],["id","iframe","heading","Resizable iframe",3,"content"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-doc-page",0),d.TgZ(1,"p"),d._uU(2," Rich Text Editor based on "),d.TgZ(3,"a",1),d._uU(4," TipTap Editor "),d.qZA(),d._uU(5," for using with Angular forms. For safety reasons use a "),d.TgZ(6,"a",2),d._uU(7," sanitizer "),d.qZA(),d._uU(8," with this component. "),d.qZA(),d.TgZ(9,"tui-doc-example",3),d._UZ(10,"tui-editor-embed-iframe-example-1"),d.qZA(),d.qZA()),2&e&&(d.xp6(9),d.Q6J("content",t.example1))},directives:[c.q,p.V,r.yS,m.f,q],encapsulation:2,changeDetection:0}),e})();var U=n(86655);let C=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=d.oAB({type:e}),e.ɵinj=d.cJS({imports:[[o.ez,a.fNO,a.jhF,l.Ah6,a.dpK,U.z$l,i.u5]]}),e})(),E=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=d.oAB({type:e}),e.ɵinj=d.cJS({imports:[[o.ez,l.Ah6,a.EIu,a.jzK,a.jhF,a.fNO,s.fV,i.u5,i.UX,u.T_,u.GK,C,r.Bz.forChild((0,s.Ve)(M))]]}),e})()}}]);