(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[2966],{42966:(t,e,n)=>{n.r(e),n.d(e,{default:()=>A});var i=n(8239),r=n(20755),o=n(74632),s=n(77934);const a="https://stackblitz.com",l=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],c=["project","search","ports","settings"],p=["light","dark"],u=["editor","preview"],d={clickToLoad:t=>m("ctl",t),devToolsHeight:t=>g("devtoolsheight",t),forceEmbedLayout:t=>m("embed",t),hideDevTools:t=>m("hidedevtools",t),hideExplorer:t=>m("hideExplorer",t),hideNavigation:t=>m("hideNavigation",t),openFile:t=>f("file",t),showSidebar:t=>function(t,e){return"boolean"==typeof e?"showSidebar="+(e?"1":"0"):""}(0,t),sidebarView:t=>h("sidebarView",t,c),startScript:t=>f("startScript",t),terminalHeight:t=>g("terminalHeight",t),theme:t=>h("theme",t,p),view:t=>h("view",t,u),zenMode:t=>m("zenMode",t),organization:t=>`${f("orgName",t?.name)}&${f("orgProvider",t?.provider)}`};function m(t,e){return!0===e?`${t}=1`:""}function g(t,e){if("number"==typeof e&&!Number.isNaN(e)){const n=Math.min(100,Math.max(0,e));return`${t}=${encodeURIComponent(Math.round(n))}`}return""}function h(t,e="",n=[]){return n.includes(e)?`${t}=${encodeURIComponent(e)}`:""}function f(t,e){return(Array.isArray(e)?e:[e]).filter((t=>"string"==typeof t&&""!==t.trim())).map((e=>`${t}=${encodeURIComponent(e)}`)).join("&")}function b(t,e){return`${function(t={}){return("string"==typeof t.origin?t.origin:a).replace(/\/$/,"")}(e)}${t}${function(t={}){const e=Object.entries(t).map((([t,e])=>null!=e&&d.hasOwnProperty(t)?d[t](e):"")).filter(Boolean);return e.length?`?${e.join("&")}`:""}(e)}`}const w=function(t,e){!function(t,e){const n=function({template:t,title:e,description:n,dependencies:i,files:r,settings:o}){if(!l.includes(t)){const t=l.map((t=>`'${t}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${t}`)}const s=[],a=(t,e,n="")=>{s.push(function(t,e){const n=document.createElement("input");return n.type="hidden",n.name=t,n.value=e,n}(t,"string"==typeof e?e:n))};a("project[title]",e),"string"==typeof n&&n.length>0&&a("project[description]",n),a("project[template]",t,"javascript"),i&&("node"===t?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a("project[dependencies]",JSON.stringify(i))),o&&a("project[settings]",JSON.stringify(o)),Object.entries(r).forEach((([t,e])=>{a(`project[files][${function(t){return t.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(t)}]`,e)}));const c=document.createElement("form");return c.method="POST",c.setAttribute("style","display:none!important;"),c.append(...s),c}(t);n.action=b("/run",e),n.target=function(t){return t&&!1===t.newWindow?"_self":"_blank"}(e),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(t,e)};var y=n(6254);class v{constructor(t){if(this.rawFileContent=t,(t.match(/export class/gi)||[]).length>1)throw new Error("parser error");this.replaceMetaAssets()}get className(){const[,t]=this.rawFileContent.match(/(?:export class\s)(\w*)/i)||[];return t||""}set className(t){this.rawFileContent=this.rawFileContent.replace(/(export class\s)(\w*)/i,`$1${t}`)}get hasNgModule(){return this.rawFileContent.includes("@NgModule")}get hasNgComponent(){return this.rawFileContent.includes("@Component")}addImport(t,e){const n=e.replace(".ts","");this.rawFileContent=this.rawFileContent.includes(n)?this.addIntoExistingImport(t,n):`import {${t}} from '${n}';\n${this.rawFileContent};`}toString(){return this.rawFileContent}addIntoExistingImport(t,e){const n=new RegExp(`(?:import\\s?\\{\\r?\\n?)(?:(?:.*),\\r?\\n?)*?(?:.*?)\\r?\\n?} from (?:'|")${e}(?:'|");`,"gm");return this.rawFileContent.replace(n,(e=>e.includes(t)?e:e.replace("{",`{${t}, `)))}replaceMetaAssets(){this.rawFileContent=this.rawFileContent.replace("import {assets} from '@demo/utils';\n",""),this.rawFileContent=this.rawFileContent.replace("assets`","`https://taiga-ui.dev/assets")}}class x extends v{set selector(t){this.rawFileContent=this.rawFileContent.replaceAll(/(selector:\s['"`])(.*)(['"`])/gi,`$1${t}$3`)}set templateUrl(t){this.rawFileContent=this.rawFileContent.replaceAll(/(templateUrl:\s['"`])(.*)(['"`])/gi,`$1${t}$3`)}set styleUrls(t){this.rawFileContent=this.rawFileContent.replaceAll(/(styleUrls:\s)(\[.*\])/gi,`$1${JSON.stringify(t)}`)}}let $=(()=>{var t;class e{get(){return{"@angular/cdk":"17.x.x","@angular/compiler":"17.x.x","@angular/core":"17.x.x","@angular/common":"17.x.x","@angular/forms":"17.x.x","@angular/platform-browser":"17.x.x","@angular/animations":"17.x.x","@angular/router":"17.x.x","@taiga-ui/cdk":"latest","@taiga-ui/i18n":"latest","@taiga-ui/core":"latest","@taiga-ui/kit":"latest","@taiga-ui/icons":"latest","@taiga-ui/styles":"latest","@ng-web-apis/common":"latest","@ng-web-apis/mutation-observer":"latest","@ng-web-apis/resize-observer":"latest","@tinkoff/ng-event-plugins":"latest","@tinkoff/ng-polymorpheus":"latest","@tinkoff/ng-dompurify":"latest",dompurify:"latest",punycode:"latest",typescript:"5.3.x","@taiga-ui/editor":"1.x.x"}}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵprov=r.Yz7({token:t,factory:t.ɵfac,providedIn:"root"}),e})();class C{static getProjectFiles(){return(0,i.Z)((function*(){const[t,e,i,r]=yield Promise.all([n.e(3243).then(n.t.bind(n,63243,17)),n.e(9638).then(n.t.bind(n,89638,17)),n.e(2180).then(n.t.bind(n,92180,17)),n.e(740).then(n.t.bind(n,740,17))].map(o.JQ)),[s,a]=(0,o.vi)(t),[l]=(0,o.vi)(e),[c]=(0,o.vi)(i),[p]=(0,o.vi)(r);return{angularJson:s,tsconfig:a,mainTs:l,indexHtml:c,styles:p}}))()}}let j=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=r.Xpm({type:t,selectors:[["stackblitz-edit-button"]],standalone:!0,features:[r.jDz],decls:2,vars:0,consts:[["appearance","flat","icon","assets/icons/stackblitz.svg","size","s","tuiButton","","type","button"]],template:function(t,e){1&t&&(r.TgZ(0,"button",0),r._uU(1," Edit "),r.qZA())},dependencies:[s.m$g],encapsulation:2,changeDetection:0}),e})();const k=t=>t.replaceAll(/@import.+taiga-ui-local(.less)?';/g,"@import '@taiga-ui/core/styles/taiga-ui-local.less';"),F=(t,e="")=>`src/app/${t.join("")}${e}`,S=["./app.component.less"];let z=(()=>{var t;class e{constructor(){this.deps=(0,r.f3M)($),this.name="Stackblitz",this.content=new y.Al(j)}edit(t,e,n){var r=this;return(0,i.Z)((function*(){if(!n.HTML||!n.TypeScript)return;const i=new x(n.TypeScript),s=(l=n,Object.entries(l).filter((([t,e])=>e&&!function(t){return Object.values(o.N0).includes(t)}(t)))),a=(t=>{const e={};return t.forEach((([t,n])=>{const i=F`${t}`;e[i]=function(t){return t===o.N0.LESS||`${t}`.endsWith(".less")}(t)?k(n):n})),e})(s);var l;return i.selector="my-app",i.templateUrl="./app.component.html",i.styleUrls=S,i.className="AppComponent",w({...r.getStackblitzProjectConfig(),title:`${t}-${e}`,description:"Editor example",files:{...yield r.getBaseAngularProjectFiles(),...a,[F`app.component.ts`]:i.toString(),[F`app.component.html`]:`<tui-root>\n\n${n.HTML}\n</tui-root>`,[F`app.component.less`]:k(n.LESS||"")}})}))()}openStarter({title:t,description:e,files:n},r){var o=this;return(0,i.Z)((function*(){return w({...o.getStackblitzProjectConfig(),title:t,description:e,files:{...yield o.getBaseAngularProjectFiles(),...n}},r)}))()}getBaseAngularProjectFiles(){return(0,i.Z)((function*(){const{tsconfig:t,angularJson:e,mainTs:n,indexHtml:i,styles:r}=yield C.getProjectFiles();return{"tsconfig.json":t,"angular.json":e,"src/main.ts":n,"src/index.html":i,"src/styles.less":r}}))()}getStackblitzProjectConfig(){return{template:"angular-cli",dependencies:this.deps.get(),tags:["Angular","Taiga UI","Angular components","UI Kit"]}}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵprov=r.Yz7({token:t,factory:t.ɵfac}),e})();const A=(()=>{var t;class e{constructor(){this.stackblitz=(0,r.f3M)(z)}ngOnInit(){var t=this;return(0,i.Z)((function*(){yield t.openStackblitz()}))()}openStackblitz(){var t=this;return(0,i.Z)((function*(){const[e,i,r,s]=yield Promise.all([n.e(7145).then(n.t.bind(n,7145,17)),n.e(7976).then(n.t.bind(n,7976,17)),n.e(5776).then(n.t.bind(n,45776,17)),n.e(52).then(n.t.bind(n,10052,17))].map(o.JQ)).then((t=>t.map((t=>(0,o.vi)(t)[0]))));return t.stackblitz.openStarter({title:"Editor Starter",description:"A starter for Editor\nDocumentation: https://taiga-family.github.io/editor",files:{"src/index.html":r,"src/styles.less":s,[F`app.component.html`]:e,[F`app.component.ts`]:i,[F`app.component.less`]:"@import '@taiga-ui/core/styles/taiga-ui-local.less';"}},{newWindow:!1,openFile:F`app.component.html`,hideExplorer:!0})}))()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=r.Xpm({type:t,selectors:[["demo-stackblitz-starter"]],standalone:!0,features:[r._Bn([z]),r.jDz],decls:1,vars:1,consts:[["size","xxl","textContent","Stackblitz loading...",1,"loader",3,"overlay"]],template:function(t,e){1&t&&r._UZ(0,"tui-loader",0),2&t&&r.Q6J("overlay",!0)},dependencies:[s.kMv],styles:[".loader[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:var(--tui-base-01);z-index:1}"],changeDetection:0}),e})()}}]);