(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[2734],{2734:(t,e,r)=>{r.r(e),r.d(e,{default:()=>G});var n=r(6610),o=r(2978),i=r(7222),s=r(4926),a=r(9141),l=r(4314);let u=(()=>{var t;class e{constructor(){this.onChange=a.x7,this.tuiValidator=i.k0.nullValidator}validate(t){return this.tuiValidator(t)}registerOnValidatorChange(t){this.onChange=t}ngOnChanges(){this.onChange()}ngOnDestroy(){this.tuiValidator=i.k0.nullValidator,this.onChange()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=o.FsC({type:t,selectors:[["","tuiValidator",""]],inputs:{tuiValidator:"tuiValidator"},standalone:!0,features:[o.Jv_([(0,l.QU)(i.cz,t,!0)]),o.OA$]}),e})();var c=r(7212),d=r(7187),m=r(656),h=r(5950),p=r(5173);function g(t,e){if(1&t&&(o.qex(0),o.EFF(1),o.bVm()),2&t){const t=e.polymorpheusOutlet;o.R7$(1),o.SpI(" ",t," ")}}const f=function(){return{}};function y(t,e){if(1&t&&(o.j41(0,"div",1),o.DNE(1,g,2,1,"ng-container",2),o.k0s()),2&t){const t=o.XpG();o.Y8G("@tuiFadeIn",t.options)("@tuiHeightCollapse",t.options),o.R7$(1),o.Y8G("polymorpheusOutlet",t.error.message||t.default())("polymorpheusOutletContext",t.error.context||o.lJ4(4,f))}}let b=(()=>{var t;class e{constructor(){this.options=(0,h.mo)((0,o.WQX)(m.nV)),this.error=null,this.visible=!0,this.default=(0,c.ot)((0,o.WQX)(m.uV))}set errorSetter(t){this.error=(0,l.YB)(t)?new s.Mx(t):t}onAnimation(t){this.visible=t}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.VBU({type:t,selectors:[["tui-error"]],hostBindings:function(t,e){1&t&&o.bIt("animationcancel.self",(function(){return e.onAnimation(!1)}))("animationstart.self",(function(){return e.onAnimation(!0)}))},inputs:{errorSetter:["error","errorSetter"]},standalone:!0,features:[o.aNF],decls:1,vars:1,consts:[["automation-id","tui-error__text","class","t-message-text",4,"ngIf"],["automation-id","tui-error__text",1,"t-message-text"],[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(t,e){1&t&&o.DNE(0,y,2,5,"div",0),2&t&&o.Y8G("ngIf",e.error&&e.visible)},dependencies:[n.bT,p.xr],styles:['[_nghost-%COMP%]{display:block;font:var(--tui-font-text-s);color:var(--tui-text-negative);overflow-wrap:break-word;animation:tuiPresent 1s infinite}.t-message-text[_ngcontent-%COMP%]{white-space:pre-line}.t-message-text[_ngcontent-%COMP%]:before{content:"";line-height:1.5rem;vertical-align:bottom}'],data:{animation:[d.hM,d.uy]},changeDetection:0}),e})();var v=r(8627),I=r(6474),w=r(7270),x=r(1028),k=r(3527),T=r(756),L=r(9406);const E={};function j(t,e){return t.pipe((0,k.T)((t=>new s.Mx(t||"",e))))}function M(t,e){return(0,T.of)(new s.Mx(t||"",e))}let C=(()=>{var t;class e{constructor(){this.order=[],this.parent=(0,o.WQX)(i.vO,{skipSelf:!0,optional:!0}),this.self=(0,o.WQX)(i.vO,{self:!0,optional:!0}),this.container=(0,o.WQX)(i.ZU,{optional:!0}),this.validationErrors=(0,o.WQX)(x.fh),this.self&&!this.self.valueAccessor&&(this.self.valueAccessor=this)}transform(t){return this.order=t,this.computedError}registerOnChange(){}registerOnTouched(){}setDisabledState(){}writeValue(){}get computedError(){return this.invalid&&this.touched&&this.error||(0,T.of)(null)}get error(){const{errorId:t}=this;if(!t)return null;const e=this.controlErrors[t],r=this.validationErrors[t];return this.getError(e,r)}get invalid(){return!!this.control?.invalid}get touched(){return!!this.control?.touched}get control(){return this.self?.control||this.parent?.control||this.container?.control}get errorId(){return this.getErrorId(this.order,this.controlErrors)}get controlErrors(){return this.control?.errors||E}getError(t,e){if(t instanceof s.Mx)return(0,T.of)(t);if(void 0===e&&(0,l.YB)(t))return(0,T.of)(new s.Mx(t));if(e instanceof L.c)return j(e,t);if(e instanceof Function){const r=e(t);return r instanceof L.c?j(r,t):M(r,t)}return M(e,t)}getErrorId(t,e){const r=t?.find((t=>e[t])),n=Object.keys(e)[0];return r||n||""}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵpipe=o.EJ8({name:"tuiFieldError",type:t,pure:!1,standalone:!0}),(0,w.Cg)([l.PE],e.prototype,"getError",null),(0,w.Cg)([l.PE],e.prototype,"getErrorId",null),e})();var O=r(8129),N=r(8283),S=r(2831),D=r(6347);function F(t){return e=>{const r=new FileReader;return t.loading$.next(!0),r.readAsDataURL(e),(0,O.R)(r,"load").pipe((0,N.c)(2e3),(0,k.T)((()=>String(r.result))),(0,S.n)((e=>t.save(e))),(0,D.j)((()=>t.loading$.next(!1))))}}var A=r(3308),P=r(5981),R=r(8399);let V=(()=>{var t;class e{constructor(){this.loading$=new P.t(!1)}static createBody(t){const e=new FormData;return e.append("image",t.split(",").pop()??""),new URLSearchParams(e)}get isLoading(){return this.loading$.getValue()}save(t){return(0,R.H)(fetch("https://api.imgbb.com/1/upload?key=3c1615980dcf693b282c4b0fb608b28a&expiration=300",{method:"POST",body:e.createBody(t),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(){var t=(0,A.A)((function*(t){return t.json()}));return function(e){return t.apply(this,arguments)}}())).pipe((0,k.T)((t=>t.data.url)))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵprov=o.jDH({token:t,factory:t.ɵfac,providedIn:"root"}),e})();const _=function(){return[]},G=(()=>{var t;class e{constructor(){this.doc=(0,o.WQX)(n.qQ),this.imgbbService=(0,o.WQX)(V),this.builtInTools=[I.TuiEditorTool.Undo,I.TuiEditorTool.Img],this.control=new i.MJ(""),this.validator=({value:t})=>this.editor?.focused||this.imgbbService.isLoading||!this.doc.hasFocus()||t.length?null:{empty:new s.Mx("ERROR: content must not be empty")},this.control.patchValue('\n                <img src="assets/images/lumberjack.png" width="300" />\n                <p>Try to drag right border of image!</p>\n                <p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.</p>\n                <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwIDUwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjxzdHlsZT4uYXtmaWxsOiNkZDAwMzF9LmJ7ZmlsbDojYzMwMDJmfS5je2ZpbGw6I2ZmZn08L3N0eWxlPjxwYXRoIGNsYXNzPSJhIiBkPSJtNDMuNiAxMi42bC0yLjggMjQuNy0xNS44IDguNy0xNS44LTguNy0yLjgtMjQuNyAxOC42LTYuNnoiLz48cGF0aCBjbGFzcz0iYiIgZD0ibTI1IDZsMTguNiA2LjYtMi44IDI0LjctMTUuOCA4Ljd2LTE1LjMtMjAuMy00LjR6Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGFzcz0iYyIgZD0ibTM2LjYgMzYuNWgtNC4zbC0yLjQtNS44aC05LjlsLTIuMyA1LjhoLTQuM2wxMS42LTI2LjF6bS0xMS42LTE3LjZsLTMuNCA4LjJoNi44eiIvPjwvc3ZnPg==" />\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                <img src="assets/images/lumberjack.png" width="300" style="float: right" />\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                <img src="assets/images/lumberjack.png" width="300" style="float: left" />\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n                <img src="assets/images/lumberjack.png" width="300" style="display: flex; justify-content: center; margin-left: auto; margin-right: auto;" />\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n            ')}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.VBU({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&o.GBs(I.TuiEditor,7),2&t){let t;o.mGM(t=o.lsd())&&(e.editor=t.first)}},standalone:!0,features:[o.Jv_([{provide:I.TUI_EDITOR_EXTENSIONS,deps:[o.zZn],useFactory:t=>[Promise.resolve().then(r.bind(r,6474)).then((({TuiStarterKit:t})=>t)),Promise.resolve().then(r.bind(r,6474)).then((({tuiCreateImageEditorExtension:e})=>e({injector:t})))]},{provide:I.TUI_IMAGE_EDITOR_OPTIONS,useValue:{minWidth:100,maxWidth:400}},{provide:I.TUI_IMAGE_LOADER,useFactory:F,deps:[V]}]),o.aNF],decls:18,vars:16,consts:[[3,"overlay","showLoader"],[1,"editor",3,"formControl","tools","tuiValidator"],[3,"error","formControl"],[3,"content"]],template:function(t,e){1&t&&(o.j41(0,"tui-loader",0),o.nI1(1,"async"),o.nrm(2,"tui-editor",1),o.k0s(),o.nrm(3,"tui-error",2),o.nI1(4,"async"),o.nI1(5,"tuiFieldError"),o.j41(6,"h4"),o.EFF(7,"HTML:"),o.k0s(),o.nrm(8,"tui-editor-socket",3)(9,"br")(10,"br")(11,"br")(12,"br")(13,"hr"),o.j41(14,"h4"),o.EFF(15,"Text:"),o.k0s(),o.j41(16,"p"),o.EFF(17),o.k0s()),2&t&&(o.Y8G("overlay",!0)("showLoader",!!o.bMT(1,9,e.imgbbService.loading$)),o.R7$(2),o.Y8G("formControl",e.control)("tools",e.builtInTools)("tuiValidator",e.validator),o.R7$(1),o.Y8G("error",o.bMT(4,11,o.bMT(5,13,o.lJ4(15,_))))("formControl",e.control),o.R7$(5),o.Y8G("content",e.control.value||""),o.R7$(9),o.JRh(e.control.value))},dependencies:[n.Jj,i.X1,i.BC,i.l_,I.TuiEditor,I.TuiEditorSocket,b,C,v.ap,u],encapsulation:2,changeDetection:0}),e})()}}]);