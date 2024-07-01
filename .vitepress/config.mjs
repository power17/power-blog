import { defineConfig } from 'vitepress';
export default defineConfig((config) => {
  let base = process.env.BUILD_TYPE === 'git' ? '/power-blog' : '';

  return {
    title: '疯世权王',
    description: '记录技术的点点滴滴',
    head: [
      // 图标配置
      ['link', { rel: 'icon', type: 'image/x-icon', href: base + '/logo.svg' }],
    ],
    srcDir: 'src',

    lastUpdated: true,
    base: base,
    themeConfig: {
      // externalLinkIcon: true,
      logo: '/logo.png',
      search: {
        provider: 'local',
      },
      nav: [
        { text: '首页', link: '/' },
        {
          text: '随记',
          items: [
            {
              text: '博文',
              link: '/blog/System.md',
            },
          ],
        },
        {
          text: '前端',
          items: [
            {
              text: 'web',
              link: '/frontend/Vscode',
            },
          ],
        },
        { text: '后端', items: [{ text: 'node', link: '/backend/Node' }] },
        { text: '算法', link: '/algorithm/Array' },
        { text: '数据库', link: '/databases/Mysql' },
        { text: '工程', link: '/engineering/Git' },
        { text: 'mac', link: '/mac/macEvironment' },
        { text: 'window', link: '/window/Command.md' },
        { text: '收藏', link: '/book/Recommend.md' },
        { text: '问题（坑）', link: '/pit/Problem.md' },
      ],
      sidebar: {
        '/blog/': [
          {
            text: '计算级',
            items: [{ text: 'helloOS系统启动初始化', link: '/blog/System' }],
          },
        ],
        '/algorithm/': [
          {
            text: '数据结构',
            items: [
              { text: '数组', link: '/algorithm/Array' },
              { text: '链表', link: '/algorithm/LinkedList' },
            ],
          },
          {
            text: '算法',
            items: [{ text: '排序', link: '/algorithm/Sort' }],
          },
        ],
        '/frontend/': [
          {
            text: '源码系列',
            items: [{ text: 'vscode调试', link: '/frontend/Vscode' }],
          },
          {
            text: 'css',
            items: [{ text: '重学css', link: '/frontend/Css' }],
          },
        ],
        '/backend/': [
          {
            text: 'node系列',
            items: [
              { text: '开发node应用', link: '/backend/Node' },
              { text: 'Nest精髓', link: '/backend/Nest' },
            ],
          },
          {},
        ],
        '/databases/': [
          {
            text: '数据库',
            items: [{ text: 'mysql基本操作', link: '/databases/Mysql' }],
          },
        ],
        '/engineering/': [
          {
            text: '工程',
            items: [
              { text: 'git基本操作', link: '/engineering/Git.md' },
              { text: 'esbuild基本使用', link: '/engineering/esbuild' },

              { text: 'rollup使用', link: '/engineering/rollup' },
              { text: 'webpack基本使用', link: '/engineering/Webpack' },
              { text: 'vite基本使用', link: '/engineering/Engineering' },
              { text: 'vite插件', link: '/engineering/VitePlugin' },
            ],
          },
        ],
        '/mac/': [
          {
            text: 'mac配置',
            items: [
              { text: 'mac配置环境', link: '/mac/macEvironment' },
              { text: 'VscodeDebugger', link: '/mac/VscodeDebugger' },
              { text: 'linux命令', link: '/mac/linuxCommand' },
            ],
          },
        ],
        '/window/': [
          {
            text: 'window系统',
            items: [{ text: 'window命令行', link: '/window/Command' }],
          },
        ],
        // book/Recommend.md
        '/book/': [
          {
            text: '书籍推荐',
            items: [
              { text: '计算机', link: '/book/Recommend' },
              { text: '收藏夹', link: '/book/Favorites' },
              { text: '谷歌搜索技术', link: '/book/Search' },
              { text: 'Dns泄漏配置', link: '/book/DnsLeak' },
            ],
          },
        ],
        '/pit/': [
          {
            text: '问题记录',
            items: [
              { text: 'window', link: '/pit/Problem' },
              { text: '前端', link: '/pit/Frontend' },
            ],
          },
        ],
      },

      socialLinks: [{ icon: 'github', link: 'https://github.com/power17/power-learn' }],
    },
  };
});
