import{a as P}from"./chunk-ON2BYLD7.js";import{Da as _,ia as a}from"./chunk-DI2PAH47.js";import"./chunk-IXCNST3X.js";import"./chunk-Y3GTPVDQ.js";import"./chunk-5P6M7AG6.js";import"./chunk-4TE6JQPI.js";import"./chunk-ALDCD2CE.js";import"./chunk-7WLUGAMR.js";import"./chunk-2L6PGUB4.js";import"./chunk-BJEURQBJ.js";import"./chunk-OVY7HHPR.js";import"./chunk-NXI67OSZ.js";import"./chunk-SZCYQHZF.js";import"./chunk-4AYRELCE.js";import"./chunk-2PBT5O22.js";import"./chunk-H3VP2PG7.js";import"./chunk-NHD6JZYY.js";import"./chunk-GIZRMZ4J.js";import{o as H,u as I}from"./chunk-FKFSL4YW.js";import"./chunk-DL57BBAR.js";import"./chunk-53QIQE3Q.js";import"./chunk-J6Y2JIJT.js";import"./chunk-AKQL2QW4.js";import"./chunk-WOOEGTSY.js";import"./chunk-5CQAAHX4.js";import{c as L}from"./chunk-DZPGTOC5.js";import"./chunk-VRUACGXF.js";import"./chunk-QFIUTIP5.js";import{C as S,D as F,a as x,n as b,r as k,u as M,v as E,z as D}from"./chunk-KVPPRISO.js";import{$b as r,Cc as C,Fb as y,Ha as g,K as u,Sb as d,Tb as h,ac as n,h as p,hc as w,pb as s,pc as T,qa as c,qc as v,sc as m,yb as f}from"./chunk-DN443EC3.js";import"./chunk-BVLC2FPK.js";import"./chunk-TVUBNCFE.js";import"./chunk-JQ5FK4DL.js";import"./chunk-GMDFGGV4.js";import"./chunk-DAQOROHW.js";var O=`# h1 Heading \u{1F60E}

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

----

![image info](./assets/icons/logo.svg)

More at [documentation](https://taiga-ui.dev)
`,o=class o{constructor(){this.wysiwyg=f.required(a);this.destroyRef=c(g);this.markdown$=new p;this.builtInTools=[L.Undo];this.control=new M(O)}ngOnInit(){this.markdown$.pipe(u(500),x(this.destroyRef)).subscribe(t=>{this.editor?.commands.setContent(t)})}get editor(){return this.wysiwyg().editorService.getOriginTiptapEditor()}get markdown(){return this.editor?.storage.markdown.getMarkdown()??""}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=y({type:o,selectors:[["ng-component"]],viewQuery:function(e,i){e&1&&T(i.wysiwyg,a,5),e&2&&v()},features:[C([_({image:!0},async()=>import("./chunk-MH2S7XV4.js").then(({TuiMarkdown:t})=>t.configure({html:!0,tightLists:!0,tightListClass:"tight",bulletListMarker:"-",linkify:!0,breaks:!0,transformPastedText:!0,transformCopiedText:!0})))])],decls:6,vars:5,consts:[[3,"formControl","tools"],[1,"tui-space_top-5"],["tuiLabel",""],["tuiTextarea","",3,"ngModelChange","ngModel"]],template:function(e,i){e&1&&(r(0,"tui-editor",0),m(1,` Placeholder
`),n(),r(2,"tui-textfield",1)(3,"label",2),m(4,"Markdown"),n(),r(5,"textarea",3),w("ngModelChange",function(N){return i.markdown$.next(N)}),n()()),e&2&&(d("formControl",i.control)("tools",i.builtInTools),s(2),h("min-height",30,"rem"),s(3),d("ngModel",i.markdown))},dependencies:[S,b,k,E,F,D,a,P,H,I],encapsulation:2,changeDetection:0});var l=o;export{l as default};
