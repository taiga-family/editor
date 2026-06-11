import{Da as O,ia as N,n as M}from"./chunk-G2B4FIK4.js";import"./chunk-5L324VE5.js";import"./chunk-HGAWZHRE.js";import"./chunk-XCWWKCK6.js";import"./chunk-PUKKIP7H.js";import"./chunk-RAL6S7AE.js";import"./chunk-BXU5WT6I.js";import"./chunk-GGJR4VT2.js";import"./chunk-GI2NUE3C.js";import"./chunk-AYB2W3XT.js";import"./chunk-KLKYTC5L.js";import"./chunk-WNSZNIFC.js";import"./chunk-5JK6CI42.js";import"./chunk-FLAOKYU5.js";import"./chunk-CZTQ3VGD.js";import"./chunk-NLBVQOPC.js";import"./chunk-HW37W3IY.js";import{a as b,b as h,c as F}from"./chunk-TA23SYCE.js";import"./chunk-3LVU4JBK.js";import{d as A}from"./chunk-SNZVOGD6.js";import{ea as D}from"./chunk-76LKD2NQ.js";import"./chunk-DZO6DTAF.js";import"./chunk-EX7UCJUZ.js";import"./chunk-TMDSDTG4.js";import"./chunk-CF6AUHUR.js";import"./chunk-BF7I3Z62.js";import{c as t}from"./chunk-622IMF5M.js";import"./chunk-BNH44MY2.js";import"./chunk-643SQCIA.js";import{D as I,r as g,u as S,z as _}from"./chunk-M66EUXR6.js";import{$b as n,Cc as y,Fb as v,Lb as d,Sb as o,ac as r,bc as s,cc as u,dc as f,ic as E,pb as i,qa as x,sc as c,tc as C}from"./chunk-T5OWK3XB.js";import"./chunk-W3AMM3C2.js";import"./chunk-MS3UJI47.js";import"./chunk-LCLFYV6J.js";import"./chunk-XSAI7AEQ.js";import"./chunk-DAQOROHW.js";function j(m,p){if(m&1&&(u(0),s(1,"tui-editor-socket",4),f()),m&2){let e=E();i(),o("content",e.control.value)}}function k(m,p){if(m&1&&(u(0),n(1,"span",5),c(2),r(),f()),m&2){let e=E();i(2),C(e.control.value)}}var a=class a{constructor(){this.builtInTools=[t.Undo,t.Size,t.Bold,t.Italic,t.Underline,t.Details];this.isE2E=x(D);this.control=new S(`
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
