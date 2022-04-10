import{P as s,_ as a,r as n,o as e,c as l,u as o,t as p,d as t,F as c,n as r,j as i,A as y,B as F,e as D,a as A}from"./app.9d5e218f.js";const C=s(Array.from(Array(3).keys()).map((s=>Array.from(Array(3).keys()).map((s=>"")))));function d(s){if(!s.startsWith("="))return s;s=s.slice(1).replace(/\b([A-Z])(\d{1,2})\b/g,((s,a,n)=>`get(${a.charCodeAt(0)-65},${n})`));try{return new Function("get",`return ${s}`)(u)}catch(a){return`#ERROR ${a}`}}function u(s,a){const n=d(C[s][a]),e=Number(n);return Number.isFinite(e)?e:n}C[0][0]="1",C[0][1]="2",C[0][2]="= A0 + A1";const g=["title"],h=["value"],f={key:1};var b=a({props:{c:Number,r:Number},setup(s){const a=s,t=n(!1);function c(s){t.value=!1,C[a.c][a.r]=s.target.value.trim()}return(a,n)=>(e(),l("div",{class:"cell",title:o(C)[s.c][s.r],onClick:n[1]||(n[1]=s=>t.value=!0)},[t.value?(e(),l("input",{key:0,value:o(C)[s.c][s.r],onChange:c,onBlur:c,onVnodeMounted:n[0]||(n[0]=({el:s})=>s.focus())},null,40,h)):(e(),l("span",f,p(o(d)(o(C)[s.c][s.r])),1))],8,g))}},[["__scopeId","data-v-f36dc108"]]);const m=(s=>(y("data-v-bc75b9c0"),s=s(),F(),s))((()=>t("th",null,null,-1)));var v=a({setup(s){const a=C.map(((s,a)=>String.fromCharCode(65+a)));return(s,n)=>(e(),l("table",null,[t("thead",null,[t("tr",null,[m,(e(!0),l(c,null,r(o(a),(s=>(e(),l("th",null,p(s),1)))),256))])]),t("tbody",null,[(e(!0),l(c,null,r(o(C)[0].length,(s=>(e(),l("tr",null,[t("th",null,p(s-1),1),(e(!0),l(c,null,r(o(a),((a,n)=>(e(),l("td",null,[i(b,{r:s-1,c:n},null,8,["r","c"])])))),256))])))),256))])]))}},[["__scopeId","data-v-bc75b9c0"]]);const w=t("h1",{id:"reactivity-in-depth",tabindex:"-1"},[D("Reactivity in Depth "),t("a",{class:"header-anchor",href:"#reactivity-in-depth","aria-hidden":"true"},"#")],-1),I=t("p",null,"One of Vue’s most distinct features is the unobtrusive reactivity system. Component state are reactive JavaScript objects. When you modify them, the view updates. It makes state management simple and intuitive, but it’s also important to understand how it works to avoid some common gotchas. In this section, we are going to dig into some of the lower-level details of Vue’s reactivity system.",-1),k=t("h2",{id:"what-is-reactivity",tabindex:"-1"},[D("What is Reactivity? "),t("a",{class:"header-anchor",href:"#what-is-reactivity","aria-hidden":"true"},"#")],-1),x=t("p",null,"This term comes up in programming quite a bit these days, but what do people mean when they say it? Reactivity is a programming paradigm that allows us to adjust to changes in a declarative manner. The canonical example that people usually show, because it’s a great one, is an Excel spreadsheet:",-1),Z=A("",79),E='{"title":"Reactivity in Depth","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"What is Reactivity?","slug":"what-is-reactivity"},{"level":2,"title":"How Reactivity Works in Vue","slug":"how-reactivity-works-in-vue"},{"level":2,"title":"Runtime vs. Compile-time Reactivity","slug":"runtime-vs-compile-time-reactivity"},{"level":2,"title":"Reactivity Debugging","slug":"reactivity-debugging"},{"level":3,"title":"Component Debugging Hooks","slug":"component-debugging-hooks"},{"level":3,"title":"Computed Debugging","slug":"computed-debugging"},{"level":3,"title":"Watcher Debugging","slug":"watcher-debugging"},{"level":2,"title":"Integration with External State Systems","slug":"integration-with-external-state-systems"},{"level":3,"title":"Immutable Data","slug":"immutable-data"},{"level":3,"title":"State Machines","slug":"state-machines"},{"level":3,"title":"RxJS","slug":"rxjs"}],"relativePath":"guide/extras/reactivity-in-depth.md"}',V={},G=Object.assign(V,{setup:s=>(s,a)=>(e(),l("div",null,[w,I,k,x,i(v),Z]))});export{E as __pageData,G as default};
