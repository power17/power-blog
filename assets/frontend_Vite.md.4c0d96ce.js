import{_ as e,o as l,c as p,k as s,a as o,t as a,Q as t}from"./chunks/framework.9133f087.js";const b=JSON.parse('{"title":"vite源码解析（版本：5.0.0-beta.2）","description":"在webpack横行的时代，webpack的影响力几乎统治了web前端，react，vue-cli等等工具都借助于webpack构建。在使用过程中，Webpack构建十几个页面几百个组件的应用的性能出现了严重下降，说句公道话，webpack的性能其实是很好的，最大的问题是配置过于复杂，导致绝大多数人不能正确的配置导致性能下降。天下苦webpack久矣，在这个时候，尤大巧妙的利用esbuild和rollup，借助浏览器原生的esm能力创造的vite横空出世。一旦体验过，就再也回不去了","frontmatter":{"title":"vite源码解析（版本：5.0.0-beta.2）","author":"power","description":"在webpack横行的时代，webpack的影响力几乎统治了web前端，react，vue-cli等等工具都借助于webpack构建。在使用过程中，Webpack构建十几个页面几百个组件的应用的性能出现了严重下降，说句公道话，webpack的性能其实是很好的，最大的问题是配置过于复杂，导致绝大多数人不能正确的配置导致性能下降。天下苦webpack久矣，在这个时候，尤大巧妙的利用esbuild和rollup，借助浏览器原生的esm能力创造的vite横空出世。一旦体验过，就再也回不去了","date":"2023-09-21T12:46:28.000Z","link":"./frontend/Vite","tags":["源码"]},"headers":[],"relativePath":"frontend/Vite.md","filePath":"frontend/Vite.md","lastUpdated":1695482962000}'),c={name:"frontend/Vite.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),y=t(`<h3 id="时间对比" tabindex="-1">-时间对比 <a class="header-anchor" href="#时间对比" aria-label="Permalink to &quot;-时间对比&quot;">​</a></h3><ul><li>Webpack：启动时间 = 初始化模块加载 + 编译服务端/客户端 bundle 时间 + Midway</li><li>vite： 启动时间 = 更少的初始化模块加载 + Midway 启动时间</li></ul><h3 id="问题-作为一个打包构建工具需要解决以下基本问题" tabindex="-1">问题：作为一个打包构建工具需要解决以下基本问题 <a class="header-anchor" href="#问题-作为一个打包构建工具需要解决以下基本问题" aria-label="Permalink to &quot;问题：作为一个打包构建工具需要解决以下基本问题&quot;">​</a></h3><p>1、vite 如何为开发提供开发环境的 2、文件更改，vite 如何热更新 3、vite 如何进行打包的</p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.</span></span>
<span class="line"><span style="color:#e1e4e8;">├── CHANGELOG.md</span></span>
<span class="line"><span style="color:#e1e4e8;">├── LICENSE.md</span></span>
<span class="line"><span style="color:#e1e4e8;">├── README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">├── api-extractor.json</span></span>
<span class="line"><span style="color:#e1e4e8;">├── bin # 指令目录</span></span>
<span class="line"><span style="color:#e1e4e8;">├── client.d.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">├── dist</span></span>
<span class="line"><span style="color:#e1e4e8;">├── index.cjs</span></span>
<span class="line"><span style="color:#e1e4e8;">├── index.d.cts</span></span>
<span class="line"><span style="color:#e1e4e8;">├── node_modules</span></span>
<span class="line"><span style="color:#e1e4e8;">├── package.json</span></span>
<span class="line"><span style="color:#e1e4e8;">├── rollup.config.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">├── rollupLicensePlugin.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">├── scripts</span></span>
<span class="line"><span style="color:#e1e4e8;">├── src  #存放源码</span></span>
<span class="line"><span style="color:#e1e4e8;">├── tsconfig.base.json</span></span>
<span class="line"><span style="color:#e1e4e8;">├── tsconfig.check.json</span></span>
<span class="line"><span style="color:#e1e4e8;">├── tsconfig.json</span></span>
<span class="line"><span style="color:#e1e4e8;">└── types</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.</span></span>
<span class="line"><span style="color:#24292e;">├── CHANGELOG.md</span></span>
<span class="line"><span style="color:#24292e;">├── LICENSE.md</span></span>
<span class="line"><span style="color:#24292e;">├── README.md</span></span>
<span class="line"><span style="color:#24292e;">├── api-extractor.json</span></span>
<span class="line"><span style="color:#24292e;">├── bin # 指令目录</span></span>
<span class="line"><span style="color:#24292e;">├── client.d.ts</span></span>
<span class="line"><span style="color:#24292e;">├── dist</span></span>
<span class="line"><span style="color:#24292e;">├── index.cjs</span></span>
<span class="line"><span style="color:#24292e;">├── index.d.cts</span></span>
<span class="line"><span style="color:#24292e;">├── node_modules</span></span>
<span class="line"><span style="color:#24292e;">├── package.json</span></span>
<span class="line"><span style="color:#24292e;">├── rollup.config.ts</span></span>
<span class="line"><span style="color:#24292e;">├── rollupLicensePlugin.ts</span></span>
<span class="line"><span style="color:#24292e;">├── scripts</span></span>
<span class="line"><span style="color:#24292e;">├── src  #存放源码</span></span>
<span class="line"><span style="color:#24292e;">├── tsconfig.base.json</span></span>
<span class="line"><span style="color:#24292e;">├── tsconfig.check.json</span></span>
<span class="line"><span style="color:#24292e;">├── tsconfig.json</span></span>
<span class="line"><span style="color:#24292e;">└── types</span></span></code></pre></div><h3 id="开发的起点-vite-mode-dev" tabindex="-1">开发的起点： vite --mode dev <a class="header-anchor" href="#开发的起点-vite-mode-dev" aria-label="Permalink to &quot;开发的起点： vite --mode dev&quot;">​</a></h3><ul><li>配置调试环境</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># vite项目中 packages/vite</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">link</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># vite项目中 packages/vite</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">link</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span></code></pre></div><ul><li>vscode 配置</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vite调试&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;request&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;launch&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;runtimeArgs&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;--mode&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;dev&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;cwd&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;\${workspaceFolder}/packages/vite&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;runtimeExecutable&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vite&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;skipFiles&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;&lt;node_internals&gt;/**&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;node&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vite调试&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;request&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;launch&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;runtimeArgs&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;--mode&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;dev&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;cwd&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;\${workspaceFolder}/packages/vite&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;runtimeExecutable&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vite&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;skipFiles&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;&lt;node_internals&gt;/**&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;node&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ul><li>调试 ts 文件,在 tsconfig 上加上 sourceMap,执行 tsc --build 编译</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;sourceMap&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;sourceMap&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span></code></pre></div>`,13);function u(n,E,d,q,h,F){return l(),p("div",null,[s("h1",r,[o(a(n.$frontmatter.title)+" ",1),i]),s("ul",null,[s("li",null,a(n.$frontmatter.description),1)]),y])}const g=e(c,[["render",u]]);export{b as __pageData,g as default};
