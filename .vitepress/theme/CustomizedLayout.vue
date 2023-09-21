<script setup>
import DefaultTheme from 'vitepress/theme';
import { init } from '@waline/client';
import { useData, useRoute } from 'vitepress';
import { onMounted, watch, nextTick, computed, ref } from 'vue';
const { Layout } = DefaultTheme;
const vpData = useData();
const route = useRoute();
console.log(vpData, route);
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
      serverURL: 'https://www.power17.xyz',
      dark: vpData.isDark.value,
      locale: {
        // placeholder: await (await fetch('https://v1.jinrishici.com/rensheng.txt')).text(),
        sofa: '空空如也。',
      },
      pageview: true,
      comment: true,
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
