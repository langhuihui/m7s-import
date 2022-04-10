import{_ as s,g as e,r as n,o as a,c as o,d as t,F as l,n as p,Z as r,t as c,f as i,j as y,w as F,a as D,e as d}from"./app.9d5e218f.js";const h={class:"tabs"},u=["onClick"],A={class:"code-example"};var C=s(e({setup(s){const e=n("vtu-api"),y=[{label:"Vue Test Utils",className:"vtu-api"},{label:"Cypress",className:"cypress-api"},{label:"Testing Library",className:"testing-library-api"}];return(s,n)=>(a(),o("div",{class:r(["testing-code-examples",`prefers-${e.value}`])},[t("div",h,[(a(),o(l,null,p(y,(s=>t("div",{key:s.className,class:r(["tab",{active:s.className===e.value}]),onClick:n=>e.value=s.className},c(s.label),11,u))),64))]),t("div",A,[i(s.$slots,"default")])],2))}}),[["__scopeId","data-v-7f91de60"]]);const g=D("",42),m=t("div",{class:"testing-library-api"},[t("div",{class:"language-js"},[t("pre",null,[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#82AAFF"}},"render"),t("span",{style:{color:"#A6ACCD"}},"(Stepper"),t("span",{style:{color:"#89DDFF"}},","),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"{")]),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#F07178"}},"props"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"{")]),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"    "),t("span",{style:{color:"#F07178"}},"max"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#F78C6C"}},"1")]),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"}")]),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"}"),t("span",{style:{color:"#A6ACCD"}},")")]),d("\n"),t("span",{class:"line"}),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#C792EA"}},"const"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"{"),t("span",{style:{color:"#A6ACCD"}}," getByText "),t("span",{style:{color:"#89DDFF"}},"}"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#82AAFF"}},"render"),t("span",{style:{color:"#A6ACCD"}},"(Component)")]),d("\n"),t("span",{class:"line"}),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#82AAFF"}},"getByText"),t("span",{style:{color:"#A6ACCD"}},"("),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"0"),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#A6ACCD"}},") "),t("span",{style:{color:"#676E95","font-style":"italic"}},'// Implicit assertion that "0" is within the component')]),d("\n"),t("span",{class:"line"}),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#C792EA"}},"const"),t("span",{style:{color:"#A6ACCD"}}," button "),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#82AAFF"}},"getByText"),t("span",{style:{color:"#A6ACCD"}},"("),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"increment"),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#A6ACCD"}},")")]),d("\n"),t("span",{class:"line"}),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#676E95","font-style":"italic"}},"// Dispatch a click event to our increment button.")]),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),t("span",{style:{color:"#A6ACCD"}}," fireEvent"),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"click"),t("span",{style:{color:"#A6ACCD"}},"(button)")]),d("\n"),t("span",{class:"line"}),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#82AAFF"}},"getByText"),t("span",{style:{color:"#A6ACCD"}},"("),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"1"),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#A6ACCD"}},")")]),d("\n"),t("span",{class:"line"}),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),t("span",{style:{color:"#A6ACCD"}}," fireEvent"),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"click"),t("span",{style:{color:"#A6ACCD"}},"(button)")]),d("\n"),t("span",{class:"line"})])])])],-1),f=t("div",{class:"vtu-api"},[t("div",{class:"language-js"},[t("pre",null,[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#C792EA"}},"const"),t("span",{style:{color:"#A6ACCD"}}," valueSelector "),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"[data-testid=stepper-value]"),t("span",{style:{color:"#89DDFF"}},"'")]),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#C792EA"}},"const"),t("span",{style:{color:"#A6ACCD"}}," buttonSelector "),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"[data-testid=increment]"),t("span",{style:{color:"#89DDFF"}},"'")]),d("\n"),t("span",{class:"line"}),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#C792EA"}},"const"),t("span",{style:{color:"#A6ACCD"}}," wrapper "),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#82AAFF"}},"mount"),t("span",{style:{color:"#A6ACCD"}},"(Stepper"),t("span",{style:{color:"#89DDFF"}},","),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"{")]),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#F07178"}},"props"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"{")]),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"    "),t("span",{style:{color:"#F07178"}},"max"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#F78C6C"}},"1")]),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"}")]),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"}"),t("span",{style:{color:"#A6ACCD"}},")")]),d("\n"),t("span",{class:"line"}),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#82AAFF"}},"expect"),t("span",{style:{color:"#A6ACCD"}},"(wrapper"),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"find"),t("span",{style:{color:"#A6ACCD"}},"(valueSelector)"),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"text"),t("span",{style:{color:"#A6ACCD"}},"())"),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"toContain"),t("span",{style:{color:"#A6ACCD"}},"("),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"0"),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#A6ACCD"}},")")]),d("\n"),t("span",{class:"line"}),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),t("span",{style:{color:"#A6ACCD"}}," wrapper"),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"find"),t("span",{style:{color:"#A6ACCD"}},"(buttonSelector)"),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"trigger"),t("span",{style:{color:"#A6ACCD"}},"("),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"click"),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#A6ACCD"}},")")]),d("\n"),t("span",{class:"line"}),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#82AAFF"}},"expect"),t("span",{style:{color:"#A6ACCD"}},"(wrapper"),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"find"),t("span",{style:{color:"#A6ACCD"}},"(valueSelector)"),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"text"),t("span",{style:{color:"#A6ACCD"}},"())"),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"toContain"),t("span",{style:{color:"#A6ACCD"}},"("),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"1"),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#A6ACCD"}},")")]),d("\n"),t("span",{class:"line"})])])])],-1),b=t("div",{class:"cypress-api"},[t("div",{class:"language-js"},[t("pre",null,[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#C792EA"}},"const"),t("span",{style:{color:"#A6ACCD"}}," valueSelector "),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"[data-testid=stepper-value]"),t("span",{style:{color:"#89DDFF"}},"'")]),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#C792EA"}},"const"),t("span",{style:{color:"#A6ACCD"}}," buttonSelector "),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"[data-testid=increment]"),t("span",{style:{color:"#89DDFF"}},"'")]),d("\n"),t("span",{class:"line"}),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#82AAFF"}},"mount"),t("span",{style:{color:"#A6ACCD"}},"(Stepper"),t("span",{style:{color:"#89DDFF"}},","),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"{")]),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#F07178"}},"props"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"{")]),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"    "),t("span",{style:{color:"#F07178"}},"max"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#F78C6C"}},"1")]),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"}")]),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"}"),t("span",{style:{color:"#A6ACCD"}},")")]),d("\n"),t("span",{class:"line"}),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"cy"),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"get"),t("span",{style:{color:"#A6ACCD"}},"(valueSelector)"),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"should"),t("span",{style:{color:"#A6ACCD"}},"("),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"be.visible"),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#A6ACCD"}},")"),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"and"),t("span",{style:{color:"#A6ACCD"}},"("),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"contain.text"),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#89DDFF"}},","),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"0"),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#A6ACCD"}},")")]),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"get"),t("span",{style:{color:"#A6ACCD"}},"(buttonSelector)"),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"click"),t("span",{style:{color:"#A6ACCD"}},"()")]),d("\n"),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"get"),t("span",{style:{color:"#A6ACCD"}},"(valueSelector)"),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"should"),t("span",{style:{color:"#A6ACCD"}},"("),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"contain.text"),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#89DDFF"}},","),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"1"),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#A6ACCD"}},")")]),d("\n"),t("span",{class:"line"})])])])],-1),v=D("",56),w='{"title":"Testing","description":"","frontmatter":{},"headers":[{"level":2,"title":"Why Test?","slug":"why-test"},{"level":2,"title":"When to Test","slug":"when-to-test"},{"level":2,"title":"Testing Types","slug":"testing-types"},{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Unit Testing","slug":"unit-testing"},{"level":3,"title":"Composables","slug":"composables"},{"level":3,"title":"Unit Testing Components","slug":"unit-testing-components"},{"level":3,"title":"Recommendation","slug":"recommendation"},{"level":3,"title":"Other Options","slug":"other-options"},{"level":2,"title":"Component Testing","slug":"component-testing"},{"level":3,"title":"Recommendation","slug":"recommendation-1"},{"level":3,"title":"Mounting Libraries","slug":"mounting-libraries"},{"level":3,"title":"Other Options","slug":"other-options-1"},{"level":2,"title":"E2E Testing","slug":"e2e-testing"},{"level":3,"title":"Choosing an E2E Testing Solution","slug":"choosing-an-e2e-testing-solution"},{"level":3,"title":"Recommendation","slug":"recommendation-2"},{"level":3,"title":"Other Options","slug":"other-options-2"},{"level":2,"title":"Recipes","slug":"recipes"},{"level":3,"title":"Adding Vitest to a Project","slug":"adding-vitest-to-a-project"},{"level":3,"title":"Testing Composables","slug":"testing-composables"}],"relativePath":"guide/scaling-up/testing.md"}',E={},k=Object.assign(E,{setup:s=>(s,e)=>(a(),o("div",null,[g,y(C,null,{default:F((()=>[m,f,b])),_:1}),v]))});export{w as __pageData,k as default};
