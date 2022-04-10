import{_ as e,c as t,j as r,a as o,L as i,o as a}from"./app.376b3d02.js";const n='{"title":"Tooling","description":"","frontmatter":{},"headers":[{"level":2,"title":"Try It Online","slug":"try-it-online"},{"level":2,"title":"Project Scaffolding","slug":"project-scaffolding"},{"level":3,"title":"Vite","slug":"vite"},{"level":3,"title":"Vue CLI","slug":"vue-cli"},{"level":3,"title":"Note on In-Browser Template Compilation","slug":"note-on-in-browser-template-compilation"},{"level":2,"title":"IDE Support","slug":"ide-support"},{"level":2,"title":"Browser Devtools","slug":"browser-devtools"},{"level":2,"title":"TypeScript","slug":"typescript"},{"level":2,"title":"Testing","slug":"testing"},{"level":2,"title":"Linting","slug":"linting"},{"level":2,"title":"Formatting","slug":"formatting"},{"level":2,"title":"SFC Custom Block Integrations","slug":"sfc-custom-block-integrations"},{"level":2,"title":"Lower-Level Packages","slug":"lower-level-packages"},{"level":3,"title":"@vue/compiler-sfc","slug":"vue-compiler-sfc"},{"level":3,"title":"@vitejs/plugin-vue","slug":"vitejs-plugin-vue"},{"level":3,"title":"vue-loader","slug":"vue-loader"},{"level":2,"title":"Other Online Playgrounds","slug":"other-online-playgrounds"}],"relativePath":"guide/scaling-up/tooling.md"}',l={},s=o('<h1 id="tooling" tabindex="-1">Tooling <a class="header-anchor" href="#tooling" aria-hidden="true">#</a></h1><h2 id="try-it-online" tabindex="-1">Try It Online <a class="header-anchor" href="#try-it-online" aria-hidden="true">#</a></h2><p>You don&#39;t need to install anything on your machine to try out Vue SFCs - there are online playgrounds that allow you to do so right in the browser:</p><ul><li><a href="https://sfc.vuejs.org" target="_blank" rel="noopener noreferrer">Vue SFC Playground</a><ul><li>Always deployed from latest commit</li><li>Designed for inspecting component compilation results</li></ul></li><li><a href="https://vite.new/vue" target="_blank" rel="noopener noreferrer">Vue + Vite on StackBlitz</a><ul><li>IDE-like environment running actual Vite dev server in the browser</li><li>Closest to local setup</li></ul></li></ul><p>It is also recommended to use these online playgrounds to provide reproductions when reporting bugs.</p><h2 id="project-scaffolding" tabindex="-1">Project Scaffolding <a class="header-anchor" href="#project-scaffolding" aria-hidden="true">#</a></h2><h3 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-hidden="true">#</a></h3><p><a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a> is a lightweight and fast build tool with first-class Vue SFC support. It is created by Evan You, who is also the author of Vue!</p><p>To get started with Vite + Vue, simply run:</p><div class="language-sh"><pre><code><span class="line"><span style="color:var(--vt-c-green);">$</span> <span style="color:#A6ACCD;">npm init vue@latest</span></span></code></pre></div><p>This command will install and execute <a href="https://github.com/vuejs/create-vue" target="_blank" rel="noopener noreferrer">create-vue</a>, the official Vue project scaffolding tool.</p><ul><li>To learn more about Vite, check out the <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite docs</a>.</li><li>To configure Vue-specific behavior in a Vite project, for example passing options to the Vue compiler, check out the docs for <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-vue#readme" target="_blank" rel="noopener noreferrer">@vitejs/plugin-vue</a>.</li></ul><p>Both online playgrounds mentioned above also support downloading files as a Vite project.</p><h3 id="vue-cli" tabindex="-1">Vue CLI <a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a></h3><p><a href="https://cli.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue CLI</a> is the official webpack-based toolchain for Vue. It is now in maintenance mode and we recommend starting new projects with Vite unless you rely on specific webpack-only features. Vite will provide superior developer experience in most cases.</p><p>For information on migrating from Vue CLI to Vite:</p><ul><li><a href="https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/" target="_blank" rel="noopener noreferrer">Vue CLI -&gt; Vite Migration Guide from VueSchool.io</a></li><li><a href="https://github.com/vitejs/awesome-vite#vue-cli" target="_blank" rel="noopener noreferrer">Tools / Plugins that help with auto migration</a></li></ul><h3 id="note-on-in-browser-template-compilation" tabindex="-1">Note on In-Browser Template Compilation <a class="header-anchor" href="#note-on-in-browser-template-compilation" aria-hidden="true">#</a></h3><p>When using Vue without a build step, component templates are written either directly in the page&#39;s HTML or as inlined JavaScript strings. In such cases, Vue needs to ship the template compiler to the browser in order to perform on-the-fly template compilation. On the other hand, the compiler would be unnecessary if we pre-compile the templates with a build step. To reduce client bundle size, Vue provides <a href="https://unpkg.com/browse/vue@3/dist/" target="_blank" rel="noopener noreferrer">different &quot;builds&quot;</a> optimized for different use cases.</p><ul><li><p>Build files that start with <code>vue.runtime.*</code> are <strong>runtime-only builds</strong>: they do not include the compiler. When using these builds, all templates must be pre-compiled via a build step.</p></li><li><p>Build files that do not include <code>.runtime</code> are <strong>full builds</strong>: they include the compiler and support compiling templates directly in the browser. However, they will increase the payload by ~14kb.</p></li></ul><p>Our default tooling setups use the runtime-only build since all templates in SFCs are pre-compiled. If, for some reason, you need in-browser template compilation even with a build step, you can do so by configuring the build tool to alias <code>vue</code> to <code>vue/dist/vue.esm-bundler.js</code> instead.</p><p>If you are looking for a lighter-weight alternative for no-build-step usage, check out <a href="https://github.com/vuejs/petite-vue" target="_blank" rel="noopener noreferrer">petite-vue</a>.</p><h2 id="ide-support" tabindex="-1">IDE Support <a class="header-anchor" href="#ide-support" aria-hidden="true">#</a></h2><ul><li><p>The recommended IDE setup is <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VSCode</a> + the <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener noreferrer">Volar</a> extension. Volar provides syntax highlighting, TypeScript support, and intellisense for template expressions and component props.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Volar replaces <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" rel="noopener noreferrer">Vetur</a>, our previous official VSCode extension for Vue 2. If you have Vetur currently installed, make sure to disable it in Vue 3 projects.</p></div></li><li><p><a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer">WebStorm</a> also provides great built-in support for Vue SFCs.</p></li><li><p>Other IDEs that support the <a href="https://microsoft.github.io/language-server-protocol/" target="_blank" rel="noopener noreferrer">Language Service Protocol</a> (LSP) can also leverage Volar&#39;s core functionalities via LSP. One examples is <a href="https://github.com/yaegassy/coc-volar" target="_blank" rel="noopener noreferrer">coc-volar</a> which provides Vue SFC support for vim/Neovim.</p></li></ul><h2 id="browser-devtools" tabindex="-1">Browser Devtools <a class="header-anchor" href="#browser-devtools" aria-hidden="true">#</a></h2>',25),p=o('<p>The Vue browser devtools extension allows you to explore a Vue app&#39;s component tree, inspect the state of individual components, track state management events, and profile performance.</p><p><img src="https://raw.githubusercontent.com/vuejs/devtools/main/media/screenshot-shadow.png" alt="devtools screenshot"></p><ul><li><a href="https://devtools.vuejs.org/" target="_blank" rel="noopener noreferrer">Documentation</a></li><li><a href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd" target="_blank" rel="noopener noreferrer">Chrome Extension</a></li><li><a href="https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/" target="_blank" rel="noopener noreferrer">Firefox Addon</a></li><li><a href="https://devtools.vuejs.org/guide/installation.html#standalone" target="_blank" rel="noopener noreferrer">Standalone Electron app</a></li></ul><h2 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-hidden="true">#</a></h2><p>Main article: <a href="/guide/typescript/overview.html">Using Vue with TypeScript</a>.</p><ul><li><p><a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener noreferrer">Volar</a> provides type checking for SFCs using <code>&lt;script lang=&quot;ts&quot;&gt;</code> blocks, including template expressions and cross-component props validation.</p></li><li><p>Use <a href="https://github.com/johnsoncodehk/volar/tree/master/packages/vue-tsc" target="_blank" rel="noopener noreferrer"><code>vue-tsc</code></a> for performing the same type checking from the command line, or for generating <code>d.ts</code> files for SFCs.</p></li></ul><h2 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-hidden="true">#</a></h2><p>Main article: <a href="/guide/scaling-up/testing.html">Testing Guide</a>.</p><ul><li><p><a href="https://www.cypress.io/" target="_blank" rel="noopener noreferrer">Cypress</a> is recommended for E2E tests. It can also be used for component testing for Vue SFCs via the <a href="https://docs.cypress.io/guides/component-testing/introduction" target="_blank" rel="noopener noreferrer">Cypress Component Test Runner</a>.</p></li><li><p><a href="https://vitest.dev/" target="_blank" rel="noopener noreferrer">Vitest</a> is a test runner created by Vue / Vite team members that focuses on speed. It is specifically designed for Vite-based applications to provide the same instant feedback loop for unit / component testing.</p></li><li><p><a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">Jest</a> can be made to work with Vite via <a href="https://github.com/sodatea/vite-jest" target="_blank" rel="noopener noreferrer">vite-jest</a>. However, this is only recommended if you have existing Jest-based test suites that you need to migrate over to a Vite-based setup, as Vitest provides similar functionalities with a much more efficient integration.</p></li></ul><h2 id="linting" tabindex="-1">Linting <a class="header-anchor" href="#linting" aria-hidden="true">#</a></h2><p>The Vue team maintains <a href="https://github.com/vuejs/eslint-plugin-vue" target="_blank" rel="noopener noreferrer">eslint-plugin-vue</a>, an <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">ESLint</a> plugin that supports SFC-specific linting rules.</p><p>Users previously using Vue CLI may be used to having linters configured via webpack loaders. However when using a Vite-based build setup, our general recommendation is:</p><ol><li><p><code>npm install -D eslint eslint-plugin-vue</code>, then follow <code>eslint-plugin-vue</code>&#39;s <a href="https://eslint.vuejs.org/user-guide/#usage" target="_blank" rel="noopener noreferrer">configuration guide</a>.</p></li><li><p>Setup ESLint IDE extensions, for example <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noopener noreferrer">ESLint for VSCode</a>, so you get linter feedback right in your editor during development. This also avoids unnecessary linting cost when starting the dev server.</p></li><li><p>Run ESLint as part of the production build command, so you get full linter feedback before shipping to production.</p></li><li><p>(Optional) Setup tools like <a href="https://github.com/okonet/lint-staged" target="_blank" rel="noopener noreferrer">lint-staged</a> to automatically lint modified files on git commit.</p></li></ol><h2 id="formatting" tabindex="-1">Formatting <a class="header-anchor" href="#formatting" aria-hidden="true">#</a></h2><ul><li><p>The <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener noreferrer">Volar</a> VSCode extension provides formatting for Vue SFCs out of the box.</p></li><li><p>Alternatively, <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">Prettier</a> provides built-in Vue SFC formatting support.</p></li></ul><h2 id="sfc-custom-block-integrations" tabindex="-1">SFC Custom Block Integrations <a class="header-anchor" href="#sfc-custom-block-integrations" aria-hidden="true">#</a></h2><p>Custom blocks are compiled into imports to the same Vue file with different request queries. It is up to the underlying build tool to handle these import requests.</p><ul><li><p>If using Vite, a custom Vite plugin should be used to transform matched custom blocks into executable JavaScript. <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-transforming-custom-blocks" target="_blank" rel="noopener noreferrer">Example</a></p></li><li><p>If using Vue CLI or plain webpack, a webpack loader should be configured to transform the matched blocks. <a href="https://vue-loader.vuejs.org/guide/custom-blocks.html" target="_blank" rel="noopener noreferrer">Example</a></p></li></ul><h2 id="lower-level-packages" tabindex="-1">Lower-Level Packages <a class="header-anchor" href="#lower-level-packages" aria-hidden="true">#</a></h2><h3 id="vue-compiler-sfc" tabindex="-1"><code>@vue/compiler-sfc</code> <a class="header-anchor" href="#vue-compiler-sfc" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/vuejs/core/tree/main/packages/compiler-sfc" target="_blank" rel="noopener noreferrer">Docs</a></li></ul><p>This package is part of the Vue core monorepo and is always published with the same version as the main <code>vue</code> package. It is included as a dependency of the main <code>vue</code> package and proxied under <code>vue/compiler-sfc</code> so you don&#39;t need to install it individually.</p><p>The package itself provides lower-level utilities for processing Vue SFCs and is only meant for tooling authors that need to support Vue SFCs in custom tools.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Always prefer using this package via the <code>vue/compiler-sfc</code> deep import since this ensures its version is in sync with the Vue runtime.</p></div><h3 id="vitejs-plugin-vue" tabindex="-1"><code>@vitejs/plugin-vue</code> <a class="header-anchor" href="#vitejs-plugin-vue" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/vitejs/vite/tree/main/packages/plugin-vue" target="_blank" rel="noopener noreferrer">Docs</a></li></ul><p>Official plugin that provides Vue SFC support in Vite.</p><h3 id="vue-loader" tabindex="-1"><code>vue-loader</code> <a class="header-anchor" href="#vue-loader" aria-hidden="true">#</a></h3><ul><li><a href="https://vue-loader.vuejs.org/" target="_blank" rel="noopener noreferrer">Docs</a></li></ul><p>The official loader that provides Vue SFC support in webpack. If you are using Vue CLI, also see <a href="https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader" target="_blank" rel="noopener noreferrer">docs on modifying <code>vue-loader</code> options in Vue CLI</a>.</p><h2 id="other-online-playgrounds" tabindex="-1">Other Online Playgrounds <a class="header-anchor" href="#other-online-playgrounds" aria-hidden="true">#</a></h2><ul><li><a href="https://play.vueuse.org" target="_blank" rel="noopener noreferrer">VueUse Playground</a></li><li><a href="https://replit.com/@templates/VueJS-with-Vite" target="_blank" rel="noopener noreferrer">Vue + Vite on Repl.it</a></li><li><a href="https://codesandbox.io/s/vue-3" target="_blank" rel="noopener noreferrer">Vue on CodeSandbox</a></li><li><a href="https://codepen.io/pen/editor/vue" target="_blank" rel="noopener noreferrer">Vue on Codepen</a></li><li><a href="https://components.studio/create/vue3" target="_blank" rel="noopener noreferrer">Vue on Components.studio</a></li><li><a href="https://webcomponents.dev/create/cevue" target="_blank" rel="noopener noreferrer">Vue on WebComponents.dev</a></li></ul>',32);var u=e(l,[["render",function(e,o,n,l,u,d){const c=i("VueSchoolLink");return a(),t("div",null,[s,r(c,{href:"https://vueschool.io/lessons/using-vue-dev-tools-with-vuejs-3",title:"Free Vue.js Devtools Lesson"}),p])}]]);export{n as __pageData,u as default};
