<script setup>
 
import { data as posts } from './posts.data.js'
import { useData } from 'vitepress'
const { frontmatter } = useData()

</script>
<style lang="sass">
article
  border-bottom: 1px solid rgba(0,0,0,.05)
  padding-bottom: 20px 
  margin-bottom: 20px
.title
    font-family: PT Serif,Serif
    font-size: 28px
    border-bottom: 0
    cursor: pointer
    transition: all .2s
    a
        color: #000!important
        font-weight: bold
a:link
    text-decoration: none
a:hover
    text-decoration: underline
    color: #d05dd2!important   
.description
    font-size: 14px
    color: rgba(0,0,0,.54)
    font-weight: 200   
    word-wrap: break-word
    text-overflow: ellipsis
    // overflow: hidden
    // display: -webkit-box
.meta
    color: rgba(0,0,0,.54)
    font-weight: 200
    display: flex
    align-items: center    
    font-size: 14px
.posts-time-svg
    margin-right: 5px
    width: 14px
    height: 14px       
</style>

<article v-for="(item, index) in posts" :key="index">

  <div v-if="item.frontmatter?.title">
    <header class="title">
      <a :href="item.frontmatter.link" class="nav-link">
        {{item.frontmatter?.title}}
      </a>
    </header>
    <p class="description" >
        {{ item.frontmatter?.description }}
    </p>
    <div class="meta">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="posts-time-svg">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>
        {{new Date(Date.parse(String(item.frontmatter?.date).replace('Z', '')+'+08:00')).toLocaleString('chinese',{ hour12: false })}}
        </span>
    </div>
    <div class="meta">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="posts-time-svg">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
          <line x1="7" y1="7" x2="7" y2="7"></line>
        </svg>
        <span span href="/tag/WebAV" class="">
          {{item && item.frontmatter?.tags.join()}}
        </span>
    </div>

  </div>

</article>
