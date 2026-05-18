import{a as P}from"./chunk-WOD3RNDK.js";import{Da as _,ia as a}from"./chunk-4GUP42VE.js";import"./chunk-CRA3EVLL.js";import"./chunk-EOXZCWXG.js";import"./chunk-3BHU57GN.js";import"./chunk-WZJNMI6U.js";import"./chunk-N6GXWN22.js";import"./chunk-O6OZMI32.js";import"./chunk-XXXJRSCF.js";import"./chunk-SUTHV2GF.js";import"./chunk-OWP6EDLN.js";import"./chunk-PFM7VN2R.js";import"./chunk-ZNKEMX6V.js";import"./chunk-MRKWWZFF.js";import"./chunk-4ZGIJKIW.js";import"./chunk-5LVXPZCN.js";import"./chunk-TUVZO5S3.js";import"./chunk-VCDFBWM5.js";import{o as H,u as I}from"./chunk-K2HP3CFK.js";import"./chunk-FRG552JC.js";import"./chunk-3Y2K4E4J.js";import"./chunk-J6Y2JIJT.js";import"./chunk-POWLEK3Z.js";import"./chunk-JAS6REP3.js";import"./chunk-QVNTEPWS.js";import{c as L}from"./chunk-BRV6YDPZ.js";import"./chunk-I3PAU7WK.js";import"./chunk-63S3NXM6.js";import{B as S,C as F,a as x,m as b,q as k,t as M,u as E,y as D}from"./chunk-3SERIUXO.js";import{$b as r,Cc as C,Fb as y,Ha as g,K as u,Sb as d,Tb as h,ac as n,h as p,hc as w,pb as s,pc as T,qa as c,qc as v,sc as m,yb as f}from"./chunk-DN443EC3.js";import"./chunk-LA7UBXK5.js";import"./chunk-WI3CTACB.js";import"./chunk-LICJJ6TA.js";import"./chunk-EKVP67QA.js";import"./chunk-DAQOROHW.js";var O=`# h1 Heading \u{1F60E}

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

----

![image info](./assets/icons/logo.svg)

More at [documentation](https://taiga-ui.dev)
`,o=class o{constructor(){this.wysiwyg=f.required(a);this.destroyRef=c(g);this.markdown$=new p;this.builtInTools=[L.Undo];this.control=new M(O)}ngOnInit(){this.markdown$.pipe(u(500),x(this.destroyRef)).subscribe(t=>{this.editor?.commands.setContent(t)})}get editor(){return this.wysiwyg().editorService.getOriginTiptapEditor()}get markdown(){return this.editor?.storage.markdown.getMarkdown()??""}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=y({type:o,selectors:[["ng-component"]],viewQuery:function(e,i){e&1&&T(i.wysiwyg,a,5),e&2&&v()},features:[C([_({image:!0},async()=>import("./chunk-SC4A2T57.js").then(({TuiMarkdown:t})=>t.configure({html:!0,tightLists:!0,tightListClass:"tight",bulletListMarker:"-",linkify:!0,breaks:!0,transformPastedText:!0,transformCopiedText:!0})))])],decls:6,vars:5,consts:[[3,"formControl","tools"],[1,"tui-space_top-5"],["tuiLabel",""],["tuiTextarea","",3,"ngModelChange","ngModel"]],template:function(e,i){e&1&&(r(0,"tui-editor",0),m(1,` Placeholder
`),n(),r(2,"tui-textfield",1)(3,"label",2),m(4,"Markdown"),n(),r(5,"textarea",3),w("ngModelChange",function(N){return i.markdown$.next(N)}),n()()),e&2&&(d("formControl",i.control)("tools",i.builtInTools),s(2),h("min-height",30,"rem"),s(3),d("ngModel",i.markdown))},dependencies:[S,b,k,E,F,D,a,P,H,I],encapsulation:2,changeDetection:0});var l=o;export{l as default};
