import{Da as N,ia as M,n as w}from"./chunk-B6GGFPI4.js";import"./chunk-P2UTOPPM.js";import"./chunk-J66LCKH7.js";import"./chunk-K5P7PVTD.js";import"./chunk-45NFEOVH.js";import"./chunk-SMY2BZZ3.js";import"./chunk-DE6YCATB.js";import"./chunk-FSGOUI54.js";import"./chunk-UVUQL3LA.js";import"./chunk-7R5SRWF2.js";import"./chunk-7XSQY7R3.js";import"./chunk-UN4NPVRZ.js";import"./chunk-F576MP2K.js";import"./chunk-BJPR54Z3.js";import"./chunk-Z2T66FIY.js";import"./chunk-FFHAPTBQ.js";import"./chunk-JEXZUBYX.js";import{a as A,b as h,c as F}from"./chunk-MIAKISDZ.js";import"./chunk-3CJL3YV5.js";import{d as D}from"./chunk-G6ZAAY6I.js";import{ea as b}from"./chunk-L56RGB7Q.js";import"./chunk-4WXGW7TF.js";import"./chunk-IYFUTBCA.js";import"./chunk-6V6HQ5HP.js";import"./chunk-ESOI36ZA.js";import"./chunk-4GRDYTU4.js";import{c as t}from"./chunk-XIC3XBPK.js";import"./chunk-BVO46SGL.js";import"./chunk-JTVV2ACU.js";import{D as I,r as g,u as S,z as _}from"./chunk-JZH4PHMS.js";import{$b as n,Cc as C,Fb as y,Lb as s,Sb as o,ac as r,bc as c,cc as u,dc as f,ic as E,pb as i,qa as x,sc as d,tc as v}from"./chunk-JINKT2FQ.js";import"./chunk-2ODOLIGW.js";import"./chunk-HYZR6AYQ.js";import"./chunk-NXPOHUN6.js";import"./chunk-EW2GO4AL.js";import"./chunk-DAQOROHW.js";function O(l,p){if(l&1&&(u(0),c(1,"tui-editor-socket",4),f()),l&2){let e=E();i(),o("content",e.control.value)}}function j(l,p){if(l&1&&(u(0),n(1,"span",5),d(2),r(),f()),l&2){let e=E();i(2),v(e.control.value)}}var a=class a{constructor(){this.builtInTools=[t.Undo,t.Size,t.Bold,t.Italic,t.Underline,t.Details];this.isE2E=x(b);this.control=new S(`
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
