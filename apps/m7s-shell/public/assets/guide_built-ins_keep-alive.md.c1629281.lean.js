import{r as s,o as n,c as a,d as e,t as l,F as o,C as t,D as p,M as c,N as i,i as r,E as d,O as D,e as y,j as F,a as u}from"./app.9d5e218f.js";const C=e("p",null,"Current component: A",-1),m={style:{"margin-right":"20px"}},b={setup(t){let p=s(0);return(s,t)=>(n(),a(o,null,[C,e("span",m,"count: "+l(p.value),1),e("button",{onClick:t[0]||(t[0]=s=>p.value++)},"+")],64))}},A=e("p",null,"Current component: B",-1),h={style:{"margin-right":"20px"}},g={setup(c){let i=s("");return(s,c)=>(n(),a(o,null,[A,e("span",h,"Message is: "+l(i.value),1),t(e("input",{"onUpdate:modelValue":c[0]||(c[0]=s=>i.value=s)},null,512),[[p,i.value]])],64))}},v={class:"demo"},I=y(" A"),w=y(" B"),B={props:{useKeepAlive:Boolean},setup(s){let l=c(b);return(o,p)=>(n(),a("div",v,[e("label",null,[t(e("input",{type:"radio","onUpdate:modelValue":p[0]||(p[0]=s=>l.value=s),value:b},null,512),[[i,l.value]]),I]),e("label",null,[t(e("input",{type:"radio","onUpdate:modelValue":p[1]||(p[1]=s=>l.value=s),value:g},null,512),[[i,l.value]]),w]),s.useKeepAlive?(n(),r(D,{key:0},[(n(),r(d(l.value)))],1024)):(n(),r(d(l.value),{key:1}))]))}},X=u("",7),f=u("",4),G=u("",19),x='{"title":"KeepAlive","description":"","frontmatter":{},"headers":[{"level":2,"title":"Basic Usage","slug":"basic-usage"},{"level":2,"title":"Include / Exclude","slug":"include-exclude"},{"level":2,"title":"Max Cached Instances","slug":"max-cached-instances"},{"level":2,"title":"Lifecycle of Cached Instance","slug":"lifecycle-of-cached-instance"}],"relativePath":"guide/built-ins/keep-alive.md"}',P={},W=Object.assign(P,{setup:s=>(s,e)=>(n(),a("div",null,[X,F(B),f,F(B,{"use-KeepAlive":""}),G]))});export{x as __pageData,W as default};