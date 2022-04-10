import{_ as e,g as t,r as i,h as n,o as r,c as a,d as o,C as s,D as p,F as l,n as c,t as d,u,l as m,A as f,B as v,j as h}from"./app.376b3d02.js";const x=JSON.parse('[{"text":"Global API","items":[{"text":"Application","link":"/api/application","headers":["createApp()","createSSRApp()","app.mount()","app.unmount()","app.provide()","app.component()","app.directive()","app.use()","app.mixin()","app.version","app.config","app.config.errorHandler","app.config.warnHandler","app.config.performance","app.config.compilerOptions","app.config.globalProperties","app.config.optionMergeStrategies"]},{"text":"General","link":"/api/general","headers":["version","nextTick()","defineComponent()","defineAsyncComponent()","defineCustomElement()"]}]},{"text":"Composition API","items":[{"text":"setup()","link":"/api/composition-api-setup","headers":["Basic Usage","Accessing Props","Setup Context","Usage with Render Functions"]},{"text":"Reactivity: Core","link":"/api/reactivity-core","headers":["ref()","computed()","reactive()","readonly()","watchEffect()","watchPostEffect()","watchSyncEffect()","watch()"]},{"text":"Reactivity: Utilities","link":"/api/reactivity-utilities","headers":["isRef()","unref()","toRef()","toRefs()","isProxy()","isReactive()","isReadonly()"]},{"text":"Reactivity: Advanced","link":"/api/reactivity-advanced","headers":["shallowRef()","triggerRef()","customRef()","shallowReactive()","shallowReadonly()","toRaw()","markRaw()","effectScope()","getCurrentScope()","onScopeDispose()"]},{"text":"Lifecycle Hooks","link":"/api/composition-api-lifecycle","headers":["onMounted()","onUpdated()","onUnmounted()","onBeforeMount()","onBeforeUpdate()","onBeforeUnmount()","onErrorCaptured()","onRenderTracked()","onRenderTriggered()","onActivated()","onDeactivated()","onServerPrefetch()"]},{"text":"Dependency Injection","link":"/api/composition-api-dependency-injection","headers":["provide()","inject()"]}]},{"text":"Options API","items":[{"text":"Options: State","link":"/api/options-state","headers":["data","props","computed","methods","watch","emits","expose"]},{"text":"Options: Rendering","link":"/api/options-rendering","headers":["template","render","compilerOptions"]},{"text":"Options: Lifecycle","link":"/api/options-lifecycle","headers":["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeUnmount","unmounted","errorCaptured","renderTracked","renderTriggered","activated","deactivated","serverPrefetch"]},{"text":"Options: Composition","link":"/api/options-composition","headers":["provide","inject","mixins","extends"]},{"text":"Options: Misc","link":"/api/options-misc","headers":["name","inheritAttrs","components","directives"]},{"text":"Component Instance","link":"/api/component-instance","headers":["$data","$props","$el","$options","$parent","$root","$slots","$refs","$attrs","$watch()","$emit()","$forceUpdate()","$nextTick()"]}]},{"text":"Built-ins","items":[{"text":"Directives","link":"/api/built-in-directives","headers":["v-text","v-html","v-show","v-if","v-else","v-else-if","v-for","v-on","v-bind","v-model","v-slot","v-pre","v-once","v-memo","v-cloak"]},{"text":"Components","link":"/api/built-in-components","headers":["<Transition>","<TransitionGroup>","<KeepAlive>","<Teleport>","<Suspense>"]},{"text":"Special Elements","link":"/api/built-in-special-elements","headers":["<component>","<slot>"]},{"text":"Special Attributes","link":"/api/built-in-special-attributes","headers":["key","ref","is"]}]},{"text":"Single File Component","items":[{"text":"Syntax Specification","link":"/api/sfc-spec","headers":["Overview","Language Blocks","Automatic Name Inference","Pre-Processors","Src Imports","Comments"]},{"text":"<script setup>","link":"/api/sfc-script-setup","headers":["Basic Syntax","Reactivity","Using Components","Using Custom Directives","defineProps() & defineEmits()","defineExpose()","useSlots() & useAttrs()","Usage alongside normal <script>","Top-level await","TypeScript-only Features","Restrictions"]},{"text":"CSS Features","link":"/api/sfc-css-features","headers":["Scoped CSS","CSS Modules","v-bind() in CSS"]}]},{"text":"Advanced APIs","items":[{"text":"Render Function","link":"/api/render-function","headers":["h()","mergeProps()","cloneVNode()","isVNode()","resolveComponent()","resolveDirective()","withDirectives()","withModifiers()"]},{"text":"Server-Side Rendering","link":"/api/ssr","headers":["renderToString()","renderToNodeStream()","pipeToNodeWritable()","renderToWebStream()","pipeToWebWritable()","renderToSimpleStream()","useSSRContext()"]},{"text":"TypeScript Utility Types","link":"/api/utility-types","headers":["PropType<T>","ComponentCustomProperties","ComponentCustomOptions","ComponentCustomProps","CSSProperties"]},{"text":"Custom Renderer","link":"/api/custom-renderer","headers":["createRenderer()"]}]}]');const g=e=>(f("data-v-163beffa"),e=e(),v(),e),S={id:"api-index"},k={class:"header"},y=g((()=>o("h1",null,"API Reference",-1))),C={class:"api-filter"},R=g((()=>o("label",{for:"api-filter"},"Filter",-1))),b=["id"],P={class:"api-groups"},A=["href"],w={key:0,class:"no-match"};var T=e(t({setup(e){const t=i(""),f=e=>e.toLowerCase().replace(/-/g," "),v=n((()=>{const e=f(t.value),i=t=>f(t).includes(e);return x.map((t=>{if(i(t.text))return t;const n=t.items.map((t=>{if(i(t.text))return t;if(e.includes("ssr")&&t.text.startsWith("Server"))return t;const n=t.headers.filter(i);return n.length?{text:t.text,link:t.link,headers:n}:null})).filter((e=>e));return n.length?{text:t.text,items:n}:null})).filter((e=>e))}));function h(e){return e.replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g,"-").replace(/\-{2,}/g,"-").replace(/^\-+|\-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase()}return(e,i)=>(r(),a("div",S,[o("div",k,[y,o("div",C,[R,s(o("input",{type:"search",placeholder:"Enter keyword",id:"api-filter","onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e)},null,512),[[p,t.value]])])]),(r(!0),a(l,null,c(u(v),(e=>(r(),a("div",{key:e.text,class:"api-section"},[o("h2",{id:h(e.text)},d(e.text),9,b),o("div",P,[(r(!0),a(l,null,c(e.items,(e=>(r(),a("div",{key:e.text,class:"api-group"},[o("h3",null,d(e.text),1),o("ul",null,[(r(!0),a(l,null,c(e.headers,(t=>(r(),a("li",{key:t},[o("a",{href:e.link+".html#"+h(t)},d(t),9,A)])))),128))])])))),128))])])))),128)),u(v).length?m("",!0):(r(),a("div",w,' No API matching "'+d(t.value)+'" found. ',1))]))}}),[["__scopeId","data-v-163beffa"]]);const $='{"title":"API Reference","description":"","frontmatter":{"title":"API Reference","sidebar":false,"page":true,"footer":false},"headers":[],"relativePath":"api/index.md"}',U={},I=Object.assign(U,{setup:e=>(e,t)=>(r(),a("div",null,[h(T)]))});export{$ as __pageData,I as default};
