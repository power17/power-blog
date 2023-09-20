import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig((config) => {
  let base = config.mode === 'development' ? '/' : '/power-blog' 

  return {
    title: "power的博客",
    description: "记录技术的点点滴滴",
    srcDir: 'src',
    lastUpdated: true,
    base: base,
    
    themeConfig: {
     
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: '首页', link: '/' },
        { text: '前端', link: '/algorithm/Array' },
        { text: '算法', link: '/algorithm/Array' }
       
      ],
  
      sidebar: [
        {
          text: '数据结构',
          items: [
            { text: '数组', link: '/algorithm/Array' },
            { text: '链表', link: '/algorithm/LinkedList' }
          ]
        },
        {
          text: '算法',
          items: [
            { text: '排序', link: '/algorithm/Sort'},
          ]
        }
      ],
  
      socialLinks: [
        { icon: 'github', link: 'https://github.com/power17/power-learn' }
      ]
    }
  }
})
