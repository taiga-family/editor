(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[217],{217:(t,n,o)=>{o.r(n),o.d(n,{default:()=>f});var e=o(7222),i=o(7920),r=o(4712),s=o(6474),a=o(6610),c=o(2978),u=o(4135),l=o(9707);function d(t,n){if(1&t){const t=c.RV6();c.j41(0,"button",6),c.bIt("click",(function(){const n=c.eBV(t).$implicit,o=c.XpG(2);return c.Njj(o.insertSmile(n))})),c.k0s()}if(2&t){const t=n.$implicit;c.Y8G("innerHTML",t,c.npT)}}function p(t,n){if(1&t&&(c.j41(0,"div",4),c.DNE(1,d,1,1,"button",5),c.k0s()),2&t){const t=c.XpG();c.R7$(1),c.Y8G("ngForOf",t.smiles)}}let m=(()=>{var t;class n{constructor(){this.editor=(0,c.WQX)(s.TuiTiptapEditorService),this.smiles=["&#129409;","&#9200;","&#9749;","&#9989;","&#10060;","&#10071;","&#10133;","&#128064;","&#128070;","&#128076;","&#128522;","&#128640;"]}insertSmile(t){this.editor.getOriginTiptapEditor()?.chain().focus().insertContent(`<p data-type="emoji">${t}</p>`).insertContent(" ").run()}}return(t=n).ɵfac=function(n){return new(n||t)},t.ɵcmp=c.VBU({type:t,selectors:[["smiles-tool"]],standalone:!0,features:[c.aNF],decls:5,vars:2,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"tuiDropdown","tuiDropdownOpen"],["dropdown",""],["appearance","icon","automation-id","smiles-tool__button","iconStart","@tui.star","size","s","tuiIconButton","","type","button",1,"tool-button"],["smileDropdown",""],[1,"smiles"],["type","button","class","smile",3,"innerHTML","click",4,"ngFor","ngForOf"],["type","button",1,"smile",3,"innerHTML","click"]],template:function(t,n){if(1&t&&(c.j41(0,"div",0,1),c.nrm(2,"button",2),c.DNE(3,p,2,1,"ng-template",null,3,c.C5r),c.k0s()),2&t){const t=c.sdS(4);c.Y8G("tuiDropdown",t)("tuiDropdownOpen",!1)}},dependencies:[a.Sq,u.p,l.HY,l.pU,l.iE],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-background-neutral-1-hover)}.smiles[_ngcontent-%COMP%]{display:flex;max-inline-size:18rem;flex-wrap:wrap;justify-content:space-around;align-items:center}.smile[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;border:0;background:none;text-decoration:none;flex:1 0 21%;cursor:pointer;border-radius:var(--tui-radius-s);font:var(--tui-font-heading-4);padding:1rem}.smile[_ngcontent-%COMP%]:hover{background:var(--tui-background-neutral-1-hover)}"],changeDetection:0}),n})();const f=(()=>{var t;class n{constructor(){this.builtInTools=[s.TuiEditorTool.Undo],this.control=new e.MJ("")}}return(t=n).ɵfac=function(n){return new(n||t)},t.ɵcmp=c.VBU({type:t,selectors:[["ng-component"]],standalone:!0,features:[c.Jv_([{provide:s.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(o.bind(o,6474)).then((({TuiStarterKit:t})=>t)),o.e(9876).then(o.bind(o,9876)).then((({EmojiExtension:t})=>t))]}]),c.aNF],decls:7,vars:2,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["icon","@tui.arrow-left"]],template:function(t,n){1&t&&(c.j41(0,"tui-editor",0),c.EFF(1," Smiles are custom tool. Try it. "),c.qex(2,1),c.nrm(3,"smiles-tool",2),c.j41(4,"span",3),c.nrm(5,"tui-icon",4),c.EFF(6," click it "),c.k0s(),c.bVm(),c.k0s()),2&t&&c.Y8G("formControl",n.control)("tools",n.builtInTools)},dependencies:[m,e.X1,e.BC,e.l_,s.TuiEditor,r.q,i.K],styles:[".hint[_ngcontent-%COMP%]{display:flex;color:var(--tui-border-hover);block-size:100%;align-items:center}"],changeDetection:0}),n})()}}]);