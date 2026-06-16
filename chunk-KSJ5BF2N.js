import{Da as N,ia as M,n as w}from"./chunk-FP5CBVUF.js";import"./chunk-TC2NUU6C.js";import"./chunk-HGAWZHRE.js";import"./chunk-XCWWKCK6.js";import"./chunk-PUKKIP7H.js";import"./chunk-RAL6S7AE.js";import"./chunk-BXU5WT6I.js";import"./chunk-GGJR4VT2.js";import"./chunk-34BUDG5B.js";import"./chunk-AYB2W3XT.js";import"./chunk-CKO7WHQF.js";import"./chunk-L5QJAPJK.js";import"./chunk-ZAR3MXOZ.js";import"./chunk-FLAOKYU5.js";import"./chunk-RDFIYQ5V.js";import"./chunk-NZ4C2FV3.js";import"./chunk-HW37W3IY.js";import{a as A,b as h,c as F}from"./chunk-S5CRWCU5.js";import"./chunk-XHW4HFK6.js";import{d as D}from"./chunk-FQMJRYNZ.js";import{ea as b}from"./chunk-3TKVAUT4.js";import"./chunk-KGUQFVBY.js";import"./chunk-TIWPNJCX.js";import"./chunk-TMDSDTG4.js";import"./chunk-P7Q64IHJ.js";import"./chunk-BF7I3Z62.js";import{c as t}from"./chunk-7MVUVRM2.js";import"./chunk-NWELQLVO.js";import"./chunk-X52YA4KS.js";import{D as I,r as g,u as S,z as _}from"./chunk-77SMMHKG.js";import{$b as r,Bc as C,Eb as y,Kb as s,Rb as o,_b as n,ac as c,bc as u,cc as f,hc as E,pb as i,qa as x,rc as d,sc as v}from"./chunk-SWLXYIRQ.js";import"./chunk-W3AMM3C2.js";import"./chunk-MS3UJI47.js";import"./chunk-LCLFYV6J.js";import"./chunk-XSAI7AEQ.js";import"./chunk-DAQOROHW.js";function O(l,p){if(l&1&&(u(0),c(1,"tui-editor-socket",4),f()),l&2){let e=E();i(),o("content",e.control.value)}}function j(l,p){if(l&1&&(u(0),n(1,"span",5),d(2),r(),f()),l&2){let e=E();i(2),v(e.control.value)}}var a=class a{constructor(){this.builtInTools=[t.Undo,t.Size,t.Bold,t.Italic,t.Underline,t.Details];this.isE2E=x(b);this.control=new S(`
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
