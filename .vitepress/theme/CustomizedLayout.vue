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
      // serverURL: 'https://mafumia7.api.lncldglobal.com',
      // serverURL: 'https://power-blog-waline-n7qv6vp5u-power17.vercel.app/',
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
</template>
