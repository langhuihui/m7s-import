import{_ as s,c as e,o as n,a}from"./app.a30aa7c3.js";const o='{"title":"Lifecycle Hooks","description":"","frontmatter":{},"headers":[{"level":2,"title":"Registering Lifecycle Hooks","slug":"registering-lifecycle-hooks"},{"level":2,"title":"Lifecycle Diagram","slug":"lifecycle-diagram"}],"relativePath":"guide/essentials/lifecycle.md"}',l={},t=[a('<h1 id="lifecycle-hooks" tabindex="-1">Lifecycle Hooks <a class="header-anchor" href="#lifecycle-hooks" aria-hidden="true">#</a></h1><p>Each Vue component instance goes through a series of initialization steps when it&#39;s created - for example, it needs to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when data changes. Along the way, it also runs functions called lifecycle hooks, giving users the opportunity to add their own code at specific stages.</p><h2 id="registering-lifecycle-hooks" tabindex="-1">Registering Lifecycle Hooks <a class="header-anchor" href="#registering-lifecycle-hooks" aria-hidden="true">#</a></h2><p>For example, the <span class="composition-api"><code>onMounted</code></span><span class="options-api"><code>mounted</code></span> hook can be used to run code after the component has finished the initial rendering and created the DOM nodes:</p><div class="composition-api"><div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onMounted</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#82AAFF;">onMounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">the component is now mounted.</span><span style="color:#89DDFF;">`</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div></div><div class="options-api"><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">the component is now mounted.</span><span style="color:#89DDFF;">`</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></div><p>There are also other hooks which will be called at different stages of the instance&#39;s lifecycle, with the most commonly used being <span class="composition-api"><a href="/api/composition-api-lifecycle.html#onmounted"><code>onMounted</code></a>, <a href="/api/composition-api-lifecycle.html#onupdated"><code>onUpdated</code></a>, and <a href="/api/composition-api-lifecycle.html#onunmounted"><code>onUnmounted</code></a>.</span><span class="options-api"><a href="/api/options-lifecycle.html#mounted"><code>mounted</code></a>, <a href="/api/options-lifecycle.html#updated"><code>updated</code></a>, and <a href="/api/options-lifecycle.html#unmounted"><code>unmounted</code></a>.</span></p><div class="options-api"><p>All lifecycle hooks are called with their <code>this</code> context pointing to the current active instance invoking it. Note this means you should avoid using arrow functions when declaring lifecycle hooks, as you won&#39;t be able to access the component instance via <code>this</code> if you do so.</p></div><div class="composition-api"><p>When calling <code>onMounted</code>, Vue automatically associates the registered callback function with the current active component instance. This requires these hooks to be registered <strong>synchronously</strong> during component setup. For example, do not do this:</p><div class="language-js"><pre><code><span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">onMounted</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// this won&#39;t work.</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>Do note this doesn&#39;t mean that the call must be placed lexically inside <code>setup()</code> or <code>&lt;script setup&gt;</code>. <code>onMounted()</code> can be called in an external function as long as the call stack is synchronous and originates from within <code>setup()</code>.</p></div><h2 id="lifecycle-diagram" tabindex="-1">Lifecycle Diagram <a class="header-anchor" href="#lifecycle-diagram" aria-hidden="true">#</a></h2><p>Below is a diagram for the instance lifecycle. You don&#39;t need to fully understand everything going on right now, but as you learn and build more, it will be a useful reference.</p><p><img src="/assets/lifecycle.16e4c08e.png" alt="Component lifecycle diagram"></p><p>Consult the <span class="composition-api"><a href="/api/composition-api-lifecycle.html">Lifecycle Hooks API reference</a></span><span class="options-api"><a href="/api/options-lifecycle.html">Lifecycle Hooks API reference</a></span> for details on all lifecycle hooks and their respective use cases.</p>',13)];var p=s(l,[["render",function(s,a,o,l,p,c){return n(),e("div",null,t)}]]);export{o as __pageData,p as default};
