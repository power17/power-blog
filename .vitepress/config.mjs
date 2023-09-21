import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig((config) => {
  let base = config.mode === 'development' ? '/' : '/power-blog' 

  return {
    title: "疯世权王",
    description: "记录技术的点点滴滴",
    head: [
      // 图标配置
      ['link', { rel: 'icon', href: '/logo.png' }],
    ],
    srcDir: 'src',
    lastUpdated: {
      text: '最后更新时间', 
    },
    base: base,
    themeConfig: {
      // externalLinkIcon: true,
      logo: '/logo.png',
      search: {
        provider: 'local'
      },
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        
        { text: '首页', link: '/' },
        { text: '前端', link: '/frontend/Vite' },
        { text: '算法', link: '/algorithm/Array'}
       
      ],
       sidebar: {
        '/algorithm/': [
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
        '/frontend/': [
          {
            text: '前端',
            items: [
              { text: 'vite源码', link: '/algorithm/Vite' },
             
            ]
          },
          {
            
          }
        ]  
       }, 
  
      
  
      socialLinks: [
        { icon: 'github', link: 'https://github.com/power17/power-learn' }
      ]
    }
  }
})
