import { defineConfig } from 'vitepress'
export default defineConfig((config) => {
  let base = process.env.BUILD_TYPE === 'git' ? '/power-blog' : '' 

  return {
    title: "疯世权王",
    description: "记录技术的点点滴滴",
    head: [
      // 图标配置
      ['link', { rel: 'icon',type:"image/x-icon", href: base + '/logo.svg' }],
   
    ],
    srcDir: 'src',
  
    lastUpdated: true,
    base: base,
    themeConfig: {
      // externalLinkIcon: true,
      logo: '/logo.png',
      search: {
        provider: 'local'
      },
      nav: [
        
        { text: '首页', link: '/' },
        { text: '前端', link: '/frontend/Vite' },
        { text: '后端', link: '/backend/node' },
        { text: '算法', link: '/algorithm/Array'},
        { text: '数据库', link: '/databases/Mysql'},
        { text: '工程', link: '/engineering/Git' },
        { text: 'mac', link: '/mac/macEvironment'},
        { text: 'window', link: '/window/Command.md'},
        { text: '书籍推荐', link: '/book/Recommend.md'},
        { text: '问题（坑）', link: '/pit/Problem.md'},
       
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
            text: '源码系列',
            items: [
              { text: 'vite源码', link: '/frontend/Vite' },
              { text: 'vite插件', link: '/frontend/VitePlugin' },
              { text: '前端工程化之路', link: '/frontend/Engineering' },
              
             
            ]
          },
          {
            
          }
        ], 
        '/backend/': [
          {
            text: 'node系列',
            items: [
              { text: '开发node应用', link: '/backend/Node' },
              { text: 'Nest精髓', link: '/backend/Nest' },
            ]
          },
          {
            
          }
        ],  
        '/databases/': [
          {
            text: '数据库',
            items: [
              { text: 'mysql基本操作', link: '/databases/Mysql' },
             
            ]
          },
         ],
          '/engineering/': [
          {
            text: '工程',
            items: [
              { text: 'git基本操作', link: '/engineering/Git.md' },
              { text: 'esbuild基本使用', link: '/engineering/esbuild' },
              { text: 'webpack基本使用', link: '/engineering/Webpack' },  
              
            ]
          },
        ],
        '/mac/': [
          {
            text: 'mac配置',
            items: [
              { text: 'mac配置环境', link: '/mac/macEvironment' },
              { text: 'VscodeDebugger', link: '/mac/VscodeDebugger' },
              { text: 'linux命令', link: '/mac/linuxCommand' },
             
            ]
          },
         ],
        // book/Recommend.md
         '/book/': [
            {
            text: '书籍推荐',
            items: [
              { text: '计算机', link: '/book/Recommend' },
              { text: '收藏夹', link: '/book/Favorites' },
             
             
            ]
          },
         ],
            '/pit/': [
            {
            text: '问题记录',
            items: [
              { text: 'window', link: '/pit/Problem' },
              { text: '前端', link: '/pit/Frontend' },
      
             
             
            ]
          },
        ]
       }, 
  
      
  
      socialLinks: [
        { icon: 'github', link: 'https://github.com/power17/power-learn' }
      ]
    }
  }
})
