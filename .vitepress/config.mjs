import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "power的博客",
  description: "记录技术的点点滴滴",
  srcDir: 'src',
  lastUpdated: true,
  base: "",
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '算法', link: '/algorithm/Array' }
    ],

    sidebar: [
      {
        text: '算法',
        items: [
          { text: '数组', link: '/algorithm/Array' },
          { text: '链表', link: '/algorithm/LinkedList' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/power17/power-learn' }
    ]
  }
})
