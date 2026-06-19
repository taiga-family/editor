import{Da as N,ia as M,n as w}from"./chunk-5ITLF67W.js";import"./chunk-SBOE65Y5.js";import"./chunk-SNUH4AOV.js";import"./chunk-M4MKLJ5X.js";import"./chunk-FELRUIV7.js";import"./chunk-LKCF5GKV.js";import"./chunk-XGTPHHTH.js";import"./chunk-EWYWD752.js";import"./chunk-SMK37PTV.js";import"./chunk-I4VRDTI4.js";import"./chunk-NZSR3CAL.js";import"./chunk-YYHRYFGD.js";import"./chunk-KBDJOIOA.js";import"./chunk-7MSEWO54.js";import"./chunk-QFXPZ7U5.js";import"./chunk-CHAM34MP.js";import"./chunk-5BF7MNKE.js";import{a as A,b as h,c as F}from"./chunk-S5CRWCU5.js";import"./chunk-XHW4HFK6.js";import{d as D}from"./chunk-FQMJRYNZ.js";import{ea as b}from"./chunk-3TKVAUT4.js";import"./chunk-KGUQFVBY.js";import"./chunk-TIWPNJCX.js";import"./chunk-QZ7HZJYC.js";import"./chunk-37EH4AC6.js";import"./chunk-BERO5W6C.js";import{c as t}from"./chunk-QRYHZ6ZG.js";import"./chunk-HAHOGPVR.js";import"./chunk-X52YA4KS.js";import{D as I,r as g,u as S,z as _}from"./chunk-77SMMHKG.js";import{$b as r,Bc as C,Eb as y,Kb as s,Rb as o,_b as n,ac as c,bc as u,cc as f,hc as E,pb as i,qa as x,rc as d,sc as v}from"./chunk-SWLXYIRQ.js";import"./chunk-BFKBIB36.js";import"./chunk-LPOGFM6N.js";import"./chunk-DUYY2UWQ.js";import"./chunk-RHWM3AIW.js";import"./chunk-DAQOROHW.js";function O(l,p){if(l&1&&(u(0),c(1,"tui-editor-socket",4),f()),l&2){let e=E();i(),o("content",e.control.value)}}function j(l,p){if(l&1&&(u(0),n(1,"span",5),d(2),r(),f()),l&2){let e=E();i(2),v(e.control.value)}}var a=class a{constructor(){this.builtInTools=[t.Undo,t.Size,t.Bold,t.Italic,t.Underline,t.Details];this.isE2E=x(b);this.control=new S(`
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
