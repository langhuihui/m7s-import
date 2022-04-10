import{_ as e,c as r,o as i,a as t}from"./app.376b3d02.js";const o='{"title":"Style Guide","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"Rule Categories","slug":"rule-categories"},{"level":3,"title":"Priority A: Essential (Error Prevention)","slug":"priority-a-essential-error-prevention"},{"level":3,"title":"Priority B: Strongly Recommended","slug":"priority-b-strongly-recommended"},{"level":3,"title":"Priority C: Recommended","slug":"priority-c-recommended"},{"level":3,"title":"Priority D: Use with Caution","slug":"priority-d-use-with-caution"}],"relativePath":"style-guide/index.md"}',a={},s=[t('<h1 id="style-guide" tabindex="-1">Style Guide <a class="header-anchor" href="#style-guide" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">Status Notice</p><p>The style guide is currently a bit outdated. Most examples are in Options API only, and there are no rules regarding <code>&lt;script setup&gt;</code> and Composition API. We are planning to improve it in the future.</p></div><p>This is the official style guide for Vue-specific code. If you use Vue in a project, it&#39;s a great reference to avoid errors, bikeshedding, and anti-patterns. However, we don&#39;t believe that any style guide is ideal for all teams or projects, so mindful deviations are encouraged based on past experience, the surrounding tech stack, and personal values.</p><p>For the most part, we also avoid suggestions about JavaScript or HTML in general. We don&#39;t mind whether you use semicolons or trailing commas. We don&#39;t mind whether your HTML uses single-quotes or double-quotes for attribute values. Some exceptions will exist however, where we&#39;ve found that a particular pattern is helpful in the context of Vue.</p><p>Finally, we&#39;ve split rules into four categories:</p><h2 id="rule-categories" tabindex="-1">Rule Categories <a class="header-anchor" href="#rule-categories" aria-hidden="true">#</a></h2><h3 id="priority-a-essential-error-prevention" tabindex="-1">Priority A: Essential (Error Prevention) <a class="header-anchor" href="#priority-a-essential-error-prevention" aria-hidden="true">#</a></h3><p>These rules help prevent errors, so learn and abide by them at all costs. Exceptions may exist, but should be very rare and only be made by those with expert knowledge of both JavaScript and Vue.</p><ul><li><a href="./rules-essential.html">See all priority A rules</a></li></ul><h3 id="priority-b-strongly-recommended" tabindex="-1">Priority B: Strongly Recommended <a class="header-anchor" href="#priority-b-strongly-recommended" aria-hidden="true">#</a></h3><p>These rules have been found to improve readability and/or developer experience in most projects. Your code will still run if you violate them, but violations should be rare and well-justified.</p><ul><li><a href="./rules-strongly-recommended.html">See all priority B rules</a></li></ul><h3 id="priority-c-recommended" tabindex="-1">Priority C: Recommended <a class="header-anchor" href="#priority-c-recommended" aria-hidden="true">#</a></h3><p>Where multiple, equally good options exist, an arbitrary choice can be made to ensure consistency. In these rules, we describe each acceptable option and suggest a default choice. That means you can feel free to make a different choice in your own codebase, as long as you&#39;re consistent and have a good reason. Please do have a good reason though! By adapting to the community standard, you will:</p><ol><li>Train your brain to more easily parse most of the community code you encounter</li><li>Be able to copy and paste most community code examples without modification</li><li>Often find new hires are already accustomed to your preferred coding style, at least in regards to Vue</li></ol><ul><li><a href="./rules-recommended.html">See all priority C rules</a></li></ul><h3 id="priority-d-use-with-caution" tabindex="-1">Priority D: Use with Caution <a class="header-anchor" href="#priority-d-use-with-caution" aria-hidden="true">#</a></h3><p>Some features of Vue exist to accommodate rare edge cases or smoother migrations from a legacy code base. When overused however, they can make your code more difficult to maintain or even become a source of bugs. These rules shine a light on potentially risky features, describing when and why they should be avoided.</p><ul><li><a href="./rules-use-with-caution.html">See all priority D rules</a></li></ul>',19)];var l=e(a,[["render",function(e,t,o,a,l,n){return i(),r("div",null,s)}]]);export{o as __pageData,l as default};
