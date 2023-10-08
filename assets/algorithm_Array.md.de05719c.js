import{_ as a,o as e,c as l,k as s,t as p,a as o,Q as c}from"./chunks/framework.cb9cb047.js";const q=JSON.parse('{"title":"数组","description":"与 Java 、PHP 等语言不同，在 JavaScript 中，数组其实是一种特殊的对象","frontmatter":{"title":"数组","author":"power","description":"与 Java 、PHP 等语言不同，在 JavaScript 中，数组其实是一种特殊的对象","date":"2023-09-21T09:52:51.000Z","link":"./algorithm/Array","tags":["数据结构"]},"headers":[],"relativePath":"algorithm/Array.md","filePath":"algorithm/Array.md","lastUpdated":1695268819000}'),t={name:"algorithm/Array.md"},r=s("h2",{id:"数组",tabindex:"-1"},[o("数组 "),s("a",{class:"header-anchor",href:"#数组","aria-label":'Permalink to "数组"'},"​")],-1),i=c(`<h4 id="数组的创建与读写" tabindex="-1">数组的创建与读写 <a class="header-anchor" href="#数组的创建与读写" aria-label="Permalink to &quot;数组的创建与读写&quot;">​</a></h4><p>以下两种方式都可创建数组：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 字面量方式,常用</span></span>
<span class="line"><span style="color:#e1e4e8;">var num = [1,5,6,10];</span></span>
<span class="line"><span style="color:#e1e4e8;">print(num.length);   // 4</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 构造函数方式</span></span>
<span class="line"><span style="color:#e1e4e8;">var num = new Array(1,5,6,10);</span></span>
<span class="line"><span style="color:#e1e4e8;">print(num.length);    // 4</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 字面量方式,常用</span></span>
<span class="line"><span style="color:#24292e;">var num = [1,5,6,10];</span></span>
<span class="line"><span style="color:#24292e;">print(num.length);   // 4</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 构造函数方式</span></span>
<span class="line"><span style="color:#24292e;">var num = new Array(1,5,6,10);</span></span>
<span class="line"><span style="color:#24292e;">print(num.length);    // 4</span></span></code></pre></div><p>值得注意的是，JavaScript 中的数组数据可以是不同类型，它的语法相对宽松，例如可以指定不同类型数据<code>var example = [1,&quot;Mike&quot;,true,null];</code>另外，可以通过<code>Array.isArray()</code>来判断一个对象是否是数组，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var num = [1,5,6,10];</span></span>
<span class="line"><span style="color:#e1e4e8;">print(Array.isArray(num));        // true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var num = [1,5,6,10];</span></span>
<span class="line"><span style="color:#24292e;">print(Array.isArray(num));        // true</span></span></code></pre></div><p>如何读写数组呢？可以使用循环。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var num = [1,5,6,10];</span></span>
<span class="line"><span style="color:#e1e4e8;">for (var i = 0; i &lt; num.length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(num[i]+&quot; &quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var num = [1,5,6,10];</span></span>
<span class="line"><span style="color:#24292e;">for (var i = 0; i &lt; num.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(num[i]+&quot; &quot;);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="数组的深复制与浅复制" tabindex="-1">数组的深复制与浅复制 <a class="header-anchor" href="#数组的深复制与浅复制" aria-label="Permalink to &quot;数组的深复制与浅复制&quot;">​</a></h4><p>当我们把数组赋给另外一个数组，然后改变其中一个数组的值，另一数组也会随之改变，这就是数组的浅复制。而深复制指的就是不改变原来的数组而去创建一个新的数组，这种情况是经常使用的，为了不破坏原数组。下面的代码展示了这两种复制</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 浅复制</span></span>
<span class="line"><span style="color:#e1e4e8;">var num = [1,2,3,4,5];</span></span>
<span class="line"><span style="color:#e1e4e8;">var newNum = num;</span></span>
<span class="line"><span style="color:#e1e4e8;">num[0] = 10;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(newNum[0]);  // 10</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 深复制</span></span>
<span class="line"><span style="color:#e1e4e8;">function copy (arr1,arr2) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  for(var i=0;i&lt;arr1.length;i++){</span></span>
<span class="line"><span style="color:#e1e4e8;">    arr2[i] = arr1[i];</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var num = [1,5,6,7,9];</span></span>
<span class="line"><span style="color:#e1e4e8;">var newNum = [];</span></span>
<span class="line"><span style="color:#e1e4e8;">copy(num,newNum);</span></span>
<span class="line"><span style="color:#e1e4e8;">num[0] = 10;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(newNum[0]);    // 仍然为 1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 浅复制</span></span>
<span class="line"><span style="color:#24292e;">var num = [1,2,3,4,5];</span></span>
<span class="line"><span style="color:#24292e;">var newNum = num;</span></span>
<span class="line"><span style="color:#24292e;">num[0] = 10;</span></span>
<span class="line"><span style="color:#24292e;">console.log(newNum[0]);  // 10</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 深复制</span></span>
<span class="line"><span style="color:#24292e;">function copy (arr1,arr2) {</span></span>
<span class="line"><span style="color:#24292e;">  for(var i=0;i&lt;arr1.length;i++){</span></span>
<span class="line"><span style="color:#24292e;">    arr2[i] = arr1[i];</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var num = [1,5,6,7,9];</span></span>
<span class="line"><span style="color:#24292e;">var newNum = [];</span></span>
<span class="line"><span style="color:#24292e;">copy(num,newNum);</span></span>
<span class="line"><span style="color:#24292e;">num[0] = 10;</span></span>
<span class="line"><span style="color:#24292e;">console.log(newNum[0]);    // 仍然为 1</span></span></code></pre></div><h4 id="存取函数" tabindex="-1">存取函数 <a class="header-anchor" href="#存取函数" aria-label="Permalink to &quot;存取函数&quot;">​</a></h4><p>JavaScript 提供了一组用来访问数组元素的函数，叫存取函数。最常用的存取函数就是 indexOf() 函数，该函数返回指定查找的值在目标值中是否存在，如果存在，返回该值在数组中的索引，不存在则返回 -1。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var word = [&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;D&quot;];</span></span>
<span class="line"><span style="color:#e1e4e8;">var result = word.indexOf(&quot;A&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(result);    // 0</span></span>
<span class="line"><span style="color:#e1e4e8;">var test = word.indexOf(&quot;F&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(test);   // -1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var word = [&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;D&quot;];</span></span>
<span class="line"><span style="color:#24292e;">var result = word.indexOf(&quot;A&quot;);</span></span>
<span class="line"><span style="color:#24292e;">console.log(result);    // 0</span></span>
<span class="line"><span style="color:#24292e;">var test = word.indexOf(&quot;F&quot;);</span></span>
<span class="line"><span style="color:#24292e;">console.log(test);   // -1</span></span></code></pre></div><p>除此之外，还有 join 和 toString 函数，concat 和 splice 函数。前两个函数可以将数组转化为字符串，后面两个函数可以通过已有的数组创建新数组，其中 concat 方法通过合并多个数组来形成新数组，而 splice 方法是截取一个数组的子集作为一个新数组。它们的使用示例如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var arr = [&quot;Mike&quot;,&quot;John&quot;,&quot;Hexo&quot;];</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(arr.join());   // Mike,John,Hexo</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(arr.toString());   // Mike,John,Hexo</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">var arr1 = [1,10,&quot;Mike&quot;];</span></span>
<span class="line"><span style="color:#e1e4e8;">var arr2 = [8,7,6];</span></span>
<span class="line"><span style="color:#e1e4e8;">var cat = arr1.concat(arr2);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(cat);    // [1, 10, &quot;Mike&quot;, 8, 7, 6]</span></span>
<span class="line"><span style="color:#e1e4e8;">var num = [1,2,3,4,5,6,7];</span></span>
<span class="line"><span style="color:#e1e4e8;">var a = num.splice(3,2);     // 3 表示索引，2 表示删除 2 个</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(num);      // [1, 2, 3, 6, 7]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var arr = [&quot;Mike&quot;,&quot;John&quot;,&quot;Hexo&quot;];</span></span>
<span class="line"><span style="color:#24292e;">console.log(arr.join());   // Mike,John,Hexo</span></span>
<span class="line"><span style="color:#24292e;">console.log(arr.toString());   // Mike,John,Hexo</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">var arr1 = [1,10,&quot;Mike&quot;];</span></span>
<span class="line"><span style="color:#24292e;">var arr2 = [8,7,6];</span></span>
<span class="line"><span style="color:#24292e;">var cat = arr1.concat(arr2);</span></span>
<span class="line"><span style="color:#24292e;">console.log(cat);    // [1, 10, &quot;Mike&quot;, 8, 7, 6]</span></span>
<span class="line"><span style="color:#24292e;">var num = [1,2,3,4,5,6,7];</span></span>
<span class="line"><span style="color:#24292e;">var a = num.splice(3,2);     // 3 表示索引，2 表示删除 2 个</span></span>
<span class="line"><span style="color:#24292e;">console.log(num);      // [1, 2, 3, 6, 7]</span></span></code></pre></div><h4 id="可变函数" tabindex="-1">可变函数 <a class="header-anchor" href="#可变函数" aria-label="Permalink to &quot;可变函数&quot;">​</a></h4><p>不去引用数组中的某个元素，就能改变数组内容，这种函数称它为可变函数。</p><h6 id="push-和-unshift-、pop-和-shift" tabindex="-1">push() 和 unshift()、pop() 和 shift() <a class="header-anchor" href="#push-和-unshift-、pop-和-shift" aria-label="Permalink to &quot;push() 和 unshift()、pop() 和 shift()&quot;">​</a></h6><p>push() 方法可以在数组末尾添加元素，而 unshift() 方法可以在数组开头添加元素；相对应的，pop 可以删除数组末尾的元素，而 shift 删除数组的第一个元素。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var nums = [9,58,15,16,23];</span></span>
<span class="line"><span style="color:#e1e4e8;">nums.push(111);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(nums);   // 9, 58, 15, 16, 23, 111</span></span>
<span class="line"><span style="color:#e1e4e8;">nums.unshift(1);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(nums);   // 1, 9, 58, 15, 16, 23, 111</span></span>
<span class="line"><span style="color:#e1e4e8;">nums.pop();</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(nums);   // 1, 9, 58, 15, 16, 23</span></span>
<span class="line"><span style="color:#e1e4e8;">nums.shift();</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(nums);   // 9, 58, 15, 16, 23</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var nums = [9,58,15,16,23];</span></span>
<span class="line"><span style="color:#24292e;">nums.push(111);</span></span>
<span class="line"><span style="color:#24292e;">console.log(nums);   // 9, 58, 15, 16, 23, 111</span></span>
<span class="line"><span style="color:#24292e;">nums.unshift(1);</span></span>
<span class="line"><span style="color:#24292e;">console.log(nums);   // 1, 9, 58, 15, 16, 23, 111</span></span>
<span class="line"><span style="color:#24292e;">nums.pop();</span></span>
<span class="line"><span style="color:#24292e;">console.log(nums);   // 1, 9, 58, 15, 16, 23</span></span>
<span class="line"><span style="color:#24292e;">nums.shift();</span></span>
<span class="line"><span style="color:#24292e;">console.log(nums);   // 9, 58, 15, 16, 23</span></span></code></pre></div><h6 id="splice-、sort-、reverse" tabindex="-1">splice()、sort()、reverse() <a class="header-anchor" href="#splice-、sort-、reverse" aria-label="Permalink to &quot;splice()、sort()、reverse()&quot;">​</a></h6><p>前面提到的 splice 不仅可以用来删除元素，还可以添加元素进数组。用 sort 可以为数组排序，reverse 将数组内的元素翻转。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var num = [98,99,100,101];</span></span>
<span class="line"><span style="color:#e1e4e8;">num.splice(1,0,89);     // 1 表示索引，0 表示不删除元素，89 表示将 89 这个元素添加进数组</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(num);    // 98, 89, 99, 100, 101</span></span>
<span class="line"><span style="color:#e1e4e8;">num.reverse();</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(num);    //  101, 100, 99, 89, 98</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var num = [98,99,100,101];</span></span>
<span class="line"><span style="color:#24292e;">num.splice(1,0,89);     // 1 表示索引，0 表示不删除元素，89 表示将 89 这个元素添加进数组</span></span>
<span class="line"><span style="color:#24292e;">console.log(num);    // 98, 89, 99, 100, 101</span></span>
<span class="line"><span style="color:#24292e;">num.reverse();</span></span>
<span class="line"><span style="color:#24292e;">console.log(num);    //  101, 100, 99, 89, 98</span></span></code></pre></div><p>关于 sort 方法非常有意思，它只能对那些字符串类型的元素排列得比较准确，但如果是数字，结果就不那么令人满意了。看看例子.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var str = [&quot;hello&quot;,&quot;client&quot;,&quot;zero&quot;];</span></span>
<span class="line"><span style="color:#e1e4e8;">str.sort();</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(str);     // [&quot;client&quot;, &quot;hello&quot;, &quot;zero&quot;]  按照字母 a-z 排列准确</span></span>
<span class="line"><span style="color:#e1e4e8;">var nums = [1,200,51,66,88];</span></span>
<span class="line"><span style="color:#e1e4e8;">nums.sort();</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(nums);   // [1, 200, 51, 66, 88]  有趣的事情来了，因为 200 的 2 比 51 的 5 先，所以 200 排在 51 前头</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var str = [&quot;hello&quot;,&quot;client&quot;,&quot;zero&quot;];</span></span>
<span class="line"><span style="color:#24292e;">str.sort();</span></span>
<span class="line"><span style="color:#24292e;">console.log(str);     // [&quot;client&quot;, &quot;hello&quot;, &quot;zero&quot;]  按照字母 a-z 排列准确</span></span>
<span class="line"><span style="color:#24292e;">var nums = [1,200,51,66,88];</span></span>
<span class="line"><span style="color:#24292e;">nums.sort();</span></span>
<span class="line"><span style="color:#24292e;">console.log(nums);   // [1, 200, 51, 66, 88]  有趣的事情来了，因为 200 的 2 比 51 的 5 先，所以 200 排在 51 前头</span></span></code></pre></div><p>那如何解决这种排序的错误呢？方法就是在调用 sort() 的时候传入一个函数，该函数可以比较出大小。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function compare(num1,num2){</span></span>
<span class="line"><span style="color:#e1e4e8;">  return num1 - num2;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var nums = [3,1,2,100,4,200];</span></span>
<span class="line"><span style="color:#e1e4e8;">nums.sort(compare);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(nums);    // 1, 2, 3, 4, 100, 200</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function compare(num1,num2){</span></span>
<span class="line"><span style="color:#24292e;">  return num1 - num2;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var nums = [3,1,2,100,4,200];</span></span>
<span class="line"><span style="color:#24292e;">nums.sort(compare);</span></span>
<span class="line"><span style="color:#24292e;">console.log(nums);    // 1, 2, 3, 4, 100, 200</span></span></code></pre></div><p>可以看到，已经排序正确了，compare 函数就是利用了两数相减，如果结果为正，那么被减数大于减数，如果结果为 0，则两数相等，而如果结果为负，说明被减数小于减数。</p><h4 id="迭代器方法" tabindex="-1">迭代器方法 <a class="header-anchor" href="#迭代器方法" aria-label="Permalink to &quot;迭代器方法&quot;">​</a></h4><p>迭代函数通过对数组中的元素逐个应用，来操作返回相应的值。</p><h6 id="不返回新数组的-foreach-、every-、some-、reduce" tabindex="-1">不返回新数组的 forEach() 、every()、some()、reduce() <a class="header-anchor" href="#不返回新数组的-foreach-、every-、some-、reduce" aria-label="Permalink to &quot;不返回新数组的 forEach() 、every()、some()、reduce()&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 用 forEach 开方</span></span>
<span class="line"><span style="color:#e1e4e8;">function square(num) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(num,num*num);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var num = [1,2,3,4,5];</span></span>
<span class="line"><span style="color:#e1e4e8;">num.forEach(square);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(num);</span></span>
<span class="line"><span style="color:#e1e4e8;">/*  1 1</span></span>
<span class="line"><span style="color:#e1e4e8;">    2 4</span></span>
<span class="line"><span style="color:#e1e4e8;">    3 9</span></span>
<span class="line"><span style="color:#e1e4e8;">    4 16</span></span>
<span class="line"><span style="color:#e1e4e8;">    5 25</span></span>
<span class="line"><span style="color:#e1e4e8;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 用 forEach 开方</span></span>
<span class="line"><span style="color:#24292e;">function square(num) {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(num,num*num);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var num = [1,2,3,4,5];</span></span>
<span class="line"><span style="color:#24292e;">num.forEach(square);</span></span>
<span class="line"><span style="color:#24292e;">console.log(num);</span></span>
<span class="line"><span style="color:#24292e;">/*  1 1</span></span>
<span class="line"><span style="color:#24292e;">    2 4</span></span>
<span class="line"><span style="color:#24292e;">    3 9</span></span>
<span class="line"><span style="color:#24292e;">    4 16</span></span>
<span class="line"><span style="color:#24292e;">    5 25</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/*</span></span>
<span class="line"><span style="color:#e1e4e8;">every() 返回值为布尔类型，对于应用的所有元素，该函数返回 true，则该方法返回 true</span></span>
<span class="line"><span style="color:#e1e4e8;">*/</span></span>
<span class="line"><span style="color:#e1e4e8;">function isEven(num){</span></span>
<span class="line"><span style="color:#e1e4e8;">  return num % 2 == 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var num = [2,4,6,8,10];</span></span>
<span class="line"><span style="color:#e1e4e8;">var even = num.every(isEven);</span></span>
<span class="line"><span style="color:#e1e4e8;">if(even){</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&quot;所有的数字都是偶数&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}else{</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&quot;不是所有的数字都是偶数&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/*</span></span>
<span class="line"><span style="color:#24292e;">every() 返回值为布尔类型，对于应用的所有元素，该函数返回 true，则该方法返回 true</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">function isEven(num){</span></span>
<span class="line"><span style="color:#24292e;">  return num % 2 == 0;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var num = [2,4,6,8,10];</span></span>
<span class="line"><span style="color:#24292e;">var even = num.every(isEven);</span></span>
<span class="line"><span style="color:#24292e;">if(even){</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;所有的数字都是偶数&quot;);</span></span>
<span class="line"><span style="color:#24292e;">}else{</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;不是所有的数字都是偶数&quot;);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/*</span></span>
<span class="line"><span style="color:#e1e4e8;">some() 与 every() 的不同就是只要有一个元素使改函数返回 true ，那么该方法就返回 true</span></span>
<span class="line"><span style="color:#e1e4e8;">*/</span></span>
<span class="line"><span style="color:#e1e4e8;">function isEven(num){</span></span>
<span class="line"><span style="color:#e1e4e8;">  return num % 2 == 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var num = [1,2,3,4,5,6,7,8];</span></span>
<span class="line"><span style="color:#e1e4e8;">var someEven = num.some(isEven);</span></span>
<span class="line"><span style="color:#e1e4e8;">if(someEven){</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&quot;有些数字是偶数&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}else{</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&quot;没有数字是偶数&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/*</span></span>
<span class="line"><span style="color:#24292e;">some() 与 every() 的不同就是只要有一个元素使改函数返回 true ，那么该方法就返回 true</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">function isEven(num){</span></span>
<span class="line"><span style="color:#24292e;">  return num % 2 == 0;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var num = [1,2,3,4,5,6,7,8];</span></span>
<span class="line"><span style="color:#24292e;">var someEven = num.some(isEven);</span></span>
<span class="line"><span style="color:#24292e;">if(someEven){</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;有些数字是偶数&quot;);</span></span>
<span class="line"><span style="color:#24292e;">}else{</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;没有数字是偶数&quot;);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/*</span></span>
<span class="line"><span style="color:#e1e4e8;">reduce() 有两个功能，一是可以对数组元素进行求和，二是将数组元素连接成字符串。</span></span>
<span class="line"><span style="color:#e1e4e8;">*/</span></span>
<span class="line"><span style="color:#e1e4e8;">fucntion add(num1,num2){</span></span>
<span class="line"><span style="color:#e1e4e8;">  return num1 + num2;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var num = [1,2,3,4];</span></span>
<span class="line"><span style="color:#e1e4e8;">var sum = num.reduce(add);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(sum);    // 10</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function concat(str,i) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return str + i;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var words = [&quot;I am &quot;,&quot;a &quot;,&quot;coder &quot;];</span></span>
<span class="line"><span style="color:#e1e4e8;">var re = words.reduce(concat);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(re);     // I am a coder</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/*</span></span>
<span class="line"><span style="color:#24292e;">reduce() 有两个功能，一是可以对数组元素进行求和，二是将数组元素连接成字符串。</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">fucntion add(num1,num2){</span></span>
<span class="line"><span style="color:#24292e;">  return num1 + num2;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var num = [1,2,3,4];</span></span>
<span class="line"><span style="color:#24292e;">var sum = num.reduce(add);</span></span>
<span class="line"><span style="color:#24292e;">console.log(sum);    // 10</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function concat(str,i) {</span></span>
<span class="line"><span style="color:#24292e;">  return str + i;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var words = [&quot;I am &quot;,&quot;a &quot;,&quot;coder &quot;];</span></span>
<span class="line"><span style="color:#24292e;">var re = words.reduce(concat);</span></span>
<span class="line"><span style="color:#24292e;">console.log(re);     // I am a coder</span></span></code></pre></div><h6 id="返回新数组的-map-和-filter" tabindex="-1">返回新数组的 map() 和 filter() <a class="header-anchor" href="#返回新数组的-map-和-filter" aria-label="Permalink to &quot;返回新数组的 map() 和 filter()&quot;">​</a></h6><p>map 的作用与 forEach 是一样的，区别就是 map 函数返回的是一个新数组。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function addFive(grade){</span></span>
<span class="line"><span style="color:#e1e4e8;">  return grade += 5;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var grade = [77,82,88,95,90];</span></span>
<span class="line"><span style="color:#e1e4e8;">var result = grade.map(addFive);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(result);     // 82, 87, 93, 100, 95</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function addFive(grade){</span></span>
<span class="line"><span style="color:#24292e;">  return grade += 5;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var grade = [77,82,88,95,90];</span></span>
<span class="line"><span style="color:#24292e;">var result = grade.map(addFive);</span></span>
<span class="line"><span style="color:#24292e;">console.log(result);     // 82, 87, 93, 100, 95</span></span></code></pre></div><p>而 filter 和 every 相似，区别在于当所有的元素使改函数为 true 时，它并不返回布尔类型，而是返回一个新数组。下面这个例子十分有趣，它随机产生 10 个 0 到 100 的数字作为分数，然后把大于 60 的及格分数筛选出来。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function passing(num){</span></span>
<span class="line"><span style="color:#e1e4e8;">  return num &gt;= 60;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var grades = [];</span></span>
<span class="line"><span style="color:#e1e4e8;">for(var i = 0;i &lt; 11;i++){</span></span>
<span class="line"><span style="color:#e1e4e8;">  grade[i] = Math.floor(Math.random() * 101);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var pass = grades.filter(passing);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(&quot;随机产生的 10 个同学的分数为：&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(grades)；</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(&quot;及格的分数有：&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(pass)；</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function passing(num){</span></span>
<span class="line"><span style="color:#24292e;">  return num &gt;= 60;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var grades = [];</span></span>
<span class="line"><span style="color:#24292e;">for(var i = 0;i &lt; 11;i++){</span></span>
<span class="line"><span style="color:#24292e;">  grade[i] = Math.floor(Math.random() * 101);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var pass = grades.filter(passing);</span></span>
<span class="line"><span style="color:#24292e;">console.log(&quot;随机产生的 10 个同学的分数为：&quot;);</span></span>
<span class="line"><span style="color:#24292e;">console.log(grades)；</span></span>
<span class="line"><span style="color:#24292e;">console.log(&quot;及格的分数有：&quot;);</span></span>
<span class="line"><span style="color:#24292e;">console.log(pass)；</span></span></code></pre></div><p>上述代码的输出结果为</p><blockquote><p>随机产生的 10 个同学的分数为： 21, 4, 89, 45, 5, 51, 71, 7, 46, 53, 47 及格的分数有： 89, 71</p></blockquote><h4 id="二维数组" tabindex="-1">二维数组 <a class="header-anchor" href="#二维数组" aria-label="Permalink to &quot;二维数组&quot;">​</a></h4><p>JavaScript 可以通过在数组里在嵌套一个数组来形成二维数组。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var grades = [</span></span>
<span class="line"><span style="color:#e1e4e8;">  [88,86,82],</span></span>
<span class="line"><span style="color:#e1e4e8;">  [91,82,83],</span></span>
<span class="line"><span style="color:#e1e4e8;">  [77,72,79],</span></span>
<span class="line"><span style="color:#e1e4e8;">  [86,80,82]</span></span>
<span class="line"><span style="color:#e1e4e8;">];</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(grades[1][2]);    // 83</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var grades = [</span></span>
<span class="line"><span style="color:#24292e;">  [88,86,82],</span></span>
<span class="line"><span style="color:#24292e;">  [91,82,83],</span></span>
<span class="line"><span style="color:#24292e;">  [77,72,79],</span></span>
<span class="line"><span style="color:#24292e;">  [86,80,82]</span></span>
<span class="line"><span style="color:#24292e;">];</span></span>
<span class="line"><span style="color:#24292e;">console.log(grades[1][2]);    // 83</span></span></code></pre></div><h4 id="处理二维数组" tabindex="-1">处理二维数组 <a class="header-anchor" href="#处理二维数组" aria-label="Permalink to &quot;处理二维数组&quot;">​</a></h4><p>对于二维数组的处理可以分为两种，一种按列访问，一种是按行访问。 按列访问，外层循环对应行，内层循环对应列。例如，上述的数组，每一行对应一个学生三门科目的成绩记录，可以通过相加所有成绩，然后除以科目数来得到该生的平均成绩。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var grades = [</span></span>
<span class="line"><span style="color:#e1e4e8;">  [88,86,82],</span></span>
<span class="line"><span style="color:#e1e4e8;">  [91,82,83],</span></span>
<span class="line"><span style="color:#e1e4e8;">  [77,72,79],</span></span>
<span class="line"><span style="color:#e1e4e8;">  [86,80,82]</span></span>
<span class="line"><span style="color:#e1e4e8;">];</span></span>
<span class="line"><span style="color:#e1e4e8;">var total = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">var average = 0.0;</span></span>
<span class="line"><span style="color:#e1e4e8;">for(var row = 0;row&lt;grades.length;++row){</span></span>
<span class="line"><span style="color:#e1e4e8;">  for(var col = 0;col&lt;grades[row].length;++col){</span></span>
<span class="line"><span style="color:#e1e4e8;">    total += grades[row][col];</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  average = total/grades[row].length;</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&quot;student &quot;+parseInt(row+1)+&quot; average: &quot;+average.toFixed(2));   // toFixed 表示按照 2 位来保留小数</span></span>
<span class="line"><span style="color:#e1e4e8;">  total = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">  average = 0.0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var grades = [</span></span>
<span class="line"><span style="color:#24292e;">  [88,86,82],</span></span>
<span class="line"><span style="color:#24292e;">  [91,82,83],</span></span>
<span class="line"><span style="color:#24292e;">  [77,72,79],</span></span>
<span class="line"><span style="color:#24292e;">  [86,80,82]</span></span>
<span class="line"><span style="color:#24292e;">];</span></span>
<span class="line"><span style="color:#24292e;">var total = 0;</span></span>
<span class="line"><span style="color:#24292e;">var average = 0.0;</span></span>
<span class="line"><span style="color:#24292e;">for(var row = 0;row&lt;grades.length;++row){</span></span>
<span class="line"><span style="color:#24292e;">  for(var col = 0;col&lt;grades[row].length;++col){</span></span>
<span class="line"><span style="color:#24292e;">    total += grades[row][col];</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  average = total/grades[row].length;</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;student &quot;+parseInt(row+1)+&quot; average: &quot;+average.toFixed(2));   // toFixed 表示按照 2 位来保留小数</span></span>
<span class="line"><span style="color:#24292e;">  total = 0;</span></span>
<span class="line"><span style="color:#24292e;">  average = 0.0;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>上述代码的输出结果为</p><blockquote><p>student 1 average: 85.33 student 2 average: 85.33 student 3 average: 76.00 student 4 average: 82.67</p></blockquote><p>对于按行访问，则外层循环对应列，内层循环对应行，例如还是上述数组，现在的数组表示一个学生三场考试四门科目的各科分数，我们来求每场考试的平均成绩</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var grades = [</span></span>
<span class="line"><span style="color:#e1e4e8;">  [88,86,82],</span></span>
<span class="line"><span style="color:#e1e4e8;">  [91,82,83],</span></span>
<span class="line"><span style="color:#e1e4e8;">  [77,72,79],</span></span>
<span class="line"><span style="color:#e1e4e8;">  [86,80,82]</span></span>
<span class="line"><span style="color:#e1e4e8;">];</span></span>
<span class="line"><span style="color:#e1e4e8;">var total = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">var average = 0.0;</span></span>
<span class="line"><span style="color:#e1e4e8;">//这里假设每场考试的科目都一样，所以可以通过grades[0].length来获取考试数量</span></span>
<span class="line"><span style="color:#e1e4e8;">for(var col = 0;col &lt;grades[0].length;++col ){</span></span>
<span class="line"><span style="color:#e1e4e8;">  for(var row= 0;row&lt;grades.length;++row){</span></span>
<span class="line"><span style="color:#e1e4e8;">    total += grades[row][col];</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  average = total/grades.length;</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&quot;exam &quot;+parseInt(col +1)+&quot; average: &quot;+average.toFixed(2));</span></span>
<span class="line"><span style="color:#e1e4e8;">  total = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">  average = 0.0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var grades = [</span></span>
<span class="line"><span style="color:#24292e;">  [88,86,82],</span></span>
<span class="line"><span style="color:#24292e;">  [91,82,83],</span></span>
<span class="line"><span style="color:#24292e;">  [77,72,79],</span></span>
<span class="line"><span style="color:#24292e;">  [86,80,82]</span></span>
<span class="line"><span style="color:#24292e;">];</span></span>
<span class="line"><span style="color:#24292e;">var total = 0;</span></span>
<span class="line"><span style="color:#24292e;">var average = 0.0;</span></span>
<span class="line"><span style="color:#24292e;">//这里假设每场考试的科目都一样，所以可以通过grades[0].length来获取考试数量</span></span>
<span class="line"><span style="color:#24292e;">for(var col = 0;col &lt;grades[0].length;++col ){</span></span>
<span class="line"><span style="color:#24292e;">  for(var row= 0;row&lt;grades.length;++row){</span></span>
<span class="line"><span style="color:#24292e;">    total += grades[row][col];</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  average = total/grades.length;</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;exam &quot;+parseInt(col +1)+&quot; average: &quot;+average.toFixed(2));</span></span>
<span class="line"><span style="color:#24292e;">  total = 0;</span></span>
<span class="line"><span style="color:#24292e;">  average = 0.0;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>输出结果为：</p><blockquote><p>exam 1 average: 85.50 exam 2 average: 80.00 exam 3 average: 81.50</p></blockquote><p>其实只要调整 for 循环的顺序就可以控制是按行还是按列来输出，此外，JavaScript 还可以处理一些参差不齐的数组，比如一个二维数组中的数组，有的是两个元素，有的是四个元素，并不是都相同，在这种情况下，JavaScript 依然可以处理运行而不报错，这是因为不管多或少，都可以通过 length 属性来计算。</p><h4 id="对象数组" tabindex="-1">对象数组 <a class="header-anchor" href="#对象数组" aria-label="Permalink to &quot;对象数组&quot;">​</a></h4><p>如果你有阅读到这里，你应该可以发现上面的所有例子里数据类型都是基本数据类型，不是数字就是字符串。对象数组，顾名思义，就是数组里面的元素可以是对象，这个与 java 的语法很相似，基本上所有的编程语言都是相通的。看看下面这个例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function point(x,y){</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.x = x;</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.y = y;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">function show(arr){</span></span>
<span class="line"><span style="color:#e1e4e8;">  for(var i=0;i&lt;arr.length;i++){</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(arr[i].x + &quot;, &quot;+arr[i].y);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var p1 = new Point(1,2);</span></span>
<span class="line"><span style="color:#e1e4e8;">var p2 = new Point(2,4);</span></span>
<span class="line"><span style="color:#e1e4e8;">var p3 = new Point(8,1);</span></span>
<span class="line"><span style="color:#e1e4e8;">var p4 = new Point(2,9);</span></span>
<span class="line"><span style="color:#e1e4e8;">var point = [p1,p2,p3,p4];</span></span>
<span class="line"><span style="color:#e1e4e8;">for(var i=0;i&lt;point.lengh;i++){</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&quot;Point &quot;+parseInt(i+1)+&quot;: &quot;+point[i].x+&quot;, &quot;+point[i].y);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function point(x,y){</span></span>
<span class="line"><span style="color:#24292e;">  this.x = x;</span></span>
<span class="line"><span style="color:#24292e;">  this.y = y;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">function show(arr){</span></span>
<span class="line"><span style="color:#24292e;">  for(var i=0;i&lt;arr.length;i++){</span></span>
<span class="line"><span style="color:#24292e;">    console.log(arr[i].x + &quot;, &quot;+arr[i].y);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var p1 = new Point(1,2);</span></span>
<span class="line"><span style="color:#24292e;">var p2 = new Point(2,4);</span></span>
<span class="line"><span style="color:#24292e;">var p3 = new Point(8,1);</span></span>
<span class="line"><span style="color:#24292e;">var p4 = new Point(2,9);</span></span>
<span class="line"><span style="color:#24292e;">var point = [p1,p2,p3,p4];</span></span>
<span class="line"><span style="color:#24292e;">for(var i=0;i&lt;point.lengh;i++){</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;Point &quot;+parseInt(i+1)+&quot;: &quot;+point[i].x+&quot;, &quot;+point[i].y);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>上述程序的输出结果为：</p><blockquote><p>Point 1: 1, 2 Point 2: 2, 4 Point 3: 8, 1 Point 4: 2, 9</p></blockquote><p>也可以用之前的 push() 等操作方法来操作对象数组</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var p5 = new Point(11,13);</span></span>
<span class="line"><span style="color:#e1e4e8;">point.push(p5);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(&quot;添加了 p5 后：&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">show(point);</span></span>
<span class="line"><span style="color:#e1e4e8;">point.shift();</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(&quot;删除第一个元素后：&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">show(point);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var p5 = new Point(11,13);</span></span>
<span class="line"><span style="color:#24292e;">point.push(p5);</span></span>
<span class="line"><span style="color:#24292e;">console.log(&quot;添加了 p5 后：&quot;);</span></span>
<span class="line"><span style="color:#24292e;">show(point);</span></span>
<span class="line"><span style="color:#24292e;">point.shift();</span></span>
<span class="line"><span style="color:#24292e;">console.log(&quot;删除第一个元素后：&quot;)</span></span>
<span class="line"><span style="color:#24292e;">show(point);</span></span></code></pre></div><p>输出结果为：</p><blockquote><p>添加了 p5 后： 1,2 2,4 8,1 2,9 11,13 删除第一个元素后： 2,4 8,1 2,9 11,13</p></blockquote>`,64);function u(n,y,d,g,v,h){return e(),l("div",null,[r,s("p",null,p(n.$frontmatter.description),1),i])}const k=a(t,[["render",u]]);export{q as __pageData,k as default};
