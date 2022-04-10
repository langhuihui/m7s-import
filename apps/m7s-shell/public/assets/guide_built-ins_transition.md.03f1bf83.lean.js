import{r as s,o as n,c as a,d as l,j as e,w as o,l as t,R as p,C as c,N as i,i as r,E as F,e as y,S as D,a as d}from"./app.a30aa7c3.js";import{g as C}from"./chunks/index.31797bf8.js";const b={class:"demo"},u={key:0,style:{"margin-top":"20px"}},g={setup(c){let i=s(!0);return(s,c)=>(n(),a("div",b,[l("button",{onClick:c[0]||(c[0]=s=>i.value=!i.value)},"Toggle Fade"),e(p,{name:"fade"},{default:o((()=>[i.value?(n(),a("p",u,"hello")):t("",!0)])),_:1})]))}};const A={class:"demo"},h={key:0,style:{"margin-top":"20px"}},I={setup(c){let i=s(!0);return(s,c)=>(n(),a("div",A,[l("button",{onClick:c[0]||(c[0]=s=>i.value=!i.value)},"Toggle Slide + Fade"),e(p,{name:"slide-fade"},{default:o((()=>[i.value?(n(),a("p",h,"hello")):t("",!0)])),_:1})]))}};const m={class:"demo"},G={key:0,style:{"margin-top":"20px","text-align":"center"}},v={setup(c){let i=s(!0);return(s,c)=>(n(),a("div",m,[l("button",{onClick:c[0]||(c[0]=s=>i.value=!i.value)},"Toggle"),e(p,{name:"bounce"},{default:o((()=>[i.value?(n(),a("p",G," Hello here is some bouncy text! ")):t("",!0)])),_:1})]))}};const X={class:"demo"},Z={key:0,class:"transition-demo-outer"},B=[l("div",{class:"transition-demo-inner"},"Hello",-1)],f={setup(c){let i=s(!0);return(s,c)=>(n(),a("div",X,[l("button",{onClick:c[0]||(c[0]=s=>i.value=!i.value),style:{"margin-bottom":"20px"}},"Toggle"),e(p,{duration:"550",name:"nested"},{default:o((()=>[i.value?(n(),a("div",Z,B)):t("",!0)])),_:1})]))}};const W={class:"demo"},x={key:0,class:"gsap-box"},w={setup(c){let i=s(!0);function r(s){C.set(s,{scaleX:.25,scaleY:.25,opacity:1})}function F(s,n){C.to(s,{duration:1,scaleX:1,scaleY:1,ease:"elastic.inOut(2.5, 1)",onComplete:n})}function y(s,n){C.to(s,{duration:.7,scaleX:1,scaleY:1,x:300,ease:"elastic.inOut(2.5, 1)"}),C.to(s,{duration:.2,delay:.5,opacity:0,onComplete:n})}return(s,c)=>(n(),a("div",W,[l("button",{onClick:c[0]||(c[0]=s=>i.value=!i.value)},"Toggle"),e(p,{onBeforeEnter:r,onEnter:F,onLeave:y,css:!1},{default:o((()=>[i.value?(n(),a("div",x)):t("",!0)])),_:1})]))}};const V={class:"demo transition-demo"},Y=l("span",{style:{"margin-right":"20px"}},"Click to cycle through states:",-1),H={class:"btn-container"},R={props:["mode"],setup(c){let i=s("saved");return(s,r)=>(n(),a("div",V,[Y,l("div",H,[e(p,{name:"slide-up",mode:c.mode},{default:o((()=>["saved"===i.value?(n(),a("button",{key:0,onClick:r[0]||(r[0]=s=>i.value="edited")}," Edit ")):"edited"===i.value?(n(),a("button",{key:1,onClick:r[1]||(r[1]=s=>i.value="editing")}," Save ")):"editing"===i.value?(n(),a("button",{key:2,onClick:r[2]||(r[2]=s=>i.value="saved")}," Cancel ")):t("",!0)])),_:1},8,["mode"])])]))}},N={class:"demo"},T=y(" A "),L=y(" B "),S={setup(t){const y=()=>D("div","Component A"),d=()=>D("div","Component B");let C=s(y);return(s,t)=>(n(),a("div",N,[l("label",null,[c(l("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=s=>C.value=s),value:y},null,512),[[i,C.value]]),T]),l("label",null,[c(l("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=s=>C.value=s),value:d},null,512),[[i,C.value]]),L]),e(p,{name:"fade",mode:"out-in"},{default:o((()=>[(n(),r(F(C.value)))])),_:1})]))}},J=d("",10),j=d("",21),z=d("",7),P=d("",22),k=d("",17),E=d("",13),U=d("",6),_=d("",4),q=d("",10),M='{"title":"Transition","description":"","frontmatter":{},"headers":[{"level":2,"title":"The <Transition> Component","slug":"the-transition-component"},{"level":2,"title":"CSS-Based Transitions","slug":"css-based-transitions"},{"level":3,"title":"Transition Classes","slug":"transition-classes"},{"level":3,"title":"Named Transitions","slug":"named-transitions"},{"level":3,"title":"CSS Transitions","slug":"css-transitions"},{"level":3,"title":"CSS Animations","slug":"css-animations"},{"level":3,"title":"Custom Transition Classes","slug":"custom-transition-classes"},{"level":3,"title":"Using Transitions and Animations Together","slug":"using-transitions-and-animations-together"},{"level":3,"title":"Nested Transitions and Explicit Transition Durations","slug":"nested-transitions-and-explicit-transition-durations"},{"level":3,"title":"Performance Considerations","slug":"performance-considerations"},{"level":2,"title":"JavaScript Hooks","slug":"javascript-hooks"},{"level":2,"title":"Reusable Transitions","slug":"reusable-transitions"},{"level":2,"title":"Transition on Appear","slug":"transition-on-appear"},{"level":2,"title":"Transition Between Elements","slug":"transition-between-elements"},{"level":2,"title":"Transition Modes","slug":"transition-modes"},{"level":2,"title":"Transition Between Components","slug":"transition-between-components"},{"level":2,"title":"Dynamic Transitions","slug":"dynamic-transitions"}],"relativePath":"guide/built-ins/transition.md"}',Q={},O=Object.assign(Q,{setup:s=>(s,l)=>(n(),a("div",null,[J,e(g),j,e(I),z,e(v),P,e(f),k,e(w),E,e(R),U,e(R,{mode:"out-in"}),_,e(S),q]))});export{M as __pageData,O as default};
