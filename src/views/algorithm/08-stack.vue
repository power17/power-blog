<template>
  <h2>栈</h2>
</template>
<script setup>
// 基于链表实现栈

// 基于链表栈实现浏览器
const browser = () => {
  class SampleBrowser {
    constructor() {}
  }
  const browser = new SampleBrowser();
  browser.pushNormal('www.google.com');
  browser.pushNormal('www.baidu.com');
  browser.pushNormal('www.github.com');
  // 后退
  browser.back();
  browser.back();
  browser.front();
  browser.pushNormal('www.new.com');
};
// Test
</script>
