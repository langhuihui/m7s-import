import{_ as s,c as n,o as e,a}from"./app.9d5e218f.js";const o='{"title":"Quick Start","description":"","frontmatter":{"footer":false},"headers":[{"level":2,"title":"With Build Tools","slug":"with-build-tools"},{"level":3,"title":"Online","slug":"online"},{"level":3,"title":"Local","slug":"local"},{"level":2,"title":"Without Build Tools","slug":"without-build-tools"},{"level":3,"title":"Serving over HTTP","slug":"serving-over-http"},{"level":2,"title":"Next Steps","slug":"next-steps"}],"relativePath":"guide/quick-start.md"}',l={},t=[a('<h1 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-hidden="true">#</a></h1><p>Depending on your use case and preference, you can use Vue with or without a build step.</p><h2 id="with-build-tools" tabindex="-1">With Build Tools <a class="header-anchor" href="#with-build-tools" aria-hidden="true">#</a></h2><p>A build setup allows us to use Vue <a href="/guide/scaling-up/sfc.html">Single-File Components</a> (SFCs). The official Vue build setup is based on <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a>, a frontend build tool that is modern, lightweight and extremely fast.</p><h3 id="online" tabindex="-1">Online <a class="header-anchor" href="#online" aria-hidden="true">#</a></h3><p>You can try Vue with SFCs online on <a href="https://vite.new/vue" target="_blank" rel="noopener noreferrer">StackBlitz</a>. StackBlitz runs the Vite-based build setup directly in the browser, so it is almost identical to the local setup but doesn&#39;t require installing anything on your machine.</p><h3 id="local" tabindex="-1">Local <a class="header-anchor" href="#local" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">Pre-requisites</p><ul><li>Familiarity with the command line</li><li>Install <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a></li></ul></div><p>To create a build-tool-enabled Vue project on your machine, run the following command in your command line (without the <code>&gt;</code> sign):</p><div class="language-sh"><pre><code><span class="line"><span style="color:var(--vt-c-green);">&gt;</span> <span style="color:#A6ACCD;">npm init vue@latest</span></span></code></pre></div><p>This command will install and execute <a href="https://github.com/vuejs/create-vue" target="_blank" rel="noopener noreferrer">create-vue</a>, the official Vue project scaffolding tool. You will be presented with prompts for a number of optional features such as TypeScript and testing support:</p><div class="language-sh"><pre><code><span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Project name: <span style="color:#888;">… <span style="color:#89DDFF;">&lt;</span><span style="color:#888;">your-project-name</span><span style="color:#89DDFF;">&gt;</span></span></span>\n<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add TypeScript? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline;">No</span> / Yes</span></span>\n<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add JSX Support? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline;">No</span> / Yes</span></span>\n<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add Vue Router for Single Page Application development? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline;">No</span> / Yes</span></span>\n<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add Pinia for state management? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline;">No</span> / Yes</span></span>\n<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add Vitest for Unit testing? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline;">No</span> / Yes</span></span>\n<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add Cypress for both Unit and End-to-End testing? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline;">No</span> / Yes</span></span>\n<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add ESLint for code quality? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline;">No</span> / Yes</span></span>\n<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add Prettier for code formating? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline;">No</span> / Yes</span></span>\n<span></span>\n<span style="color:#A6ACCD;">Scaffolding project in ./<span style="color:#89DDFF;">&lt;</span><span style="color:#888;">your-project-name</span><span style="color:#89DDFF;">&gt;</span>...</span>\n<span style="color:#A6ACCD;">Done.</span></code></pre></div><p>If you are unsure about an option, simply choose <code>No</code> by hitting enter for now. Once the project is created, follow the instructions to install dependencies and start the dev server:</p><div class="language-sh"><pre><code><span class="line"><span style="color:var(--vt-c-green);">&gt; </span><span style="color:#A6ACCD;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#888;">your-project-name</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:var(--vt-c-green);">&gt; </span><span style="color:#A6ACCD;">npm install</span></span>\n<span class="line"><span style="color:var(--vt-c-green);">&gt; </span><span style="color:#A6ACCD;">npm run dev</span></span>\n<span class="line"></span></code></pre></div><p>You should now have your first Vue project running! Here are some additional tips:</p><ul><li>The recommended IDE setup is <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a> + <a href="https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar" target="_blank" rel="noopener noreferrer">Volar extension</a>. <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer">WebStorm</a> is also viable.</li><li>More tooling details, including integration with backend frameworks, are discussed in the <a href="/guide/scaling-up/tooling.html">Tooling Guide</a>.</li><li>To learn more about the underlying build tool Vite, check out the <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite docs</a>.</li><li>If you chose to use TypeScript, check out the <a href="./typescript/overview.html">TypeScript Usage Guide</a>.</li></ul><p>When you are ready to ship your app to production, run the following:</p><div class="language-sh"><pre><code><span class="line"><span style="color:var(--vt-c-green);">&gt; </span><span style="color:#A6ACCD;">npm run build</span></span>\n<span class="line"></span></code></pre></div><p>This will create a production-ready build of your app in the project&#39;s <code>./dist</code> directory. Check out the <a href="/guide/best-practices/production-deployment.html">Production Deployment Guide</a> to learn more about shipping your app to production.</p><p><a href="#next-steps">Next Steps &gt;</a></p><h2 id="without-build-tools" tabindex="-1">Without Build Tools <a class="header-anchor" href="#without-build-tools" aria-hidden="true">#</a></h2><p>To get started with Vue without a build step, simply copy the following code into an HTML file and open it in your browser:</p><div class="language-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/vue@3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ message }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello Vue!</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>The above example uses the global build of Vue where all APIs are exposed under the global <code>Vue</code> variable.</p><p>While the global build works, we will be primarily using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" target="_blank" rel="noopener noreferrer">ES modules</a> syntax throughout the rest of the documentation for consistency. In order to use Vue over native ES modules, use the following HTML instead:</p><div class="language-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">importmap</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  {</span></span>\n<span class="line"><span style="color:#A6ACCD;">    &quot;imports&quot;: {</span></span>\n<span class="line"><span style="color:#A6ACCD;">      &quot;vue&quot;: &quot;https://unpkg.com/vue@3/dist/vue.esm-browser.js&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    }</span></span>\n<span class="line"><span style="color:#A6ACCD;">  }</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ message }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello Vue!</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>Notice how we can import directly from <code>&#39;vue&#39;</code> in our code - this is made possible by the <code>&lt;script type=&quot;importmap&quot;&gt;</code> block, leveraging a native browser feature called <a href="https://caniuse.com/import-maps" target="_blank" rel="noopener noreferrer">Import Maps</a>. Import maps are currently only available in Chromium-based browsers, so we recommend using Chrome or Edge during the learning process. If your preferred browser does not support import maps yet, you can polyfill it with <a href="https://github.com/guybedford/es-module-shims" target="_blank" rel="noopener noreferrer">es-module-shims</a>.</p><p>You can add entries for other dependencies to the import map - just make sure they point to the ES modules version of the library you intend to use.</p><div class="tip custom-block"><p class="custom-block-title">Not for production</p><p>The import-maps-based setup is meant for learning only - if you intend to use Vue without build tools in production, make sure to check out the <a href="/guide/best-practices/production-deployment.html#without-build-tools">Production Deployment Guide</a>.</p></div><h3 id="serving-over-http" tabindex="-1">Serving over HTTP <a class="header-anchor" href="#serving-over-http" aria-hidden="true">#</a></h3><p>As we dive deeper into the guide, we may need to split our code into separate JavaScript files so that they are easier to manage. For example:</p><div class="language-html"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- index.html --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> MyComponent </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./my-component.js</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(MyComponent)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><div class="language-js"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// my-component.js</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">&lt;div&gt;count is {{ count }}&lt;/div&gt;</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>In order for this to work, you need to serve your HTML over the <code>http://</code> protocol instead of <code>file://</code> protocol. To start a local HTTP server, first install <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a>, and then run <code>npx serve</code> from the command line in the same directory where your HTML file is. You can also use any other HTTP server that can serve static files with correct MIME types.</p><p>You may have noticed that the imported component&#39;s template is inlined as a JavaScript string. If you are using VSCode, you can install the <a href="https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html" target="_blank" rel="noopener noreferrer">es6-string-html</a> extension and prefix the strings with a <code>/*html*/</code> comment to get syntax highlighting for them.</p><h2 id="next-steps" tabindex="-1">Next Steps <a class="header-anchor" href="#next-steps" aria-hidden="true">#</a></h2><p>If you skipped the <a href="/guide/introduction.html">Introduction</a>, we strongly recommend reading it before moving on to the rest of the documentation.</p><div class="vt-box-container next-steps"><a class="vt-box" href="/guide/essentials/application.html"><p class="next-steps-link">Continue the Guide</p><p class="next-steps-caption">The guide walks you through every aspect of the framework in full details.</p></a><a class="vt-box" href="/tutorial/"><p class="next-steps-link">Try the Tutorial</p><p class="next-steps-caption">For those who prefer learning things hands-on.</p></a><a class="vt-box" href="/examples/"><p class="next-steps-link">Check out the Examples</p><p class="next-steps-caption">Explore examples of core features and common UI tasks.</p></a></div>',38)];var p=s(l,[["render",function(s,a,o,l,p,r){return e(),n("div",null,t)}]]);export{o as __pageData,p as default};
