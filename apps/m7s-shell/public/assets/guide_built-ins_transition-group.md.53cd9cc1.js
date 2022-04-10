import{P as s,o as n,c as a,d as l,j as o,w as e,F as p,n as t,t as c,u as i,Q as r,r as F,h as D,C,D as y,a as g}from"./app.376b3d02.js";import{g as d}from"./chunks/index.a609bfb6.js";const A={class:"demo"},u={setup(F){const D=s([1,2,3,4,5]);let C=D.length+1;function y(){D.splice(d(),0,C++)}function g(){D.splice(d(),1)}function d(){return Math.floor(Math.random()*D.length)}return(s,F)=>(n(),a("div",A,[l("button",{onClick:y},"Add at random index"),l("button",{onClick:g},"Remove at random index"),o(r,{name:"list",tag:"ul",style:{"margin-top":"20px"}},{default:e((()=>[(n(!0),a(p,null,t(i(D),(s=>(n(),a("li",{key:s},c(s),1)))),128))])),_:1})]))}};const b={class:"demo"},I={setup(s){let i=F([1,2,3,4,5]),D=i.value.length+1;function C(){i.value.splice(g(),0,D++)}function y(){i.value.splice(g(),1)}function g(){return Math.floor(Math.random()*i.value.length)}return(s,F)=>(n(),a("div",b,[l("button",{onClick:C},"Add"),l("button",{onClick:y},"Remove"),l("button",{onClick:F[0]||(F[0]=s=>function(s){let n,a=s.length;for(;0!=a;)n=Math.floor(Math.random()*a),a--,[s[a],s[n]]=[s[n],s[a]];return s}(i.value))},"Shuffle"),o(r,{name:"list2",tag:"ul",style:{"margin-top":"20px"}},{default:e((()=>[(n(!0),a(p,null,t(i.value,(s=>(n(),a("li",{class:"list-item",key:s},c(s),1)))),128))])),_:1})]))}},h={class:"demo",style:{height:"265px"}},m=["data-index"],v={setup(s){const i=[{msg:"Bruce Lee"},{msg:"Jackie Chan"},{msg:"Chuck Norris"},{msg:"Jet Li"},{msg:"Kung Fury"}];let g=F("");const A=D((()=>i.filter((s=>s.msg.toLowerCase().includes(g.value)))));function u(s){s.style.opacity=0,s.style.height=0}function b(s,n){d.to(s,{opacity:1,height:"1.6em",delay:.15*s.dataset.index,onComplete:n})}function I(s,n){d.to(s,{opacity:0,height:0,delay:.15*s.dataset.index,onComplete:n})}return(s,i)=>(n(),a("div",h,[C(l("input",{"onUpdate:modelValue":i[0]||(i[0]=s=>g.value=s),style:{"margin-bottom":"20px"}},null,512),[[y,g.value]]),o(r,{tag:"ul",css:!1,onBeforeEnter:u,onEnter:b,onLeave:I},{default:e((()=>[(n(!0),a(p,null,t(A.value,((s,l)=>(n(),a("li",{key:s.msg,"data-index":l},c(s.msg),9,m)))),128))])),_:1})]))}},G=g('<h1 id="transitiongroup" tabindex="-1">TransitionGroup <a class="header-anchor" href="#transitiongroup" aria-hidden="true">#</a></h1><p><code>&lt;TransitionGroup&gt;</code> is a built-in component designed for animating the insertion, removal, and order change of elements or components that are rendered in a list.</p><h2 id="differences-from-transition" tabindex="-1">Differences from <code>&lt;Transition&gt;</code> <a class="header-anchor" href="#differences-from-transition" aria-hidden="true">#</a></h2><p><code>&lt;TransitionGroup&gt;</code> supports the same props, CSS transition classes, and JavaScript hook listeners as <code>&lt;Transition&gt;</code>, with the following differences:</p><ul><li><p>By default, it doesn&#39;t render a wrapper element. But you can specify an element to be rendered with the <code>tag</code> prop.</p></li><li><p><a href="./transition.html#transition-modes">Transition modes</a> are not available, because we are no longer alternating between mutually exclusive elements.</p></li><li><p>Elements inside are <strong>always required</strong> to have a unique <code>key</code> attribute.</p></li><li><p>CSS transition classes will be applied to individual elements in the list, <strong>not</strong> to the group / container itself.</p></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>When used in <a href="/guide/essentials/component-basics.html#dom-template-parsing-caveats">DOM templates</a>, it should be referenced as <code>&lt;transition-group&gt;</code>.</p></div><h2 id="enter-leave-transitions" tabindex="-1">Enter / Leave Transitions <a class="header-anchor" href="#enter-leave-transitions" aria-hidden="true">#</a></h2><p>Here is an example of applying enter / leave transitions to a <code>v-for</code> list using <code>&lt;TransitionGroup&gt;</code>:</p><div class="language-vue-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TransitionGroup</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tag</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ul</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;"> in </span><span style="color:#A6ACCD;">items</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">}}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">TransitionGroup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><div class="language-css"><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-enter-active</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-leave-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> all </span><span style="color:#F78C6C;">0.5s</span><span style="color:#A6ACCD;"> ease</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-enter-from</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-leave-to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translateX</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">30px</span><span style="color:#89DDFF;">);</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div>',10),X=g('<h2 id="move-transitions" tabindex="-1">Move Transitions <a class="header-anchor" href="#move-transitions" aria-hidden="true">#</a></h2><p>The above demo has some obvious flaws: when an item is inserted or removed, its surrounding items instantly &quot;jump&quot; into place instead of moving smoothly. We can fix this by adding a few additional CSS rules:</p><div class="language-css"><div class="highlight-lines"><div class="highlighted"> </div><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><br></div><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-move</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* apply transition to moving elements */</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-enter-active</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-leave-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> all </span><span style="color:#F78C6C;">0.5s</span><span style="color:#A6ACCD;"> ease</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-enter-from</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-leave-to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translateX</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">30px</span><span style="color:#89DDFF;">);</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">/* ensure leaving items are taken out of layout flow so that moving</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   animations can be calculated correctly. */</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-leave-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>Now it looks much better - even animating smoothly when the whole list is shuffled:</p>',4),B=g('<p><a href="/examples/#list-transition">Full Example</a></p><h2 id="staggering-list-transitions" tabindex="-1">Staggering List Transitions <a class="header-anchor" href="#staggering-list-transitions" aria-hidden="true">#</a></h2><p>By communicating with JavaScript transitions through data attributes, it&#39;s also possible to stagger transitions in a list. First, we render the index of an item as a data attribute on the DOM element:</p><div class="language-vue-html"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlighted"> </div><br><br><br><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TransitionGroup</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">tag</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ul</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  :</span><span style="color:#C792EA;">css</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  @</span><span style="color:#C792EA;">before-enter</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">onBeforeEnter</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  @</span><span style="color:#C792EA;">enter</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">onEnter</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  @</span><span style="color:#C792EA;">leave</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">onLeave</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">, </span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">) in </span><span style="color:#A6ACCD;">computedList</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">    :</span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">msg</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">    :</span><span style="color:#C792EA;">data-index</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  &gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">msg </span><span style="color:#89DDFF;">}}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">TransitionGroup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>Then, in JavaScript hooks, we animate the element with a delay based on the data attribute:</p><div class="language-js"><div class="highlight-lines"><br><br><br><br><div class="highlighted"> </div><br><br><br><br></div><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">onEnter</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> done</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">to</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    opacity</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    height</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1.6em</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    delay</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dataset</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.15</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    onComplete</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">done</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div>',6),Z=g('<div class="composition-api"><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuXG5jb25zdCBsaXN0ID0gW1xuICB7IG1zZzogJ0JydWNlIExlZScgfSxcbiAgeyBtc2c6ICdKYWNraWUgQ2hhbicgfSxcbiAgeyBtc2c6ICdDaHVjayBOb3JyaXMnIH0sXG4gIHsgbXNnOiAnSmV0IExpJyB9LFxuICB7IG1zZzogJ0t1bmcgRnVyeScgfVxuXVxuXG5jb25zdCBxdWVyeSA9IHJlZignJylcblxuY29uc3QgY29tcHV0ZWRMaXN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gbGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubXNnLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudmFsdWUpKVxufSlcblxuZnVuY3Rpb24gb25CZWZvcmVFbnRlcihlbCkge1xuICBlbC5zdHlsZS5vcGFjaXR5ID0gMFxuICBlbC5zdHlsZS5oZWlnaHQgPSAwXG59XG5cbmZ1bmN0aW9uIG9uRW50ZXIoZWwsIGRvbmUpIHtcbiAgZ3NhcC50byhlbCwge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgaGVpZ2h0OiAnMS42ZW0nLFxuICAgIGRlbGF5OiBlbC5kYXRhc2V0LmluZGV4ICogMC4xNSxcbiAgICBvbkNvbXBsZXRlOiBkb25lXG4gIH0pXG59XG5cbmZ1bmN0aW9uIG9uTGVhdmUoZWwsIGRvbmUpIHtcbiAgZ3NhcC50byhlbCwge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIGRlbGF5OiBlbC5kYXRhc2V0LmluZGV4ICogMC4xNSxcbiAgICBvbkNvbXBsZXRlOiBkb25lXG4gIH0pXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aW5wdXQgdi1tb2RlbD1cInF1ZXJ5XCIgLz5cbiAgPFRyYW5zaXRpb25Hcm91cFxuICAgIHRhZz1cInVsXCJcbiAgICA6Y3NzPVwiZmFsc2VcIlxuICAgIEBiZWZvcmUtZW50ZXI9XCJvbkJlZm9yZUVudGVyXCJcbiAgICBAZW50ZXI9XCJvbkVudGVyXCJcbiAgICBAbGVhdmU9XCJvbkxlYXZlXCJcbiAgPlxuICAgIDxsaVxuICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGNvbXB1dGVkTGlzdFwiXG4gICAgICA6a2V5PVwiaXRlbS5tc2dcIlxuICAgICAgOmRhdGEtaW5kZXg9XCJpbmRleFwiXG4gICAgPlxuICAgICAge3sgaXRlbS5tc2cgfX1cbiAgICA8L2xpPlxuICA8L1RyYW5zaXRpb25Hcm91cD5cbjwvdGVtcGxhdGU+XG4iLCJpbXBvcnQtbWFwLmpzb24iOiJ7XG4gIFwiaW1wb3J0c1wiOiB7XG4gICAgXCJnc2FwXCI6IFwiaHR0cHM6Ly91bnBrZy5jb20vZ3NhcD9tb2R1bGVcIixcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiXG4gIH1cbn0ifQ==" target="_blank" rel="noopener noreferrer">Full Example in the Playground</a></p></div><div class="options-api"><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdD5cbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5cbmNvbnN0IGxpc3QgPSBbXG4gIHsgbXNnOiAnQnJ1Y2UgTGVlJyB9LFxuICB7IG1zZzogJ0phY2tpZSBDaGFuJyB9LFxuICB7IG1zZzogJ0NodWNrIE5vcnJpcycgfSxcbiAgeyBtc2c6ICdKZXQgTGknIH0sXG4gIHsgbXNnOiAnS3VuZyBGdXJ5JyB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnk6ICcnXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkTGlzdCgpIHtcbiAgICAgIHJldHVybiBsaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5tc2cudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnF1ZXJ5KSlcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkJlZm9yZUVudGVyKGVsKSB7XG4gICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gMFxuICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gMFxuICAgIH0sXG4gICAgb25FbnRlcihlbCwgZG9uZSkge1xuICAgICAgZ3NhcC50byhlbCwge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBoZWlnaHQ6ICcxLjZlbScsXG4gICAgICAgIGRlbGF5OiBlbC5kYXRhc2V0LmluZGV4ICogMC4xNSxcbiAgICAgICAgb25Db21wbGV0ZTogZG9uZVxuICAgICAgfSlcbiAgICB9LFxuICAgIG9uTGVhdmUoZWwsIGRvbmUpIHtcbiAgICAgIGdzYXAudG8oZWwsIHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBkZWxheTogZWwuZGF0YXNldC5pbmRleCAqIDAuMTUsXG4gICAgICAgIG9uQ29tcGxldGU6IGRvbmVcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aW5wdXQgdi1tb2RlbD1cInF1ZXJ5XCIgLz5cbiAgPFRyYW5zaXRpb25Hcm91cFxuICAgIHRhZz1cInVsXCJcbiAgICA6Y3NzPVwiZmFsc2VcIlxuICAgIEBiZWZvcmUtZW50ZXI9XCJvbkJlZm9yZUVudGVyXCJcbiAgICBAZW50ZXI9XCJvbkVudGVyXCJcbiAgICBAbGVhdmU9XCJvbkxlYXZlXCJcbiAgPlxuICAgIDxsaVxuICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGNvbXB1dGVkTGlzdFwiXG4gICAgICA6a2V5PVwiaXRlbS5tc2dcIlxuICAgICAgOmRhdGEtaW5kZXg9XCJpbmRleFwiXG4gICAgPlxuICAgICAge3sgaXRlbS5tc2cgfX1cbiAgICA8L2xpPlxuICA8L1RyYW5zaXRpb25Hcm91cD5cbjwvdGVtcGxhdGU+XG4iLCJpbXBvcnQtbWFwLmpzb24iOiJ7XG4gIFwiaW1wb3J0c1wiOiB7XG4gICAgXCJnc2FwXCI6IFwiaHR0cHM6Ly91bnBrZy5jb20vZ3NhcD9tb2R1bGVcIixcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiXG4gIH1cbn0ifQ==" target="_blank" rel="noopener noreferrer">Full Example in the Playground</a></p></div><hr><p><strong>Related</strong></p><ul><li><a href="/api/built-in-components.html#transitiongroup"><code>&lt;TransitionGroup&gt;</code> API reference</a></li></ul>',5),x='{"title":"TransitionGroup","description":"","frontmatter":{},"headers":[{"level":2,"title":"Differences from <Transition>","slug":"differences-from-transition"},{"level":2,"title":"Enter / Leave Transitions","slug":"enter-leave-transitions"},{"level":2,"title":"Move Transitions","slug":"move-transitions"},{"level":2,"title":"Staggering List Transitions","slug":"staggering-list-transitions"}],"relativePath":"guide/built-ins/transition-group.md"}',f={},V=Object.assign(f,{setup:s=>(s,l)=>(n(),a("div",null,[G,o(u),X,o(I),B,o(v),Z]))});export{x as __pageData,V as default};
