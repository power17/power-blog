import{_ as l,o as p,c as o,k as s,a as e,t as n,Q as c}from"./chunks/framework.551abb59.js";const b=JSON.parse('{"title":"mysql基本操作","description":"首先声明mysql的版本是：8.0.33，系统操作是mac Monteron 12.3。内容是数据库的基本命令","frontmatter":{"title":"mysql基本操作","author":"power","description":"首先声明mysql的版本是：8.0.33，系统操作是mac Monteron 12.3。内容是数据库的基本命令","date":"2023-09-22T12:42:44.000Z","link":"./databases/Mysql","tags":["数据结构"]},"headers":[],"relativePath":"databases/Mysql.md","filePath":"databases/Mysql.md","lastUpdated":1695360334000}'),t={name:"databases/Mysql.md"},r={id:"frontmatter-title",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),i=c(`<h3 id="数据库的连接" tabindex="-1">数据库的连接 <a class="header-anchor" href="#数据库的连接" aria-label="Permalink to &quot;数据库的连接&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mysql</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--version</span></span>
<span class="line"><span style="color:#6A737D;"># 连接mysql</span></span>
<span class="line"><span style="color:#B392F0;">mysql</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-h</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">127.0</span><span style="color:#9ECBFF;">.0.1</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-P</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3334</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span></span>
<span class="line"><span style="color:#6A737D;"># 展示数据库</span></span>
<span class="line"><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">databases</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mysql</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--version</span></span>
<span class="line"><span style="color:#6A737D;"># 连接mysql</span></span>
<span class="line"><span style="color:#6F42C1;">mysql</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-h</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">127.0</span><span style="color:#032F62;">.0.1</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span><span style="color:#24292E;"> </span><span style="color:#032F62;">root</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-P</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3334</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span></span>
<span class="line"><span style="color:#6A737D;"># 展示数据库</span></span>
<span class="line"><span style="color:#6F42C1;">show</span><span style="color:#24292E;"> </span><span style="color:#032F62;">databases</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="数据库备份" tabindex="-1">数据库备份 <a class="header-anchor" href="#数据库备份" aria-label="Permalink to &quot;数据库备份&quot;">​</a></h3><ul><li>全量备份脚本</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 如果文件没有权限，提权</span></span>
<span class="line"><span style="color:#6A737D;"># chomd 777 ./bash.sh</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#保存备份个数，备份31天数据</span></span>
<span class="line"><span style="color:#E1E4E8;">number</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">31</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#备份保存路径(脚本当前目录)</span></span>
<span class="line"><span style="color:#E1E4E8;">backup_dir</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">__myslq_data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#日期</span></span>
<span class="line"><span style="color:#E1E4E8;">dd</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">date</span><span style="color:#9ECBFF;"> +%Y-%m-%d-%H-%M-%S\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#备份工具</span></span>
<span class="line"><span style="color:#E1E4E8;">tool</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">mysqldump</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#用户名</span></span>
<span class="line"><span style="color:#E1E4E8;">username</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">root</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#密码</span></span>
<span class="line"><span style="color:#E1E4E8;">password</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">123456</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#将要备份的数据库</span></span>
<span class="line"><span style="color:#E1E4E8;">database_name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">baijiabao</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#如果文件夹不存在则创建</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [ </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-d</span><span style="color:#E1E4E8;"> $backup_dir ];</span></span>
<span class="line"><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> $backup_dir;</span></span>
<span class="line"><span style="color:#F97583;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#简单写法 mysqldump -h 127.0.0.1 -P 3334 -u root -p123456 users &gt; /root/mysqlbackup/users-$filename.sql</span></span>
<span class="line"><span style="color:#E1E4E8;">$tool -u $username -h 127.0.0.1 -P 3334 -p$password $database_name </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> $backup_dir/$database_name-$dd.sql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#写创建备份日志</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;create </span><span style="color:#E1E4E8;">$backup_dir</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">$database_name</span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;">$dd</span><span style="color:#9ECBFF;">.dupm&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> $backup_dir</span><span style="color:#9ECBFF;">/log.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#找出需要删除的备份</span></span>
<span class="line"><span style="color:#E1E4E8;">delfile</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">ls</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-l</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-crt</span><span style="color:#9ECBFF;"> </span><span style="color:#E1E4E8;">$backup_dir</span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">*</span><span style="color:#9ECBFF;">.sql </span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;"> </span><span style="color:#B392F0;">awk</span><span style="color:#9ECBFF;"> &#39;{print $9 }&#39; </span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;"> </span><span style="color:#B392F0;">head</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-1</span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#判断现在的备份数量是否大于$number</span></span>
<span class="line"><span style="color:#E1E4E8;">count</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">ls</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-l</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-crt</span><span style="color:#9ECBFF;"> </span><span style="color:#E1E4E8;">$backup_dir</span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">*</span><span style="color:#9ECBFF;">.sql </span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;"> </span><span style="color:#B392F0;">awk</span><span style="color:#9ECBFF;"> &#39;{print $9 }&#39; </span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;"> </span><span style="color:#B392F0;">wc</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-l</span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [ $count </span><span style="color:#F97583;">-gt</span><span style="color:#E1E4E8;"> $number ]</span></span>
<span class="line"><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">#删除最早生成的备份，只保留number数量的备份</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> $delfile</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">#写删除文件日志</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;delete </span><span style="color:#E1E4E8;">$delfile</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> $backup_dir</span><span style="color:#9ECBFF;">/log.txt</span></span>
<span class="line"><span style="color:#F97583;">fi</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 如果文件没有权限，提权</span></span>
<span class="line"><span style="color:#6A737D;"># chomd 777 ./bash.sh</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#保存备份个数，备份31天数据</span></span>
<span class="line"><span style="color:#24292E;">number</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">31</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#备份保存路径(脚本当前目录)</span></span>
<span class="line"><span style="color:#24292E;">backup_dir</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">__myslq_data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#日期</span></span>
<span class="line"><span style="color:#24292E;">dd</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">date</span><span style="color:#032F62;"> +%Y-%m-%d-%H-%M-%S\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#备份工具</span></span>
<span class="line"><span style="color:#24292E;">tool</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">mysqldump</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#用户名</span></span>
<span class="line"><span style="color:#24292E;">username</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">root</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#密码</span></span>
<span class="line"><span style="color:#24292E;">password</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">123456</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#将要备份的数据库</span></span>
<span class="line"><span style="color:#24292E;">database_name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">baijiabao</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#如果文件夹不存在则创建</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> [ </span><span style="color:#D73A49;">!</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-d</span><span style="color:#24292E;"> $backup_dir ];</span></span>
<span class="line"><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> $backup_dir;</span></span>
<span class="line"><span style="color:#D73A49;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#简单写法 mysqldump -h 127.0.0.1 -P 3334 -u root -p123456 users &gt; /root/mysqlbackup/users-$filename.sql</span></span>
<span class="line"><span style="color:#24292E;">$tool -u $username -h 127.0.0.1 -P 3334 -p$password $database_name </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> $backup_dir/$database_name-$dd.sql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#写创建备份日志</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;create </span><span style="color:#24292E;">$backup_dir</span><span style="color:#032F62;">/</span><span style="color:#24292E;">$database_name</span><span style="color:#032F62;">-</span><span style="color:#24292E;">$dd</span><span style="color:#032F62;">.dupm&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> $backup_dir</span><span style="color:#032F62;">/log.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#找出需要删除的备份</span></span>
<span class="line"><span style="color:#24292E;">delfile</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">ls</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-l</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-crt</span><span style="color:#032F62;"> </span><span style="color:#24292E;">$backup_dir</span><span style="color:#032F62;">/</span><span style="color:#005CC5;">*</span><span style="color:#032F62;">.sql </span><span style="color:#D73A49;">|</span><span style="color:#032F62;"> </span><span style="color:#6F42C1;">awk</span><span style="color:#032F62;"> &#39;{print $9 }&#39; </span><span style="color:#D73A49;">|</span><span style="color:#032F62;"> </span><span style="color:#6F42C1;">head</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-1</span><span style="color:#032F62;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#判断现在的备份数量是否大于$number</span></span>
<span class="line"><span style="color:#24292E;">count</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">ls</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-l</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-crt</span><span style="color:#032F62;"> </span><span style="color:#24292E;">$backup_dir</span><span style="color:#032F62;">/</span><span style="color:#005CC5;">*</span><span style="color:#032F62;">.sql </span><span style="color:#D73A49;">|</span><span style="color:#032F62;"> </span><span style="color:#6F42C1;">awk</span><span style="color:#032F62;"> &#39;{print $9 }&#39; </span><span style="color:#D73A49;">|</span><span style="color:#032F62;"> </span><span style="color:#6F42C1;">wc</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-l</span><span style="color:#032F62;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> [ $count </span><span style="color:#D73A49;">-gt</span><span style="color:#24292E;"> $number ]</span></span>
<span class="line"><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">#删除最早生成的备份，只保留number数量的备份</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> $delfile</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">#写删除文件日志</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;delete </span><span style="color:#24292E;">$delfile</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> $backup_dir</span><span style="color:#032F62;">/log.txt</span></span>
<span class="line"><span style="color:#D73A49;">fi</span></span></code></pre></div>`,5);function E(a,F,d,C,u,m){return p(),o("div",null,[s("h1",r,[e(n(a.$frontmatter.title)+" ",1),y]),s("p",null,n(a.$frontmatter.description),1),i])}const h=l(t,[["render",E]]);export{b as __pageData,h as default};
