import{Da as N,ia as M,n as w}from"./chunk-EKN7ZYJJ.js";import"./chunk-AOJYNYWS.js";import"./chunk-L7JAG5XX.js";import"./chunk-P43B4EGU.js";import"./chunk-QC47N5FO.js";import"./chunk-OREP5SBT.js";import"./chunk-BK2X3E6J.js";import"./chunk-AQCDVB52.js";import"./chunk-AIAIRGCH.js";import"./chunk-ZINJYUHW.js";import"./chunk-WK6PVKP6.js";import"./chunk-TIRZFAUK.js";import"./chunk-R5TJKDGY.js";import"./chunk-G45B65QN.js";import"./chunk-VGWHIZLP.js";import"./chunk-SUVNHK2A.js";import"./chunk-IV6O5VPQ.js";import{a as A,b as h,c as F}from"./chunk-WMMSDLDB.js";import"./chunk-K7UZYFJW.js";import"./chunk-2AV2C2MW.js";import{d as D}from"./chunk-DWPOJEDM.js";import{fa as b}from"./chunk-SZ3XV2AX.js";import"./chunk-GPPND5N7.js";import"./chunk-RMCUAUXZ.js";import"./chunk-UJ62HBB3.js";import"./chunk-HHTGMPTB.js";import"./chunk-QA2QCQC4.js";import{c as t}from"./chunk-LBN7YPX6.js";import"./chunk-ESE2ZNJL.js";import"./chunk-KODQ3AUG.js";import{D as I,r as g,u as S,z as _}from"./chunk-APV3TJBM.js";import{Ec as C,Gb as y,Mb as s,Tb as o,ac as n,bc as r,cc as c,dc as u,ec as f,jc as E,rb as i,sa as x,tc as d,uc as v}from"./chunk-6FFNGJHY.js";import"./chunk-GBZVISEK.js";import"./chunk-IRYRHF7A.js";import"./chunk-B7EWHQSQ.js";import"./chunk-HVCLDDF2.js";import"./chunk-DAQOROHW.js";function O(l,p){if(l&1&&(u(0),c(1,"tui-editor-socket",4),f()),l&2){let e=E();i(),o("content",e.control.value)}}function j(l,p){if(l&1&&(u(0),n(1,"span",5),d(2),r(),f()),l&2){let e=E();i(2),v(e.control.value)}}var a=class a{constructor(){this.builtInTools=[t.Undo,t.Size,t.Bold,t.Italic,t.Underline,t.Details];this.isE2E=x(b);this.control=new S(`
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
