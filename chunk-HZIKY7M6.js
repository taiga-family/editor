import{Da as O,ia as N,n as M}from"./chunk-OHKO62M5.js";import"./chunk-PIGXNBNE.js";import"./chunk-DNWRZFZ3.js";import"./chunk-MGWZQ7MX.js";import"./chunk-IKIB7MVS.js";import"./chunk-NWJEOWQC.js";import"./chunk-JFIDINUK.js";import"./chunk-ERUAYIAO.js";import"./chunk-NG3BHZLO.js";import"./chunk-EHAIWXFF.js";import"./chunk-HXTBLSEG.js";import"./chunk-46VRNF7P.js";import"./chunk-CMMIRO4J.js";import"./chunk-TGB7THAE.js";import"./chunk-3X3R5DV7.js";import"./chunk-NVZWVVI6.js";import"./chunk-AZFQU7L2.js";import{a as b,b as h,c as F}from"./chunk-KXNVDBZ6.js";import"./chunk-VHS3GHMH.js";import"./chunk-3VXHUGWH.js";import{d as A}from"./chunk-2ECPVTZZ.js";import{ea as D}from"./chunk-W3UK2JQM.js";import"./chunk-VUAK5MJH.js";import"./chunk-KCVFW5AG.js";import"./chunk-YIOSMX27.js";import"./chunk-SQ4L675T.js";import"./chunk-3CVFZI6D.js";import{c as t}from"./chunk-N6OC4GDO.js";import"./chunk-NYITM3V3.js";import"./chunk-HSTYGBAB.js";import{D as I,r as g,u as S,z as _}from"./chunk-HFB2H5VX.js";import{Dc as y,Gb as v,Mb as d,Tb as o,ac as n,bc as r,cc as s,dc as u,ec as f,jc as E,rb as i,sa as x,tc as c,uc as C}from"./chunk-MV4OHMNG.js";import"./chunk-MPH33UIO.js";import"./chunk-RQPZAXQZ.js";import"./chunk-6Y6WOLDP.js";import"./chunk-V2WPIEZ4.js";import"./chunk-DAQOROHW.js";function j(m,p){if(m&1&&(u(0),s(1,"tui-editor-socket",4),f()),m&2){let e=E();i(),o("content",e.control.value)}}function k(m,p){if(m&1&&(u(0),n(1,"span",5),c(2),r(),f()),m&2){let e=E();i(2),C(e.control.value)}}var a=class a{constructor(){this.builtInTools=[t.Undo,t.Size,t.Bold,t.Italic,t.Underline,t.Details];this.isE2E=x(D);this.control=new S(`
        <details open>
            <summary><p>Title 1</p></summary>

            <div data-type="details-content">
                <p>Content 1</p>

                <details open>
                    <summary><p>Title 2</p></summary>

                    <div data-type="details-content">
                        <p>Content 2</p>
                    </div>
                </details>
            </div>
        </details>
    `)}};a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=v({type:a,selectors:[["ng-component"]],features:[y([O({details:{inheritOpen:!0},detailsSummary:!0,detailsContent:!0})])],decls:10,vars:5,consts:[[3,"formControl","tools"],[3,"closeOthers"],[3,"tuiAccordion"],[4,"tuiItem"],[3,"content"],[1,"code"]],template:function(e,l){e&1&&(s(0,"tui-editor",0),n(1,"tui-accordion",1)(2,"button",2),c(3,"HTML"),r(),n(4,"tui-expand"),d(5,j,2,1,"ng-container",3),r(),n(6,"button",2),c(7,"Text"),r(),n(8,"tui-expand"),d(9,k,3,1,"ng-container",3),r()()),e&2&&(o("formControl",l.control)("tools",l.builtInTools),i(),o("closeOthers",!1),i(),o("tuiAccordion",l.isE2E),i(4),o("tuiAccordion",l.isE2E))},dependencies:[I,g,_,F,h,b,A,N,M],encapsulation:2,changeDetection:0});var T=a;export{T as default};
