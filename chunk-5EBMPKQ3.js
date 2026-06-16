import{Da as N,ia as M,n as w}from"./chunk-WV3KH5KX.js";import"./chunk-5L324VE5.js";import"./chunk-HGAWZHRE.js";import"./chunk-XCWWKCK6.js";import"./chunk-PUKKIP7H.js";import"./chunk-RAL6S7AE.js";import"./chunk-BXU5WT6I.js";import"./chunk-GGJR4VT2.js";import"./chunk-GI2NUE3C.js";import"./chunk-AYB2W3XT.js";import"./chunk-KLKYTC5L.js";import"./chunk-6HHRWVQN.js";import"./chunk-5JK6CI42.js";import"./chunk-FLAOKYU5.js";import"./chunk-CZTQ3VGD.js";import"./chunk-NLBVQOPC.js";import"./chunk-HW37W3IY.js";import{a as A,b as h,c as F}from"./chunk-BR77VXG2.js";import"./chunk-FNGL353U.js";import{d as D}from"./chunk-HPFSDF5M.js";import{ea as b}from"./chunk-42GYKK6B.js";import"./chunk-DZO6DTAF.js";import"./chunk-EX7UCJUZ.js";import"./chunk-TMDSDTG4.js";import"./chunk-CF6AUHUR.js";import"./chunk-BF7I3Z62.js";import{c as t}from"./chunk-622IMF5M.js";import"./chunk-BNH44MY2.js";import"./chunk-643SQCIA.js";import{D as I,r as g,u as S,z as _}from"./chunk-M66EUXR6.js";import{$b as n,Cc as C,Fb as y,Lb as s,Sb as o,ac as r,bc as c,cc as u,dc as f,ic as E,pb as i,qa as x,sc as d,tc as v}from"./chunk-T5OWK3XB.js";import"./chunk-W3AMM3C2.js";import"./chunk-MS3UJI47.js";import"./chunk-LCLFYV6J.js";import"./chunk-XSAI7AEQ.js";import"./chunk-DAQOROHW.js";function O(l,p){if(l&1&&(u(0),c(1,"tui-editor-socket",4),f()),l&2){let e=E();i(),o("content",e.control.value)}}function j(l,p){if(l&1&&(u(0),n(1,"span",5),d(2),r(),f()),l&2){let e=E();i(2),v(e.control.value)}}var a=class a{constructor(){this.builtInTools=[t.Undo,t.Size,t.Bold,t.Italic,t.Underline,t.Details];this.isE2E=x(b);this.control=new S(`
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
