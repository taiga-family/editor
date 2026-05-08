import{a as L}from"./chunk-VYRIR6MN.js";import{ia as a,qb as P}from"./chunk-WWFKBZDK.js";import"./chunk-CX2UTBQL.js";import"./chunk-SBUXI6I7.js";import"./chunk-Y75WJOSX.js";import"./chunk-NHB7C7TP.js";import"./chunk-FHUAOVR2.js";import"./chunk-X3FR35A6.js";import"./chunk-67OW2U6U.js";import"./chunk-6NYP37V3.js";import"./chunk-CDJH6TFG.js";import"./chunk-OQGGDIU2.js";import"./chunk-5EQPB5MK.js";import"./chunk-6NE3JEQF.js";import"./chunk-GDAE663D.js";import"./chunk-OWQRICVZ.js";import"./chunk-6KCSS3DE.js";import"./chunk-JFJ7MC2L.js";import"./chunk-LGEUCBPK.js";import"./chunk-4Y7L5MDS.js";import"./chunk-ZVR6IHOW.js";import"./chunk-UIO34UA2.js";import"./chunk-SS26U3FB.js";import"./chunk-HK4WKHDU.js";import"./chunk-UM3G5V6R.js";import"./chunk-7BVBOVTB.js";import"./chunk-LOUG7ZFF.js";import"./chunk-BKTNZY53.js";import"./chunk-WIGHW5ZI.js";import"./chunk-I3XIL3IY.js";import"./chunk-EMB27U7U.js";import"./chunk-YPAY7CFK.js";import"./chunk-IB42TNV3.js";import"./chunk-QEYHNJWC.js";import"./chunk-6YHHYC7C.js";import"./chunk-NWOCR3NG.js";import"./chunk-DQQ3MW6Y.js";import{o as R,u as H}from"./chunk-Y3JTPJYT.js";import"./chunk-SXYVGAMA.js";import"./chunk-EKMA4ZFZ.js";import"./chunk-4EHZAZR7.js";import"./chunk-XMN6LVGF.js";import"./chunk-EPQAV3AW.js";import"./chunk-4DONCXAS.js";import{c as I}from"./chunk-HXPUGI5O.js";import"./chunk-T5B3Q3SZ.js";import"./chunk-ZWLK7MHV.js";import{B as S,C as F,a as x,m as b,q as k,t as M,u as E,y as D}from"./chunk-OL7GMMCI.js";import{$b as r,Cc as w,Fb as h,Ha as g,K as u,Sb as s,Tb as y,ac as n,h as p,hc as T,pb as d,pc as v,qa as c,qc as C,sc as m,yb as f}from"./chunk-C3AMLHJW.js";import"./chunk-TQYMGX4G.js";import"./chunk-ZBTD63IS.js";import"./chunk-R6XMBAET.js";import"./chunk-FIMMLO4K.js";import"./chunk-DAQOROHW.js";var N=`# h1 Heading \u{1F60E}

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

----

![image info](./assets/icons/logo.svg)

More at [documentation](https://taiga-ui.dev)
`,o=class o{constructor(){this.editorRef=f.required(a);this.destroyRef=c(g);this.markdown$=new p;this.builtInTools=[I.Undo];this.control=new M(N)}ngOnInit(){this.markdown$.pipe(u(500),x(this.destroyRef)).subscribe(t=>{this.editor?.commands.setContent(t)})}get editor(){return this.editorRef().editorService.getOriginTiptapEditor()}get markdown(){return this.editor?.storage.markdown?.getMarkdown()??""}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=h({type:o,selectors:[["ng-component"]],viewQuery:function(e,i){e&1&&v(i.editorRef,a,5),e&2&&C()},features:[w([P({image:!0},async()=>import("./chunk-GJ7SNMZG.js").then(({TuiMarkdown:t})=>t.configure({html:!0,tightLists:!0,tightListClass:"tight",bulletListMarker:"-",linkify:!0,breaks:!0,transformPastedText:!0,transformCopiedText:!0})))])],decls:6,vars:5,consts:[[3,"formControl","tools"],[1,"tui-space_top-5"],["tuiLabel",""],["tuiTextarea","",3,"ngModelChange","ngModel"]],template:function(e,i){e&1&&(r(0,"tui-editor",0),m(1,` Placeholder
`),n(),r(2,"tui-textfield",1)(3,"label",2),m(4,"Markdown"),n(),r(5,"textarea",3),T("ngModelChange",function(_){return i.markdown$.next(_)}),n()()),e&2&&(s("formControl",i.control)("tools",i.builtInTools),d(2),y("min-height",30,"rem"),d(3),s("ngModel",i.markdown))},dependencies:[S,b,k,E,F,D,a,L,R,H],encapsulation:2,changeDetection:0});var l=o;export{l as default};
