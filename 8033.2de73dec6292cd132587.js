(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[8033],{8033:(e,t,o)=>{o.r(t),o.d(t,{ExampleTuiEditorGroupsModule:()=>Z});var r=o(12057),n=o(24751),i=o(34016),a=o(47029),p=o(42600),s=o(43232),u=o(37195),l=o(74788),d=o(15997),c=o(73460),h=o(42328),g=o(8820),m=o(76690);let v=(()=>{class e{constructor(){this.builtInTools=[u._2.Undo,u._2.Group],this.control=new n.NI(""),this.control.patchValue('<div data-type="group"><p>This is a boring paragraph.</p></div><div data-type="group"><p>And another draggable paragraph.</p></div><div data-type="group"><p>Let’s finish with a boring paragraph.</p></div>')}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-editor-groups-example-1"]],features:[l._Bn([p.a31,{provide:u.Wf,useValue:[Promise.resolve().then(o.bind(o,90784)).then((({StarterKit:e})=>e)),Promise.resolve().then(o.bind(o,30295)).then((({Placeholder:e})=>e.configure({emptyNodeClass:"t-editor-placeholder",placeholder:({node:e})=>"paragraph"===e.type.name?"Type '/' for command":null,showOnlyCurrent:!0,includeChildren:!0}))),Promise.resolve().then(o.bind(o,19818)).then((({createGroupExtension:e})=>e({nested:!1,createOnEnter:!0})))]}])],decls:8,vars:4,consts:[[1,"notion-editor",3,"formControl","tools"],[3,"content"]],template:function(e,t){1&e&&(l._UZ(0,"tui-editor",0),l.TgZ(1,"h4"),l._uU(2,"HTML:"),l.qZA(),l._UZ(3,"tui-editor-socket",1),l.TgZ(4,"h4"),l._uU(5,"Text:"),l.qZA(),l.TgZ(6,"p"),l._uU(7),l.qZA()),2&e&&(l.Q6J("formControl",t.control)("tools",t.builtInTools),l.xp6(3),l.Q6J("content",t.control.value||""),l.xp6(4),l.Oqu(t.control.value))},directives:[g.a,n.JJ,n.oH,m.D],encapsulation:2,changeDetection:0}),e})(),f=(()=>{class e{constructor(){this.builtInTools=[u._2.Undo,u._2.Group,u._2.Hilite],this.control=new n.NI(""),this.control.patchValue('<div data-type="group" style="background-color: blue"><p>This is a boring paragraph.</p></div><div data-type="group"><p>And another paragraph.</p></div><div data-type="group" style="background-color: green"><p>Let’s finish with a boring paragraph.</p></div>')}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-editor-groups-example-2"]],features:[l._Bn([p.a31,{provide:u.Wf,useValue:[Promise.resolve().then(o.bind(o,90784)).then((({StarterKit:e})=>e)),Promise.resolve().then(o.bind(o,19818)).then((({createGroupExtension:e})=>e({nested:!1,draggable:!1,createOnEnter:!0,groupNodeClass:"filled-group",groupPointerNodeClass:""}))),Promise.resolve().then(o.bind(o,84402)).then((({TextStyle:e})=>e)),Promise.resolve().then(o.bind(o,44)).then((({BackgroundColor:e})=>e))]}])],decls:8,vars:4,consts:[[1,"my-editor",3,"formControl","tools"],[3,"content"]],template:function(e,t){1&e&&(l._UZ(0,"tui-editor",0),l.TgZ(1,"h4"),l._uU(2,"HTML:"),l.qZA(),l._UZ(3,"tui-editor-socket",1),l.TgZ(4,"h4"),l._uU(5,"Text:"),l.qZA(),l.TgZ(6,"p"),l._uU(7),l.qZA()),2&e&&(l.Q6J("formControl",t.control)("tools",t.builtInTools),l.xp6(3),l.Q6J("content",t.control.value||""),l.xp6(4),l.Oqu(t.control.value))},directives:[g.a,n.JJ,n.oH,m.D],styles:["[_nghost-%COMP%]     tui-editor-socket [data-type=group]{flex-direction:column;padding:.5rem;margin:.5rem 0;border:1px solid var(--tui-base-04)}"],changeDetection:0}),e})(),b=(()=>{class e{constructor(){this.builtInTools=[u._2.Undo,u._2.Group],this.control=new n.NI(""),this.control.patchValue('<p>This is a boring paragraph.</p><div data-type="group"><p>And another paragraph.</p><div data-type="group"><p>And a nested paragraph.</p><div data-type="group"><p>But can we go deeper?</p></div></div></div><p>Let’s finish with a boring paragraph.</p>')}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-editor-groups-example-3"]],features:[l._Bn([p.a31,{provide:u.Wf,useValue:[Promise.resolve().then(o.bind(o,90784)).then((({StarterKit:e})=>e)),Promise.resolve().then(o.bind(o,19818)).then((({createGroupExtension:e})=>e({draggable:!1,groupNodeClass:"group",groupPointerNodeClass:""})))]}])],decls:8,vars:4,consts:[[1,"editor",3,"formControl","tools"],[3,"content"]],template:function(e,t){1&e&&(l._UZ(0,"tui-editor",0),l.TgZ(1,"h4"),l._uU(2,"HTML:"),l.qZA(),l._UZ(3,"tui-editor-socket",1),l.TgZ(4,"h4"),l._uU(5,"Text:"),l.qZA(),l.TgZ(6,"p"),l._uU(7),l.qZA()),2&e&&(l.Q6J("formControl",t.control)("tools",t.builtInTools),l.xp6(3),l.Q6J("content",t.control.value||""),l.xp6(4),l.Oqu(t.control.value))},directives:[g.a,n.JJ,n.oH,m.D],styles:[".editor[_ngcontent-%COMP%]{min-height:30rem}.editor[_ngcontent-%COMP%]     .group{position:relative;display:flex;flex-direction:column;padding:.5rem;margin:.5rem 0;border-radius:.5rem;border:1px solid var(--tui-base-04)}"],changeDetection:0}),e})(),T=(()=>{class e{constructor(){this.example1={TypeScript:o.e(1197).then(o.t.bind(o,41197,17)),HTML:o.e(7207).then(o.t.bind(o,87207,17))},this.example2={TypeScript:o.e(7289).then(o.t.bind(o,97289,17)),HTML:o.e(5991).then(o.t.bind(o,35991,17)),LESS:o.e(5935).then(o.t.bind(o,95935,17))},this.example3={TypeScript:o.e(5499).then(o.t.bind(o,25499,17)),HTML:o.e(7880).then(o.t.bind(o,67880,17)),LESS:o.e(7904).then(o.t.bind(o,87904,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["editor-groups"]],features:[l._Bn([{provide:u.Wf,useValue:u.PD}])],decls:15,vars:3,consts:[["header","Editor","type","components"],["href","https://www.tiptap.dev/","tuiLink",""],["fragment","sanitizer","routerLink","/icons/bundled","tuiLink",""],["id","draggable-groups","heading","Draggable groups the looks like in Notion",3,"content"],["id","hilite-groups","heading","Hilite groups",3,"content"],["id","nested-groups","heading","Simple create nested groups",3,"content"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-doc-page",0),l.TgZ(1,"p"),l._uU(2," Rich Text Editor based on "),l.TgZ(3,"a",1),l._uU(4," TipTap Editor "),l.qZA(),l._uU(5," for using with Angular forms. For safety reasons use a "),l.TgZ(6,"a",2),l._uU(7," sanitizer "),l.qZA(),l._uU(8," with this component. "),l.qZA(),l.TgZ(9,"tui-doc-example",3),l._UZ(10,"tui-editor-groups-example-1"),l.qZA(),l.TgZ(11,"tui-doc-example",4),l._UZ(12,"tui-editor-groups-example-2"),l.qZA(),l.TgZ(13,"tui-doc-example",5),l._UZ(14,"tui-editor-groups-example-3"),l.qZA(),l.qZA()),2&e&&(l.xp6(9),l.Q6J("content",t.example1),l.xp6(2),l.Q6J("content",t.example2),l.xp6(2),l.Q6J("content",t.example3))},directives:[d.q,c.V,i.yS,h.f,v,f,b],encapsulation:2,changeDetection:0}),e})(),Z=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=l.oAB({type:e}),e.ɵinj=l.cJS({imports:[[r.ez,p.Ah6,s.EIu,s.jzK,s.jhF,s.fNO,a.fV,n.u5,n.UX,u.T_,u.GK,i.Bz.forChild((0,a.Ve)(T))]]}),e})()}}]);