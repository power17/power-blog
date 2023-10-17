import{_ as l,o as p,c as o,k as s,a as e,t as a,Q as c}from"./chunks/framework.cb9cb047.js";const h=JSON.parse('{"title":"esbuild基本使用","description":"版本（\\"^0.19.4\\"）","frontmatter":{"title":"esbuild基本使用","author":"power","description":"版本（\\"^0.19.4\\"）","date":"2023-10-17T15:14:33.000Z","link":"./engineering/Esbuild.md","tags":["工程"]},"headers":[],"relativePath":"engineering/Esbuild.md","filePath":"engineering/Esbuild.md","lastUpdated":1697527693000}'),t={name:"engineering/Esbuild.md"},r={id:"frontmatter-title",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),y=c(`<h2 id="一、打包" tabindex="-1">一、打包 <a class="header-anchor" href="#一、打包" aria-label="Permalink to &quot;一、打包&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> esbuild </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;esbuild&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">build</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">transform</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> esbuild;</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">runBuild</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 异步方法，返回一个 Promise</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">build</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ----  如下是一些常见的配置  ---</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 当前项目根目录</span></span>
<span class="line"><span style="color:#E1E4E8;">    absWorkingDir: process.</span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 入口文件列表，为一个数组</span></span>
<span class="line"><span style="color:#E1E4E8;">    entryPoints: [</span><span style="color:#9ECBFF;">&#39;./src/index.jsx&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 打包产物目录</span></span>
<span class="line"><span style="color:#E1E4E8;">    outdir: </span><span style="color:#9ECBFF;">&#39;dist&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否需要打包，一般设为 true</span></span>
<span class="line"><span style="color:#E1E4E8;">    bundle: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 模块格式，包括\`esm\`、\`commonjs\`和\`iife\`</span></span>
<span class="line"><span style="color:#E1E4E8;">    format: </span><span style="color:#9ECBFF;">&#39;esm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 需要排除打包的依赖列表</span></span>
<span class="line"><span style="color:#E1E4E8;">    external: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否开启自动拆包</span></span>
<span class="line"><span style="color:#E1E4E8;">    splitting: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否生成 SourceMap 文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    sourcemap: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否生成打包的元信息文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    metafile: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否进行代码压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">    minify: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否开启 watch 模式，在 watch 模式下代码变动则会触发重新打包</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// watch: false,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否将产物写入磁盘</span></span>
<span class="line"><span style="color:#E1E4E8;">    write: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Esbuild 内置了一系列的 loader，包括 base64、binary、css、dataurl、file、js(x)、ts(x)、text、json</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 针对一些特殊的文件，调用不同的 loader 进行加载</span></span>
<span class="line"><span style="color:#E1E4E8;">    loader: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;.png&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;base64&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(result);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">runBuild</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> esbuild </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;esbuild&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">build</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">transform</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> esbuild;</span></span>
<span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">runBuild</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 异步方法，返回一个 Promise</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">build</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ----  如下是一些常见的配置  ---</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 当前项目根目录</span></span>
<span class="line"><span style="color:#24292E;">    absWorkingDir: process.</span><span style="color:#6F42C1;">cwd</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 入口文件列表，为一个数组</span></span>
<span class="line"><span style="color:#24292E;">    entryPoints: [</span><span style="color:#032F62;">&#39;./src/index.jsx&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 打包产物目录</span></span>
<span class="line"><span style="color:#24292E;">    outdir: </span><span style="color:#032F62;">&#39;dist&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否需要打包，一般设为 true</span></span>
<span class="line"><span style="color:#24292E;">    bundle: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 模块格式，包括\`esm\`、\`commonjs\`和\`iife\`</span></span>
<span class="line"><span style="color:#24292E;">    format: </span><span style="color:#032F62;">&#39;esm&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 需要排除打包的依赖列表</span></span>
<span class="line"><span style="color:#24292E;">    external: [],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否开启自动拆包</span></span>
<span class="line"><span style="color:#24292E;">    splitting: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否生成 SourceMap 文件</span></span>
<span class="line"><span style="color:#24292E;">    sourcemap: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否生成打包的元信息文件</span></span>
<span class="line"><span style="color:#24292E;">    metafile: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否进行代码压缩</span></span>
<span class="line"><span style="color:#24292E;">    minify: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否开启 watch 模式，在 watch 模式下代码变动则会触发重新打包</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// watch: false,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否将产物写入磁盘</span></span>
<span class="line"><span style="color:#24292E;">    write: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Esbuild 内置了一系列的 loader，包括 base64、binary、css、dataurl、file、js(x)、ts(x)、text、json</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 针对一些特殊的文件，调用不同的 loader 进行加载</span></span>
<span class="line"><span style="color:#24292E;">    loader: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;.png&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;base64&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(result);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">runBuild</span><span style="color:#24292E;">();</span></span></code></pre></div><h2 id="二、服务" tabindex="-1">二、服务 <a class="header-anchor" href="#二、服务" aria-label="Permalink to &quot;二、服务&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">runServer</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  esbuild</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">context</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      outdir: </span><span style="color:#9ECBFF;">&#39;./dist&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      absWorkingDir: process.</span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      entryPoints: [</span><span style="color:#9ECBFF;">&#39;./src/index.jsx&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      bundle: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      format: </span><span style="color:#9ECBFF;">&#39;esm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      splitting: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      sourcemap: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      ignoreAnnotations: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      metafile: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">server</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      server</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">serve</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          servedir: </span><span style="color:#9ECBFF;">&#39;./dist&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(({ </span><span style="color:#FFAB70;">host</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">port</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`HTTP Server starts at port: http://\${</span><span style="color:#E1E4E8;">host</span><span style="color:#9ECBFF;">}:\${</span><span style="color:#E1E4E8;">port</span><span style="color:#9ECBFF;">} \`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">runServer</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">runServer</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  esbuild</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">context</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      outdir: </span><span style="color:#032F62;">&#39;./dist&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      absWorkingDir: process.</span><span style="color:#6F42C1;">cwd</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">      entryPoints: [</span><span style="color:#032F62;">&#39;./src/index.jsx&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      bundle: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      format: </span><span style="color:#032F62;">&#39;esm&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      splitting: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      sourcemap: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      ignoreAnnotations: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      metafile: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">server</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      server</span></span>
<span class="line"><span style="color:#24292E;">        .</span><span style="color:#6F42C1;">serve</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          servedir: </span><span style="color:#032F62;">&#39;./dist&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">        .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(({ </span><span style="color:#E36209;">host</span><span style="color:#24292E;">, </span><span style="color:#E36209;">port</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`HTTP Server starts at port: http://\${</span><span style="color:#24292E;">host</span><span style="color:#032F62;">}:\${</span><span style="color:#24292E;">port</span><span style="color:#032F62;">} \`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">runServer</span><span style="color:#24292E;">();</span></span></code></pre></div><h2 id="转译" tabindex="-1">转译 <a class="header-anchor" href="#转译" aria-label="Permalink to &quot;转译&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">runTransform</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 第一个参数是代码字符串，第二个参数为编译配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transform</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;const isNull = (str: string): boolean =&gt; str.length &gt; 0;&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    sourcemap: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    loader: </span><span style="color:#9ECBFF;">&#39;tsx&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(content, </span><span style="color:#9ECBFF;">&#39;content&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">runTransform</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">runTransform</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 第一个参数是代码字符串，第二个参数为编译配置</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">content</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transform</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;const isNull = (str: string): boolean =&gt; str.length &gt; 0;&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    sourcemap: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    loader: </span><span style="color:#032F62;">&#39;tsx&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(content, </span><span style="color:#032F62;">&#39;content&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">runTransform</span><span style="color:#24292E;">();</span></span></code></pre></div><h2 id="四、插件" tabindex="-1">四、插件 <a class="header-anchor" href="#四、插件" aria-label="Permalink to &quot;四、插件&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 插件</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> envPlugin </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;env&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">build</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    build.</span><span style="color:#B392F0;">onResolve</span><span style="color:#E1E4E8;">({ filter:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#DBEDFF;">env</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> }, (</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: args.path,</span></span>
<span class="line"><span style="color:#E1E4E8;">      namespace: </span><span style="color:#9ECBFF;">&#39;env-ns&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    build.</span><span style="color:#B392F0;">onLoad</span><span style="color:#E1E4E8;">({ filter:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">.</span><span style="color:#F97583;">*</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, namespace: </span><span style="color:#9ECBFF;">&#39;env-ns&#39;</span><span style="color:#E1E4E8;"> }, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">      contents: </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(p<wbr>rocess.env),</span></span>
<span class="line"><span style="color:#E1E4E8;">      loader: </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }));</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">esbuild</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">build</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    entryPoints: [</span><span style="color:#9ECBFF;">&#39;src/index.jsx&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    bundle: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    outfile: </span><span style="color:#9ECBFF;">&#39;./dist/out.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 应用插件</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [envPlugin],</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 插件</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> envPlugin </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;env&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">(</span><span style="color:#E36209;">build</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    build.</span><span style="color:#6F42C1;">onResolve</span><span style="color:#24292E;">({ filter:</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#032F62;">env</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;"> }, (</span><span style="color:#E36209;">args</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> ({</span></span>
<span class="line"><span style="color:#24292E;">      path: args.path,</span></span>
<span class="line"><span style="color:#24292E;">      namespace: </span><span style="color:#032F62;">&#39;env-ns&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    build.</span><span style="color:#6F42C1;">onLoad</span><span style="color:#24292E;">({ filter:</span><span style="color:#032F62;"> /</span><span style="color:#005CC5;">.</span><span style="color:#D73A49;">*</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, namespace: </span><span style="color:#032F62;">&#39;env-ns&#39;</span><span style="color:#24292E;"> }, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> ({</span></span>
<span class="line"><span style="color:#24292E;">      contents: </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(p<wbr>rocess.env),</span></span>
<span class="line"><span style="color:#24292E;">      loader: </span><span style="color:#032F62;">&#39;json&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }));</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">esbuild</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">build</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    entryPoints: [</span><span style="color:#032F62;">&#39;src/index.jsx&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    bundle: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    outfile: </span><span style="color:#032F62;">&#39;./dist/out.js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 应用插件</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [envPlugin],</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> process.</span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">));</span></span></code></pre></div>`,8);function i(n,F,d,u,C,g){return p(),o("div",null,[s("h1",r,[e(a(n.$frontmatter.title)+" ",1),E]),s("p",null,a(n.$frontmatter.description),1),y])}const D=l(t,[["render",i]]);export{h as __pageData,D as default};
