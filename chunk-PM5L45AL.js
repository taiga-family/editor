import{Da as O,ia as N,n as M}from"./chunk-EL5TL553.js";import"./chunk-VKTEI3XC.js";import"./chunk-SNUH4AOV.js";import"./chunk-M4MKLJ5X.js";import"./chunk-FELRUIV7.js";import"./chunk-LKCF5GKV.js";import"./chunk-XGTPHHTH.js";import"./chunk-EWYWD752.js";import"./chunk-3UBB4VST.js";import"./chunk-I4VRDTI4.js";import"./chunk-PA4MXNUV.js";import"./chunk-KL5HPSRI.js";import"./chunk-3KA3NI4M.js";import"./chunk-7MSEWO54.js";import"./chunk-QWE63DQC.js";import"./chunk-DTUQ65YP.js";import"./chunk-5BF7MNKE.js";import{a as b,b as h,c as F}from"./chunk-BUG4MERV.js";import"./chunk-ZLJPI4OD.js";import{d as A}from"./chunk-5F5XJVV2.js";import{ea as D}from"./chunk-4HC6MEES.js";import"./chunk-SKWNST73.js";import"./chunk-643ZYFVA.js";import"./chunk-QZ7HZJYC.js";import"./chunk-SKH2ITZI.js";import"./chunk-BERO5W6C.js";import{c as t}from"./chunk-ISDZGITV.js";import"./chunk-YVO2O45H.js";import"./chunk-XMGHDQ7F.js";import{D as I,r as g,u as S,z as _}from"./chunk-7YS67536.js";import{$b as n,Cc as y,Fb as v,Lb as d,Sb as o,ac as r,bc as s,cc as u,dc as f,ic as E,qb as i,ra as x,sc as c,tc as C}from"./chunk-I3SSX3YH.js";import"./chunk-BFKBIB36.js";import"./chunk-LPOGFM6N.js";import"./chunk-DUYY2UWQ.js";import"./chunk-RHWM3AIW.js";import"./chunk-DAQOROHW.js";function j(m,p){if(m&1&&(u(0),s(1,"tui-editor-socket",4),f()),m&2){let e=E();i(),o("content",e.control.value)}}function k(m,p){if(m&1&&(u(0),n(1,"span",5),c(2),r(),f()),m&2){let e=E();i(2),C(e.control.value)}}var a=class a{constructor(){this.builtInTools=[t.Undo,t.Size,t.Bold,t.Italic,t.Underline,t.Details];this.isE2E=x(D);this.control=new S(`
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
