import{Da as O,ia as N,n as M}from"./chunk-67QYHSI3.js";import"./chunk-WXXVEQ4O.js";import"./chunk-L7JAG5XX.js";import"./chunk-P43B4EGU.js";import"./chunk-QC47N5FO.js";import"./chunk-OREP5SBT.js";import"./chunk-BK2X3E6J.js";import"./chunk-AQCDVB52.js";import"./chunk-2EJ7BU4U.js";import"./chunk-ZINJYUHW.js";import"./chunk-4S5RKCJ6.js";import"./chunk-34EZVZYP.js";import"./chunk-SBXXHPE4.js";import"./chunk-G45B65QN.js";import"./chunk-I3Y5J7PX.js";import"./chunk-Q4HTBMQA.js";import"./chunk-IV6O5VPQ.js";import{a as b,b as h,c as F}from"./chunk-KXNVDBZ6.js";import"./chunk-VHS3GHMH.js";import"./chunk-3VXHUGWH.js";import{d as A}from"./chunk-2ECPVTZZ.js";import{ea as D}from"./chunk-W3UK2JQM.js";import"./chunk-VUAK5MJH.js";import"./chunk-KCVFW5AG.js";import"./chunk-UJ62HBB3.js";import"./chunk-NSHGD2TU.js";import"./chunk-QA2QCQC4.js";import{c as t}from"./chunk-YNTLZ7BK.js";import"./chunk-NPEWD6LO.js";import"./chunk-HSTYGBAB.js";import{D as I,r as g,u as S,z as _}from"./chunk-HFB2H5VX.js";import{Dc as y,Gb as v,Mb as d,Tb as o,ac as n,bc as r,cc as s,dc as u,ec as f,jc as E,rb as i,sa as x,tc as c,uc as C}from"./chunk-MV4OHMNG.js";import"./chunk-GBZVISEK.js";import"./chunk-IRYRHF7A.js";import"./chunk-B7EWHQSQ.js";import"./chunk-HVCLDDF2.js";import"./chunk-DAQOROHW.js";function j(m,p){if(m&1&&(u(0),s(1,"tui-editor-socket",4),f()),m&2){let e=E();i(),o("content",e.control.value)}}function k(m,p){if(m&1&&(u(0),n(1,"span",5),c(2),r(),f()),m&2){let e=E();i(2),C(e.control.value)}}var a=class a{constructor(){this.builtInTools=[t.Undo,t.Size,t.Bold,t.Italic,t.Underline,t.Details];this.isE2E=x(D);this.control=new S(`
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
