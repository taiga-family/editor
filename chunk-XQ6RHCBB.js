import{Da as N,ia as M,n as w}from"./chunk-OHKO62M5.js";import"./chunk-PIGXNBNE.js";import"./chunk-DNWRZFZ3.js";import"./chunk-MGWZQ7MX.js";import"./chunk-IKIB7MVS.js";import"./chunk-NWJEOWQC.js";import"./chunk-JFIDINUK.js";import"./chunk-ERUAYIAO.js";import"./chunk-NG3BHZLO.js";import"./chunk-EHAIWXFF.js";import"./chunk-HXTBLSEG.js";import"./chunk-46VRNF7P.js";import"./chunk-CMMIRO4J.js";import"./chunk-TGB7THAE.js";import"./chunk-3X3R5DV7.js";import"./chunk-NVZWVVI6.js";import"./chunk-AZFQU7L2.js";import{a as A,b as h,c as F}from"./chunk-KXNVDBZ6.js";import"./chunk-VHS3GHMH.js";import"./chunk-3VXHUGWH.js";import{d as D}from"./chunk-2ECPVTZZ.js";import{ea as b}from"./chunk-W3UK2JQM.js";import"./chunk-VUAK5MJH.js";import"./chunk-KCVFW5AG.js";import"./chunk-YIOSMX27.js";import"./chunk-SQ4L675T.js";import"./chunk-3CVFZI6D.js";import{c as t}from"./chunk-N6OC4GDO.js";import"./chunk-NYITM3V3.js";import"./chunk-HSTYGBAB.js";import{D as I,r as g,u as S,z as _}from"./chunk-HFB2H5VX.js";import{Dc as C,Gb as y,Mb as s,Tb as o,ac as n,bc as r,cc as c,dc as u,ec as f,jc as E,rb as i,sa as x,tc as d,uc as v}from"./chunk-MV4OHMNG.js";import"./chunk-MPH33UIO.js";import"./chunk-RQPZAXQZ.js";import"./chunk-6Y6WOLDP.js";import"./chunk-V2WPIEZ4.js";import"./chunk-DAQOROHW.js";function O(l,p){if(l&1&&(u(0),c(1,"tui-editor-socket",4),f()),l&2){let e=E();i(),o("content",e.control.value)}}function j(l,p){if(l&1&&(u(0),n(1,"span",5),d(2),r(),f()),l&2){let e=E();i(2),v(e.control.value)}}var a=class a{constructor(){this.builtInTools=[t.Undo,t.Size,t.Bold,t.Italic,t.Underline,t.Details];this.isE2E=x(b);this.control=new S(`
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
