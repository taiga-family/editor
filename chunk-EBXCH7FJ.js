import{a as P}from"./chunk-WZQXFJRS.js";import{Da as _,ia as a}from"./chunk-FP5CBVUF.js";import"./chunk-TC2NUU6C.js";import"./chunk-HGAWZHRE.js";import"./chunk-XCWWKCK6.js";import"./chunk-PUKKIP7H.js";import"./chunk-RAL6S7AE.js";import"./chunk-BXU5WT6I.js";import"./chunk-GGJR4VT2.js";import"./chunk-34BUDG5B.js";import"./chunk-AYB2W3XT.js";import"./chunk-CKO7WHQF.js";import"./chunk-L5QJAPJK.js";import"./chunk-ZAR3MXOZ.js";import"./chunk-FLAOKYU5.js";import"./chunk-RDFIYQ5V.js";import"./chunk-NZ4C2FV3.js";import"./chunk-HW37W3IY.js";import{o as H,u as I}from"./chunk-FQMJRYNZ.js";import"./chunk-3TKVAUT4.js";import"./chunk-KGUQFVBY.js";import"./chunk-TIWPNJCX.js";import"./chunk-TMDSDTG4.js";import"./chunk-P7Q64IHJ.js";import"./chunk-BF7I3Z62.js";import{c as L}from"./chunk-7MVUVRM2.js";import"./chunk-NWELQLVO.js";import"./chunk-X52YA4KS.js";import{C as S,D as F,a as x,n as b,r as k,u as M,v as E,z as D}from"./chunk-77SMMHKG.js";import{$b as n,Bc as C,Eb as y,Ha as g,K as u,Rb as d,Sb as h,_b as r,gc as w,h as p,oc as T,pb as s,pc as v,qa as c,rc as m,xb as f}from"./chunk-SWLXYIRQ.js";import"./chunk-W3AMM3C2.js";import"./chunk-MS3UJI47.js";import"./chunk-LCLFYV6J.js";import"./chunk-XSAI7AEQ.js";import"./chunk-DAQOROHW.js";var O=`# h1 Heading \u{1F60E}

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

----

![image info](./assets/icons/logo.svg)

More at [documentation](https://taiga-ui.dev)
`,o=class o{constructor(){this.wysiwyg=f.required(a);this.destroyRef=c(g);this.markdown$=new p;this.builtInTools=[L.Undo];this.control=new M(O)}ngOnInit(){this.markdown$.pipe(u(500),x(this.destroyRef)).subscribe(t=>{this.editor?.commands.setContent(t)})}get editor(){return this.wysiwyg().editorService.getOriginTiptapEditor()}get markdown(){return this.editor?.storage.markdown.getMarkdown()??""}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=y({type:o,selectors:[["ng-component"]],viewQuery:function(e,i){e&1&&T(i.wysiwyg,a,5),e&2&&v()},features:[C([_({image:!0},async()=>import("./chunk-XJ5K5FEM.js").then(({TuiMarkdown:t})=>t.configure({html:!0,tightLists:!0,tightListClass:"tight",bulletListMarker:"-",linkify:!0,breaks:!0,transformPastedText:!0,transformCopiedText:!0})))])],decls:6,vars:5,consts:[[3,"formControl","tools"],[1,"tui-space_top-5"],["tuiLabel",""],["tuiTextarea","",3,"ngModelChange","ngModel"]],template:function(e,i){e&1&&(r(0,"tui-editor",0),m(1,` Placeholder
`),n(),r(2,"tui-textfield",1)(3,"label",2),m(4,"Markdown"),n(),r(5,"textarea",3),w("ngModelChange",function(N){return i.markdown$.next(N)}),n()()),e&2&&(d("formControl",i.control)("tools",i.builtInTools),s(2),h("min-height",30,"rem"),s(3),d("ngModel",i.markdown))},dependencies:[S,b,k,E,F,D,a,P,H,I],encapsulation:2,changeDetection:0});var l=o;export{l as default};
