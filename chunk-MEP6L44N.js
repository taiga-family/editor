import{a as P}from"./chunk-WZQXFJRS.js";import{Da as _,ia as a}from"./chunk-N5U272QK.js";import"./chunk-SBOE65Y5.js";import"./chunk-SNUH4AOV.js";import"./chunk-M4MKLJ5X.js";import"./chunk-FELRUIV7.js";import"./chunk-LKCF5GKV.js";import"./chunk-XGTPHHTH.js";import"./chunk-EWYWD752.js";import"./chunk-SMK37PTV.js";import"./chunk-I4VRDTI4.js";import"./chunk-NZSR3CAL.js";import"./chunk-YYHRYFGD.js";import"./chunk-KBDJOIOA.js";import"./chunk-7MSEWO54.js";import"./chunk-QFXPZ7U5.js";import"./chunk-CHAM34MP.js";import"./chunk-5BF7MNKE.js";import{o as H,u as I}from"./chunk-FQMJRYNZ.js";import"./chunk-3TKVAUT4.js";import"./chunk-KGUQFVBY.js";import"./chunk-TIWPNJCX.js";import"./chunk-QZ7HZJYC.js";import"./chunk-37EH4AC6.js";import"./chunk-BERO5W6C.js";import{c as L}from"./chunk-QRYHZ6ZG.js";import"./chunk-HAHOGPVR.js";import"./chunk-X52YA4KS.js";import{C as S,D as F,a as x,n as b,r as k,u as M,v as E,z as D}from"./chunk-77SMMHKG.js";import{$b as n,Bc as C,Eb as y,Ha as g,K as u,Rb as d,Sb as h,_b as r,gc as w,h as p,oc as T,pb as s,pc as v,qa as c,rc as m,xb as f}from"./chunk-SWLXYIRQ.js";import"./chunk-BFKBIB36.js";import"./chunk-LPOGFM6N.js";import"./chunk-DUYY2UWQ.js";import"./chunk-RHWM3AIW.js";import"./chunk-DAQOROHW.js";var O=`# h1 Heading \u{1F60E}

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

----

![image info](./assets/icons/logo.svg)

More at [documentation](https://taiga-ui.dev)
`,o=class o{constructor(){this.wysiwyg=f.required(a);this.destroyRef=c(g);this.markdown$=new p;this.builtInTools=[L.Undo];this.control=new M(O)}ngOnInit(){this.markdown$.pipe(u(500),x(this.destroyRef)).subscribe(t=>{this.editor?.commands.setContent(t)})}get editor(){return this.wysiwyg().editorService.getOriginTiptapEditor()}get markdown(){return this.editor?.storage.markdown.getMarkdown()??""}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=y({type:o,selectors:[["ng-component"]],viewQuery:function(e,i){e&1&&T(i.wysiwyg,a,5),e&2&&v()},features:[C([_({image:!0},async()=>import("./chunk-3E5FUFPV.js").then(({TuiMarkdown:t})=>t.configure({html:!0,tightLists:!0,tightListClass:"tight",bulletListMarker:"-",linkify:!0,breaks:!0,transformPastedText:!0,transformCopiedText:!0})))])],decls:6,vars:5,consts:[[3,"formControl","tools"],[1,"tui-space_top-5"],["tuiLabel",""],["tuiTextarea","",3,"ngModelChange","ngModel"]],template:function(e,i){e&1&&(r(0,"tui-editor",0),m(1,` Placeholder
`),n(),r(2,"tui-textfield",1)(3,"label",2),m(4,"Markdown"),n(),r(5,"textarea",3),w("ngModelChange",function(N){return i.markdown$.next(N)}),n()()),e&2&&(d("formControl",i.control)("tools",i.builtInTools),s(2),h("min-height",30,"rem"),s(3),d("ngModel",i.markdown))},dependencies:[S,b,k,E,F,D,a,P,H,I],encapsulation:2,changeDetection:0});var l=o;export{l as default};
