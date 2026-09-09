import{a as P}from"./chunk-JHNJZ5TB.js";import{Da as _,ia as a}from"./chunk-67QYHSI3.js";import"./chunk-WXXVEQ4O.js";import"./chunk-L7JAG5XX.js";import"./chunk-P43B4EGU.js";import"./chunk-QC47N5FO.js";import"./chunk-OREP5SBT.js";import"./chunk-BK2X3E6J.js";import"./chunk-AQCDVB52.js";import"./chunk-2EJ7BU4U.js";import"./chunk-ZINJYUHW.js";import"./chunk-4S5RKCJ6.js";import"./chunk-34EZVZYP.js";import"./chunk-SBXXHPE4.js";import"./chunk-G45B65QN.js";import"./chunk-I3Y5J7PX.js";import"./chunk-Q4HTBMQA.js";import"./chunk-IV6O5VPQ.js";import{p as H,t as I}from"./chunk-2ECPVTZZ.js";import"./chunk-W3UK2JQM.js";import"./chunk-VUAK5MJH.js";import"./chunk-KCVFW5AG.js";import"./chunk-UJ62HBB3.js";import"./chunk-NSHGD2TU.js";import"./chunk-QA2QCQC4.js";import{c as L}from"./chunk-YNTLZ7BK.js";import"./chunk-NPEWD6LO.js";import"./chunk-HSTYGBAB.js";import{C as S,D as F,a as x,n as b,r as k,u as M,v as E,z as D}from"./chunk-HFB2H5VX.js";import{Dc as C,Gb as y,Ja as g,L as u,Tb as d,Ub as h,ac as r,bc as n,h as p,ic as w,qc as T,rb as s,rc as v,sa as c,tc as m,zb as f}from"./chunk-MV4OHMNG.js";import"./chunk-GBZVISEK.js";import"./chunk-IRYRHF7A.js";import"./chunk-B7EWHQSQ.js";import"./chunk-HVCLDDF2.js";import"./chunk-DAQOROHW.js";var O=`# h1 Heading \u{1F60E}

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

----

![image info](./assets/icons/logo.svg)

More at [documentation](https://taiga-ui.dev)
`,o=class o{constructor(){this.wysiwyg=f.required(a);this.destroyRef=c(g);this.markdown$=new p;this.builtInTools=[L.Undo];this.control=new M(O)}ngOnInit(){this.markdown$.pipe(u(500),x(this.destroyRef)).subscribe(t=>{this.editor?.commands.setContent(t)})}get editor(){return this.wysiwyg().editorService.getOriginTiptapEditor()}get markdown(){return this.editor?.storage.markdown.getMarkdown()??""}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=y({type:o,selectors:[["ng-component"]],viewQuery:function(e,i){e&1&&T(i.wysiwyg,a,5),e&2&&v()},features:[C([_({image:!0},async()=>import("./chunk-CVTR7VRQ.js").then(({TuiMarkdown:t})=>t.configure({html:!0,tightLists:!0,tightListClass:"tight",bulletListMarker:"-",linkify:!0,breaks:!0,transformPastedText:!0,transformCopiedText:!0})))])],decls:6,vars:5,consts:[[3,"formControl","tools"],[1,"tui-space_top-5"],["tuiLabel",""],["tuiTextarea","",3,"ngModelChange","ngModel"]],template:function(e,i){e&1&&(r(0,"tui-editor",0),m(1,` Placeholder
`),n(),r(2,"tui-textfield",1)(3,"label",2),m(4,"Markdown"),n(),r(5,"textarea",3),w("ngModelChange",function(N){return i.markdown$.next(N)}),n()()),e&2&&(d("formControl",i.control)("tools",i.builtInTools),s(2),h("min-height",30,"rem"),s(3),d("ngModel",i.markdown))},dependencies:[S,b,k,E,F,D,a,P,H,I],encapsulation:2,changeDetection:0});var l=o;export{l as default};
