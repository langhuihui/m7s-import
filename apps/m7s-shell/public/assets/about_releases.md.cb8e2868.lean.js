import{r as e,b as a,c as r,d as t,t as s,e as i,a as n,o}from"./app.a30aa7c3.js";const l=t("h1",{id:"releases",tabindex:"-1"},[i("Releases "),t("a",{class:"header-anchor",href:"#releases","aria-hidden":"true"},"#")],-1),p={key:0},d=i(" The current latest stable version of Vue is "),c=i(". "),h={key:1},u=n("",24),m='{"title":"Releases","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"Release Cycle","slug":"release-cycle"},{"level":2,"title":"Semantic Versioning Edge Cases","slug":"semantic-versioning-edge-cases"},{"level":3,"title":"TypeScript Definitions","slug":"typescript-definitions"},{"level":3,"title":"Compiled Code Compatibility with Older Runtime","slug":"compiled-code-compatibility-with-older-runtime"},{"level":2,"title":"Pre Releases","slug":"pre-releases"},{"level":2,"title":"Deprecations","slug":"deprecations"},{"level":2,"title":"RFCs","slug":"rfcs"},{"level":2,"title":"Experimental Features","slug":"experimental-features"}],"relativePath":"about/releases.md"}',f={},g=Object.assign(f,{setup(i){let n=e();return a((async()=>{const e=await fetch("https://api.github.com/repos/vuejs/core/releases?per_page=1");n.value=(await e.json())[0].name})),(e,a)=>(o(),r("div",null,[l,n.value?(o(),r("p",p,[d,t("strong",null,s(n.value),1),c])):(o(),r("p",h," Checking latest version... ")),u]))}});export{m as __pageData,g as default};
