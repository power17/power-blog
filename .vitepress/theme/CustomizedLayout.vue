<script setup>
import DefaultTheme from 'vitepress/theme';
import { init } from '@waline/client';
import { useData, useRoute } from 'vitepress';
import { onMounted, watch, nextTick, computed, ref } from 'vue';

const { Layout } = DefaultTheme;
const vpData = useData();
const route = useRoute();

onMounted(() => {
  nextTick(() => {
    initWaline();
  });
});
watch(route, () => {
  nextTick(() => {
    initWaline();
  });
});
let walineInstance = null;

async function initWaline() {
  const walineElem = document.querySelector('#waline');
  if (walineElem) {
    walineInstance = init({
      el: '#waline',
      serverURL: 'https://power-blog-waline-x3dk.vercel.app/',
      dark: vpData.isDark.value,
      locale: {
        // placeholder: await (await fetch('https://v1.jinrishici.com/rensheng.txt')).text(),
        sofa: '空空如也。',
      },
      pageview: true, //浏览统计
      comment: true, //评论数统计
      reaction: true, // 开启用户表达对文章内容反应
    });
  }
}
</script>
<template>
  <Layout>
    <template #doc-footer-before>
      <div id="waline"></div>
    </template>
  </Layout>
  <footer class="footer">
    <div>
      <p>
        Copyright © 2023 ICP证号：<a href="http://beian.miit.gov.cn" target="_blank" rel="nofollow noopener noreferrer"
          >粤ICP备2023089812号</a
        >
      </p>
    </div>
  </footer>
</template>
<style lang="scss">
.footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d3236;
  z-index: 9999;
  height: 50px;
  position: absolute;
  p {
    color: #ccc;
    opacity: 0.8;
  }
}
</style>
