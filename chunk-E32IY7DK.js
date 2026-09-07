import{Da as N,ia as M,n as w}from"./chunk-2ROPFSBC.js";import"./chunk-ZQANYGME.js";import"./chunk-CXIBEND5.js";import"./chunk-J7WHKRTA.js";import"./chunk-TZBPBZFB.js";import"./chunk-PLVGK24E.js";import"./chunk-NNVK2SVY.js";import"./chunk-Y3OD62K7.js";import"./chunk-7LNIY4RB.js";import"./chunk-KZJOVDCI.js";import"./chunk-AWOMQCSB.js";import"./chunk-MJG3MZK2.js";import"./chunk-JA2DYB2W.js";import"./chunk-IUUOFLQ5.js";import"./chunk-IZDWFS36.js";import"./chunk-6WHJALQH.js";import"./chunk-KKKPCH6X.js";import{a as A,b as h,c as F}from"./chunk-KXNVDBZ6.js";import"./chunk-VHS3GHMH.js";import"./chunk-3VXHUGWH.js";import{d as D}from"./chunk-2ECPVTZZ.js";import{ea as b}from"./chunk-W3UK2JQM.js";import"./chunk-VUAK5MJH.js";import"./chunk-KCVFW5AG.js";import"./chunk-BEUY7UBT.js";import"./chunk-OCG6CYK4.js";import"./chunk-JLJOFALU.js";import{c as t}from"./chunk-I7M24DVB.js";import"./chunk-PXP5LW52.js";import"./chunk-HSTYGBAB.js";import{D as I,r as g,u as S,z as _}from"./chunk-HFB2H5VX.js";import{Dc as C,Gb as y,Mb as s,Tb as o,ac as n,bc as r,cc as c,dc as u,ec as f,jc as E,rb as i,sa as x,tc as d,uc as v}from"./chunk-MV4OHMNG.js";import"./chunk-JJ2OA5FC.js";import"./chunk-LWR4JIWF.js";import"./chunk-FTJLZ5K5.js";import"./chunk-7AGOMT3E.js";import"./chunk-DAQOROHW.js";function O(l,p){if(l&1&&(u(0),c(1,"tui-editor-socket",4),f()),l&2){let e=E();i(),o("content",e.control.value)}}function j(l,p){if(l&1&&(u(0),n(1,"span",5),d(2),r(),f()),l&2){let e=E();i(2),v(e.control.value)}}var a=class a{constructor(){this.builtInTools=[t.Undo,t.Size,t.Bold,t.Italic,t.Underline,t.Details];this.isE2E=x(b);this.control=new S(`
        <details open>
            <summary><p>Title 1</p></summary>
            <p>Content 1</p>
        </details>

        <details>
            <summary><p>Title 2</p></summary>
            <p>Content 2</p>
        </details>

        <!-- legacy details -->
        <div class="t-details-wrapper">
            <details data-opened="true">
                <summary><p>Old</p></summary>
                <div data-type="details-content">
                    <p>Way</p>
                </div>
            </details>
            <button class="t-details-arrow"></button>
        </div>
    `)}};a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=y({type:a,selectors:[["ng-component"]],features:[C([N({details:!0,detailsSummary:!0,detailsContent:!0})])],decls:10,vars:5,consts:[[3,"formControl","tools"],[3,"closeOthers"],[3,"tuiAccordion"],[4,"tuiItem"],[3,"content"],[1,"code"]],template:function(e,m){e&1&&(c(0,"tui-editor",0),n(1,"tui-accordion",1)(2,"button",2),d(3,"HTML"),r(),n(4,"tui-expand"),s(5,O,2,1,"ng-container",3),r(),n(6,"button",2),d(7,"Text"),r(),n(8,"tui-expand"),s(9,j,3,1,"ng-container",3),r()()),e&2&&(o("formControl",m.control)("tools",m.builtInTools),i(),o("closeOthers",!1),i(),o("tuiAccordion",m.isE2E),i(4),o("tuiAccordion",m.isE2E))},dependencies:[I,g,_,F,h,A,D,M,w],encapsulation:2,changeDetection:0});var T=a;export{T as default};
