import{_ as s,c as n,o as a,a as l}from"./app.376b3d02.js";const p='{"title":"Options: Misc","description":"","frontmatter":{},"headers":[{"level":2,"title":"name","slug":"name"},{"level":2,"title":"inheritAttrs","slug":"inheritattrs"},{"level":2,"title":"components","slug":"components"},{"level":2,"title":"directives","slug":"directives"}],"relativePath":"api/options-misc.md"}',o={},e=[l('<h1 id="options-misc" tabindex="-1">Options: Misc <a class="header-anchor" href="#options-misc" aria-hidden="true">#</a></h1><h2 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-hidden="true">#</a></h2><p>Explicitly declare a display name for the component.</p><ul><li><p><strong>Type</strong></p><div class="language-ts"><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>Details</strong></p><p>The name of a component is used for the following:</p><ul><li>Recursive self-reference in the component&#39;s own template</li><li>Display in Vue DevTools&#39; component inspection tree</li><li>Display in warning component traces</li></ul><p>When you use Single-File Components, the component already infers its own name from the filename. For example, a file named <code>MyComponent.vue</code> will have the inferred display name &quot;MyComponent&quot;.</p><p>Another case is that when a component is registered globally with <a href="/api/application.html#app-component"><code>app.component</code></a>, the global ID is automatically set as its name.</p><p>The <code>name</code> option allows you to override the inferred name, or to explicitly provide a name when no name can be inferred (e.g. when not using build tools, or an inlined non-SFC component).</p><p>There is one case where <code>name</code> is explicitly necessary: when matching against cacheable components in <a href="/guide/built-ins/keep-alive.html"><code>&lt;KeepAlive&gt;</code></a> via its <code>include / exclude</code> props.</p></li></ul><h2 id="inheritattrs" tabindex="-1">inheritAttrs <a class="header-anchor" href="#inheritattrs" aria-hidden="true">#</a></h2><ul><li><p><strong>Type</strong></p><div class="language-ts"><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">inheritAttrs</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// default: true</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>Details</strong></p><p>By default, parent scope attribute bindings that are not recognized as props will &quot;fallthrough&quot;. This means that when we have a single-root component, these bindings will be applied to the root element of the child component as normal HTML attributes. When authoring a component that wraps a target element or another component, this may not always be the desired behavior. By setting <code>inheritAttrs</code> to <code>false</code>, this default behavior can be disabled. The attributes are available via the <code>$attrs</code> instance property and can be explicitly bound to a non-root element using <code>v-bind</code>.</p></li><li><p><strong>Example</strong></p><div class="options-api"><div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">inheritAttrs</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">emits</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">input</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> label </span><span style="color:#89DDFF;">}}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">v-bind</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$attrs</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">v-bind</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">v-on</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">input</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">$emit</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">input</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">, </span><span style="color:#A6ACCD;">$event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">    /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div></div><div class="composition-api"><p>When declaring this option in a component that uses <code>&lt;script setup&gt;</code>, a separate <code>&lt;script&gt;</code> block is necessary:</p><div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">inheritAttrs</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#82AAFF;">defineProps</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">])</span></span>\n<span class="line"><span style="color:#82AAFF;">defineEmits</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">input</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">])</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> label </span><span style="color:#89DDFF;">}}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">v-bind</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$attrs</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">v-bind</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">v-on</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">input</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">$emit</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">input</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">, </span><span style="color:#A6ACCD;">$event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">    /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div></div></li><li><p><strong>See also:</strong> <a href="/guide/components/attrs.html">Fallthrough Attributes</a></p></li></ul><h2 id="components" tabindex="-1">components <a class="header-anchor" href="#components" aria-hidden="true">#</a></h2><p>An object that registers components to be made available to the component instance.</p><ul><li><p><strong>Type</strong></p><div class="language-ts"><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> [key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>Example</strong></p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Foo </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./Foo.vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Bar </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./Bar.vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// shorthand</span></span>\n<span class="line"><span style="color:#A6ACCD;">    Foo</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// register under a different name</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">RenamedBar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Bar</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>See also:</strong> <a href="/guide/components/registration.html">Component Registration</a></p></li></ul><h2 id="directives" tabindex="-1">directives <a class="header-anchor" href="#directives" aria-hidden="true">#</a></h2><p>An object that registers directives to be made available to the component instance.</p><ul><li><p><strong>Type</strong></p><div class="language-ts"><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">directives</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> [key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Directive</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>Example</strong></p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">directives</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// enables v-focus in template</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">focus</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">focus</span><span style="color:#F07178;">()</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><div class="language-vue-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-focus</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>A hash of directives to be made available to the component instance.</p></li><li><p><strong>See also:</strong> <a href="/guide/reusability/custom-directives.html">Custom Directives</a></p></li></ul>',12)];var t=s(o,[["render",function(s,l,p,o,t,c){return a(),n("div",null,e)}]]);export{p as __pageData,t as default};
