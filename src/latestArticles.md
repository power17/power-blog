<script setup>
 
import { data as posts } from './posts.data.js'
import { useData } from 'vitepress'
const { frontmatter } = useData()
console.log(posts)
</script>
<style lang="sass">
.title
    font-family: PT Serif,Serif
    font-size: 28px
    border-bottom: 0
    cursor: pointer
    color: #000
    transition: all .2s
a:link
    text-decoration: none
a:hover
    text-decoration: underline
    color: #d05dd2!important       
</style>
<pre v-for="(item, index) in posts" :key="index">
  {{item && item.frontmatter?.timer}}
</pre>
<article>
  <header class="title">
    <a href="/posts/2023/09/19/edge117-amd-hevc-bugfix/" class="nav-link">
      解决 Edge 117 浏览器视频变色
    </a>  
  </header>
  <p>仔细观察颜色，“变色”其实是“反色”效果

Bug 触发条件：Win10 系统 + Edge 117 浏览器 + AMD 集成显卡 + HEVC 视频流

Edge&nbsp;117&nbsp;如果使用&nbsp;AMD&nbsp;集成显卡，观看视频时可能出现视频反色现象，在 bilibili（哔哩哔哩） 直播中发现。

通过以下设置，配置 Edge&nbsp;使用英伟达独立显卡，可解决反色问题。

如 ...</p>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<time pubdate="" itemprop="datePublished" datetime="2023-08-19T00:00:00.000Z">
Sat Aug 19 2023
</time>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line></svg>
<span href="/tag/WebAV" class="">
WebAV
</span>

</article>
