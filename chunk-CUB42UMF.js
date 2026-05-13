import{Da as O,ia as N,n as M}from"./chunk-PB7O7OPN.js";import"./chunk-L4YD6XJE.js";import"./chunk-EOXZCWXG.js";import"./chunk-3BHU57GN.js";import"./chunk-WZJNMI6U.js";import"./chunk-TVYZIBJ6.js";import"./chunk-O6OZMI32.js";import"./chunk-XXXJRSCF.js";import"./chunk-3AWXR2GE.js";import"./chunk-OWP6EDLN.js";import"./chunk-OTF7HBQ6.js";import"./chunk-2HG6OWEB.js";import"./chunk-OJHPPS4Z.js";import"./chunk-4ZGIJKIW.js";import"./chunk-VGSSO7UG.js";import"./chunk-6JIYLQ6L.js";import"./chunk-VCDFBWM5.js";import{a as b,b as h,c as F}from"./chunk-2X6IIXKC.js";import"./chunk-QRHUY2WT.js";import{d as A}from"./chunk-NCB7J6R7.js";import{W as D}from"./chunk-H4SRELKZ.js";import"./chunk-EKMA4ZFZ.js";import"./chunk-4EHZAZR7.js";import"./chunk-POWLEK3Z.js";import"./chunk-MNU5YTRT.js";import"./chunk-QVNTEPWS.js";import{c as t}from"./chunk-UTK2BHS3.js";import"./chunk-WDBN7T62.js";import"./chunk-2GWSTLIV.js";import{C as I,q as g,t as S,y as _}from"./chunk-OL7GMMCI.js";import{$b as n,Cc as y,Fb as v,Lb as d,Sb as o,ac as r,bc as s,cc as u,dc as f,ic as E,pb as i,qa as x,sc as c,tc as C}from"./chunk-C3AMLHJW.js";import"./chunk-LA7UBXK5.js";import"./chunk-T55ENTOL.js";import"./chunk-LICJJ6TA.js";import"./chunk-EKVP67QA.js";import"./chunk-DAQOROHW.js";function j(m,p){if(m&1&&(u(0),s(1,"tui-editor-socket",4),f()),m&2){let e=E();i(),o("content",e.control.value)}}function k(m,p){if(m&1&&(u(0),n(1,"span",5),c(2),r(),f()),m&2){let e=E();i(2),C(e.control.value)}}var a=class a{constructor(){this.builtInTools=[t.Undo,t.Size,t.Bold,t.Italic,t.Underline,t.Details];this.isE2E=x(D);this.control=new S(`
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
