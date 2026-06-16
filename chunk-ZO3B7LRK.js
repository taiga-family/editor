import{Da as O,ia as N,n as M}from"./chunk-VL5C6YSG.js";import"./chunk-LGY5ZBVB.js";import"./chunk-HGAWZHRE.js";import"./chunk-XCWWKCK6.js";import"./chunk-PUKKIP7H.js";import"./chunk-RAL6S7AE.js";import"./chunk-BXU5WT6I.js";import"./chunk-GGJR4VT2.js";import"./chunk-Z6PYPGJL.js";import"./chunk-AYB2W3XT.js";import"./chunk-3M7Q5NEF.js";import"./chunk-T3TQGOBN.js";import"./chunk-RHJZED2V.js";import"./chunk-FLAOKYU5.js";import"./chunk-XS4U6TMQ.js";import"./chunk-77BMV5NL.js";import"./chunk-HW37W3IY.js";import{a as b,b as h,c as F}from"./chunk-6QJSNJZO.js";import"./chunk-Y2YX7YCO.js";import{d as A}from"./chunk-PZ2DDBVI.js";import{ea as D}from"./chunk-VA56VM5G.js";import"./chunk-5VEM45XY.js";import"./chunk-A6QZ66ZE.js";import"./chunk-TMDSDTG4.js";import"./chunk-PAXS4IKB.js";import"./chunk-BF7I3Z62.js";import{c as t}from"./chunk-I3TGPS7H.js";import"./chunk-KL3NLN5W.js";import"./chunk-QCIKT7I3.js";import{D as I,r as g,u as S,z as _}from"./chunk-5J27KS4B.js";import{$b as r,Bc as y,Eb as v,Kb as d,Rb as o,_b as n,ac as s,bc as u,cc as f,hc as E,pb as i,qa as x,rc as c,sc as C}from"./chunk-JUO4JEX3.js";import"./chunk-W3AMM3C2.js";import"./chunk-MS3UJI47.js";import"./chunk-LCLFYV6J.js";import"./chunk-XSAI7AEQ.js";import"./chunk-DAQOROHW.js";function j(m,p){if(m&1&&(u(0),s(1,"tui-editor-socket",4),f()),m&2){let e=E();i(),o("content",e.control.value)}}function k(m,p){if(m&1&&(u(0),n(1,"span",5),c(2),r(),f()),m&2){let e=E();i(2),C(e.control.value)}}var a=class a{constructor(){this.builtInTools=[t.Undo,t.Size,t.Bold,t.Italic,t.Underline,t.Details];this.isE2E=x(D);this.control=new S(`
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
