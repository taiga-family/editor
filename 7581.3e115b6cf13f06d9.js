(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[7581],{87581:(e,t,o)=>{o.r(t),o.d(t,{default:()=>f});var i=o(76733),r=o(20755),n=o(43226),a=o(49119),s=o(68704),u=o(89303),d=o(23566),c=o(10409),l=o(74893),g=o(92425),m=o(84787),p=o(36293);function T(e){return t=>{const o=new FileReader;return e.loading$.next(!0),o.readAsDataURL(t),(0,c.R)(o,"load").pipe((0,l.g)(2e3),(0,g.U)((()=>String(o.result))),(0,m.w)((t=>e.save(t))),(0,p.x)((()=>e.loading$.next(!1))))}}var h=o(8239),I=o(56424),L=o(3489);let b=(()=>{var e;class t{constructor(){this.loading$=new I.X(!1)}static createBody(e){const t=new FormData;return t.append("image",e.split(",").pop()||""),new URLSearchParams(t)}get isLoading(){return this.loading$.getValue()}save(e){return(0,L.D)(fetch("https://api.imgbb.com/1/upload?key=3c1615980dcf693b282c4b0fb608b28a&expiration=300",{method:"POST",body:t.createBody(e),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(){var e=(0,h.Z)((function*(e){return e.json()}));return function(t){return e.apply(this,arguments)}}())).pipe((0,g.U)((e=>e.data.url)))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵprov=r.Yz7({token:e,factory:e.ɵfac,providedIn:"root"}),t})();const y=function(){return[]},f=(()=>{var e;class t{constructor(){this.doc=(0,r.f3M)(i.K0),this.imgbbService=(0,r.f3M)(b),this.builtInTools=[u.TuiEditorTool.Undo,u.TuiEditorTool.Img],this.control=new n.NI(""),this.validator=({value:e})=>this.editor?.focused||this.imgbbService.isLoading||!this.doc.hasFocus()||e.length?null:{empty:new a.T8v("ERROR: content must not be empty")},this.control.patchValue('\n                <img src="assets/images/lumberjack.png" width="300" />\n                <p>Try to drag right border of image!</p>\n                <p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.</p>\n                <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwIDUwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjxzdHlsZT4uYXtmaWxsOiNkZDAwMzF9LmJ7ZmlsbDojYzMwMDJmfS5je2ZpbGw6I2ZmZn08L3N0eWxlPjxwYXRoIGNsYXNzPSJhIiBkPSJtNDMuNiAxMi42bC0yLjggMjQuNy0xNS44IDguNy0xNS44LTguNy0yLjgtMjQuNyAxOC42LTYuNnoiLz48cGF0aCBjbGFzcz0iYiIgZD0ibTI1IDZsMTguNiA2LjYtMi44IDI0LjctMTUuOCA4Ljd2LTE1LjMtMjAuMy00LjR6Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGFzcz0iYyIgZD0ibTM2LjYgMzYuNWgtNC4zbC0yLjQtNS44aC05LjlsLTIuMyA1LjhoLTQuM2wxMS42LTI2LjF6bS0xMS42LTE3LjZsLTMuNCA4LjJoNi44eiIvPjwvc3ZnPg==" />')}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=r.Xpm({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){if(1&e&&r.Gf(u.TuiEditor,7),2&e){let e;r.iGM(e=r.CRH())&&(t.editor=e.first)}},standalone:!0,features:[r._Bn([{provide:u.TUI_EDITOR_EXTENSIONS,deps:[r.zs3],useFactory:e=>[Promise.resolve().then(o.bind(o,89303)).then((({TuiStarterKit:e})=>e)),Promise.resolve().then(o.bind(o,89303)).then((({tuiCreateImageEditorExtension:t})=>t({injector:e})))]},{provide:u.TUI_IMAGE_EDITOR_OPTIONS,useValue:{minWidth:100,maxWidth:400}},{provide:u.TUI_IMAGE_LOADER,useFactory:T,deps:[b]}]),r.jDz],decls:13,vars:16,consts:[[3,"overlay","showLoader"],[1,"editor",3,"formControl","tools","tuiValidator"],[3,"error","formControl"],[3,"content"]],template:function(e,t){1&e&&(r.TgZ(0,"tui-loader",0),r.ALo(1,"async"),r._UZ(2,"tui-editor",1),r.qZA(),r._UZ(3,"tui-error",2),r.ALo(4,"async"),r.ALo(5,"tuiFieldError"),r.TgZ(6,"h4"),r._uU(7,"HTML:"),r.qZA(),r._UZ(8,"tui-editor-socket",3),r.TgZ(9,"h4"),r._uU(10,"Text:"),r.qZA(),r.TgZ(11,"p"),r._uU(12),r.qZA()),2&e&&(r.Q6J("overlay",!0)("showLoader",!!r.lcZ(1,9,t.imgbbService.loading$)),r.xp6(2),r.Q6J("formControl",t.control)("tools",t.builtInTools)("tuiValidator",t.validator),r.xp6(1),r.Q6J("error",r.lcZ(4,11,r.lcZ(5,13,r.DdM(15,y))))("formControl",t.control),r.xp6(5),r.Q6J("content",t.control.value||""),r.xp6(4),r.Oqu(t.control.value))},dependencies:[i.Ov,n.UX,n.JJ,n.oH,u.TuiEditor,u.TuiEditorSocket,s.eRn,d.Agm,s.A61,a.yx4],encapsulation:2,changeDetection:0}),t})()}}]);