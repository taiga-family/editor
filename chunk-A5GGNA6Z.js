import{Da as N,ia as M,n as w}from"./chunk-DI2PAH47.js";import"./chunk-IXCNST3X.js";import"./chunk-Y3GTPVDQ.js";import"./chunk-5P6M7AG6.js";import"./chunk-4TE6JQPI.js";import"./chunk-ALDCD2CE.js";import"./chunk-7WLUGAMR.js";import"./chunk-2L6PGUB4.js";import"./chunk-BJEURQBJ.js";import"./chunk-OVY7HHPR.js";import"./chunk-NXI67OSZ.js";import"./chunk-SZCYQHZF.js";import"./chunk-4AYRELCE.js";import"./chunk-2PBT5O22.js";import"./chunk-H3VP2PG7.js";import"./chunk-NHD6JZYY.js";import"./chunk-GIZRMZ4J.js";import{a as A,b as h,c as F}from"./chunk-BWKYEQNB.js";import"./chunk-CFUUZOOQ.js";import{d as D}from"./chunk-FKFSL4YW.js";import{ea as b}from"./chunk-DL57BBAR.js";import"./chunk-53QIQE3Q.js";import"./chunk-J6Y2JIJT.js";import"./chunk-AKQL2QW4.js";import"./chunk-WOOEGTSY.js";import"./chunk-5CQAAHX4.js";import{c as t}from"./chunk-DZPGTOC5.js";import"./chunk-VRUACGXF.js";import"./chunk-QFIUTIP5.js";import{D as I,r as g,u as S,z as _}from"./chunk-KVPPRISO.js";import{$b as n,Cc as C,Fb as y,Lb as s,Sb as o,ac as r,bc as c,cc as u,dc as f,ic as E,pb as i,qa as x,sc as d,tc as v}from"./chunk-DN443EC3.js";import"./chunk-BVLC2FPK.js";import"./chunk-TVUBNCFE.js";import"./chunk-JQ5FK4DL.js";import"./chunk-GMDFGGV4.js";import"./chunk-DAQOROHW.js";function O(l,p){if(l&1&&(u(0),c(1,"tui-editor-socket",4),f()),l&2){let e=E();i(),o("content",e.control.value)}}function j(l,p){if(l&1&&(u(0),n(1,"span",5),d(2),r(),f()),l&2){let e=E();i(2),v(e.control.value)}}var a=class a{constructor(){this.builtInTools=[t.Undo,t.Size,t.Bold,t.Italic,t.Underline,t.Details];this.isE2E=x(b);this.control=new S(`
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
