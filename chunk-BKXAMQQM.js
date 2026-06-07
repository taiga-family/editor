import{a as P}from"./chunk-TB5K4UW4.js";import{Da as _,ia as a}from"./chunk-3J5ZXM4P.js";import"./chunk-P2UTOPPM.js";import"./chunk-J66LCKH7.js";import"./chunk-K5P7PVTD.js";import"./chunk-45NFEOVH.js";import"./chunk-SMY2BZZ3.js";import"./chunk-DE6YCATB.js";import"./chunk-FSGOUI54.js";import"./chunk-UVUQL3LA.js";import"./chunk-7R5SRWF2.js";import"./chunk-7XSQY7R3.js";import"./chunk-Z5JIRKID.js";import"./chunk-F576MP2K.js";import"./chunk-BJPR54Z3.js";import"./chunk-Z2T66FIY.js";import"./chunk-OSI67ZSV.js";import"./chunk-JEXZUBYX.js";import{o as H,u as I}from"./chunk-DX5KBAL4.js";import"./chunk-BAA3ZYRV.js";import"./chunk-4WXGW7TF.js";import"./chunk-IYFUTBCA.js";import"./chunk-6V6HQ5HP.js";import"./chunk-ESOI36ZA.js";import"./chunk-4GRDYTU4.js";import{c as L}from"./chunk-XIC3XBPK.js";import"./chunk-BVO46SGL.js";import"./chunk-JTVV2ACU.js";import{C as S,D as F,a as x,n as b,r as k,u as M,v as E,z as D}from"./chunk-JZH4PHMS.js";import{$b as r,Cc as C,Fb as y,Ha as g,K as u,Sb as d,Tb as h,ac as n,h as p,hc as w,pb as s,pc as T,qa as c,qc as v,sc as m,yb as f}from"./chunk-JINKT2FQ.js";import"./chunk-2ODOLIGW.js";import"./chunk-HYZR6AYQ.js";import"./chunk-NXPOHUN6.js";import"./chunk-EW2GO4AL.js";import"./chunk-DAQOROHW.js";var O=`# h1 Heading \u{1F60E}

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

----

![image info](./assets/icons/logo.svg)

More at [documentation](https://taiga-ui.dev)
`,o=class o{constructor(){this.wysiwyg=f.required(a);this.destroyRef=c(g);this.markdown$=new p;this.builtInTools=[L.Undo];this.control=new M(O)}ngOnInit(){this.markdown$.pipe(u(500),x(this.destroyRef)).subscribe(t=>{this.editor?.commands.setContent(t)})}get editor(){return this.wysiwyg().editorService.getOriginTiptapEditor()}get markdown(){return this.editor?.storage.markdown.getMarkdown()??""}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=y({type:o,selectors:[["ng-component"]],viewQuery:function(e,i){e&1&&T(i.wysiwyg,a,5),e&2&&v()},features:[C([_({image:!0},async()=>import("./chunk-UZJOIIQW.js").then(({TuiMarkdown:t})=>t.configure({html:!0,tightLists:!0,tightListClass:"tight",bulletListMarker:"-",linkify:!0,breaks:!0,transformPastedText:!0,transformCopiedText:!0})))])],decls:6,vars:5,consts:[[3,"formControl","tools"],[1,"tui-space_top-5"],["tuiLabel",""],["tuiTextarea","",3,"ngModelChange","ngModel"]],template:function(e,i){e&1&&(r(0,"tui-editor",0),m(1,` Placeholder
`),n(),r(2,"tui-textfield",1)(3,"label",2),m(4,"Markdown"),n(),r(5,"textarea",3),w("ngModelChange",function(N){return i.markdown$.next(N)}),n()()),e&2&&(d("formControl",i.control)("tools",i.builtInTools),s(2),h("min-height",30,"rem"),s(3),d("ngModel",i.markdown))},dependencies:[S,b,k,E,F,D,a,P,H,I],encapsulation:2,changeDetection:0});var l=o;export{l as default};
