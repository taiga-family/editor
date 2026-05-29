import{Da as O,ia as N,n as M}from"./chunk-DI2PAH47.js";import"./chunk-IXCNST3X.js";import"./chunk-Y3GTPVDQ.js";import"./chunk-5P6M7AG6.js";import"./chunk-4TE6JQPI.js";import"./chunk-ALDCD2CE.js";import"./chunk-7WLUGAMR.js";import"./chunk-2L6PGUB4.js";import"./chunk-BJEURQBJ.js";import"./chunk-OVY7HHPR.js";import"./chunk-NXI67OSZ.js";import"./chunk-SZCYQHZF.js";import"./chunk-4AYRELCE.js";import"./chunk-2PBT5O22.js";import"./chunk-H3VP2PG7.js";import"./chunk-NHD6JZYY.js";import"./chunk-GIZRMZ4J.js";import{a as b,b as h,c as F}from"./chunk-BWKYEQNB.js";import"./chunk-CFUUZOOQ.js";import{d as A}from"./chunk-FKFSL4YW.js";import{ea as D}from"./chunk-DL57BBAR.js";import"./chunk-53QIQE3Q.js";import"./chunk-J6Y2JIJT.js";import"./chunk-AKQL2QW4.js";import"./chunk-WOOEGTSY.js";import"./chunk-5CQAAHX4.js";import{c as t}from"./chunk-DZPGTOC5.js";import"./chunk-VRUACGXF.js";import"./chunk-QFIUTIP5.js";import{D as I,r as g,u as S,z as _}from"./chunk-KVPPRISO.js";import{$b as n,Cc as y,Fb as v,Lb as d,Sb as o,ac as r,bc as s,cc as u,dc as f,ic as E,pb as i,qa as x,sc as c,tc as C}from"./chunk-DN443EC3.js";import"./chunk-BVLC2FPK.js";import"./chunk-TVUBNCFE.js";import"./chunk-JQ5FK4DL.js";import"./chunk-GMDFGGV4.js";import"./chunk-DAQOROHW.js";function j(m,p){if(m&1&&(u(0),s(1,"tui-editor-socket",4),f()),m&2){let e=E();i(),o("content",e.control.value)}}function k(m,p){if(m&1&&(u(0),n(1,"span",5),c(2),r(),f()),m&2){let e=E();i(2),C(e.control.value)}}var a=class a{constructor(){this.builtInTools=[t.Undo,t.Size,t.Bold,t.Italic,t.Underline,t.Details];this.isE2E=x(D);this.control=new S(`
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
