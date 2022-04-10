import{_ as s,c as e,o as n,a}from"./app.9d5e218f.js";const o='{"title":"Suspense","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"Async Dependencies","slug":"async-dependencies"},{"level":3,"title":"async setup()","slug":"async-setup"},{"level":3,"title":"Async Components","slug":"async-components"},{"level":2,"title":"Loading State","slug":"loading-state"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Error Handling","slug":"error-handling"},{"level":2,"title":"Combining with Other Components","slug":"combining-with-other-components"}],"relativePath":"guide/built-ins/suspense.md"}',t={},l=[a('<h1 id="suspense" tabindex="-1">Suspense <a class="header-anchor" href="#suspense" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">Experimental Feature</p><p><code>&lt;Suspense&gt;</code> is an experimental feature. It is not guaranteed to reach stable status and the API may change before it does.</p></div><p><code>&lt;Suspense&gt;</code> is a built-in component for orchestrating async dependencies in a component tree. It can render a loading state while waiting for multiple nested async dependencies down the component tree to be resolved.</p><h2 id="async-dependencies" tabindex="-1">Async Dependencies <a class="header-anchor" href="#async-dependencies" aria-hidden="true">#</a></h2><p>To explain the problem <code>&lt;Suspense&gt;</code> is trying to solve and how it interacts with these async dependencies, let&#39;s imagine a component hierarchy like the following:</p><div class="language-"><pre><code>&lt;Suspense&gt;\n└─ &lt;Dashboard&gt;\n   ├─ &lt;Profile&gt;\n   │  └─ &lt;FriendStatus&gt; (component with async setup())\n   └─ &lt;Content&gt;\n      ├─ &lt;ActivityFeed&gt; (async component)\n      └─ &lt;Stats&gt; (async component)\n</code></pre></div><p>In the component tree there are multiple nested components whose rendering depends on some async resource to be resolved first. Without <code>&lt;Suspense&gt;</code>, each of them will need to handle its own loading / error and loaded states. In the worst case scenario, we may see three loading spinners on the page, with content displayed at different times.</p><p>The <code>&lt;Suspense&gt;</code> component gives us the ability to display top-level loading / error states while we wait on these nested async dependencies to be resolved.</p><p>There are two types of async dependencies that <code>&lt;Suspense&gt;</code> can wait on:</p><ol><li><p>Components with an async <code>setup()</code> hook. This includes components using <code>&lt;script setup&gt;</code> with top-level <code>await</code> expressions.</p></li><li><p><a href="/guide/components/async.html">Async Components</a>.</p></li></ol><h3 id="async-setup" tabindex="-1"><code>async setup()</code> <a class="header-anchor" href="#async-setup" aria-hidden="true">#</a></h3><p>A Composition API component&#39;s <code>setup()</code> hook can be async:</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fetch</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">...</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">posts</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">json</span><span style="color:#F07178;">()</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">posts</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>If using <code>&lt;script setup&gt;</code>, the presence of top-level <code>await</code> expressions automatically makes the component an async dependency:</p><div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fetch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> posts </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">json</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> posts </span><span style="color:#89DDFF;">}}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h3 id="async-components" tabindex="-1">Async Components <a class="header-anchor" href="#async-components" aria-hidden="true">#</a></h3><p>Async components are <strong>&quot;suspensible&quot;</strong> by default. This means that if it has a <code>&lt;Suspense&gt;</code> in the parent chain, it will be treated as an async dependency of that <code>&lt;Suspense&gt;</code>. In this case, the loading state will be controlled by the <code>&lt;Suspense&gt;</code>, and the component&#39;s own loading, error, delay and timeout options will be ignored.</p><p>The async component can opt-out of <code>Suspense</code> control and let the component always control its own loading state by specifying <code>suspensible: false</code> in its options.</p><h2 id="loading-state" tabindex="-1">Loading State <a class="header-anchor" href="#loading-state" aria-hidden="true">#</a></h2><p>The <code>&lt;Suspense&gt;</code> component has two slots: <code>#default</code> and <code>#fallback</code>. Both slots only allow for <strong>one</strong> immediate child node. The node in the default slot is shown if possible. If not, the node in the fallback slot will be shown instead.</p><div class="language-vue-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Suspense</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- component with nested async dependencies --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Dashboard</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- loading state via #fallback slot --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">fallback</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    Loading...</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Suspense</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>On initial render, <code>&lt;Suspense&gt;</code> will render its default slot content in memory. If any async dependencies are encountered during the process, it will enter a <strong>pending</strong> state. During the pending state, the fallback content will be displayed. When all encountered async dependencies have been resolved, <code>&lt;Suspense&gt;</code> enters a <strong>resolved</strong> state and the resolved default slot content is displayed.</p><p>If no async dependencies were encountered during the initial render, <code>&lt;Suspense&gt;</code> will directly go into a resolved state.</p><p>Once in a resolved state, <code>&lt;Suspense&gt;</code> will only revert to a pending state if the root node of the <code>#default</code> slot is replaced. New async dependencies nested deeper in the tree will <strong>not</strong> cause the <code>&lt;Suspense&gt;</code> to revert to a pending state.</p><p>When a revert happens, fallback content will not be immediately displayed. Instead, <code>&lt;Suspense&gt;</code> will display the previous <code>#default</code> content while waiting for the new content and its async dependencies to be resolved. This behavior can be configured with the <code>timeout</code> prop: <code>&lt;Suspense&gt;</code> will switch to fallback content if it takes longer than <code>timeout</code> to render the new default content. A <code>timeout</code> value of <code>0</code> will cause the fallback content to be displayed immediately when default content is replaced.</p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><p>The <code>&lt;Suspense&gt;</code> component emits 3 events: <code>pending</code>, <code>resolve</code> and <code>fallback</code>. The <code>pending</code> event occurs when entering a pending state. The <code>resolve</code> event is emitted when new content has finished resolving in the <code>default</code> slot. The <code>fallback</code> event is fired when the contents of the <code>fallback</code> slot are shown.</p><p>The events could be used, for example, to show a loading indicator in front of the old DOM while new components are loading.</p><h2 id="error-handling" tabindex="-1">Error Handling <a class="header-anchor" href="#error-handling" aria-hidden="true">#</a></h2><p><code>&lt;Suspense&gt;</code> currently does not provide error handling via the component itself - however, you can use the <a href="/api/options-lifecycle.html#errorcaptured"><code>errorCaptured</code></a> option or the <a href="/api/composition-api-lifecycle.html#onerrorcaptured"><code>onErrorCaptured()</code></a> hook to capture and handle async errors in the parent component of <code>&lt;Suspense&gt;</code>.</p><h2 id="combining-with-other-components" tabindex="-1">Combining with Other Components <a class="header-anchor" href="#combining-with-other-components" aria-hidden="true">#</a></h2><p>It is common to want to use <code>&lt;Suspense&gt;</code> in combination with the <a href="./transition.html"><code>&lt;Transition&gt;</code></a> and <a href="./keep-alive.html"><code>&lt;KeepAlive&gt;</code></a> components. The nesting order of these components is important to get them all working correctly.</p><p>In addition, these components are often used in conjunction with the <code>&lt;RouterView&gt;</code> component from <a href="https://router.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue Router</a>.</p><p>The following example shows how to nest these components so that they all behave as expected. For simpler combinations you can remove the components that you don&#39;t need:</p><div class="language-vue-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">RouterView</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-slot</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">{ </span><span style="color:#A6ACCD;">Component</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">Component</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Transition</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">mode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">out-in</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">KeepAlive</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Suspense</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;">&lt;!-- main content --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">Component</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;">&lt;!-- loading state --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">fallback</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            Loading...</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Suspense</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">KeepAlive</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Transition</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">RouterView</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>Vue Router has built-in support for <a href="https://router.vuejs.org/guide/advanced/lazy-loading.html" target="_blank" rel="noopener noreferrer">lazily loading components</a> using dynamic imports. These are distinct from async components and currently they will not trigger <code>&lt;Suspense&gt;</code>. However, they can still have async components as descendants and those can trigger <code>&lt;Suspense&gt;</code> in the usual way.</p>',36)];var p=s(t,[["render",function(s,a,o,t,p,c){return n(),e("div",null,l)}]]);export{o as __pageData,p as default};
